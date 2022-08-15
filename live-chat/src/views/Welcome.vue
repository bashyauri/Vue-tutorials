<template>
    <div class="welcome container">
        <p>Welcome to live chat</p>
        <div v-if="showLoginForm">
            <h2>Login</h2>
            <login-form />
            <p>No account yet? <span @click="showLoginForm = false"> Signup</span> instead</p>

        </div>
        <div v-else>
            <SignupForm />
            <p>Already registered? <span @click="showLoginForm = true">Login</span> instead</p>
        </div>


    </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue"
import { ref } from "vue";
import LoginForm from "../components/LoginForm.vue";
export default {
    components: { SignupForm, LoginForm },
    setup() {
        const showLoginForm = ref(true)
        return { showLoginForm }
    }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}

/* form styles */
.welcome form {
    width: 300px;
    margin: 20px auto;
}

.welcome label {
    display: block;
    margin: 20px 0 10px;
}

.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}

.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

.welcome button {
    margin: 20px auto;
}
</style>