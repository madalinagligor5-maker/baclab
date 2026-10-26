// Generează din docs/brand/logo-baclab.png: variante de logo, marca „B", iconițe PWA și imaginea OG.
// Rulare: node scripts/brand-assets.mjs   (necesită pachetul `sharp`)
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "docs/brand/logo-baclab.png";
const OUT = "public/brand";
const PLUM = [0x30, 0x24, 0x3a];
const CREAM = [0xf5, 0xf1, 0xe8];
const LIME = [0xd9, 0xed, 0x79];
// Zonele glifelor în PNG-ul sursă (determinate din canalul alfa).
const MARK = { left: 79, top: 137, width: 414, height: 493 };
const FULL = { left: 79, top: 137, width: 2018, height: 493 };

await mkdir(OUT, { recursive: true });
await mkdir("src/app", { recursive: true });

/** Recolorează la o culoare fixă și curăță alfa (glifele sursă au alfa ~250, nu 255). */
async function recolor(region, color) {
  const { data, info } = await sharp(SRC).extract(region).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < info.width * info.height; i++) {
    const a = data[i * 4 + 3];
    data[i * 4] = color[0]; data[i * 4 + 1] = color[1]; data[i * 4 + 2] = color[2];
    data[i * 4 + 3] = a <= 12 ? 0 : a >= 150 ? 255 : Math.round((a / 150) * 255);
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });
}
const pad = (img, p, bg = { r: 0, g: 0, b: 0, alpha: 0 }) => img.extend({ top: p, bottom: p, left: p, right: p, background: bg });

// Logo complet (orizontal)
for (const [name, color] of [["logo-plum", PLUM], ["logo-cream", CREAM]]) {
  const img = await recolor(FULL, color);
  await pad(img.resize({ width: 1200 }), 0).png({ compressionLevel: 9 }).toFile(`${OUT}/${name}.png`);
}
// Marca „B"
const markBuf = {};
for (const [name, color] of [["mark-plum", PLUM], ["mark-cream", CREAM]]) {
  const img = await recolor(MARK, color);
  const buf = await img.resize({ height: 512 }).png({ compressionLevel: 9 }).toBuffer();
  markBuf[name] = buf;
  await sharp(buf).toFile(`${OUT}/${name}.png`);
}

// Iconițe: pătrat lime cu marca plum
async function icon(size, markRatio, file) {
  const markH = Math.round(size * markRatio);
  const mark = await sharp(markBuf["mark-plum"]).resize({ height: markH }).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: { r: LIME[0], g: LIME[1], b: LIME[2], alpha: 1 } } })
    .composite([{ input: mark, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toFile(file);
}
await icon(512, 0.56, `${OUT}/icon-512.png`);
await icon(192, 0.56, `${OUT}/icon-192.png`);
await icon(512, 0.42, `${OUT}/icon-maskable-512.png`); // în zona sigură pentru măști
await icon(512, 0.56, "src/app/icon.png");
await icon(180, 0.56, "src/app/apple-icon.png");

// Imagine OG 1200x630: logo plum pe crem, bandă lime jos
const logo = await sharp(`${OUT}/logo-plum.png`).resize({ width: 760 }).toBuffer();
const lm = await sharp(logo).metadata();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: { r: CREAM[0], g: CREAM[1], b: CREAM[2], alpha: 1 } } })
  .composite([
    { input: logo, left: Math.round((1200 - lm.width) / 2), top: Math.round((560 - lm.height) / 2) },
    { input: { create: { width: 1200, height: 70, channels: 3, background: { r: LIME[0], g: LIME[1], b: LIME[2] } } }, left: 0, top: 560 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}/og.png`);
console.log("OK");
