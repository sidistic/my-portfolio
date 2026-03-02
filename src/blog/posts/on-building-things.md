---
title: "On Building Things That Last"
date: 2025-02-01
description: "Reflections on software longevity, technical debt, and writing code for the humans who come after you."
tags:
  - posts
  - engineering
  - craft
---

Every piece of software I've written has eventually been read by someone who wasn't me.

Sometimes it was a colleague picking up a ticket. Sometimes it was me, six months later, completely unable to remember why I'd written something a particular way.

## The Future Reader

When I write code now, I try to write it for the future reader — not the current me, and definitely not the compiler. The compiler doesn't care about clarity. Humans do.

This means:

- **Names matter.** A function called `processData` tells you almost nothing. A function called `normalizeUserEmailAddresses` tells you exactly what it does.
- **Comments should explain *why*, not *what*.** The code already says what. Comments should explain the reasoning, the constraint, the non-obvious trade-off.
- **Complexity should be earned.** Every abstraction is a cost. Make sure the cost is worth paying.

## Technical Debt Is Borrowed Time

Technical debt isn't inherently bad. Sometimes you need to ship. The problem is when the debt is never repaid — when shortcuts harden into load-bearing walls that nobody dares touch.

The healthiest codebases I've worked in had teams that treated debt explicitly: named it, tracked it, and paid it down deliberately. The worst ones pretended it didn't exist until it became the whole job.

## A Useful Heuristic

Before committing anything, I ask: *would I be comfortable explaining this to the person who has to maintain it?*

If the answer is no — if I'd feel the need to apologize or pre-emptively excuse the code — it's worth spending another twenty minutes to clean it up.

## Closing Thought

Good software isn't just correct. It's understandable, modifiable, and honest about its limitations. That's the standard worth aspiring to.
