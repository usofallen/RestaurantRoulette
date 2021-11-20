<template>


  <div class="container">
    <div class="clamped">

    <div class="row">
      <div class="span4">
        <img class="center-block" src="../assets/photo-1585156569731-4c5b959234f7.jpg" />
      </div>
    </div>

      <h2 class="font-weight-regular">If you don't care, why not eat anywhere?</h2>

      <p class="my-2">
        Get a random recommendation
        <em><router-link to="/found" style="text-decoration: inherit">
          here
        </router-link></em>
      </p>

      <h3>Why Did We Make this Website?</h3>

      <p>Details about our process that Dylan will add...
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",

  components: {},
};
</script>

<style scoped>
  .center-block {
    padding-top: 20px;
    justify-content: center;
    width: 100%;
    size-adjust: 100%;
  }

  .container {
    margin-right: auto;
    margin-left: auto;
  }

  h2 {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  h3 {
    padding-top: 30px;
    padding-bottom: 10px;
  }
</style>
