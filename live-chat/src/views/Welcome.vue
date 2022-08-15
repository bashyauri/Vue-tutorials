<template>
    <div class="welcome container">
        <p>Welcome to live chat</p>
        <SignUpForm />
    </div>
</template>

<script>
import SignupForm from "./components/SignupForm"
export default {
    components: { SignupForm }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}
</style>