<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <router-link class="navbar-brand" to="/">Restaurant</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/foods">Foods</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <router-link class="nav-link" to="/cart">
                Cart
                <b-icon-bag />
                <span class="badge badge-success ml-2">0</span>
            </router-link>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>