# How to prompt Claude for UI/UX work (paste-ready templates)

Claude does its best UI work when you tell it **(1) what to fix**, **(2) what "good" looks like**, and **(3) what NOT to touch**. Vague requests like "make it better" produce vague results. Use one of the templates below.

---

## Template A — Focused polish pass (5 minutes)

Use when: the layout is fine but "feels cheap" or inconsistent.

```
Polish the portal UI for an elite, professional feel. Keep functionality identical — no content changes.

Fix these specifically:
- [Screen/section name] feels cluttered — reduce visual noise
- Button hierarchy is unclear — enforce ONE primary CTA per view
- Copy is too long — compress to one action phrase per button
- Colors lack restraint — limit to gold + one accent per section

Constraints:
- Don't touch the course data or session content
- Don't add new features, only polish what's there
- Use the existing design tokens (--gold, --bg, --text, --text-dim, --card-border)
- Follow the ui-ux-pro-max skill rules (touch targets ≥44px, contrast ≥4.5:1, motion has meaning)
- Test on mobile 375px — if it doesn't fit cleanly, it's not done

Show me a screenshot before/after for each change.
```

---

## Template B — "Make this screen elite" (surgical redesign of one view)

Use when: one specific view (e.g. teacher panel, login, session page) needs a real uplift.

```
Redesign the [SCREEN NAME] for an elite/editorial feel.

Reference brief:
- Product type: [student learning portal / teacher admin / landing / gallery]
- Audience: [teens learning AI / adult creators / designers]
- Desired vibe: [minimal & premium / playful & energetic / editorial / Apple-like]
- Already-loved elements: [list what NOT to change]
- Problems I see: [list 2-4 specific issues]

Constraints:
- Use only CSS already in the file; introduce new tokens only if semantic (e.g. --success, --warn)
- Enforce: single primary CTA, whitespace hierarchy via size/weight (not color), no more than 2 accent colors per view
- Copy: state actions in 1-3 words ("Publish", not "Publish now to all students")
- Animations: only for state transitions (hover, enter, active) — max 200ms, ease-out
- Mobile-first: test at 375×812 before desktop

Deliverable:
1. List the 3-5 highest-impact changes before you start
2. Implement them one by one with a screenshot after each
3. Commit with a message describing what changed and why
```

---

## Template C — Copy/microcopy tightening

Use when: UI looks OK but text feels amateurish, verbose, or inconsistent.

```
Tighten all the copy in [section/screen]. Rules:

- Every button = 1-3 words, action verb first ("Publish", "Copy JSON", "Got it")
- Every status line = a noun phrase ("Unpublished changes", "In sync with students"), not a sentence
- Every instruction = imperative, one step per line, no filler ("Click the green button to publish your changes" → "Click Publish")
- No emojis inside sentences; reserve them for section headers only
- Keep technical terms (courseId, unlocks.json) but italicize or code-format them

Don't change functionality, only text. List every string you changed with old → new.
```

---

## Template D — Design system audit

Use when: you want Claude to find inconsistencies you'd miss.

```
Audit the portal for design system consistency. Report:

1. Typography: count every unique font-size used. Flag sizes that don't fit a scale (12/14/16/18/24/32/48).
2. Colors: count every raw hex/rgba not referenced via a CSS var. List the worst offenders.
3. Spacing: count every unique margin/padding value. Flag non-8px multiples.
4. Buttons: count button variants. Are any redundant (2 buttons that look identical but use different classes)?
5. Radius: is border-radius consistent across cards?
6. Shadows: are shadow values using a consistent scale?

Return as a table — no code changes yet, I'll decide what to fix.
```

---

## What makes Claude's UI work better vs worse

**✅ Helps**
- Saying "don't touch X" (scopes the work)
- Giving a reference vibe ("like Linear / Stripe / Notion")
- Naming the specific screen (not "the whole app")
- Asking for screenshots mid-work (catches problems early)
- Pointing at existing tokens to reuse

**❌ Hurts**
- "Make it modern" (Claude will guess)
- "Fix the design" (no target)
- Multiple unrelated asks in one prompt
- Not specifying mobile vs desktop
- Adding features mid-polish

---

## After Claude is done

Always:
1. Test on mobile (375×812) AND desktop (1280×800)
2. Click the primary CTA on every screen — is it obvious which one it is?
3. Read every button out loud — is it 1-3 words, action verb first?
4. Scroll through one full session — does rhythm feel consistent?

If any answer is "no", send Claude back with the specific issue and Template A.
