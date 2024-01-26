<template>
  <div  class="form-container  sign-in-container ">
    <v-form style="padding-top: 10rem;" action="#" :class="{
      'px-2': $vuetify.breakpoint.smAndDown,
      'px-8': $vuetify.breakpoint.mdAndUp,
      
    }">
      <h1 class="pb-8 font-weight-bold">Sign in</h1>
      <v-text-field prepend-inner-icon="mdi-account" placeholder="Email" v-model="logInData.email" filled></v-text-field>
      <v-text-field prepend-inner-icon="mdi-lock" placeholder="Password" type="password" v-model="logInData.password"
        filled></v-text-field>
      <v-btn color="info" block dark tile class="pa-6 font-weight-bold" elevation="0" @click="login()">Sign In</v-btn>
      <v-row class="justify-center py-10">
        <span :class="{
          'text-secondary forgot-password-sm': $vuetify.breakpoint.smAndDown,
          'text-secondary forgot-password-md': $vuetify.breakpoint.mdAndUp,
        }"> <v-btn text color="primary" @click="dialog = true">Forgot your password ?</v-btn></span>
        <div class="text-center">

          <v-dialog v-model="dialog" persistent width="800">
            <v-card v-if="lodingData" color="primary" dark>
              <v-card-text>
                please wait
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
              </v-card-text>
            </v-card>
            <v-card v-else>
              <v-card-title>
                <span class="text-h5">Reset Password</span>
              </v-card-title>
              <v-card-text>
                <v-stepper v-model="e1">
                  <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">
                      Email
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">
                      Code
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3">
                      Reset Password
                    </v-stepper-step>
                  </v-stepper-header>

                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <v-card style="box-shadow: none;" class="mb-12" height="100px">
                        <v-card-text>
                          <div>
                            <v-text-field prepend-inner-icon="mdi-account" placeholder="Enter The Email"
                              v-model="resetPassword.email" filled></v-text-field>
                          </div>
                        </v-card-text>
                      </v-card>

                      <v-btn color="primary" @click="sendEmail" v-if="resetPassword.email">
                        Continue
                      </v-btn>

                      <!-- <v-btn text>
                        Cancel
                      </v-btn> -->
                    </v-stepper-content>

                    <v-stepper-content step="2">
                      <v-card style="box-shadow: none;" class="mb-12" height="100px">
                        <span style="text-align: start !important; color: #ec2020 !important; " color="red">
                          Enter The Code Send To Your Email Please !!
                        </span>
                        <v-card-text>
                          <div>
                            <v-text-field prepend-inner-icon="mdi-email-open" placeholder="Enter The Code"
                              v-model="resetPassword.code" filled></v-text-field>
                          </div>
                        </v-card-text>
                      </v-card>

                      <v-btn color="primary" v-if="resetPassword.code" @click="checkTheCode">
                        Continue
                      </v-btn>


                    </v-stepper-content>

                    <v-stepper-content step="3">
                      <!-- <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card> -->
                      <v-card style="box-shadow: none;" class="mb-12" height="200px">
                        <span style="text-align: start !important; color: #ec2020 !important; " color="red">
                          Enter The New password To Your Email Please !!
                        </span>
                        <v-card-text>
                          <div>
                            <v-text-field prepend-inner-icon="mdi-lock" type="password" placeholder="New Password"
                              v-model="resetPassword.password" filled></v-text-field>
                            <v-text-field prepend-inner-icon="mdi-lock" type="password" placeholder="Password Confirmation"
                              v-model="resetPassword.password_confirmation" filled></v-text-field>
                          </div>
                        </v-card-text>
                      </v-card>

                      <v-btn color="primary" 
                        @click="sendNewPassowrd">
                        Continue
                      </v-btn>

                      <!-- <v-btn text>
                        Cancel
                      </v-btn> -->
                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
                <!-- <small>*indicates required field</small> -->
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="resetData">
                  Close
                </v-btn>
                <!-- <v-btn color="blue darken-1" text @click="dialog = false">
                  Save
                </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-row>
    </v-form>
  </div>
</template>
<script>
import axios from 'axios'
import toastification from '../../functions/mixins/toastification.js'

export default {
  data: () => {
    return {
      username: null,
      password: null,
      dialog: false,
      e1: 1,
      lodingData: true
    };
  },
  watch: {
    dialog(val) {
      if (!val) return

      setTimeout(() => (this.lodingData = false), 4000)
    },
  },
  computed: {
    logInData: {
      get: function () {
        return this.$store.getters["authPageModule/getLogInInfo"];
      },
      set: function () {
        this.$store.commit("authPageModule/SetLogInInfo", this.logInData);
      },
    },
    resetPassword: {
      get() {

        return this.$store.getters["authPageModule/getResetPassword"];

      },
      set: function () {
        this.$store.commit("authPageModule/SetResetPassword", this.resetPassword);
      },
    }
  },
  methods: {
    resetData() {
      this.resetPassword.code = undefined
      this.resetPassword.email = undefined
      this.resetPassword.password_confirmation = undefined
      this.resetPassword.password = undefined
      // toastification(res, this)
      this.dialog = false
    },
    async sendEmail() {
      // console.log(this.resetPassword.email);
      let info = {
        email: this.resetPassword.email
      }
      await axios(`${process.env.VUE_APP_MY_ENV_VARIABLE}/password/email`, {
        method: 'POST',
        data: info

      }).then(res => {
        console.log(res);
        // toastification(res, this)
        return this.e1 = 2
      }).catch(error => {
        let x = `${JSON.stringify(error.response.data.errors)}`
        let res = {
          data: {
            status: error.response.status,
            message: error.response.data.message

          }
        }
        toastification(res, this)
      });
    },
    async checkTheCode() {
      let info = {
        code: this.resetPassword.code
      }
      await axios(`${process.env.VUE_APP_MY_ENV_VARIABLE}/password/code/check`, {
        method: 'POST',
        data: info

      }).then(res => {
        console.log(res);
        // toastification(res, this)
        return this.e1 = 3
      }).catch(error => {
        let x = `${JSON.stringify(error.response.data.errors)}`
        let res = {
          data: {
            status: error.response.status,
            message: error.response.data.message

          }
        }
        toastification(res, this)
      });
    },
    async sendNewPassowrd() {
      let info = {
        code: this.resetPassword.code,
        password_confirmation: this.resetPassword.password_confirmation,
        password: this.resetPassword.password
      }
      await axios(`${process.env.VUE_APP_MY_ENV_VARIABLE}/password/reset`, {
        method: 'POST',
        data: info

      }).then(res => {
        this.resetPassword.code = undefined
        this.resetPassword.email = undefined
        this.resetPassword.password_confirmation = undefined
        this.resetPassword.password = undefined
        toastification(res, this)
        this.dialog = false
        this.e1 = 1
      }).catch(error => {
        let x = `${JSON.stringify(error.response.data.errors)}`
        let res = {
          data: {
            status: error.response.status,
            message: error.response.data.message

          }
        }
        toastification(res, this)
      });
    },
    login() {
      let dataLogin = this.$store.getters["authPageModule/getLogInInfo"];
      this.$store.dispatch("authPageModule/loginUser", { app: this, dataLogin })
      // this.$store.dispatch("authPageModule/loginUser", {
      //   username: this.username,
      //   asswor: this.password,
      // });
    },
  },
};
</script>
<style scoped>
.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.team-img {
  width: 50%;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.forgot-password-sm {
  font-size: 12px;
}

.forgot-password-md {
  font-size: 15px;
}
</style>