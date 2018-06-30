<template>
<div>
    <slot/>
</div>
</template>

<script>
export default {
    name: "ButtonGroup"
}
</script>

<style scoped>
div {
    display: flex;
}

input:not([type=submit]) {
    flex: 1;
}
</style>
