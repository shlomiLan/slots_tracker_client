<template>
  <div>
    <v-card>
      <alert :message=message v-if="message.display"></alert>
      <v-list>
        <template v-for="(category, index) in categories">
          <v-list-tile
            :key="category.name"
            avatar
            ripple
            @click="onUpdateLoad(category, index)"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{category.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider
            v-if="index + 1 < categories.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list>
    </v-card>

    <v-btn
      color="pink"
      slot="activator"
      dark
      fixed
      bottom
      right
      fab round
    >
      <v-icon @click="onLoad()">add</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-form onSubmit="return false;">
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs6>
                  <v-text-field label="Name" type="text" v-model="addCategoryForm.name" required></v-text-field>
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
import Alert from './Alert';
import CategoriesAPI from '../api/Categories';

export default {
  data() {
    return {
      categories: [],
      addCategoryForm: {
      },
      message: {
        text: '',
        type: 'success',
        display: false,
      },
      form: {},
      dialog: false,
    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    async getCategories() {
      let res = [];
      try {
        res = await CategoriesAPI.get();
        this.categories = res.data;
        return res;
      } catch (e) {
        this.displayError(e);
      }

      return res;
    },
    initForm() {
      this.addCategoryForm = Object.assign({}, this.addCategoryForm, {
        name: '',
        index: undefined,
      });
    },
    closeForm() {
      this.dialog = false;
    },
    onLoad() {
      this.initForm();
      this.dialog = true;
    },
    onSubmit() {
      this.dialog = false;
      const payload = {
        name: this.addCategoryForm.name,
      };

      if (this.addCategoryForm.index !== undefined) {
        this.updateCategory(payload, this.addCategoryForm.index);
      } else {
        this.addCategory(payload);
      }
    },
    async addCategory(payload) {
      let res = [];
      try {
        res = await CategoriesAPI.create(payload);
        const resData = res.data;
        const categories = this.categories;
        if (resData) {
          categories.unshift(resData);
        }
        this.displayError('Category was added', 'success');
      } catch (e) {
        this.displayError(e);
      }

      return res;
    },
    async updateCategory(payload, index) {
      let categoryData = [];
      try {
        categoryData = this.categories[index];
        // eslint-disable-next-line
        const res = await CategoriesAPI.update(categoryData._id, payload);
        // Must have only one item
        this.categories[index].name = res.data.name;
        this.displayError('Category was updated', 'success');
      } catch (e) {
        this.displayError(e);
      }

      return categoryData;
    },
    onUpdateLoad(category, index) {
      this.addCategoryForm.name = category.name;
      this.addCategoryForm.index = index;
      this.dialog = true;
    },
    // TODO: Make global function and change name to displayMessage
    displayError(message, type = 'danger') {
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
