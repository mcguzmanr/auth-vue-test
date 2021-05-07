<template>
    <h2>Que sucede</h2>
</template>

<script>
import axios from 'axios'
export default {
    name:'test',
        created(){
        axios.get("http://diagnostic-marketing-api.test/api/all-users")
            .then(res => {
                console.log(res.data);
            })
    }
}
</script>

<style>

</style>