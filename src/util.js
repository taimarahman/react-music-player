import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Lose Her Way",
      cover: "https://i.scdn.co/image/ab67616d0000b2737ab7b8be6a89e935df5d7474",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31589",
      color: ["#32643D", "#95BE66"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Waiting",
      cover: "https://i.scdn.co/image/ab67616d0000b2730f571abe472289e236d83de5",
      artist: "Parkbench Epiphany",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27504",
      color: ["#7998AA", "#F89A9C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Ripple Effect",
      cover: "https://i.scdn.co/image/ab67616d0000b273a327fe450e20e2d3e6c4ac6f",
      artist: "Knowmadic",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35640",
      color: ["#3B1755", "#7F56BA"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Saturday Night Movies",
      cover: "https://i.scdn.co/image/8f52da9e4164f40620e5129f71a0891043b61224",
      artist: "A June & J Beat",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8496",
      color: ["#B1DAD7", "#F47B60"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Eowyn",
      cover: "https://i.scdn.co/image/eb55c27a944ea573d0e3808720f2febc49888920",
      artist: "City Girl",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8577",
      color: ["#F58287", "#D0E6C0"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Imagination",
      cover: "https://i.scdn.co/image/ab67616d0000b273a3b01849679396fdc6276db8",
      artist: "Montell Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9332",
      color: ["#894F71", "#B84D6D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Low Tide",
      cover: "https://i.scdn.co/image/ab67616d0000b27346f9e10057ba030f8dc880e4",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36940",
      artist: "Yasper, chromonicci",
      color: ["#05427A", "#CF0000"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
