<template>
    <div class="container">
        <form v-if="isForm" class="form-content">
            <div class="progress-bar" :style="progressBarStyles[progressBarStatus]"></div>
            <myInput v-for="(field, index) in info"
                     :pattern="field.pattern"
                     :name="field.name"
                     :index="index"
                     @validation="validator">
            </myInput>
            <button :disabled="progressBarStatus !== 5">submit</button>
        </form>
        <table v-else class="table">
            <tr v-for="field in info">
                <th>{{field.name}}</th>
                <th>{{field.value}}</th>
            </tr>
        </table>
    </div>
</template>

<script>
  import myInput from './myInput.vue'

  export default {
    name: "FormWithValidation",
    components: {
      myInput
    },
    data: () => {
      return {
        info: [
          {
            name: 'Name',
            value: '',
            pattern: /^[a-zA-Z ]{2,30}$/,
            active: false,
            valid: false
          },
          {
            name: 'Phone',
            value: '',
            pattern: /^[0-9]{7,14}$/,
            active: false,
            valid: false
          },
          {
            name: 'Email',
            value: '',
            pattern: /.+/,
            active: false,
            valid: false
          },
          {
            name: 'Some Field 1',
            value: '',
            pattern: /.+/,
            active: false,
            valid: false
          },
          {
            name: 'Some Field 2',
            value: '',
            pattern: /.+/,
            active: false,
            valid: false
          }
        ],
        progressBarStyles: [
          'background: linear-gradient(to right, #A7CECC 0%, #DBDBDB 0%);',
          'background: linear-gradient(to right, #A7CECC 20%, #DBDBDB 20%);',
          'background: linear-gradient(to right, #A7CECC 40%, #DBDBDB 40%);',
          'background: linear-gradient(to right, #A7CECC 60%, #DBDBDB 60%);',
          'background: linear-gradient(to right, #A7CECC 80%, #DBDBDB 80%);',
          'background: linear-gradient(to right, #A7CECC 100%, #DBDBDB 100%);'
        ],
        isForm: true
      }
    },
    methods: {
      validator(e) {
        this.info[e.index].valid = e.valid
        this.info[e.index].value = e.value
      }
    },
    computed: {
      progressBarStatus() {
        let progressBarStatus = 0;
        for (let i in this.info) {
          this.info[i].valid === true ? progressBarStatus++ : ''
        }
        return progressBarStatus;
      }
    },
    watch: {
      progressBarStatus() {
        this.progressBarStatus === 5 ? this.isForm = false : this.isForm = true
      }
    }

  }
</script>

<style lang="scss">
    .container {
        display: grid;
        grid-template-columns: 1fr 400px 1fr;
        .form-content {
            grid-column: 2/span 1;
            .progress-bar {
                height: 25px;
            }
            .input-wrap {
                display: flex;
                flex-direction: column;
                padding: 10px 0;
            }
        }
        .table {
            grid-column: 2/span 1;
            tr {
                border: 1px solid black;
                padding: 10px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
</style>