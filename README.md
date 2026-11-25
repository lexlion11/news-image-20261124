[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/lexlion11/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/lexlion11/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

# news-image-20261124

A single 1024×1024 image summarizing the world news of **24 November 2026** — a
"newspaper front page" rendered entirely with HTML/CSS/SVG (no external assets)
and screenshotted to `entry.png`. Built for the [make.fun](https://make.fun)
news-image-20261124 bounty.

## Stories covered

1. **Jensen Huang returns as NVIDIA CEO** (business) — reinstated as president,
   CEO and board director after an 11-day ouster; unanimous board vote. Stock
   surged **+31.5% to $165.05**, adding **$952B** in market cap — the largest
   single-day gain in US stock-market history. Nasdaq +6.5%, semiconductor
   index +14%; Senate hearing Dec 3. *(NVIDIA / Xinhua)*
2. **Shenzhou-24 crew unveiled** (space) — China's first foreign-astronaut
   crew: Tang Hongbo, Wu Yi, and Pakistan's Muhammad Qizan Ali. Launch
   **25 Nov 08:18 CST** from Jiuquan to Tiangong with **4 China–Pakistan
   experiments**. *(Xinhua / CCTV)*
3. **Supermoon tonight** (astronomy) — the 24 November full moon is a
   supermoon, first of a rare **triple supermoon run** (Dec 2026, Jan 2027).
   *(CCTV)*
4. **CrowdStrike buys Zscaler for $44B** (cybersecurity) — all-stock deal, the
   **largest merger in cybersecurity history**, a **34% premium**; consolidates
   AI-driven security protection. *(CrowdStrike / TechCrunch)*
5. **GTA 6 sets PlayStation's biggest launch record** (gaming) — first-week
   sales exploded into the **largest launch in PlayStation platform history**;
   Call of Duty online play visibly declined. *(Take-Two / Rockstar)*
6. **AI claims to prove the Riemann Hypothesis** (science) — a
   **250,000-page** AI-generated proof claims to solve the 1859 conjecture on
   the hidden order of prime numbers. *(El País)*
7. **Thanksgiving: 80M+ Americans travel** (culture) — over **80 million**
   expected to travel; airline technical faults and the recent airspace
   shutdown pushed ticket prices up. *(El País / AAA)*

## Usage

```bash
# Render the page to entry.png (headless Chrome):
google-chrome --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
  --window-size=1024,1024 --screenshot=entry.png "file://$PWD/page.html"

# Copy entry.png to the make.fun output directory:
MAKEFUN_OUTPUT_DIR=out node main.ts
# -> out/entry.png (byte-identical copy, verified)
```

- `page.html` — self-contained 1024×1024 front page (system fonts, inline SVG).
- `main.ts` — Node stdlib entrypoint; copies `entry.png` to
  `$MAKEFUN_OUTPUT_DIR` (default `/output`), creating the directory if needed
  and verifying the copy.
- `entry.png` — the rendered 1024×1024 submission image.

## License

MIT © 2026 lexlion11
