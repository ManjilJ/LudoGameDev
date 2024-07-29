import React, { useState, useEffect, useRef } from "react";
import l_board from "./l_board.png";
import l_board_d from "./l_board_d.png";
import cellimg from "./cellimg.png";
import cellimg_homeline from "./cellimg_homeline.png";
import "./LudoMain.css";
import { useHotkeys } from "react-hotkeys-hook";
import { motion, useCycle } from "framer-motion";

let array_yellow = [0, 0, 0, 0];
let AboveFive_yellow = true;
let array_green = [0, 0, 0, 0];
let AboveFive_green = true;
let array_blue = [0, 0, 0, 0];
let AboveFive_blue = true;
let array_red = [0, 0, 0, 0];
let AboveFive_red = true;
let cellPos_HomeLine_Yellow = [];
let cellPositions = [
  { top: "99%", left: "99%" },

  { top: "42%", left: "5%" },
  { top: "42%", left: "11%" },
  { top: "42%", left: "17%" },
  { top: "42%", left: "23%" },
  { top: "42%", left: "29%" },
  { top: "42%", left: "35.5%" },

  { top: "36%", left: "42%" },
  { top: "29.7%", left: "42%" },
  { top: "23.2%", left: "42%" },
  { top: "17%", left: "42%" },
  { top: "10%", left: "42%" },
  { top: "4%", left: "42%" },

  { top: "4%", left: "48.3%" },

  { top: "4%", left: "54.3%" },
  { top: "10%", left: "54.3%" },
  { top: "17%", left: "54.3%" },
  { top: "23.2%", left: "54.3%" },
  { top: "29.7%", left: "54.3%" },
  { top: "36%", left: "54.3%" },

  { top: "42%", left: "61.2%" },
  { top: "42%", left: "67.2%" },
  { top: "42%", left: "73.1%" },
  { top: "42%", left: "79.4%" },
  { top: "42%", left: "85.8%" },
  { top: "42%", left: "92%" },
  { top: "48%", left: "92%" },
  { top: "54.2%", left: "92%" },
  { top: "54.2%", left: "85.8%" },
  { top: "54.2%", left: "79.4%" },
  { top: "54.2%", left: "73.1%" },
  { top: "54.2%", left: "67.2%" },
  { top: "54.2%", left: "61.2%" },

  { top: "60.2%", left: "54.3%" },
  { top: "67%", left: "54.3%" },
  { top: "73.5%", left: "54.3%" },
  { top: "79.7%", left: "54.3%" },
  { top: "86%", left: "54.3%" },
  { top: "92.3%", left: "54.3%" },

  { top: "92.3%", left: "48.2%" },

  { top: "92.3%", left: "42%" },
  { top: "86%", left: "42%" },
  { top: "79.7%", left: "42%" },
  { top: "73%", left: "42%" },
  { top: "67%", left: "42%" },
  { top: "60%", left: "42%" },

  { top: "54.2%", left: "35.5%" },
  { top: "54.2%", left: "29%" },
  { top: "54.2%", left: "23%" },
  { top: "54.2%", left: "17%" },
  { top: "54.2%", left: "11%" },
  { top: "54.2%", left: "5%" },

  { top: "48%", left: "5%" },
];

cellPos_HomeLine_Yellow = [
  { top: "111%", left: "11%" },
  { top: "48%", left: "11%" },
  { top: "48%", left: "17%" },
  { top: "48%", left: "23%" },
  { top: "48%", left: "29%" },
  { top: "48%", left: "35.5%" },
  { top: "48%", left: "42.5%" },
];

const cellPos_HomeLine_Green = [
  { top: "111%", left: "61%" },
  { top: "10%", left: "48.3%" },
  { top: "17%", left: "48.3%" },
  { top: "23.2%", left: "48.3%" },
  { top: "29.7%", left: "48.3%" },
  { top: "36%", left: "48.3%" },
  { top: "43%", left: "48.3%" },
];

const cellPos_HomeLine_Blue = [
  { top: "111%", left: "35%" },
  { top: "86%", left: "48.2%" },
  { top: "79.7%", left: "48.2%" },
  { top: "73%", left: "48.2%" },
  { top: "67%", left: "48.2%" },
  { top: "60%", left: "48.2%" },
  { top: "53%", left: "48.2%" },
];

const cellPos_HomeLine_Red = [
  { top: "111%", left: "88%" },
  { top: "48%", left: "85.8%" },
  { top: "48%", left: "79.4%" },
  { top: "48%", left: "73.1%" },
  { top: "48%", left: "67.2%" },
  { top: "48%", left: "61.2%" },
  { top: "48%", left: "54.5%" },
];

