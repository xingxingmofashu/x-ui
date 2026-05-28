<script lang="ts">
export interface PlayerProps {
  as?: string
}
</script>
<script lang="ts" setup>
const props = withDefaults(defineProps<PlayerProps>(), {
  as: 'div'
})
</script>
<template>
  <component :is="props.as">
    <slot />
  </component>
</template>
