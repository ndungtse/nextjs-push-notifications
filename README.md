# Nextjs Web push notifications template
This is a template for a Nextjs project that uses web push notifications. It uses the [web-push](https://www.npmjs.com/package/web-push) package to send push notifications to the browser.

## Installation
1. Clone the repository 
2. Run `npm install` to install the dependencies
3. Generate a VAPID key pair by running `npx web-push generate-vapid-keys`
4. Create a `.env.local` file in the root of the project and add the following environment variables:
    ```
    VAPID_PUBLIC_KEY=<public key>
    VAPID_PRIVATE_KEY=<private
    ```
5. Run `npm run dev` to start the development server
