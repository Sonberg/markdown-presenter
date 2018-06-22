<template>
<div v-show="!settings.hidden">
    <button
        v-html="'prev'"
        :disabled="current < 2"
        v-shortkey.once="['arrowleft']"
        @shortkey="prev"
        @click="prev"
    />

    <button
        v-html="'next'"
        :disabled="current > total - 1"
        v-shortkey.once="['arrowright']"
        @shortkey="next"
        @click="next"
    />
</div>
</template>

<script>
export default {
    name: "PresenterNavigation",
    props: {
        current: {
            default: 1
        },
        total: {
            default: 1
        },
        next: {
            default: () => null
        },
        prev: {
            default: () => null
        },
        options: {
            default: {}
        }
    },
    computed: {
        settings() {
            return {
                hidden: this.options['navigation-hide']
            }
        }
    }
};
</script>
