<template>
    <div class="container">
        <h1>Какие из этих тегов строчные?</h1>
        <div class="check-box-group" v-for="item in info">
            <label>{{item}}</label>
            <input type="checkbox" @change="change" v-model="checkboxsStatus[item]"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CheckBoxComponent",
    props: {
      info: [Array]
    },
    created() {
      for (let item of this.info) {
        this.$set(this.checkboxsStatus, item, false)
      }
    },
    data() {
      return {
        checkboxsStatus: {}
      }
    },
    methods: {
      change() {
        this.$emit('validation', {
          value: this.checkboxsStatus,
          step: 2
        })
      }
    }
  }
</script>

<style scoped>

</style>