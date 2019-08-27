import vue from "vue";
import Router from "vue-router";
import HomePage from "../components/HomePage/HomePage";
import Download from "../components/Download/Download";
import ChatRoom from "../components/ChatRoom/ChatRoom";

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
            name: "download",
        },
        {
            path: "/chat_room",
            component: ChatRoom,
            name: "chat_room",
        },
    ],
});


