"use client";
import React, { useEffect } from "react";

const ServiceWorker = () => {
  const encode = (data: any) => {
    const buf = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
      buf[i] = data.charCodeAt(i);
    }
    return buf;
  };

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          registration.pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey:
                "BJXw7X-onxvIejE3OPVk_X2Nwy61bIy7ggzj0FNXOfqxLY4T6Ydg4FyVBu9UXAfHMi1FffwKgKhGNgjs2HzY0lg",
            })
            .then((subscription) => {
              // Send the subscription object to your server to save it for later use
              // For example, using fetch API:
             fetch('/api/subscriptions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(subscription),
              }).then((res) => {
                console.log('res', res.json());
              });
              
            }).catch((e) => {
              console.log('error', e);
            });
          registration.pushManager.getSubscription().then((subscription) => {
            const options = subscription?.options;
            console.log(options?.applicationServerKey); // the public key
          });
        });
    }
  }, []);
  return null;
};

export default ServiceWorker;
