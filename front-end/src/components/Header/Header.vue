<template>
  <div id="wrap">
    <div class="right">
      <router-link to="/">
        <div class="logo">
          <img src="@/assets/logo.png" alt="NO IMG" />
        </div>
      </router-link>
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
          <li>
            <router-link to="/ddd" active-class="active">教程</router-link>
          </li>
          <li>
            <router-link to="/download" active-class="active">下载</router-link>
          </li>
          <li>
            <router-link to="/chat_room" active-class="active">聊天室</router-link>
          </li>
          <li>
            <router-link to="/hhh" active-class="active">论坛</router-link>
          </li>
        </ul>
      </div>
      <div class="user">
        <div class="avatar">
          <img src="@/assets/avatar.jpg" alt="NO IMG" />
        </div>
        <div class="nick">Eric Jin</div>
        <!-- 下拉列表 -->
        <ul class="pull-list">
          <div class="position">
            <div class="trangle"></div>
            <div class="wrapper">
              <li>
                <i class="el-icon-location-outline"></i> 个人信息
              </li>
              <li>
                <i class="el-icon-setting"></i> 系统设置
              </li>
              <li class="dilivery"></li>
              <li>
                <i class="el-icon-close"></i> 退出登录
              </li>
            </div>
          </div>
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
  padding 0 20px
  .right
    width 150px
    height 100%
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
          a
            padding 5px
            cursor pointer
            border-bottom 3px solid transparent
            text-decoration none
            color #000
            &.active
              border-bottom 3px solid #ffafc9
            &:hover
              border-bottom 3px solid #ffafc9
    .user
      display flex
      flex-direction column
      cursor pointer
      position relative
      &:hover
        .pull-list
          visibility visible
          top 70px
          opacity 1
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
        transition all 0.5s cubic-bezier(0.06, 0.24, 1, 2.2)
        visibility hidden
        opacity 0
        position absolute
        top 0
        left -75px
        min-width 110px
        border-radius 4px
        background-color #fff
        box-shadow 2px 2px 22px #dedede
        .position
          position relative
          .trangle
            position absolute
            top -16px
            left 85px
            width 0
            height 0
            border-width 8px
            border-style solid
            border-color transparent transparent #fff transparent
          .wrapper
            border-radius 4px
            overflow hidden
            li
              padding 8px 0 8px 10px
              font-size 14px
              &:hover
                background-color rgba(255, 175, 201, 0.3)
              &.dilivery
                padding 0
                height 1px
                width 100%
                box-shadow 0 0 6px #dedede
                background-color #dedede
              &:hover
                color #ffafc9
</style>
