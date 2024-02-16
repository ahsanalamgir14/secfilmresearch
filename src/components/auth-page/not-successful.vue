<template>
  <div style="color: white">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <!-- <h1 class="text-h4 font-weight-thin mb-4">
						Unfortunately the results of the questionnaire place your level of Dental Fear and Anxiety below the threshold to be included in this study. Thank you for your time and please look for updates on this product”
	Change the background image (laptop).
					</h1> -->
        <h2 class="subheading">
          Unfortunately the results of the questionnaire place your level of
          Dental Fear and Anxiety below the threshold to be included in this
          study. Thank you for your time and please look for updates on this
          product
        </h2>
      </v-col>
    </v-row>
    <!-- <v-row>
				<v-col>
          <v-btn
        color="info"
        dark
        rounded
		@click="fullPath"
         :class="{
          'pa-4 my-10 font-weight-bold': $vuetify.breakpoint.smAndDown,
          'pa-6 my-10 font-weight-bold': $vuetify.breakpoint.mdAndUp,
        }"
        elevation="0"
      >
      Back
      </v-btn>
				</v-col>
			</v-row> -->
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  methods: {
    // fullPath(){
    // 	this.$router.push("/register-page");
    // 	window.location.reload()
    // 	return ''
    // }
  },
  created() {
    if (!localStorage.getItem("token")) {
      console.log("no user found");
    } else {
      console.log("user already logged in");
      this.$router.push("/");
    }
  },
};
</script>
