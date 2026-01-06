/**
 * Git Decorations
 * 
 * Colors for git status in the file explorer.
 */

import { palette, withOpacity } from "../../palette";

export const gitDecoration = {
  "gitDecoration.addedResourceForeground": withOpacity(palette.green, "medium"),
  "gitDecoration.modifiedResourceForeground": palette.lavender,
  "gitDecoration.deletedResourceForeground": palette.red,
  "gitDecoration.renamedResourceForeground": palette.lavender,
  "gitDecoration.stageModifiedResourceForeground": palette.lavender,
  "gitDecoration.stageDeletedResourceForeground": palette.red,
  "gitDecoration.untrackedResourceForeground": withOpacity(palette.green, "medium"),
  "gitDecoration.ignoredResourceForeground": palette.overlay1,
  "gitDecoration.conflictingResourceForeground": palette.red,
  "gitDecoration.submoduleResourceForeground": withOpacity(palette.green, "dim"),
};

export const scm = {
  "scm.historyItemAdditionsForeground": withOpacity(palette.green, "medium"),
  "scm.historyItemDeletionsForeground": palette.red,
  "scm.historyItemModificationsForeground": withOpacity(palette.lavender, "medium"),
  "scm.historyItemStatisticsBorder": withOpacity(palette.overlay0, "muted"),
};
