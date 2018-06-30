<template>
<div class="accordion">

    <compose-toolbar-image :drag="drag" :add="add" class="" />
    <compose-toolbar-video :drag="drag" :add="add" class="" />

    <section class="">
        <a
            draggable="true"
            @click="add($event.target.dataset.value)"
            @dragstart="drag"
            data-value="---"
            v-html="'Page'"
        />
    </section>


</div>
</template>

<!--
 <router-link
        draggable="false"
        :to="{ name: 'present' }"
        v-html="'Start'"
    />
 -->

<script>
import ComposeToolbarImage from '@/components/compose/Compose.Toolbar.Image.vue';
import ComposeToolbarVideo from '@/components/compose/Compose.Toolbar.Video.vue';
export default {
    name: 'ComposeToolbar',
    components: {
        ComposeToolbarImage,
        ComposeToolbarVideo
    },
    computed: {
        editorRef() {
            return this.$store.getters.editor || {};
        },
        editor() {
            return this.editorRef.editor;
        },
        currentRow() {
            return this.editor.getSelectionRange().end.row;
        }
    },
    methods: {
        add(text) {
            if (!this.editor || !text) {
                return;
            }
            this.editor.scrollToLine(this.currentRow, true, true,  () => null);
            this.editor.insertSnippet("${1:" + text + "}");
            this.editor.focus();
        },
        drag(e) {
            var dataList = e.dataTransfer;
            dataList.setData("text", e.target.dataset.value);
        }
    }
}
</script>
