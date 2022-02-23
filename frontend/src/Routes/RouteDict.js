// import Home from "../Pages/Home/Home";
// import About from "../Pages/About/About";
// import Dashboard from "../Pages/Dashboard/Dashboard";
// import Login from "../Pages/Login/Login";

import {Home, About, Dashboard, Login} from "../Pages/index"

export const routes = [
    {path: '/', Element: Home, auth: false},
    {path: '/about', Element: About, auth: false},
    {path: '/cPanel/superuser/login', Element: Login, auth: false},
    {path: '/cPanel/superuser/dashboard', Element: Dashboard, auth: true},

]
