<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
            <router-link class="items" to="/">Home</router-link>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <router-link class="mr-1 items" to="/login">Login</router-link>
                    <router-link class="ml-1 items" to="/register">Sign up</router-link>
                    <router-link class="ml-1 items" to="/dashboard">Dashboard</router-link>
                    <a class="ml-1 items" @click.prevent="logout">Logout</a>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import User from "../apis/User";
export default {
    // name: 'Nav'
    data(){
        return {
            isLoggedIn: false
        };
    },
    mounted() {
        // this.$root.$on("login", () => {
        //     this.isLoggedIn = true;
        // });
        // this.isLoggedIn = true;
        // this.isLoggedIn = !!localStorage.getItem("token");
        // if(localStorage.getItem("token")){
        //     this.isLoggedIn = true;
        // }
    },
    methods: {
        logout(){
            User.logout().then(() =>{
                localStorage.removeItem("token");
                this.isLoggedIn = false;
                this.$router.push({ name: "Home"});
            });
        }
    }
}
</script>

<style>
    .items{
        color: #2c3e50;
    }

    .items.router-link-exact-active {
        color: #43b983;
    }

    .items:hover{
        text-decoration:none;
        color:chocolate
    }
</style>