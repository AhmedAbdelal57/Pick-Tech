import { Feature, featureBlock } from "@/types/interfaces";

export const features: Feature[] = [
  {
    imageUrl: "/features/bar-chart.png",
    title: "Reporting dashboard",
    content:
      "Generate insightful reports and analytics with our reporting dashboard feature, empowering data-driven decision-making for engineering teams.",
  },
  {
    imageUrl: "/features/calendar.png",
    title: "Meeting scheduling",
    content:
      "Effortlessly schedule meetings, coordinate availability, and send automated reminders with the meeting scheduling feature, ensuring seamless collaboration.",
  },
  {
    imageUrl: "/features/protect.png",
    title: "100% secured",
    content:
      "Enhance data protection with robust security features, ensuring confidentiality, integrity, and compliance for your engineering team's CRM dashboard.",
  },
];

export const featuresBlock: featureBlock[] = [
  {
    imageUrl: "/features/messaing.svg",
    title: "Integrated Notifications System",
    content:
      "The integrated Notifications system within the ANGEL dashboard for school , parent and students allows for instant and seamless communication among team members.",
  },
  {
    imageUrl: "/features/task-management.svg",
    title: "Resource Allocation and Task Management",
    content:
      "The task management system within the ANGEL dashboard for school , parent and students enables efficient tracking and assignment of tasks. It provides a centralized platform to create, prioritize, and monitor tasks, ensuring streamlined project execution and improved collaboration among team members.",
    isReversed: true,
  },
];
