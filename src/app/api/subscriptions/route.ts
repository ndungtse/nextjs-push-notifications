import subscriptions from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ subscriptions });
}
export async function POST(req: Request) {
    const subscription = await req.json();
    if (!subscription) {
        return NextResponse.next();
    }
    subscriptions.push(subscription);
    return NextResponse.json({ message: "Subscription saved", subscription });
}