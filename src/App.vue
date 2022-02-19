<template>
  <component
    :is="$route.meta.layout || 'div'"
    style="height: 100%;"
  >
    <router-view />
  </component>
</template>

<style lang="scss" scoped>

</style>
