---
layout: ../../../layouts/project.astro
title: UW Campus Map
client: Self
publishDate: 2020-03-07
website: https://uw-campus-map.herokuapp.com/
img: /assets/UWCampusMap.webp
description: |
  I created a map that draws a path from any building on campus to any other
  building on campus.
tags:
  - design
  - dev
---

# UW Campus Map

The final project of CSE331 (Software Design and Implementation) where I created
an app that displays the route from any building on campus to any other building.
Simply choose your starting building and destination building and the app will
calculate the shortest path between the two.

_Note: May not work as heroku is discontinuing its free tier_

## Stack

- ReactJS
- Heroku (Hosting)
- Java (Backend)

## Path Finding

It has been a while since I've worked on this but I believe the pathfinding was
done with either the A\* algorithm or just Dijkstra's algorithm. In either case
it takes advantages of intersections modeled as graph nodes and roads as edges
with distances as weights and traverses it to find the shortest path.

## Next Steps

### Implement a Javascript version

Since Heroku its free tier the project may no longer be available for people to
view. Therefore, it might be the perfect chance to review and redo the project
in javascript so I can host on free services such as Vercel or Firebase.

### Update the text directions

Some of you may have noticed that the text directions on the side give nonsensical
instuctions to go from a point to another point. These are points on the image
and not related to the real world. It would be a great improvement to translate
these point instructions to something like "turn right and walk 500m" or "head
south for 60ft" because they will make sense to humans.
