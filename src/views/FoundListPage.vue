<template>
    <div class="container">
        <center>
            <div class="clamped">
                <h2 class="font-weight-regular">Restaurant Roulette</h2>

                <p class="my-2">
                    Do you like this one?
                </p>
                <v-card class="mx-auto my-12"
                        max-width="374">

                    <v-img height="250"
                           :src="this.curItem.Image"></v-img>

                    <v-card-title>{{this.curItem.Name}}</v-card-title>

                    <v-card-text>
                        <v-row align="center"
                               class="mx-0">
                            <v-rating :value="this.curItem.Rating"
                                      color="amber"
                                      dense
                                      half-increments
                                      readonly
                                      size="14"></v-rating>

                            <div class="grey--text ms-4">
                                {{this.curItem.Rating}}
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            {{this.curItem.Price}}
                        </div>

                        <div>{{this.curItem.Description}}</div>
                    </v-card-text>


                    <v-row align="center"
                           class="mx-0">
                        <v-card-actions>
                            <v-btn text
                                   color="deep-purple lighten-2"
                                   @click="reveal = true">
                                Yes
                            </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <v-card v-if="reveal"
                                    class="transition-fast-in-fast-out v-card--reveal"
                                    style="height: 100%;">
                                <v-card-text class="pb-0">
                                    <p class="text-h4 text--primary">
                                        {{this.curItem.Name}}
                                    </p>
                                    <p>{{this.curItem.Description}}</p>
                                </v-card-text>
                                <v-card-title>Tonight's availability</v-card-title>

                                <v-card-text>
                                    <v-chip-group v-model="selection"
                                                  active-class="deep-purple accent-4 white--text"
                                                  column>
                                        <v-chip>5:30PM</v-chip>

                                        <v-chip>7:30PM</v-chip>

                                        <v-chip>8:00PM</v-chip>

                                        <v-chip>9:00PM</v-chip>
                                    </v-chip-group>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn color="deep-purple lighten-2"
                                           text
                                           @click="reserve">
                                        Reserve
                                    </v-btn>
                                </v-card-actions>
                                <v-card-actions class="pt-0">
                                    <v-btn text
                                           color="deep-purple lighten-2"
                                           @click="reveal = false">
                                        Back
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-expand-transition>
                        <v-card-actions>
                            <v-btn color="deep-purple lighten-2"
                                   text
                                   @click="selectNo">
                                No
                            </v-btn>
                        </v-card-actions>
                    </v-row>
                </v-card>

                <!--<ItemCard :Name="this.curItem.Name"
                          :Description="this.curItem.Description"
                          :Image="this.curItem.Image"
                          :Price="this.curItem.Price"
                          :Rating="this.curItem.Rating"></ItemCard>-->
                <!--<item-card class="col-12 col-sm-6"
                   v-for="item in items"
                   :key="item.id"
                   buttonText="Claim"
                   :description="item.Price"
                   :image="item.image"
                   :title="item.Name">
        </item-card>-->
                <!--<v-row class="mt-2">

        </v-row>-->
            </div>
        </center>
    </div>
</template>





<script>
import firebase from "firebase/app";

import "firebase/firestore";

//import FlipCard from '../components/FlipCard.vue';
//import ItemCard from "../components/ItemCard.vue";

export default {
   name: "FoundListPage",



  data() {
      return {
          //flipped: false,
          curItem: {},
          //curItem: {Name:"",Image:"",Description:""},
          reveal: false,
    };
  },
  components: {
    //ItemCard,
    //FlipCard,
  },

  methods: {

      selectYes() {
          console.log("Yes clicked");
          //flipped = true;
          this.nextItem();
      },
      selectNo() {

          this.nextItem();
      },

      nextItem() {
          this.curInd += 1;
          if (this.curInd >= this.items.length) {
              console.log("Index is out of bound, setting to 0");
              console.log("index is " + this.curInd + "length of list is..." + this.items.length)
              this.curInd = 0;
          }
          console.log("Index is" + this.curInd)
          this.curItem = this.items[this.curInd];
          console.log(this.curItem.Name);
      },

      

      async fetchItems() {
          const documentRef = firebase.firestore().collection("Restaurants");

          const foundCollection = await documentRef.get();

          const items = foundCollection.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });

          this.items = items;
          this.curInd = 0;
          this.curItem = this.items[this.curInd];

          console.log(foundCollection.docs.map((doc) => doc.data()));
      },
        },

  //computed() {
  //    this.fetchItems();
  //},

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
.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}
</style>