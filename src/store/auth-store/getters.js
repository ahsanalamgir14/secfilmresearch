export const getters = {
    getIsSignInPanelActive: (state) => {
        return state.isSignInPanelActive;
    },
    getCurrentSignUpStep: (state) => {
        return state.currentSignUpStep;
    },
    getFormData: (state) => {
        return state.formData;
    },
    getRegisterForm: (state) => {
        return state.registerForm;
    },
    getFinshWotchVedios(state){
        return state.finshWotchVedios
    },
    getQoestionnaire: (state) => {
        return state.getionnaire;
    },
    getLogInInfo(state){
        return state.logInInfo
    },
    getResetPassword(state){
        return state.resetPassword
    },
    getReportingData(state){
        return state.reportingData
    },
    getFearstTestReporting(state){
        return state.fearstTestReporting
    },
    getLastTestReporting(state){
        return state.lastTestReporting
    },
    getLastTestUser(state){
        return state.lastTestUser.questionnaire
    },
    getLodingProsses(state){
        return state.lodingProsses
    },
    getMessageWatched(state){
        return state.messageWatched
    },
    getWatchNumber(state){
        return state.watchNumber
    },
    getFirstScore(state){
        return state.firstScore
    },
    getLastScore(state){
        return state.lastScore
    }
};