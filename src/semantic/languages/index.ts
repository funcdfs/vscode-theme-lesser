/**
 * 语言特定语义高亮汇总
 */

import { cpp } from "./cpp";
import { dart } from "./dart";
import { go } from "./go";
import { java } from "./java";
import { javascript } from "./javascript";
import { proto } from "./proto";
import { python } from "./python";
import { rust } from "./rust";
import type { SemanticTokenColor } from "../../types";

export const languages: Record<string, SemanticTokenColor> = {
  ...cpp,
  ...dart,
  ...go,
  ...java,
  ...javascript,
  ...proto,
  ...python,
  ...rust,
};

export { cpp } from "./cpp";
export { dart } from "./dart";
export { go } from "./go";
export { java } from "./java";
export { javascript } from "./javascript";
export { proto } from "./proto";
export { python } from "./python";
export { rust } from "./rust";
