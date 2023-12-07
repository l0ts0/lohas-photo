<script setup>

</script>
<template>
    <div class="search-box mx-md-auto">
        <div class="area">
            <input type="text" placeholder="號碼布搜尋：請輸入號碼布" class="search-box-input form-control">
            <!-- @keyup.enter="searchServiceCode" -->
            <button class="search-box-btn btn btn-main-color text-white"><i class="bi bi-search"></i></button>
            <!-- @click="searchServiceCode" -->
        </div>

        <!-- 樂活查詢頁面連結(如果是樂活自己的賽事) -->
        <div class="d-flex justify-content-end pt-1 fw-bold">
            <span>忘記號碼布？</span>
            <a class="ms-1 text-light-orange" href="https://timing.lohasnet.tw/score/1" target="_blank">點擊查詢</a>
        </div>
    </div>
</template>
<style scoped lang="scss">
.search-box {
    position: relative;
    max-width: 45rem;

    .search-box-input {
        height: 2.375rem;
        border-color: #e7e6e6;
        background-color: #D4D4D4;
        padding-right: 2.375rem;

        &:focus {
            border-color: #e7e6e6;
        }
    }

    .search-box-btn {
        position: absolute;
        width: 1.875rem;
        height: 1.875rem;
        line-height: 1.875rem;
        text-align: center;
        padding: 0;
        right: 0.75rem;
        top:0.75rem;
        font-size: 0.875rem;
    }

}
</style>