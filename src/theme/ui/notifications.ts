/**
 * Notifications
 * 
 * Colors for notification toasts and center.
 */

import { palette, withOpacity } from "../../palette";

export const notifications = {
  "notifications.foreground": palette.text,
  "notifications.background": palette.mantle,
  "notifications.border": palette.overlay0,
  "notificationCenter.border": palette.overlay0,
  "notificationCenterHeader.foreground": palette.text,
  "notificationCenterHeader.background": palette.mantle,
  "notificationToast.border": palette.overlay0,
  "notificationsErrorIcon.foreground": palette.red,
  "notificationsWarningIcon.foreground": withOpacity("#E8A855", "medium"),
  "notificationsInfoIcon.foreground": withOpacity(palette.ocean, "medium"),
  "notificationLink.foreground": withOpacity(palette.lavender, "faint"),
};
