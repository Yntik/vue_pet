<template>
    <div>
        <div v-if="currentStep < 2">
            <component
                    :is="steps[currentStep]"
                    :info="info"
                    @validation="validator"
            >
            </component>
            <button :disabled="!activeButton" @click="currentStep++">Далее</button>
        </div>
        <div v-else>
            <div>
                Вопрос
            </div>
            <div>
                Какие из этих тегов строчные? {{this.answer.twoStep}}
            </div>
            <div>
                Какой тег задает ссылку?  {{this.answer.firstStep}}
            </div>
        </div>
    </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Form from './components/Form.vue'
  import FormWithValidation from './components/FormWithValidation.vue'
  import CheckboxForm from './components/CheckboxForm.vue'
  import CustomDirective from "./components/CustomDirective.vue"
  import myInput from './components/myInput.vue'
  import CheckBoxComponent from './components/CheckBoxComponent.vue'
  import RadioButtonsComponent from './components/RadioButtonsComponent.vue'

  export default {
    name: 'app',
    components: {
      CustomDirective,
      HelloWorld,
      Form,
      FormWithValidation,
      CheckboxForm,
      myInput,
      CheckBoxComponent,
      RadioButtonsComponent
    },
    data() {
      return {
        info: [
          'a',
          'div',
          'span',
          'img',
        ],
        steps: ['CheckBoxComponent', 'RadioButtonsComponent'],
        currentStep: 0,
        activeButton: false,
        answer: {
          firstStep: '',
          twoStep: {}
        }
      }
    },
    methods: {
      validator(e) {
        if (e.step === 1) {
          this.activeButton = true
          this.answer.firstStep = e.value
        }
        else {
          this.activeButton = false
          for (let item in e.value) {
            e.value[item] ? this.activeButton = true : ''
          }
          this.answer.twoStep = e.value
        }
      },
    },
    watch: {
      currentStep(){
        this.activeButton = false
      }
    }

  }
</script>

<style scoped>

</style>
