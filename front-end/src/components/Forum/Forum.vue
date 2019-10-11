<template>
<!--    <div id="forum">-->
<!--        <div class="nav-list" ref="navList">-->
<!--            <el-card class="box-card">-->
<!--                <div slot="header" class="clearfix">-->
<!--                    <span>站内导航</span>-->
<!--                    <el-button style="float: right; padding: 3px 0" type="text" @click="closeNav">-->
<!--                        <i class="el-icon-close"></i>-->
<!--                    </el-button>-->
<!--                </div>-->
<!--                <div class="text item">-->
<!--                    <div class="article">-->
<!--                        <el-button type="primary" plain @click="article">文章</el-button>-->
<!--                    </div>-->
<!--                    <div class="question">-->
<!--                        <el-button type="success" plain @click="question">提问</el-button>-->
<!--                    </div>-->
<!--                    <div class="question">-->
<!--                        <el-button type="warning" plain>建议</el-button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </el-card>-->
<!--        </div>-->
<!--        <div class="wrap">-->
<!--            <keep-alive>-->
<!--                <router-view></router-view>-->
<!--            </keep-alive>-->
<!--        </div>-->
<!--        <div class="bg"></div>-->
<!--    </div>-->
    <h1 style="text-align: center; margin-top: 20px; font-size: 22px;">敬请期待</h1>
</template>

<script>
    export default {
        methods: {
            closeNav() {
                this.$refs.navList.style.display = 'none';
            },
            article() {
                this.$router.push('/forum/article');
            },
            question() {
                this.$router.push('/forum/question');
            },
        },
        mounted() {
            this.$router.push("/forum/article");
        }
    }
</script>


<style scoped lang="stylus">
    #forum
        .nav-list
            position fixed
            z-index 1000
            top 80px
            right 10px
            width: 150px
            animation nav-list 2s infinite linear

            .text
                text-align center

                div
                    margin-bottom 10px

        .wrap
            width 60%
            margin 10px auto
        .bg
            position fixed
            top 0
            bottom 0
            left 0
            right 0
            background-color #f2f2f2
            z-index -1

    @keyframes nav-list
        0%
            top 80px
        50%
            top 90px
        100%
            top 80px
</style>

