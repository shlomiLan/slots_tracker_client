<template>
  <div>
    <loading :loading=loading></loading>
    <v-card>
      <v-text-field v-model="searchQuery" placeholder="Filter expenses"></v-text-field>
      <alert :message=message></alert>
      <v-list two-line>
        <template v-for="(expense, index) in filterExpenses">
          <v-list-tile
            :key="expense.title"
            avatar
            ripple
            @click="onUpdateLoad(expense, index)"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ expense.description }}</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{expense.category.name}}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{expense.pay_method.name}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-list-tile-action-text>{{ expense.amount }}</v-list-tile-action-text>
              <v-list-tile-action-text>{{ expense.timestamp }}</v-list-tile-action-text>
            </v-list-tile-action>

          </v-list-tile>
          <v-divider
            v-if="index + 1 < filterExpenses.length"
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
                  <v-text-field label="Amount" type="number"
                                v-validate="'required'"
                                :error-messages="errors.collect('amount')"
                                data-vv-name="amount"
                                v-model="addExpenseForm.amount" required></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-combobox v-model="addExpenseForm.description" required
                              v-validate="'required'"
                              :error-messages="errors.collect('description')"
                              data-vv-name="description"
                              :items="descriptions" label="Description"
                  ></v-combobox>
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
                  <v-select v-model="addExpenseForm.categories" :items="categories"
                            v-validate="'required'"
                            :error-messages="errors.collect('categories')"
                            label="Category" required item-text="name" item-value="_id"
                            data-vv-name="categories"
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
  import Alert from './Alert';
  import Loading from './Loading';
  import ExpensesAPI from '../api/Expenses';
  import CategoriesAPI from '../api/Categories';
  import PayMethodsAPI from '../api/PayMethods';
  import DescriptionsAPI from '../api/Descriptions';

  export default {
    data() {
      return {
        expenses: [],
        payMethods: [],
        categories: [],
        descriptions: [],
        addExpenseForm: {
        },
        message: {
          text: '',
          type: 'success',
          display: false,
        },
        form: {},
        searchQuery: '',
        dialog: false,
        loading: true,
        loadingVar: {
          expenses: true,
          payMethods: true,
          categories: true,
          descriptions: true,
        },
      };
    },
    components: {
      loading: Loading,
      alert: Alert,
    },
    methods: {
      loadingProgress() {
        if (this.loadingVar.expenses === false && this.loadingVar.payMethods === false &&
          this.loadingVar.categories === false && this.loadingVar.descriptions === false) {
          this.loading = false;
        }
      },
      async getExpenses() {
        let res = [];
        try {
          res = await ExpensesAPI.get();
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
      async getDescriptions() {
        let res = [];
        try {
          res = await DescriptionsAPI.get();
          this.descriptions = res.data;
        } catch (e) {
          this.displayError(e);
        }

        this.loadingVar.descriptions = false;
        this.loadingProgress();
        return res;
      },
      async addExpense(payload, payments) {
        let res = [];
        try {
          res = await ExpensesAPI.createExpense(payments, payload);
          const resData = res.data;
          const expenses = this.expenses;
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
          const res = await ExpensesAPI.updateExpense(expenseData._id, payload);
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
          oneTime: [],
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
            let oneTime = false;
            if (this.addExpenseForm.oneTime[0]) oneTime = true;
            const payload = {
              amount: this.addExpenseForm.amount,
              description: this.addExpenseForm.description,
              category: this.addExpenseForm.categories,
              pay_method: this.addExpenseForm.payMethods,
              timestamp: this.addExpenseForm.timestamp,
              one_time: oneTime,
            };

            const payments = this.addExpenseForm.payments;
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
    },
    created() {
      this.initForm();
      this.getExpenses();
      this.getPayMethods();
      this.getCategories();
      this.getDescriptions();
    },
    computed: {
      filterExpenses() {
        return this.expenses.filter(expense => expense.description.match(this.searchQuery));
      },
    },
  };
</script>
