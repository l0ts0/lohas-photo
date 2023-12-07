<script setup>

function afterEnter(element) {
    element.style.height = null;
    element.style.display = null;
}

function enter(element) {
    if (getComputedStyle(element).display == 'inline') element.style.display = 'block';

    const height = getComputedStyle(element).height;

    element.style.width = null;
    element.style.position = null;
    element.style.visibility = null;
    element.style.height = 0;

    getComputedStyle(element).height;
    requestAnimationFrame(() => {
        element.style.height = height;
    });
}

function leave(element) {
    if (getComputedStyle(element).display == 'inline') element.style.display = 'block';
    const height = getComputedStyle(element).height;

    element.style.height = height;

    // 獲取最終渲染在網頁的樣式
    getComputedStyle(element).height;

    requestAnimationFrame(() => {
        element.style.height = 0;
    });
}
</script>

<template>
    <Transition name="y" @enter="enter" @after-enter="afterEnter" @leave="leave">
        <slot />
    </Transition>
</template>

<style scoped lang="scss">
.y-enter-from {
    opacity: 0;
}

.y-enter-to {
    opacity: 1;
}

.y-leave-to {
    opacity: 0;
    height: 0 !important;
}

.y-enter-active,
.y-leave-active {
    transition: 0.2s linear all;
    overflow: hidden;
}
</style>