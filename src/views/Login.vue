<template>
    <form>
        <h3>Login</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="form.email" placeholder="Email">
            <span class="text-danger" v-if="errors.email">
              {{ errors.email[0]}}
            </span>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="form.password" placeholder="Password">
            <span class="text-danger" v-if="errors.password">
              {{ errors.password[0]}}
            </span>
        </div>

        <button @click.prevent="login" class="btn btn-primary btn-block">Login</button>
        <div class="mt-2 d-flex justify-content-end">
            <router-link to="/forgot-password">Forgot Password</router-link>
        </div>
    </form>
</template>

<script>
import User from "../apis/User";
export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            errors: []
        };
    },
    methods: {
      login(){
        User.login(this.form)
          .then(res => {
            console.log(res.data);
            const ficha = res.data.token;
            localStorage.setItem("token", ficha);
            this.$router.push({ name: "Dashboard"});
          })
          .catch(error =>{
            if(error.res.status === 422){
              this.errors =  error.response.data.errors;
            }
          });
      }
    }
}
</script>

<style>

</style>