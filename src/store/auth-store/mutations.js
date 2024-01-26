export const mutations = {
    setIsSignInPanelActive(state, newVal) {
        state.isSignInPanelActive = newVal;
    },
    setCurrentSignUpStep(state, newVal) {
        state.currentSignUpStep = newVal;
    },
    setFormData(state, newVal) {
        state.formData = {...state.formData, ...newVal };
    },
    setRegisterForm(state, newVal) {
        state.registerForm = {...state.registerForm, ...newVal };
    },
    setQoestionnaire(state, newVal) {
        state.getionnaire = newVal
        
    },
    setResultQoestionnaire(state, newVal) {
        state.registerForm.questionnaire = newVal
        
    },
    SetLogInInfo(state,newVal){
        state.logInInfo = {...state.logInInfo, ...newVal };
    },
    setReportingData(state,newVal){
        state.reportingData = newVal
    },
    setFearstTestReporting(state,newVal){
        state.fearstTestReporting = newVal
    },
    setLastTestReporting(state,newVal){
        state.lastTestReporting = newVal
    },
    setLastTestUser(state,newVal){
        state.lastTestUser.questionnaire = newVal
    },
    setLodingProsses(state,newVal){
        state.lodingProsses = newVal
    },
    setMessageWatched(state,data){
        state.messageWatched = data
    },
    setFinshWotchVedios(state,newVal){
        state.finshWotchVedios = newVal
    },
    setWatchNumber(state,newVal){
        state.watchNumber = newVal
    },
    SetResetPassword(state,newVal){
        state.resetPassword = {...state.resetPassword, ...newVal };
    },
    setLastQoutions(state,newVal){
        state.lastQoutions = newVal
    },
    setFirstScore(state,newVal){
        state.firstScore =newVal
    },
    setLastScore(state,newVal){
        state.lastScore =newVal
    },
    // setSendAnserAfterWhatch(state,newVal){
    //     state.sendAnserAfterWhatch.questionnaire = newVal
    // }
};