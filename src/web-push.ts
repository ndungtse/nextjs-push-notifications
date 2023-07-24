import * as webPush from "web-push";

const publicVapidKey =
  "BJXw7X-onxvIejE3OPVk_X2Nwy61bIy7ggzj0FNXOfqxLY4T6Ydg4FyVBu9UXAfHMi1FffwKgKhGNgjs2HzY0lg";
const privateVapidKey = "a9LmvdUUWPDRZdWAm_s0yqr0XJhcPSrF_lTZWDnyV-k";

webPush.setVapidDetails(
  "mailto:ndungutsecharles103@gmail.com",
  publicVapidKey,
  privateVapidKey
);

export const webPushClient = webPush;
