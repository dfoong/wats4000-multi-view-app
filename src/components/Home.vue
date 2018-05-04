<template>
  <div class="home">
    <div v-show="showForm" class="form-container">
      <h1>Join the Web Developers Club!</h1>
      <p>Sign up to access our special, secret page. Just create an account and answer a brief survey.</p>

      <p v-show="showError" class="error"> There are errors in the form data you have submitted. Sorry, please doublecheck your information. All fields are required.</p> 

      <form v-on:submit.prevent="validateForm">

        <p><label for="username">
          <input type="text" id="username" v-model="username" size="32" placeholder="Enter your username.">
          </label></p>

        <p><label for="email">
          <input type="email" id="email" v-model="email" size="32" placeholder="youremail@example.com">
          </label></p>
        
        <p><label for="password">
          <input type="password" id="password" v-model="password" size="32" placeholder="Enter your password here.">
          </label></p>

        <p><label for="passwordVerify">
          <input type="password" id="passwordVerify" v-model="passwordVerify" size="32" placeholder="Enter your password again for verification purposes.">
          </label></p>

        <p><label for="food">
          <input type="text" id="food" v-model="food" size="40" placeholder="What would your last meal on earth be?">
          </label></p>  
        
        <p><input type="submit" value="Submit"></p>
      </form>
    </div>
    <div v-show="!showForm" class="success-message">
      <h1>Thank you for signing up!</h1>
      <p>Please take our new member survey. <router-link to="Survey">Click here</router-link></p><!-- TODO: Link "Click here" to the survey page. -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      passwordVerify: '',
      food: '',
      showForm: true,
      showError: false
    }
  },
  methods: {
    validateForm: function () {
      if ((this.username != '') && 
      (this.food != '') &&
      (this.email != '') &&
      (this.password === this.passwordVerify)){
console.log('Form is valid.');
this.showForm = false;
} else {
  console.log('Form is NOT valid.');
  this.showError = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
