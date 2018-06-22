<template>
<div>
    <div class="progress-bar">
        <span
            class="bar"
            :style="{ width: current / total * 100 + '%', backgroundColor: color}"
        />
    </div>

</div>
</template>

<script>
export default {
    name: "PresenterProgressBar",
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
