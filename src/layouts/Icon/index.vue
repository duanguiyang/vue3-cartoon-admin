<script  lang="ts">
import { h, resolveDynamicComponent, type VNode } from 'vue'

function icon(props: any) {
  const Component = resolveDynamicComponent(props.type)
  return h(Component as VNode)
}

export default icon
</script>

