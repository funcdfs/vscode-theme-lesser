/**
 * Git 装饰颜色
 *
 * 包含 Git 版本控制相关的颜色配置
 * 用于文件资源管理器中显示文件的 Git 状态
 */

import { accent, fg, withAlpha } from "../palette";

export const git = {
  // === Git 装饰颜色 ===
  /** 已添加资源前景色 - 新增文件 */
  "gitDecoration.addedResourceForeground": accent.greenBright,
  /** 已删除资源前景色 - 删除文件 */
  "gitDecoration.deletedResourceForeground": accent.redBright,
  /** 已忽略资源前景色 - .gitignore 中的文件 */
  "gitDecoration.ignoredResourceForeground": fg.disabled,
  /** 已修改资源前景色 - 修改文件 */
  "gitDecoration.modifiedResourceForeground": accent.violet,
  /** 未跟踪资源前景色 - 新文件（未添加到 Git） */
  "gitDecoration.untrackedResourceForeground": accent.blue,
  /** 冲突资源前景色 - 合并冲突文件 */
  "gitDecoration.conflictingResourceForeground": accent.red,
  /** 子模块资源前景色 */
  "gitDecoration.submoduleResourceForeground": accent.blue,
  /** 重命名资源前景色 */
  "gitDecoration.renamedResourceForeground": accent.violet,
  /** 暂存修改资源前景色 */
  "gitDecoration.stageModifiedResourceForeground": accent.violet,
  /** 暂存添加资源前景色 */
  "gitDecoration.stageAddedResourceForeground": accent.greenBright,
  /** 暂存删除资源前景色 */
  "gitDecoration.stageDeletedResourceForeground": accent.redBright,

  // === GitLens 扩展颜色 ===
  /** GitLens 行尾注释前景色 */
  "gitlens.trailingLineForegroundColor": fg.secondary,
} as const;
