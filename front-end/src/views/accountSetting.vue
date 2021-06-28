<template>
  <div class="wrapper bg-white mt-sm-5 p-5">
    <h4 class="pb-4 border-bottom">Account settings</h4>

    <div class="py-2 ">
      <div class="row py-2">
        <div class="col-md-6">
          <label for="editFName">first name: <span  class="badge badge-secondary">{{ user.firstName }} </span> </label>
          <input
            id="editFName"
            type="text"
            class="bg-light form-control"
            placeholder="steve"
            v-model="editFName"
          />
        </div>
        <div class="col-md-6 pt-md-0 pt-3">
          <label for="editLName">last Name :  <span  class="badge badge-secondary">{{ user.lastName }} </span></label>
          <input
            id="editLName"
            type="tel"
            class="bg-light form-control"
            placeholder="simit"
            v-model="editLName"
          />
        </div>
      </div>

      <div class="row py-2">
        <div class="col-md-6">
          <label for="editEmail">Email Address</label>
          <input
            id="editEmail"
            type="text"
            class="bg-light form-control"
            placeholder="steve_@email.com"
            v-model="editEmail"
          />
        </div>
        <div class="col-md-6 pt-md-0 pt-3">
          <label for="editPassword">Password</label>
          <input
            id="editPassword"
            type="tel"
            class="bg-light form-control"
            placeholder="password"
            v-model="editPassword"
          />
        </div>
      </div>

      <div class=" border-bottom">
        <button
          class="btn btn-outline-primary  mr-3 btn-lg font-weight-bold"
          type="submit"
          v-on:click="submitEdit"
        >
          Save Changes
        </button>
        <button class="btn btn-outline-primary btn-lg font-weight-bold">
          <router-link to="/"> Cancel</router-link>
        </button>
      </div>
      <div class="d-sm-flex align-items-center pt-3" id="deactivate">
        <div>
          <b>Deactivate your account</b>
          <p>Details about your company account and password</p>
        </div>
        <div class="ml-auto">
          <button class="btn btn-danger" type="submit" v-on:click="deleteUser">
            Deactivate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "accountSetting",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("loginData")),
      editFName:"",
      editLName:"",
      editpassword: "",
      editEmail: "",
      
    };
  },
  methods: {
    submitEdit: function() {
      console.log("hi");
      const editData = {
        userID: this.user.userID,
        firstName:this.editFName,
        lastName:this.editLName,
        userEmail: this.editEmail,
        password: this.editPassword
      };
      console.log(editData);
      const editUrl = "http://localhost:3000/api/auth/accountSetting";
      fetch(editUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editData)
      })
        .then(async response => {
          console.log(response);
          const data = await response.json();
          if (response.ok) {
            console.log(data);
            alert("update success");
          } else {
            alert("invalid ");
          }
        })
        .catch(async error => {
          await console.log("Error:", error);
        });
    },
    deleteUser: function() {
      const userID = this.user.userID;
      const deleteURL = `http://localhost:3000/api/auth/accountSetting/${userID}`;
      console.log(userID);
      fetch(deleteURL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        
      })
        .then(async response => {
          const data = await response.json();
          if (response.ok) {
            alert("user delete");
            console.log(data);
            this.$router.push("/login");
          } else {
            alert("invalid ");
          }
        })
        .catch(async error => {
          await console.log("Error:", error);
        });
    }
  }
};
</script>