<script setup>
const props = defineProps({
  info: String,
})
</script>
<template>
    <div class="title-smReg rounded-top bg-deep-blue">
        <span class="d-flex align-items-center">
            <i class="bi bi-journal-album"></i>&thinsp;已建立相簿
            <button class="btn btn-white text-deep-blue title-btn" data-bs-toggle="modal" data-bs-target="#createAbModal"><i
                    class="bi bi-plus-circle-fill"></i> 新增相簿</button>
        </span>

    </div>
    <div class="g-col-12 p-2">
        秒數：{{ props.info }}
        <div class="grid gap-3">
            <!-- v-for -->
            <div class="g-col-12 g-col-md-6 g-col-xl-4 border rounded">
                <div class="d-flex justify-content-between flex-wrap p-2">
                    <div class="d-flex gap-2 align-items-start">
                        <span class="bg-gray-400 py-1 px-2 rounded text-nowrap">草稿</span>
                        <span class="fw-bold text-gray-700 m-0 fs-5">起點</span>
                    </div>
                </div>
                <hr class="my-0">
                <div class="p-2 grid">
                    <!-- 數量 -->
                    <div class="g-col-6">
                        <div class="text-gray-700">數量</div>
                        <div class="text-main-color fw-bold">
                            <span class="fs-4">1,000 張</span>
                        </div>
                    </div>
                    <!-- 時間 -->
                    <div class="g-col-6">
                        <div class="text-gray-700">時間</div>
                        <div class="text-main-color fw-bold">
                            <span class="fs-4">7:00~8:00</span>
                        </div>
                    </div>
                </div>
                <div class="d-flex gap-2 justify-content-end p-2">
                    <button class="btn btn-gray text-white py-1 px-2">刪除</button>
                    <button class="btn btn-light-blue text-white py-1 px-2">編輯</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss"></style>