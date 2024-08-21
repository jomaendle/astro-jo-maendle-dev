export type ServiceItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
};

export const SERVICES: ServiceItem[] = [
  {
    id: 0,
    title: "Custom Web App Development",
    subtitle:
      "Scalable, High-Performance Solutions with Angular, React, and More",
    description:
      "Leverage over 5 years of experience in building large-scale web applications tailored to your business needs. Whether you're a startup or a large enterprise, I deliver robust, scalable, and maintainable solutions using Angular, React, and modern frameworks. My expertise ensures your application is built to last, with best-in-class performance and a seamless user experience.",
    cta: "Schedule a Free Consultation",
  },
  {
    id: 1,
    title: "User Experience (UX) Optimization",
    subtitle: "Transforming User Interactions into Conversions",
    description:
      "Enhance your web application’s user experience to increase engagement and conversions. I specialize in analyzing and refining UX to create intuitive, user-friendly interfaces that keep users engaged and drive business results. Whether you need a UX audit or a complete redesign, I'll help elevate your application to the next level.",
    cta: "Get a UX Audit",
  },
  {
    id: 2,
    title: " Collaborative Development & Consulting",
    subtitle: "Seamless Integration with Your Development Team",
    description:
      "Need an experienced developer to collaborate with your team? I bring expertise in Angular, NX, and full-stack development to the table, ensuring smooth collaboration and efficient project delivery. Whether it's enhancing your existing project or building something new, I work closely with your team to meet your goals on time and within budget.",
    cta: "Book a Collaboration Call",
  },
  {
    id: 3,
    title: "Start-Up MVP Development",
    subtitle: "Rapid Prototyping to Validate Your Business Idea",
    description:
      "Transform your business idea into a working prototype with my MVP development services. I specialize in building minimum viable products that help you validate your concept, attract investors, and gain early traction. From idea to launch, I'll guide you through the MVP development process, ensuring your product is ready for market success.",
    cta: "Get Your MVP Started",
  },
];
