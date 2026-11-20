import { PT_Mono, Tiro_Devanagari_Hindi } from "next/font/google";

// Poems: PT Mono for Latin script, Tiro Devanagari Hindi picks up the Devanagari glyphs PT Mono doesn't have.
export const ptMono = PT_Mono({ weight: "400", subsets: ["latin"], display: "swap" });
export const tiroHindi = Tiro_Devanagari_Hindi({ weight: "400", subsets: ["devanagari", "latin"], display: "swap" });
export const verseFont = `${ptMono.style.fontFamily}, ${tiroHindi.style.fontFamily}`;
