<script setup>
import dayjs from 'dayjs';
import { ref, watch } from 'vue';
import TransitionY from '@cp/base/TransitionY.vue';

// import { storeToRefs } from 'pinia'
// import { useErrorStore } from '@st/error'

// const errorStore = useErrorStore()
// const { error } = storeToRefs(errorStore)

// 取得變數
const props = defineProps({
    // 外觀 class 設定
    class: {
        type: String,
        default: '',
    },
    placeHolder: { // 提示文字
        type: String,
        default: ''
    },
    disabled: { // 是否啟用
        type: Boolean,
        default: false
    },
    modelValue: { // 變數
        type: [String, Number, null],
        default: null,
    },
    hint: { // 提示訊息
        type: String,
        default: '',
    },
    hintIcon: { // 提示圖示
        type: String,
        default: ''
    },
    hintColorClass: { // 提示顏色
        type: String,
        default: '',
    },
    min: {  // 日期最小值
        type: String,
        default: null,
    },
    max: {  // 日期最大值
        type: String,
        default: null,
    },
    // 輸入框 Id
    id: {
        type: String,
        default: ''
    },
    // 錯誤
    error: {
        type: Boolean,
        default: false
    }
})

// 建立回傳動作
let emits = defineEmits(['update:modelValue', 'blur'])

let value = ref(props.modelValue)

function change() {
    // 如果時間格是合法
    if (dayjs(value.value).isValid()) {
        // 若日期小於 1900 時，改為內建方式，因為 dayjs 最小僅支援 1900-01-01
        // 註：當手動輸入 2000 年時，因為剛開始輸入 2 也為小於 1900 年，所以要改成內建方式判斷
        if (parseInt(value.value.split('-')[0]) < 1900) {
            let date = new Date(value.value)
            date = date.getFullYear().toString().padStart(4, '0') + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + (date.getDate()).toString().padStart(2, '0') + 'T' + (date.getHours()).toString().padStart(2, '0') + ':' + (date.getMinutes()).toString().padStart(2, '0') + ':' + (date.getSeconds()).toString().padStart(2, '0')
            emits('update:modelValue', date)
        } else emits('update:modelValue', dayjs(value.value).format("YYYY-MM-DDTHH:mm:ss"))
    }
    else emits('update:modelValue', '')
}

watch(props, () => {
    value.value = props.modelValue
})
</script>
<template>
    <!-- 整個輸入框的外觀 -->
    <div :class="props.class" class="textField">
        <!-- 輸入框的控制項 -->
        <input class="form-control" :class="{ 'error': props.error || error[props.id] }" :placeholder="props.placeHolder"
            step="1" :disabled="props.disabled" type="datetime-local" :min="min" :max="max" :id="'form-' + props.id"
            @change="change" v-model="value">

        <!-- 若有警告文字，則警告文字以動畫呈現 -->
        <TransitionY>
            <span :class="hintColorClass" v-if="hint.length">
                <i :class="hintColorClass + ' ' + hintIcon" v-if="hintIcon.length"></i>
                {{ hint }}
            </span>
        </TransitionY>
    </div>
</template>