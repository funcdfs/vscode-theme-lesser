/**
 * UI 颜色汇总导出
 *
 * 合并所有 UI 颜色模块为单一对象，对应主题 JSON 的 "colors" 部分
 * 覆盖 VS Code 1.135 全部可主题化的 UI 元素
 */

import { activityBar } from "./activityBar";
import { base } from "./base";
import { charts } from "./charts";
import { chat } from "./chat";
import { controls } from "./controls";
import { debug } from "./debug";
import { diff } from "./diff";
import { editor } from "./editor";
import { extensions } from "./extensions";
import { git } from "./git";
import { gutter } from "./gutter";
import { input } from "./input";
import { list } from "./list";
import { menu } from "./menu";
import { merge } from "./merge";
import { minimap } from "./minimap";
import { misc } from "./misc";
import { modern } from "./modern";
import { notebook } from "./notebook";
import { notifications } from "./notifications";
import { panel } from "./panel";
import { peekView } from "./peekView";
import { scmGraph } from "./scmGraph";
import { settings } from "./settings";
import { sideBar } from "./sideBar";
import { statusBar } from "./statusBar";
import { symbolIcon } from "./symbolIcon";
import { tabs } from "./tabs";
import { terminal } from "./terminal";
import { testing } from "./testing";
import { titleBar } from "./titleBar";
import { welcome } from "./welcome";
import { widgets } from "./widgets";

/**
 * 所有 UI 颜色的合并对象
 *
 * 包含编辑器界面所有元素的颜色配置
 */
export const colors = {
  ...base,
  ...controls,
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
  ...scmGraph,
  ...notifications,
  ...peekView,
  ...merge,
  ...notebook,
  ...testing,
  ...debug,
  ...symbolIcon,
  ...settings,
  ...extensions,
  ...welcome,
  ...charts,
  ...chat,
  ...modern,
  ...misc,
} as const;

// 导出各个子模块，便于单独使用
export {
  activityBar,
  base,
  charts,
  chat,
  controls,
  debug,
  diff,
  editor,
  extensions,
  git,
  gutter,
  input,
  list,
  menu,
  merge,
  minimap,
  misc,
  modern,
  notebook,
  notifications,
  panel,
  peekView,
  scmGraph,
  settings,
  sideBar,
  statusBar,
  symbolIcon,
  tabs,
  terminal,
  testing,
  titleBar,
  welcome,
  widgets,
};
