/**
 * Miscellaneous UI
 * 
 * Colors for various other UI elements.
 */

import { palette, withOpacity } from "../../palette";

export const commandCenter = {
  "commandCenter.foreground": palette.text,
  "commandCenter.activeForeground": palette.subtext1,
  "commandCenter.background": palette.mantle,
  "commandCenter.activeBackground": palette.mantle,
  "commandCenter.border": withOpacity(palette.overlay0, "muted"),
  "commandCenter.inactiveForeground": palette.overlay1,
  "commandCenter.inactiveBorder": "#3D365050",
  "commandCenter.activeBorder": withOpacity(palette.lavender, "muted"),
  "commandCenter.debuggingBackground": palette.mantle,
};

export const inlineChat = {
  "inlineChat.background": palette.mantle,
  "inlineChat.border": palette.overlay0,
  "inlineChat.shadow": "#00000030",
  "inlineChat.regionHighlight": withOpacity(palette.lavender, "invisible"),
  "inlineChatInput.border": palette.overlay0,
  "inlineChatInput.focusBorder": withOpacity(palette.lavender, "faint"),
  "inlineChatInput.placeholderForeground": palette.overlay1,
  "inlineChatInput.background": palette.mantle,
  "inlineChatDiff.inserted": "#80FFB535",
  "inlineChatDiff.removed": "#FF6B8A35",
};

export const chat = {
  "chat.requestBackground": "#2E284045",
  "chat.requestBorder": "#3D365045",
  "chat.slashCommandBackground": "#9D8CCC35",
  "chat.slashCommandForeground": palette.dusk,
  "chat.avatarBackground": palette.mantle,
  "chat.avatarForeground": palette.text,
};

export const keybindingTable = {
  "keybindingTable.headerBackground": palette.mantle,
  "keybindingTable.rowsBackground": palette.mantle,
};

export const testing = {
  "testing.iconFailed": palette.red,
  "testing.iconErrored": palette.red,
  "testing.iconPassed": withOpacity(palette.green, "medium"),
  "testing.iconQueued": palette.overlay1,
  "testing.iconUnset": palette.overlay1,
  "testing.iconSkipped": withOpacity(palette.sand, "medium"),
  "testing.runAction": withOpacity(palette.green, "medium"),
  "testing.peekBorder": palette.red,
  "testing.peekHeaderBackground": withOpacity(palette.red, "trace"),
  "testing.message.error.decorationForeground": palette.red,
  "testing.message.error.lineBackground": withOpacity(palette.red, "invisible"),
  "testing.message.info.decorationForeground": withOpacity(palette.ocean, "medium"),
  "testing.message.info.lineBackground": withOpacity(palette.ocean, "invisible"),
};

export const notebook = {
  "notebook.editorBackground": palette.mantle,
  "notebook.cellBorderColor": withOpacity(palette.overlay0, "muted"),
  "notebook.cellHoverBackground": "#2E284045",
  "notebook.cellInsertionIndicator": withOpacity(palette.lavender, "faint"),
  "notebook.cellStatusBarItemHoverBackground": palette.overlay0,
  "notebook.cellToolbarSeparator": withOpacity(palette.overlay0, "muted"),
  "notebook.focusedCellBackground": palette.mantle,
  "notebook.focusedCellBorder": withOpacity(palette.lavender, "muted"),
  "notebook.focusedEditorBorder": withOpacity(palette.lavender, "muted"),
  "notebook.inactiveFocusedCellBorder": palette.overlay0,
  "notebook.outputContainerBackgroundColor": palette.mantle,
  "notebook.outputContainerBorderColor": "#3D365045",
  "notebook.selectedCellBackground": palette.mantle,
  "notebook.selectedCellBorder": "#9D8CCC50",
  "notebook.symbolHighlightBackground": "#3D7A5090",
  "notebookScrollbarSlider.activeBackground": withOpacity(palette.lavender, "ghost"),
  "notebookScrollbarSlider.background": withOpacity(palette.lavender, "trace"),
  "notebookScrollbarSlider.hoverBackground": withOpacity(palette.lavender, "whisper"),
  "notebookStatusErrorIcon.foreground": palette.red,
  "notebookStatusRunningIcon.foreground": withOpacity(palette.ocean, "medium"),
  "notebookStatusSuccessIcon.foreground": withOpacity(palette.green, "medium"),
};

