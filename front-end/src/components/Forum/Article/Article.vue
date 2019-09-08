<template>
    <div class="Article">
        <div class="banner">
            <el-carousel>
                <el-carousel-item>
                    <router-link to="/">
                        <img src="@/assets/images/chat/bg.jpg" alt="NO IMG">
                    </router-link>
                </el-carousel-item>
                <el-carousel-item>
                    <router-link to="/">
                        <img src="@/assets/images/chat/bg.jpg" alt="NO IMG">
                    </router-link>
                </el-carousel-item>
                <el-carousel-item>
                    <router-link to="/">
                        <img src="@/assets/images/chat/bg.jpg" alt="NO IMG">
                    </router-link>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="select-list">
            <div class="category">
                <el-select placeholder="请选择分类" v-model="category">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </div>
            <div class="new hov active">最新发布</div>
            <div class="hot hov">最热</div>
        </div>
        <div class="display-area">
            <div class="title-top">
                <el-tag type="warning">分类一</el-tag>
                <el-tag type="danger">最新</el-tag>
            </div>
            <div class="item">
                <div class="avatar">
                    <img src="@/assets/images/chat/1.png" alt="NO IMG">
                </div>
                <div class="info">
                    <div class="title">rel-ebb真是好用啊</div>
                    <div class="user-info">
                        <div class="left">
                            <div class="user">李可乐</div>
                            <div class="time">
                                <el-tag type="success">2019-2-8</el-tag>
                            </div>
                            <div class="thumb-up" title="已阅">
                                <i class="el-icon-view"></i>
                                15
                            </div>
                        </div>
                        <div class="right" title="评论">
                            <i class="el-icon-edit"></i>
                            15
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="avatar">
                    <img src="@/assets/images/chat/1.png" alt="NO IMG">
                </div>
                <div class="info">
                    <div class="title">rel-ebb真是好用啊</div>
                    <div class="user-info">
                        <div class="left">
                            <div class="user">李可乐</div>
                            <div class="time">
                                <el-tag type="success">2019-2-8</el-tag>
                            </div>
                            <div class="thumb-up" title="已阅">
                                <i class="el-icon-view"></i>
                                15
                            </div>
                        </div>
                        <div class="right" title="评论">
                            <i class="el-icon-edit"></i>
                            15
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="avatar">
                    <img src="@/assets/images/chat/1.png" alt="NO IMG">
                </div>
                <div class="info">
                    <div class="title">rel-ebb真是好用啊</div>
                    <div class="user-info">
                        <div class="left">
                            <div class="user">李可乐</div>
                            <div class="time">
                                <el-tag type="success">2019-2-8</el-tag>
                            </div>
                            <div class="thumb-up" title="已阅">
                                <i class="el-icon-view"></i>
                                15
                            </div>
                        </div>
                        <div class="right" title="评论">
                            <i class="el-icon-edit"></i>
                            15
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                category: "shanghai",
            };
        },
    }
</script>

<style scoped lang="stylus">
    .Article
        .banner
            padding 10px 15px
            background-color #fff !important
            border-radius 4px
            border 1px solid #dedede
        .select-list
            margin-top 10px
            width 100%
            display flex
            justify-content space-around
            align-items center
            background-color #fff
            padding 20px 0
            border 1px solid #dedede
            border-radius 2px
            .hov
                cursor pointer
                padding 10px 30px
                &:hover
                    background-color #b9c8d8
                &.active
                    background-color #34495e
                    color #fff
        .display-area
            margin-top 10px
            background-color #fff
            border-radius 2px
            padding 10px 0
            .title-top
                padding-left 15px
                padding-bottom 10px
                span
                    margin-right 10px
            .item
                display flex
                justify-content flex-start
                border-top 1px dotted #dedede
                padding 10px 15px
                .avatar
                    height 60px
                    width 60px
                    margin-right 10px
                    img
                        height 50px
                        width 50px
                        margin 5px
                .info
                    width 100%
                    .title
                        width 100%
                        height 30px
                        line-height 30px
                        font-weight bold
                    .user-info
                        display flex
                        justify-content space-between
                        height 30px
                        line-height 30px
                        font-size 14px
                        .left
                            display flex
                            .user
                                color #aaa
                                margin-right 10px
                            .time
                                margin-right 10px
                            .thumb-up
                                color #F56C6C
                                cursor pointer
                        .right
                            color #aaa
                            cursor pointer
</style>