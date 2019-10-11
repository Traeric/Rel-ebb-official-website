<template>
    <div id="blog">
        <div class="nav-list" ref="navList">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>站内导航</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="closeNav">
                        <i class="el-icon-close"></i>
                    </el-button>
                </div>
                <div class="text item">
                    <div class="article">
                        <el-button type="primary" plain @click="article">首页</el-button>
                    </div>
                    <div class="question">
                        <el-button type="success" plain @click="question">最新</el-button>
                    </div>
                    <div class="question">
                        <el-button type="warning" plain>热门</el-button>
                    </div>
                </div>
            </el-card>
        </div>
        <div class="wrap">

        </div>
    </div>
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
    }
</script>

<style scoped lang="stylus">
    #blog
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

    @keyframes nav-list
        0%
            top 80px
        50%
            top 90px
        100%
            top 80px
</style>