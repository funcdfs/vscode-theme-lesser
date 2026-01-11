/**
 * Extensions
 * 
 * Colors for the extensions marketplace.
 */

import { palette, withOpacity } from "../../palette";

export const extensions = {
  "extensionButton.prominentForeground": "#FFFFFF",
  "extensionButton.prominentBackground": "#8B6FC0",
  "extensionButton.prominentHoverBackground": "#9B7FD0",
  "extensionButton.background": "#8B6FC0",
  "extensionButton.foreground": "#FFFFFF",
  "extensionButton.hoverBackground": "#9B7FD0",
  "extensionButton.separator": "#FFFFFF20",
  "extensionBadge.remoteBackground": withOpacity(palette.green, "muted"),
  "extensionBadge.remoteForeground": "#FFFFFF",
  "extensionIcon.starForeground": "#E0C080",
  "extensionIcon.verifiedForeground": withOpacity(palette.green, "medium"),
  "extensionIcon.preReleaseForeground": "#E8A855",
  "extensionIcon.sponsorForeground": withOpacity(palette.green, "medium"),
};
