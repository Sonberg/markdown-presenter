<template>
  <presenter :markdown="presentation" />
</template>

<script>
import Presenter from '@/components/present/Presenter.vue'

export default {
    name: 'Present',
    components: {
        Presenter
    },
    computed: {
        presentation() {
            return this.$store.getters.presentation;
        }
    }
}
</script>