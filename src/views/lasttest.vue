<template>
    <v-container style="background-color: white;"  :class="{
        'container pa-4 my-12': $vuetify.breakpoint.smAndDown,
        'container pa-10 my-12': $vuetify.breakpoint.mdAndUp,
    }">
        <div>
            <!-- <v-row>
                <v-col cols="5" style="border: 1px solid black;">

                    <h3>How much do you agree with the following statements?</h3>
                </v-col>
                <v-col v-for="(labels, i ) in allresult" :key="i" style="border: 1px solid black;">
                    <h3>{{ labels.name }}}</h3>
                </v-col>

            </v-row> -->
            <h1 v-if="lastScore" style="color: #1976d2 !important; padding: 20px;">IDAF-4C+ 2nd Score : {{ lastScore }}</h1>
            <div v-for="(item, i) in qoestionnaire" :key="i">
                  <v-row  style="border-bottom: 1px solid black; text-align: start;">
                <v-col>
                    <!-- <p>{{ item.question.question }} {{ item.value }}</p> -->
                    <h2 style="color: black;"> {{ item.question.question +':'}} <span style="color: #1976d2 !important;"> {{item.values? item.values.label : "He did not answer" }} </span > </h2 >  
                </v-col>
                
            </v-row>
                
            <v-row style="">
                <v-col cols="12">
                </v-col>
            </v-row>
            </div>
        </div>
        <div>
        </div>
    </v-container>
</template>
  
<script>
export default { 
    data() {
        return {
            radioGroup:undefined,
            qu: [],
            // allresult: [
            //     { name: 'Strongly Agree' },
            //     { name: 'Moderately Agree' },
            //     { name: 'Somewhat Agree' },
            //     { name: 'Agree A Little' },
            //     { name: 'Disagree' },
            // ],
            // result: [
            //     { label: 'Disagree', value: 1 },
            //     { label: 'Agree A Little', value: 2 },
            //     { label: 'Somewhat Agree', value: 3 },
            //     { label: 'Moderately Agree', value: 4 },
            //     { label: 'Strongly Agree', value: 5 }
            // ],
            // YesNoQuestion : [
            //         {label : 'Yes', value : 1},
            //         {label : 'No', value : 2}
            //     ],
            //      lastOption : [
            //         {label : 'Not at all', value : 1},
            //         {label : 'A littile', value : 2},
            //         {label : 'Somewhat', value : 3},
            //         {label : 'Moderately', value : 4},
            //         {label : 'Very Much', value : 5}
            //     ]
        
        }
    },
    computed: {
        // radioGroup:{
        //     get(){
        //         return this.$store.getters["authPageModule/getFearstTestReporting"];
        //     }
        // },
        qoestionnaire: {
            get() {
                return this.$store.getters["authPageModule/getLastTestReporting"];
            }
        },
        lastScore:{
            get(){
                return this.$store.getters["authPageModule/getLastScore"];

            }
        }
    },
    methods: {
       
    },
    created() {
      
    },
}
</script>
<style >

</style>
