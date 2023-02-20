<template>
    <div class="card">
        <header>
            <div>标题1</div>
            <div>副标题1</div>
        </header>
        <section>内容1</section>
    </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'

</script>
<style scoped lang='less'>
.card {
    border: 1px solid #ccc;
    width: 400px;
    header{
        display: flex;
        justify-content: space-between;
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }
    section{
        padding: 5px;
        min-height: 300px;
    }
}
</style>