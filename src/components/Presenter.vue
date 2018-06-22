<template>
<div :style="options" class="presenter">
    <transition :name="animation" :key="current"  mode="out-in" appear>
    <presenter-view
        style="margin-bottom: auto; overflow: scroll"
        class="flex flex-1 flex-center justify-center flex-column p1"
        :key="current"
        :page="pages[current - 1]"
    />
    </transition>

    <presenter-navigation
        class="flex justify-center p1"
        :current="current"
        :next="next"
        :prev="prev"
        :total="pages.length"
        :options="options"
    />

     <presenter-progress
        class="flex justify-center pt1"
        :current="current"
        :total="pages.length"
        :options="options"
    />

</div>
</template>

<script>
import PresenterNavigation from '@/components/Presenter.Navigation.vue'
import PresenterProgress from '@/components/Presenter.Progress.vue'
import PresenterView from '@/components/Presenter.View.vue'

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
            pages: [],
            options: {},
            properties: [
                '@background',
                '@color',
                '@text-align',
                '@font-size',
                '@padding',
                '@animation-type',
                '@navigation-hide',
                '@progress-type',
                '@progress-color'
            ]
        }
    },
    methods: {
        next() {
            this.animation = this.options['animation-type'] + "-in";
            this.current = this.current + 1;
        },
        prev() {
            this.animation = this.options['animation-type'] + "-out";
            this.current = this.current - 1;
        }
    },
    created() {

        var lines = this.markdown
            .split("\n");


        var settings = this.properties
            .map(x => lines.filter(y => y.indexOf(x) != -1))
            .filter(x => x)
            .reduce((arr, item) => arr.concat(item), []);

        lines = lines.filter(x => settings.indexOf(x) == -1);

        this.options = settings.reduce((obj, item) => {                
                var splitted = item
                    .substring(1)
                    .replace(/\:/,'&').split('&')
                
                obj[splitted[0]] = splitted[1].trim();
                return obj;
            }, {});

        while (lines.indexOf('---') != -1) {
            this.pages.push(lines.splice(0, lines.indexOf('---') + 1).filter(x => x != '---').join("\n"));
        }

        this.pages.push(lines.join("\n"));

    }
};
</script>
