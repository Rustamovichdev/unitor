import type { ReactNode } from "react";
import { Icons } from "../shared/constants/icon/icons";

interface ImenuData {
    id: number;
    title: string;
    icons: ReactNode;
    path:string
}

const menuData:ImenuData[] = [
    {
        id: 1,
        title: "Home",
        icons: <Icons.HomeIcon />,
        path: "/",
    },
    {
        id: 2,
        title: "Members",
        icons: <Icons.MembersIcon />,
        path: "/members",
    },
    {
        id: 3,
        title: "pos",
        icons: <Icons.PosIcon />,
        path: "/pos",
    },
    {
        id: 4,
        title: "Inventory",
        icons: <Icons.InvertoryIcon />,
        path: "/inventory",
    },
    {
        id: 5,
        title: "Products",
        icons: <Icons.ProductIcon />,
        path: "/products",
    },
    {
        id: 6,
        title: "Visit",
        icons: <Icons.VisitIcon />,
        path: "/visit",
    },
    {
        id: 7,
        title: "Payment",
        icons: <Icons.PaymentIcon />,
        path: "/payment",
    },
];
export default menuData;
