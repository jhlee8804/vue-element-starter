<template>
  <div>
    <div>{{ $t('HELLO') }}</div>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    logger.info(`Application is mounted`)
  }
}
</script>

<style lang="scss">
@import "~styles";
</style>
