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
                 <label class=" control-label text-white h5 font-weight-bold " style="width:95px" for="firstName">	firstName</label>
                <input type="text" class="form-control"
                id="firstName"
                 placeholder="firstName" 
                 v-model="firstName"
                 required
                 >
                 
              </div>

              <div class="input-group form-group">
                  <label class=" control-label text-white  h5 font-weight-bold " style="width:95px" for="lastName">lastName</label>
                <input type="text" class="form-control" 
                id="lastName"
                placeholder="lastName"
                 v-model="lastName"
                 required
                 >
                  
              </div>
              <div class="input-group form-group">
                   <label class=" control-label text-white  h5 font-weight-bold " style="width:100px" for="userName">	userName</label>
                <div class="input-group-prepend">
                 <span class="input-group-text"><i class="fas fa-user"></i> </span>
                </div>
                
                <input type="text" class="form-control" 
                id="userName"
                placeholder="username"
                 v-model="userName"
                 required
                 >
                 
              </div>
              <div class="input-group form-group">
                  <label class=" control-label    text-white h5 font-weight-bold " style="width:6rem" for="userPassword">	paaword</label>
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-key"></i> </span>
                </div>

                <input type="password" class="form-control"
                id="userPassword"
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
           .then(async response => {
          const data = await response.json();
          if (response.ok) {
            alert(data.message)
            this.$router.push("/login");
          }
          else {
            alert("invalid email or password")
          }
        })
          .catch((error) => {
            console.log('Error:', error);
          })
      
    
      
      
    
}
}
}
</script>
