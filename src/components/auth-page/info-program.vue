<template>
    <v-container id="container" :class="'container'">
        <div>
            <div style="padding: 20px">
                <h1>Research Program Information</h1>
            </div>
            <div style="margin: auto">
                <v-row style="padding: 10px">
                    <v-col style="border: 1px solid white" cols="4">
                        <h4>Study Title:</h4>
                    </v-col>
                    <v-col style="
							border-bottom: 1px solid white;
							border-top: 1px solid white;
							border-right: 1px solid white;
                            text-align:start
						" cols="8">
                        <p>
                            Dental Anxiety therapy using Self Empowerment Cinematography a
                            clinical trial
                        </p>
                    </v-col>
                </v-row>
                <v-row style="padding: 10px">
                    <v-col style="border: 1px solid white" cols="4">
                        <h4>Investigators:</h4>
                    </v-col>
                    <v-col style="
							border-bottom: 1px solid white;
							border-top: 1px solid white;
							border-right: 1px solid white;
                            text-align:start
						" cols="8">
                        <p>
                            Dr Ian L Davies, BOH Dental Group <br> Associate Professor Ratilal
                            Lalloo, UQ School of Dentistry (Advisor) 
                        </p>
                    </v-col>
                </v-row>
            </div>
            <div style="margin-top: 20px ; text-align: start; padding: auto;" >
                <v-row>
                    <v-col cols="12">
                        <h1>Invitation </h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <p>You are invited to participate in this study conducted by Ian
                                Davies at Restore Dental and Prosthodontics in conjunction with
                                The University of Queensland Dental School. You are invited to
                                participate because you identify with having dental anxiety and
                                may benefit in using an intervention aimed at reducing the
                                severity of your dental fears.</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <h1>Purpose of our study</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <p>Dental anxiety and fear is a pervasive problem that affects many
                                people. The management of people with dental anxiety can be
                                difficult and many people simply avoid or delay having dental
                                treatment because of the severity of their anxiety. The
                                Self-Empowerment Cinematography (SEC) film is a unique
                                intervention that is quick and easy for the participant to view
                                each day. The process is non-confrontational and simple to
                                utilize compared to traditional psychosocial methods. This style
                                of approach is new and innovative and requires testing to
                                validate its efficacy. This study will measure your level of
                                dental anxiety before and after appropriate use of the SEC film
                                for dental anxiety and measure the degree of change in each
                                individual.</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <h1>Your involvement </h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <p>Participants will be invited to complete the Index of Dental
                                Anxiety and Fear (IDAF-4C+) prior to the use of SEC film. The
                                SEC film takes 4 minutes to watch each day on a computer with
                                headphones. This can be performed at home or any other location
                                you feel comfortable. You will use the SEC once a day for 90
                                days. Each time you view the SEC film you will mark this down on
                                the progress chart. You will be given 4 months to complete this
                                task. At the end of the 90 SEC film viewings you will fill out
                                the IDAF-4C+ again to measure the changes in your level of
                                dental anxiety.</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <h1>Benefits to participants </h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <p>All participants will have full access to the SEC film and are
                                able to use the technology for the recommend 90 days of
                                treatment. Following this protocol is likely to reduce the
                                participants level of dental fear and anxiety and help them
                                access dental treatment.</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <h1>Maintenance of confidentiality </h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <p>The information you provide in your survey will be kept
                                confidential. It will only be shared as aggregated data amongst
                                the team. For the study, each person will be given a code, which
                                will be used instead of your name so that all information
                                remains confidential and cannot be identified within the group
                                results of this study. The information you provide in your
                                survey will be entered into a secure database using this code.
                                Data collected may also be used in future research but will be
                                kept de-identified to respect participant privacy and
                                confidentiality.</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <h1>Contact information </h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <p>This study adheres to the Guidelines of the ethical review
                                process of The University of Queensland and the National
                                Statement on Ethical Conduct in Human Research. Whilst you are
                                free to discuss your participation in this study with project
                                staff as below, if you would like to speak to an officer of the
                                University not involved in the study,<br> you may contact the Ethics
                                Coordinators on tel: <a style="color: white;border-bottom: 1px solid white;">+617 3365 3924 / +617 3443 1656 </a>  or email
                                <a style="color: white;border-bottom: 1px solid white;"> humanethics@research.uq.edu.au. </a><br>

                                If you would like to be sent a copy of the final research report
                                or a summary of our findings, please contact us through the
                                details provided below. If there are any questions regarding our
                                research or use of data that you would like addressed, please
                                contact us. Dr Ian L Davies<br>
                                <a style="color: white;border-bottom: 1px solid white;"> (idavies@restoredental.com.au </a> or<a style="color: white;border-bottom: 1px solid white;"> +61 7 34832000)</a>
                                Associate Professor Ratilal Lalloo
                                <a style="color: white;border-bottom: 1px solid white;"> (r.lalloo@uq.edu.au </a> or <a style="color: white;border-bottom: 1px solid white;"> +61 7 33658047)</a>
                            <br>
                                Thank you for your participation.</p>
                    </v-col>
                </v-row>
                <!-- <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item>
                        <h1 slot="opposite">Invitation</h1>
                        <v-card class="elevation-2">
                            <v-card-title class="text-h5"> Invitation </v-card-title>
                            <v-card-text>
                                You are invited to participate in this study conducted by Ian
                                Davies at Restore Dental and Prosthodontics in conjunction with
                                The University of Queensland Dental School. You are invited to
                                participate because you identify with having dental anxiety and
                                may benefit in using an intervention aimed at reducing the
                                severity of your dental fears.
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item>
                        <h1 slot="opposite">Purpose of our study</h1>
                        <v-card class="elevation-2">
                            <v-card-title class="text-h5">
                                Purpose of our study
                            </v-card-title>
                            <v-card-text>
                                Dental anxiety and fear is a pervasive problem that affects many
                                people. The management of people with dental anxiety can be
                                difficult and many people simply avoid or delay having dental
                                treatment because of the severity of their anxiety. The
                                Self-Empowerment Cinematography (SEC) film is a unique
                                intervention that is quick and easy for the participant to view
                                each day. The process is non-confrontational and simple to
                                utilize compared to traditional psychosocial methods. This style
                                of approach is new and innovative and requires testing to
                                validate its efficacy. This study will measure your level of
                                dental anxiety before and after appropriate use of the SEC film
                                for dental anxiety and measure the degree of change in each
                                individual.
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item>
                        <h1 slot="opposite">Your involvement</h1>
                        <v-card class="elevation-2">
                            <v-card-title class="text-h5"> Your involvement </v-card-title>
                            <v-card-text>
                                Participants will be invited to complete the Index of Dental
                                Anxiety and Fear (IDAF-4C+) prior to the use of SEC film. The
                                SEC film takes 4 minutes to watch each day on a computer with
                                headphones. This can be performed at home or any other location
                                you feel comfortable. You will use the SEC once a day for 90
                                days. Each time you view the SEC film you will mark this down on
                                the progress chart. You will be given 4 months to complete this
                                task. At the end of the 90 SEC film viewings you will fill out
                                the IDAF-4C+ again to measure the changes in your level of
                                dental anxiety
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item>
                        <h1 slot="opposite">Benefits to participants</h1>
                        <v-card class="elevation-2">
                            <v-card-title class="text-h5">
                                Benefits to participants
                            </v-card-title>
                            <v-card-text>
                                All participants will have full access to the SEC film and are
                                able to use the technology for the recommend 90 days of
                                treatment. Following this protocol is likely to reduce the
                                participants level of dental fear and anxiety and help them
                                access dental treatment.
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item>
                        <h1 slot="opposite">Risks</h1>
                        <v-card class="elevation-2">
                            <v-card-title class="text-h5"> Risks </v-card-title>
                            <v-card-text>
                                The SEC film is that it does not require you to re-examine the
                                source of your dental anxiety, nor does it expose you to dental
                                imagery or footage. The SEC process takes you through a positive
                                guided audiovisual experience and is not designed to provoke any
                                psychological discomfort or cause any harm. However, if you feel
                                uncomfortable using the SEC film, feel free to withdraw at any
                                time.
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item>
                        <h1 slot="opposite">Maintenance of confidentiality</h1>
                        <v-card class="elevation-2">
                            <v-card-title class="text-h5">
                                Maintenance of confidentiality
                            </v-card-title>
                            <v-card-text>
                                The information you provide in your survey will be kept
                                confidential. It will only be shared as aggregated data amongst
                                the team. For the study, each person will be given a code, which
                                will be used instead of your name so that all information
                                remains confidential and cannot be identified within the group
                                results of this study. The information you provide in your
                                survey will be entered into a secure database using this code.
                                Data collected may also be used in future research but will be
                                kept de-identified to respect participant privacy and
                                confidentiality.
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item>
                        <h1 slot="opposite">Voluntary involvement</h1>
                        <v-card class="elevation-2">
                            <v-card-title class="text-h5">
                                Voluntary involvement
                            </v-card-title>
                            <v-card-text>
                                At any time, should you decide you do not wish to continue in
                                the research project, you are free to withdraw by contacting the
                                investigators and providing your unique code.
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item>
                        <h1 slot="opposite">Contact information</h1>
                        <v-card class="elevation-2">
                            <v-card-title class="text-h5"> Contact information </v-card-title>
                            <v-card-text>
                                This study adheres to the Guidelines of the ethical review
                                process of The University of Queensland and the National
                                Statement on Ethical Conduct in Human Research. Whilst you are
                                free to discuss your participation in this study with project
                                staff as below, if you would like to speak to an officer of the
                                University not involved in the study, you may contact the Ethics
                                Coordinators on <a> +617 3365 3924 / +617 3443 1656</a> or email
                                <a> humanethics@research.uq.edu.au. </a>

                                If you would like to be sent a copy of the final research report
                                or a summary of our findings, please contact us through the
                                details provided below. If there are any questions regarding our
                                research or use of data that you would like addressed, please
                                contact us. Dr Ian L Davies
                                <a> (idavies@restoredental.com.au </a> or<a> +61 7 34832000)</a>
                                Associate Professor Ratilal Lalloo
                                <a> (r.lalloo@uq.edu.au </a> or <a> +61 7 33658047)</a>

                                Thank you for your participation
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
                <v-timeline :reverse="reverse" dense> </v-timeline> -->
            </div>
        </div>
        <div>
            <router-link  :to="fullPath">
          <v-btn
        color="info"
        dark
        rounded
         :class="{
          'pa-4 my-10 font-weight-bold': $vuetify.breakpoint.smAndDown,
          'pa-6 my-10 font-weight-bold': $vuetify.breakpoint.mdAndUp,
        }"
        elevation="0"
      >
      CONTINUE    
      </v-btn>
      </router-link>
        </div>
    </v-container>
</template>
<script>
export default {
    computed: {
        fullPath() {
            return '/register-page/info-program/first-register'
        }
    }
}
</script>