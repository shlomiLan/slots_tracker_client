<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <loading :loading=loading></loading>
    <v-card>
      <v-layout wrap>
        <v-text-field v-on:input="filter" v-model="searchQuery" type="number"
                      placeholder="Filter expenses by amount"></v-text-field>
        <v-select v-on:change="filter" v-model="filter_category" :items="categories"
                  label="Category" item-text="name" item-value="_id"
                  data-vv-name="filter_category"
        ></v-select>
        <v-select v-on:change="filter" v-model="filter_pay_method" :items="payMethods"
                  label="Pay method" item-text="name" item-value="_id"
                  data-vv-name="filter_pay_method"
        ></v-select>
      </v-layout>
      <alert :message=message></alert>
      <v-list>
        <template v-for="(expense, index) in expenses">
          <v-list-tile
            :key="expense.title"
            avatar
            ripple
            @click="onUpdateLoad(expense, index)"
          >
            <v-list-tile-content>
              <v-list-tile-sub-title class="text--primary">{{expense.category.name}}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{expense.pay_method.name}}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ expense.business_name }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-sub-title align="right">{{ expense.amount | numeral('0,0') }}</v-list-tile-sub-title>
              <v-list-tile-sub-title align="right">{{ expense.timestamp }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider
            v-if="index + 1 < expenses.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list>
    </v-card>
    <v-footer fixed>
      <v-card class="flex" flat tile>
        <v-card-actions class="justify-center">
          &copy; All right reserved to the Bobi's company :-) <br>{{ new Date().getFullYear() }} - {{ appVersion }}
        </v-card-actions>
      </v-card>
    </v-footer>

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
                <v-flex xs12>
                  <v-text-field label="Amount" prefix="₪" type="tel"
                                v-validate="'required'"
                                :error-messages="errors.collect('amount')"
                                data-vv-name="amount"
                                v-model="addExpenseForm.amount" required></v-text-field>
                </v-flex>

                <v-flex xs12>
                  <v-select v-model="addExpenseForm.categories" :items="categories"
                            v-validate="'required'"
                            :error-messages="errors.collect('categories')"
                            label="Category" required item-text="name" item-value="_id"
                            data-vv-name="categories"
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-select v-model="addExpenseForm.payMethods" :items="payMethods"
                            v-validate="'required'"
                            :error-messages="errors.collect('payMethods')"
                            label="Pay method" required item-text="name" item-value="_id"
                            data-vv-name="payMethods"
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-menu
                    v-model="addExpenseForm.timestampInput"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="addExpenseForm.timestamp"
                        label="Date"
                        prepend-icon="far fa-calendar-alt"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="addExpenseForm.timestamp"
                                   @input="addExpenseForm.timestampInput = false"></v-date-picker>
                  </v-menu>
                </v-flex>

                <v-flex xs6>
                  <v-checkbox v-model="addExpenseForm.oneTime" label="One time"></v-checkbox>
                </v-flex>
                <v-flex xs6>
                  <v-text-field v-if="!addExpenseForm.isUpdate" label="Payments" type="number"
                                v-validate="'required'"
                                :error-messages="errors.collect('payments')"
                                data-vv-name="payments"
                                v-model="addExpenseForm.payments" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="closeForm()">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="onSubmit()">Save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from 'moment';
import Alert from '../components/Alert.vue';
import Loading from '../components/Loading.vue';
import ExpensesAPI from '../api/Expenses';
import CategoriesAPI from '../api/Categories';
import PayMethodsAPI from '../api/PayMethods';

const mathjs = require('mathjs');

export default {
  data() {
    return {
      expenses: [],
      payMethods: [],
      categories: [],
      addExpenseForm: {
      },
      message: {
        text: '',
        type: 'success',
        display: false,
      },
      form: {},
      searchQuery: '',
      filter_category: '',
      filter_pay_method: '',
      dialog: false,
      loading: true,
      loadingVar: {
        expenses: true,
        payMethods: true,
        categories: true,
      },
    };
  },
  components: {
    loading: Loading,
    alert: Alert,
  },
  methods: {
    loadingProgress() {
      if (this.loadingVar.expenses === false && this.loadingVar.payMethods === false
        && this.loadingVar.categories === false) {
        this.loading = false;
      }
    },
    async getExpenses() {
      let res = [];
      try {
        res = await ExpensesAPI.get(this.searchQuery, this.filter_category, this.filter_pay_method);
        this.expenses = res.data;
      } catch (e) {
        this.displayError(e);
      }

      this.loadingVar.expenses = false;
      this.loadingProgress();
      return res;
    },
    async getPayMethods() {
      let resData = [];
      try {
        const res = await PayMethodsAPI.get();
        resData = res.data;
        this.payMethods = resData;
      } catch (e) {
        this.displayError(e);
      }

      this.loadingVar.payMethods = false;
      this.loadingProgress();
      return resData;
    },
    async getCategories() {
      let res = [];
      try {
        res = await CategoriesAPI.get();
        this.categories = res.data;
      } catch (e) {
        this.displayError(e);
      }

      this.loadingVar.categories = false;
      this.loadingProgress();
      return res;
    },
    updatePayload(payload) {
      const localPayload = payload;
      localPayload.amount = mathjs.eval(localPayload.amount);
      return localPayload;
    },
    async addExpense(payload, payments) {
      let res = [];
      try {
        res = await ExpensesAPI.createExpense(payments, this.updatePayload(payload));
        const resData = res.data;
        const { expenses } = this;
        resData.forEach((element) => {
          if (element) {
            expenses.unshift(element);
          }
        });

        this.displayError('Expense was added', 'success');
      } catch (e) {
        this.displayError(e);
      }

      return res;
    },
    async updateExpense(payload, index) {
      let expenseData = [];
      try {
        expenseData = this.expenses[index];
        // eslint-disable-next-line
        const res = await ExpensesAPI.updateExpense(expenseData._id,  this.updatePayload(payload));
        const resData = res.data[0];
        // Must have only one item
        this.expenses[index].amount = resData.amount;
        this.expenses[index].description = resData.description;
        this.expenses[index].category = resData.category;
        this.expenses[index].pay_method = resData.pay_method;
        this.expenses[index].timestamp = resData.timestamp;
        this.expenses[index].one_time = resData.one_time;
        this.displayError('Expense was updated', 'success');
      } catch (e) {
        this.displayError(e);
      }

      return expenseData;
    },
    initForm() {
      this.addExpenseForm = Object.assign({}, this.addExpenseForm, {
        amount: undefined,
        description: undefined,
        categories: undefined,
        payMethods: undefined,
        timestamp: moment().format('YYYY-MM-DD'),
        timestampInput: false,
        oneTime: false,
        payments: 1,
        index: undefined,
        isUpdate: false,
      });
    },
    closeForm() {
      this.dialog = false;
    },
    onLoad() {
      this.initForm();
      this.$validator.reset();
      this.dialog = true;
    },
    onSubmit() {
      this.$validator.validateAll()
        .then((res) => {
          if (res === true) {
            this.dialog = false;
            const payload = {
              amount: this.addExpenseForm.amount,
              description: this.addExpenseForm.description,
              category: this.addExpenseForm.categories,
              pay_method: this.addExpenseForm.payMethods,
              timestamp: this.addExpenseForm.timestamp,
              one_time: this.addExpenseForm.oneTime,
            };

            const { payments } = this.addExpenseForm;
            if (this.addExpenseForm.index !== undefined) {
              this.updateExpense(payload, this.addExpenseForm.index);
            } else {
              this.addExpense(payload, payments);
            }
          }
        });
    },
    onUpdateLoad(expense, index) {
      this.addExpenseForm.amount = expense.amount;
      this.addExpenseForm.description = expense.description;
      // TODO: Maybe change in the server return JSON
      // eslint-disable-next-line
      this.addExpenseForm.categories = expense.category._id;
      // eslint-disable-next-line
      this.addExpenseForm.payMethods = expense.pay_method._id;

      this.addExpenseForm.timestamp = expense.timestamp;
      this.addExpenseForm.oneTime = expense.one_time;

      delete this.addExpenseForm.payments;
      this.addExpenseForm.index = index;
      this.addExpenseForm.isUpdate = true;
      this.dialog = true;
    },
    displayError(message, type = 'error') {
      this.message.display = true;
      this.message.type = type;
      this.message.text = message;
    },
    filter() {
      this.getExpenses();
    },
  },
  created() {
    this.initForm();
    this.getExpenses();
    this.getPayMethods();
    this.getCategories();
  },
  computed: {
    appVersion() {
      return `${process.env.PACKAGE_VERSION} - ${process.env.VUE_APP_ENV}`;
    },
  },
};
</script>
