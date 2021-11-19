<template>
  <div class="container">
    <div class="clamped">
      <h2 class="font-weight-regular">Personal Dashboard</h2>

      <p class='my-2'>
        Items I Have Lost over and over:
      </p>

      <v-row class="mt-2">
        <item-card
          class="col-12 col-sm-6"
          v-for="item in items"
          :key="item.id"
          buttonText="Edit"
          :description="item.description"
          :image="item.image"
          :title="item.title"
        >
        </item-card>
      </v-row>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

import "firebase/firestore";

import ItemCard from "../components/ItemCard.vue";

export default {
  name: "LostListPage",

  data() {
    return {
      items: [],
    };
  },
  components: {
    ItemCard,
  },

  methods: {
    async fetchItems() {
      const documentRef = firebase.firestore().collection("lost");

      const lostList = await documentRef.get();

      const items = lostList.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });

      this.items = items;

      console.log(lostList.docs.map((doc) => doc.data()));
    },
  },

  mounted() {
    this.fetchItems();
  },
};
</script>

<style >
.container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.clamped {
  width: 100%;
  max-width: 800px;
}
</style>
