<template>
  <div 
  
  class="form-container sign-up-container">
    <v-form
      action="#"
      :class="{
        'px-2': $vuetify.breakpoint.smAndDown,
        'px-8': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <h1 :class="{
        'pb-4 pt-10 sm-title': $vuetify.breakpoint.smAndDown,
        'pb-4 pt-10': $vuetify.breakpoint.mdAndUp,
      }">Just a few more details</h1>
      <v-text-field
        placeholder="Name"
        filled
        v-model="registerForm.name"
        prepend-inner-icon="mdi-account"
      ></v-text-field>
      <!-- <v-text-field
        placeholder="Last Name"
        prepend-inner-icon="mdi-account"
        filled
        v-model="registerForm.lastName"
      ></v-text-field> -->
      <v-text-field
        placeholder="Email"
        prepend-inner-icon="mdi-email"
        filled
        v-model="registerForm.email"
      ></v-text-field>
      <v-select
      prepend-inner-icon="mdi-account"
          :items="items"
          label="Standard"
          dense
          filled
          v-model="registerForm.age_group"
        ></v-select>
        <v-select
          :items="items_gender"
          label="Gender"
      prepend-inner-icon="mdi-account"

          dense
          filled
          v-model="registerForm.gender"
        ></v-select>
      <v-text-field
        prepend-inner-icon="mdi-lock"
        placeholder="Password"
        type="password"
        filled
        v-model="registerForm.password"
      ></v-text-field>
      <!-- <v-text-field
        placeholder="password"
        prepend-inner-icon="mdi-map-marker"
        filled
        v-model="registerForm.password"
      ></v-text-field> -->
      <!-- <v-text-field
        placeholder="Phone Number"
        filled
        prepend-inner-icon="mdi-phone"
        v-model="formData.phoneNumber"
      ></v-text-field> -->
      <div class="d-flex">
        <v-checkbox
        v-model="registerForm.english_confirm"
        :label="`English Confirm`"
      ></v-checkbox>
      <v-checkbox
      class="p-2"
        v-model="registerForm.age_confirm"
        :label="`More *18`"
      ></v-checkbox>

      </div>
      <v-row>
        <v-col cols="12" md="12">
          <v-btn
            color="secondary"
            outlined
            tile
            block
            class="pa-6 font-weight-bold"
            elevation="0"
            @click="saveFormData()"
            >Next</v-btn
          >
        </v-col>
        <!-- <v-col cols="12" md="6"
          ><v-btn
            color="info"
            dark
            tile
            block
            class="pa-6 font-weight-bold"
            elevation="0"
            @click="saveFormData()"
            >Sign Up</v-btn
          ></v-col
        > -->
      </v-row>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      items: ['16-20', '20-25', '25-30', '30-40', '40-100'],
      items_gender: ['male','female'],
    };
  },
  computed: {
    currentSignUpStep: {
      get: function () {
        return this.$store.getters["authPageModule/getCurrentSignUpStep"];
      },
      set: function (newVal) {
        this.$store.commit("authPageModule/setCurrentSignUpStep", newVal);
      },
    },
    registerForm:{
      get: function () {
        return this.$store.getters["authPageModule/getRegisterForm"];
      },
      set: function () {
        this.$store.commit("authPageModule/setRegisterForm", this.registerForm);
      },
    },
    formData: {
      get: function () {
        return this.$store.getters["authPageModule/getFormData"];
      },
      set: function () {
        this.$store.commit("authPageModule/setFormData", this.formData);
      },
    },
  },
  methods: {
    saveFormData() {
      // this.$store.commit("authPageModule/setFormData", this.formData);
      // this.$store.commit("authPageModule/setRegisterForm", this.registerForm);
      
      
      this.$store.commit("authPageModule/setCurrentSignUpStep", 3);

      
      this.$router.push("/questions-Page");
    },
  },
  created(){
    this.$store.dispatch("authPageModule/fetchQoestionnaire")
    // consloe.log
  }
};
</script>
<style scoped>
.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}
.team-img {
  width: 50%;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
</style>