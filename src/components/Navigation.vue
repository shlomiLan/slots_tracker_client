<template>
  <b-navbar toggleable="md" type="light" variant="light" sticky>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/expenses"><font-awesome-icon icon="user-secret" /> expenses</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/categories"><font-awesome-icon icon="user-secret" /> categories</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/pay_methods"><font-awesome-icon icon="user-secret" /> pay methods</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/charts"><font-awesome-icon icon="user-secret" /> charts</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
