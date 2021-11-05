<template>
  <div class="row mt-4">
    <div class="col">
      <div class="d-flex h-100">
        <div class="align-self-center">
          <h2 class="align-items-center">
            <strong>Delicious Food Menu</strong> <br />
            in Your Country
          </h2>
          <p>Order Your Favorite Foods Right Now !</p>
          <router-link class="btn btn-lg btn-success" to="/foods">
            ORDER <b-icon-arrow-right/>
          </router-link>
        </div>
      </div>
    </div>
    <div class="col">
      <img src="../assets/images/hero.png" width="100%" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>