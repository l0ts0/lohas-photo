<script setup>
import TextField from '@cp/elements/TextField.vue';
</script>
<template>
    <div class="modal fade" id="createAbModal" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <!-- pop-header -->
                <div class="modal-header add-Title">
                    <p class="modal-title">新增相簿</p>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <!-- pop-body -->
                <div class="modal-body">
                    <div class="row mx-0">
                        <div class="col-12 col-md-3 add-label">相簿名稱</div>
                        <div class="col-12 col-md-9">
                            <TextField />
                        </div>
                    </div>
                </div>
                <!-- pop-footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-gray" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-deep-peech-pink">新增</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.add-Title {
    font-size: 20px;
    background-color: var(--bs-deep-blue);
    color: white;

    button {
        color: white;
        box-shadow: none;
    }
}

.add-label {
    font-size: 18px;
    font-weight: bold;
}
</style>