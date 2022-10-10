---
layout: ../../../layouts/project.astro
title: iGEM Club
client: Self
publishDate: 2022-01-02
github: https://github.com/uwigem/uwigem2020-react
website: http://students.washington.edu/uwigem/#/
img: /assets/igemClub.webp
description: |
  Design and build the University of Washington's iGEM club with the Web Dev team.
tags:
  - design
  - dev
---

# University of Washington iGEM

As a co-lead for the UW's iGEM (International Genetically Engineered Machine)
team, I helped design and implement the club website for the 2020-2021 academic
years. During this time, we also updated and implemented the team project wiki
that can be found [here](https://2021.igem.org/Team:Washington)

## Stack

- ReactJS
- GitHub Pages (Hosting)

## Process

We redesigned the hompage of the club website and its various pages on Figma
before breaking out the project into individual tasks and would use a pseudo-agile
work management. There was a lot of iteration of design both with the design lead
and with the rest of the team. It was also important for us to advertise when
recuitment seasons was in progress by placing banners on our website for the
social media team members to direct to.

## iGEM Project Wiki

The iGEM project wiki was made using a custom website builder the team had
previously built. It leveraged the realtime features of Firebase's reatime
database to allow multiple, non-technical members of the team edit the wiki at
the same time. This reduced the workload of the web development team during
the last stretch of the season and enabled every member to be able to quickly
change the wiki.

What the web development did during the season was to improve the web editor
by fixing bugs, updating styles, adding components and more. Some of the features
I added include:

- Grid Layout UI widget that allowed arbitrary placement of rectangular elements in a grid
- Simple layout components like horizontal and vertical stacking
- Editor and preview can be seen at the same time for live visual feedback
- Modal popup for new widget/change widget selection
- Hardcoded home page
  - parallax factory effect on homepage
  - threeJS 3D spinnable cube (broken due to iGEM infrastructure changes)
- Update NPM packages with errors

You can find the wiki github repo [here](https://github.com/uwigem/wiki2021)
