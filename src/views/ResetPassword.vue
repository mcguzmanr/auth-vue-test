<template>
        <form @submit.prevent="handleReset">
        <h3>Reset Password</h3>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="form.email" placeholder="Email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="form.password" placeholder="Password">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="form.password_confirmation" placeholder="Password">
        </div>
        <input type="hidden" v-model="form.token">
        <button class="btn btn-primary btn-block">Sing Up</button>
    </form>
</template>

<script>
    import User from "../apis/User";
    export default{
        data(){
            return {
                form: {
                    email: '',
                    password: '',
                    password_confirmation: '',
                    token: this.$route.params.token
                },
            }
        },
        methods: {
            handleReset(){
                console.log(this.form.token);
                console.log(this.form.email);
                console.log(this.form.password);
                console.log(this.form.password_confirmation);
                console.log(this.form);
                User.handleReset(this.form)
                    .then(res => {
                        console.log(res.data);
                        this.$router.push({ name: "Login"});
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
</script>

