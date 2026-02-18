import type { ReactNode } from "react";
import { MembersPage } from "../features";
import Pos from "../shared/components/pos";

interface Iroutes {
    id: number;
    path: string;
    elements: ReactNode;
}
export const routes: Iroutes[] = [
    {
        id: 1,

        path: "/",

        elements: <MembersPage />,
    },
    {
        id: 2,

        path: "/members",
        elements: <MembersPage />,
    },
    {
        id: 3,

        path: "/pos",
        elements: <Pos/>,
    },
    {
        id: 4,

        path: "/inventory",
        elements: "Inventor",
    },
    {
        id: 5,

        path: "/products",
        elements: "Products",
    },
    {
        id: 6,

        path: "/visit",
        elements: "Visit",
    },
    {
        id: 7,

        path: "/payment",
        elements: "Payment",
    },
];
