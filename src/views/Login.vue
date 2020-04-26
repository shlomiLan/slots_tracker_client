<template>
  <v-card>
      <alert :message=message></alert>
      <v-form onSubmit="return false;" lazy-validation ref="form">
        <v-card-text>
        <v-text-field
          label="Email"
          prepend-icon="far fa-user"
          type="text"
          v-model="userForm.email"
          v-validate="'required'"
          :error-messages="errors.collect('email')"
          data-vv-name="email" required></v-text-field>

        <v-text-field
          label="Password"
          v-model="userForm.password"
          prepend-icon="fas fa-lock"
          type="password"
          v-validate="'required'"
          :error-messages="errors.collect('password')"
          data-vv-name="password" required></v-text-field>
        <v-spacer />
        <v-btn color="blue darken-1" flat type="submit" @click="onSubmit()">Login</v-btn>
      </v-card-text>
      </v-form>
  </v-card>
</template>

<script>
import Alert from '../components/Alert.vue';
import Loading from '../components/Loading.vue';
import UsersAPI from '../api/Users';
import router from '../router';

export default {
  data() {
    return {
      userForm: {
      },
      message: {
        text: '',
        type: 'success',
        display: false,
      },
      dialog: false,
      loading: true,
    };
  },
  components: {
    alert: Alert,
    loading: Loading,
  },
  methods: {
    // async getPayMethods() {
    //   let resData = [];
    //
    //   try {
    //     resData = await PayMethodsAPI.get();
    //     this.payMethods = resData.data;
    //   } catch (e) {
    //     this.displayError(e);
    //   }
    //
    //   this.loading = false;
    //   return resData;
    // },
    // initForm() {
    //   this.addPayMethodForm = Object.assign({}, this.addPayMethodForm, {
    //     name: '',
    //     index: undefined,
    //   });
    // },
    // closeForm() {
    //   this.dialog = false;
    // },
    // onLoad() {
    //   this.initForm();
    //   this.dialog = true;
    // },
    async loginUser(payload) {
      let res = [];

      try {
        res = await UsersAPI.login(payload);
        const resData = res.data;
        if (resData) {
          return resData.access_token;
        }
      } catch (e) {
        this.displayError(e);
      }

      return res;
    },
    onSubmit() {
      const payload = {
        email: this.userForm.email,
        password: this.userForm.password,
      };

      this.$validator.validateAll()
        .then((res) => {
          if (res === true) {
            this.loginUser(payload)
              .then((accessToken) => {
                if (accessToken) {
                  this.$session.start();
                  this.$session.set('jwt', accessToken);
                  this.$store.state.is_authenticated_user = true;
                  router.push('Expenses');
                }else {
                  this.displayError('Invalid username or password');
                }
              });
          }
        });
    },
    displayError(message, type = 'error') {
      // TODO: Fix not displaying second time.
      this.message.display = true;
      this.message.type = type;
      this.message.text = message;
    },
  },
  created() {
    // this.initForm();
    // this.getPayMethods();
  },
};
</script>
