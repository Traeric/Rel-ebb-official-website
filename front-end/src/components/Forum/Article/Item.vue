<template>
    <div id="item">
        <div class="main">
            <div class="title">rel-ebb真的好用</div>
            <div class="info">
                <div class="top">
                    <div class="avatar"><img src="@/assets/images/chat/2.png" alt="NO IMG"></div>
                    <div class="name">李可乐</div>
                    <div class="tag">
                        <el-tag type="danger">分类一</el-tag>
                    </div>
                </div>
                <div class="time">
                    2016年2月8日
                </div>
            </div>
            <div class="article">
                gfdgdfg
                gfdgdfg
                gdfgdfg
                dfgdf
            </div>
            <div class="thumb-up">
                <div class="thumb active">
                    <div class="icon"><i class="el-icon-view"></i></div>
                    <div class="num">已阅(10)</div>
                </div>
            </div>
        </div>
        <div class="common">

        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="stylus">
    #item
        .main
            padding 0 25px
            background-color #fff
            border-radius 4px
            border 1px solid #dedede
            .title
                font-weight bolder
                font-size 22px
                line-height 60px
                margin-left 5px

            .info
                .top
                    display flex
                    align-items center

                    .avatar
                        width 40px
                        height 40px
                        margin-right 5px

                        img
                            margin 5px
                            width 30px
                            height 30px
                            border-radius 50%

                    .name
                        margin-right 5px

                .time
                    color #aaa
                    margin-left 5px
                    line-height 30px
                    font-size 14px

            .article
                padding 10px 5px
            .thumb-up
                display flex
                justify-content center
                margin-bottom 20px
                .thumb
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center
                    color #aaa
                    cursor pointer
                    &:hover
                        color #797979
                    &.active
                        color #f56c6c
                    .icon
                        i
                            font-size 34px
                    .num
                        font-size 14px
</style>