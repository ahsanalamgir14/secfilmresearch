<template>
    <v-container style="background-color: white;"  :class="{
        'container pa-4 my-12': $vuetify.breakpoint.smAndDown,
        'container pa-10 my-12': $vuetify.breakpoint.mdAndUp,
    }">
        <div v-if="lodingProsses">
            <v-progress-linear indeterminate color="info"></v-progress-linear>
        </div>
        <div v-else>
            <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
                <template v-slot:item.age="{ item }">
                    <v-chip :color="isAlertAge(item.age)" dark>
                        {{ item.age }}
                    </v-chip>
                </template>

                <template v-slot:item.is_alert="{ item }">
                    <v-chip :color="isAlert(item.is_alert)" dark>
                        {{ item.is_alert }}
                    </v-chip>
                </template>
                <template v-slot:item.viewed_number="{ item }">
                    <v-chip :color="getColor(item.viewed_number)" dark>
                        {{ item.viewed_number }}
                    </v-chip>
                </template>
                
                <template v-slot:item.actions1="{ item }">
                    <div>
                        <v-btn color="success" class="mr-1" fab x-small dark @click="ferstTest(item)">
                            <v-icon>mdi-format-list-checks</v-icon>
                        </v-btn>

                    </div>

                </template>
                <template  v-slot:item.actions2="{ item }">
                    <div>

                        <v-btn color="primary" @click="LastTest(item)" fab x-small dark>
                            <v-icon>mdi-note-text</v-icon>
                        </v-btn>
                    </div>

                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">
                        Reset
                    </v-btn>
                </template>
            </v-data-table>
        </div>

    </v-container>
</template>
<script>
export default {
    data() {
        return {
            singleSelect: false,
            selected: [],
            headers: [
                { text: 'Name', value: 'name' },
                { text: 'Email', value: 'email' },
                { text: 'Age', value: 'age' },

                { text: 'Identifier number', value: 'Identifier_number' },
                { text: 'alerted', value: 'is_alert' },
                { text: 'status', value: 'status' },
                { text: 'views', value: 'viewed_number' },
                { text: 'missed views', value: 'number of day which the user didn\'t watch the video on it until finish treatement' },
                { text: 'IDAF-4C+ 1st', value: 'actions1', sortable: false },
                { text: 'IDAF-4C+ 2nd', value: 'actions2', sortable: false },

            ],
        }
    },
    computed: {
        desserts: {
            get() {
                return this.$store.getters["authPageModule/getReportingData"];
            }
        },
        lodingProsses: {
            get() {
                return this.$store.getters["authPageModule/getLodingProsses"];

                // return true
            }
        }
    },
    methods: {
        isAlert(calories){
            if (calories == 'yes') return 'primary '
            else return 'red accent-4 '
        },
        isAlertAge(calories){
             return 'light-blue darken-4 '
            
        },
        getColor(calories) {
            if (calories <= 1) return 'blue-grey '
            else if (calories <= 3) return 'orange'
            else return 'red accent-4 '
        },
        ferstTest(info) {
            this.$store.dispatch("authPageModule/fetchFearstReporting", { infoUser: info })
        },
        LastTest(info) {
            this.$store.dispatch("authPageModule/fetchLastReporting", { infoUser: info })

        },
        getData() {
            console.log(true);
        }
    },
    created() {
        if (localStorage.getItem('token')) {
            this.$store.dispatch("authPageModule/fetchDataReporting")
        console.log('that is true rejester');
      } else {
        this.$router.push('/')
      }
    }
}
</script>