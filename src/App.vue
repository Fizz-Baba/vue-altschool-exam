<template>
  <div class="wrapper">
    <nav class="navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "App",
};
</script>

<style scoped>
.navigation {
  display: flex;
  background-color: #333136;
  justify-content: right;
  padding: 15px;
  margin-top: -7px;
  width: 100%;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
