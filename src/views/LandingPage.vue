<template>


  <div class="container">
    <div class="clamped">

    <div class="row">
      <div class="span4">
        <img class="center-block" src="..\assets\blind bite stacked logo black-04.png" />
      </div>
    </div>

      <h2 class="font-weight-regular">What is Blind Bite?</h2>

      <h3>Blind Bite is an app that encourages adventure and enables decision making in one's search for new cuisine </h3>

      <p class="my-2">
        Want a restaurant recommendation? click
        <em><router-link to="/found" style="text-decoration: inherit">
          here
        </router-link></em>
      </p>
        
      <p>
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
    padding-bottom: 0px;
  }

  h3 {
    padding-top: 10px;
    padding-bottom: 0px;
  }
</style>
