import Api from "./Api";


export default {
    login(form){
        return Api().post("/login", form);
    },

    logout(){
        return Api().post("/logout");
    },

    forgot(form){
        return Api().post("/forgot-password", form);
    },

    handleReset(form, token){
        return Api().post("/reset-password/", form, token);
    },

    handleSubmit(form){
        return Api().post("/register", form);
    },

    auth() {
        return Api().get("/user");
    },
    created(){
        return Api().get("/create");
    }

};