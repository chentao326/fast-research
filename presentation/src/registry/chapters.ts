import type { ChapterDef } from "./types";
import Coldopen from "../chapters/01-coldopen/Coldopen";
import { narrations as n0 } from "../chapters/01-coldopen/narrations";
import Scale from "../chapters/02-scale/Scale";
import { narrations as n1 } from "../chapters/02-scale/narrations";
import Money from "../chapters/03-money/Money";
import { narrations as n2 } from "../chapters/03-money/narrations";
import Monopoly from "../chapters/04-monopoly/Monopoly";
import { narrations as n3 } from "../chapters/04-monopoly/narrations";
import Ecig from "../chapters/05-ecig/Ecig";
import { narrations as n4 } from "../chapters/05-ecig/narrations";
import Ending from "../chapters/06-ending/Ending";
import { narrations as n5 } from "../chapters/06-ending/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "coldopen", title: "开篇钩子", narrations: n0, Component: Coldopen },
  { id: "scale", title: "行业规模", narrations: n1, Component: Scale },
  { id: "money", title: "成本拆解", narrations: n2, Component: Money },
  { id: "monopoly", title: "专卖制度", narrations: n3, Component: Monopoly },
  { id: "ecig", title: "电子烟冲击", narrations: n4, Component: Ecig },
  { id: "ending", title: "结尾", narrations: n5, Component: Ending },
];
