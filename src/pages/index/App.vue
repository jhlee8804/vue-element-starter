<template>
  <div>
    <h2>Index Page</h2>

    <main>
      <a href="/users.html">Go to /users.html</a>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    logger.info(`Index page is mounted`)
  }
}
</script>

<style lang="scss">
@import "~styles";
</style>
