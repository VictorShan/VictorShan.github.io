---
layout: ../../../layouts/project.astro
title: Data Visualization
client: Self
publishDate: 2020-12-14
github: https://github.com/cse442-20f/FP-Fight-Covid19
website: https://cse442-20f.github.io/FP-Fight-Covid19/
img: /assets/FightCovid19.webp
description: |
  This was a data visualization school project.
tags:
  - design
  - dev
---

# FP-Fight-Covid19

Project page: https://cse442-20f.github.io/FP-Fight-Covid19/

Team members:

- Samek Mulepati
- Yimeng Hou
- Victor Shan
- Owen Daley
- Paolo Peani

## Project Description

Our project aims to provide a comprehensive analysis of how the United State handled the covid-19 pandemic by comparing
the current outcomes of the pandemic in different states as well as different countries. Our target audience is United states
residents who want to further educate themselves on the pandemic without having to compare the data themselves.

There are six main visualizations in our project:

- Globe Animation
- Overview of the Global Situation
  - This visulization sets the stage of the project by providing an overview of the global situation. It allows users to
    go through the current timeline to see which countries have been affected the most by this pandemic, and which countries
    seem to have flattened the curve. Once the user finds a country they are interested in, they can easily compare how they
    fared in comparison to another country by viewing the area graph to the right. The data is also divided into daily cases
    as well as daily deaths.
  - The audience and also explore the different "wave" patterns of deaths and cases for each country. The US, for example, is unique because it has three waves instead of one or two like most other countries.
- Impact of Lockdown
  - Government-instituted lockdowns have been instrumental in preventing the spread of the virus and in saving potentially millions of lives.
    However, some lockdowns have been far more effective than others. In this visualization we see death tolls in different states represented
    by the size of the circles for those states. Within those states, the crimson circle represents deaths that occurred outside of a government-instituted lockdown.
    Users can also see more detail about when those deaths occured by clicking farther.”
- The Status of the United States Hospital System
- Deaths vs. Cases
- If We Continue as Before...
  - This visualization is a peek into the future that shows how many deaths there are expected to be by March 1, 2021.
  - To help persuade the audience, it shows the previous recorded data as a black line because we are certain of this result. The cone of uncertainty at the end shows the expected range which matches the trend.
  - The smoothed data was used for this visualization because there were weekly spikes in deaths that were more likely due to when data was collected rather than an actual feature of cumulative deaths.

Sources:

- Data From The Institute for Health Metrics and Evaluation (IHME): http://www.healthdata.org/covid/data-downloads
- Lockdown Data: https://auravision.ai/covid19-lockdown-tracker/
- Global Covid Data: https://data.europa.eu/euodp/en/data/dataset/covid-19-coronavirus-data
- United States Covid Data: https://www.kaggle.com/imdevskp/corona-virus-report?fbclid=IwAR3neoXKA-c8Xh6wlErmYyrAIi_hWJTOQLXQeg45-1Qos2T-H1cEKFocHmA
- Illustrations by Natasha Remarchuk from https://icons8.com/

## Work Distribution

### Paolo

Total Time: 25+ hours

- Data Wrangling
  - General data cleaning
  - Wrote ~300 lines of Java code to join and reformat two datasets, one containing lockdown data
    and one containg deaths data in US states, for use in the pack layout visualization.
- Implemented "Impact of Lockdown" Visualization
  - Considered and implemented a number of visualizations for this part of the project before deciding
    on the pack layout as the most effective way to display the message we wanted to convey
  - Implemented and adjusted D3 code from a template
  - Wrote code to wrangle data for this visualization (mentioned above)
  - Made styling decisions to make the visualtion more effective and visually pleasing
- Contributions to "Overview of the Global Situation" Visualization
  - Implemented the original version of the area graph, which served as the base upon which
    Samek and Victor did improvements
- Presenter for the Demo Video

### Victor

Total Time: 40+ hours

- Overall Page CSS
  - Worked with Samek on initial page styling with Yimeng's design and graphics
  - Each section was later customized by team members who worked on that page's visualization
- Added Final Visualization (Line graph with prediction data)
  - Data transformations using SQLite3 for faster load times
  - Line to cone of uncertainty that helps audiences trust the predictions
  - Made a sometimes illegible tooltip that was later improved by Samek
- A3 Map Visualization Improvements (Map beside chart)
  - Switched to more complete data source and show daily data instead of monthly data
  - Worked with Samek on making the area graph show two countries with transitions
  - Changed map coloring from gradient to threshold and added nontile (9-tile) legend
  - Improved range slider to update when moved instead of on mouse off
  - Modified map+chart from only being able to select 1 country and comparing with USA to being able to choose any two countries can be selected
  - Added Y-axis label that changes depending on data
  - Tried, and failed, to fix chart bug that sometimes appeared during transitions between countries
  - Tested colors using color-blind extension
- Implemented title page globe animation from example to use COVID data instead

### Samek

Total Time: 20+ Hours

- Overall Page CSS
  - Helped with implementing and styling pages with Yimeng’s design as well as initial layouts
  - Worked with team members to incorporate interactive visualizations into the website
- A3 map visualization improvements
  - Worked with victor on making the area graph to compare the data of two different countries
  - Created the tooltip that allows for hover options when looking at individual countries
  - Added smoother animations when switching between the selected countries
  - Found dataset that can be used for the daily cases and deaths
- Final graph prediction data
  - Made improvements to the final visualization made by victor making the tooltip legible throughout
  - Added some different colors and look for the visualization order to fit the layout made by Yimeng
- Impact of Lockdown
  - Helped with incorporating Paolo’s Impact of Lockdown code into the website (fixing D3 version issues)
  - Assisted Paolo in making styling decisions as well as the messages displayed on visualization

### Owen

Total time: 30+ hours

- Hospital Data Visualization
  - data cleanup for COVID 19 data set used for visualization.
  - created Vega-lite visualization and scripting for implementation into the project
- Deaths to Cases Visualization
  - data cleanup for COVID 19 data set used for visualization.
  - created Vega-Lite visualization and scripting for implementation into project.

### Yimeng

Total Time: 20+ Hours

- Overall visual and UX design
  - Designed the layout and visual system for the 13 pages in Figma.
  - Created the interaction mockup for teammates to better understand the design and interactions.
  - Tried with different illustrations and icons to improve the dynamic viewing of the website.
  - Chose the appropriate color palette and typography for the whole design.
  - Summarized the visual system for other team members to follow.
  - Cited the illustrations in an appropriate format.
- CSS editing
  - Kept the consistency of the color in the data visualizations.
  - Refined the visual design with different illustrations.
  - Added and updated the icons on the last page.
  - Tried to change the margin of the whole website.
  - Improved the visual style of the cover page (font size, font color, and background design).]
- Edited the final project video
