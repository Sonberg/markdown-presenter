<template>
<div
    v-if="$route.name == 'compose'"
    class="flex flex-column"
    style="min-height: 100vh; width: 100%"
>
    <markdown-editor
        v-model="presentation"
        preview-class="markdown-body"
        :configs="options"
        :highlight="true"
    />
    
    <div class="composer p1">
        Number of pages: {{numberOfpages(presentation)}}
        <router-link
            :to="{ name: 'present' }"
            v-html="'Start'"
        />
    </div>
    </div>
    <router-view v-else/>
</template>

<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import hljs from 'highlight.js';

window.hljs = hljs;

export default {
    name: 'Compose',
    components: {
        markdownEditor
    },
    computed: {
        presentation: {
            get() {
                return this.$store.getters.presentation || "";
            },
            set(val) {
                this.$store.commit('setPresentation', val);
            }
        }
    },
    data() {
        return {
            options: {
                toolbar: false,
                autofocus: true,
                spellChecker: false
            }
        }
    },
    methods: {
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
        }
    }
}
</script>

<style>
@import '~simplemde/dist/simplemde.min.css';
@import '~highlight.js/styles/atom-one-dark.css';
</style>
