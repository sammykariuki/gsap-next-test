export const NavLinks: { id: string; name: string }[] = [
  { id: "home", name: "Home" },
  { id: "features", name: "Features" },
  { id: "pricing", name: "Pricing" },
];

type Token = { text: string; className?: string };
type Line = { indent: number; tokens: Token[] };

export const codeLines: Line[] = [
  {
    indent: 0,
    tokens: [
      { text: "version: " },
      { text: '"3.8"', className: "text-tertiary-purple" },
    ],
  },
  { indent: 0, tokens: [{ text: "services:" }] },
  { indent: 1, tokens: [{ text: "stackflow:" }] },
  {
    indent: 2,
    tokens: [
      { text: "image: " },
      { text: "stackflow/runtime:latest", className: "text-green-400" },
    ],
  },
  { indent: 2, tokens: [{ text: "ports:" }] },
  {
    indent: 3,
    tokens: [
      { text: "- " },
      { text: '"8080:8080"', className: "text-tertiary-purple" },
    ],
  },
  { indent: 2, tokens: [{ text: "environments:" }] },
  {
    indent: 3,
    tokens: [
      { text: "- " },
      { text: "DEV_MODE=true", className: "text-[#F59E0B]" },
    ],
  },
];
type CoreData = {
  image: string;
  heading: string;
  text: string;
};
export const coreData: CoreData[] = [
  {
    image: "/images/tech-image-1.jpg",
    heading: "Hot Module Syncing",
    text: "Instant live synchronization between local changes and staging containers without builds",
  },
  {
    image: "/images/tech-image-2.jpg",
    heading: "Isolated Variables",
    text: "Manage production environment variables securely inside local development boundaries.",
  },
  {
    image: "/images/tech-image-3.jpg",
    heading: "Auto-Healing Ports",
    text: "Detect and release bound local ports automatically on process initialization.",
  },
  {
    image: "/images/tech-image-4.jpg",
    heading: "Environment Presets",
    text: "Switch between clean environments dynamically with structured preset templates.",
  },
  {
    image: "/images/tech-image-5.jpg",
    heading: "Optimized Runtimes",
    text: "Engineered specifically to minimize developer system overhead, freeing up CPU and RAM.",
  },
  {
    image: "/images/tech-image-6.jpg",
    heading: "Pipeline Analytics",
    text: "Gain deep visibility into build speeds, compiler warnings, and deployment friction.",
  },
  {
    image: "/images/tech-image-7.jpg",
    heading: "Hot Module Syncing",
    text: "Instant live synchronization between local changes and staging containers without builds",
  },
  {
    image: "/images/tech-image-8.jpg",
    heading: "Hot Module Syncing",
    text: "Instant live synchronization between local changes and staging containers without builds",
  },
];
