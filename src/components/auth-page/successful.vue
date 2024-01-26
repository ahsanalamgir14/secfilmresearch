<template>
	<!-- <v-container  :class="{
		  'container  ': $vuetify.breakpoint.smAndDown,
		  'container ': $vuetify.breakpoint.mdAndUp,
		}"> -->
<div  >
    <!-- <v-row><v-col></v-col></v-row>
	<v-row><v-col></v-col></v-row>
    <v-row><v-col></v-col></v-row>
	<v-row><v-col></v-col></v-row>
    <v-row><v-col></v-col></v-row>
	<v-row><v-col></v-col></v-row>
    <v-row><v-col></v-col></v-row> -->
	<!-- <v-row><v-col></v-col></v-row>	 -->
    <v-row align="center" style="color: white;" justify="center">
			<v-col class="text-center" cols="12">
				<h2 class="subheading">The results of the questionnaire indicate that you have a level of Dental Fear and Anxiety that is significant, and you can benefit from this intervention. Please read the viewing instructions to proceed with the study. </h2>
			</v-col>
			<v-col class="text-center"  cols="12">
				<h4 class="subheading">Your registration is successful.</h4>
			</v-col>
		</v-row>
        <router-link class="erp-header-link" :to="fullPath">
		  <v-btn
		color="info"
		dark
		rounded
		 :class="{
		  'pa-4 my-10 font-weight-bold': $vuetify.breakpoint.smAndDown,
		  'pa-6 my-10 font-weight-bold': $vuetify.breakpoint.mdAndUp,
		}"
		elevation="0"
	  >
      Watch the film now
	  </v-btn>
	  </router-link>
	</div>

      
	  <!-- </v-container> -->
	</template>
	
	<script>
	export default {
	  data() {
		return {
		};
	  },
	  computed:{
		fullPath(){
		//   this.deleteInfoUser()  
		  return '/viewing-Instruction'
		}
	  },
	  methods:{
		
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
	
	