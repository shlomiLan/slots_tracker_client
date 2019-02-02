<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <button class="btn btn-success btn-sm" type="button" @click="onLoad">Add Pay Method</button>
        <br><br>
        <alert :message=message v-if="message.display"></alert>
        <div class="list-group list-group-flush">
          <a v-for="(payMethod, index) in payMethods" :key="index" @click="onUpdateLoad(payMethod, index)"
             href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <div>{{payMethod.name}}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <b-modal ref="addPayMethodModal" id="payMethod-modal" title="Add a new pay method" hide-footer>
      <b-form @submit="onSubmit" class="w-100">
        <b-form-group id="form-description-group" label="Name:" label-for="form-description-input">
          <b-form-input id="form-description-input" type="text" v-model="addPayMethodForm.name" required
                        placeholder="Name"> </b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" :disabled="addPayMethodForm.$invalid">Submit</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import Alert from './Alert';
import PayMethodsAPI from '../api/PayMethods';

export default {
  data() {
    return {
      payMethods: [],
      addPayMethodForm: {
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
    getPayMethods() {
      PayMethodsAPI.get()
        .then((res) => {
          this.payMethods = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
            this.displayError(error);
        });
    },
    initForm() {
      this.addPayMethodForm = Object.assign({}, this.addPayMethodForm, {
        name: '',
        index: undefined,
      });
    },
    onLoad(evt) {
      evt.preventDefault();
      this.initForm();
      this.$refs.addPayMethodModal.show();
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addPayMethodModal.hide();
      const payload = {
        name: this.addPayMethodForm.name,
      };

      if (this.addPayMethodForm.index !== undefined) {
        this.updatePayMethod(payload, this.addPayMethodForm.index);
      } else {
        this.addPayMethod(payload);
      }
    },
    addPayMethod(payload) {
      PayMethodsAPI.create(payload)
        .then((res) => {
          const resData = res.data;
          const payMethods = this.payMethods;
          resData.forEach((element) => {
            if (element) {
              payMethods.unshift(element);
            }
          });

          this.displayError('Pay method was added', 'success');
        })
        .catch((error) => {
          this.displayError(error);
        });
    },
    updatePayMethod(payload, index) {
      const categoryData = this.payMethods[index];
      // eslint-disable-next-line
        CategoriesAPI.update(categoryData._id, payload)
        .then((res) => {
          // Must have only one item
          this.payMethods[index].name = res.data.name;
          this.displayError('Pay method was updated', 'success');
        })
        .catch((error) => {
          this.displayError(error);
        });
    },
    onUpdateLoad(payMethod, index) {
      this.addPayMethodForm.name = payMethod.name;
      this.addPayMethodForm.index = index;
      this.$refs.addPayMethodModal.show();
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
    this.getPayMethods();
  },
};
</script>
