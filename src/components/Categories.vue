<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <button class="btn btn-success btn-sm" type="button" @click="onLoad">Add Category</button>
        <br><br>
        <alert :message=message v-if="message.display"></alert>
        <div class="list-group list-group-flush">
          <a v-for="(category, index) in categories" :key="index" @click="onUpdateLoad(category, index)"
             href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <div>{{category.name}}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <b-modal ref="addCategoryModal" id="category-modal" title="Add a new category" hide-footer>
      <b-form @submit="onSubmit" class="w-100">
        <b-form-group id="form-description-group" label="Name:" label-for="form-description-input">
          <b-form-input id="form-description-input" type="text" v-model="addCategoryForm.name" required
                        placeholder="Name"> </b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" :disabled="addCategoryForm.$invalid">Submit</b-button>
      </b-form>
    </b-modal>
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
    onLoad(evt) {
      evt.preventDefault();
      this.initForm();
      this.$refs.addCategoryModal.show();
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addCategoryModal.hide();
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
      this.$refs.addCategoryModal.show();
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
