import { parse } from "opentype.js";
import { readFileSync, writeFileSync } from "fs";

// Load the TTF or OTF font file
const fontBuffer = readFileSync("public/font/noto.ttf");
const font = parse(fontBuffer);

// Convert the font to JSON format
const jsonFont = font.toBuffer(); // or use font.toArrayBuffer() if needed

// Save the JSON font data to a file
writeFileSync("public/font/noto.json", JSON.stringify(jsonFont));
