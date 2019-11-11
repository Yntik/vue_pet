<template>
    <div class="container">
        <h1>Какой тег задает ссылку?</h1>
        <div class="radio-button-group" v-for="item in info">
            <label>{{item}}</label>
            <input type="radio" :value="item"  v-model="change"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: "RadioButtonsComponent",
    props: {
      info: [Array]
    },
    data(){
      return {
        change: ''
      }
    },
    watch: {
      change() {
        this.$emit('validation', {
          value: this.change,
          step: 1
        })
      }
    }
  }
</script>

<style scoped lang="scss">
</style>