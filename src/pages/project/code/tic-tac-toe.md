---
layout: ../../../layouts/project.astro
title: Tic Tac Toe Ver 1
client: Self
publishDate: 2020-11-26
github: https://github.com/VictorShan/tic-tac-toe/tree/master
website: https://tic-tac-toe-victorshan.vercel.app/
img: /assets/TicTacToeV1.webp
description: |
  The first personal web development project from started from scratch.
tags:
  - design
  - dev
---

# Tic Tac Toe Version 1

This was my original tic-tac-toe project I worked on after finishing CSE154 (Web
Development) at UW. You can enter any lobby and visit play against players who
are in the same lobby. Only the first two players in that lobby can play and the
lobbies reset after a set time (3 hours). To test this out yourself, you can
join an open lobby in one tab and join the same lobby in an incognito tab to
play against yourself.

## Stack

- Vanilla JS (No JS framework)
- Firebase
  - Authentication
  - Hosting (Website hosting)
  - Firestore (Document Database for storing game state)
  - Functions (Running server-side code like validating player actions)

## Next Steps

Please see what I did in version 2 of this project found [here](tic-tac-toe-v2)
