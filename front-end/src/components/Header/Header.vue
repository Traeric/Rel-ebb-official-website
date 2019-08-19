<template>
  <div id="wrap">
    <div class="right">
      <div class="logo">
        <img src="@/assets/logo.png" alt="NO IMG" />
      </div>
    </div>
    <div class="left">
      <div class="search">
        <div class="box" ref="searchBoxHook">
          <input type="text" name="search" @focus="changeColor" @blur="resetColor" />
          <div class="btn" title="搜索">
            <i class="el-icon-search"></i>
          </div>
        </div>
      </div>
      <div class="nav">
        <ul class="nav-list">
          <li>教程</li>
          <li>下载</li>
          <li>聊天室</li>
        </ul>
      </div>
      <div class="user">
        <div class="avatar">
          <img src="@/assets/avatar.jpg" alt="NO IMG" />
        </div>
        <div class="nick">Eric Jin</div>
        <!-- 下拉列表 -->
        <ul class="pull-list">
            <div class="trangle"></div>
            <li><i class="el-icon-location-outline"></i> 个人信息</li>
            <li><i class="el-icon-setting"></i> 系统设置</li>
            <li class="dilivery"></li>
            <li><i class="el-icon-close"></i> 退出登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focusFlag: true
    };
  },
  methods: {
    changeColor() {
      if (this.focusFlag) {
        this.focusFlag = false;
        // 更换颜色
        this.$refs.searchBoxHook.style.borderColor = "#ffafc9";
      }
    },
    resetColor() {
      if (!this.focusFlag) {
        this.focusFlag = true;
        // 更换颜色
        this.$refs.searchBoxHook.style.borderColor = "#dedede";
      }
    }
  }
};
</script>

<style scoped lang="stylus">
#wrap
  display flex
  justify-content space-between
  align-items center
  height 60px
  background-color #fff
  border-bottom 1px solid #f9f9f9
  .right
    width 150px
    height 100%
    background-color #f90
    .logo
      width 100%
      height 100%
      overflow hidden
      img
        height 100%
  .left
    height 100%
    display flex
    justify-content space-between
    align-items center
    .search
      .box
        border 1px solid #dedede
        padding 0 10px
        border-radius 26px
        display flex
        align-items center
        height 35px
        box-sizing border-box
        input
          height 100%
          padding 3px 5px
          box-sizing border-box
          outline none
          border none
          background-color transparent
          font-size 16px
        .btn
          cursor pointer
          i
            font-weight bolder
            color #aaa
          &:hover
            i
              color #ffafc9
    .nav
      height 100%
      .nav-list
        height 100%
        display flex
        align-items center
        li
          margin 0 15px
          padding 5px
          cursor pointer
          border-bottom 3px solid transparent
          &.active
            border-bottom 3px solid #ffafc9
          &:hover
            border-bottom 3px solid #ffafc9
    .user
      display flex
      flex-direction column
      cursor pointer
      position relative
      .avatar
        height 40px
        width 40px
        overflow hidden
        border-radius 50%
        img
          height 30px
          width 30px
          margin 5px
      .nick
        font-size 12px
        text-align center
        line-height 20px
      .pull-list
        position absolute
        top 60px
        left -60px
        min-width 120px
        border 1px solid #dedede
        border-radius 4px
        .trangle
            width 0
            height 0
            
        li
            padding 5px 2px
            &.dilivery
                padding 0
                height 1px
                width 100%
                box-shadow 0 0 6px #dedede
                background-color #dedede
</style>
