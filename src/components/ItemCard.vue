<template>
    <div>
        <v-card class="mx-auto my-12"
                max-width="374">
            <template slot="progress">
                <v-progress-linear color="deep-purple"
                                   height="10"
                                   indeterminate></v-progress-linear>
            </template>

            <v-img height="250"
                   :src="Image"></v-img>

            <v-card-title>{{Name}}</v-card-title>

            <v-card-text>
                <v-row align="center"
                       class="mx-0">
                    <v-rating :value="Rating"
                              color="amber"
                              dense
                              half-increments
                              readonly
                              size="14"></v-rating>

                    <div class="grey--text ms-4">
                        {{ Rating }}
                    </div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                    {{Price}}
                </div>

                <div>{{Description}}</div>
            </v-card-text>


            <v-row align="center"
                   class="mx-0">
                <v-card-actions>
                    <v-btn color="deep-purple lighten-2"
                           text
                           @click="selectYes">
                        Yes
                    </v-btn>
                </v-card-actions>
                <v-card-actions>
                    <v-btn color="deep-purple lighten-2"
                           text
                           @click="selectNo">
                        No
                    </v-btn>
                </v-card-actions>
            </v-row>

        </v-card>
    </div>
</template>


<script>
export default {
  props: {
    Name: {
      type: String,
      default: "Restaurant 1",
    },
    Image: {
        type: String,
        default: "",
    },
    Title: {
        type: String,
        default: "",
    },
    Description: {
        type: String,
        default: "",
    },
    Price: {
        type: String,
        default: "",
        },
    Rating: {
        type: String,
        default: "",
    }
  },

  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {},
};
</script>