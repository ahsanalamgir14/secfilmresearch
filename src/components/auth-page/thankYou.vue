<template>
  <!-- <v-container  :class="{
		  'container  ': $vuetify.breakpoint.smAndDown,
		  'container ': $vuetify.breakpoint.mdAndUp,
		}"> -->
  <div style="color: white">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="text-h4 font-weight-thin mb-4">We hope you enjoy!</h1>
        <!-- <h4 class="subheading">Your test is successful.</h4> -->
      </v-col>
    </v-row>
    <v-btn
      color="info"
      @click="logout"
      dark
      rounded
      :class="{
        'pa-4 my-10 font-weight-bold': $vuetify.breakpoint.smAndDown,
        'pa-6 my-10 font-weight-bold': $vuetify.breakpoint.mdAndUp,
      }"
      elevation="0"
    >
      logout
    </v-btn>
  </div>

  <!-- </v-container> -->
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
      window.location.reload();
    },
  },
  created(){
		  if (localStorage.getItem('token')) {
			 console.log('successful');
      } else {
        this.$router.push('/')
      }
	  }
};
</script>
