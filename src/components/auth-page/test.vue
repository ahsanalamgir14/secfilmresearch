<template>
    <div>
      <transition-group name="fade" tag="div">
        <v-card v-for="(question, index) in questions" :key="index">
          <v-card-title>{{ question.question }}</v-card-title>
          <v-card-text  style="display: flex;">
            <v-radio-group  v-model="selectedAnswer[index]">
              <v-radio v-for="(answer, answerIndex) in question.answers" :key="answerIndex" :label="answer" :value="answer"></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </transition-group>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        questions: [
          {
            question: 'Question 1',
            answers: ['Answer 1', 'Answer 2', 'Answer 3']
          },
          {
            question: 'Question 2',
            answers: ['Answer 1', 'Answer 2', 'Answer 3']
          },
          // Add more questions and answers as needed
        ],
        selectedAnswer: []
      };
    }
  };
  </script>
  
  <style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>