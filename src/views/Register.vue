<template>
    <form>
        <h3>Sign Up</h3>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" v-model="form.firstName" placeholder="First Name">
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" v-model="form.lastName" placeholder="Last Name">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="form.email" placeholder="Email">
        </div>
        <div class="form-group">
            <label>Organisation Id</label>
            <input type="number" class="form-control" v-model="form.organisation_id" placeholder="Organisation Id">
            <!-- <div class="input-group mb-3">
                <select v-model="selected" class="custom-select" id="inputGroupSelect01">
                    <option v-for="(item, index) in organisations" :key="index" v-bind:value="item.id">
                        {{ item.name }}
                    </option>
                </select>
            </div> -->
        </div>
        <div class="form-group">
            <label>Role Id</label>
            <input type="number" class="form-control" v-model="form.role_id" placeholder="Role Id">
            <!-- <div class="input-group mb-3">
                <select v-model="selected" class="custom-select" id="inputGroupSelect01">
                    <option v-for="(item, index) in roles" :key="index" v-bind:value="item.id">
                        {{ item.name }}
                    </option>
                </select>
            </div> -->
        </div>

        <button @click.prevent="handleSubmit" class="btn btn-primary btn-block">Sing Up</button>
    </form>
</template>

<script>
    import User from "../apis/User";
    export default {
        name: 'Register',
        data(){
            return {
                organisations: [],
                roles: [],
                form: {
                    name: '',
                    email: '',
                    organisation_id: '',
                    role_id: '',
                },
            };
        },
        created(){
            User.created()
                .then(res =>{
                    console.log(res.data.organisations);
                    console.log(res.data.roles);
                    this.organisations = res.data.organisations;
                    this.roles = res.data.roles;
                });           
        },
        methods: {
            handleSubmit(){
                User.handleSubmit(this.form)
                    .then(res => {
                        console.log(res.data);
                        this.$router.push({ name: "Home"});
                    })
                    .catch(error => {
                        console.log(error.response.data.errors);
                    });

            },
        }
    }
</script>

<style>

</style>