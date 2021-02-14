<template>
  <div id="container">
    <div v-html="data.content.rendered"></div>
  </div>
</template>

<script>
export default {
  asyncData: async(c) => {
    const data = await fetch(`http://wordpress/wp-json/wp/v2/posts/${c.params.id}`).then(res => res.json());
    return {data: data};
  }
};
</script>

<style scoped>
  #container {
    padding: 24px;
  }
</style>