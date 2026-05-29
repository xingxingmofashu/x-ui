<script lang="ts">
import type { ComponentConfig } from '../types/tv'
import theme from '../../theme/player'

type Player = ComponentConfig<typeof theme>

export interface PlayerProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
  ui?: Player['slots']
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'
import { tv } from 'tailwind-variants'

const props = withDefaults(defineProps<PlayerProps>(), {
  as: 'div'
})

const ui = computed(() => tv(theme)({}))
</script>
<template>
  <component :is="props.as" data-slot="root" :class="ui?.root({ class: [props.ui?.root, props?.class] })">
    <slot />
  </component>
</template>
