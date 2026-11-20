import { useStageReady } from '@/common/stage';
import { useEffect, useState } from 'react';
import styles from "../styles/components/TypingEffect.module.scss";

const TypingEffect = ({ htmlString, typingSpeed = 100, skipTyping = false }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [typingComplete, setTypingComplete] = useState(false);
    const ready = useStageReady();

    useEffect(() => {
        if (skipTyping) {
            setDisplayedText(htmlString);
            setTypingComplete(true);
            return undefined;
        }
        setDisplayedText('');
        setTypingComplete(false);
        if (!ready) return undefined;

        // One update per frame (not per character) keeps the main thread free for the entrances
        // running alongside; browsers clamped the old timer to 4ms, which set the pace people know.
        const perChar = Math.max(typingSpeed, 4);
        const startedAt = performance.now();
        let shown = 0;
        let frame = 0;
        const step = (now) => {
            let length = Math.min(htmlString.length, Math.floor((now - startedAt) / perChar) + 1);
            // Never render half a tag.
            const open = htmlString.lastIndexOf('<', length - 1);
            const close = open === -1 ? -1 : htmlString.indexOf('>', open);
            if (close >= length) length = close + 1;
            if (length !== shown) {
                shown = length;
                setDisplayedText(htmlString.slice(0, length));
            }
            if (length < htmlString.length) frame = requestAnimationFrame(step);
            else setTypingComplete(true);
        };
        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [htmlString, typingSpeed, skipTyping, ready]);

    return (
        <div>
            <span dangerouslySetInnerHTML={{ __html: displayedText }} />
            {!typingComplete && !skipTyping && <span className={styles.cursor}></span>}
        </div>
    );
};

export default TypingEffect;
