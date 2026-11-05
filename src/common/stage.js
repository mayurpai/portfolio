"use client";
import { useEffect, useState } from "react";

// False while the preloader or a page-transition curtain covers the screen,
// so entrance animations wait until they can actually be seen.
let stageReady = false;
const listeners = new Set();

export function setStageReady(value) {
    if (stageReady === value) return;
    stageReady = value;
    listeners.forEach((listener) => listener(value));
}

export function useStageReady() {
    const [ready, setReady] = useState(stageReady);

    useEffect(() => {
        setReady(stageReady);
        listeners.add(setReady);
        return () => listeners.delete(setReady);
    }, []);

    return ready;
}
