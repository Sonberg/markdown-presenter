<template>
<div>
    <input
        v-model="url"
        @keydown.enter.once="create"
        @keyup.enter.once="$event.target.blur()"
    />

    <button
        @click="create"
        v-html="'Add'"
    />
</div>
</template>

<script>
export default {
    name: 'ComposeToolbarImageUrl',
    props: {
        add: {
            default: () => null
        }
    },
    data() {
        return {
            url: ""
        }
    },
    methods: {
        create() {
            if (!this.url) {
                return;
            }

            this.add(this.url);
            this.url = "";
        }
    }
}
</script>
