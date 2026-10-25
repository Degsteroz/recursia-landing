# Handoff: RECURSIA studio landing page

Single-page site for RECURSIA, an independent digital studio (one founder, growing). English copy. Black + yellow, alternating sections, recursion as the visual idea.

## About these files
`reference/RECURSIA Studio.dc.html` is a **design reference built in HTML**, not production code. Open it in a browser (keep `support.js` and `assets/` next to it) to see the exact look and behaviour. Rebuild it in the target stack (Next.js / Astro / Vite + React or Vue — any is fine; static output is enough). All styles in the reference are inline; extract them into your own components/CSS.

**Fidelity: high.** Colours, type, spacing, copy and interactions are final.

## Design tokens
Colours
- `--yellow: #ffd400` — yellow sections, accents on black
- `--ink: #0e0e0f` — black sections, text on yellow, borders
- `--paper: #f4f1e8` — body text on black
- `--muted: #cfccc2` — paragraph text on black
- `--muted-2: #a6a39a` — mono labels on black
- `--line: #2a2a2c` — row dividers on black
- `--card: #161617` — device/browser frame fill on black

Fonts (Google Fonts)
- Display: **Unbounded** 600/800/900 — headings, UPPERCASE section titles, letter-spacing −0.02em, line-height 0.95
- Body: **Geist** 400/500/600 — 15–17px, line-height 1.5–1.55
- Mono: **Geist Mono** 400/500 — labels, 11–12px, letter-spacing 0.04–0.08em, uppercase

Sizes (all `clamp()`)
- Section title: `clamp(34px, 6vw, 88px)`
- Case title: `clamp(28px, 3.6vw, 52px)`
- Contact headline: `clamp(48px, 11vw, 190px)`, weight 900
- Section padding: `clamp(48px, 7vw, 104px) clamp(16px, 3.5vw, 40px)`; content max-width 1560px

Shape
- Pills: `border-radius: 999px`, padding 11–15px × 20–26px, 2px borders
- Cards / browser frames: radius 10px, 2px border
- Section separators: 2px solid ink
- Hard shadow (yellow sections): `10px 10px 0 #0e0e0f`, hover `16px 16px 0` + translate(−4px,−4px)
- Easing everywhere: `cubic-bezier(.16,1,.3,1)`

## Sections (top → bottom)
1. **Header** — sticky, yellow, 2px bottom border. Logo mark (bobbing, 4s) + "RECURSIA". Nav: Work / Ventures / Playground / Services (mono, uppercase, underline on hover) + black pill "Start a project" → Telegram.
2. **Hero** (yellow) — mono line `recursia(recursia(recursia(…)))` / "Independent digital studio". Giant word RECURSIA (see Hero below). Below: tagline in Unbounded 600 + paragraph + 2 buttons (Telegram, #work).
3. **Marquee** (black) — infinite horizontal scroll, Unbounded 800 uppercase yellow: Websites ✺ Telegram mini apps ✺ Web apps ✺ Browser extensions ✺ Streamer tools. 26s linear, ✺ rotates (5s).
4. **Selected work / DEPTH 01** (black) — 3 cases, alternating media left/right, two-column grid that stacks on narrow screens:
   - TEDx Savski Venac — live site preview in a browser frame (iframe scaled 0.4, `pointer-events: none`).
   - RoastBot — same, roast.recursia.online.
   - IT Connect Hub — **interactive phone mock** (see below) + "Open in Telegram" → `https://t.me/ITConnectEventsBot?startapp`.
5. **Ventures / DEPTH 02** (yellow) — Purrse: badges "Closed alpha", "Raising a round"; huge title; 3-cell stat strip; buttons purrse.online + "Investor? Let's talk"; screenshot `assets/purrse.png` in browser frame with hard shadow.
6. **Also shipped / DEPTH 03** (black) — list rows (num / name / one-line desc / kind). Hover: row turns yellow, slides right 14px. Gilded, Tzara Book, Now Playing → OBS.
7. **Playground / DEPTH 04** (yellow) — two tilted cards (±1deg, straighten on hover) with **interactive** iframes: Release your inner monster, Sad Music.
8. **What we make / DEPTH 05** (black) — intro left, numbered service list right. No prices.
9. **People / DEPTH 06** (yellow) — Founder card (black), "Soon, more of us" dashed card with spinning "?", decorative card of nested dashed frames.
10. **Contact** (black) — `return recursia(you);`, giant "Let's build the next layer ↗" (letter-spacing widens on hover), Telegram pill, logo repeated at shrinking sizes (96/58/35/21px) + blinking "…". Footer: RECURSIA.ONLINE / © year.

The "DEPTH 0N" labels prefix with one more `↳` per level — that's the recursion motif through the page.

## Hero word — how it works (most important)
Pure inline SVG, `viewBox="0 0 1600 300"`, width 100%.
- `<pattern id="rpat">` 124×34: yellow rect + three `<text>RECURSIA</text>` (Unbounded 800, 12.5px, ink), staggered like bricks. `animateTransform translate 0→124` over 8s, infinite → the small words slide.
- `<pattern id="rpat2">` 210×56: **inverted** (ink rect, yellow text, 21px), slides the opposite way over 6s.
- Three stacked `<text>` with identical geometry (`x=800 y=268 text-anchor=middle font-size=292 weight 900 textLength=1590 lengthAdjust=spacingAndGlyphs`):
  1. fill ink + `filter="url(#outline)"` where the filter is `<feMorphology operator="dilate" radius="2.5">` — gives an outer outline **without** showing the font's internal overlapping contours (don't use `stroke`, it reveals them).
  2. fill `url(#rpat)` — the normal state.
  3. fill `url(#rpat2)` + `mask="url(#lensMask)"`, `pointer-events: none` — the lens layer.
