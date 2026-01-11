/**
 * Git Decorations
 * 
 * Colors for git status in the file explorer.
 * 文件树颜色在原有基础上乘以 DD (87%) 系数
 */

import { palette, withOpacity } from "../../palette";

// DD * DD ≈ BE (约 75%)
// DD * dim(90) ≈ 7C (约 49%)
// 纯色 * DD = DD

export const gitDecoration = {
  "gitDecoration.addedResourceForeground": withOpacity(palette.green, "subtle"),      // DD * DD ≈ BE → subtle(BB)
  "gitDecoration.modifiedResourceForeground": withOpacity(palette.lavender, "medium"), // 纯色 → DD
  "gitDecoration.deletedResourceForeground": withOpacity(palette.red, "medium"),       // 纯色 → DD
  "gitDecoration.renamedResourceForeground": withOpacity(palette.lavender, "medium"),  // 纯色 → DD
  "gitDecoration.stageModifiedResourceForeground": withOpacity(palette.lavender, "medium"),
  "gitDecoration.stageDeletedResourceForeground": withOpacity(palette.red, "medium"),
  "gitDecoration.untrackedResourceForeground": withOpacity(palette.green, "subtle"),   // DD * DD ≈ BE → subtle(BB)
  "gitDecoration.ignoredResourceForeground": withOpacity(palette.overlay1, "medium"),  // 纯色 → DD
  "gitDecoration.conflictingResourceForeground": withOpacity(palette.red, "medium"),   // 纯色 → DD
  "gitDecoration.submoduleResourceForeground": withOpacity(palette.green, "muted"),    // dim(90) * DD ≈ 7C → muted(77)
};

export const scm = {
  "scm.historyItemAdditionsForeground": withOpacity(palette.green, "subtle"),
  "scm.historyItemDeletionsForeground": withOpacity(palette.red, "medium"),
  "scm.historyItemModificationsForeground": withOpacity(palette.lavender, "subtle"),
  "scm.historyItemStatisticsBorder": withOpacity(palette.overlay0, "ghost"),
};
