<template>
  <div id="app">
    <main>
      <v-content>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-content>
    </main>

  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

