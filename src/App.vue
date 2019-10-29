<template>
    <form-with-validation>

    </form-with-validation>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Form from './components/Form.vue'
  import FormWithValidation from './components/FormWithValidation.vue'
  import CheckboxForm from './components/CheckboxForm.vue'
  import CustomDirective from "./components/CustomDirective.vue"
  import myInput from './components/myInput.vue'

  export default {
    name: 'app',
    components: {
      CustomDirective,
      HelloWorld,
      Form,
      FormWithValidation,
      CheckboxForm,
      myInput
    }
  }
</script>

<style>

</style>
