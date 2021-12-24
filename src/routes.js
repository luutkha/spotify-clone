import MainLayout from "./layouts/MainLayout";
import Login from "./views/auth/Login";
import RedirectForLogin from "./views/auth/RedirectForLogin";
import Register from "./views/auth/Register";
import Index from "./views/Index";

const routes = [
    { path: ["/index"], component: Index, exact: true },
    { path: ["/"], component: MainLayout, exact: true },
    { path: ["/register"], component: Register, exact: true },
    { path: ["/login"], component: Login, exact: true },
    { path: ["/redirect"], component: RedirectForLogin, exact: true },
        
   
];
export default routes

