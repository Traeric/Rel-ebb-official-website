<template>
    <div id="chat_room">
        <div class="top">

        </div>
        <div class="left">left</div>
        <div class="content">main</div>
        <div class="right">right</div>
        <div class="footer">footer</div>
    </div>
</template>


<script>
export default {
    
}
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
        height 60px
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
</style>

