import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useToastStore = defineStore('toastStore', () => {
    // == other stores ==

    // == setter ==
    const toastList = reactive([])
    // == getter ==

    // == action ==
    function pushToast(text, theme) {
        toastList.push({text,theme})
    }
    //清除
    function removeToast(){
        toastList.splice(0)
    }

    // export
    return {toastList,pushToast,removeToast}
})