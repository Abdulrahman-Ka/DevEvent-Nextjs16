export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    title: "ReactConf",
    slug: "reactconf",
    image: "/images/event1.png",
    location: "San Francisco, CA",
    date: "2022-10-01",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "NodeConf",
    slug: "nodeconf",
    image: "/images/event2.png",
    location: "New York City, NY",
    date: "2022-11-15",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "JSConf",
    slug: "jsconf",
    image: "/images/event3.png",
    location: "Seattle, WA",
    date: "2022-12-01",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "AngularConf",
    slug: "angularconf",
    image: "/images/event4.png",
    location: "London, UK",
    date: "2022-10-15",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "VueConf",
    slug: "vueconf",
    image: "/images/event5.png",
    location: "Tokyo, Japan",
    date: "2022-11-20",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "TypeScriptConf",
    slug: "typescriptconf",
    image: "/images/event6.png",
    location: "Berlin, Germany",
    date: "2022-12-10",
    time: "9:00 AM - 5:00 PM",
  },
];
