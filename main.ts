// gta6-clipper-01 entry (Node 22, standard library only).
// The entry is the video itself: this program only hands in VIDEO.json,
// the address of the public YouTube Short, which the house reads itself
// through the YouTube Data API. Nothing this program writes about the
// video is scored.
//
// VIDEO.json holds the address of the uploaded public YouTube Short;
// the house reads the video itself through the YouTube Data API.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(BOT_DIR, 'VIDEO.json');
const dst = join(OUTPUT_DIR, 'VIDEO.json');

const raw = readFileSync(src, 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a string url');
  process.exit(1);
}
const url = (parsed as { url: string }).url;
const isYouTubeVideo =
  /^https:\/\/www\.youtube\.com\/shorts\/[A-Za-z0-9_-]{11}$/.test(url) ||
  /^https:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}(&.*)?$/.test(url) ||
  /^https:\/\/youtu\.be\/[A-Za-z0-9_-]{11}(\?.*)?$/.test(url);
if (!isYouTubeVideo) {
  console.error('VIDEO.json url must be a real YouTube video address (shorts, watch?v=, or youtu.be), not a placeholder');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(dst, raw);
