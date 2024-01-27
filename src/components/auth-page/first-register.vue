<template>
  <v-stepper v-model="e13" vertical>
    <v-stepper-step step="1" complete> Agreement </v-stepper-step>
    <v-stepper-content step="1">
      <v-card color=" lighten-1" class="mb-12" style="text-align: start">
        <h3>
          Dental Anxiety therapy using Self Empowerment Cinematography a
          clinical trial :
        </h3>
        <p>
          An Online, Dental Anxiety therapy using Self-Empowerment
          Cinematography a pre-post study
        </p>
        <h3>Investigators:</h3>
        <p>
          Dr Ian L Davies, Restore Dental and Prosthodontics <br />
          Associate Professor Ratilal Lalloo, UQ School of Dentistry
        </p>
        <h3>Withdrawal:</h3>
        <p>
          I acknowledge that my participation is withdrawable without providing
          any reasons any time, however I must provide the researchers with my
          unique code (self-generated at the start of the survey).
        </p>
        <h3>Storage and Confidentiality:</h3>
        <p>
          I understand that all information will be securely and confidentially
          stored. I understand that my data may be shared amongst the
          investigators in a de-identified form. I acknowledge that the
          Participant Information Sheet has informed me of the details of data
          collection and management during and after the research study. I agree
          that my data may be published to the public in a manner that does not
          identify me. I have read and understood the Information Sheet relevant
          to the study titled above. I am 18 years of age or older. I agree to
          voluntarily participate in this study by completing the survey.
        </p>

        <v-checkbox
          v-model="agreement"
          label="I acknowledge and agree to the aforementioned statements in this Consent Form."
        >
        </v-checkbox>
      </v-card>
      <v-btn :disabled="!agreement" color="primary" @click="e13 = 2">
        Continue
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="2" complete> Personal Information </v-stepper-step>

    <v-stepper-content step="2">
      <v-card color=" lighten-1" class="mb-12">
        <v-row>
          <v-col cols="6">
            <v-text-field
              ref="name"
              placeholder="Name"
              :rules="rules"
              filled
              v-model="registerForm.name"
              prepend-inner-icon="mdi-account"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              ref="email"
              placeholder="Email"
              :rules="emailRules"
              prepend-inner-icon="mdi-email"
              filled
              v-model="registerForm.email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
             <!-- <v-date-picker placeholder="Age" :rules="rules" type="number"  prepend-inner-icon="mdi-account" filled
                            v-model="registerForm.age_group"></v-date-picker> -->
                        <v-select prepend-inner-icon="mdi-account" :items="items" label="Age Group " dense filled
                            v-model="registerForm.age_group"></v-select>
            <!-- <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  filled
                  ref="age"
                  :rules="rules"
                  label="Age"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-model="registerForm.age_group"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="registerForm.age_group"
                :active-picker.sync="activePicker"
                :max="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substring(0, 10)
                "
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu> -->
          </v-col>
          <v-col cols="6">
            <v-select
              :items="items_gender"
              ref="gender"
              :rules="rules"
              label="Gender"
              prepend-inner-icon="mdi-account"
              dense
              filled
              v-model="registerForm.gender"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              ref="password"
              prepend-inner-icon="mdi-lock"
              :rules="rules"
              placeholder="Password"
              type="password"
              filled
              v-model="registerForm.password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-checkbox
              ref="english_confirm"
              v-model="registerForm.english_confirm"
              :label="`Yes, I can read and use written English.`"
            ></v-checkbox>
          </v-col>
          <v-col cols="4">
            <v-checkbox
              class="p-2"
              ref="age_confirm"
              v-model="registerForm.age_confirm"
              :label="`Yes, I am 18 years of age or older.`"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-card>
      <v-btn :disabled="!isEmailValid || !registerForm.english_confirm || !registerForm.age_confirm || !registerForm.password || !registerForm.name || !registerForm.gender" color="primary" @click="saveFormData()">
        Continue
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>
<script>
// import signUpForm from './sign-up-form.vue'
export default {
  // components: {signUpForm},
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  data() {
    return {
      activePicker: null,
      date: null,
      emailRules: [
        (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) || "Invalid email.",
      ],
      menu: false,
      rules: [(value) => !!value || "Required."],
      agreement: false,
      e13: 1,
      items: [
      '18-24',"25-34",'35-44','45-54','55-64','65-74','75-84','85 and Above'

      ],
      items_gender: ["male", "female"],
    };
  },
  watch: {

  },
  computed: {
    isEmailValid() {
    return this.emailRules ? this.emailRules.every(rule => rule(this.registerForm.email) === true) : true
  },
    currentSignUpStep: {
      get: function () {
        return this.$store.getters["authPageModule/getCurrentSignUpStep"];
      },
      set: function (newVal) {
        this.$store.commit("authPageModule/setCurrentSignUpStep", newVal);
      },
    },
    registerForm: {
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
    save(date) {
      this.$refs.menu.save(date);
    },
    saveFormData() {
      this.$store.commit("authPageModule/setCurrentSignUpStep", 3);
      this.$router.push("/questions-Page");
    },
  },
  created() {
    this.$store.dispatch("authPageModule/fetchQoestionnaire");
  },
};
</script>
