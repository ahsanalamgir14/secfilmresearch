<template>
    <v-container style="background-color: white;"    :class="{
        'container pa-4 my-12': $vuetify.breakpoint.smAndDown,
        'container pa-10 my-12': $vuetify.breakpoint.mdAndUp,
    }">
   <div v-if="lodingProsses">
            <v-progress-linear indeterminate color="info"></v-progress-linear>
        </div>
    <div v-else>
        <div style="background-color: black;
  color: white;
  text-align: start;
  font-size: 25px;
  padding: 20px 0px 20px 10px;">
                <span>The Following Questions relate to how you feel about going to the dentist.</span>
            </div>
        <div v-for="(item, i) in qoestionnaire" :key="i">
            <div  style="text-align: start; padding: 10px;  color: black;" >
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
                            <h3 style="color: black !important;"> {{ item.question }}</h3>
                        </v-col>
                    </div>

                </v-row>
                <v-row style="border-bottom: 1px solid black; padding-left:2rem;">
                    <v-col cols="12">
                        <v-radio-group >
                            <span v-if="i <= 7">
                                <v-radio @click="testfun(items, item)" v-for="(items, i) in item.values" :key="i"
                                    :label="`${items.label}`" :value="items.value"></v-radio>
                            </span>
                            <span v-if="i <= 12 && i > 7 ">
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
        <div>
            <v-row>
                <v-col cols="12" md="12">
                    <v-btn color="info" dark rounded @click="sendData()" :class="{
                        'pa-4 my-10 font-weight-bold': $vuetify.breakpoint.smAndDown,
                        'pa-6 my-10 font-weight-bold': $vuetify.breakpoint.mdAndUp,
                    }" elevation="0">
                        Send
                    </v-btn>
                </v-col>
                <!-- <v-col cols="6" md="6" v-if="isSend">
                    <v-btn color="info" dark rounded @click="logout()" :class="{
                        'pa-4 my-10 font-weight-bold': $vuetify.breakpoint.smAndDown,
                        'pa-6 my-10 font-weight-bold': $vuetify.breakpoint.mdAndUp,
                    }" elevation="0">
                        logout
                    </v-btn>
                </v-col> -->
            </v-row>
        </div>
    </div>
     
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            qu: [],
            // lodingProsses:true,
            selectedAnswerIndex:[],

            isSend:false,
            firstHedar:'1- How much do you agree with the following statements ?',
            yesOrNoHedar:'2- Do the following statements apply to you ?',
            lastHedar:'3- To what extent are you anxious about the   following things when you go to the dentist ?',
            allresult: [
                { name: 'Strongly Agree' },
                { name: 'Moderately Agree' },
                { name: 'Somewhat Agree' },
                { name: 'Agree A Little' },
                { name: 'Disagree' },
            ],
            result: [
                { label: 'Disagree', value: 1 },
                { label: 'Agree A Little', value: 2 },
                { label: 'Somewhat Agree', value: 3 },
                { label: 'Moderately Agree', value: 4 },
                { label: 'Strongly Agree', value: 5 }
            ],
            YesNoQuestion : [
                    {label : 'Yes', value : 1},
                    {label : 'No', value : 2}
                ],
                 lastOption : [
                    {label : 'Not at all', value : 1},
                    {label : 'A littile', value : 2},
                    {label : 'Somewhat', value : 3},
                    {label : 'Moderately', value : 4},
                    {label : 'Very Much', value : 5}
                ]
        
        }
    },
    computed: {
        qoestionnaire: {
            get() {
                return this.$store.getters["authPageModule/getQoestionnaire"];
            }
        },
        lodingProsses:{
            get(){
                return this.$store.getters["authPageModule/getLodingProsses"];
            }
        }
    },
    methods: {
        logout() {
      localStorage.removeItem('token');
      this.$router.push("/");
      window.location.reload()
    },
        sendData(){
            let dataRejester = this.$store.getters["authPageModule/getLastTestUser"];
            this.$store.dispatch("authPageModule/fetchQoutchenAfterWhath",{app:this, dataRejester})
            this.isSend = true
        },
        testfun(x, y) {
            this.selectedAnswerIndex.push(this.qoestionnaire.indexOf(y)) ;

            this.qu.push({
                "question_id": y.id,
                "value": x.value,
                "question_key":y.question_key
                
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
            this.$store.commit("authPageModule/setLastTestUser", unique);
        }
    },
    created() {
        this.$store.dispatch("authPageModule/fetchQoestionnaire")
    },
}
</script>
<style >

</style>
