<template>
<section :class="{ open }">
    <a
        draggable="false"
        @click="toggle"
        @dragstart="drag"
        data-value=""
        v-html="'Video'"
    />

    <div v-show="open" class="accordion-content">
        Youtube
    </div>
</section>
</template>

<script>
export default {
    name: 'ComposeToolbarVideo',
    props: {
        drag: {
            default: () => null
        }
    },
    data() {
        return {
            open: false,
            url: ""
        }
    },
    methods: {
        toggle() {
            this.open = !this.open;
        },
        create() {
            this.add(`![Alt text](${this.url}) `);
            this.url = "";
        }
    }
}
</script>
