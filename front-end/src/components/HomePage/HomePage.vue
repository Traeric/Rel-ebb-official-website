<template>
  <div id="wrapper">
    <div class="describe">
      <div class="title">前端开发工具集</div>
      <div class="small">Rel-ebb，方便前端开发的工具集</div>
    </div>
    <div class="nav">
      <div class="start con">
        <div class="position">
          <div class="icon">
            <div class="img">
              <img src="@/assets/images/doc.png" alt="NO IMG" />
            </div>
          </div>
          <div class="info">
            <div class="title">文档</div>
            <div class="desc">这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述</div>
          </div>
          <div class="bottom">
            <i class="el-icon-info"></i> 了解详情
          </div>
        </div>
      </div>
      <div class="start con">
        <div class="position">
          <div class="icon">
            <div class="img">
              <img src="@/assets/images/download.png" alt="NO IMG" />
            </div>
          </div>
          <div class="info">
            <div class="title">下载</div>
            <div class="desc">这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述</div>
          </div>
          <div class="bottom">
            <i class="el-icon-info"></i> 了解详情
          </div>
        </div>
      </div>
      <div class="start con">
        <div class="position">
          <div class="icon">
            <div class="img">
              <img src="@/assets/images/github.png" alt="NO IMG" />
            </div>
          </div>
          <div class="info">
            <div class="title">GITHUB</div>
            <div class="desc">Fork me on github</div>
          </div>
          <div class="bottom">
            <i class="el-icon-info"></i> 了解详情
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style scoped lang="stylus">
#wrapper
  .describe
    width 100%
    .title
      font-weight bolder
      font-size 30px
      width 100%
      text-align center
      margin 20px 0
    .small
      width 100%
      text-align center
  .nav
    display flex
    justify-content space-around
    margin-top 30px
    .con
      width 300px
      position relative
      height 400px
      .position
        position absolute 
        top 0
        width 100%
        border 1px solid #dedede
        border-radius 4px
        overflow hidden
        transition all 0.5s
        &:hover
          box-shadow 6px 6px 22px #dedede
          top 5px
        .icon
          width 100%
          height 230px
          display flex
          justify-content center
          align-items center
          .img
            width 100px
            height 100px
            border-radius 50%
            overflow hidden
            img
              width 100%
              height 100%
        .info
          width 100%
          text-align center
          padding 0 10px
          margin-bottom 10px
          box-sizing border-box
          height 70px
          .title
            margin 15px 0 10px 0
            font-weight bolder
            font-size 18px
          .desc
            color #aaa
            font-size 14px
            line-height 20px
        .bottom
          height 50px
          line-height 50px
          text-align center
          border-top 1px solid #dedede
          cursor pointer
          color #ffafc9
          &:hover
            background-color #ffafc9
            color #fff
</style>

