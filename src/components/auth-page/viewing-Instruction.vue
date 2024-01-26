<template>
	<v-container id="container" :class="'container'">
		<div style="text-align: start; padding: 20px">
			<v-row>
				<v-col cols="12">
					<h2>Viewing Instructions</h2>
				</v-col>
			</v-row>
			<div style="padding: 20px">
				<v-row>
					<v-col cols="12">
						<h4>
							• You are watching ‘The Climb’ in the Dental Anxiety SEC Film
							(First Person Video Camera Effect) daily for 90 days. Headphones
							are required for the full audio experience.
						</h4>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<h4>
							• It is important that you, “the viewer”, have the perception in
							your mind’s eye that you are achieving ‘The Climb’
						</h4>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<h4>
							• You overcome obstacles and challenges every time when watching
							‘The Climb’ which increases your confidence and decreases your
							fear of a stressful situation that is being linked to dentistry.
						</h4>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<h4>
							• Absorb yourself in ‘The Climb’ while taking in the various
							positive affirmations regarding dental treatment.
						</h4>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<h4>
							• Repetitious viewing disables the fear reaction in the fear
							center of the brain (Amygdala) making it easier to absorb new
							positive affirmations about dental care.
						</h4>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<h4>
							• Your negative self-limiting beliefs are rewritten on a
							sub-conscious level by reading the embedded positive affirmations
							in the SEC Film on a daily basis and ultimately align with the
							conscious desires and beliefs.
						</h4>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<h4>
							• It takes approximately 90 repetitions to re-wire the brain into
							this new positive response.
						</h4>
					</v-col>
				</v-row>
			</div>
			<v-row>
				<v-col cols="12">
					<h2>Why it works</h2>
				</v-col>
			</v-row>
			<div style="padding: 20px">
				<v-row>
					<v-col cols="12">
						<h4>
							This intervention has been carefully designed to create the
							perfect situation for the fear response in your mind to be
							re-trained to take on a much healthier and calmer response to
							dental treatment. It takes less than 4 minutes to watch the film.
							The process may seem simple, but it is very effective when used
							consistently, as shown with some of my patients who have already
							used this intervention. Do not be concerned if all the
							affirmations do not resonate with you. We are targeting dental
							anxiety from many different aspects and you are probably not aware
							of all the subconscious reasons behind your dental anxiety. Let
							them all be absorbed in the process.
						</h4>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<h4>
							This treatment is based on the theory of neuroplasticity where the
							brain undergoes remodeling and remapping of the neurosynaptic
							organization. Habits and beliefs in our long-term memory can be
							challenged through a learning process to allow a new habit and
							belief to be formed. Like any new process of learning, such as
							driving a car or learning a new sport, it takes time for the brain
							to adapt and rewire. All sports and hobbies take time to learn
							before you start to do things automatically. The same process
							applies here where repetitive viewing is needed. To enable your
							new healthier response to dental treatment to be learnt and
							adopted by your subconscious mind.
						</h4>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<h4>
							The SEC process takes an individual through a guided imagery
							experience with a musical immersion to enhance the sensory
							engagement with the audiovisual material. The hypnotic induction
							of immersing one’s experience into the material helps induce one
							into a focused concentration where the unconscious mind can adopt
							new beliefs and habits and overcome unwanted fears and destructive
							habits.
						</h4>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<h4>
							The SEC film uses safe behavior altering techniques, using
							embedded affirmations, allowing an individual to gradually believe
							in the affirmation and adopt them as if they are already true.
							This is designed to create positive subconscious beliefs and allow
							you to abandon or overwrite undesired behaviors and habits.
						</h4>
					</v-col>
				</v-row>
			</div>
		</div>
        <router-link class="erp-header-link" :to="fullPath">
		  <v-btn
		color="info"
		@click="setInfoUser"
		dark
		rounded
		 :class="{
		  'pa-4 my-10 font-weight-bold': $vuetify.breakpoint.smAndDown,
		  'pa-6 my-10 font-weight-bold': $vuetify.breakpoint.mdAndUp,
		}"
		elevation="0"
	  >
      Watch the film now
	  </v-btn>
	  </router-link>
	</v-container>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed:{
    fullPath(){
    //   this.deleteInfoUser()  
      return '/videoPage'
    }
  },
  methods:{
    
  },
  created(){
     if (localStorage.getItem('token')) {
    console.log('that is true register');
  } else {
    this.$router.push('/')
  }
  }
};
</script>

