<template>
<div
    v-if="$route.name == 'compose'"
    class="flex flex-column"
    style="min-height: 100vh; width: 100%"
>
    <textarea
        v-model="presentation"
        class="flex-1"
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
export default {
    name: 'Compose',
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
            properties: [
                '--background',
                '--color',
                '--text-align'
            ]
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
