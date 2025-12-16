type TrackPayload = {
  [key: string]: string | number | boolean;
};

export function trackEvent(eventName: string, payload?: TrackPayload) {
  // Log local (útil em dev)
  console.log("[TRACK EVENT]", eventName, payload);

  // Google Analytics / GTAG
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, payload);
  }

  // Meta Pixel
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("trackCustom", eventName, payload);
  }

  // Fallback para backend próprio (opcional)
  // fetch("/api/track", { method: "POST", body: JSON.stringify({ eventName, payload }) });
}
