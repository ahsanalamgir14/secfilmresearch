<template>
  <div id="app" class="card-overlay">
    <v-app>
      <div
        :class="{
          'sm-main-style': $vuetify.breakpoint.smAndDown,
          'md-main-style': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <div>
          <v-row class="my-4">
            <v-col cols="12" md="4">
              <v-btn
                tile
                block
                elevation="0"
                color="info"
                :class="{
                  'p-0  m-0': $vuetify.breakpoint.smAndDown,
                  'mx-1': $vuetify.breakpoint.mdAndUp,
                }"
                v-if="testPath"
                @click="logout"
                >Logout</v-btn
              >
            </v-col>
          </v-row>
          <v-row class="my-4">
            <v-col cols="12" md="4">
              <v-btn
                tile
                block
                elevation="0" 
                color="info"
                :class="{
                  'p-0  m-0': $vuetify.breakpoint.smAndDown,
                  'mx-1': $vuetify.breakpoint.mdAndUp,
                }"
                v-if="backPathe"
                @click="Back"
                >Back</v-btn
              >
            </v-col>
          </v-row>
          <!-- <v-row class="my-4">
            <v-col cols="12" md="4">
              <v-btn
                tile
                block
                outlined
                elevation="0"
                color="info"
                :class="{
                  'p-0  m-0': $vuetify.breakpoint.smAndDown,
                  'mx-1': $vuetify.breakpoint.mdAndUp,
                }"
                @click="$router.push('/')"
                >Home</v-btn
              ></v-col
            >
            <v-col cols="12" md="4">
              <v-btn
                tile
                block
                outlined
                elevation="0"
                color="info"
                :class="{
                  'p-0  m-0': $vuetify.breakpoint.smAndDown,
                  'mx-1': $vuetify.breakpoint.mdAndUp,
                }"
                @click="$router.push('/profile')"
                >Video Page</v-btn
              ></v-col
            >
            <v-col cols="12" md="4"
              ><v-btn
                tile
                block
                outlined
                elevation="0"
                color="info"
                :class="{
                  'p-0  m-0': $vuetify.breakpoint.smAndDown,
                  'mx-1': $vuetify.breakpoint.mdAndUp,
                }"
                @click="$router.push('/stats')"
                >our stats</v-btn
              ></v-col
            >
          </v-row> -->
        </div>
        <router-view />
        <footer :class="{
                  'footer-sm': $vuetify.breakpoint.smAndDown,
                  'footer-md': $vuetify.breakpoint.mdAndUp,
                }">
          <a href="#" target="_blank"
            ></a
          >
        </footer>
      </div>
    </v-app>
  </div>
</template>
<script>
export default {
  computed:{
    testPath(){
      if (this.$route.name == 'videoPage' || this.$route.name == 'dashbordAdmin') {
        return true
      }else{
        return false
      }
    },
    backPathe(){
      if (this.$route.name == 'ferstTestReporting' || this.$route.name == 'lastTestReporting') {
        return true
      }else{
        return false
      }
    }
  },
  methods:{
        logout() {
      localStorage.removeItem('token');
      this.$router.push("/");
      window.location.reload()
    },
    Back(){
      this.$router.push("/dashbordAdmin");
    }
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1414&q=80")
    no-repeat center center fixed; */
    background: url(../public/photo_2023-11-15_21-18-01.jpg)    no-repeat center center fixed; 
    
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

.sm-main-style {
  margin: auto;
  width: 95%;
}
.md-main-style {
  margin: auto;
  width: 70%;
}

.footer-md {
  padding: 30px 0px;
}
.footer-md a {
  text-decoration: none;
  color: white !important;
  font-size: 1.1rem;
  font-family: cursive;
  font-weight: 600;
}

.footer-sm {
  padding: 20px 0px;
}
.footer-sm a {
  text-decoration: none;
  color: white !important;
  font-size: 0.8rem;
  font-family: cursive;
  font-weight: 600;
}
</style>
