export type project = {
  projImg: string,
  iconImg?: string,
  projName: string,
  projDesc: string,
  github?: string,
  website?: string
}

const projects: project[] = [
  {
    projImg: "/images/igemClub.png",
    projName: "UW iGEM Club",
    projDesc: "Co-lead of the UW iGEM webdev team that both designs and builds the website.",
    website: "http://students.washington.edu/uwigem/#/",
    github: "https://github.com/uwigem/uwigem2020-react"
  },
  {
    projImg: "/images/FightCovid19.png",
    projName: "Data Visualization",
    projDesc: "A data visualization project made using D3.js for UW CSE442. Please be patient, there's a lot of data to load.",
    // github: "https://github.com/cse442-20f/FP-Fight-Covid19/",
    website: "https://cse442-20f.github.io/FP-Fight-Covid19/"
  },
  {
    projImg: "/images/TicTacToeNextJS.png",
    projName: "Tic Tac Toe - V2",
    projDesc: "A NextJS (React), realtime, multiplayer version of tic tac toe. One user must be in incognito or private mode; or on a different browser or device.",
    github: "https://github.com/VictorShan/tic-tac-toe",
    website: "https://tic-tac-toe.victorshan.vercel.app/"
  },
  {
    projImg: "/images/shopifyFrontend.png",
    projName: "Shopify Frontend Challenge",
    projDesc: "The Shopify 2021 summer internship challenge. It gets data from OMDB database and the ability to nominate movies.",
    github: "https://github.com/VictorShan/shopify2021-frontend",
    website: "https://victorshan.github.io/shopify2021-frontend/"
  },
  {
    projImg: "/images/TicTacToeWinCentered.png",
    projName: "Tic Tac Toe",
    projDesc: "Realtime, multiplayer tic tac toe. One user must be in incognito or private mode; or on a different browser or device.",
    github: "https://github.com/VictorShan/tic-tac-toe/tree/master",
    website: "https://tic-tac-toe-82af8.web.app/"
  },
  {
    projImg: "/images/UWCampusMap.png",
    projName: "UW Campus Map",
    projDesc: "Map from one campus building to another using Dijkstra's algorithm. It uses a REST API to find the route.",
    website: "https://uw-campus-map.herokuapp.com/"
  }
]

export default projects