<template>
<div class="p1 flex flex-1 flex-column">

    <input-group >
        <input
            v-model="query"
            placeholder="Search Unsplash! cat, surf, sea, computer, food etc..."
            @keypress.enter="search"
        />

        <button
            @click="search"
            v-html="'Search'"
        />
    </input-group>

    <div class="results" :class="{ mt1: hits.length > 0 || loading || error || noResult }">

        <content-placeholders
            v-for="n in 10"
            v-if="loading"
            :key="n"
            class="img"
        >
            <content-placeholders-img />
            </content-placeholders>

            <h3 v-if="noResult && !loading">No result, try again!</h3>

            <h3 v-if="error && !loading">An error accured, try again!</h3>

            <unsplash-image
                v-for="image in hits"
                :key="image.id"
                :image="image"
                @dragstart.native="onDrag"
                @click.native="create(image.urls.regular, image.description)" 
            />

    </div>
</div>
</template>

<script>
import Unsplash from 'unsplash-js';
import UnsplashImage from '@/components/unsplash/Unsplash.Image.vue';

export default {
    name: 'Unsplash',
    components: {
        UnsplashImage
    },
    props: {
        add: {
            default: () => null
        },
        onDrag: {
            default: () => null
        }
    },
    computed: {
        client() {
            return new Unsplash({
                applicationId: "fbd72df6b4abdef1a30850c2ae0d62bfab6862c2466aad1d0c580effcbc8b67b",
                secret: "7724a40c99280c0ebc9697d231c5c719b78bc27bf6828abb3e107955d2518de2",
                callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
            });
        }
    },
    data() {
        return {
            query: "",
            page: 1,
            loading: false,
            noResult: false,
            error: null,
            hits: []
        }
    },
    methods: {
        create(url, alt) {
            if (!url) {
                return;
            }
            this.add(url, alt);
        },
        search() {
            this.loading = true;
            this.noResult = false;
            this.error = null;
            this.page = 1;
            this.hits = [];

            this.client
                .search
                .photos(this.query)
                .then(Unsplash.toJson)
                .then(res => res.json())
                .then(json => {
                    this.hits = json.results;
                    this.loading = false;
                    this.noResult = this.hits.length == 0;
                });
        }
    }
}
</script>
