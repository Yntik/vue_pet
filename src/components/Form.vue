<template>
    <div class="container">
        <form v-if="isForm" class="form-content">
            <div class="input-wrap">
                <label>Email</label>
                <input type="email" v-model="person.email" />
            </div>
            <div class="input-wrap">
                <label>First name</label>
                <input type="text" v-model="person.firstName" />
            </div>
            <div class="input-wrap">
                <label>Last name</label>
                <input type="text" v-model="person.lastName" />
            </div>
            <div class="input-wrap">
                <label>Phone</label>
                <input type="text" v-model.number="person.phone" />
            </div>
            <div class="add-guests-wrap">
                <div @click="addGuest">
                    Guests
                    <img src="../assets/twotone_add_black_18dp.png"/>
                </div>
            </div>
            <div class="guests-list">
                <div v-for="(guest, i) in guests">
                    <div class="input-wrap">
                        <label @click="removeGuest(i)">Guest {{i + 1}}</label>
                        <input type="text" v-model="guest.name">
                    </div>
                </div>

            </div>
            <div class="submit">
                <input type="submit" @click.prevent="isForm = !isForm" value="send"/>
            </div>
        </form>
        <div v-else class="table-content">
            <div class="labels">
                <div>Email</div>
                <div>First name</div>
                <div>Last name</div>
                <div>Phone</div>
                <div>Guests</div>
            </div>
            <div class="information">
                <div>{{person.email}}</div>
                <div>{{person.firstName}}</div>
                <div>{{person.lastName}}</div>
                <div>{{person.phone}}</div>
                <div v-for="guest in guests">
                    <div> {{guest.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Form",
        data: () => {
            return {
                person: {
                    email: '',
                    firstName: '',
                    lastName: '',
                    phone: '',
                },
                guests: [],
                isForm: true
            }
        },

        methods: {
            addGuest() {
                this.guests.push({
                    name: ''
                })
            },
            removeGuest(i) {
                this.guests.splice(i, 1);
            }
        }
    }
</script>

<style lang="scss">
    .container {
        display: grid;
        grid-template-columns: 1fr 400px 1fr;
        .form-content{
            grid-column: 2/span 1;
            .input-wrap, .guests-list {
                display: flex;
                flex-direction: column;
                padding: 10px 0;
            }
            .add-guests-wrap {
                div {
                    display: flex;
                    flex-direction: row;
                }
                border-bottom: solid 2px gray;
            }
            .submit {
                padding: 10px 0;
            }
        }
        .table-content {
            padding: 10px;
            grid-column: 2/span 1;
            border: solid 1px black;
            display: grid;
            grid-template-columns: 100px 250px;
            .labels {
                grid-column: 1/span 1;
                div {
                    padding: 10px;
                    border: solid 1px black;
                }
            }
            .information {
                grid-column: 2/span 1;
                div {
                    padding: 10px;
                    border: solid 1px black;
                }
            }
        }
    }
</style>