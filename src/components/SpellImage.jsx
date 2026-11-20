"use client";
import { drawSpellImage, IMAGE_SIZES, pad, spellLink } from "@/common/spells";
import styles from "@/styles/components/SpellImage.module.scss";
import { useEffect, useRef, useState } from "react";

const toBlob = (canvas) => new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

// Turns a spell into a post or story image the visitor can download or hand straight to the share sheet.
export default function SpellImage({ spell, onClose, onSaved }) {
    const dialogRef = useRef(null);
    const canvasRef = useRef(null);
    const [size, setSize] = useState("post");

    useEffect(() => {
        const dialog = dialogRef.current;
        if (spell && !dialog.open) {
            setSize("post");
            dialog.showModal();
        }
        if (!spell && dialog.open) dialog.close();
    }, [spell]);

    useEffect(() => {
        if (spell) drawSpellImage(canvasRef.current, spell, size);
    }, [spell, size]);

    const fileName = () => `lafzon-ka-jadugar-${pad(spell.no)}-${size}.png`;

    const download = async () => {
        const url = URL.createObjectURL(await toBlob(canvasRef.current));
        const link = Object.assign(document.createElement("a"), { href: url, download: fileName() });
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        onSaved();
    };

    const share = async () => {
        const file = new File([await toBlob(canvasRef.current)], fileName(), { type: "image/png" });
        if (navigator.canShare?.({ files: [file] })) {
            try {
                await navigator.share({ files: [file], text: `— Lafzon Ka Jadugar ✦ ${spellLink(spell)}` });
            } catch {
                // The visitor closed the share sheet.
            }
        } else {
            download();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            className={styles.dialog}
            aria-labelledby="spell-image-title"
            onClose={onClose}
            onClick={(event) => event.target === dialogRef.current && dialogRef.current.close()}
        >
            <div className={styles.head}>
                <h2 id="spell-image-title">Share as image</h2>
                <button type="button" className={styles.close} onClick={() => dialogRef.current.close()} aria-label="Close">
                    ×
                </button>
            </div>
            <div className={styles.body}>
                <div className={styles.preview}>
                    <canvas ref={canvasRef} width="1080" height="1350" aria-label="Preview of the spell as an image" />
                </div>
                <div className={styles.row}>
                    <div className={styles.seg} role="group" aria-label="Size">
                        {Object.entries(IMAGE_SIZES).map(([key, { label }]) => (
                            <button type="button" key={key} aria-pressed={size === key} onClick={() => setSize(key)}>
                                {label}
                            </button>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <button type="button" className={styles.subtle} onClick={download}>
                            Download
                        </button>
                        <button type="button" className={styles.primary} onClick={share}>
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    );
}
