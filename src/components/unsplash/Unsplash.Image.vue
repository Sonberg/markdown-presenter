<template>
<div
    class="img"
    v-if="image"
    :draggable="true"
    :style="{ backgroundImage: `url(${image.urls.regular})`, backgroundColor: image.color}"
    :data-value="mdValue(image.urls.regular, image.description)"
/>
</template>

<script>

import { Image } from '@/managers/markdown';

export default {
    name: 'UnsplashImage',
    props: ['image'],
    methods: {
        mdValue(url, desc) {
            return Image(url, desc);
        }
    }
}
</script>
