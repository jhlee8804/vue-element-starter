<template>
  <div>
    <h2>Users Page</h2>

    <main>
      <a href="/index.html">Go to /index.html</a>

      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    logger.info(`Users page is mounted`)
  }
}
</script>

<style lang="scss">
@import "~styles";
</style>
