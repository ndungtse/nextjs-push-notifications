import subscriptions from "@/db";
import { webPushClient as webPush } from "@/web-push";
import { NextResponse } from "next/server";

export function GET() {
  // Replace with your own notification payload
  const payload = JSON.stringify({
    title: "Test Notification",
    body: "This is a test push notification.",
    icon: "/icon.png",
  });

  let responses: NextResponse[] = [];

  Promise.all(
    subscriptions.map((sub) => {
      webPush
        .sendNotification(sub, payload)
        .catch((error) =>
          console.error("Error sending push notification:", error)
        );
    })
  )
    .then(() => {
      responses.push(NextResponse.json({
        message: "Push notifications sent successfully.",
      }));
    })
    .catch((error) => {
      responses.push(NextResponse.json({
        message: "Error sending push notifications.",
        error,
      }));
    });

    return NextResponse.json({responses});
}
