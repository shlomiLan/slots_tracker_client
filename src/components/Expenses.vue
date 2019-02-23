<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <input type="text" v-model="searchQuery" placeholder="Filter expenses" />
        <button class="btn btn-success btn-sm" type="button" @click="onLoad">Add expense</button>
        <br><br>
        <alert :message=message v-if="message.display"></alert>
        <div class="list-group list-group-flush">
          <a v-for="(expense, index) in filterExpenses" :key="index" @click="onUpdateLoad(expense, index)"
             href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <div class="mb-1">
                <div>{{expense.description}}</div>
                <div>{{expense.category.name}}</div>
                <div>{{expense.pay_method.name}}</div>
              </div>
              <div class="mb-1">
                <div>{{expense.amount}}</div>
                <div>{{expense.timestamp}}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <b-modal ref="addExpenseModal" id="expense-modal" title="Add a new expense" hide-footer>
      <b-form @submit="onSubmit" class="w-100">
        <b-form-group id="form-amount-group" label="Amount:" label-for="form-amount-input">
          <b-form-input id="form-amount-input" type="number" v-model="addExpenseForm.amount" required
                        placeholder="Amount"> </b-form-input>
        </b-form-group>
        <b-form-group id="form-description-group" label="Description:" label-for="form-description-input">
          <b-form-input id="form-description-input" type="text" v-model="addExpenseForm.description" required
                        placeholder="Description"> </b-form-input>
        </b-form-group>
        <b-form-group id="form-pay-method-group" label="Pay method:" label-for="form-pay-method-input">
            <b-form-select v-model="addExpenseForm.payMethods" :options="payMethods" text-field="name"
                           value-field="_id" class="mb-3" required>
            </b-form-select>
        </b-form-group>
        <b-form-group id="form-category-group" label="Category:" label-for="form-category-input">
            <b-form-select v-model="addExpenseForm.categories" :options="categories" text-field="name"
                           value-field="_id" class="mb-3" required>
            </b-form-select>
        </b-form-group>
        <b-form-group id="form-timestamp-group" label="Date:" label-for="form-timestamp-input">
          <b-form-input id="form-timestamp-input" type="date" v-model="addExpenseForm.timestamp" required
                        placeholder="Date"> </b-form-input>
        </b-form-group>
        <b-form-group id="form-one-time-group">
          <b-form-checkbox-group v-model="addExpenseForm.oneTime" id="form-checks">
            <b-form-checkbox value="true">One time?</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-form-group v-if="addExpenseForm.payments" id="form-payments-group" label="Payments:"
                      label-for="form-payments-input">
          <b-form-input id="form-payments-input" type="number" v-model="addExpenseForm.payments" required
                        placeholder="Payments"> </b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" :disabled="addExpenseForm.$invalid">Submit</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import moment from 'moment';
import Alert from './Alert';
import ExpensesAPI from '../api/Expenses';
import CategoriesAPI from '../api/Categories';
import PayMethodsAPI from '../api/PayMethods';

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
      searchQuery: ''
    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    async getExpenses() {
      try {
        const res = await ExpensesAPI.get();
        this.expenses = res.data;
      } catch (e) {
        this.displayError(e);
      }
    },
    async getPayMethods() {
      try {
        const res = await PayMethodsAPI.get();
        const resData = res.data;
        this.payMethods = resData;
        return resData;
      } catch (e) {
        this.displayError(e);
      }
    },
    async getCategories() {
      try {
        const res = await CategoriesAPI.get();
        this.categories = res.data;
        return res;
      } catch (e) {
        this.displayError(e);
      }
    },
    async addExpense(payload, payments) {
      try {
        const res = await ExpensesAPI.createExpense(payments, payload);
        const resData = res.data;
        const expenses = this.expenses;
        resData.forEach((element) => {
          if (element) {
            expenses.unshift(element);
          }
        });

        this.displayError('Expense was added', 'success');
      }catch (e){
        this.displayError(e);
      }
    },
    async updateExpense(payload, index) {
      try {
        const expenseData = this.expenses[index];
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
      } catch (e){
        this.displayError(error);
      }
    },
    initForm() {
      this.addExpenseForm = Object.assign({}, this.addExpenseForm, {
        amount: '',
        description: '',
        categories: '',
        payMethods: '',
        timestamp: moment().format('YYYY-MM-DD'),
        oneTime: [],
        payments: 1,
        index: undefined,
      });
    },
    onLoad(evt) {
      evt.preventDefault();
      this.initForm();
      this.$refs.addExpenseModal.show();
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addExpenseModal.hide();
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
      this.$refs.addExpenseModal.show();
    },
    displayError(message, type = 'danger') {
      // TODO: Fix not displaying second time.
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
  },
  computed: {
    filterExpenses: function () {
      return this.expenses.filter((expense) => {
        return expense.description.match(this.searchQuery);
      })
    }
  }
};
</script>
