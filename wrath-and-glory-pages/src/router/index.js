import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/HomePage";
import About from "../pages/AboutGilead";
import CharacterCreation from "../pages/CharacterCreationPage";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/characterCreation",
        name: "CharacterCreation",
        component: CharacterCreation,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;