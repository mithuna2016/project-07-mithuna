
<template>
  <!--- \\\\\\\create the post and sent backend-->

  <div class="card gedf-card">
    <div class="card-header bg-primary">
      <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <h4 class="text-white">Make a Post</h4>
        </li>
      </ul>
    </div>
    <div class="card-body bg-white">
      <!--- \\\\\\\form start here-->
      <form id="sbmmit" @submit="sbmmitPost" method="post">
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="posts"
            role="tabpanel"
            aria-labelledby="posts-tab"
          >
            <div class="form-group">
              <!--- \\\\\\\post content here-->
              <label class="sr-only" for="message">post</label>
              <input
                class="form-control"
                id="message"
                placeholder="What are you thinking?"
                type="text"
                v-model="message"
              />
            </div>
            <div class="form-group">
              <div class="custom-file">
                <!--- \\\\\\\upload file-->
                <input
                  type="file"
                  class="custom-file-input"
                  id="customFile"
                  accept="image/*"
                  @change.prevent="addImage"
                  name="image"
                />

                <label class="custom-file-label" for="customFile">
                  Upload image</label
                >
              </div>
            </div>
          </div>
        </div>
        <!--- \\\\\\\submit button-->
        <div class="btn-toolbar justify-content-between">
          <div class="btn-group">
            <button value="submit" type="submit" class="btn btn-primary">
              share
            </button>
          </div>
          <div class="btn-group">
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn btn-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-globe"></i>
            </button>

            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="btnGroupDrop1"
            >
              <a class="dropdown-item" href="#"
                ><i class="fa fa-globe"></i> Public</a
              >
              <a class="dropdown-item" href="#"
                ><i class="fa fa-users"></i> Friends</a
              >
              <a class="dropdown-item" href="#"
                ><i class="fa fa-user"></i> Just me</a
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "createpost",
  data() {
    return {
      message: "",
      image: null,
      user: JSON.parse(localStorage.getItem("loginData"))
    };
  },

  methods: {
    //submit function
    sbmmitPost: function(e) {
      e.preventDefault();

      const apiUrl = "http://localhost:3000/api/post";
      const formData = new FormData();
      const fileField = document.querySelector('input[type="file"]');
      const headers = new Headers();
      headers.append("token", this.user.token);
      headers.append("userID", this.user.userID);
      formData.append("message", this.message);
      formData.append("image", fileField.files[0]);
      formData.append("userID", this.user.userID);
      

      fetch(apiUrl, {
        method: "POST",
        headers,
        body: formData
      })
        .then(response => response.json())
        .then(result => {
          console.log("Success:", result);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    },
    addImage: function(event) {
      // Reference to the DOM input element
      const files = event.target.files;
      // create a new FileReader to read this image
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      // read file as a data url
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    }
  }
};
</script>
