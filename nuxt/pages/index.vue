<template>
  <div id="container">
    <router-link v-for="d in data" :key="d.id" :to="`/p/${d.id}`" class="link">{{ d.title.rendered }}</router-link>
  </div>
</template>

<script>
export default {
  asyncData: async() => {
    const data = await fetch("http://wordpress/wp-json/wp/v2/posts").then(json => json.json());
    return {data: data};
  }
};
</script>

<style scoped>
  #container {
    display: flex;
    flex-direction: column;
    padding: 24px;
  }
</style>