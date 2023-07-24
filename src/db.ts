export interface Subscription {
    endpoint: string
    expirationTime: number | null
    keys: {
        p256dh: string
        auth: string
    }
}

const subscriptions: Subscription [] = []

export default subscriptions