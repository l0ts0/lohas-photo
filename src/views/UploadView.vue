<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

import AlbumList from "@cp/upload/AlbumList.vue";
import CheckTime from "@cp/upload/CheckTime.vue";
import TransitionY from '@cp/base/TransitionY.vue';
import AlbumSetting from '@cp/upload/AlbumSetting.vue';
var differ2;
const change = function(e){
    differ2=e;
}

onMounted(() => {
    const modalElement = document.getElementById('correctTimeModal');
    const modal = new Modal(modalElement);
    modal.show();
});

</script>
<template>
    <div class="container-xl py-3">
        <!-- TODO 活動選擇 -->
        <div>
            <!-- (篩選區域) -->
        </div>
        <div class="ActName">2023 雲林半程馬拉松 - 上傳照片</div>
        <!-- TODO 上傳照片流程 -->
        <div>

        </div>
        
        <div class="grid gap-3 gap-md-3.5 mt-2">
            <!-- 校時 -->
            <div class="g-col-12 bg-white rounded shadow-sm">
                <CheckTime @change="change"/>
            </div>
            <!-- 建立相簿 -->
            <div class="g-col-12 bg-white rounded shadow-sm">
                秒數：{{differ2}}
                <AlbumList :info="differ2"/>
            </div>
            <!-- 相簿設定 -->
            <div class="g-col-12 bg-white rounded shadow-sm">
                <AlbumSetting />
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.title-btn {
    margin-left: 10px;
    font-weight: bold;
    padding: 3px 5px;
    font-size: 1.125rem;

    @media (max-width:768px) {
        font-size: 1rem;
    }
}

.up-next {
    @media (max-width:768px) {

        width: 100%;

    }
}
</style>