export type EventCalendar = {
  title: string;
  start: Date;
  end: Date;
  location: string;
  description: string;
};

export type Event = {
  dayOfWeek: string;
  date: string;
  eventName: string;
  location: string;
  address: string;
  time: string;
  description: string;
  dressCode: string;
  calendarEvent: EventCalendar;
  directionsLink: string;
};

const weddingCalendar: EventCalendar = {
  title: "Nain and Niki's Wedding",
  start: new Date("2026-07-06T06:00:00Z"),
  end: new Date("2026-07-06T14:00:00Z"),
  location: "QRJQ+862, Nairobi",
  description: "Nain and Niki's wedding",
};

const amalfiNightCalendar: EventCalendar = {
  title: "Amalfi Night",
  start: new Date("2026-07-04T15:00:00Z"),
  end: new Date("2026-07-04T21:00:00Z"),
  location: "QRJQ+862, Nairobi",
  description:
    "Mehndi night with a twist (of lemons)! Kick off the wedding festivities with pizza, pasta, and booze if you’re feeling zesty.",
};

const randomShitCalendar: EventCalendar = {
  title: "Random shit",
  start: new Date("2026-07-05T08:00:00Z"),
  end: new Date("2026-07-05T14:00:00Z"),
  location: "QRJQ+862, Nairobi",
  description:
    "Pre-wedding blessings and rituals, followed by lunch. I pithi the fool who’s getting married and has to write all this. Couldn’t be me.",
};

const receptionCalendar: EventCalendar = {
  title: "Reception",
  start: new Date("2026-07-06T18:00:00Z"),
  end: new Date("2026-07-06T23:59:59Z"),
  location: "QRJQ+862, Nairobi",
  description:
    "The event everybody’s really waiting for! Ending celebrations with a whole load of good food, drinks, and dancing.",
};

export const amalfiNight: Event = {
  dayOfWeek: "Saturday",
  date: "04.07",
  eventName: "Amalfi night",
  location: "Kigwa Farm",
  address: "QRJQ+862, Nairobi",
  time: "3pm - 9pm",
  description:
    "Mehndi night with a twist (of lemons)! Kick off the wedding festivities with pizza, pasta, and booze if you’re feeling zesty.",
  dressCode: "Summer vibes or Indian casual",
  calendarEvent: amalfiNightCalendar,
  directionsLink: "https://maps.app.goo.gl/8adfba8sKuesfJWw6",
};

export const randomShit: Event = {
  dayOfWeek: "Sunday",
  date: "05.07",
  eventName: "Random shit",
  location: "Kigwa Farm",
  address: "QRJQ+862, Nairobi",
  time: "8am - 2pm",
  description:
    "Pre-wedding blessings and rituals, followed by lunch. I pithi the fool who’s getting married and has to write all this. Couldn’t be me.",
  dressCode: "Casual clothes that you don’t mind getting ruined!",
  calendarEvent: randomShitCalendar,
  directionsLink: "https://maps.app.goo.gl/8adfba8sKuesfJWw6",
};

export const wedding: Event = {
  dayOfWeek: "Monday",
  date: "06.07",
  eventName: "Wedding",
  location: "Jalaram Mandir",
  address: "19 Ring Road, Nairobi",
  time: "9am - 2pm",
  description:
    "Hindu ceremony kickstarting with Nain’s Baraat and ending with a good meal.",
  dressCode: "Formal Indian (or Western if you’re boring/white)",
  calendarEvent: weddingCalendar,
  directionsLink: "https://maps.app.goo.gl/C6q1KzfmMf4LgUSK9",
};

export const reception: Event = {
  dayOfWeek: "Monday",
  date: "06.07",
  eventName: "Reception",
  location: "Kigwa Farm",
  address: "QRJQ+862, Nairobi",
  time: "6pm - Late",
  description:
    "The event everybody’s really waiting for! Ending celebrations with a whole load of good food, drinks, and dancing.",
  dressCode: "Bring your best party gear",
  calendarEvent: receptionCalendar,
  directionsLink: "https://maps.app.goo.gl/8adfba8sKuesfJWw6",
};
