<template>
    <div class="input-wrap">
        <label> {{ name }}
            <span v-if="active">
                        <img v-if="valid" src="../assets/baseline_done_black_18dp.png"/>
                        <img v-else src="../assets/baseline_error_black_18dp.png"/>
            </span>
        </label>
        <input type="text" @input="" v-model="value"/>
    </div>
</template>

<script>
  export default {
    name: "myInput",
    props: ['pattern', 'name', 'index'],
    data:() => {
      return {
        active: false,
        valid: false,
        value: ''
      }
    },
    watch: {
      value() {
        this.active = true
        this.valid = this.pattern.test(this.value)
        this.$emit('validation', {
          index: this.index,
          valid: this.valid,
          value: this.value
        })
      }
    }
  }
</script>

<style scoped>

</style>