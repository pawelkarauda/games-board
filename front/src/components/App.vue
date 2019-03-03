<template>
  <div>
    <navigation-bar />
    <div v-if="loading">
      <centered-loader />
    </div>
    <div v-if="!loading && !error">
      <div class='container mt-4'>
        <div class='card'>
          <div class='card-body'>
            
            <h1>Welcome</h1>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!loading && error">Error</div>
  </div>
</template>

<script>
import NavigationBar from "./layout/NavigationBar";
import { mapActions } from "vuex";
  export default {
    components: {
      NavigationBar
    },
    data(){
      return {
        loading: true,
        error: false
      }
    },
    async mounted() {
      try {
        await this.initialLoad();
        this.loading = false;
      } catch(err) {
        this.loading = false;
        this.error = true;
      }
    },
    methods: {
      ...mapActions(["initialLoad"])
    }
  }
</script>

<style scoped>

</style>