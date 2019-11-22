import vue from "vue";
import Router from "vue-router";
import HomePage from "../components/HomePage/HomePage";
import Download from "../components/Download/Download";
import ChatRoom from "../components/ChatRoom/ChatRoom";
import Forum from "../components/Forum/Forum";
import ForumArticle from "../components/Forum/Article/Article";
import ForumQuestion from "../components/Forum/Question/Question";
import ArticleItem from "../components/Forum/Article/Item";
import Blog from "../components/Blog/Blog";

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
        {
            path: "/forum",
            component: Forum,
            name: "forum",
            children: [
                {
                    path: "article",
                    component: ForumArticle,
                },
                {
                    path: "article/item/:id",
                    component: ArticleItem,
                },
                {
                    path: "question",
                    component: ForumQuestion,
                },
            ],
        },
        {
            path: "/blog",
            component: Blog,
            name: "blog",
        },
    ],
});


