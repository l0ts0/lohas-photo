<script setup>

</script>
<template>
    <div class="grid gap-0">
        <div class="g-col-1">
            <button class="carousel-control-prev carousel-control" type="button" data-bs-target="#carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
        </div>
        <div class="g-col-10">
            <!-- 淡入淡出 carousel-fade (拿掉就是普通的輪播)-->
            <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="@pic/bn_01.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="@pic/bn_02.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="@pic/bn_03.png" class="d-block w-100" alt="...">
                    </div>
                </div>

            </div>
        </div>
        <div class="g-col-1">
            <button class="carousel-control-next carousel-control" type="button" data-bs-target="#carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>
<style scoped lang="scss">
.carousel-control {
    position: static !important;
    width: 100%;
    height: 100%;
    background-color: #bce3e2;
    margin: auto;
    opacity: 1 !important;
}
</style>
