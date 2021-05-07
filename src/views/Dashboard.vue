<template>
    <div class="col-8 mx-auto py-5 mt-5">
        <h3>Dashboard</h3> 
        <div class="card">
            <div class="card-body" v-if="user">
                <h4>Hi! {{ user.firstName }}</h4>
                <span>{{ user.email }}</span>
            </div>
        </div>
    </div> 
</template>

<script>
import User from "../apis/User";

export default {
    // name: 'Home',
    data(){
        return {
            user: null
        };
    },
    mounted(){
        User.auth().then(response => {
            this.user = response.data;
        });
    }
}
</script>

<style>

</style>