<template>
  <section class="produtos-container">{{produtos}}</section>
</template>

<script>
export default {
  data() {
    return {
      produtos: null
    };
  },
  methods: {
    getProdutos() {
      fetch({
        url: "@/api/ranek.json",
        dataType: "text"
      })
        .then(response => response.json())
        .then(response => {
          this.produtos = response.produtos;
        });
    }
  },
  created() {
    this.getProdutos();
  }
};
</script>

<style>
</style>
