<template>
  <div>
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
              <a href="https://github.com/Traeric/Rel-ebb/releases" target="_blank">点此链接</a>
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
            <div class="desc">
              如果需要使用打包好后的js跟css文件，可以
              <a href="#">点击此处</a>
              进行下载
            </div>
          </div>
        </div>
        <div class="cdn con" @click="cdnDownload">
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
    </div>
    <div id="footer">
      <div class="left">
        <div class="links con">
          <div class="title">友情链接</div>
          <div class="link">
            <a href="#">源码地址</a>
          </div>
          <div class="link">
            <a href="#">作者首页</a>
          </div>
          <div class="link">
            <a href="#">更新说明</a>
          </div>
          <div class="link">
            <a href="#">常见问题</a>
          </div>
        </div>
        <div class="web-inline con">
          <div class="title">站内导航</div>
          <div class="link">
            <a href="#">快速开始</a>
          </div>
          <div class="link">
            <router-link to="/download">下载中心</router-link>
          </div>
          <div class="link">
            <a href="#">聊天室</a>
          </div>
          <div class="link">
            <a href="#">论坛</a>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="others"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
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
    },
    cdnDownload() {
      let innerDom = `
        <div>
            <span style="font-weight: bolder;">rel-ebb.js引用：</span>
            <span id="js_cdn" style="background-color: #ffafc9; padding: 5px 10px; border-radius: 4px; color: #fff;"></span>
        </div><br>
        <div>
            <span style="font-weight: bolder;">rel-ebb.css引用：</span>
            <span id="css_cdn" style="background-color: #ffafc9; padding: 5px 10px; border-radius: 4px; color: #fff;">npm i rel-ebb</span>
        </div>
        </div>
      `;
      this.$alert(
        innerDom,
        "CDN引用",
        {
          dangerouslyUseHTMLString: true,
          closeOnClickModal: true,
        },
      );

      setTimeout(() => {
        document.getElementById("js_cdn").innerHTML = `&lt;script src="rel-ebb.js"&gt;&lt;/script&gt;`;
        document.getElementById("css_cdn").innerHTML = `&lt;link rel="stylesheet" href="rel-ebb.css" &gt;`;
      }, 500);
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
          a
            text-decoration none
            color #ffafc9
#footer
  background-color #f7fbfd
  display flex
  justify-content space-between
  padding 30px 0 30px 130px
  position fixed
  bottom 0
  left 0
  width 100%
  .left
    display flex
  .con
    margin-right 70px
    .title
      font-weight bolder
      font-size 16px
      margin-bottom 15px
    .link
      height 30px
      line-height 30px
      a
        text-decoration none
        color #aaa
        font-size 14px
        &:hover
          color #000
</style>


