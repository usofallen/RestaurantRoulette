<template>
  <v-app>
    <v-app-bar app color="#FFFFFF" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Hyperfind Logo"
            contain
            src="@/assets/blind bite logo 1.png"
            transition="scale-transition"
            width="200"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="drawerOpen = !drawerOpen" small fab target="_blank" text>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />

      <github-repository-link></github-repository-link>
    </v-main>

    <v-navigation-drawer v-model="drawerOpen" temporary right app>
      <v-list-item>
        <v-list-item-content>
          <v-img
            alt="Vuetify Logo"
            contain
            src="@/assets/blind bite logo 1.png"
            transition="scale-transition"
            width="200"
          />
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in navigationItems"
          :key="item.title"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import GithubRepositoryLink from "./components/GithubRepositoryLink.vue";

export default {
  name: "App",

  components: {
    GithubRepositoryLink,
  },

  data: () => ({
    drawerOpen: false,
    navigationItems: [
      {
        title: "Home",
        icon: "mdi-home",
        route: "/",
      },
      //{
      //  title: "Dashboard",
      //  icon: "mdi-view-dashboard",
      //  route: "/dashboard",
      //},
      {
        title: "Restaurant Finder",
        icon: "mdi-file-find-outline",
        route: "/found",
      },
    ],
  }),
};
</script>
