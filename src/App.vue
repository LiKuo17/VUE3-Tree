
<template>
  <!-- <waterFull ref="waterFall" :list="list"></waterFull> -->
  <!-- <Card></Card> -->
  <Tree :data="data"></Tree>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue"
// import waterFull from "./components/water-full.vue"
// import Card from "./components/Card.vue";
import Tree from "./components/Tree.vue";
interface Tree {
    name: string; 
    checked: boolean;
    children?: Tree[];
}

const data = reactive([
    {
        name: "1",
        checked: true,
        children: [
            {
                name: "1-1",
                checked: false,
                children:[
                  {
                    name:"3-1-1",
                    checked: false,
                  }
                ]
            },
            {
                name: "1-2",
                checked: false,
            },
        ],
    },
    {
        name: "2",
        checked: false,
       
    },
    {
        name: "3",
        checked: false,
        children: [
            {
                name: "3-1",
                checked: false,
            },
            {
                name: "3-2",
                checked: false,
            },
        ],
    },
]);

// const list = [
//   {
//     height:300,
//     background:'red'
//   },
//   {
//     height:400,
//     background:'pink'
//   },
//   {
//     height:500,
//     background:'black'
//   },
//   {
//     height:200,
//     background:'blue'
//   },
//   {
//     height:600,
//     background:'yellow'
//   },
//   {
//     height:100,
//     background:'green'
//   },
//   {
//     height:300,
//     background:'lightblue'
//   },
//   {
//     height:800,
//     background:'pink'
//   },
//   {
//     height:500,
//     background:'#d921ff'
//   },
//   {
//     height:100,
//     background:'#702480'
//   },
//   {
//     height:50,
//     background:'#5f54348a'
//   },
//   {
//     height:500,
//     background:'#244f54'
//   },
//   {
//     height:200,
//     background:'#244f54'
//   },
//   {
//     height:300,
//     background:'#702480'
//   },
//   {
//     height:100,
//     background:'#244f54'
//   },
//   {
//     height:600,
//     background:'yellow'
//   },
//   {
//     height:100,
//     background:'green'
//   },
//   {
//     height:300,
//     background:'lightblue'
//   },
//   {
//     height:800,
//     background:'pink'
//   },
//   {
//     height:500,
//     background:'#d921ff'
//   },
//   {
//     height:100,
//     background:'#702480'
//   },
//   {
//     height:50,
//     background:'#5f54348a'
//   },
//   {
//     height:500,
//     background:'#244f54'
//   },
//   {
//     height:200,
//     background:'#244f54'
//   },
//   {
//     height:300,
//     background:'#702480'
//   },
//   {
//     height:100,
//     background:'#244f54'
//   },
//   {
//     height:200,
//     background:'#244f54'
//   },
//   {
//     height:300,
//     background:'#702480'
//   },
//   {
//     height:200,
//     background:'#244f54'
//   },
//   {
//     height:300,
//     background:'#702480'
//   },
//   {
//     height:200,
//     background:'#244f54'
//   },
//   {
//     height:300,
//     background:'#702480'
//   },
//   {
//     height:200,
//     background:'#244f54'
//   },
//   {
//     height:300,
//     background:'#702480'
//   },
// ]

</script>



<style scoped>

</style>
