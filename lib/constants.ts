export const NavLinks: { id: string; name: string }[] = [
  { id: "home", name: "Home" },
  { id: "features", name: "Features" },
  { id: "pricing", name: "Pricing" },
];

type Token = { text: string; className?: string };
type Line = Token[];

export const codeLines: Line[] = [
  [{ text: "version: " }, { text: '"3.8"', className: "text-tertiary-purple" }],
  [{ text: "services:" }],
  [{ text: "  stackflow:" }],
  [
    { text: "    image: " },
    { text: "stackflow/runtime:latest", className: "text-green-400" },
  ],
  [{ text: "    ports:" }],
  [
    { text: "      - " },
    { text: '"8080:8080"', className: "text-tertiary-purple" },
  ],
  [{ text: "    environments:" }],
  [
    { text: "      - " },
    { text: "DEV_MODE=true", className: "text-[#F59E0B]" },
  ],
];
