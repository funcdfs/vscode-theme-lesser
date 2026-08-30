/**
 * 符号图标颜色
 *
 * 用于大纲视图、面包屑、建议列表以及终端建议列表中的符号图标
 * 图标颜色与语法高亮保持一致，代码和补全列表读起来是同一套语义
 */

import { fg, accent, syntax } from "../palette";

export const symbolIcon = {
  // === 类型类符号 ===
  /** 类 */
  "symbolIcon.classForeground": syntax.class,
  /** 接口 */
  "symbolIcon.interfaceForeground": syntax.class,
  /** 结构体 */
  "symbolIcon.structForeground": syntax.class,
  /** 枚举 */
  "symbolIcon.enumeratorForeground": syntax.class,
  /** 枚举成员 */
  "symbolIcon.enumeratorMemberForeground": syntax.constant,
  /** 类型参数 */
  "symbolIcon.typeParameterForeground": syntax.class,
  /** 命名空间 */
  "symbolIcon.namespaceForeground": syntax.class,
  /** 模块 */
  "symbolIcon.moduleForeground": syntax.class,
  /** 包 */
  "symbolIcon.packageForeground": syntax.class,
  /** 对象 */
  "symbolIcon.objectForeground": syntax.class,

  // === 可调用符号 ===
  /** 函数 */
  "symbolIcon.functionForeground": syntax.function,
  /** 方法 */
  "symbolIcon.methodForeground": syntax.function,
  /** 构造函数 */
  "symbolIcon.constructorForeground": syntax.function,
  /** 事件 */
  "symbolIcon.eventForeground": syntax.directive,

  // === 数据符号 ===
  /** 变量 */
  "symbolIcon.variableForeground": syntax.text,
  /** 常量 */
  "symbolIcon.constantForeground": syntax.constant,
  /** 属性 */
  "symbolIcon.propertyForeground": syntax.property,
  /** 字段 */
  "symbolIcon.fieldForeground": syntax.property,
  /** 键 */
  "symbolIcon.keyForeground": syntax.property,
  /** 引用 */
  "symbolIcon.referenceForeground": syntax.text,

  // === 字面量 ===
  /** 字符串 */
  "symbolIcon.stringForeground": syntax.string,
  /** 数字 */
  "symbolIcon.numberForeground": syntax.number,
  /** 布尔值 */
  "symbolIcon.booleanForeground": syntax.keyword,
  /** 数组 */
  "symbolIcon.arrayForeground": syntax.neutral,
  /** 空值 */
  "symbolIcon.nullForeground": syntax.keyword,
  /** 单位 */
  "symbolIcon.unitForeground": syntax.number,
  /** 颜色 */
  "symbolIcon.colorForeground": syntax.string,

  // === 语言与文本 ===
  /** 关键字 */
  "symbolIcon.keywordForeground": syntax.keyword,
  /** 操作符 */
  "symbolIcon.operatorForeground": syntax.operator,
  /** 代码片段 */
  "symbolIcon.snippetForeground": syntax.directive,
  /** 纯文本 */
  "symbolIcon.textForeground": syntax.text,
  /** 文件 */
  "symbolIcon.fileForeground": fg.secondary,
  /** 文件夹 */
  "symbolIcon.folderForeground": fg.secondary,

  // === 终端建议列表图标 ===
  /** 文件 */
  "terminalSymbolIcon.fileForeground": fg.secondary,
  /** 文件夹 */
  "terminalSymbolIcon.folderForeground": accent.blue,
  /** 符号链接文件 */
  "terminalSymbolIcon.symbolicLinkFileForeground": accent.cyan,
  /** 符号链接文件夹 */
  "terminalSymbolIcon.symbolicLinkFolderForeground": accent.cyan,
  /** 方法/命令 */
  "terminalSymbolIcon.methodForeground": syntax.function,
  /** 别名 */
  "terminalSymbolIcon.aliasForeground": syntax.property,
  /** 参数 */
  "terminalSymbolIcon.argumentForeground": syntax.text,
  /** 选项 */
  "terminalSymbolIcon.optionForeground": syntax.property,
  /** 选项值 */
  "terminalSymbolIcon.optionValueForeground": syntax.constant,
  /** 标志 */
  "terminalSymbolIcon.flagForeground": syntax.directive,
  /** 纯文本建议 */
  "terminalSymbolIcon.symbolText": syntax.text,
  /** 内联建议 */
  "terminalSymbolIcon.inlineSuggestionForeground": fg.disabled,
  /** Git 分支 */
  "terminalSymbolIcon.branchForeground": accent.violet,
  /** Git 提交 */
  "terminalSymbolIcon.commitForeground": syntax.constant,
  /** Git 标签 */
  "terminalSymbolIcon.tagForeground": syntax.tagName,
  /** Git 远程 */
  "terminalSymbolIcon.remoteForeground": accent.cyan,
  /** Git 储藏 */
  "terminalSymbolIcon.stashForeground": syntax.constant,
  /** Pull Request */
  "terminalSymbolIcon.pullRequestForeground": accent.violet,
  /** 已完成的 Pull Request */
  "terminalSymbolIcon.pullRequestDoneForeground": accent.green,
} as const;