export const settings = {
  "settings.headerForeground": palette.text,
  "settings.modifiedItemIndicator": withOpacity(palette.ocean, "medium"),
  "settings.dropdownBackground": palette.mantle,
  "settings.dropdownForeground": palette.text,
  "settings.dropdownBorder": palette.overlay0,
  "settings.dropdownListBorder": palette.overlay0,
  "settings.checkboxBackground": palette.mantle,
  "settings.checkboxForeground": palette.text,
  "settings.checkboxBorder": palette.overlay0,
  "settings.textInputBackground": palette.mantle,
  "settings.textInputForeground": palette.text,
  "settings.textInputBorder": palette.overlay0,
  "settings.numberInputBackground": palette.mantle,
  "settings.numberInputForeground": palette.text,
  "settings.numberInputBorder": palette.overlay0,
  "settings.focusedRowBackground": "#1A152045",
  "settings.focusedRowBorder": "#9D8CCC50",
  "settings.rowHoverBackground": palette.mantle,
  "settings.sashBorder": withOpacity(palette.overlay0, "muted"),
};

export const welcomePage = {
  "welcomePage.background": palette.mantle,
  "welcomePage.progress.background": palette.overlay0,
  "welcomePage.progress.foreground": withOpacity(palette.lavender, "faint"),
  "welcomePage.tileBackground": palette.mantle,
  "welcomePage.tileHoverBackground": palette.surface1,
  "welcomePage.tileBorder": "#3D365045",
  "welcomePage.buttonBackground": palette.mantle,
  "welcomePage.buttonHoverBackground": "#3A3560",
  "walkThrough.embeddedEditorBackground": palette.mantle,
};

export const banner = {
  "banner.background": palette.mantle,
  "banner.foreground": palette.text,
  "banner.iconForeground": withOpacity(palette.lavender, "faint"),
};

export const breadcrumb = {
  "breadcrumb.activeSelectionForeground": withOpacity(palette.ocean, "medium"),
  "breadcrumb.focusForeground": palette.text,
  "breadcrumb.foreground": palette.overlay1,
  "breadcrumbPicker.background": palette.surface0,
};

export const snippets = {
  "editor.snippetTabstopHighlightBorder": palette.overlay1,
  "editor.snippetTabstopHighlightBackground": withOpacity(palette.overlay1, "muted"),
  "editor.snippetFinalTabstopHighlightBorder": palette.overlay1,
  "editor.snippetFinalTabstopHighlightBackground": withOpacity(palette.overlay1, "muted"),
};

export const charts = {
  "charts.foreground": palette.text,
  "charts.lines": palette.overlay0,
  "charts.red": palette.red,
  "charts.blue": withOpacity(palette.ocean, "medium"),
  "charts.yellow": "#E0C080",
  "charts.orange": "#E8A855",
  "charts.green": withOpacity(palette.green, "medium"),
  "charts.purple": palette.dusk,
};

export const markdownAlert = {
  "markdownAlert.note.border": withOpacity(palette.ocean, "medium"),
  "markdownAlert.note.background": withOpacity(palette.ocean, "invisible"),
  "markdownAlert.note.foreground": withOpacity(palette.ocean, "medium"),
  "markdownAlert.tip.border": withOpacity(palette.green, "medium"),
  "markdownAlert.tip.background": withOpacity(palette.green, "invisible"),
  "markdownAlert.tip.foreground": withOpacity(palette.green, "medium"),
  "markdownAlert.important.border": palette.dusk,
  "markdownAlert.important.background": withOpacity(palette.dusk, "invisible"),
  "markdownAlert.important.foreground": palette.dusk,
  "markdownAlert.warning.border": "#E0C080",
  "markdownAlert.warning.background": "#E0C08018",
  "markdownAlert.warning.foreground": "#E0C080",
  "markdownAlert.caution.border": palette.red,
  "markdownAlert.caution.background": withOpacity(palette.red, "invisible"),
  "markdownAlert.caution.foreground": palette.red,
};

