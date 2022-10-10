---
layout: ../../../layouts/project.astro
title: Tic Tac Toe Ver 2
client: Self
publishDate: 2021-01-23
github: https://github.com/VictorShan/tic-tac-toe
website: https://tic-tac-toe-victorshan.vercel.app/
img: /assets/TicTacToeNextJS.webp
description: |
  Version 2 of the tic-tac-toe game built with NextJS with added min-max AI.
tags:
  - design
  - dev
---

# Tic-Tac-Toe Version 2

This is an improvement on the original tic-tac-toe project with a better UI and
built with a modern JS framework NextJS instead of plain React. The major
addition to this project is an AI that will never lose a game.

## How to play

Like the original version, you can enter any lobby and visit play against players who
are in the same lobby. Only the first two players in that lobby can play and the
lobbies reset after a set time (3 hours). To test this out yourself, you can
join an open lobby in one tab and join the same lobby in an incognito tab to
play against yourself.

## Stack

- NextJS (Frontend + Hosting)
- Firebase
  - Authentication
  - Firestore (Document Database)
  - Functions (Cloud Functions/Server-side code)

## The AI

The AI for this game is implemented using a min-max AI with pruning by taking
advantage of the fact that tic-tac-toe is a zero-sum game. In short, the AI
looks at each possible next move as a different state and builds a tree of
possible states. Based on which ones lead to a favorable result, it will give
each state a score based on how favorable it is (i.e. 1 is a win while -1
represents a loss).

This tree of states can get big with a max of `9!` states. That's where
alpha-beta pruning comes in. Without getting into weeds of it, the algorithm can
choose not to continue exploring a branch if that branch can not offer a better
outcome than other branches. This saves both computation and memory because
fewer states need to be explored. For more information on the pruning process,
please visit [Alpha–beta pruning](https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning).

## UI Enhancements

In addition to the AI, I also added a few UI enhancements such as the menu,
navbar and better butttons than vanilla HTML ones. Most of these were created
using the `react-bootstrap` library while more complex styling of the tic-tac-toe
board was done using `sass`. The design is also mobile friendly.

## Next Steps

### Disappearing `O` bug

There is a bug where when you first click on a location on the board, an `O`
image will appear even if you are `X` before being updated to the correct image.
This is likely becuase the spacing for icon in the board is defined with the
help of invisible icons that fill that space. Knowing what I know now, CSS Grid
would have been a better choice and would have allowed me to make it even more
mobile friendly by not overflowing on narrow screens.

### Info Boxes

If you visited the site, you would know that the info boxes are really boring.
They are just black-bordered boxes with some text inside. I think it would
impove the experience to add some color, make text reactive to screen size, and
maybe even improve the clarity of the content.

### Error Messages

Currently there are only a few cases where there would be error
messages that pop-up as a temporary banner at the top of the page but sometimes
the errors are to cryptic. It would be nice to have the ability to display
detailed error messages for every problem that the user might encounter.

### WebSockets?

An addition avenue for exploration is moving away from Firebase and using a
relational database with websockets to facilitate actions. This is a more
industry-like example of what people would use. Firebase has some bad cost
scaling once you get past the free tier so it could be worth it to try something
scaleable.
