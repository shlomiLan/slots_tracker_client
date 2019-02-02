<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <button class="btn btn-success btn-sm" type="button" @click="onLoad">Add expense</button>
        <br><br>
        <alert :message=message v-if="message.display"></alert>
        <div class="list-group list-group-flush">
          <a v-for="(expense, index) in expenses" :key="index" @click="onUpdateLoad(expense, index)"
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
    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    getExpenses() {
      ExpensesAPI.get()
        .then((res) => {
          this.expenses = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
            this.displayError(error);
        });
    },
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
    getCategories() {
      CategoriesAPI.get()
        .then((res) => {
          this.categories = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
            this.displayError(error);
        });
    },
    addExpense(payload, payments) {
      ExpensesAPI.createExpense(payments, payload)
        .then((res) => {
          const resData = res.data;
          const expenses = this.expenses;
          resData.forEach((element) => {
            if (element) {
              expenses.unshift(element);
            }
          });

          this.displayError('Expense was added', 'success');
        })
        .catch((error) => {
          this.displayError(error);
        });
    },
    updateExpense(payload, index) {
      const expenseData = this.expenses[index];
      // eslint-disable-next-line
        ExpensesAPI.updateExpense(expenseData._id, payload)
        .then((res) => {
          // Must have only one item
          this.expenses[index].amount = res.data[0].amount;
          this.expenses[index].description = res.data[0].description;
          this.expenses[index].category = res.data[0].category;
          this.expenses[index].pay_method = res.data[0].pay_method;
          this.expenses[index].timestamp = res.data[0].timestamp;
          this.expenses[index].one_time = res.data[0].one_time;
          this.displayError('Expense was updated', 'success');
        })
        .catch((error) => {
          this.displayError(error);
        });
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
      this.addExpenseForm.oneTime = true;

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
};
</script>
