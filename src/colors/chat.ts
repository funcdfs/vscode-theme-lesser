/**
 * AI 会话颜色（VS Code 1.135）
 *
 * 覆盖聊天视图、内联聊天（Inline Chat）、内联编辑建议（Inline Edit）、
 * 幽灵文本以及 Agent Sessions 窗口的全部颜色
 */

import { fg, bg, border, accent, badge, shadow, fileTree, withAlpha } from "../palette";

export const chat = {
  // === 聊天消息 ===
  /** 聊天请求背景 - 极淡紫色，与回复区分 */
  "chat.requestBackground": withAlpha(accent.violet, "5"),
  /** 聊天请求边框 */
  "chat.requestBorder": border.subtle,
  /** 聊天请求气泡背景 */
  "chat.requestBubbleBackground": bg.card,
  /** 聊天请求气泡悬浮背景 */
  "chat.requestBubbleHoverBackground": bg.overlay,
  /** 聊天请求内代码块边框 */
  "chat.requestCodeBorder": border.default,

  // === 头像 ===
  /** 聊天头像背景 */
  "chat.avatarBackground": bg.selection,
  /** 聊天头像前景 */
  "chat.avatarForeground": fg.primary,

  // === 斜杠命令 ===
  /** 斜杠命令背景 */
  "chat.slashCommandBackground": withAlpha(accent.violet, "20"),
  /** 斜杠命令前景 */
  "chat.slashCommandForeground": accent.violet,

  // === 检查点与编辑 ===
  /** 检查点分隔线 */
  "chat.checkpointSeparator": border.active,
  /** 已编辑文件前景 */
  "chat.editedFileForeground": fileTree.modified,
  /** 新增行数前景 */
  "chat.linesAddedForeground": accent.green,
  /** 删除行数前景 */
  "chat.linesRemovedForeground": accent.coral,

  // === 聊天内查找 ===
  /** 查找匹配背景 */
  "chat.findMatchBackground": withAlpha(accent.cyan, "50"),
  /** 查找匹配高亮背景 */
  "chat.findMatchHighlightBackground": withAlpha(accent.cyan, "35"),

  // === 输入框工作态渐变边框 ===
  /** 工作中边框渐变色 1 - 紫罗兰 */
  "chat.inputWorkingBorderColor1": accent.violet,
  /** 工作中边框渐变色 2 - 青色 */
  "chat.inputWorkingBorderColor2": accent.cyan,
  /** 工作中边框渐变色 3 - 品红 */
  "chat.inputWorkingBorderColor3": accent.magenta,
  /** 思考中微光 */
  "chat.thinkingShimmer": withAlpha(accent.violet, "60"),

  // === 语音 ===
  /** 语音光晕基色 */
  "chat.voiceGlowBaseColor": accent.violet,
  /** 聆听中光晕 */
  "chat.voiceListeningGlow": withAlpha(accent.cyan, "60"),
  /** 朗读中光晕 */
  "chat.voiceSpeakingGlow": withAlpha(accent.violet, "60"),
  /** 听写麦克风光晕 */
  "chat.dictationActiveMicGlow": accent.violet,

  // === 内联聊天（编辑器内）===
  /** 内联聊天背景 */
  "inlineChat.background": bg.elevated,
  /** 内联聊天边框 */
  "inlineChat.border": border.default,
  /** 内联聊天前景 */
  "inlineChat.foreground": fg.primary,
  /** 内联聊天阴影 */
  "inlineChat.shadow": shadow.widget,
  /** 内联聊天输入背景 */
  "inlineChatInput.background": bg.input,
  /** 内联聊天输入边框 */
  "inlineChatInput.border": border.default,
  /** 内联聊天输入焦点边框 */
  "inlineChatInput.focusBorder": border.focus,
  /** 内联聊天输入占位符 */
  "inlineChatInput.placeholderForeground": fg.disabled,
  /** 内联聊天新增文本背景 */
  "inlineChatDiff.inserted": withAlpha(accent.green, "20"),
  /** 内联聊天删除文本背景 */
  "inlineChatDiff.removed": withAlpha(accent.coral, "20"),

  // === 交互式编辑器（Notebook REPL）===
  /** 活动代码单元边框 */
  "interactive.activeCodeBorder": border.focus,
  /** 非活动代码单元边框 */
  "interactive.inactiveCodeBorder": border.default,

  // === 幽灵文本（AI 补全预览）===
  /** 幽灵文本前景 */
  "editorGhostText.foreground": fg.disabled,
  /** 幽灵文本背景 */
  "editorGhostText.background": border.transparent,
  /** 幽灵文本边框 */
  "editorGhostText.border": border.transparent,

  // === 内联编辑建议（Next Edit Suggestion）===
  /** 边槽指示器背景 */
  "inlineEdit.gutterIndicator.background": withAlpha(accent.violet, "20"),
  /** 主指示器背景 */
  "inlineEdit.gutterIndicator.primaryBackground": accent.violet,
  /** 主指示器前景 */
  "inlineEdit.gutterIndicator.primaryForeground": bg.base,
  /** 主指示器边框 */
  "inlineEdit.gutterIndicator.primaryBorder": border.focus,
  /** 次指示器背景 */
  "inlineEdit.gutterIndicator.secondaryBackground": withAlpha(accent.violet, "25"),
  /** 次指示器前景 */
  "inlineEdit.gutterIndicator.secondaryForeground": fg.primary,
  /** 次指示器边框 */
  "inlineEdit.gutterIndicator.secondaryBorder": withAlpha(accent.violet, "45"),
  /** 成功指示器背景 */
  "inlineEdit.gutterIndicator.successfulBackground": accent.green,
  /** 成功指示器前景 */
  "inlineEdit.gutterIndicator.successfulForeground": bg.base,
  /** 成功指示器边框 */
  "inlineEdit.gutterIndicator.successfulBorder": accent.greenBright,
  /** 修改后文本背景 */
  "inlineEdit.modifiedBackground": withAlpha(accent.green, "10"),
  /** 修改后文本边框 */
  "inlineEdit.modifiedBorder": withAlpha(accent.green, "50"),
  /** 修改后变更行背景 */
  "inlineEdit.modifiedChangedLineBackground": withAlpha(accent.green, "15"),
  /** 修改后变更文本背景 */
  "inlineEdit.modifiedChangedTextBackground": withAlpha(accent.green, "30"),
  /** 原始文本背景 */
  "inlineEdit.originalBackground": withAlpha(accent.coral, "10"),
  /** 原始文本边框 */
  "inlineEdit.originalBorder": withAlpha(accent.coral, "50"),
  /** 原始变更行背景 */
  "inlineEdit.originalChangedLineBackground": withAlpha(accent.coral, "15"),
  /** 原始变更文本背景 */
  "inlineEdit.originalChangedTextBackground": withAlpha(accent.coral, "30"),
  /** Tab 将接受时的修改侧边框 */
  "inlineEdit.tabWillAcceptModifiedBorder": accent.green,
  /** Tab 将接受时的原始侧边框 */
  "inlineEdit.tabWillAcceptOriginalBorder": accent.coral,

  // === 内联聊天在小地图/概览标尺上的标记 ===
  /** 小地图内联聊天插入标记 */
  "editorMinimap.inlineChatInserted": withAlpha(accent.green, "35"),
  /** 概览标尺内联聊天插入标记 */
  "editorOverviewRuler.inlineChatInserted": withAlpha(accent.green, "50"),
  /** 概览标尺内联聊天删除标记 */
  "editorOverviewRuler.inlineChatRemoved": withAlpha(accent.coral, "50"),

  // === Agent Sessions 窗口 ===
  /** Agent 窗口外壳背景 */
  "agents.background": bg.elevated,
  /** Agent 窗口背景渐变着色 */
  "agentsGradient.tintColor": withAlpha(accent.violet, "20"),
  /** Agent 卡片面板背景 */
  "agentsPanel.background": bg.base,
  /** Agent 卡片面板前景 */
  "agentsPanel.foreground": fg.primary,
  /** Agent 卡片面板边框 */
  "agentsPanel.border": border.default,
  /** Agent 内容卡片边框 */
  "agentsCard.border": border.default,
  /** Agent 底部面板边框 */
  "agentsBottomPanel.border": border.default,
  /** Agent 徽章背景 */
  "agentsBadge.background": badge.defaultBg,
  /** Agent 徽章前景 */
  "agentsBadge.foreground": badge.defaultFg,
  /** 未读会话徽章背景 */
  "agentsUnreadBadge.background": badge.activeBg,
  /** 未读会话徽章前景 */
  "agentsUnreadBadge.foreground": badge.activeFg,
  /** 新建会话按钮背景 */
  "agentsNewSessionButton.background": "#7568B0",
  /** 新建会话按钮前景 */
  "agentsNewSessionButton.foreground": "#FFFFFF",
  /** 新建会话按钮悬浮背景 */
  "agentsNewSessionButton.hoverBackground": "#8A7BC7",
  /** 新建会话按钮边框 */
  "agentsNewSessionButton.border": border.transparent,
  /** Agent 聊天输入背景 */
  "agentsChatInput.background": bg.input,
  /** Agent 聊天输入前景 */
  "agentsChatInput.foreground": fg.primary,
  /** Agent 聊天输入边框 */
  "agentsChatInput.border": border.default,
  /** Agent 聊天输入焦点边框 */
  "agentsChatInput.focusBorder": border.focus,
  /** Agent 聊天输入占位符 */
  "agentsChatInput.placeholderForeground": fg.disabled,
  /** 语音朗读状态行背景 */
  "agentsVoice.speakingBackground": withAlpha(accent.violet, "15"),
  /** 语音朗读状态前景 */
  "agentsVoice.speakingForeground": accent.violet,
  /** 更新按钮下载中背景 */
  "agentsUpdateButton.downloadingBackground": withAlpha(accent.violet, "35"),
  /** 更新按钮下载完成背景 */
  "agentsUpdateButton.downloadedBackground": accent.green,
  /** 会话已读指示器前景 */
  "agentSessionReadIndicator.foreground": fg.muted,
  /** 选中会话徽章边框 */
  "agentSessionSelectedBadge.border": border.focus,
  /** 未聚焦时选中会话徽章边框 */
  "agentSessionSelectedUnfocusedBadge.border": border.active,
  /** 标题栏 Agent 状态指示器背景 */
  "agentStatusIndicator.background": accent.violet,
  /** Agent 反馈小部件背景 */
  "agentFeedbackEditorWidget.background": bg.elevated,
  /** Agent 反馈小部件边框 */
  "agentFeedbackEditorWidget.border": border.default,
  /** Agent 反馈输入小部件边框 */
  "agentFeedbackInputWidget.border": border.default,
  /** 活动会话视图背景 */
  "activeSessionView.background": bg.base,
  /** 活动会话视图前景 */
  "activeSessionView.foreground": fg.primary,
  /** 非活动会话视图背景 */
  "inactiveSessionView.background": bg.elevated,
  /** 非活动会话视图前景 */
  "inactiveSessionView.foreground": fg.secondary,
} as const;
