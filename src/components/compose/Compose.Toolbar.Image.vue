<template>
<section :class="{ open }">

    <a
        draggable="true"
        @click="toggle"
        @dragstart="drag"
        data-value="![Alt text](URL)"
        v-html="'Image'"
    />

    <div v-show="open" class="accordion-content">
        <unsplash :onDrag="drag" :add="create" />
    </div>

</section>
</template>

<script>

import ComposeToolbarImageUrl from '@/components/compose/Compose.Toolbar.Image.Url.vue';
import Unsplash from '@/components/unsplash/Unsplash.vue';

export default {
    name: 'ComposeToolbarImage',
    components: {
        ComposeToolbarImageUrl,
        Unsplash
    },
    props: {
        drag: {
            default: () => null
        },
        add: {
            default: () => null
        }
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggle() {
            this.open = !this.open;
        },
        create(url, alt) {
            if (!url) {
                return;
            }

            if (!alt) {
                alt = "Alt text";
            }

            this.add(`![${alt}](${url}) `);
        }
    }
}
</script>