let infoPlayers = {
  yellow: [
    {
      color_piece: "yellow",
      label: "0",
      top: "113.98%",
      left: "10.79%",
      default_top: 20,
      default_left: 4,
      hot_spot: 0,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "yellow",
      label: "1",
      top: "12.98%",
      left: "13.79%",
      default_top: 20,
      default_left: 4,
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "yellow",
      label: "2",
      top: "12.77%",
      left: "25.59%",
      default_top: "12.77%",
      default_left: "25.59%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "yellow",
      label: "3",
      top: "23.57%",
      left: "14.23%",
      default_top: "23.57%",
      default_left: "14.23%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "yellow",
      label: "4",
      top: "23.36%",
      left: "25.18%",
      default_top: "23.36%",
      default_left: "25.18%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
  ],

  blue: [
    {
      color_piece: "blue",
      label: "0",
      top: "113.98%",
      left: "33.79%",
      default_top: "113.98%",
      default_left: "33.79%",
      hot_spot: 0,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "blue",
      label: "1",
      top: "70.77%",
      left: "11.79%",
      default_top: "70.77%",
      default_left: "11.79%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "blue",
      label: "2",
      top: "70.37%",
      left: "23.19%",
      default_top: "70.37%",
      default_left: "23.19%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "blue",
      label: "3",
      top: "81.37%",
      left: "11.79%",
      default_top: "81.37%",
      default_left: "11.79%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "blue",
      label: "4",
      top: "81.37%",
      left: "23.01%",
      default_top: "81.37%",
      default_left: "23.01%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
  ],
  green: [
    {
      color_piece: "green",
      label: "0",
      top: "113.98%",
      left: "60.79%",
      default_top: "113.98%",
      default_left: "60.79%",
      hot_spot: 0,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "green",
      label: "1",
      top: "13.77%",
      left: "71.79%",
      default_top: "13.77%",
      default_left: "71.79%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "green",
      label: "2",
      top: "13.77%",
      left: "82.89%",
      default_top: "13.77%",
      default_left: "82.89%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "green",
      label: "3",
      top: "25.36%",
      left: "72.38%",
      default_top: "25.36%",
      default_left: "72.38%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "green",
      label: "4",
      top: "25.36%",
      left: "83.18%",
      default_top: "25.36%",
      default_left: "83.18%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
  ],
  red: [
    {
      color_piece: "red",
      label: "0",
      top: "113.98%",
      left: "87.79%",
      default_top: "113.98%",
      default_left: "87.79%",
      hot_spot: 0,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "red",
      label: "1",
      top: "71.77%",
      left: "70.79%",
      default_top: "71.77%",
      default_left: "70.79%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "red",
      label: "2",
      top: "71.77%",
      left: "81.89%",
      default_top: "71.77%",
      default_left: "81.89%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "red",
      label: "3",
      top: "82.37%",
      left: "70.79%",
      default_top: "82.37%",
      default_left: "70.79%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
    {
      color_piece: "red",
      label: "4",
      top: "82.37%",
      left: "81.89%",
      default_top: "82.37%",
      default_left: "81.89%",
      hot_spot: 1,
      home_spot: 0,
      home_reached: false,
      transition: false,
    },
  ],
};

const playersArray = Object.entries(infoPlayers);

playersArray.forEach(([key, items]) => {
  items.forEach((item) => {
    item.default_top = item.top;
    item.default_left = item.left;
  });
});

let infoPlayersCopy = JSON.parse(JSON.stringify(infoPlayers));

const Cell = ({ id, position }) => (
  <div className="cell" id={`l_brd_cell_${id}`} style={position}>
    <img src={cellimg} alt={`C ${id}`} id={`l_brd_cell_${id}_img`} />
  </div>
);

const HomeCell = ({ id, position }) => (
  <div className="homecell" id={`l_brd_cell_home_line${id}`} style={position}>
    <img
      src={cellimg_homeline}
      alt={`C ${id}`}
      id={`l_brd_cell_home_line${id}_img`}
    />
  </div>
);

const cells = [];
for (let i = 0; i <= 52; i++) {
  const id = i.toString().padStart(2, "0");
  cells.push(<Cell key={id} id={id} position={cellPositions[i]} />);
}
const Home_cells_Yellow = [];
for (let i = 0; i <= 6; i++) {
  const id = i.toString().padStart(2, "0");
  Home_cells_Yellow.push(
    <HomeCell key={id} id={`y${id}`} position={cellPos_HomeLine_Yellow[i]} />
  );
}
const Home_cells_Green = [];
for (let i = 0; i <= 6; i++) {
  const id = i.toString().padStart(2, "0");
  Home_cells_Green.push(
    <HomeCell key={id} id={`g${id}`} position={cellPos_HomeLine_Green[i]} />
  );
}
const Home_cells_Blue = [];
for (let i = 0; i <= 6; i++) {
  const id = i.toString().padStart(2, "0");
  Home_cells_Blue.push(
    <HomeCell key={id} id={`b${id}`} position={cellPos_HomeLine_Blue[i]} />
  );
}
const Home_cells_Red = [];
for (let i = 0; i <= 6; i++) {
  const id = i.toString().padStart(2, "0");
  Home_cells_Red.push(
    <HomeCell key={id} id={`r${id}`} position={cellPos_HomeLine_Red[i]} />
  );
}

const processColor = (
  players,
  color,
  array,
  aboveFive,
  parent_IndexYGBR_Piece
) => {
  let IndexYGBR_Piece = parent_IndexYGBR_Piece;
  while (aboveFive) {
    if (players[color][IndexYGBR_Piece].home_spot > 5) {
      array[IndexYGBR_Piece - 1] = IndexYGBR_Piece;
      const allNonZero = array.every((element) => element !== 0);
      if (allNonZero) {
        aboveFive = false;
        break;
      }
      IndexYGBR_Piece = Math.ceil(Math.random() * 4);
      continue;
    } else {
      break;
    }
  }
  return { aboveFive, IndexYGBR_Piece };
};

let NotAllHome = false;

const LudoMain = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [players, setPlayers] = useState({});
  const playerElementsRef = useRef(null);
  const [boardRendered, setBoardRendered] = useState(false);
  const [dummyState, setDummyState] = useState(true);
  const inputRef = useRef(null);
  const [yellow_All_Home, setYellow_All_Home] = useState(false);
  const [green_All_Home, setGreen_All_Home] = useState(false);
  const [blue_All_Home, setBlue_All_Home] = useState(false);
  const [red_All_Home, setRed_All_Home] = useState(false);
  const [reset, setReset] = useState(false);
  const [hoveredPlayer, setHoveredPlayer] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [boardChange, setBoardChange] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imgRef = useRef(null);
  const [fadeState, setFadeState] = useState({ opacity: 1 });
  const [animateState, cycleAnimateState] = useCycle(
    {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      filter: "blur(0px)",
      rotate: 0,
    },
    {
      opacity: 0.5,
      scale: 0.5,
      rotateX: 90,
      rotateY: 90,
      rotateZ: 90,
      filter: "blur(100px)",
      rotate: 2,
    }
  );

  useHotkeys("alt+y", () => handleYellowClick(0));
  useHotkeys("alt+g", () => handleGreenClick(0));
  useHotkeys("alt+b", () => handleBlueClick(0));
  useHotkeys("alt+r", () => handleRedClick(0));
  useHotkeys("alt+s", () => setReset((prev) => !prev));
  useHotkeys("alt+1", () => handleRedClick(1));
  useHotkeys("alt+2", () => handleRedClick(2));
  useHotkeys("alt+3", () => handleRedClick(3));
  useHotkeys("alt+4", () => handleRedClick(4));
  useHotkeys("alt+u", () => handleGreenClick(1));
  useHotkeys("alt+i", () => handleGreenClick(2));
  useHotkeys("alt+o", () => handleGreenClick(3));
  useHotkeys("alt+p", () => handleGreenClick(4));
  useHotkeys("alt+j", () => handleBlueClick(1));
  useHotkeys("alt+k", () => handleBlueClick(2));
  useHotkeys("alt+l", () => handleBlueClick(3));
  useHotkeys("alt+;", () => handleBlueClick(4));
  useHotkeys("alt+z", () => handleYellowClick(1));
  useHotkeys("alt+x", () => handleYellowClick(2));
  useHotkeys("alt+c", () => handleYellowClick(3));
  useHotkeys("alt+v", () => handleYellowClick(4));

  useEffect(() => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const scopesleep = (ms) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const updatePlayers = async () => {
      setYellow_All_Home(false);
      setGreen_All_Home(false);
      setBlue_All_Home(false);
      setRed_All_Home(false);

      array_yellow = [0, 0, 0, 0];
      AboveFive_yellow = true;
      array_green = [0, 0, 0, 0];
      AboveFive_green = true;
      array_blue = [0, 0, 0, 0];
      AboveFive_blue = true;
      array_red = [0, 0, 0, 0];
      AboveFive_red = true;
      const infoPlayersCopyCopy = JSON.parse(JSON.stringify(infoPlayersCopy));

      let isDifferent = false;

      Object.keys(players).some((color) => {
        return players[color].some((player) => {
          if (
            player.top !== player.default_top ||
            player.left !== player.default_left
          ) {
            isDifferent = true;
            return true;
          }
          return false;
        });
      });
      console.log("isDifferent", isDifferent);
      setPlayers((prevPlayers) => {
        const updatedPlayers = { ...prevPlayers };
        Object.keys(infoPlayersCopyCopy).forEach((color) => {
          updatedPlayers[color] = infoPlayersCopyCopy[color].map((player) => ({
            ...player,
            top: player.default_top,
            left: player.default_left,
            transition: true,
          }));
        });
        return updatedPlayers;
      });
      await sleep(100);

      if (!isDifferent && NotAllHome) {
        setPlayers((prevPlayers) => {
          const updatedPlayers = { ...prevPlayers };
          Object.keys(infoPlayersCopyCopy).forEach((color) => {
            updatedPlayers[color] = infoPlayersCopyCopy[color].map(
              (player) => ({
                ...player,
                top: `${Math.ceil(Math.random() * 100)}%`,
                left: `${Math.ceil(Math.random() * 100)}%`,
                transition: true,
              })
            );
          });
          return updatedPlayers;
        });
        await sleep(900);

        setPlayers((prevPlayers) => {
          const updatedPlayers = { ...prevPlayers };
          Object.keys(infoPlayersCopyCopy).forEach((color) => {
            updatedPlayers[color] = infoPlayersCopyCopy[color].map(
              (player) => ({
                ...player,
                top: player.default_top,
                left: player.default_left,
                transition: true,
              })
            );
          });
          return updatedPlayers;
        });
      }
    };
    cycleAnimateState();

    const scopesleepAndCycle = async () => {
      cycleAnimateState();
      await scopesleep(100);
      cycleAnimateState();
    };
    scopesleepAndCycle();
    cycleAnimateState();

    updatePlayers();
    NotAllHome = true;
  }, [reset]);

  let playerRefs_With_Dummy0 = useRef(null);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setPlayers((prevPlayers) => ({
        ...prevPlayers,
        ...infoPlayers,
      }));
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    } else {
      handleDOMContentLoaded();
    }
    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);

  useEffect(() => {}, [players]);

  useEffect(() => {
    playerRefs_With_Dummy0.current = {
      yellow: [
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
      ],
      green: [
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
      ],
      red: [
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
      ],
      blue: [
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
      ],
    };

    return () => {};
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBoardRendered(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const GenRandom = () => {
    setIsAnimating(true);
    let randomNumber;
    randomNumber = Math.ceil(Math.random() * 6);
    let txt = document.getElementById("inputId");
    txt.value = randomNumber;
    return randomNumber;
  };
  const handleMouseDown = (color, piece_chosen) => {
    handleClick(color, piece_chosen);
  };

  const handleClick = async (color, piece_chosen) => {
    let randomNum = GenRandom();
    let count = 0;
    let IndexYGBR_Piece = Math.ceil(Math.random() * 4);
    if (piece_chosen === "undefined" || piece_chosen === 0) {
      IndexYGBR_Piece = Math.ceil(Math.random() * 4);
    } else {
      IndexYGBR_Piece = piece_chosen;
    }
    let ValidIndex = false;
    if (yellow_All_Home && red_All_Home && green_All_Home && blue_All_Home) {
      ValidIndex = true;
      // May be redundant below line
      setReset((prev) => !prev);
    }
    while (!ValidIndex) {
      if (IndexYGBR_Piece === 1) {
        if (yellow_All_Home) {
          IndexYGBR_Piece = Math.ceil(Math.random() * 4);
          continue;
        } else {
          ValidIndex = true;
          break;
        }
      }
      if (IndexYGBR_Piece === 2) {
        if (green_All_Home) {
          IndexYGBR_Piece = Math.ceil(Math.random() * 4);
          continue;
        } else {
          ValidIndex = true;
          break;
        }
      }
      if (IndexYGBR_Piece === 3) {
        if (blue_All_Home) {
          IndexYGBR_Piece = Math.ceil(Math.random() * 4);
          continue;
        } else {
          ValidIndex = true;
          break;
        }
      }
      if (IndexYGBR_Piece === 4) {
        if (red_All_Home) {
          IndexYGBR_Piece = Math.ceil(Math.random() * 4);
          continue;
        } else {
          ValidIndex = true;
          break;
        }
      }
    }
    NotAllHome = true;
    switch (color) {
      case "yellow":
        if (!yellow_All_Home) {
          const run_yellow = processColor(
            players,
            color,
            array_yellow,
            AboveFive_yellow,
            IndexYGBR_Piece
          );
          NotAllHome = run_yellow.aboveFive;
          if (NotAllHome) {
            IndexYGBR_Piece = run_yellow.IndexYGBR_Piece;
          } else {
            setYellow_All_Home((prev) => true);
            if (
              yellow_All_Home &&
              red_All_Home &&
              green_All_Home &&
              blue_All_Home
            ) {
              ValidIndex = true;
              // May be redundant below line
              setReset((prev) => !prev);
            }
          }
        } else {
          NotAllHome = false;
        }
        break;
      case "green":
        if (!green_All_Home) {
          const run_green = processColor(
            players,
            color,
            array_green,
            AboveFive_green,
            IndexYGBR_Piece
          );
          NotAllHome = run_green.aboveFive;
          if (NotAllHome) {
            IndexYGBR_Piece = run_green.IndexYGBR_Piece;
          } else {
            setGreen_All_Home((prev) => true);
            if (
              yellow_All_Home &&
              red_All_Home &&
              green_All_Home &&
              blue_All_Home
            ) {
              ValidIndex = true;
              // May be redundant below line
              setReset((prev) => !prev);
            }
          }
        } else {
          NotAllHome = false;
        }
        break;
      case "blue":
        if (!blue_All_Home) {
          const run_blue = processColor(
            players,
            color,
            array_blue,
            AboveFive_blue,
            IndexYGBR_Piece
          );
          NotAllHome = run_blue.aboveFive;
          if (NotAllHome) {
            IndexYGBR_Piece = run_blue.IndexYGBR_Piece;
          } else {
            setBlue_All_Home((prev) => true);
            if (
              yellow_All_Home &&
              red_All_Home &&
              green_All_Home &&
              blue_All_Home
            ) {
              ValidIndex = true;
              // May be redundant below line
              setReset((prev) => !prev);
            }
          }
        } else {
          NotAllHome = false;
        }
        break;
      case "red":
        if (!red_All_Home) {
          const run_red = processColor(
            players,
            color,
            array_red,
            AboveFive_red,
            IndexYGBR_Piece
          );
          NotAllHome = run_red.aboveFive;
          if (NotAllHome) {
            IndexYGBR_Piece = run_red.IndexYGBR_Piece;
          } else {
            setRed_All_Home((prev) => true);
            if (
              yellow_All_Home &&
              red_All_Home &&
              green_All_Home &&
              blue_All_Home
            ) {
              ValidIndex = true;
              // May be redundant below line
              setReset((prev) => !prev);
            }
          }
        } else {
          NotAllHome = false;
        }
        break;
      default:
        break;
    }
    if (NotAllHome) {
      const currentPlayerRef =
        playerRefs_With_Dummy0.current[color][IndexYGBR_Piece];

      currentPlayerRef.current.classList.add("blinking");

      setTimeout(async () => {
        currentPlayerRef.current.classList.remove("blinking");

        while (count < randomNum) {
          await new Promise((resolve) => setTimeout(resolve, 110));
          const updatedPlayers = { ...players };
          const currentPlayer = updatedPlayers[color][IndexYGBR_Piece];
          let finalPositionAlreadyReached = false;

          if (currentPlayer.hot_spot <= 52) {
            let newPosition = count + currentPlayer.hot_spot;
            if (currentPlayer.hot_spot > 52) {
              currentPlayer.hot_spot = 53;
            }

            let remainingSteps = newPosition > 52 ? newPosition - 52 : 0;
            let finalPosition = newPosition > 52 ? 52 : newPosition;

            let finalPositionDisplay = getFinalPositionDisplay(
              color,
              finalPosition
            );
            currentPlayer.top = cellPositions[finalPositionDisplay].top;
            currentPlayer.left = cellPositions[finalPositionDisplay].left;
            currentPlayer.transition = false;

            if (remainingSteps > 0) {
              finalPositionAlreadyReached = true;
              let newHomeSpot = currentPlayer.home_spot + remainingSteps;
              if (newHomeSpot > 6) {
                newHomeSpot = 6;
              }
              const homePos = newHomeSpot;
              currentPlayer.top = getHomeLinePosition(color, homePos).top;
              currentPlayer.left = getHomeLinePosition(color, homePos).left;
              if (newPosition > 52) {
                currentPlayer.hot_spot = newPosition;
                newHomeSpot = currentPlayer.home_spot + 1;
                currentPlayer.home_spot = newHomeSpot;
              }
            }
          } else {
            let newHomeSpot = currentPlayer.home_spot + 1;
            if (newHomeSpot > 6) {
              newHomeSpot = 6;
            }
            const homePos = newHomeSpot;
            currentPlayer.top = getHomeLinePosition(color, homePos).top;
            currentPlayer.left = getHomeLinePosition(color, homePos).left;
            currentPlayer.home_spot = homePos;
            currentPlayer.hot_spot = 60;
            currentPlayer.transition = false;
          }
          setPlayers((prevPlayers) => {
            let updatedPlayers = { ...prevPlayers };
            return updatedPlayers;
          });
          count++;
          if (count >= randomNum) {
            if (!finalPositionAlreadyReached) {
              currentPlayer.hot_spot += randomNum;
            } else {
              if (currentPlayer.home_spot > 6) {
                currentPlayer.home_spot = 6;
                currentPlayer.home_reached = true;
                currentPlayer.hot_spot = 60;
              }
            }

            setPlayers((prevPlayers) => {
              let updatedPlayers = { ...prevPlayers };
              return updatedPlayers;
            });
            setIsAnimating(false);
          }
        }

        const s_currentPlayer = players[color][IndexYGBR_Piece];
        handleOverlappingPlayers(color, s_currentPlayer);
        handlePieceTaken(color, s_currentPlayer);
        if (tellStat() >= 16) {
          const infoPlayersCopyCopy = JSON.parse(
            JSON.stringify(infoPlayersCopy)
          );

          setYellow_All_Home((prev) => false);
          setGreen_All_Home((prev) => false);
          setBlue_All_Home((prev) => false);
          setRed_All_Home((prev) => false);
          array_yellow = [0, 0, 0, 0];
          AboveFive_yellow = true;
          array_green = [0, 0, 0, 0];
          AboveFive_green = true;
          array_blue = [0, 0, 0, 0];
          AboveFive_blue = true;
          array_red = [0, 0, 0, 0];
          AboveFive_red = true;
          setPlayers((prevPlayers) => {
            let updatedPlayers = { ...prevPlayers };
            if (updatedPlayers.red && updatedPlayers.red.length > 0) {
              // debugger
              updatedPlayers.red[1] = {
                ...updatedPlayers.red[1],
                top: "71.11%",
              };
            }

            return updatedPlayers;
          });
          setReset((prev) => !prev);
          setTimeout(() => {
            // Log updated players after state update
          }, 1000);
          setTimeout(() => {
            setPlayers((prevPlayers) => {
              const updatedPlayers = { ...prevPlayers, ...infoPlayersCopyCopy };
              return updatedPlayers;
            });
          }, 2000);
        }
      }, 1000);
    }
  };

  const getFinalPositionDisplay = (color, finalPosition) => {
    switch (color) {
      case "yellow":
        return finalPosition + 0 > 52 ? finalPosition - 0 : finalPosition + 0;
      case "red":
        return finalPosition + 26 > 52
          ? finalPosition - 26
          : finalPosition + 26;
      case "green":
        return finalPosition + 13 > 52
          ? finalPosition - 39
          : finalPosition + 13;
      case "blue":
        return finalPosition + 39 > 52
          ? finalPosition - 13
          : finalPosition + 39;
      default:
        return finalPosition;
    }
  };

  const getFinalPositionDisplayAdjusted = (color, finalPosition) => {
    switch (color) {
      case "yellow":
        return (finalPosition + 0) % 53 === 0 ? 53 : (finalPosition + 0) % 53;
      case "red":
        return finalPosition > 27 && finalPosition <= 53
          ? finalPosition - 26
          : finalPosition >= 2 && finalPosition <= 27
          ? finalPosition + 26
          : finalPosition;

      case "green":
        return finalPosition > 40 && finalPosition <= 53
          ? finalPosition - 39
          : finalPosition >= 2 && finalPosition <= 40
          ? finalPosition + 13
          : finalPosition;

      case "blue":
        return finalPosition >= 15 && finalPosition <= 53
          ? finalPosition - 13
          : finalPosition >= 2 && finalPosition <= 15
          ? finalPosition + 39
          : finalPosition;

      default:
        return finalPosition;
    }
  };
  const getHomeLinePosition = (color, homePos) => {
    switch (color) {
      case "yellow":
        return cellPos_HomeLine_Yellow[homePos];
      case "red":
        return cellPos_HomeLine_Red[homePos];
      case "green":
        return cellPos_HomeLine_Green[homePos];
      case "blue":
        return cellPos_HomeLine_Blue[homePos];
      default:
        return { top: 0, left: 0 };
    }
  };
  const handlePieceTaken = (color, s_currentPlayer) => {
    let overlappingPlayersOtherColors = ["yellow", "green", "blue", "red"];

    let remainingColors = overlappingPlayersOtherColors.filter(
      (col) => col !== color
    );

    setPlayers((prevPlayers) => {
      const updatedPlayers = { ...prevPlayers };

      remainingColors.forEach((remainingColor) => {
        updatedPlayers[remainingColor] = updatedPlayers[remainingColor].map(
          (player) => {
            let offSetAdjustedHotSpot = getFinalPositionDisplayAdjusted(
              player.color_piece,
              player.hot_spot
            );
            let s_offSetAdjustedHotSpot = getFinalPositionDisplayAdjusted(
              s_currentPlayer.color_piece,
              s_currentPlayer.hot_spot
            );
            if (
              player.hot_spot > 1 &&
              player.hot_spot <= 53 &&
              player.label > "0" &&
              offSetAdjustedHotSpot === s_offSetAdjustedHotSpot &&
              !player.home_reached
            ) {
              console.log(
                "Hotspot",
                player.hot_spot,
                "homespot",
                player.home_spot
              );
              return {
                ...player,
                top: player.default_top,
                left: player.default_left,
                hot_spot: 1,
                home_spot: 0,
                home_reached: false,
                transition: true,
              };
            }
            return player;
          }
        );
      });

      return updatedPlayers;
    });
  };

  const handleOverlappingPlayers = (color, s_currentPlayer) => {
    let overlappingPlayers = [];
    Object.values(players[color]).forEach((player) => {
      if (player.label !== s_currentPlayer.label) {
        if (
          player.hot_spot > 1 &&
          player.hot_spot <= 53 &&
          player.label > "0" &&
          player.hot_spot === s_currentPlayer.hot_spot
        ) {
          overlappingPlayers = [...overlappingPlayers, player];
          overlappingPlayers = [...overlappingPlayers, s_currentPlayer];
        } else {
          const s_currentPlayerRef =
            playerRefs_With_Dummy0.current[color][player.label];

          if (
            s_currentPlayerRef &&
            s_currentPlayerRef.current &&
            s_currentPlayerRef.current.classList.contains("overlapping")
          ) {
            s_currentPlayerRef.current.classList.remove("overlapping");
          }
        }
      }
    });

    if (overlappingPlayers.length > 0) {
      overlappingPlayers.forEach((player, index) => {
        const offset_left = index * 2;
        const offset_top = index * -2;
        const s_currentPlayerRef =
          playerRefs_With_Dummy0.current[color][player.label];
        s_currentPlayerRef.current.classList.add("overlapping");
        s_currentPlayerRef.current.style.left = `calc(${s_currentPlayer.left} + ${offset_left}px)`;
        s_currentPlayerRef.current.style.top = `calc(${s_currentPlayer.top} + ${offset_top}px)`;
        s_currentPlayer.top = s_currentPlayerRef.current.style.top;
        s_currentPlayer.left = s_currentPlayerRef.current.style.left;
      });
    }
  };
  const handleMouseOver = (event, player) => {
    setHoveredPlayer(player);
  };

  const handleMouseOut = (event) => {
    setHoveredPlayer(null);
  };

  let playerElements = Object.keys(players).map((color) => (
    <div key={color} className={`player-group`}>
      {players[color].map((player, index) => {
        const isHovered = hoveredPlayer === player;

        return (
          <div
            key={index}
            className={`player ${color} ${isHovered ? "hovered" : ""} ${
              player.transition ? "transition transformed" : ""
            }`}
            ref={playerRefs_With_Dummy0.current[color][index]}
            style={{ top: player.top, left: player.left }}
            onMouseDown={(event) =>
              handleMouseDown(color, parseInt(player.label))
            }
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <p>{player.label}</p>
          </div>
        );
      })}
    </div>
  ));
  const handleYellowClick = (piece_chose) =>
    handleClick("yellow", piece_chose, true);
  const handleRedClick = (piece_chose) => handleClick("red", piece_chose, true);
  const handleGreenClick = (piece_chose) =>
    handleClick("green", piece_chose, true);
  const handleBlueClick = (piece_chose) =>
    handleClick("blue", piece_chose, true);

  useEffect(() => {
    if (!isChecked) {
      return;
    }
    const timer1 = setTimeout(() => {
      setDummyState((prevStete) => !prevStete);
      const somerandom = Math.floor(Math.random() * 4) + 1;

      let inputRandom = Math.floor(Math.random() * 6) + 1;
      if (inputRef.current) {
        inputRef.current.value = inputRandom.toString();
      } else {
        return;
      }
      if (!players || Object.keys(players).length === 0) {
        return;
      }
      switch (somerandom) {
        case 1:
          handleYellowClick(0);
          break;
        case 2:
          handleRedClick(0);
          break;
        case 3:
          handleGreenClick(0);
          break;
        case 4:
          handleBlueClick(0);
          break;
        default:
          break;
      }
    }, 2500);
  }, [dummyState, isChecked]);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const tellStat = () => {
    if (Array.isArray(players)) {
      players.forEach((item) => {
        console.log("Array:", item);
      });
    } else {
      const playersArray = Object.entries(players);
      let pieces_Out_home_spot = 0;
      playersArray.forEach(([key, items]) => {
        items.forEach((item) => {
          if (item.home_spot > 1) {
            pieces_Out_home_spot++;
          }
        });
      });
      return pieces_Out_home_spot;
    }
  };

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
    }
    const timeoutId = setTimeout(() => {
      if (imgRef.current) {
        imgRef.current.style.display = "block";
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [boardChange]);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleClickBoardChange = async () => {
    setFadeState({ opacity: 0 });
    await sleep(1490);
    setFadeState({ opacity: 1 });
    setBoardChange((prev) => !prev);
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const initialUI = (
    <div>
      <div className="board">
        <motion.div
          initial={{ opacity: 1 }}
          animate={fadeState}
          transition={{ opacity: { duration: 1.5, ease: "easeInOut" } }}
          className="image-wrapper"
        >
          <motion.img
            src={boardChange ? l_board : l_board_d}
            alt="Ludo Board"
            initial={false}
            animate={animateState}
            transition={{
              rotateX: { duration: 1.5, ease: "easeInOut" },
              rotateY: { duration: 1.5, ease: "easeInOut" },
              rotateZ: { duration: 1.5, ease: "easeInOut" },
              opacity: { type: "spring", stiffness: 100 },
              scale: { type: "spring", stiffness: 100 },
              rotate: { type: "spring", stiffness: 100 },
              filter: { duration: 0.5, ease: "easeInOut" },
            }}
            className={`board-image ${isTransitioning ? "hidden" : "visible"}`}
            key={boardChange ? "l_board" : "l_board_d"}
            // style={{ filter: "drop-shadow(8px 8px 8px rgb(200, 205, 170))" }}
          />
        </motion.div>

        {playerElements}
        {cells}
        {Home_cells_Yellow}
        {Home_cells_Green}
        {Home_cells_Blue}
        {Home_cells_Red}
        <button
          onClick={() => handleYellowClick(0)}
          className="button_ygbr"
          name="Yellow"
          style={{
            backgroundColor: "Yellow",
            position: "absolute",
            top: "32%",
            left: "30%",
          }}
        >
          Yellow
        </button>
        <button
          onClick={() => handleGreenClick(0)}
          className="button_ygbr"
          name="Green"
          style={{
            backgroundColor: "Green",
            position: "absolute",
            top: "32%",
            left: "60%",
          }}
        >
          Green
        </button>
        <button
          onClick={() => handleRedClick(0)}
          className="button_ygbr"
          name="Red"
          style={{
            color: "azure",
            backgroundColor: "Red",
            position: "absolute",
            top: "60%",
            left: "60%",
          }}
        >
          Red
        </button>
        <button
          onClick={() => handleBlueClick(0)}
          className="button_ygbr"
          name="Blue"
          style={{
            color: "darkgrey",
            backgroundColor: "Blue",
            position: "absolute",
            top: "60%",
            left: "30%",
          }}
        >
          Blue
        </button>
      </div>
      <input
        id="inputId"
        ref={inputRef}
        style={{
          position: "absolute",
          max: "52",
          width: "33px",
          left: "10px",
          top: "40px",
        }}
        type="number"
      />{" "}
      <span style={{ position: "absolute", left: "10px", top: "20px  " }}>
        Dice Roll
      </span>
      <div
        className="chkbox"
        onClick={handleCheckBox}
        style={{ position: "absolute", left: "10px", top: "80px" }}
      >
        Continuous Autoplay
        <input type="checkbox" name="autoplay" defaultChecked={isChecked} />
      </div>
      <div
        className="chkbox"
        style={{ position: "absolute", left: "10px", top: "120px" }}
      >
        Board Change
        <input
          type="checkbox"
          name="boardChange"
          checked={boardChange}
          onChange={handleClickBoardChange}
        />
      </div>
      <button
        onClick={() => tellStat()}
        className="stat"
        style={{ width: "280px" }}
      >
        Developed by: Manjil.J. July 2024
        <a href="https://github.com/manjilj/ludogamedev/">
          {" "}
          https://github.com/manjilj/ludogamedev
        </a>
      </button>
    </div>
  );

  return <div className="game-container">{initialUI}</div>;
};

export default LudoMain;
