import axios from 'axios'
import router from '../../router/index'
import toastification from '../../functions/mixins/toastification.js'
export const actions = {
    async loginUser({commit}, data) {
        let info = data.dataLogin
        await axios.post(`${process.env.VUE_APP_MY_ENV_VARIABLE}/auth/login`, {
            ...info
        }).then(response => {
            localStorage.setItem('token', JSON.stringify(response.data.token));
            toastification(response, data.app)
            if (response.data["user role"] === "admin") {
                router.push('/dashbordAdmin')
            } else {
                axios(`${process.env.VUE_APP_MY_ENV_VARIABLE}/check-status`, {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                    }
                }).then(res => {
                    commit('setWatchNumber',res.data['watch number']) 
                    if (res.data['participant status'] == 'finish watch') {
                        router.push('/lastTestingUser')
                    } else if (res.data['participant status'] == 'in progress') {
                        router.push('/viewing-Instruction')
                    } else if (res.data['participant status'] = 'completed') {
                        router.push('/end-of-the-experiment')
                    }
                })

            }
        }).catch(error => {
            let x = `${JSON.stringify(error.response.data.errors)}`
            let res = {
                data: {
                    status: error.response.status,
                    message: error.response.data.message

                }
            }
            toastification(res, data.app)
        });


    },
    loginAndSaveToken(formData) {
        // this is just an example on how to save the JWT Token, PS AUTH API is fake
        axios.post('https://fake-url.com/api/auth', formData).then((response) => {
            localStorage.setItem('auth_token', response.datatoken);
            router.push('/profile');
        }).catch((error) => {
            //will always redirect to profile 
            router.push('/profile');
        });
    },
    fetchQoestionnaire({ commit }) {
        try {
            commit('setLodingProsses', true)
            axios.get(`${process.env.VUE_APP_MY_ENV_VARIABLE}/questions`).then(res => {
                let arr = []
                const newValues = [
                    { label: 'Disagree', value: 1 },
                    { label: 'Agree A Little', value: 2 },
                    { label: 'Somewhat Agree', value: 3 },
                    { label: 'Moderately Agree', value: 4 },
                    { label: 'Strongly Agree', value: 5 }
                ]
                const YesNoQuestion = [
                    { label: 'Yes', value: 1 },
                    { label: 'No', value: 2 }
                ]
                const lastOption = [
                    { label: 'Not at all', value: 1 },
                    { label: 'A littile', value: 2 },
                    { label: 'Somewhat', value: 3 },
                    { label: 'Moderately', value: 4 },
                    { label: 'Very Much', value: 5 }
                ]
                for (let i = 0; i < res.data.data.length; i++) {
                    const obj = res.data.data[i];
                    obj["values"] = newValues;
                    obj["YesNoQuestion"] = YesNoQuestion;
                    obj["lastOption"] = lastOption;
                }
                commit('setQoestionnaire', res.data.data)
                commit('setLodingProsses', false)

            })
        } catch (error) {
            console.log(error);
        }
    },
    async postRegisterData(contaex, data) {

        let info = data.dataRejester
        await axios.post(`${process.env.VUE_APP_MY_ENV_VARIABLE}/auth/register`, {
            ...info
        }).then(response => {
            localStorage.setItem('token', JSON.stringify(response.data.token));
            toastification(response, data.app)
            router.push('/registration-successful')

        }).catch(error => {
            let x = `${error.response.data.message}`
            let res = {
                data: {
                    status: error.response.status,
                    message: error.response.data.message

                }
            }
            router.push('/not-successful')
            toastification(res, data.app)
        });

    },
    async sendUserwhatchVedio({ commit , rootGetters }) {
            let y = JSON.parse(localStorage.getItem('token'))
            let x = `"Bearer ${y}"`
            await axios(`${process.env.VUE_APP_MY_ENV_VARIABLE}/watch-submit`, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            }).then(res => {
                if (res.status === 206) {
                    commit('setFinshWotchVedios', true)
                    
                }
                commit('setMessageWatched', res.data.message)
                let newWatch = rootGetters["authPageModule/getWatchNumber"] + 1
                commit('setWatchNumber',newWatch)
            }).catch(error =>{
            commit('setMessageWatched', error.response.data.message)

            })
        
    },
    async fetchDataReporting({ commit }) {
        try {
            commit('setLodingProsses', true)

            await axios(`${process.env.VUE_APP_MY_ENV_VARIABLE}/admin-report`, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            }).then(res => {
                let array = []
                for (let i = 0; i < res.data.length; i++) {
                    const element = res.data[i];
                    element['Identifier_number'] = element['Identifier number']
                    delete element['Identifier number']
                    array.push(element)

                }
                commit('setReportingData', array)
            })
            commit('setLodingProsses', false)

        } catch (error) {
            console.log(error);
        }
    },
    async fetchFearstReporting({ commit,state }, data) {
        try {
            await axios(`${process.env.VUE_APP_MY_ENV_VARIABLE}/user-answers/${data.infoUser.id}`, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            }).then(res => {
                let firstTest= state.reportingData.find((el)=>el.id === data.infoUser.id)
                commit('setFirstScore',firstTest["IDAF-4C+ 1st Score"])
               const result= [
                    { label: 'Disagree', value: 1 },
                    { label: 'Agree A Little', value: 2 },
                    { label: 'Somewhat Agree', value: 3 },
                    { label: 'Moderately Agree', value: 4 },
                    { label: 'Strongly Agree', value: 5 }
                ]
                const YesNoQuestion= [
                        {label : 'Yes', value : 1},
                        {label : 'No', value : 2}
                    ]
                    const lastOption= [
                        {label : 'Not at all', value : 1},
                        {label : 'A littile', value : 2},
                        {label : 'Somewhat', value : 3},
                        {label : 'Moderately', value : 4},
                        {label : 'Very Much', value : 5}
                    ]
                  for (let i = 0; i < res.data.length; i++) {
                    const element = res.data[i];
                    if (i <= 7) {
                        element["values"] = result.find(el=> element.value === el.value)
                    } 
                    else if(i  <= 12 && i > 7 ){
                        element["values"] = YesNoQuestion.find(elm=> element.value === elm.value)
                    }else if (i > 12){
                        element["values"] = lastOption.find(ele=> element.value === ele.value)
                    }
                  }
                  commit('setFearstTestReporting', res.data)
                router.push('/ferstTestReporting')
            })
        } catch (error) {
            console.log(error);
        }
    },
    async fetchLastReporting({ commit,state }, data) {
        try {
            await axios(`${process.env.VUE_APP_MY_ENV_VARIABLE}/user-eventual-answers/${data.infoUser.id}`, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            }).then(res => {
                let lastTest= state.reportingData.find((el)=>el.id === data.infoUser.id)
                commit('setLastScore',lastTest["IDAF-4C+ 2nd Score"])
                const result= [
                    { label: 'Disagree', value: 1 },
                    { label: 'Agree A Little', value: 2 },
                    { label: 'Somewhat Agree', value: 3 },
                    { label: 'Moderately Agree', value: 4 },
                    { label: 'Strongly Agree', value: 5 }
                ]
                const YesNoQuestion= [
                        {label : 'Yes', value : 1},
                        {label : 'No', value : 2}
                    ]
                    const lastOption= [
                        {label : 'Not at all', value : 1},
                        {label : 'A littile', value : 2},
                        {label : 'Somewhat', value : 3},
                        {label : 'Moderately', value : 4},
                        {label : 'Very Much', value : 5}
                    ]
                  for (let i = 0; i < res.data.length; i++) {
                    const element = res.data[i];
                    if (i <= 7) {
                        element["values"] = result.find(el=> element.value === el.value)
                  
                    } 
                    else if(i  <= 12 && i > 7 ){
                        element["values"] = YesNoQuestion.find(elm=> element.value === elm.value)
                     
                    }else if (i > 12){
                        element["values"] = lastOption.find(ele=> element.value === ele.value)

                    }
                  }
                commit('setLastTestReporting', res.data)
                router.push('/lastTestReporting')
            })
        } catch (error) {
            console.log(error);
        }
    },
    async fetchQoutchenAfterWhath(context, data) {

        await axios(`${process.env.VUE_APP_MY_ENV_VARIABLE}/submit-questionnier`, {
            method: 'post',
            data: {
                questionnaire: data.dataRejester
            },
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then(res => {
            router.push('/end-of-the-experiment')
            toastification(res, data.app)
        }).catch(error => {
            let x = `${JSON.stringify(error.response.data.errors)}`
            let res = {
                data: {
                    status: error.response.status,
                    message: error.response.data.message

                }
            }
            toastification(res, data.app)
        });
        // commit()


    },
    NumperWhatheVidoe({commit}){
        try {
            axios(`${process.env.VUE_APP_MY_ENV_VARIABLE}/check-status`, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            }).then(res => {
                if (res.data['participant status'] == 'finish watch') {
                    router.push('/lastTestingUser')
                }
               else if (res.data['participant status'] == 'completed') {
                    router.push('/end-of-the-experiment')
                }
                commit('setWatchNumber',res.data['watch number']) 
            })
        } catch (error) {
            console.log(error);
        }
    }

};