<script setup>
import { Toast } from 'bootstrap';
import { watch } from 'vue';
import { useToastStore } from '../../stores/toast';
import { storeToRefs } from 'pinia';

//解碼 !important
const toastStore = useToastStore()
const { toastList } = storeToRefs(toastStore)

watch(toastList.value, () => {
    if (toastList.value.length > 0) {
        push(toastList.value[toastList.value.length - 1])
        toastStore.removeToast()
        const toast = document.getElementsByClassName('toast')
        Toast.getOrCreateInstance(toast[toast.length - 1]).show();
        toast[toast.length - 1].addEventListener('hidden.bs.toast', (event) => {
            event.target.remove()
        })
    }
})

function push(item) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(item.theme)
    toast.setAttribute('data-bs-autohide', 'true');
    toast.setAttribute('data-bs-delay', '5000');
    toast.setAttribute('data-bs-animation', 'true');
    toast.setAttribute('role', 'alert');

    let flex = document.createElement('div');
    flex.classList.add('d-flex');

    let body = document.createElement('div');
    body.classList.add('toast-body');
    body.textContent = item.text;

    let close = document.createElement('button');
    close.classList.add('btn-close')
    close.classList.add('btn-close-white')
    close.classList.add('me-2')
    close.classList.add('m-auto')
    close.setAttribute('data-bs-dismiss', 'toast')
    close.setAttribute('aria-label', 'Close')

    flex.appendChild(body)
    flex.appendChild(close)
    toast.appendChild(flex);
    document.getElementsByClassName('toast-container')[0].append(toast);
}
</script>
<template>
    <div class="toast-container">
        <!-- <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="toast-body">
                                Hello, world! This is a toast message.
                            </div>
                        </div> -->
        <!-- <div class="toast" role="alert">
                <div class="d-flex">
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                        aria-label="Close"></button>
                </div>
            </div> -->
    </div>
</template>
<style lang="scss">
.toast-container {
    position: fixed !important;
    right: 1rem;
    top: 5.5rem;
}

.toast {
    border: 0;
    align-items: center;
    margin-bottom: 0.5rem !important;

    &.green {
        color: white;
        background-color: #69b076;
    }

    &.red {
        color: white;
        background-color: #d7003a;
    }

    &.yellow {
        color: white;
        background-color: #f0972d;
    }

    &.blue {
        color: white;
        background-color: #38a1db;
    }
}</style>