<template>
    <CustomDirective>

    </CustomDirective>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Form from './components/Form.vue'
  import FormWithValidation from './components/FormWithValidation.vue'
  import CheckboxForm from './components/CheckboxForm.vue'
  import CustomDirective from "./components/CustomDirective.vue";

  export default {
    name: 'app',
    components: {
      CustomDirective,
      HelloWorld,
      Form,
      FormWithValidation,
      CheckboxForm
    }
  }
</script>

<style>

</style>
