<template>
    <div class="tree" @click.stop="clickTap(item,$event)" v-for="(item, index) in data" :key="index">
        <input v-model="item.checked" type="checkbox"  > <span>{{ item.name }}</span>
        <Tree v-if="item?.children?.length" :data="item?.children"></Tree>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
interface Tree {
    name: string;
    checked: boolean;
    children?: Tree[];
}
const props = defineProps<{
  data?:Tree[]
}>()
console.log(props.data);

const clickTap = (item:Tree, e:any) => {
    console.log(e.target);
    
}
</script>
<style scoped lang="less">
.tree{
    margin-left: 10px;
}
</style>
