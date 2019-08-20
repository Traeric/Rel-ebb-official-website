import vue from "vue";
import Router from "vue-router";
import HomePage from "../components/HomePage/HomePage";
import Download from "../components/Download/Download";

vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/download",
            component: Download,
        },
    ],
});


