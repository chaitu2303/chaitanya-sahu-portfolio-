export const STATS_EVENTS = {
  VISIT: "chaitu_stats_visit",
  RESUME_READ: "chaitu_stats_resume_read",
  INTERACTION: "chaitu_stats_interaction",
};

export const trackEvent = (eventType: string) => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(eventType));
  }
};
