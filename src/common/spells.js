import { tiroHindi, verseFont as verse } from "@/common/poetryFonts";
import { Social } from "@/constants/Social";

export const INSTAGRAM = Social.LajzonKaJadugar;
export const HANDLE = "@_lafzon.ka.jadugar_";

export const pad = (no) => String(no).padStart(3, "0");
export const spellId = (spell) => `spell-${pad(spell.no)}`;
export const spellText = (spell) => spell.description.join("\n");

// Built from the current address so the link works wherever the site is hosted.
export function spellLink(spell) {
    const { origin, pathname } = window.location;
    return `${origin}${pathname}#${spellId(spell)}`;
}

export const withCredit = (spell) => `${spellText(spell)}\n\n— Lafzon Ka Jadugar ✦ ${spellLink(spell)}`;

export async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        // Older browsers and non-secure origins: copy through a hidden textarea.
        const area = Object.assign(document.createElement("textarea"), { value: text });
        area.style.cssText = "position:fixed;opacity:0";
        document.body.appendChild(area);
        area.select();
        const copied = document.execCommand("copy");
        area.remove();
        return copied;
    }
}

export const IMAGE_SIZES = {
    post: { width: 1080, height: 1350, label: "Post 4:5" },
    story: { width: 1080, height: 1920, label: "Story 9:16" },
};

function wrapLine(ctx, line, maxWidth) {
    const rows = [];
    let row = "";
    for (const word of line.split(/\s+/)) {
        const next = row ? `${row} ${word}` : word;
        if (row && ctx.measureText(next).width > maxWidth) {
            rows.push(row);
            row = word;
        } else {
            row = next;
        }
    }
    if (row) rows.push(row);
    return rows;
}

const display = "'Coolvetica Rg', 'Helvetica Neue', Arial, sans-serif";

// Canvas only uses fonts that have finished loading, and the page may not have needed some of them yet.
async function loadFonts(spell) {
    const sample = spellText(spell).slice(0, 200) || "A";
    await Promise.all([
        document.fonts.load(`40px ${verse}`, sample),
        document.fonts.load(`40px ${tiroHindi.style.fontFamily}`, "अ"),
        document.fonts.load(`40px ${display}`, "“"),
    ]).catch(() => {});
}

// Draws the shareable card: just the verse, sized to fit inside the gold frame.
export async function drawSpellImage(canvas, spell, sizeKey) {
    await loadFonts(spell);
    const { width: W, height: H } = IMAGE_SIZES[sizeKey];
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");

    const background = ctx.createLinearGradient(0, 0, 0, H);
    background.addColorStop(0, "#0a192f");
    background.addColorStop(1, "#020c1b");
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, W, H);
    for (const [x, y, radius, color] of [
        [0.8, 0.1, 0.8, "246,205,41,0.22"],
        [0.1, 0.9, 0.7, "253,9,83,0.18"],
    ]) {
        const glow = ctx.createRadialGradient(W * x, H * y, 0, W * x, H * y, W * radius);
        glow.addColorStop(0, `rgba(${color})`);
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, W, H);
    }
    ctx.strokeStyle = "rgba(246,205,41,0.55)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(56, 56, W - 112, H - 112, 36);
    ctx.stroke();

    ctx.textBaseline = "alphabetic";

    // Shrink the verse until every wrapped line fits inside the frame.
    const top = 230;
    const bottom = H - 170;
    const maxWidth = W - 220;
    let size = 60;
    let rows = [];
    for (; size >= 24; size -= 2) {
        ctx.font = `${size}px ${verse}`;
        rows = spell.description.flatMap((line, index) => [...(index ? [""] : []), ...wrapLine(ctx, line, maxWidth)]);
        if (rows.length * size * 1.45 <= bottom - top) break;
    }
    ctx.font = `160px ${display}`;
    ctx.fillStyle = "rgba(246,205,41,0.7)";
    ctx.fillText("“", 96, 240);

    ctx.font = `${size}px ${verse}`;
    ctx.fillStyle = "#e6f1ff";
    const lineHeight = size * 1.45;
    let y = top + Math.max(0, (bottom - top - rows.length * lineHeight) / 2) + size;
    for (const row of rows) {
        ctx.fillText(row, 110, y);
        y += lineHeight;
    }
}
