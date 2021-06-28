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
        <form id="getLogin" class="was-validated">
          <div class="input-group form-group">
            <label
              class=" control-label text-white  h5 font-weight-bold  "
              style="width:6rem"
              for="email"
            >
              Email</label
            >
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div>
            <input
              id="email"
              type="email"
              v-model="userEmail"
              class="form-control"
              placeholder="username"
              required
            />
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="input-group form-group">
            <label
              class=" control-label text-white  h5 font-weight-bold "
              style="width:6rem"
              for="password"
            >
              paaword</label
            >
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fas fa-key"></i> </span>
            </div>

            <input
              id="password"
              type="password"
              v-model="password"
              class="form-control"
              placeholder="password"
              required
            />
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="row align-items-center remember">
            <label> <input type="checkbox" />Remember Me</label>
          </div>
          <div class="form-group">
            <button
              id="loginSubmit"
              value="submit"
              type="submit"
              v-on:click="login"
              class="btn float-right login_btn"
            >
              login
            </button>
          </div>
        </form>
      </div>
      <div class="invalid-feedback">{{ errorMessage }}</div>
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
export default {
  name: "Login",
  data() {
    return {
      userEmail: "",
      password: "",
      
    };
  },
  methods: {
    login: function(e) {
      e.preventDefault();
      const Url = "http://localhost:3000/api/auth/login";

      const loginData = {
        userEmail: this.userEmail,
        password: this.password
      };
      //sent api request
      fetch(Url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      })
        .then(async response => {
          const data = await response.json();
          if (response.ok) {
            console.log("hi");
            localStorage.setItem("loginData", JSON.stringify(data));
            this.$router.push("/");
          }
          else {
            alert("invalid email or password")
          }
        })
        .catch(async error => {
          await console.error("Error:", error);
        });
    }
  }
};
</script>
