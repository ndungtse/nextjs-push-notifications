import * as webPush from "web-push";

const publicVapidKey = process.env.VAPID_PUBLIC_KEY!;
const privateVapidKey =  process.env.VAPID_PRIVATE_KEY!;

webPush.setVapidDetails(
  "mailto:ndungutsecharles103@gmail.com",
  publicVapidKey,
  privateVapidKey
);

export const webPushClient = webPush;
