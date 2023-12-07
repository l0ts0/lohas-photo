<template>
    <footer>
        <div>&copy; Copyright 2012-2023 樂活資訊服務股份有限公司版權所有.統一編號: 53977838</div>
    </footer>
</template>
<style scoped lang="scss">
footer {
    grid-row: 2/3;
    border-top: var(--bs-gray-300) 0.0625rem solid;

    div {
        text-align: center;
        padding: 1rem 0;
        color: #666;
        font-size: 0.9rem;

        @media (max-width:1398px) {
            font-size: 0.8rem;
        }
    }
}
</style>