<template>
    <!-- <div v-if="show" id="waterfall-container">
        <div v-for="item in imgList" :key="item" class="waterfall-item" :style="">
            <img :src="item.src"  />
        </div>
    </div> -->
    <div v-if="show" id="waterfall-container">
        <div v-for="item in imgList" :key="item.id" class="waterfall-item test" :style="{ gridRow: item.gridRow }">
            <img :src="item.src" class="rounded"/>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            imgList: [...Array(70).keys()].map((e) => {
                return {
                    id: e + 1,
                    src: new URL("../../assets/resource/test/t(" + (e + 1) + ").jpg", import.meta.url).href,
                    height: 0,
                    gridRow: "",
                };
            }),
            show: false,
        };
    },
    created() {
        this.computeGridRow();
    },
    methods: {
        computeGridRow() {
            let count = this.imgList.length;
            this.imgList.forEach((img) => {
                let image = new Image();
                image.src = img.src;
                image.onload = () => {
                    img.gridRow =
                        "auto / span " + Math.round((image.height * 200) / image.width);
                    count -= 1;
                    if (!count) {
                        this.show = true;
                    }
                };
            });
        },
    },
};
// import { onMounted } from 'vue';

// const imgList = [...Array(70).keys()].map((e) => ({
//     id: e + 1,
//     src: new URL(`../../assets/resource/test/t(${e + 1}).jpg`, import.meta.url).href,
//     height: 0,
//     gridRow: "",
// }));

// const show = false;

// const computeGridStyle = (item) => {
//     const image = new Image();
//     image.src = item.src;

//     const gridRowValue = `auto / span ${Math.round((image.height * 200) / image.width)}`;
//     item.gridRow = gridRowValue;

//     return { gridRow: gridRowValue };
// };

// onMounted(() => {
//     imgList.forEach((item) => {
//         const image = new Image();
//         image.src = item.src;
//         image.onload = () => {
//             computeGridStyle(item);
//             if (imgList.every((img) => img.gridRow)) {
//                 show.value = true;
//             }
//         };
//     });
// });
</script>
  
<style lang="scss">
$root-font-size: 10px;
$grid-gap: 1rem;

// 假設1920px螢幕打算顯示6列
$column-count-1920: 6;
// 這裡採用1900px是因為要排掉滾動條寬度，通常是17px，這裡多排除一些，所以1920px減掉20px
$minmax-1920: calc((calc(1900px / $root-font-size) * 1rem - ($grid-gap * ($column-count-1920 + 1))) / $column-count-1920);
// 假設手機螢幕打算顯示2列
// $column-count-480: 2;
// // 480的意思是目前世界上最大的手機解析度寬度是低於480px，
// // 所以@media screen and (max-device-width: 480px)使用480px。
// // 這裡採用360px是保證360px的老式手機還是能看到雙列瀑布流
// $minmax-480: calc((calc(360px / $root-font-size) * 1rem - ($grid-gap * ($column-count-480 + 1))) / $column-count-480) ;

#waterfall-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($minmax-1920, 1fr));
    column-gap: $grid-gap;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: calc((1920px / $root-font-size) * 1rem);

    .waterfall-item {
        box-sizing: border-box;
        padding-bottom: $grid-gap;
        width: 100%;
        height: 100%;
        transition: all 0.3s;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

// @media (max-width: 480px) {
//     #waterfall-container {
//         grid-template-columns: repeat(auto-fill, minmax($minmax-480, 1fr));
//     }
// }
</style>