
<template>
    
    <v-container style="background-color: white;" :class="{
        'container pa-4 my-12': $vuetify.breakpoint.smAndDown,
        'container pa-10 my-12': $vuetify.breakpoint.mdAndUp,
    }">
        <v-progress-linear indeterminate color="info" v-if="lodingProsses"></v-progress-linear>

        <div>
            <!-- <div v-for="i in 3" :key="i">
                <v-row>
                    <v-col style="text-align: start; ">
                        <span >
                               <h1>{{ firstHedar }}</h1>
                            </span>
                            <span >
                                <h1>{{ yesOrNoHedar }}</h1>
                            </span>
                            <span>
                                <h1>{{ lastHedar }}</h1>
                            </span>
                    </v-col>
                </v-row>
            </div> -->
           
            <div style="background-color: black;
  color: white;
  text-align: start;
  font-size: 25px;
  padding: 20px 0px 20px 10px;">
                <span>The Following Questions relate to how you feel about going to the dentist.</span>
            </div>
            <div v-for="(item, i) in qoestionnaire" :key="i">

                <div style="text-align: start; padding: 10px; color: black; ">
                    <h1 v-if="i == 0">{{ firstHedar }}</h1>
                    <h1 v-if="i == 8">{{ yesOrNoHedar }}</h1>
                    <h1 v-if="i == 13">{{ lastHedar }}</h1>

                </div>
                
                <v-row style="text-align: start; padding-left: 2rem; ">
                    <div v-if="selectedAnswerIndex.includes(i)">
                        <v-col >
                            <h3 style="color: #1976d2 !important;"> {{ item.question }}</h3>
                        </v-col>

                    </div>
                    <div v-else>
                        <v-col >
                            <h3 style="color: black !important;" > {{ item.question }}</h3>
                        </v-col>
                    </div>

                </v-row>
                <v-row style="border-bottom: 1px solid black; padding-left:2rem;">
                    <v-col cols="12" >
                        <v-radio-group >
                            <!-- {{ radioGroup }} -->
                            <span v-if="i <= 7" >
                                <v-radio style="color: white !important;" @click="testfun(items, item)" v-for="(items, i) in item.values" :key="i"
                                    :label="`${items.label}`" :value="items.value"></v-radio>
                            </span>
                            <span v-if="i <= 12 && i > 7">
                                <v-radio @click="testfun(items, item)" v-for="(items, i) in item.YesNoQuestion" :key="i"
                                    :label="`${items.label}`" :value="items.value"></v-radio>
                            </span>
                            <span v-if="i > 12">
                                <v-radio @click="testfun(items, item)" v-for="(items, i) in item.lastOption" :key="i"
                                    :label="`${items.label}`" :value="items.value"></v-radio>
                            </span>
                        </v-radio-group>
                    </v-col>
                </v-row>
            </div>

        </div>
        <div>
           
            <v-row>
                <v-col cols="6" md="6">
                    <v-btn color="info" dark rounded @click="fullPath" :class="{
                        'pa-4 my-10 font-weight-bold': $vuetify.breakpoint.smAndDown,
                        'pa-6 my-10 font-weight-bold': $vuetify.breakpoint.mdAndUp,
                    }" elevation="0">
                        Back
                    </v-btn>
                </v-col>
                <v-col cols="6" md="6">
                    <v-btn color="info" dark rounded @click="sendData()" :disabled="qoestionnaire.length !==getRegisterFormAnser.questionnaire.length " :class="{
                        'pa-4 my-10 font-weight-bold': $vuetify.breakpoint.smAndDown,
                        'pa-6 my-10 font-weight-bold': $vuetify.breakpoint.mdAndUp,
                    }" elevation="0">
                        register
                    </v-btn>
                </v-col>

            </v-row>
        </div>

    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            qu: [],
            selectedAnswerIndex:[],
            firstHedar: '1- How much do you agree with the following statements ?',
            yesOrNoHedar: '2- Do the following statements apply to you ?',
            lastHedar: '3- To what extent are you anxious about the   following things when you go to the dentist ?'
        }
    },
    computed: {
        qoestionnaire: {
            get() {
                return this.$store.getters["authPageModule/getQoestionnaire"];
            }
        },
        lodingProsses: {
            get() {
                return this.$store.getters["authPageModule/getLodingProsses"];

                // return true
            }
        },
        getRegisterFormAnser:{
            get(){
              return  this.$store.getters["authPageModule/getRegisterForm"];
            }
        }
    },
    methods: {
        fullPath(){
		this.$router.push("/register-page");
		window.location.reload()
		return ''
	},
        sendData() {
            let dataRejester = this.$store.getters["authPageModule/getRegisterForm"];
            this.$store.dispatch("authPageModule/postRegisterData", { app: this, dataRejester })
        },
        testfun(x, y) {
            this.selectedAnswerIndex.push(this.qoestionnaire.indexOf(y)) ;
            this.qu.push({
                "question_id": y.id,
                "value": x.value,
                "question_key": y.question_key

            })
            const uniqueIds = [];
            for (let i = 0; i < this.qu.length; i++) {
                const element = this.qu[i];
                if (element.question_id == y.id) {
                    element.value = x.value
                }

            }
            const unique = this.qu.filter(element => {
                const isDuplicate = uniqueIds.includes(element.question_id);

                if (!isDuplicate) {
                    uniqueIds.push(element.question_id);

                    return true;
                }

                return false;
            })
            this.$store.commit("authPageModule/setResultQoestionnaire", unique);
        }
    },
    created() {

    },
}
</script>
<style >

</style>
