<template>
  <div class="frontpage">
    <div class="card logpage">
      <div class="card-header">
        <h3>Sign In</h3>
        <div class="d-flex justify-content-end social_icon">
          <img src="@/assets/logo.png" alt="logo" class="logophoto" />
        </div>
      </div>
      <div class="card-body">
        <form id="getLogin">
          <div class="input-group form-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div>
            <input
              type="text"
              v-model="userEmail"
              class="form-control"
              placeholder="username"
            />
          </div>
          <div class="input-group form-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-key"></i></span>
            </div>
            <input
              type="password"
              v-model="password"
              class="form-control"
              placeholder="password"
            />
          </div>
          <div class="row align-items-center remember">
            <input type="checkbox" />Remember Me
          </div>
          <div class="form-group">
            <input
              type="submit"
              value="Login"
              class="btn float-right login_btn"
              v-on:click="loginSubmit()"
            />
          </div>
        </form>
      </div>
      <div class="card-footer">
        <div class="d-flex justify-content-center links color">
          Don't have an account
          <router-link to="/signup">signup</router-link>
        </div>
        <div class="d-flex justify-content-center">
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router" 

import axios from "axios"
export default { 
  name: "Login",
  methods: {
    login : (e)=>{
       e.preventDefault() 
       let login=() =>{
         let loginData ={
           userEamil:this.userEamil,
           password:this.password
         }
         axios.post("/signup",loginData)
         .then((Response) =>{
           console.log("LOGGED IN");
           router.push("/")
         })
         .catch((errors) => {
                            console.log("Cannot login")
                        })

       }
        login()
    }
    
    
  } 
};
</script>
loginSubmit:function() {
      var loginData={
 userName : this.userName,
 password: this.password
      }
      
    
      console.log(loginData);
    }
    