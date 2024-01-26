<template>

    <v-container
		:class="{
			'container  ': $vuetify.breakpoint.smAndDown,
			'container ': $vuetify.breakpoint.mdAndUp,
		}"
	>
		<div>
			<v-row><v-col></v-col></v-row>
			<v-row><v-col></v-col></v-row>
			<v-row><v-col></v-col></v-row>
			<v-row><v-col></v-col></v-row>
			<v-row><v-col></v-col></v-row>
			<v-row><v-col></v-col></v-row>
			<v-row><v-col></v-col></v-row>
			<v-row><v-col></v-col></v-row>
			<v-row align="center" justify="center">
				<v-col class="text-center" cols="12">
					<h1 class="text-h4 font-weight-thin mb-4">
						Thank You!
					</h1>
					<h4 class="subheading">
						Thank you for participating in this experience. We appreciate your time and contribution.
					</h4>
				</v-col>
			</v-row>
      
      <!-- <router-link class="erp-header-link" :to="fullPath"> -->
        <!-- <v-btn
      color="info"
      dark
      @click="fullPath"
      rounded
       :class="{
        'pa-4 my-10 font-weight-bold': $vuetify.breakpoint.smAndDown,
        'pa-6 my-10 font-weight-bold': $vuetify.breakpoint.mdAndUp,
      }"
      elevation="0"
    > -->
      <!-- Login -->
    <!-- </v-btn> -->
    <!-- </router-link> -->
		</div>
	</v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
      };
    },
    computed:{
     
    },
    methods:{
      deleteInfoUser(){
        localStorage.removeItem("token");
      },
      fullPath(){
        localStorage.removeItem('token');
      this.$router.push("/");
      window.location.reload()
      }
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
  
  <style scoped>
  .thank-you-page {
    text-align: center;
    padding: 20px;
  }
  
  .thank-you-message {
    margin-bottom: 20px;
  }
  
  .video-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .video-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  .video-thumbnail {
    width: 100%;
    height: 150px;
    background-color: #f2f2f2;
    margin-bottom: 10px;
  }
  
  .video-info {
    text-align: center;
  }
  </style>