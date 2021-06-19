<template>
<div class="frontpage">
    
      <div class="d-flex justify-content-center ">
        <div class="card logpage"> 
          <div class="card-header">
            <h3>Sign In</h3>
            <div class="d-flex justify-content-end social_icon">
            <img alt="Vue logo" src="@/assets/logo.png" class="logophoto" >
            </div>
          </div>
          <div class="card-body">
            <form
            id="sbmmitSignup"
              @submit="signupSubmit"
              class="was-validated"
            >

              <div class="input-group form-group"> 
                <input type="text" class="form-control"
                 placeholder="firstName" 
                 v-model="firstName"
                 required
                 >
                 
              </div>

              <div class="input-group form-group">
                <input type="text" class="form-control" 
                placeholder="lastName"
                 v-model="lastName"
                 required
                 >
                  
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" class="form-control" 
                placeholder="username"
                 v-model="userName"
                 required
                 >
                 
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input type="password" class="form-control"
                 placeholder="password"
                  v-model="password"
                  required
                  >
                 
              </div>
              
              <div class="form-group">
                <input type="submit"    
                value="submit"
                class="btn float-right login_btn">
               
              </div>
             
            </form>
          </div>
          
        </div>
      </div>
    </div>

</template>

<script>
export default {
    name:"Signup",
    data() {
    return {
     
     firstName : "",
      lastName: "",
       userEmail:"",
       password:""
    };
  },
    methods:{
signupSubmit:function(){
   this.errors = [];
   const apiUrl ='http://localhost:3000/api/auth/signup'
  const signupDetails={
    firstName:this.firstName,
    lastName:this.lastName,
    userEmail:this.userName,
    password:this.password
  }
  
  console.log(signupDetails);
   fetch(apiUrl, {
     
            method: 'POST', 
            headers: {
                    'Content-Type': 'application/json',
                      },
             body: JSON.stringify(signupDetails),
          })
          .then(response => response.json())
          
          .then(signupDetails => {
          
            alert(signupDetails.message)
            this.$router.push('/login')
            })
          .catch((error) => {
            console.log('Error:', error);
          })
      
    
      
      
    
}
}
}
</script>
