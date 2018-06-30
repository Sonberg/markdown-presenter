<template>
<div
    class="presenter"
    :style="groupOptions"
    v-touch:swipe.left="next"
    v-touch:swipe.right="prev"
    v-shortkey.once="['esc']"
    @shortkey="close"
>
    <transition
        :name="animation"
        :key="current"
        mode="out-in"
        appear
    >
        <presenter-view
            style=" overflow: scroll"
            class="presenter-view"
            :key="current"
            :page="currentPage"
        />
        </transition>

        <presenter-navigation
            class="flex justify-center p1"
            :current="current"
            :next="next"
            :prev="prev"
            :total="pages.length"
            :options="groupOptions"
        />

        <presenter-progress
            class="flex justify-center pt1"
            :current="current"
            :total="pages.length"
            :options="groupOptions"
        />

        </div>
</template>

<script>
import PresenterNavigation from '@/components/present/Presenter.Navigation.vue'
import PresenterProgress from '@/components/present/Presenter.Progress.vue'
import PresenterView from '@/components/present/Presenter.View.vue'

export default {
    name: "Presenter",
    components: {
        PresenterNavigation,
        PresenterProgress,
        PresenterView
    },
    props: ["markdown"],
    data() {
        return {
            animation: null,
            current: 1,
            properties: [
                '@background',
                '@color',
                '@text-align',
                '@font-size',
                '@padding',
                '@flex',
                '@display',
                '@justify-content',
                '@align-items',
                '@animation-type',
                '@navigation-hide',
                '@progress-type',
                '@progress-color'
            ]
        }
    },
    methods: {
        next() {
            if (this.current > this.pages.length - 1) {
                return;
            }

            this.animation = this.groupOptions['animation-type'] + "-in";
            this.current = this.current + 1;
        },
        prev() {
            if (this.current < 2) {
                return;
            }

            this.animation = this.groupOptions['animation-type'] + "-out";
            this.current = this.current - 1;
        },
        close() {
            this.$router.push({ name: 'compose' });
        },
        removeOptions(lines) {
            if (!lines) {
                return "";
            }
            return lines.split("\n").filter(x => this.optionLines.indexOf(x) == -1).join("\n");
        }
    },
    computed: {
        lines() {
            return this.markdown.split("\n");
        },
        optionLines() {
            var lines = this.pages
                .slice(0, this.current)
                .join("\n")
                .split("\n");

            return this.properties
                .map(x => lines.filter(y => y.indexOf(x) != -1))
                .reduce((arr, item) => arr.concat(item), []);
        },
        groupOptions() {
            return this.optionLines.reduce((obj, item) => {
                var splitted = item
                    .substring(1)
                    .replace(/:/, '&').split('&')

                obj[splitted[0]] = splitted[1].trim();
                return obj;
            }, {});
        },
        pages() {
            var pages = [];
            var lines = this.lines;

            while (lines.indexOf('---') != -1) {
                pages.push(lines.splice(0, lines.indexOf('---') + 1).filter(x => x != '---').join("\n"));
            }

            pages.push(lines.join("\n"));

            return pages;
        },
        currentPage() {
            return this.removeOptions(this.pages[this.current - 1]);
        }
    }
};
</script>

<style scoped>
@import '~github-markdown-css';
</style>
