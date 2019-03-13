<template>
  <div>
    <loading :loading=loading></loading>
    <v-card>
      <alert :message=message></alert>
      <v-list>
        <template v-for="(payMethod, index) in payMethods">
          <v-list-tile
            :key="payMethod.name"
            avatar
            ripple
            @click="onUpdateLoad(payMethod, index)"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{payMethod.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider
            v-if="index + 1 < payMethods.length"
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
      <v-icon @click="onLoad()">fa-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-form onSubmit="return false;" lazy-validation ref="form">
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs6>
                  <v-text-field label="Name" type="text" v-model="addPayMethodForm.name"
                                v-validate="'required'"
                                :error-messages="errors.collect('name')"
                                data-vv-name="name" required></v-text-field>
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
import PayMethodsAPI from '../api/PayMethods';
import Loading from './Loading';

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
      dialog: false,
      loading: true,
    };
  },
  components: {
    alert: Alert,
    loading: Loading,
  },
  methods: {
    async getPayMethods() {
      let resData = [];

      try {
        resData = await PayMethodsAPI.get();
        this.payMethods = resData.data;
      } catch (e) {
        this.displayError(e);
      }

      this.loading = false;
      return resData;
    },
    initForm() {
      this.addPayMethodForm = Object.assign({}, this.addPayMethodForm, {
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
      this.$validator.validateAll()
      .then((res) => {
        if (res === true) {
          this.dialog = false;
          const payload = {
            name: this.addPayMethodForm.name,
          };

          if (this.addPayMethodForm.index !== undefined) {
            this.updatePayMethod(payload, this.addPayMethodForm.index);
          } else {
            this.addPayMethod(payload);
          }
        }
      });
    },
    async addPayMethod(payload) {
      let res = [];

      try {
          res = await PayMethodsAPI.create(payload);
          const resData = res.data;
          const payMethods = this.payMethods;
          if (resData) {
            payMethods.unshift(resData);
          }
          this.displayError('Pay method was created', 'success');
      } catch (e) {
        this.displayError(e);
      }

      return res;
    },
    async updatePayMethod(payload, index) {
      try {
        const payMethodsData = this.payMethods[index];
        // eslint-disable-next-line
        const res = await PayMethodsAPI.update(payMethodsData._id, payload);
        const resData = res.data;
        // Must have only one item
        this.payMethods[index].name = resData.name;
        this.displayError('Pay method was updated', 'success');
      } catch (e) {
        this.displayError(e);
      }
    },
    onUpdateLoad(payMethod, index) {
      this.addPayMethodForm.name = payMethod.name;
      this.addPayMethodForm.index = index;
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
    this.getPayMethods();
  },
};
</script>
