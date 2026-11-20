import localFont from "next/font/local";

// The terminal-flavoured sections (the experience git log, project case studies) read in JetBrains Mono.
export const jetbrainsMono = localFont({
    src: [
        { path: "../fonts/JetBrainsMono-Regular.ttf", weight: "400", style: "normal" },
        { path: "../fonts/JetBrainsMono-Bold.ttf", weight: "700", style: "normal" },
    ],
    display: "swap",
});
