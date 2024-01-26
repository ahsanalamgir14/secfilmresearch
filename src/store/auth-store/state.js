export const state = {
    currentSignUpStep: 1,
    isSignInPanelActive: false,
    finshWotchVedios:false,
    reportingData:undefined,
    lodingProsses:false,
    fearstTestReporting:undefined,
    lastTestReporting:undefined,
    watchNumber:undefined,
    lastQoutions:false,
    firstScore:undefined,
    lastScore:undefined,
    lastTestUser:{
        questionnaire:undefined
    },
    messageWatched:'',
    // sendAnserAfterWhatch:{
    //     questionnaire:undefined
    // },
    registerForm:{
        name:undefined,
        email:undefined,
        password:undefined,
        gender:undefined,
        age_confirm:false,
        age_group:undefined,
        english_confirm:false,
        questionnaire:[]
    },
    resetPassword:{
        email:undefined,
        code:undefined,
        password:undefined,
        password_confirmation:undefined
    },
    logInInfo:{
        email:undefined,
        password:undefined
    },
    getionnaire:undefined,
    formData: {
        username: null,
        password: null,
        firstName: null,
        lastName: null,
        email: null,
        address: null,
        phoneNumber: null,
    },

};