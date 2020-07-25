<template>
  <div>
    <loading :loading=loading></loading>
    <v-card>
      <alert :message=message></alert>
      <v-list>
        <template v-for="(category, index) in auto_added_categories">
          <v-list-tile
            :key="category.name"
            avatar
            ripple
            @click="onCovertLoad(category, index)"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{category.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider
            v-if="index + 1 < auto_added_categories.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list>
    </v-card>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-form onSubmit="return false;" lazy-validation ref="form">
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs6>
                  <v-text-field label="Name" type="text" v-model="convertCategoryForm.name"
                                v-validate="'required'"
                                :error-messages="errors.collect('name')"
                                disabled
                                data-vv-name="name" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-select v-model="convertCategoryForm.user_added_categories" :items="user_added_categories"
                            v-validate="'required'"
                            :error-messages="errors.collect('user_added_categories')"
                            label="Category" required item-text="name" item-value="_id"
                            data-vv-name="user_added_categories"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="closeForm()">Close</v-btn>
            <v-btn color="blue darken-1" flat type="submit" @click="onSubmit()">Save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CategoriesAPI from '../api/Categories';
import Alert from '../components/Alert.vue';
import Loading from '../components/Loading.vue';
import store from '../store';


export default {
  data() {
    return {
      user_added_categories: [],
      auto_added_categories: [],
      convertCategoryForm: {
      },
      merge_message: undefined,
      merge_counter: store.state.merge_counter,
      message: {
        text: '',
        type: 'success',
        display: false,
      },
      form: {},
      dialog: false,
      loading: true,
    };
  },
  components: {
    alert: Alert,
    loading: Loading,
  },
  methods: {
    async getCategories() {
      let res_auto_added = [];
      let res_user_added = [];
      try {
        res_auto_added = await CategoriesAPI.get(false);
        res_user_added = await CategoriesAPI.get(true);

        this.user_added_categories = res_user_added.data;
        this.auto_added_categories = res_auto_added.data;

      } catch (e) {
        this.displayError(e);
      }

      this.loading = false;
    },
    initForm() {
      this.convertCategoryForm = Object.assign({}, this.convertCategoryForm, {
        name: '',
        index: undefined,
        user_added_categories: undefined
      });
    },
    closeForm() {
      this.dialog = false;
    },
    onSubmit() {
      this.$validator.validateAll()
        .then((res) => {
          if (res === true) {
            this.dialog = false;
            const payload = {
              name: this.convertCategoryForm.name,
              user_added_categories: this.convertCategoryForm.user_added_categories,
              action: 'merge_categories'
            };

            this.convertCategory(payload, this.convertCategoryForm.index);
          }
        });
    },
    async convertCategory(payload, index) {
      let categoryData = [];
      try {
        categoryData = this.auto_added_categories[index];
        await CategoriesAPI.update(categoryData._id, payload);
        this.auto_added_categories.splice(index, 1);
        this.merge_counter++;
        if (this.merge_counter === 1) {
          this.merge_message = 'You merged ' + this.merge_counter + ' categories great job :-)';
        }else if (this.merge_counter === 2){
          this.merge_message = 'WOW, excellent job, ' + this.merge_counter + ' categories are now merged';
        }else {
          this.merge_message = 'You are on a roll, keeping going'
        }
        this.displayError(this.merge_message, 'success');
      } catch (e) {
        this.displayError(e);
      }

      return categoryData;
    },
    onCovertLoad(category, index) {
      this.initForm();
      this.$validator.reset();
      this.convertCategoryForm.name = category.name;
      this.convertCategoryForm.index = index;
      this.dialog = true;
    },
    displayError(message, type = 'error') {
      // TODO: Fix not displaying second time.
      this.message.display = true;
      this.message.type = type;
      this.message.text = message;
    },
  },
  created() {
    this.initForm();
    this.getCategories();
  },
};
</script>
