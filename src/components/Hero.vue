<template>
  <div class="row mt-4">
    <div class="col-md order-md-2">
      <img src="../assets/images/hero.png" width="100%" alt="" />
    </div>
    <div class="col-md order-md-1">
      <div class="d-flex h-100">
        <div class="align-self-center text-center text-md-left">
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
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>