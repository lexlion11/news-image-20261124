[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/lexlion11/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/lexlion11/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

# news-image-20261124

A 1024×1024 image summarizing the world news of **24 November 2026**, built for the
[make.fun news-image-20261124 bounty](https://make.fun/bounty/news-image-20261124).

The front page is composed in pure HTML/CSS/SVG (`page.html`, no external assets),
rendered to `entry.png` with headless Chrome, and copied to the output directory by
`main.ts` (Node 22 stdlib only).

## Stories covered

1. **Jensen Huang returns as NVIDIA CEO** — reinstated after an 11-day ouster; shares
   +31.5% to $165.05, adding $952B in market cap, the largest single-day gain in U.S.
   stock-market history. (NVIDIA / Xinhua)
2. **Shenzhou-24 crew unveiled** — China's first foreign-astronaut crew: Tang Hongbo,
   Wu Yi, and Pakistani payload specialist Muhammad Qizan Ali; launch 25 Nov 08:18 CST
   from Jiuquan to Tiangong. (Xinhua / CCTV)
3. **Supermoon** — the 24 November full moon is a supermoon, first of a rare triple run
   continuing Dec 2026 and Jan 2027. (CCTV)
4. **CrowdStrike buys Zscaler for $44B** — all-stock deal, the largest merger in
   cybersecurity history, at a 34% premium. (CrowdStrike / TechCrunch)
5. **GTA 6 sets PlayStation's biggest launch record** — the largest launch in
   PlayStation platform history; Call of Duty online play visibly declined.
   (Take-Two / Rockstar)
6. **AI claims to prove the Riemann Hypothesis** — a 250,000-page AI-generated proof
   claims to solve the 1859 conjecture on the hidden order of primes. (El País)
7. **Thanksgiving: 80M+ Americans travel** — over 80 million expected to travel, with
   airline faults and the recent airspace shutdown pushing ticket prices up. (El País / AAA)

## Usage

```bash
# Render the image (requires Google Chrome)
google-chrome --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
  --window-size=1024,1024 --screenshot=entry.png "file://$PWD/page.html"

# Copy to the make.fun output directory
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT
