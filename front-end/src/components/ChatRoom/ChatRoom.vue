<template>
  <div id="chat_room">
    <div class="top">
      <div class="broadcast">
        <div class="icon">
          <i class="fa fa-bullhorn"></i>
        </div>
        <div class="text">
          <div class="wrap" ref="broadcastWrap">
            <p>rel ebb rel ebb rel ebb rel ebb rel ebb</p>
            <p>hahahahhahaha</p>
            <p>bbbbbbbbbbbbbbbbbbbbbb</p>
            <p>fgdfgghghfghfghfghgf</p>
          </div>
        </div>
      </div>
    </div>
    <div class="left">left</div>
    <div class="content">main</div>
    <div class="right">right</div>
    <div class="footer">footer</div>
  </div>
</template>


<script>
export default {
  mounted() {
    let wrapDom = this.$refs.broadcastWrap;
    // 获取wrap的高度
    let height = wrapDom.clientHeight;
    // 获取公告的数量
    let count = wrapDom.children.length;
    let index = 1;
    setInterval(() => {
      // 向上滚动公告
      index < count
        ? (wrapDom.style.marginTop = `-${(height / count) * index++}px`)
        : (index = 0);
    }, 20000);
  }
};
</script>


<style scoped lang="stylus">
#chat_room
  display grid
  width 100%
  grid-template-columns repeat(4, 1fr)
  grid-template-rows repeat(3, 1fr)
  .top
    grid-column-start 1
    grid-column-end 5
    grid-row-start 1
    grid-row-end 2
    height 36px
    background-color #ffafc9
    .broadcast
      display flex
      justify-content start
      align-items center
      width 60%
      height 100%
      margin 0 auto
      .icon
        font-size 20px
        height 100%
        line-height 36px
        color #c02c38
        margin-right 10px
      .text
        height 100%
        overflow hidden
        .wrap
          transition all 0.5s linear
          p
            height 100%
            line-height 36px
            animation wordsLoop 10s linear infinite normal
            color #d11a2d
  .left
    grid-column-start 1
    grid-column-end 2
    grid-row-start 2
    grid-row-end 3
  .content
    grid-column-start 2
    grid-column-end 4
    grid-row-start 2
    grid-row-end 3
  .right
    grid-column-start 4
    grid-column-end 5
    grid-row-start 2
    grid-row-end 3
  .footer
    grid-column-start 1
    grid-column-end 5
    grid-row-start 3
    grid-row-end 4
@keyframes wordsLoop
  0%
    transform translateX(100px)
  100%
    transform translateX(-100%)
</style>

