<template>
<div class="progress-dott">
    <span
        class="dott"
        :class="{ active: n <= current, current: n == current }"
        :style="{ borderColor: color, backgroundColor: n <= current ? color : 'transparent' }"
        :key="n"
        v-for="n in total"
    ></span>
</div>
</template>

<script>
export default {
    name: "PresenterProgressDott",
    props: {
        current: {
            default: 1
        },
        total: {
            default: 1
        },
        color: {
            default: 'black'
        }
    }
};
</script>
