<template lang="html">
<editor
    v-model="model"
    @init="editorInit"
    :options="options"
    ref="editorRef"
    lang="markdown"
    theme="dillinger"
    id="editor"
    class="flex-1 flex"
/>
</template>

<script>
import Editor from 'vue2-ace-editor';

export default {
    name: 'ComposeEditor',
    components: {
        Editor
    },
    props: {
        value: {
            required: true
        }
    },
    computed: {
        model: {
            get(){ return this.value },
            set(newVal) { this.$emit('input', newVal) }
        }
    },
    watch: {
        value(newVal) {
            this.$emit('input', newVal);
        }
    },
    data() {
        return {
            options: {
                showPrintMargin: false,
                wrap: true
            }
        }
    },
    methods: {
        editorInit() {
            require('brace/mode/markdown')
            require('../../themes/theme-dillinger.js')
            require('brace/ext/language_tools')
        },
        numberOfpages(val) {

            if (!val.length) {
                return 0;
            }

            var pages = [];
            var lines = val
                .split("\n");

            while (lines.indexOf('---') != -1) {
                pages.push(lines.splice(0, lines.indexOf('---') + 1).splice(0, -1).join("\n"));
            }
            pages.push(lines.join("\n"));

            return pages.length;
        },
        prevAll(element) {
            var result = 0;

            while (element = element.previousElementSibling)
                result++;
            return result;
        }

    },
    mounted() {
        if (this.$refs.editorRef) {
            this.$store.commit('setEditor', this.$refs.editorRef);
        }
    }
}
</script>
