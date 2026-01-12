/**
 * Git 装饰颜色
 *
 * 包含 Git 版本控制相关的颜色配置
 * 用于文件资源管理器中显示文件的 Git 状态
 * 颜色为原始强调色的 90% 浓度
 */

import { fileTree, fg } from "../palette";

export const git = {
  // === Git 装饰颜色 ===
  /** 已添加资源前景色 - 新增文件 */
  "gitDecoration.addedResourceForeground": fileTree.added,
  /** 已删除资源前景色 - 删除文件 */
  "gitDecoration.deletedResourceForeground": fileTree.deleted,
  /** 已忽略资源前景色 - .gitignore 中的文件 */
  "gitDecoration.ignoredResourceForeground": fileTree.ignored,
  /** 已修改资源前景色 - 修改文件 */
  "gitDecoration.modifiedResourceForeground": fileTree.modified,
  /** 未跟踪资源前景色 - 新文件（未添加到 Git） */
  "gitDecoration.untrackedResourceForeground": fileTree.untracked,
  /** 冲突资源前景色 - 合并冲突文件 */
  "gitDecoration.conflictingResourceForeground": fileTree.conflict,
  /** 子模块资源前景色 */
  "gitDecoration.submoduleResourceForeground": fileTree.untracked,
  /** 重命名资源前景色 */
  "gitDecoration.renamedResourceForeground": fileTree.modified,
  /** 暂存修改资源前景色 */
  "gitDecoration.stageModifiedResourceForeground": fileTree.modified,
  /** 暂存添加资源前景色 */
  "gitDecoration.stageAddedResourceForeground": fileTree.added,
  /** 暂存删除资源前景色 */
  "gitDecoration.stageDeletedResourceForeground": fileTree.deleted,

  // === GitLens 扩展颜色 ===
  /** GitLens 行尾注释前景色 */
  "gitlens.trailingLineForegroundColor": fg.secondary,
} as const;
