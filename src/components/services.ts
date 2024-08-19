export type ServiceItem = {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
};

export const SERVICES: ServiceItem[] = [
  {
    id: 0,
    title: "Custom Web App Development",
    subtitle: "Angular, React, and more",
    cta: "Build your app",
  },
  {
    id: 1,
    title: "User Experience Enhancement",
    subtitle: "Elevate your UX",
    cta: "Improve UX",
  },
  {
    id: 2,
    title: "Collaborative Development",
    subtitle: "Working with your team",
    cta: "Let's work together",
  },
];
