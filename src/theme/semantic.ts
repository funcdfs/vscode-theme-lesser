/**
 * Semantic Token Colors
 * 
 * Language server provided semantic highlighting.
 */

import { palette, withOpacity } from "../palette";
import type { SemanticTokenColor } from "./types";

export const semanticTokenColors: SemanticTokenColor = {
  // ============ Namespaces ============
  "namespace": withOpacity(palette.lavender, "medium"),
  "namespace.declaration": withOpacity(palette.lavender, "medium"),
  "namespace.defaultLibrary": withOpacity(palette.lavender, "medium"),

  // ============ Types ============
  "type": withOpacity(palette.moss, "medium"),
  "type.declaration": withOpacity(palette.moss, "medium"),
  "type.defaultLibrary": withOpacity(palette.moss, "medium"),
  "class": withOpacity(palette.moss, "medium"),
  "class.declaration": withOpacity(palette.moss, "medium"),
  "class.defaultLibrary": withOpacity(palette.moss, "medium"),
  "interface": withOpacity(palette.moss, "medium"),
  "interface.declaration": withOpacity(palette.moss, "medium"),
  "interface.defaultLibrary": withOpacity(palette.moss, "medium"),
  "struct": withOpacity(palette.moss, "medium"),
  "struct.declaration": withOpacity(palette.moss, "medium"),
  "enum": withOpacity(palette.moss, "medium"),
  "enum.declaration": withOpacity(palette.moss, "medium"),
  "enum.defaultLibrary": withOpacity(palette.moss, "medium"),

  // ============ Enum Members ============
  "enumMember": withOpacity(palette.clay, "medium"),
  "enumMember.declaration": withOpacity(palette.clay, "medium"),
  "enumMember.defaultLibrary": withOpacity(palette.clay, "medium"),
  "enumMember.readonly": withOpacity(palette.clay, "medium"),
  "enumMember.static": withOpacity(palette.clay, "medium"),
  "enumMember.readonly.defaultLibrary": withOpacity(palette.clay, "medium"),

  // ============ Type Parameters ============
  "typeParameter": withOpacity(palette.dusk, "medium"),
  "typeParameter.declaration": withOpacity(palette.dusk, "medium"),

  // ============ Functions ============
  "function": withOpacity(palette.lavender, "medium"),
  "function.declaration": withOpacity(palette.lavender, "medium"),
  "function.defaultLibrary": withOpacity(palette.lavender, "medium"),
  "function.static": withOpacity(palette.lavender, "medium"),
  "method": withOpacity(palette.lavender, "medium"),
  "method.declaration": withOpacity(palette.lavender, "medium"),
  "method.defaultLibrary": withOpacity(palette.lavender, "medium"),
  "method.static": withOpacity(palette.lavender, "medium"),
  "macro": withOpacity(palette.lavender, "medium"),
  "macro.declaration": withOpacity(palette.lavender, "medium"),

  // ============ Variables ============
  "variable": withOpacity(palette.frost, "medium"),
  "variable.declaration": withOpacity(palette.frost, "medium"),
  "variable.readonly": withOpacity(palette.clay, "medium"),
  "variable.readonly.defaultLibrary": withOpacity(palette.clay, "medium"),
  "variable.defaultLibrary": withOpacity(palette.frost, "medium"),
  "variable.static": withOpacity(palette.clay, "medium"),
  "variable.static.readonly": withOpacity(palette.clay, "medium"),
  "variable.local": withOpacity(palette.frost, "medium"),
  "variable.local.declaration": withOpacity(palette.frost, "medium"),

  // ============ Parameters ============
  "parameter": withOpacity(palette.frost, "medium"),
  "parameter.declaration": withOpacity(palette.frost, "medium"),
  "parameter.readonly": withOpacity(palette.frost, "medium"),

  // ============ Properties ============
  "property": withOpacity(palette.sand, "medium"),
  "property.declaration": withOpacity(palette.sand, "medium"),
  "property.readonly": withOpacity(palette.sand, "medium"),
  "property.static": withOpacity(palette.sand, "medium"),
  "property.static.readonly": withOpacity(palette.sand, "medium"),
  "property.defaultLibrary": withOpacity(palette.sand, "medium"),

  // ============ Decorators ============
  "decorator": withOpacity(palette.lavender, "medium"),
  "decorator.declaration": withOpacity(palette.lavender, "medium"),
  "event": withOpacity(palette.lavender, "medium"),
  "event.declaration": withOpacity(palette.lavender, "medium"),

  // ============ Other ============
  "label": "#D3C6AADD",
  "keyword": withOpacity(palette.ocean, "medium"),
  "keyword.control": withOpacity(palette.ocean, "medium"),
  "comment": withOpacity(palette.dusk, "muted"),
  "string": withOpacity(palette.peach, "soft"),
  "number": withOpacity(palette.pink, "medium"),
  "regexp": withOpacity(palette.green, "medium"),
  "operator": "#D3C6AADD",

  // ============ Modifiers ============
  "*.static": withOpacity(palette.clay, "medium"),
  "*.readonly": withOpacity(palette.clay, "medium"),
  "*.defaultLibrary": { foreground: withOpacity(palette.moss, "medium") },
  "*.declaration": { fontStyle: "" },
  "*.modification": { fontStyle: "underline" },
  "*.deprecated": { fontStyle: "strikethrough" },

  // ============ Special ============
  "selfKeyword": withOpacity(palette.dusk, "medium"),
  "selfParameter": withOpacity(palette.dusk, "medium"),
  "builtinType": withOpacity(palette.moss, "medium"),
  "formatSpecifier": withOpacity(palette.dusk, "medium"),
  "escapeSequence": withOpacity(palette.dusk, "medium"),
  "lifetime": withOpacity(palette.dusk, "medium"),
  "source": "#D3C6AADD",
  "text": "#D3C6AADD",
  "punctuation": "#D3C6AADD",
  "meta": "#D3C6AADD",
};
