import React, { useState, useEffect, useRef } from "react";
import l_board from "./l_board.png";
import l_board_d from "./l_board_d.png";
import l_board_dark from "./l_board_dark.png";
import l_board_dark_transp from "./l_board_dark_transp.png";
import l_board_lite_transp from "./l_board_lite_transp.png";
// import l_board_decor_1 from "./l_board_decor_1.png";
import l_board_decor_2 from "./l_board_decor_2.png";
import l_board_decor_3 from "./l_board_decor_3.png";
import l_board_decor_4 from "./l_board_decor_4.png";
import l_board_decor_5 from "./l_board_decor_5.png";
import l_board_decor_6 from "./l_board_decor_6.png";
import l_board_decor_7 from "./l_board_decor_7.png";
import l_board_decor_8 from "./l_board_decor_8.png";
import l_board_decor_9 from "./l_board_decor_9.png";
import l_board_decor_10 from "./l_board_decor_10.png";
import l_board_decor_11 from "./l_board_decor_11.png";
import cellimg from "./cellimg.png";
import yellow_base from "./yelcircle_b.png";
import yellow_baseph from "./yelcircle_bph.png";
import green_base from "./grncircle_b.png";
import green_baseph from "./grncircle_bph.png";
import cellimg_homeline from "./cellimg_homeline.png";
import bg_SkyImage from "./sky.png";
import bg_GalaxyImage from "./galaxy.png";
import "./LudoMain.css";
import DiceAnimation from "./DiceAnimation";
import { useHotkeys } from "react-hotkeys-hook";
import { motion, useCycle } from "framer-motion";
import FormatTimestamp from "./FormatTimestamp";

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

      l_cat_default_top_01: "113.98%",
      l_cat_default_left_01: "10.79%",

      l_cat_default_top_02: "113.98%",
      l_cat_default_left_02: "10.79%",

      l_cat_default_top_03: "113.98%",
      l_cat_default_left_03: "10.79%",

      l_cat_default_top_04: "113.98%",
      l_cat_default_left_04: "10.79%",

      l_cat_default_top_05: "113.98%",
      l_cat_default_left_05: "10.79%",

      l_cat_default_top_06: "113.98%",
      l_cat_default_left_06: "10.79%",

      l_cat_default_top_07: "113.98%",
      l_cat_default_left_07: "10.79%",
      l_cat_default_top_08: "113.98%",
      l_cat_default_left_08: "10.79%",
      l_cat_default_top_09: "113.98%",
      l_cat_default_left_09: "10.79%",
      l_cat_default_top_101: "113.98%",
      l_cat_default_left_101: "10.79%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 0,
      top_Circle: "0%",
      left_Circle: "0%",
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
      l_cat_default_top_01: "11.7%",
      l_cat_default_left_01: "13.72%",
      l_cat_default_top_02: "7.98%",
      l_cat_default_left_02: "7.79%",
      l_cat_default_top_03: "18%",
      l_cat_default_left_03: "17.2%",

      l_cat_default_top_04: "13%",
      l_cat_default_left_04: "14.2%",

      l_cat_default_top_05: "13%",
      l_cat_default_left_05: "23%",

      l_cat_default_top_06: "18.2%",
      l_cat_default_left_06: "17.6%",

      l_cat_default_top_07: "12.3%",
      l_cat_default_left_07: "11.72%",
      l_cat_default_top_08: "13.2%",
      l_cat_default_left_08: "12.97%",
      l_cat_default_top_09: "14%",
      l_cat_default_left_09: "24.2%",
      l_cat_default_top_101: "14.7%",
      l_cat_default_left_101: "14.72%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 6,
      top_Circle: "42%",
      left_Circle: "35.5%",
    },
    {
      color_piece: "yellow",
      label: "2",
      top: "12.77%",
      left: "25.59%",
      default_top: "29.7%",
      default_left: "42%",
      hot_spot: 1,
      home_spot: 0,
      l_cat_default_top_01: "11.7%",
      l_cat_default_left_01: "24.7%",
      l_cat_default_top_02: "7.98%",
      l_cat_default_left_02: "21.59%",
      l_cat_default_top_03: "18%",
      l_cat_default_left_03: "27.2%",
      l_cat_default_top_04: "13%",
      l_cat_default_left_04: "27.2%",

      l_cat_default_top_05: "22.35%",
      l_cat_default_left_05: "32.2%",

      l_cat_default_top_06: "18.2%",
      l_cat_default_left_06: "25.6%",

      l_cat_default_top_07: "12.3%",
      l_cat_default_left_07: "24.7%",
      l_cat_default_top_08: "13.2%",
      l_cat_default_left_08: "23.8%",
      l_cat_default_top_09: "24%",
      l_cat_default_left_09: "33.2%",
      l_cat_default_top_101: "14.7%",
      l_cat_default_left_101: "26.7%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 7,
      top_Circle: "36%",
      left_Circle: "42%",
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

      l_cat_default_top_01: "23.36%",
      l_cat_default_left_01: "13.72%",
      l_cat_default_top_02: "22.57%",
      l_cat_default_left_02: "7.79%",
      l_cat_default_top_03: "28%",
      l_cat_default_left_03: "17.2%",
      l_cat_default_top_04: "26.5%",
      l_cat_default_left_04: "14.2%",

      l_cat_default_top_05: "32%",
      l_cat_default_left_05: "23%",
      l_cat_default_top_06: "24%",
      l_cat_default_left_06: "17.6%",

      l_cat_default_top_07: "26.36%",
      l_cat_default_left_07: "11.72%",
      l_cat_default_top_08: "24%",
      l_cat_default_left_08: "12.97%",
      l_cat_default_top_09: "33%",
      l_cat_default_left_09: "24.2%",
      l_cat_default_top_101: "25.5%",
      l_cat_default_left_101: "14.72%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 8,
      top_Circle: "36%",
      left_Circle: "48.3%",
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

      l_cat_default_top_01: "23.36%",
      l_cat_default_left_01: "24.7%",
      l_cat_default_top_02: "22.57%",
      l_cat_default_left_02: "21.59%",
      l_cat_default_top_03: "28%",
      l_cat_default_left_03: "27.2%",
      l_cat_default_top_04: "26.5%",
      l_cat_default_left_04: "27.2%",

      l_cat_default_top_05: "22.35%",
      l_cat_default_left_05: "13.7%",
      l_cat_default_top_06: "24%",
      l_cat_default_left_06: "25.6%",

      l_cat_default_top_07: "26.36%",
      l_cat_default_left_07: "24.7%",
      l_cat_default_top_08: "24%",
      l_cat_default_left_08: "23.8%",
      l_cat_default_top_09: "24%",
      l_cat_default_left_09: "16.2%",
      l_cat_default_top_101: "25.5%",
      l_cat_default_left_101: "26.7%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 8,
      top_Circle: "29.7%",
      left_Circle: "48.3%",
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

      l_cat_default_top_01: "113.98%",
      l_cat_default_left_01: "33.79%",
      l_cat_default_top_02: "113.98%",
      l_cat_default_left_02: "33.79%",
      l_cat_default_top_03: "113.98%",
      l_cat_default_left_03: "33.79%",
      l_cat_default_top_04: "113.98%",
      l_cat_default_left_04: "33.79%",

      l_cat_default_top_05: "113.98%",
      l_cat_default_left_05: "33.79%",
      l_cat_default_top_06: "113.98%",
      l_cat_default_left_06: "33.79%",

      l_cat_default_top_07: "113.98%",
      l_cat_default_left_07: "33.79%",
      l_cat_default_top_08: "113.98%",
      l_cat_default_left_08: "33.79%",
      l_cat_default_top_09: "113.98%",
      l_cat_default_left_09: "33.79%",
      l_cat_default_top_101: "113.98%",
      l_cat_default_left_101: "33.79%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 0,
      top_Circle: "0%",
      left_Circle: "0%",
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

      l_cat_default_top_01: "70.77%",
      l_cat_default_left_01: "13.72%",
      l_cat_default_top_02: "70.37%",
      l_cat_default_left_02: "7.98%",
      l_cat_default_top_03: "68%",
      l_cat_default_left_03: "17.2%",
      l_cat_default_top_04: "68.6%",
      l_cat_default_left_04: "14%",

      l_cat_default_top_05: "65.3%",
      l_cat_default_left_05: "23%",
      l_cat_default_top_06: "71.5%",
      l_cat_default_left_06: "17.6%",

      l_cat_default_top_07: "71.77%",
      l_cat_default_left_07: "12.2%",
      l_cat_default_top_08: "71.47%",
      l_cat_default_left_08: "12.97%",
      l_cat_default_top_09: "61.2%",
      l_cat_default_left_09: "24.2%",
      l_cat_default_top_101: "68.77%",
      l_cat_default_left_101: "14.72%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 20,
      top_Circle: "36%",
      left_Circle: "54.3%",
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

      l_cat_default_top_01: "70.77%",
      l_cat_default_left_01: "25.29%",
      l_cat_default_top_02: "70.37%",
      l_cat_default_left_02: "23.19%",
      l_cat_default_top_03: "68%",
      l_cat_default_left_03: "27.2%",
      l_cat_default_top_04: "68.6%",
      l_cat_default_left_04: "27.2%",

      l_cat_default_top_05: "74%",
      l_cat_default_left_05: "32.2%",
      l_cat_default_top_06: "71.5%",
      l_cat_default_left_06: "25.6%",

      l_cat_default_top_07: "71.77%",
      l_cat_default_left_07: "25%",
      l_cat_default_top_08: "71.47%",
      l_cat_default_left_08: "23.8%",

      l_cat_default_top_09: "72%",
      l_cat_default_left_09: "33.2%",
      l_cat_default_top_101: "68.77%",
      l_cat_default_left_101: "26.7%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 21,
      top_Circle: "42%",
      left_Circle: "61.2%",
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

      l_cat_default_top_01: "81.37%",
      l_cat_default_left_01: "13.72%",
      l_cat_default_top_02: "85.1%",
      l_cat_default_left_02: "7.98%",
      l_cat_default_top_03: "78%",
      l_cat_default_left_03: "17.2%",
      l_cat_default_top_04: "82.1%",
      l_cat_default_left_04: "14%",

      l_cat_default_top_05: "83%",
      l_cat_default_left_05: "23%",
      l_cat_default_top_06: "77%",
      l_cat_default_left_06: "17.6%",

      l_cat_default_top_07: "86.37%",
      l_cat_default_left_07: "12.2%",
      l_cat_default_top_08: "82.37%",
      l_cat_default_left_08: "12.97%",

      l_cat_default_top_09: "81.6%",
      l_cat_default_left_09: "24.7%",
      l_cat_default_top_101: "80.37%",
      l_cat_default_left_101: "14.72%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 22,
      top_Circle: "48%",
      left_Circle: "61.2%",
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

      l_cat_default_top_01: "81.37%",
      l_cat_default_left_01: "25.29%",
      l_cat_default_top_02: "85.1%",
      l_cat_default_left_02: "23.01%",
      l_cat_default_top_03: "78%",
      l_cat_default_left_03: "27.2%",
      l_cat_default_top_04: "82.1%",
      l_cat_default_left_04: "27.2%",

      l_cat_default_top_05: "74%",
      l_cat_default_left_05: "13.7%",
      l_cat_default_top_06: "77%",
      l_cat_default_left_06: "25.6%",

      l_cat_default_top_07: "86.37%",
      l_cat_default_left_07: "25%",
      l_cat_default_top_08: "82.37%",
      l_cat_default_left_08: "23.8%",
      l_cat_default_top_09: "72%",
      l_cat_default_left_09: "16.2%",
      l_cat_default_top_101: "80.37%",
      l_cat_default_left_101: "26.7%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 22,
      top_Circle: "48%",
      left_Circle: "67.2%",
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

      l_cat_default_top_01: "113.98%",
      l_cat_default_left_01: "60.79%",
      l_cat_default_top_02: "113.98%",
      l_cat_default_left_02: "60.79%",
      l_cat_default_top_03: "113.98%",
      l_cat_default_left_03: "60.79%",
      l_cat_default_top_04: "113.98%",
      l_cat_default_left_04: "60.79%",

      l_cat_default_top_05: "113.98%",
      l_cat_default_left_05: "60.79%",
      l_cat_default_top_06: "113.98%",
      l_cat_default_left_06: "60.79%",

      l_cat_default_top_07: "113.98%",
      l_cat_default_left_07: "60.79%",
      l_cat_default_top_08: "113.98%",
      l_cat_default_left_08: "60.79%",
      l_cat_default_top_09: "113.98%",
      l_cat_default_left_09: "60.79%",
      l_cat_default_top_101: "113.98%",
      l_cat_default_left_101: "60.79%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 0,
      top_Circle: "0%",
      left_Circle: "0%",
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

      l_cat_default_top_01: "11.7%",
      l_cat_default_left_01: "70.79%",
      l_cat_default_top_02: "7.98%",
      l_cat_default_left_02: "71.79%",
      l_cat_default_top_03: "18%",
      l_cat_default_left_03: "68.2%",
      l_cat_default_top_04: "13%",
      l_cat_default_left_04: "69.2%",

      l_cat_default_top_05: "13%",
      l_cat_default_left_05: "74.2%",
      l_cat_default_top_06: "18.2%",
      l_cat_default_left_06: "70.6%",

      l_cat_default_top_07: "12.3%",
      l_cat_default_left_07: "71.2%",
      l_cat_default_top_08: "13.2%",
      l_cat_default_left_08: "71.2%",
      l_cat_default_top_09: "14%",
      l_cat_default_left_09: "72.2%",
      l_cat_default_top_101: "14.7%",
      l_cat_default_left_101: "69.4%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 28,
      top_Circle: "60%",
      left_Circle: "42%",
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

      l_cat_default_top_01: "11.7%",
      l_cat_default_left_01: "82.4%",
      l_cat_default_top_02: "7.98%",
      l_cat_default_left_02: "85.89%",
      l_cat_default_top_03: "18%",
      l_cat_default_left_03: "78%",
      l_cat_default_top_04: "13%",
      l_cat_default_left_04: "82.3%",

      l_cat_default_top_05: "22.35%",
      l_cat_default_left_05: "83.4%",
      l_cat_default_top_06: "18.2%",
      l_cat_default_left_06: "78%",

      l_cat_default_top_07: "12.3%",
      l_cat_default_left_07: "84.4%",
      l_cat_default_top_08: "13.2%",
      l_cat_default_left_08: "82%",
      l_cat_default_top_09: "24%",
      l_cat_default_left_09: "81%",
      l_cat_default_top_101: "14.7%",
      l_cat_default_left_101: "80.8%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 29,
      top_Circle: "54.2%",
      left_Circle: "35.5%",
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

      l_cat_default_top_01: "23.36%",
      l_cat_default_left_01: "70.79%",
      l_cat_default_top_02: "22.57%",
      l_cat_default_left_02: "72.38%",
      l_cat_default_top_03: "28%",
      l_cat_default_left_03: "68.2%",
      l_cat_default_top_04: "26.5%",
      l_cat_default_left_04: "69.2%",

      l_cat_default_top_05: "32%",
      l_cat_default_left_05: "74.2%",
      l_cat_default_top_06: "24%",
      l_cat_default_left_06: "70.6%",

      l_cat_default_top_07: "26.36%",
      l_cat_default_left_07: "71.2%",
      l_cat_default_top_08: "24%",
      l_cat_default_left_08: "71.2%",

      l_cat_default_top_09: "33%",
      l_cat_default_left_09: "72.2%",
      l_cat_default_top_101: "25.5%",
      l_cat_default_left_101: "69.4%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 30,
      top_Circle: "48%",
      left_Circle: "35.5%",
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

      l_cat_default_top_01: "23.36%",
      l_cat_default_left_01: "82.4%",
      l_cat_default_top_02: "22.57%",
      l_cat_default_left_02: "85.89%",
      l_cat_default_top_03: "28%",
      l_cat_default_left_03: "78%",
      l_cat_default_top_04: "26.5%",
      l_cat_default_left_04: "82.3%",

      l_cat_default_top_05: "22.35%",
      l_cat_default_left_05: "65.1%",
      l_cat_default_top_06: "24%",
      l_cat_default_left_06: "78%",

      l_cat_default_top_07: "26.36%",
      l_cat_default_left_07: "84.4%",
      l_cat_default_top_08: "24%",
      l_cat_default_left_08: "82%",

      l_cat_default_top_09: "24%",
      l_cat_default_left_09: "63.5%",
      l_cat_default_top_101: "25.5%",
      l_cat_default_left_101: "80.8%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 31,
      top_Circle: "67%",
      left_Circle: "48.2%",
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

      l_cat_default_top_01: "113.98%",
      l_cat_default_left_01: "87.79%",
      l_cat_default_top_02: "113.98%",
      l_cat_default_left_02: "87.79%",
      l_cat_default_top_03: "113.98%",
      l_cat_default_left_03: "87.79%",
      l_cat_default_top_04: "113.98%",
      l_cat_default_left_04: "87.79%",

      l_cat_default_top_05: "113.98%",
      l_cat_default_left_05: "87.79%",
      l_cat_default_top_06: "113.98%",
      l_cat_default_left_06: "87.79%",

      l_cat_default_top_07: "113.98%",
      l_cat_default_left_07: "87.79%",
      l_cat_default_top_08: "113.98%",
      l_cat_default_left_08: "87.79%",

      l_cat_default_top_09: "113.98%",
      l_cat_default_left_09: "87.79%",
      l_cat_default_top_101: "113.98%",
      l_cat_default_left_101: "87.79%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 0,
      top_Circle: "0%",
      left_Circle: "0%",
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

      l_cat_default_top_01: "71.77%",
      l_cat_default_left_01: "70.79%",
      l_cat_default_top_02: "70.77%",
      l_cat_default_left_02: "70.79%",
      l_cat_default_top_03: "68%",
      l_cat_default_left_03: "68.2%",
      l_cat_default_top_04: "68.6%",
      l_cat_default_left_04: "68.2%",

      l_cat_default_top_05: "65%",
      l_cat_default_left_05: "74.2%",
      l_cat_default_top_06: "71.5%",
      l_cat_default_left_06: "70.7%",

      l_cat_default_top_07: "71.77%",
      l_cat_default_left_07: "71.2%",
      l_cat_default_top_08: "71.47%",
      l_cat_default_left_08: "71.2%",
      l_cat_default_top_09: "61.2%",
      l_cat_default_left_09: "72.2%",
      l_cat_default_top_101: "68.77%",
      l_cat_default_left_101: "69.4%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 34,
      top_Circle: "54.2%",
      left_Circle: "61.2%",
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

      l_cat_default_top_01: "71.77%",
      l_cat_default_left_01: "81.89%",
      l_cat_default_top_02: "70.77%",
      l_cat_default_left_02: "85.89%",
      l_cat_default_top_03: "68%",
      l_cat_default_left_03: "78%",
      l_cat_default_top_04: "68.6%",
      l_cat_default_left_04: "82.3%",

      l_cat_default_top_05: "74%",
      l_cat_default_left_05: "83.4%",
      l_cat_default_top_06: "71.5%",
      l_cat_default_left_06: "77.7%",

      l_cat_default_top_07: "71.77%",
      l_cat_default_left_07: "84.4%",
      l_cat_default_top_08: "71.47%",
      l_cat_default_left_08: "82%",

      l_cat_default_top_09: "72%",
      l_cat_default_left_09: "81%",
      l_cat_default_top_101: "68.77%",
      l_cat_default_left_101: "80.8%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 35,
      top_Circle: "60.2%",
      left_Circle: "54.3%",
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

      l_cat_default_top_01: "82.37%",
      l_cat_default_left_01: "70.79%",
      l_cat_default_top_02: "85.1%",
      l_cat_default_left_02: "70.79%",
      l_cat_default_top_03: "78%",
      l_cat_default_left_03: "68.2%",
      l_cat_default_top_04: "82.1%",
      l_cat_default_left_04: "68.2%",

      l_cat_default_top_05: "83%",
      l_cat_default_left_05: "74.2%",
      l_cat_default_top_06: "77%",
      l_cat_default_left_06: "70.7%",

      l_cat_default_top_07: "86.37%",
      l_cat_default_left_07: "71.2%",
      l_cat_default_top_08: "82.37%",
      l_cat_default_left_08: "71.2%",
      l_cat_default_top_09: "81.6%",
      l_cat_default_left_09: "72.2%",
      l_cat_default_top_101: "80.37%",
      l_cat_default_left_101: "69.4%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 36,
      top_Circle: "60%",
      left_Circle: "48.2%",
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

      l_cat_default_top_01: "82.37%",
      l_cat_default_left_01: "81.89%",
      l_cat_default_top_02: "85.1%",
      l_cat_default_left_02: "85.89%",
      l_cat_default_top_03: "78%",
      l_cat_default_left_03: "78%",
      l_cat_default_top_04: "82.1%",
      l_cat_default_left_04: "82.3%",

      l_cat_default_top_05: "74%",
      l_cat_default_left_05: "65.1%",
      l_cat_default_top_06: "77%",
      l_cat_default_left_06: "78%",

      l_cat_default_top_07: "86.37%",
      l_cat_default_left_07: "84.4%",
      l_cat_default_top_08: "82.37%",
      l_cat_default_left_08: "82%",
      l_cat_default_top_09: "72%",
      l_cat_default_left_09: "63.5%",
      l_cat_default_top_101: "80.37%",
      l_cat_default_left_101: "80.8%",

      home_reached: false,
      transition: false,
      top_Circle_hot: 41,
      top_Circle: "48%",
      left_Circle: "29%",
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
  const [boardChange, setBoardChange] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imgRef = useRef(null);
  const [activateTrail, setActivateTrail] = useState(false);
  const [trailOn, setTrailOn] = useState(false);
  const [fadeState, setFadeState] = useState({ opacity: 1 });
  const [homeBorderAnimate, setHomeBorderAnimate] = useState(false);
  const [player_3dlook_piece, setPlayer_3dlook_piece] = useState(false);
  const [finalImage, setFinalImage] = useState(0);
  const [lockScroll, setLockScroll] = useState(true);
  const [showDice, setShowDice] = useState(true);
  const [baseOpacityState, setBaseOpacityState] = useState(1);
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
  const [selectionMethod, setSelectionMethod] = useState("radio");
  const [currentColor, setCurrentColor] = useState("");
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useHotkeys("alt+q", async () => handlePositionCircle());
  useHotkeys("alt+t", async () => {
    for (let n = 1; n < 2; n++) {
      handleRotateCircle();
      await sleep(555);
    }
  });

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
  // console.log("Render LM");
  const l_board_dropdown =
    // boardChange === 6
    // ? l_board_decor_1
    //:
    boardChange === 6
      ? l_board_decor_3
      : boardChange === 7
      ? l_board_decor_2
      : boardChange === 9
      ? l_board_decor_4
      : boardChange === 10
      ? l_board_decor_5
      : boardChange === 11
      ? l_board_decor_6
      : boardChange === 12
      ? l_board_decor_7
      : boardChange === 13
      ? l_board_decor_8
      : boardChange === 14
      ? l_board_decor_9
      : boardChange === 15
      ? l_board_decor_10
      : boardChange === 16
      ? l_board_decor_11
      : null;

  function handlePositionCircle() {
    setTrailOn(false);
    const PiecePositionToRound = async () => {
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
          let adjustedDefaultTop, adjustedDefaultLeft;

          switch (boardChange) {
            case 6:
              adjustedDefaultTop = player.l_cat_default_top_09;
              adjustedDefaultLeft = player.l_cat_default_left_09;
              break;
            case 7:
              adjustedDefaultTop = player.l_cat_default_top_101;
              adjustedDefaultLeft = player.l_cat_default_left_101;
              break;
            case 9:
              adjustedDefaultTop = player.l_cat_default_top_01;
              adjustedDefaultLeft = player.l_cat_default_left_01;
              break;
            case 10:
              adjustedDefaultTop = player.l_cat_default_top_02;
              adjustedDefaultLeft = player.l_cat_default_left_02;
              break;
            case 11:
              adjustedDefaultTop = player.l_cat_default_top_03;
              adjustedDefaultLeft = player.l_cat_default_left_03;
              break;
            case 12:
              adjustedDefaultTop = player.l_cat_default_top_06;
              adjustedDefaultLeft = player.l_cat_default_left_06;
              break;
            case 13:
              adjustedDefaultTop = player.l_cat_default_top_07;
              adjustedDefaultLeft = player.l_cat_default_left_07;
              break;
            case 14:
              adjustedDefaultTop = player.l_cat_default_top_08;
              adjustedDefaultLeft = player.l_cat_default_left_08;
              break;
            // Add more cases if necessary
            case 15:
              adjustedDefaultTop = player.l_cat_default_top_04;
              adjustedDefaultLeft = player.l_cat_default_left_04;
              break;
            case 16:
              adjustedDefaultTop = player.l_cat_default_top_05;
              adjustedDefaultLeft = player.l_cat_default_left_05;
              break;
            default:
              adjustedDefaultTop = player.default_top;
              adjustedDefaultLeft = player.default_left;
              break;
          }

          if (
            player.top !== adjustedDefaultTop ||
            player.left !== adjustedDefaultLeft
          ) {
            isDifferent = true;
            return true;
          }
          return false;
        });
      });

      setPlayers((prevPlayers) => {
        const updatedPlayers = { ...prevPlayers };

        Object.keys(infoPlayersCopyCopy).forEach((color) => {
          updatedPlayers[color] = infoPlayersCopyCopy[color].map((player) => {
            let newTop, newLeft;
            if (boardChange === 9) {
              newTop = player.l_cat_default_top_01;
              newLeft = player.l_cat_default_left_01;
            } else if (boardChange === 6) {
              newTop = player.l_cat_default_top_09;
              newLeft = player.l_cat_default_left_09;
            } else if (boardChange === 7) {
              newTop = player.l_cat_default_top_101;
              newLeft = player.l_cat_default_left_101;
            } else if (boardChange === 10) {
              newTop = player.l_cat_default_top_02;
              newLeft = player.l_cat_default_left_02;
            } else if (boardChange === 11) {
              newTop = player.l_cat_default_top_03;
              newLeft = player.l_cat_default_left_03;
            } else if (boardChange === 12) {
              newTop = player.l_cat_default_top_06;
              newLeft = player.l_cat_default_left_06;
            } else if (boardChange === 13) {
              newTop = player.l_cat_default_top_07;
              newLeft = player.l_cat_default_left_07;
            } else if (boardChange === 14) {
              newTop = player.l_cat_default_top_08;
              newLeft = player.l_cat_default_left_08;
            } else if (boardChange === 15) {
              newTop = player.l_cat_default_top_04;
              newLeft = player.l_cat_default_left_04;
            } else if (boardChange === 16) {
              newTop = player.l_cat_default_top_05;
              newLeft = player.l_cat_default_left_05;
            } else {
              newTop = player.default_top;
              newLeft = player.default_left;
            }

            return {
              ...player,
              top: newTop,
              left: newLeft,
              transition: true,
            };
          });
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
                top: player.top_Circle,
                left: player.left_Circle,
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
                top: player.top_Circle,
                left: player.left_Circle,
                transition: true,
              })
            );
          });
          return updatedPlayers;
        });
        await sleep(1900);

        setPlayers((prevPlayers) => {
          const updatedPlayers = { ...prevPlayers };

          const middlePlayers = [];
          const colorOrder = ["yellow", "blue", "red", "green"];

          colorOrder.forEach((color) => {
            const playersArray = updatedPlayers[color];
            middlePlayers.push(
              ...playersArray.slice(1, playersArray.length - 1)
            );
          });

          const ZerothTop_Circle = middlePlayers[0].top_Circle;
          const ZerothLeft_Circle = middlePlayers[0].left_Circle;

          for (let i = 0; i < middlePlayers.length - 1; i++) {
            middlePlayers[i].top_Circle = middlePlayers[i + 1].top_Circle;
            middlePlayers[i].left_Circle = middlePlayers[i + 1].left_Circle;
          }
          middlePlayers[middlePlayers.length - 1].top_Circle = ZerothTop_Circle;
          middlePlayers[middlePlayers.length - 1].left_Circle =
            ZerothLeft_Circle;
          let clr = "yellow";
          for (let i = 1; i <= 12; i += 3) {
            clr = "yellow";
            let playersArray = updatedPlayers;
            switch (true) {
              case i === 1:
                clr = "yellow";
                break;
              case i === 4:
                clr = "blue";
                break;
              case i === 7:
                clr = "red";
                break;
              case i === 10:
                clr = "green";
                break;
              default:
                break;
            }
            playersArray[clr][1].top = middlePlayers[i - 1].top_Circle;
            playersArray[clr][1].left = middlePlayers[i - 1].left_Circle;
            playersArray[clr][2].top = middlePlayers[i + 1 - 1].top_Circle;
            playersArray[clr][2].left = middlePlayers[i + 1 - 1].left_Circle;
            playersArray[clr][3].top = middlePlayers[i + 2 - 1].top_Circle;
            playersArray[clr][3].left = middlePlayers[i + 2 - 1].left_Circle;
          }
          return updatedPlayers;
        });
        await sleep(900);
      }
    };

    PiecePositionToRound();
    NotAllHome = true;
  }
  function handleRotateCircle() {
    const RotatePieceInRound = async () => {
      setPlayers((prevPlayers) => {
        const updatedPlayers = { ...prevPlayers };

        const middlePlayers = [];
        const colorOrder = ["yellow", "blue", "red", "green"];

        colorOrder.forEach((color) => {
          const playersArray = updatedPlayers[color];
          middlePlayers.push(...playersArray.slice(1, playersArray.length - 1));
        });

        const ZerothTop_Circle = middlePlayers[0].top_Circle;
        const ZerothLeft_Circle = middlePlayers[0].left_Circle;

        for (let i = 0; i < middlePlayers.length - 1; i++) {
          middlePlayers[i].top_Circle = middlePlayers[i + 1].top_Circle;
          middlePlayers[i].left_Circle = middlePlayers[i + 1].left_Circle;
        }
        middlePlayers[middlePlayers.length - 1].top_Circle = ZerothTop_Circle;
        middlePlayers[middlePlayers.length - 1].left_Circle = ZerothLeft_Circle;
        let clr = "yellow";
        for (let i = 1; i <= 12; i += 3) {
          clr = "yellow";
          let playersArray = updatedPlayers;
          switch (true) {
            case i === 1:
              clr = "yellow";
              break;
            case i === 4:
              clr = "blue";
              break;
            case i === 7:
              clr = "red";
              break;
            case i === 10:
              clr = "green";
              break;
            default:
              break;
          }
          playersArray[clr][1].top = middlePlayers[i - 1].top_Circle;
          playersArray[clr][1].left = middlePlayers[i - 1].left_Circle;
          playersArray[clr][2].top = middlePlayers[i + 1 - 1].top_Circle;
          playersArray[clr][2].left = middlePlayers[i + 1 - 1].left_Circle;
          playersArray[clr][3].top = middlePlayers[i + 2 - 1].top_Circle;
          playersArray[clr][3].left = middlePlayers[i + 2 - 1].left_Circle;
        }
        return updatedPlayers;
      });
      await sleep(2900);
    };
    RotatePieceInRound();
  }

  useEffect(() => {
    setTrailOn(false);

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
          let adjustedDefaultTop, adjustedDefaultLeft;

          switch (boardChange) {
            case 6:
              adjustedDefaultTop = player.l_cat_default_top_09;
              adjustedDefaultLeft = player.l_cat_default_left_09;
              break;
            case 7:
              adjustedDefaultTop = player.l_cat_default_top_101;
              adjustedDefaultLeft = player.l_cat_default_left_101;
              break;
            case 9:
              adjustedDefaultTop = player.l_cat_default_top_01;
              adjustedDefaultLeft = player.l_cat_default_left_01;
              break;
            case 10:
              adjustedDefaultTop = player.l_cat_default_top_02;
              adjustedDefaultLeft = player.l_cat_default_left_02;
              break;
            case 11:
              adjustedDefaultTop = player.l_cat_default_top_03;
              adjustedDefaultLeft = player.l_cat_default_left_03;
              break;
            case 12:
              adjustedDefaultTop = player.l_cat_default_top_05;
              adjustedDefaultLeft = player.l_cat_default_left_05;
              break;
            case 13:
              adjustedDefaultTop = player.l_cat_default_top_07;
              adjustedDefaultLeft = player.l_cat_default_left_07;
              break;
            case 14:
              adjustedDefaultTop = player.l_cat_default_top_08;
              adjustedDefaultLeft = player.l_cat_default_left_08;
              break;
            case 15:
              adjustedDefaultTop = player.l_cat_default_top_04;
              adjustedDefaultLeft = player.l_cat_default_left_04;
              break;
            case 16:
              adjustedDefaultTop = player.l_cat_default_top_05;
              adjustedDefaultLeft = player.l_cat_default_left_05;
              break;
            // Add more cases if necessary
            default:
              adjustedDefaultTop = player.default_top;
              adjustedDefaultLeft = player.default_left;
              break;
          }

          if (
            player.top !== adjustedDefaultTop ||
            player.left !== adjustedDefaultLeft
          ) {
            isDifferent = true;
            return true;
          }
          return false;
        });
      });
      setPlayers((prevPlayers) => {
        const updatedPlayers = { ...prevPlayers };

        Object.keys(infoPlayersCopyCopy).forEach((color) => {
          updatedPlayers[color] = infoPlayersCopyCopy[color].map((player) => {
            let newTop, newLeft;

            switch (boardChange) {
              case 6:
                newTop = player.l_cat_default_top_09;
                newLeft = player.l_cat_default_left_09;
                break;
              case 7:
                newTop = player.l_cat_default_top_101;
                newLeft = player.l_cat_default_left_101;
                break;
              case 9:
                newTop = player.l_cat_default_top_01;
                newLeft = player.l_cat_default_left_01;
                break;
              case 10:
                newTop = player.l_cat_default_top_02;
                newLeft = player.l_cat_default_left_02;
                break;
              case 11:
                newTop = player.l_cat_default_top_03;
                newLeft = player.l_cat_default_left_03;
                break;
              case 12:
                newTop = player.l_cat_default_top_06;
                newLeft = player.l_cat_default_left_06;
                break;
              case 13:
                newTop = player.l_cat_default_top_07;
                newLeft = player.l_cat_default_left_07;
                break;
              case 14:
                newTop = player.l_cat_default_top_08;
                newLeft = player.l_cat_default_left_08;
                break;
              case 15:
                newTop = player.l_cat_default_top_04;
                newLeft = player.l_cat_default_left_04;
                break;
              case 16:
                newTop = player.l_cat_default_top_05;
                newLeft = player.l_cat_default_left_05;
                break;
              default:
                newTop = player.default_top;
                newLeft = player.default_left;
                break;
            }

            return {
              ...player,
              top: newTop,
              left: newLeft,
              transition: true,
            };
          });
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
            updatedPlayers[color] = infoPlayersCopyCopy[color].map((player) => {
              let newTop, newLeft;

              switch (boardChange) {
                case 6:
                  newTop = player.l_cat_default_top_09;
                  newLeft = player.l_cat_default_left_09;
                  break;
                case 7:
                  newTop = player.l_cat_default_top_101;
                  newLeft = player.l_cat_default_left_101;
                  break;
                case 9:
                  newTop = player.l_cat_default_top_01;
                  newLeft = player.l_cat_default_left_01;
                  break;
                case 10:
                  newTop = player.l_cat_default_top_02;
                  newLeft = player.l_cat_default_left_02;
                  break;
                case 11:
                  newTop = player.l_cat_default_top_03;
                  newLeft = player.l_cat_default_left_03;
                  break;
                case 12:
                  newTop = player.l_cat_default_top_06;
                  newLeft = player.l_cat_default_left_06;
                  break;
                case 13:
                  newTop = player.l_cat_default_top_07;
                  newLeft = player.l_cat_default_left_07;
                  break;
                case 14:
                  newTop = player.l_cat_default_top_08;
                  newLeft = player.l_cat_default_left_08;
                  break;
                case 15:
                  newTop = player.l_cat_default_top_04;
                  newLeft = player.l_cat_default_left_04;
                  break;
                case 16:
                  newTop = player.l_cat_default_top_05;
                  newLeft = player.l_cat_default_left_05;
                  break;
                default:
                  newTop = player.default_top;
                  newLeft = player.default_left;
                  break;
              }

              return {
                ...player,
                top: newTop,
                left: newLeft,
                transition: true,
              };
            });
          });

          return updatedPlayers;
        });
      }
    };
    cycleAnimateState();

    setBaseOpacityState(0);

    const Cycle = async () => {
      cycleAnimateState();
      await sleep(100);
      cycleAnimateState();
    };
    Cycle();
    cycleAnimateState();

    updatePlayers();
    NotAllHome = true;

    const timeout = setTimeout(() => {
      setBaseOpacityState(1);
    }, 2420);

    return () => clearTimeout(timeout);
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
    setIsAnimating((prev) => true);
    let randomNumber;
    randomNumber = Math.ceil(Math.random() * 6);
    let txt = document.getElementById("inputId");
    txt.value = randomNumber;
    setFinalImage(randomNumber);
    return randomNumber;
  };
  const handleMouseDown = (color, piece_chosen) => {
    handleClick(color, piece_chosen);
  };

  const handleClick = async (color, piece_chosen) => {
    switch (color) {
      case "yellow":
        if (yellow_All_Home) {
          return;
        }
        break;
      case "green":
        if (green_All_Home) {
          return;
        }
        break;
      case "red":
        if (red_All_Home) {
          return;
        }
        break;
      case "blue":
        if (blue_All_Home) {
          return;
        }
        break;
      default:
        break;
    }
    setCurrentColor(color);
    if (activateTrail) {
      setTrailOn(true);
    } else {
      setTrailOn(false);
    }
    let randomNum = GenRandom();
    let count = 0;
    let IndexYGBR_Piece = Math.ceil(Math.random() * 4);
    if (piece_chosen === "undefined" || piece_chosen === 0) {
      // IndexYGBR_Piece = Math.ceil(Math.random() * 4);
    } else {
      IndexYGBR_Piece = piece_chosen;
    }
    if (yellow_All_Home && red_All_Home && green_All_Home && blue_All_Home) {
      setReset((prev) => !prev);
    }

    const boardPositionMap = {
      1: { topKey: "default_top", leftKey: "default_left" },
      2: { topKey: "default_top", leftKey: "default_left" },
      3: { topKey: "default_top", leftKey: "default_left" },
      4: { topKey: "default_top", leftKey: "default_left" },
      5: { topKey: "default_top", leftKey: "default_left" },
      6: { topKey: "l_cat_default_top_09", leftKey: "l_cat_default_left_09" },
      7: { topKey: "l_cat_default_top_101", leftKey: "l_cat_default_left_101" },
      9: { topKey: "l_cat_default_top_01", leftKey: "l_cat_default_left_01" },
      10: { topKey: "l_cat_default_top_02", leftKey: "l_cat_default_left_02" },
      11: { topKey: "l_cat_default_top_03", leftKey: "l_cat_default_left_03" },
      12: { topKey: "l_cat_default_top_06", leftKey: "l_cat_default_left_06" },
      13: { topKey: "l_cat_default_top_07", leftKey: "l_cat_default_left_07" },
      14: { topKey: "l_cat_default_top_08", leftKey: "l_cat_default_left_08" },
      15: { topKey: "l_cat_default_top_04", leftKey: "l_cat_default_left_04" },
      16: { topKey: "l_cat_default_top_05", leftKey: "l_cat_default_left_05" },
      // Add more mappings for each boardChange value if necessary
    };

    function handleColorProcess(
      color,
      colorArray,
      colorAboveFive,
      colorAllHome,
      setColorAllHome
    ) {
      if (!colorAllHome) {
        const result = processColor(
          players,
          color,
          colorArray,
          colorAboveFive,
          IndexYGBR_Piece
        );
        NotAllHome = result.aboveFive;

        if (NotAllHome) {
          IndexYGBR_Piece = result.IndexYGBR_Piece;
        } else {
          setColorAllHome(true);

          if (
            yellow_All_Home &&
            red_All_Home &&
            green_All_Home &&
            blue_All_Home
          ) {
            setReset((prev) => !prev);
          }
        }
      }
    }

    NotAllHome = true;

    switch (color) {
      case "yellow":
        if (yellow_All_Home) {
          return; // Redundant but for time-being...
        }
        handleColorProcess(
          "yellow",
          array_yellow,
          AboveFive_yellow,
          yellow_All_Home,
          setYellow_All_Home
        );
        break;
      case "green":
        if (green_All_Home) {
          return; // Redundant but for time-being...
        }
        handleColorProcess(
          "green",
          array_green,
          AboveFive_green,
          green_All_Home,
          setGreen_All_Home
        );
        break;
      case "blue":
        if (blue_All_Home) {
          return; // Redundant but for time-being...
        }

        handleColorProcess(
          "blue",
          array_blue,
          AboveFive_blue,
          blue_All_Home,
          setBlue_All_Home
        );
        break;
      case "red":
        if (red_All_Home) {
          return; // Redundant but for time-being...
        }

        handleColorProcess(
          "red",
          array_red,
          AboveFive_red,
          red_All_Home,
          setRed_All_Home
        );
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
          await sleep(110);
          const updatedPlayers = { ...players };
          const currentPlayer = updatedPlayers[color][IndexYGBR_Piece];
          let finalPositionAlreadyReached = false;

          if (currentPlayer.hot_spot <= 52) {
            let newPosition = count + currentPlayer.hot_spot;
            if (currentPlayer.hot_spot > 52) {
              currentPlayer.hot_spot = 60;
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

          setPlayers((prevPlayers) => {
            let updatedPlayers = { ...prevPlayers };

            if (updatedPlayers.red && updatedPlayers.red.length > 0) {
              updatedPlayers.red[1] = {
                ...updatedPlayers.red[1],
                top: "71.11%", // to trigger reset
              };
            }

            return updatedPlayers;
          });

          setReset((prev) => !prev);

          setTimeout(() => {
            setPlayers((prevPlayers) => {
              const updatedPlayers = { ...prevPlayers };

              const positionKeys = boardPositionMap[boardChange];

              if (positionKeys) {
                const { topKey, leftKey } = positionKeys;

                ["red", "green", "blue", "yellow"].forEach((color) => {
                  if (updatedPlayers[color]) {
                    updatedPlayers[color] = updatedPlayers[color].map(
                      (player) => {
                        // Update only players with hot_spot equal to 1 (unplayed pieces)
                        if (player.hot_spot === 1) {
                          return {
                            ...player,
                            top: player[topKey] || player.default_top,
                            left: player[leftKey] || player.default_left,
                          };
                        }
                        return player;
                      }
                    );
                  }
                });
              }

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

              let newTop, newLeft;
              switch (boardChange) {
                case 6:
                  newTop = player.l_cat_default_top_09;
                  newLeft = player.l_cat_default_left_09;
                  break;
                case 7:
                  newTop = player.l_cat_default_top_101;
                  newLeft = player.l_cat_default_left_101;
                  break;
                case 9:
                  newTop = player.l_cat_default_top_01;
                  newLeft = player.l_cat_default_left_01;
                  break;
                case 10:
                  newTop = player.l_cat_default_top_02;
                  newLeft = player.l_cat_default_left_02;
                  break;
                case 11:
                  newTop = player.l_cat_default_top_03;
                  newLeft = player.l_cat_default_left_03;
                  break;
                case 12:
                  newTop = player.l_cat_default_top_06;
                  newLeft = player.l_cat_default_left_06;
                  break;
                case 13:
                  newTop = player.l_cat_default_top_07;
                  newLeft = player.l_cat_default_left_07;
                  break;
                case 14:
                  newTop = player.l_cat_default_top_08;
                  newLeft = player.l_cat_default_left_08;
                  break;
                case 15:
                  newTop = player.l_cat_default_top_04;
                  newLeft = player.l_cat_default_left_04;
                  break;
                case 16:
                  newTop = player.l_cat_default_top_05;
                  newLeft = player.l_cat_default_left_05;
                  break;
                default:
                  newTop = player.default_top;
                  newLeft = player.default_left;
                  break;
              }

              return {
                ...player,
                top: newTop,
                left: newLeft,
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

        let adjustedTop, adjustedLeft;
        adjustedTop = player.top;
        adjustedLeft = player.left;
        return (
          <>
            <motion.div
              key={index}
              className={`player ${color} ${
                player_3dlook_piece ? "player-3d-look" : ""
              } ${isHovered ? "hovered" : ""} ${
                player.transition ? "transition transformed" : ""
              }`}
              ref={playerRefs_With_Dummy0.current[color][index]}
              style={{ top: adjustedTop, left: adjustedLeft }}
              animate={{
                borderTop: player_3dlook_piece ? "none" : null,
                borderLeft: player_3dlook_piece ? "none" : null,
              }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
              onMouseDown={(event) =>
                handleMouseDown(color, parseInt(player.label))
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <p>{player.label}</p>
            </motion.div>
            {/* Trail effect */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className={`${trailOn ? "trail" : "x"}`}
                style={{
                  top: adjustedTop,
                  left: adjustedLeft,
                  backgroundColor: `${color}`,
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.0918, transition: { duration: 1.8 } }}
              />
            ))}{" "}
          </>
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
    const processColors = () => {
      while (true) {
        const randomColor = Math.floor(Math.random() * 4) + 1;
        switch (randomColor) {
          case 1:
            if (!yellow_All_Home) {
              handleYellowClick(0);
              return;
            }
            break;
          case 2:
            if (!red_All_Home) {
              handleRedClick(0);
              return;
            }
            break;
          case 3:
            if (!green_All_Home) {
              handleGreenClick(0);
              return;
            }
            break;
          case 4:
            if (!blue_All_Home) {
              handleBlueClick(0);
              return;
            }
            break;
          default:
            break;
        }
        if (
          yellow_All_Home &&
          red_All_Home &&
          green_All_Home &&
          blue_All_Home
        ) {
          console.log("All colors are home");
          setReset((prev) => !prev);
          return;
        }
      }
    };

    const timer = setTimeout(() => {
      setDummyState((prevState) => !prevState);
      processColors();
    }, 2500);

    return () => clearTimeout(timer);
  }, [dummyState, isChecked]);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckBoxTrail = () => {
    setActivateTrail(!activateTrail);
  };

  const handleCheckBoxHomeBorderAnimate = () => {
    setHomeBorderAnimate(!homeBorderAnimate);
  };

  const handleCheckBox3dLook_piece = () => {
    setPlayer_3dlook_piece(!player_3dlook_piece);
  };

  const handleCheckboxShowDice = () => {
    setShowDice(!showDice);
  };
  const handleCheckBoxLockScroll = () => {
    setLockScroll(!lockScroll);
  };

  useEffect(() => {
    document.body.style.overflow = lockScroll ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lockScroll]);

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

  const repositionUnplayedPieces = (newBoardChange) => {
    const updatedPlayers = { ...players };

    Object.keys(updatedPlayers).forEach((color) => {
      updatedPlayers[color] = updatedPlayers[color].map((player) => {
        if (player.hot_spot === 1) {
          switch (newBoardChange) {
            case 1:
              player.top = player.default_top;
              player.left = player.default_left;
              break;
            case 2:
              player.top = player.default_top;
              player.left = player.default_left;
              break;
            case 3:
              player.top = player.default_top;
              player.left = player.default_left;
              break;
            case 4:
              player.top = player.default_top;
              player.left = player.default_left;
              break;
            case 5:
              player.top = player.default_top;
              player.left = player.default_left;
              break;

            case 6:
              player.top = player.l_cat_default_top_09;
              player.left = player.l_cat_default_left_09;
              break;
            case 7:
              player.top = player.l_cat_default_top_101;
              player.left = player.l_cat_default_left_101;
              break;
            case 9:
              player.top = player.l_cat_default_top_01;
              player.left = player.l_cat_default_left_01;
              break;
            case 10:
              player.top = player.l_cat_default_top_02;
              player.left = player.l_cat_default_left_02;
              break;
            case 11:
              player.top = player.l_cat_default_top_03;
              player.left = player.l_cat_default_left_03;
              break;
            case 12:
              player.top = player.l_cat_default_top_06;
              player.left = player.l_cat_default_left_06;
              break;
            case 13:
              player.top = player.l_cat_default_top_07;
              player.left = player.l_cat_default_left_07;
              break;
            case 14:
              player.top = player.l_cat_default_top_08;
              player.left = player.l_cat_default_left_08;
              break;
            case 15:
              player.top = player.l_cat_default_top_04;
              player.left = player.l_cat_default_left_04;
              break;
            case 16:
              player.top = player.l_cat_default_top_05;
              player.left = player.l_cat_default_left_05;
              break;
            // Add more cases for different board changes
            default:
              break;
          }
        }
        return player;
      });
    });

    setPlayers(updatedPlayers);
  };

  const handleDiceAnimationEnd = () => {
    setIsAnimating(false);
  };

  const handleClickBoardChangeRadio = async (event) => {
    const newBoardChange = parseInt(event.target.value);
    if (event.target.value === "5") {
      setSelectionMethod("dropdown");
      return;
    } else {
      setSelectionMethod("radio");
    }
    setFadeState({ opacity: 0 });
    await sleep(1490);
    setFadeState({ opacity: 1 });
    setBoardChange(parseInt(event.target.value));
    setIsTransitioning(true);
    // Update positions for pieces with hot_spot === 1
    repositionUnplayedPieces(newBoardChange);
  };
  const handleBoardSelectionDropDown = async (event) => {
    const newBoardChange = parseInt(event.target.value);
    setBoardChange(parseInt(event.target.value));
    if (event.target.value === "") {
      setSelectionMethod("radio");
    } else {
      setSelectionMethod("dropdown");
      setBoardChange(parseInt(event.target.value));
    }
    repositionUnplayedPieces(newBoardChange);
  };

  function getRandomElementsInArray(arr, x) {
    let shuffled = arr.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, x);
  }

  const handleContinuousAutoPlay = () => {
    setIsChecked(true);
    let playersYGRB = document.getElementById("ContinuosPlayerCount");

    let RandomColorsPlaying = getRandomElementsInArray(
      [1, 2, 3, 4],
      parseInt(playersYGRB.value)
    );

    let updatedColors = {
      yellow: false,
      green: false,
      red: false,
      blue: false,
    };
    RandomColorsPlaying.forEach((acolor) => {
      switch (acolor) {
        case 1:
          updatedColors.yellow = true;
          break;
        case 2:
          updatedColors.green = true;
          break;
        case 3:
          updatedColors.red = true;
          break;
        case 4:
          updatedColors.blue = true;
          break;
        default:
          break;
      }
    });

    setYellow_All_Home((prev) => !updatedColors.yellow);
    setGreen_All_Home((prev) => !updatedColors.green);
    setRed_All_Home((prev) => !updatedColors.red);
    setBlue_All_Home((prev) => !updatedColors.blue);
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
          <img
            onClick={handlePositionCircle}
            className={`yellow_base ${
              boardChange !== 3 ? "ph" : baseOpacityState ? "visible" : "hidden"
            }`}
            style={{
              scale: ".95",
              zIndex: 4,
              position: "absolute",
              top: "4.90%",
              left: "6.36%",
            }}
            src={
              boardChange === 1 || boardChange === 2
                ? yellow_baseph
                : yellow_base
            }
            alt="yellow base"
          />
          <img
            onClick={handleRotateCircle}
            className={`green_base ${
              boardChange !== 3 ? "ph" : baseOpacityState ? "visible" : "hidden"
            }`}
            style={{
              scale: ".95",
              zIndex: 4,
              position: "absolute",
              top: "7.10%",
              left: "64.30%",
            }}
            src={
              boardChange === 1 || boardChange === 2 ? green_baseph : green_base
            }
            alt="green base"
          />
          <motion.img
            src={
              selectionMethod === "radio"
                ? boardChange === 1
                  ? l_board
                  : boardChange === 2
                  ? l_board_d
                  : boardChange === 3
                  ? l_board_dark
                  : boardChange === 4
                  ? l_board_dark_transp
                  : null
                : l_board_dropdown
            }
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
            key={boardChange}
          />
          {/* Using framer-motion here as well! */}
          {homeBorderAnimate ? (
            <div className="container">
              <motion.div
                className="Q-circle topleft"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.div
                className="Q-circle topright"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.div
                className="Q-circle bottomleft"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.div
                className="Q-circle bottomright"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          ) : (
            <div className="container">
              <motion.div
                className="Q-circle topleft"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.div
                className="Q-circle topright"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.div
                className="Q-circle bottomleft"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.div
                className="Q-circle bottomright"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          )}
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
          display: `${showDice ? "none" : ""}`,
          position: "absolute",
          max: "52",
          width: "33px",
          left: "10px",
          top: "40px",
          fontSize: "1.3rem",
          color:
            currentColor === "yellow"
              ? "orange"
              : currentColor === "green"
              ? "green"
              : currentColor === "blue"
              ? "navy"
              : currentColor === "red"
              ? "red"
              : "aqua",
        }}
        type="number"
      />{" "}
      <span
        style={{
          display: `${showDice ? "none" : ""}`,
          color: "red",
          position: "absolute",
          left: "10px",
          top: "20px  ",
        }}
      >
        Dice Roll
      </span>
      {showDice ? (
        <div className="containerDice">
          <div className="diceAnimate">
            <DiceAnimation
              isAnimating={isAnimating}
              onAnimationEnd={handleDiceAnimationEnd}
              finalImage={finalImage}
              currentcolor={currentColor}
            />
          </div>
        </div>
      ) : null}
      <div
        className="chkboxLockScroll"
        style={{
          color: "rgba(0, 0, 222, 0.8)",
          position: "absolute",
          left: "10px",
          top: "140px",
        }}
      >
        <input
          onChange={handleCheckBoxLockScroll}
          title="For desktop especially, Unlock this and mouse scroll down to set all of your preferences if not accessible due to scroll lock. Alternative is to zoom out, set preferences"
          type="checkbox"
          name="LockScroll"
          defaultChecked={lockScroll}
        />
        Scroll Locked
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
      <div
        className="chkbox"
        onClick={handleCheckBox}
        style={{
          color: "rgba(222, 0, 22, 0.8)",
        }}
      >
        <input type="checkbox" name="autoplay" checked={isChecked} />
        Continuous Autoplay
      </div>
      <div
        className="MaxRandomPlayers"
        style={{
          color: "rgba(155, 5, 1, 0.8)",
          fontSize: "1.1rem",
        }}
      >
        Continuous play (initially only with
        <input
          id="ContinuosPlayerCount"
          style={{
            color: "rgba(255, 125, 1, 0.8)",
            fontSize: "1.1rem",
            width: 70,
            paddingLeft: "11px",
            paddingRight: "11px",
            backgroundClip: "content-box",
            backgroundColor: "aquamarine",
            border: "none",
          }}
          title= "Triggers continous autoplay interactively and immediately. Valid 2 to 4. 'Quick' selection"
          type="number"
          name="maxplayers"
          defaultValue="4"
          min="2"
          max="4"
          onChange={handleContinuousAutoPlay}
        />
        random players)
      </div>
      <div
        className="chkbox"
        style={{
          color: "rgba(227, 244, 244,.8)",
          fontSize: "1.3rem",
        }}
      >
        <h6>Select a Board below:</h6>
        <label>
          <input
            type="radio"
            value={1}
            checked={boardChange === 1}
            onChange={handleClickBoardChangeRadio}
          />
          Classic board
        </label>

        <label>
          <input
            type="radio"
            value={2}
            checked={boardChange === 2}
            onChange={handleClickBoardChangeRadio}
          />
          Board shadowed
        </label>

        <label>
          <input
            type="radio"
            value={3}
            checked={boardChange === 3}
            onChange={handleClickBoardChangeRadio}
          />
          Board dark mode
        </label>

        <label>
          <input
            type="radio"
            value={4}
            checked={boardChange === 4}
            onChange={handleClickBoardChangeRadio}
          />
          Transparent Dark (Partly)
        </label>

        {/* <label>
          <input
            type="radio"
            value={5}
            checked={boardChange === 5}
            onChange={handleClickBoardChangeRadio}
          />
          Select using drop down
        </label> */}
      </div>
      {/*selectionMethod === "radio" and options*/}
      <div>
        <select
          id="boards"
          value={boardChange}
          onChange={handleBoardSelectionDropDown}
        >
          <option value="">Select from Classic+ Board </option>
          {/* <option value="6">Medieval Board Plain</option>
              <option value="7">Medieval Board i</option>
              */}
          <option value="6">Velvet Royale Board</option>
          <option value="7">Aliens' Playfield Board</option>
          <option value="9">Meditative Matrix Board</option>
          <option value="10">Protective Play Board</option>
          <option value="11">Neon Nexus Board</option>
          <option value="12">Zen Focus Board</option>
          <option value="13">Galactic Grid Board</option>
          <option value="14">Neat Harmony Board</option>
          <option value="15">Galactic Aim Board</option>
          <option value="16">Medieval Flower Board</option>
        </select>
      </div>
      <div
        className="chkboxT"
        style={{
          color: "rgba(220, 255, 229, 0.80)",
          fontSize: "1.3rem",
        }}
      >
        <input
          onChange={handleCheckBoxTrail}
          type="checkbox"
          name="trail"
          defaultChecked={activateTrail}
        />
        Trail
      </div>
      <div
        className="chkboxRing"
        style={{
          color: "rgba(0, 250, 0, 0.80)",
          fontSize: "1.3rem",
        }}
      >
        <input
          onChange={handleCheckBoxHomeBorderAnimate}
          type="checkbox"
          name="homeBorderAnimate"
          defaultChecked={homeBorderAnimate}
        />
        Home Ring Border
      </div>
      <div
        className="chkbox3dlook"
        style={{
          color: "rgba(255, 225, 228, 0.8)",
          fontSize: "1.8rem",
        }}
      >
        <input
          onChange={handleCheckBox3dLook_piece}
          type="checkbox"
          name="3dLook"
          defaultChecked={player_3dlook_piece}
        />
        3d piece
      </div>
      <div
        className="chkboxShowdice"
        style={{
          color: "rgba(155, 225, 128, 0.8)",
          fontSize: "1.4rem",
        }}
      >
        <input
          onChange={handleCheckboxShowDice}
          type="checkbox"
          name="showdice"
          defaultChecked={showDice}
        />
        Show dice
      </div>
      <FormatTimestamp />
      <br />
      <br />
      <br />
    </div>
  );
  return (
    <div
      className={`game-container ${
        boardChange === 1 ||
        boardChange === 2 ||
        boardChange === 7 ||
        boardChange === 11
          ? "sky"
          : "galaxy"
      } stretchSelectClass`}
    >
      {initialUI}

      <div
        className="game-status"
        style={{
          color: "rgba(172, 172, 172, 0.9)",
          fontSize: "1.1rem",
        }}
      >
        {!yellow_All_Home && <div>In play or paused for: Yellow</div>}
        {!green_All_Home && <div>In play or paused for: Green</div>}
        {!red_All_Home && <div>In play or paused for: Red</div>}
        {!blue_All_Home && <div>In play or paused for: Blue</div>}
      </div>
    </div>
  );
};

export default LudoMain;
