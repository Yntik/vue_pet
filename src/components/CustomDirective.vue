<template>
    <div>
        <div class="simple" style="font-size: 20px">
            <div v-timer:1000.5.run="onTimer" style="font-size: 20px">
                lalal
            </div>
            <div v-timer:1000.5="onTimer" style="font-size: 20px">
                lalal
            </div>
            <div v-timer:1000="onTimer" style="font-size: 20px">
                lalal
            </div>
        </div>

    </div>

</template>

<script>

  export default {
    name: "CustomDirective",
    directives: {
      timer: {
        bind(el, binding) {
          let recursiveCall = (i) =>{
            i--
            if (i === 0) return
            if (i === undefined) {
              binding.value(el)
              console.log(binding.arg)
              setTimeout(() => {
                recursiveCall()
              }, binding.arg)
            }
            else {
              binding.value(el)
              setTimeout(() => {
                recursiveCall(i)
              }, binding.arg)

            }
          }
          if (binding.modifiers.run) {

            for (let elm in binding.modifiers) {
              Number.isInteger(parseInt(elm)) ? binding.value(el, parseInt(elm)) : ''
            }
          }
          else {
            Object.keys(binding.modifiers)[0] ? recursiveCall(parseInt(Object.keys(binding.modifiers)[0])) : recursiveCall()
          }

        }
      }
    },
    methods: {
      onTimer(el, gain = 1) {
        el.style.fontSize = parseInt(el.style.fontSize) + gain + 'px'
      }
    }
  }
</script>

<style scoped lang="scss">

</style>