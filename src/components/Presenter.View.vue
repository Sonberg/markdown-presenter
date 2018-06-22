<template>
    <vue-markdown
        :source="page"
        v-if="page != null"
    />
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
    name: "PresenterView",
    components: {
        VueMarkdown
    },
    props: ["page"]
};
</script>
