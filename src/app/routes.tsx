import HomePage from "../pagas/Home";
import InvertoryPage from "../pagas/Invertory";
import MembersPage from "../pagas/Members";
import PaymentsPage from "../pagas/Payments";
import ProductsPage from "../pagas/Products";
import PosPage from "../pagas/Pos";
import VisitPage from "../pagas/Visit_History";

export const routes = [
    {
        id:1,
        path:'/',
        element:<HomePage/>
    },
    {
        id:2,
        path:'/inventory',
        element:<InvertoryPage/>
    },
    {
        id:3,
        path:'/members',
        element:<MembersPage/>
    },
    {
        id:4,
        path:"/payments",
        element:<PaymentsPage/>
    },
    {
        id:5,
        path:'/pos',
        element:<PosPage/>
    },
    {
        id:6,
        path:'/products',
        element:<ProductsPage/>
    },
    {
        id:7,
        path:'/visithistory',
        element:<VisitPage/>
    },
]