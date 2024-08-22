import React, { useState, useEffect, useRef } from 'react';
import styles from "../styles/components/TypingEffect.module.scss";

const TypingEffect = ({ htmlString, typingSpeed = 100, skipTyping = false }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [typingComplete, setTypingComplete] = useState(false);
    const index = useRef(0);

    useEffect(() => {
        if (skipTyping) {
            // Directly display the text without typing effect
            setDisplayedText(htmlString);
            setTypingComplete(true);
        } else if (index.current < htmlString.length) {
            const timer = setInterval(() => {
                setDisplayedText(prev => prev + (htmlString[index.current] || ''));
                index.current += 1;

                if (index.current >= htmlString.length) {
                    clearInterval(timer);
                    setTypingComplete(true);
                }
            }, typingSpeed);

            return () => clearInterval(timer);
        }
    }, [htmlString, typingSpeed, skipTyping]);

    return (
        <div>
            <span dangerouslySetInnerHTML={{ __html: displayedText }} />
            {!typingComplete && !skipTyping && <span className={styles.cursor}></span>}
        </div>
    );
};

export default TypingEffect;
