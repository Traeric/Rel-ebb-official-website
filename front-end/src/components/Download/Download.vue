<template>
    <div id="download">
        <div class="download-title">Rel-ebb下载</div>
        <div class="info">下载说明 下载说明 下载说明 下载说明</div>
        <div class="download-area">
            <div class="npm con" @click="npmDownload">
                <div class="icon">
                    <div class="img">
                        <img src="@/assets/images/npm.png" alt="NO IMG"/>
                    </div>
                </div>
                <div class="info">
                    <div class="title">npm下载</div>
                    <div class="desc">使用npm下载rel-ebb进行使用</div>
                </div>
            </div>
            <div class="github con">
                <div class="icon">
                    <div class="img">
                        <img src="@/assets/images/github.png" alt="NO IMG"/>
                    </div>
                </div>
                <div class="info">
                    <div class="title">github下载</div>
                    <div class="desc">如果需要下载源代码，可以点此链接去到github进行fork</div>
                </div>
            </div>
            <div class="js con">
                <div class="icon">
                    <div class="img">
                        <img src="@/assets/images/JS.png" alt="NO IMG"/>
                    </div>
                </div>
                <div class="info">
                    <div class="title">js文件下载</div>
                    <div class="desc">如果需要使用打包好后的js跟css文件，可以点击此处进行下载</div>
                </div>
            </div>
            <div class="cdn con">
                <div class="icon">
                    <div class="img">
                        <img src="@/assets/images/CDN.png" alt="NO IMG"/>
                    </div>
                </div>
                <div class="info">
                    <div class="title">cdn引用</div>
                    <div class="desc">你可可以不必下载任何代码，直接在你的代码中使用cdn引入rel-ebb即可</div>
                </div>
            </div>
        </div>
        <div class="footer">&copy; Eric Jin</div>
    </div>
</template>

<script>
    export default {
        methods: {
            npmDownload() {
                const h = this.$createElement;
                this.$alert(`
                    <div>npm下载：npm i rel-ebb</div>
                    <div>npm搜索地址：
                        <a href="https://www.npmjs.com/package/rel-ebb" target="_blank">
                            https://www.npmjs.com/package/rel-ebb
                        </a>
                    </div>
                `, 'npm下载', {
                    dangerouslyUseHTMLString: true
                });
            }
        }
    };
</script>

<style lang="stylus" scoped>
    #download
        .download-title
            font-weight bolder
            font-size 24px
            text-align center
            margin 10px 0

        .info
            text-align center

        .download-area
            display flex
            justify-content space-around
            flex-wrap wrap
            margin-top 50px

            .con
                width 20%
                min-width 230px
                cursor pointer
                border 1px solid #dedede
                border-radius 4px
                padding 20px 10px
                box-sizing border-box

                &:hover
                    background-color #f9f9f9

                .icon
                    height 330px
                    width 100%
                    display flex
                    justify-content center
                    align-items center

                    .img
                        width 100px
                        height 100px

                        img
                            width 100%
                            height 100%
                            border-radius 50%

                .info
                    .title
                        font-weight bolder
                        font-size 16px
                        text-align center
                        margin-bottom 15px

                    .desc
                        text-align center
                        font-size 14px
                        color #aaa
                        line-height 20px

        .footer
            position fixed
            bottom 0
            left 0
            width 100%
            text-align center
            padding 10px 0
            color #aaa
</style>


