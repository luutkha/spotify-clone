import MainLayout from "./layouts/MainLayout";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Index from "./views/Index";

const routes = [
    { path: ["/index"], component: Index, exact: true },
    { path: ["/"], component: MainLayout, exact: true },
    { path: ["/register"], component: Register, exact: true },
    { path: ["/login"], component: Login, exact: true },
        
   
];
export default routes

