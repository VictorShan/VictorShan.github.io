---
layout: ../../../layouts/project.astro
title: Lunch Wheel
client: Self
publishDate: 2024-05-28
github: https://github.com/VictorShan/wheel
website: https://wheel-kappa.vercel.app/
img: /assets/lunch-wheel.webp
description: |
  A simple web app that helps you decide where to eat lunch but you can also use it for other things.
tags:
  - dev
  - design
---

# Lunch Wheel

It's lunchtime and you need to decide what to eat! You and your coworkers need to find a resturant that everyone is fine with but no one is giving any options. Meanwhile, time is ticking and the lines at different resturants grows longer by the second. A decision must be made now!

This is a simple wheel to help you pick an option out of multiple choices.

## How to Use

To get started, open the website and pick a title for your wheel. Each wheel is given a randomly generated URL that you can share. However, there is a chance that someone else might get the same URL as you. The URL is a randomly generated CUID of length 10. After being automatically directed to your wheel, you can add options to your wheel. Once you are done adding options, you can spin the wheel and see what option is chosen.

## Features

- Spinning the wheel will randomly choose an option. Spinning the wheel on one device will spin the wheel on all devices that are viewing the same wheel.
- Each option can be given a URL that will be opened when the option is chosen.
- Once an option is "selected" using the button, the option will only have 20% of its original weight. This weight will restored by 20% every day.
- You can upvote or downvote an option. This will increase or decrease the weight of the option.

## Stack

- Next.js
- Clerk
- TursoDB (via Drizzle)

## Next Steps

- Create a React Native port of the app
- Add a feature that allows users to send slack messages securely
- Add ability to have admin users and regular users
- Add schedules for options (e.g. only available on Tuesdays)
