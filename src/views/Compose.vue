<template lang="html">
  <div v-if="$route.name == 'compose'" class="flex flex-column flex-1">
      <app-header/>
      <div class="composer flex-1">
        <compose-toolbar/>
        <compose-editor v-model="presentation" />
      </div>
  </div>
  <router-view v-else/>
</template>

<script>
import AppHeader from '@/components/App.Header.vue';
import ComposeToolbar from '@/components/compose/Compose.Toolbar.vue';
import ComposeEditor from '@/components/compose/Compose.Editor.vue';

export default {
    name: 'Compose',
    components: {
        ComposeEditor,
        ComposeToolbar,
        AppHeader
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
