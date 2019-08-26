<template>
  <div id="download">
    <div class="download-title">Rel-ebb下载</div>
    <div class="info">下载说明 下载说明 下载说明 下载说明</div>
    <div class="download-area">
      <div class="npm con" @click="npmDownload">
        <div class="icon">
          <div class="img">
            <img src="@/assets/images/npm.png" alt="NO IMG" />
          </div>
        </div>
        <div class="info">
          <div class="title">npm下载</div>
          <div class="desc">使用npm下载rel-ebb进行使用</div>
        </div>
      </div>
      <div class="github con" @click="githubDownload">
        <div class="icon">
          <div class="img">
            <img src="@/assets/images/github.png" alt="NO IMG" />
          </div>
        </div>
        <div class="info">
          <div class="title">github下载</div>
          <div class="desc">
            如果需要下载源代码，可以
            <a
              href="https://github.com/Traeric/Rel-ebb/releases"
              target="_blank"
            >点此链接</a>
            去到github进行fork
          </div>
        </div>
      </div>
      <div class="js con">
        <div class="icon">
          <div class="img">
            <img src="@/assets/images/JS.png" alt="NO IMG" />
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
            <img src="@/assets/images/CDN.png" alt="NO IMG" />
          </div>
        </div>
        <div class="info">
          <div class="title">cdn引用</div>
          <div class="desc">你可以不必下载任何代码，直接在你的代码中使用cdn引入rel-ebb即可</div>
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
      this.$alert(
        `
            <div>
                <span style="font-weight: bolder;">npm下载：</span>
                <span style="background-color: #ffafc9; padding: 5px 10px; border-radius: 4px; color: #fff;">npm i rel-ebb</span>
            </div>
                <div>
                    <span style="font-weight: bolder;">npm搜索地址：</span>
                    <a href="https://www.npmjs.com/package/rel-ebb" target="_blank" style="text-decoration: none; color: #ffafc9;">
                        https://www.npmjs.com/package/rel-ebb
                    </a>
                </div>
            </div>
        `,
        "npm下载",
        {
          dangerouslyUseHTMLString: true,
          closeOnClickModal: true
        }
      );
    },
    githubDownload() {
      this.$alert(
        `
            <div>
                <span style="font-weight: bolder;">github下载：</span>
                <a href="https://github.com/Traeric/Rel-ebb/releases" target="_blank" style="text-decoration: none; color: #ffafc9;">
                    点击跳转
                </a>
            </div>
                <div>
                    <span style="font-weight: bolder;">直接下载：</span>
                    <a href="https://github.com/Traeric/Rel-ebb/archive/0.0.1.zip" target="_blank" style="text-decoration: none; color: #ffafc9;">
                        direct download link
                    </a>
                </div>
            </div>
        `,
        "github下载",
        {
          dangerouslyUseHTMLString: true,
          closeOnClickModal: true
        }
      );
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
          border 5px solid #f7fbfd
          border-radius 50%
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
          a
            text-decoration none
            color #ffafc9
  .footer
    position fixed
    bottom 0
    left 0
    width 100%
    text-align center
    padding 10px 0
    color #aaa
</style>


