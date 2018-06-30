<template>

<presenter-progress-bar
    v-if="settings.type == 'bar'"
    :current="current"
    :total="total"
    :color="settings.color"
    class="progress"
/>

<presenter-progress-dott
    v-else-if="settings.type == 'dott'"
    :current="current"
    :total="total"
    :color="settings.color"
        class="progress"

/>

<div
    v-else
    :style="{ color: settings.color, fontSize: '16px', padding: '1em'}"
        class="progress"
>
    {{current}} of {{total}}
    </div>
</template>

<script>
import PresenterProgressDott from '@/components/present/Presenter.Progress.Dott';
import PresenterProgressBar from '@/components/present/Presenter.Progress.Bar';

export default {
    name: "PresenterProgress",
    components: {
        PresenterProgressDott,
        PresenterProgressBar
    },
    props: {
        current: {
            default: 1
        },
        total: {
            default: 1
        },
        options: {
            default: {}
        }
    },
    computed: {
        settings() {
            return {
                type: this.options['progress-type'],
                color: this.options['progress-color']
            }
        }
    }
};
</script>
