<template>
    <form>
        <h3>Reset Password</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="form.email" placeholder="Email">
        </div>
        <button @click.prevent="forgot" class="btn btn-primary btn-block">Submit</button>
    </form>
</template>

<script>
    import User from "../apis/User";
    export default{
        name: 'Forgot',
        data(){
            return{
                form: {
                    email: '',
                },
            };
        },
        methods:{
            forgot(){
                User.forgot(this.form)
                    .then(res => {
                        alert(res.data.message);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
</script>
