<script setup>
import TextField from '@cp/elements/TextField.vue';
</script>
<template>
    <div class="modal fade" id="correctTimeModal" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <!-- pop-header -->
                <div class="modal-header add-Title">
                    <p class="modal-title">相機校時驗證教學</p>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <!-- pop-body -->
                <div class="modal-body">
                    <div class="ct-label">【1】拍下QRcode以及14碼數字</div>
                    <img class="w-100 rounded my-1" src="@pic/ct_01.png" alt="">
                    <div class="ct-label">【2】上傳照片並輸入"照片中"的數字<br>
                    </div>
                    <ul class="mb-0">
                        <li>點擊【選擇檔案】上傳驗證照片</li>
                        <li>輸入照片中的號碼(由左至右，由上至下)</li>
                        <li>Ex：下圖輸入：20230821112423</li>
                    </ul>
                    <img class="w-100 rounded my-1" src="@pic/ct_02.png" alt="">
                </div>
                <!-- pop-footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-gray" data-bs-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.add-Title {
    font-size: 20px;
    background-color: var(--bs-light-orange);
    color: white;

    button {
        color: white;
        box-shadow: none;
    }
}

.ct-label {
    font-size: 18px;
    font-weight: bold;
}
</style>