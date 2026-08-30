/**
 * 标准语义 Token 类型
 *
 * 覆盖 VS Code 语义高亮的标准类型与修饰符
 * 取值与 TextMate 规则保持一致，语义高亮开启/关闭时观感不跳变
 */

import { syntax, fg } from "../palette";
import type { SemanticTokenColor } from "../types";

export const core: Record<string, SemanticTokenColor> = {
  // === 基础字面量与文本 ===
  "comment": fg.comment,
  "string": syntax.string,
  "number": syntax.number,
  "regexp": syntax.text,

  // === 关键字与操作符 ===
  "keyword": syntax.keyword,
  "modifier": syntax.keyword,
  "operator": syntax.operator,

  // === 声明标记 ===
  "decorator": syntax.directive,
  "event": syntax.directive,
  "label": syntax.constant,

  // === 默认库类型 ===
  "type.defaultLibrary": syntax.keyword,
  "class.defaultLibrary": syntax.keyword,
  "interface.defaultLibrary": syntax.keyword,

  // === 修饰符（跨类型生效）===
  /** 已废弃的符号统一加删除线 */
  "*.deprecated": { fontStyle: "strikethrough" },
  /** 抽象成员用斜体区分 */
  "*.abstract": { fontStyle: "italic" },
};
