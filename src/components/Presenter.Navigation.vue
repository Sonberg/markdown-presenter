<template>
<div v-show="!settings.hidden">
    <button
        v-html="'prev'"
        :disabled="current < 2"
        v-shortkey.once="['arrowleft']"
        @shortkey="goPrev"
        @click="goPrev"
    />

    <button
        v-html="'next'"
        :disabled="current > total - 1"
        v-shortkey.once="['arrowright']"
        @shortkey="goNext"
        @click="goNext"
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
    },
    methods: {
        goNext() {
            if (this.current > this.total - 1) {
                return;
            }

            this.next();
        },
        goPrev() {
            if (this.current < 2) {
                return;   
            }

            this.prev()
        }
    }
};
</script>
