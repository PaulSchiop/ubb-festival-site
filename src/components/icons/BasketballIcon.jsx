import { createLucideIcon } from "lucide-react";

export const BasketballIcon = createLucideIcon("basketball", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "basketball-1" }],
    ["path", { d: "M12 2v20", key: "basketball-2" }],
    ["path", { d: "M2 12h20", key: "basketball-3" }],
    ["path", { d: "M6 3A16 16 0 0 1 6 21", key: "basketball-4" }],
    ["path", { d: "M18 3A16 16 0 0 0 18 21", key: "basketball-5" }]
]);