export const stickyScroll = {
  "editorStickyScroll.background": palette.mantle,
  "editorStickyScroll.border": withOpacity(palette.overlay0, "muted"),
  "editorStickyScrollHover.background": "#2E2840",
};

export const outputView = {
  "outputView.background": palette.mantle,
  "outputViewStickyScroll.background": palette.mantle,
};

export const ports = {
  "ports.iconRunningProcessForeground": withOpacity(palette.green, "medium"),
};

export const profileBadge = {
  "profileBadge.background": withOpacity(palette.overlay0, "muted"),
  "profileBadge.foreground": palette.text,
};

export const gauge = {
  "gauge.default.foreground": withOpacity(palette.ocean, "medium"),
  "gauge.default.background": palette.mantle,
  "gauge.warning.foreground": withOpacity("#E8A855", "dim"),
  "gauge.critical.foreground": palette.red,
  "gauge.success.foreground": withOpacity(palette.green, "medium"),
  "gauge.neutral.foreground": palette.overlay1,
};

export const inlineEdit = {
  "editorInlineEdit.onLineBackground": withOpacity(palette.lavender, "invisible"),
  "editorInlineEdit.modifiedBackground": withOpacity(palette.ocean, "invisible"),
  "editorInlineEdit.modifiedBorder": "#5A9BE638",
  "editorInlineEdit.modifiedChangedLineBackground": withOpacity(palette.ocean, "invisible"),
  "editorInlineEdit.modifiedChangedText": withOpacity(palette.ocean, "medium"),
  "editorInlineEdit.originalBackground": withOpacity(palette.red, "invisible"),
  "editorInlineEdit.originalBorder": "#FF6B8A38",
  "editorInlineEdit.originalChangedLineBackground": withOpacity(palette.red, "invisible"),
  "editorInlineEdit.originalChangedText": palette.red,
  "inlineEdit.gutterIndicator.primaryBorder": withOpacity(palette.green, "subtle"),
  "inlineEdit.gutterIndicator.primaryForeground": withOpacity(palette.green, "subtle"),
  "inlineEdit.gutterIndicator.primaryBackground": palette.mantle,
  "inlineEdit.gutterIndicator.secondaryBorder": withOpacity(palette.ocean, "muted"),
  "inlineEdit.gutterIndicator.secondaryForeground": withOpacity(palette.ocean, "muted"),
  "inlineEdit.gutterIndicator.secondaryBackground": palette.mantle,
  "inlineEdit.gutterIndicator.successfulBorder": withOpacity(palette.green, "muted"),
  "inlineEdit.gutterIndicator.successfulForeground": withOpacity(palette.green, "muted"),
  "inlineEdit.gutterIndicator.successfulBackground": palette.mantle,
  "inlineEdit.gutterIndicator.background": "#2E2840",
  "inlineEdit.originalBackground": withOpacity(palette.red, "invisible"),
  "inlineEdit.modifiedBackground": withOpacity(palette.ocean, "invisible"),
  "inlineEdit.originalChangedLineBackground": withOpacity(palette.red, "invisible"),
  "inlineEdit.originalChangedTextBackground": palette.red,
  "inlineEdit.modifiedChangedLineBackground": withOpacity(palette.ocean, "invisible"),
  "inlineEdit.modifiedChangedTextBackground": withOpacity(palette.ocean, "medium"),
  "inlineEdit.originalBorder": "#FF6B8A38",
  "inlineEdit.modifiedBorder": "#5A9BE638",
  "inlineEdit.tabWillAcceptModifiedBorder": withOpacity(palette.ocean, "medium"),
  "inlineEdit.tabWillAcceptOriginalBorder": palette.red,
};