- `<mask id="lensMask" maskUnits="userSpaceOnUse">` contains:
  - `g[data-lens=pos]` (translated to the cursor) → `g[data-lens=scale]` (scale 0↔1, CSS transition .45s) → white circle r=120 + two ring circles with SMIL `<animate>` on `r` 120→230 and `stroke-opacity` 1→0, 1.6s, second ring `begin=0.8s` (continuous ripple).
  - `g[data-lens=splashes]` — empty; click ripples are appended here.
- JS (plain DOM, no framework state — keep it out of React/Vue reactivity for 60fps):
  ```js
  const toSvg = e => { const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY;
    return p.matrixTransform(svg.getScreenCTM().inverse()); };
  svg.onmousemove = e => { const {x,y} = toSvg(e);
    pos.style.transform = `translate(${x}px, ${y}px)`; scale.style.transform = 'scale(1)'; };
  svg.onmouseleave = () => scale.style.transform = 'scale(0)';
  svg.onclick = e => { // big one-shot wave
    const {x,y} = toSvg(e); const c = document.createElementNS('http://www.w3.org/2000/svg','circle');
    c.setAttribute('cx',x); c.setAttribute('cy',y); c.setAttribute('fill','none');
    c.setAttribute('stroke','#fff'); c.setAttribute('stroke-width','36'); splashes.append(c);
    const t0 = performance.now();
    const step = now => { const k = Math.min(1,(now-t0)/1100);
      c.setAttribute('r', 40 + k*900); c.setAttribute('stroke-opacity', 1-k);
      k < 1 ? requestAnimationFrame(step) : c.remove(); };
    requestAnimationFrame(step); };
  ```
- Entrance: whole SVG `scale(1.35)→1, opacity 0→1`, 1.1s.
- Touch devices: no hover; click/tap wave still works. Optionally show the lens on `pointerdown`.
- Respect `prefers-reduced-motion`: stop pattern animation and ripples.

## IT Connect Hub phone mock
Phone frame: width ≤340px, 3px yellow border, radius 38px, padding 10px, shadow `12px 12px 0 #ffd400`, hover rotate(−2deg). Screen bg `#0f141d`, radius 28px, min-height 560px.
Inner palette (the app's own): surface `#171d29`, chip `#1b2230`, muted `#8b93a3` / `#a3abba`, accent gradient `linear-gradient(135deg, #5b8cff, #7b6cf6)`, success `#7fe0a6` on `#1f3a2b`.
Content: app header (icon + "IT Connect Hub" + "VL" avatar) → "Мероприятия" → date label + "Календарь" chip → 7-day strip (ВС 25 … СБ 31) → filter chips → event card or empty state.
State: `day` (selected index 0–6), `reg` (map day → registered bool).
- Clicking a day selects it (gradient bg). Days with events show a dot.
- Event card: time, seats, title, place, button "Зарегистрироваться" → toggles to "Вы зарегистрированы ✓" (green).
- No event: "На эту дату мероприятий нет" + hint.
Sample events (placeholders — replace with real ones): day 0 "IT Connect Meetup: фронтенд без боли", Startit Center; day 4 "Networking night: DevOps & Coffee", Coworking Kvart.

## Other motion
- Scroll reveal on case rows: `opacity 0, translateY(50px) → none`, using `animation-timeline: view()` (`animation-range: entry 0% entry 50%`). Fallback for browsers without scroll timelines: IntersectionObserver.
- Buttons: hover `translateY(-3px)` or `rotate(-2..-3deg) scale(1.04–1.05)`, .2s.
- Browser-frame cards: hover `rotate(±1.2deg) scale(1.015)`, .35s.

## Live previews
Work and Playground use iframes of the real sites. If a site sends `X-Frame-Options`/CSP `frame-ancestors`, the frame will be blank — swap to a screenshot. Load lazily (`loading="lazy"`). Purrse already uses a screenshot.

## Links
- Telegram (all CTAs): https://t.me/Degster_oz
- TEDx: https://www.tedxsavskivenac.com/
- RoastBot: https://roast.recursia.online/
- IT Connect app: https://t.me/ITConnectEventsBot?startapp
- Purrse: https://purrse.online/
- Gilded: https://gilded-project.vercel.app/
- Tzara Book: https://tzara-book.vercel.app/read/00-predystoriya
- Now Playing → OBS: link TBD (currently Telegram)
- White Monster: https://release-your-inner-monster.vercel.app/
- Sad Music: https://sad-music.vercel.app/
- No GitHub links anywhere.

## Assets
- `assets/recursia-mark.svg` — logo (two cat heads). Original eye colour `#e0b453`; on the site eyes are recoloured to match the background (yellow on ink / ink on yellow).
- `assets/purrse.png` — Purrse landing screenshot.

## Files
- `reference/RECURSIA Studio.dc.html` — full design reference (template + logic class at the bottom).
- `reference/support.js` — runtime needed only to open the reference in a browser. Not part of the build.
