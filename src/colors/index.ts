/**
 * UI 颜色汇总导出
 *
 * 合并所有 UI 颜色模块为单一对象，对应 cursor.json 的 "colors" 部分
 */

import { activityBar } from "./activityBar";
import { base } from "./base";
import { diff } from "./diff";
import { editor } from "./editor";
import { git } from "./git";
import { gutter } from "./gutter";
import { input } from "./input";
import { list } from "./list";
import { menu } from "./menu";
import { merge } from "./merge";
import { minimap } from "./minimap";
import { misc } from "./misc";
import { notifications } from "./notifications";
import { panel } from "./panel";
import { peekView } from "./peekView";
import { sideBar } from "./sideBar";
import { statusBar } from "./statusBar";
import { tabs } from "./tabs";
import { terminal } from "./terminal";
import { titleBar } from "./titleBar";
import { widgets } from "./widgets";

/**
 * 所有 UI 颜色的合并对象
 *
 * 包含编辑器界面所有元素的颜色配置
 */
export const colors = {
  ...base,
  ...editor,
  ...widgets,
  ...diff,
  ...gutter,
  ...minimap,
  ...input,
  ...list,
  ...menu,
  ...activityBar,
  ...sideBar,
  ...statusBar,
  ...titleBar,
  ...tabs,
  ...panel,
  ...terminal,
  ...git,
  ...notifications,
  ...peekView,
  ...merge,
  ...misc,
} as const;

// 导出各个子模块，便于单独使用
export {
  activityBar,
  base,
  diff,
  editor,
  git,
  gutter,
  input,
  list,
  menu,
  merge,
  minimap,
  misc,
  notifications,
  panel,
  peekView,
  sideBar,
  statusBar,
  tabs,
  terminal,
  titleBar,
  widgets,
};
