<script setup>
import { watch, ref } from 'vue'
import TransitionY from '@cp/base/TransitionY.vue'



// 取得變數
const props = defineProps({
    // 外觀 class 設定
    class: {
        type: String,
        default: '',
    },
    // 提示文字
    placeHolder: {
        type: String,
        default: ''
    },
    // 是否啟用
    disabled: {
        type: Boolean,
        default: false
    },
    // 變數
    modelValue: {
        type: [String, Number, null],
        default: null,
    },
    // 提示訊息
    hint: {
        type: String,
        default: '',
    },
    // 提示圖示
    hintIcon: {
        type: String,
        default: ''
    },
    // 提示顏色
    hintColorClass: {
        type: String,
        default: '',
    },
    // 格式檢查
    regex: {
        type: RegExp,
        default: null
    },
    // 格式設定
    replace: {
        type: String,
        default: ''
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
    },
    maxlength: {
        type: Number,
        default: null
    }
})

// 建立回傳動作
const emits = defineEmits(['update:modelValue', 'blur', 'keyup', 'enter'])

const value = ref(props.modelValue)

// 取消聚焦時的動作
function blur(event) {
    emits('blur', event)
}

// 鍵盤按下後動作
function keyup(event) {
    emits('keyup', event)
}

function enter(event) {
    emits('enter', event)
}

// 輸入時檢查格式(正規表達式)
function checkRegex(event) {
    if (props.regex) {
        value.value = (event.target.value).toString().replace(props.regex, props.replace)
    } else {
        value.value = event.target.value
    }
    emits('update:modelValue', value.value)
}

watch(() => props.modelValue, () => {
    value.value = props.modelValue
})
</script>

<template>
    <!-- 整個輸入框的外觀 -->
    <div :class="props.class" class="textField">
        <!-- 輸入框的控制項 -->
        <input class="form-control" :class="{ 'error': props.error || error[props.id] }" :placeholder="props.placeHolder"
            :disabled="props.disabled" v-model.trim="value" type="text" @blur="blur" @input="checkRegex" :id="'form-' + props.id"
            @keyup="keyup" :maxlength="props.maxlength" @keyup.enter="enter" autocomplete="off">

        <!-- 若有警告文字，則警告文字以動畫呈現 -->
        <TransitionY>
            <span :class="hintColorClass" v-if="hint.length">
                <i :class="hintColorClass + ' ' + hintIcon" v-if="hintIcon.length"></i>{{ hint }}
            </span>
        </TransitionY>
    </div>
</template>