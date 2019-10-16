<template>
    <div class="container">
        <form class="content">
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
                <label>Guests</label>
                <button @click="addGuest"></button>
            </div>
            <div class="guests-list">
                <div v-for="(guest, i) in guests">
                    <div class="input-wrap">
                        <label>Guest {{i + 1}}</label>
                        <input type="text" v-model="guest.name">
                    </div>
                </div>

            </div>
            <div>
                <input type="submit" value="send"/>
            </div>
        </form>
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
                guests: []
            }
        },

        methods: {
            addGuest() {
                this.guests.push({
                    name: ''
                })
            }
        }
    }
</script>

<style scoped>

</style>