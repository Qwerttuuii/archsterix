export const projectCategories = [
  "all",
  "residential",
  "commercial",
  "institutional",
  "ongoing",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects = [
  {
    id: 1,
    title: "Lakeview Estate, Jabi-Abuja",
    category: "residential" as const,
    description:
      "160-unit estate with shopping complex, playground, and 24-hour utilities.",
    image: "/projects/lakeview-estate.avif",
    location: "Jabi, Abuja",
  },
  {
    id: 2,
    title: "Walnut Grove Estate, Jahi-Abuja",
    category: "residential" as const,
    description: "Premium residential development in Jahi, Abuja.",
    image: "/projects/walnut.avif",
    location: "Jahi, Abuja",
  },
  {
    id: 3,
    title: "Sterling Bank Branch Development",
    category: "commercial" as const,
    description: "Multi-branch design and build development program.",
    image: "/projects/sterling-bank.avif",
    location: "Multiple locations in Nigeria",
  },
  {
    id: 4,
    title: "Keystone Bank Branch Development, Kogi",
    category: "commercial" as const,
    description:
      "Branch development project for Keystone Bank in Lokoja featuring modern design and construction techniques.",
    image: "/projects/keystone.avif",
    location: "Lokoja, Kogi",
  },
  {
    id: 5,
    title: "Living Faith Church, Akwa Ibom",
    category: "institutional" as const,
    description: "Church construction project with modern facilities.",
    image: "/projects/living-faith-church.avif",
    location: "Akwa Ibom",
  },
  {
    id: 6,
    title: "The Chambery, Dawaki-Abuja",
    category: "ongoing" as const,
    description:
      "A residential development in Dawaki offering privacy, comfort, and modern infrastructure.",
    image: "/projects/chambery.avif",
    location: "Dawaki, Abuja",
  },
  {
    id: 7,
    title: "Skye Bank, Kano",
    category: "commercial" as const,
    description:
      "Branch development project in Kano featuring state-of-the-art banking facilities.",
    image: "/projects/skyebank.avif",
    location: "Kano",
  },
  {
    id: 8,
    title: "Media Plus International, Abuja",
    category: "commercial" as const,
    description:
      "Interior furniture and equipment planned and supplied by Arch-Sterix Nigeria Limited.",
    image: "/projects/mediaplus.avif",
    location: "Abuja",
  },
] as const;
