<template>
  <v-container :class="{
    'container ': $vuetify.breakpoint.smAndDown,
    'container  ': $vuetify.breakpoint.mdAndUp,
  }">
    <h1 :class="{
      'sm-title font-weight-bold ': $vuetify.breakpoint.smAndDown,
      'md-title font-weight-bold ': $vuetify.breakpoint.mdAndUp,
    }">
      SEC Film
    </h1>
    <div style="text-align: start; padding: 10px; border-bottom: 1px solid white;">
      <p>.The SEC film takes 4 minutes to watch each day on a computer with headphones.</p>
      <p>.This can be performed at home or any other location you feel comfortable. You will use the SEC once a day for
        90 days.</p>
      <p>.Each time you view the SEC film you will mark this down on the progress chart. You will be given 4 months to
        complete this task.</p>
      <p>.At the end of the 90 SEC film viewings you will fill out the IDAF-4C+ again to measure the changes in your
        level of dental anxiety..</p>
    </div>
    <!-- {{ formatedCountdown || 'countdown over' }} -->
    <div style="padding: 30px;"  id="vimeo-player">
      <video width="100%" height="600px" id="video1toWatch" @ended="wtch = true" controls :key="src">
        <source :src="src" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <!-- <iframe
        width="100%"
        height="600px"
        src="https://secfilmresearch.com.au/videos/sec-film.mp4"
        frameborder="0"
        allowfullscreen
      ></iframe> -->
      </div>
      <p>No. of views: <span style="color: red;"> {{ getWatchNumber }} </span> </p>
      <span style="width=100% ; display:flex;justify-content:center;align-items:center " >
        <v-checkbox  color="white" style="color: white;" id="check-12sdfa33"  class="mx-2 test" v-model="watched" v-if="wtch" >
        </v-checkbox>
        <label  v-if="wtch" for="check-12sdfa33"> I have watched the video</label>
      </span>
      <div class="d-flex justify-center align-center pa-10" style="width:100%; color: white;">
        <v-btn @click="updatepaused()" class="mx-2" :disabled="!wtch || !watched"  color="primary">submit</v-btn>
        <div v-if="finshWhatched">
        <router-link class="erp-header-link" :to="goLastTest">
        <v-btn  class="mx-2"  color="primary">Answer the questionnaire</v-btn>
        </router-link>
      </div>
      </div>
      <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-text class="pa-10">
         Thanks for watching the film. Please answer the questionnaire again to measure the changes in your level of dental anxiety. 
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>      <div>
    </div>
  </v-container>
</template>
  
  
  
<script>

export default {
  name: 'video-page',
  data(){
    return {
      watched: false,
      wtch:false,
      dialog: false,
      src: "https://secfilmresearch.com.au/videos/sec-film.mp4"
    }
  },

  computed: {
   
   
    getWatchNumber(){
   
       return this.$store.getters['authPageModule/getWatchNumber']
      
    },
    goLastTest(){
      return '/lastTestingUser'
    },
    
    finshWhatched(){
      return this.$store.getters['authPageModule/getFinshWotchVedios']
    },
    message(){
      return this.$store.getters['authPageModule/getMessageWatched']
    }
  },
  mounted() {
  },
  methods: {
    
    updatepaused() {
      if (this.wtch) {
        this.$store.dispatch("authPageModule/sendUserwhatchVedio").then(()=>{
          this.dialog = true
         
        })  
      }
    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push("/");
      window.location.reload()
    },
    startWatch(){
      let vid = document.getElementById("video1toWatch");
      console.log('vid',vid.duration,vid.currentTime,vid);
    }
  },
  created() {
      if (localStorage.getItem('token')) {
        console.log('that is true register');
        this.$store.dispatch("authPageModule/NumperWhatheVidoe")  
      } else {
        this.$router.push('/')
      }
  }
};
</script>
  
  
<style   >
.overlay-right {
  right: 0;
  transform: translateX(0);
}
.v-icon{
  color: white;
}
.test{
  
  .theme--light.v-label{
    color: white !important;
  }
  .theme--light.v-icon{
    color: white !important;
  }
}
</style>