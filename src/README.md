# Lesser Theme Source

This directory contains the modular source code for the Lesser VS Code theme.

## Structure

```
src/
├── palette.ts          # Color palette definitions
├── index.ts            # Main entry point
├── build.ts            # Build script
└── theme/
    ├── types.ts        # TypeScript type definitions
    ├── semantic.ts     # Semantic token colors
    ├── ui/             # UI color definitions
    │   ├── core.ts     # Focus, foreground, text
    │   ├── inputs.ts   # Buttons, checkboxes, inputs
    │   ├── lists.ts    # Lists, trees, badges
    │   ├── editor.ts   # Editor colors
    │   ├── tabs.ts     # Tab colors
    │   ├── terminal.ts # Terminal colors
    │   └── ...
    └── tokens/         # Syntax highlighting
        ├── base.ts     # Base/fallback tokens
        ├── comments.ts # Comment colors
        ├── keywords.ts # Keyword colors
        ├── entities.ts # Classes, functions, types
        └── languages/  # Language-specific tokens
            ├── typescript.ts
            ├── python.ts
            ├── rust.ts
            └── ...
```

## Building

```bash
# Install dependencies
npm install

# Build the theme
npm run build:theme

# Or with full TypeScript compilation
npm run build
```

## Adding Colors

### UI Colors

Add new UI colors in the appropriate file under `src/theme/ui/`:

```typescript
// src/theme/ui/myFeature.ts
import { palette, withOpacity } from "../../palette";

export const myFeature = {
  "myFeature.background": palette.mantle,
  "myFeature.foreground": withOpacity(palette.text, "medium"),
};
```

### Token Colors

Add new syntax tokens in `src/theme/tokens/`:

```typescript
// src/theme/tokens/myLanguage.ts
import { palette, withOpacity } from "../../palette";
import type { TokenColor } from "../types";

export const myLanguage: TokenColor[] = [
  {
    name: "My Language Keywords",
    scope: ["keyword.mylang"],
    settings: { foreground: withOpacity(palette.sky, "medium") },
  },
];
```

## Palette

The color palette is defined in `src/palette.ts` with semantic naming:

- `base`, `mantle`, `crust` - Background colors
- `surface0`, `surface1`, `surface2` - Elevated surfaces
- `overlay0`, `overlay1`, `overlay2` - Borders and subtle elements
- `text`, `subtext0`, `subtext1` - Text colors
- `lavender`, `mauve`, `pink`, etc. - Accent colors

Use `withOpacity(color, level)` to apply transparency.
