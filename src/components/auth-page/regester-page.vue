<template>
    <v-container
    id="container"
    :class=" 'container'"
  >
    <div  class="" style="padding-top: 5rem;">
      <h1
        :class="{
          ' font-weight-bold ': $vuetify.breakpoint.smAndDown,
          ' font-weight-bold ': $vuetify.breakpoint.mdAndUp,
        }"
      >
      Dental Anxiety therapy using Self-Empowerment Cinematography
      </h1>
      <div style="padding: 20px;">
          <h2>A collaborative research program in association with the University of Queensland Dental School.</h2>
  
      </div>
      <div style="padding: 20px;">
          <h4>Dr Ian Davies, BDSC (Hons) QLD – Dentist at Restore Dental and Prosthodontics</h4>
      </div>
      <div>
          <h4>A/Professor Ratilal Lalloo, BChD, BSc Med Hons (Epidemiol), MChD (Community Dentistry), PhD (Dental Public Health – London)</h4>
          <h4>Discipline Lead: Dental Public Health, Director (Research Training).</h4>
      </div>
      <div>
        <h1
        :class="{
          ' font-weight-bold ': $vuetify.breakpoint.smAndDown,
          ' font-weight-bold ': $vuetify.breakpoint.mdAndUp,
        }"
        >
        We invite you to participate in an exciting and innovative new therapy to help people affected by Dental Fear and Anxiety.
        </h1>
      </div>
      <div>
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
      Register Here 
      </v-btn>
      </router-link>
      </div>
    </div>
    </v-container>
  </template>
  <script>
  export default{
      computed: {
          fullPath(){
           return   '/register-page/info-program' 
          }
      },
      methods:{
         
      }
  }
  </script>