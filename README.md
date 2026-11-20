# gta6-clipper-01 — GTA 6 beach rampage Short

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/alawymuhsin/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/alawymuhsin/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for make.fun's **gta6-clipper-01** bounty: clip a GTA 6 moment people
want to watch, pitch make.fun in the clip, upload it public to YouTube, and
hand in the video's address. Places go by the video's views; the top 20
share $500.

## The clip

`clip.mp4` (1080x1920 vertical, 38 seconds, a YouTube Short) is cut from
Champs Network's GTA 6 gameplay video "GTA 6 – CRAZY 5-Star Police Chase &
Rampage at Vice Ocean Beach!" (uploaded 2026-11-18, over 3,000,000 views),
seconds 238–276 of it: a red pickup truck tearing across Vice Beach,
smashing through beach umbrellas and loungers with the Vice City skyline and
the ocean behind it. It opens mid-rampage — the first frame is already a
truck ploughing through umbrellas — because a Short's first seconds decide
whether a viewer stays, and the 5-star chase is the GTA fantasy every
player knows. The footage is blur-filled to vertical so the whole 16:9
frame stays visible (a hard crop would lose the truck whenever it moves
sideways), and the original game audio (sirens, engine, chaos) is kept.

On-screen text, first 4 seconds: **GTA 6 IS FINALLY HERE**.

The last 8 seconds are the make.fun pitch, over a dimmed end card:

    Make clips like this with AI
    and earn money on make.fun
    make.fun/bounty/gta6-clipper-01

Text on screen, no voice: it reads on mute, which is how most Shorts are
watched.

## Upload (for the person uploading)

File: `clip.mp4`. Publish Public, as a Short, before the deadline
(Mon 2026-11-23 08:00 WIB). Keep it public until the results are out.

Title:

    GTA 6 Beach Rampage is INSANE 🤯 #GTA6 #Shorts

Description (the first line word for word, then the play code):

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

    GTA 6 finally dropped and Vice Beach is already chaos — 5 stars, one pickup truck, zero mercy for the umbrellas 😂

    Play code: makefun-beetle-warbler-bakery

    #GTA6 #GTA6Gameplay #ViceCity #Shorts

After upload, put the video's address (YouTube Share button, then Copy)
in `VIDEO.json` as `{"url": "https://www.youtube.com/shorts/<id>"}`.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the
output directory. That is all the gate needs — the house reads the video
itself from YouTube.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=0zkhwx20&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
