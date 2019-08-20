<template>
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
          <a href="#">下载中心</a>
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
</template>

<script>
export default {};
</script>


<style scoped lang="stylus">
#footer
  background-color #f7fbfd
  display flex
  justify-content space-between
  padding 30px 0 30px 130px
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

