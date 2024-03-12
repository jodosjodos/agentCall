import { HomeDataType } from "../types/types";

export const homeData: HomeDataType[] = [
  {
    id: 1,
    name: "List A",
    contact: "1k contacts",
    averageTime: "4:05",
    followUp: "59%",
    closing: "18%",
    callSteps: [
      { name: "Intro", color: "#F0B723", active: true, value: 40 },
      { name: "Interest", color: "#E4F150", active: true, value: 20 },
      { name: "Info", color: "#00B7DF", active: true, value: 30 },
      { name: "Closing", color: "#0FBC0C", active: true, value: 10 },
    ],
  },
  {
    id: 2,
    name: "List B",
    contact: "1.8k contacts",
    averageTime: "8:88",
    followUp: "60%",
    closing: "75%",
    callSteps: [
      { name: "Intro", color: "#F0B723", active: true, value: 40 },
      { name: "Interest", color: "#E4F150", active: true, value: 20 },
      { name: "Info", color: "#00B7DF", active: true, value: 30 },
      { name: "Closing", color: "#0FBC0C", active: true, value: 10 },
    ],
  },
  {
    id: 3,
    name: "List C",
    contact: "940 contacts",
    averageTime: "9:25",
    followUp: " 80%",
    closing: "64%",
    callSteps: [
      { name: "Intro", color: "#F0B723", active: true, value: 40 },
      { name: "Interest", color: "#E4F150", active: true, value: 20 },
      { name: "Info", color: "#00B7DF", active: true, value: 30 },
      { name: "Closing", color: "#0FBC0C", active: true, value: 10 },
    ],
  },
  {
    id: 4,
    name: "List D",
    contact: "600 contacts",
    averageTime: "5:06",
    followUp: "43%",
    closing: "86%",
    callSteps: [
      { name: "Intro", color: "#F0B723", active: true, value: 40 },
      { name: "Interest", color: "#E4F150", active: true, value: 20 },
      { name: "Info", color: "#00B7DF", active: true, value: 30 },
      { name: "Closing", color: "#0FBC0C", active: true, value: 10 },
    ],
  },
];
