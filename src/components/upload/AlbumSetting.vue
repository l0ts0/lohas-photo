<script setup>
import TextField from '@cp/elements/TextField.vue';
</script>
<template>
    <div class="title-smReg rounded-top bg-deep-green">
        <span class="d-flex align-items-center">
            <i class="bi bi-arrow-down-up"></i>&thinsp;發佈設定
        </span>
    </div>
    <div class="g-col-12 grid p-2 gap-2">
        <!-- 活動名稱 -->
        <label class="g-col-12 g-col-sm-2 dataLabel">活動名稱</label>
        <div class="g-col-12 g-col-sm-4 item-text">
            2023 雲林半程馬拉松
        </div>
        <!-- 活動日期 -->
        <label class="g-col-12 g-col-sm-2 dataLabel">活動日期</label>
        <div class="g-col-12 g-col-sm-4 item-text">
            2023-08-11
        </div>
        <!-- 相片狀態 -->
        <label class="g-col-12 g-col-sm-2 dataLabel">相片狀態</label>
        <div class="g-col-12 g-col-sm-10">
            <div>
                共<span>1</span>張照片，已發佈<span>1</span>張照片。
            </div>
            <div>
                未發佈<span>1</span>張照片，處理中<span>1</span>張照片，時間異常<span>1</span>張照片。
            </div>
        </div>
        <hr class="g-col-12 my-0">
        <!-- 地理資訊 -->
        <label class="g-col-12 g-col-sm-2 dataLabel">地理資訊</label>
        <div class="g-col-12 g-col-sm-10 item-text">
            輸入座標(?)
        </div>
        <!-- 拍攝感言 -->
        <label class="g-col-12 g-col-sm-2 dataLabel">拍攝感言</label>
        <div class="g-col-12 g-col-sm-9">
            <TextField :maxlength=50 :place-holder="'輸入一句拍攝感言吧！'" :hint-color-class="'text-light-orange'" :hint-icon="' bi-lightbulb-fill'" :hint="' 拍攝感言會顯示在您的名稱下方，正面、積極的言語，可以提升消費者對你的照片好奇心與觀感，即使是謙虛的用詞，也要表現出努力與用心，才會有人支持。不知道打甚麼，也可以多著墨在相片畫質、構圖巧思等敘述。'" />
        </div>
        <!-- 發佈設定 -->
        <label class="g-col-12 g-col-sm-2 dataLabel">發佈設定</label>
        <div class="g-col-12 g-col-sm-3 item-text">
            
        </div>
    </div>
</template>
<style scoped lang="scss"></style>