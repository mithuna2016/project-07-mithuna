
<template>
  <!--- \\\\\\\ get the Posts from backend-->
  <div class="card gedf-card">
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
              <button value="submit" type="submit" class=" btn btn-primary btn-lg font-weight-bold ">
                share
              </button>
            </div>
           
          </div>
        </form>
      </div>
    </div>
   
    <div class="card-header  bg-primary">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-between align-items-center">
          <div class="ml-3 text-white">
            <div class="h4 text-white m-0">@</div>
            <div class="h7 text-white"></div>
          </div>
        </div>
      </div>
    </div>
     
    <div v-for="po in post" :key="po.id">
      <div class="card-body bg-white  ">
        <div v-if="po.image!='undefined'">
          <img  :src="url + po.image" alt="Not Found" class="card-img-top" />
        </div>
        <div class="text-muted h7 mb-2">
          {{ po.message }}
        </div>
         <div class=" bg-white mb-2">
        <button :disabled="po.isRead" @click="readPost(po.postID)" class="btn btn-primary">Read</button>
      </div>
      <div class="card-footer bg-white "></div>
      </div>

      
     
    </div>
   
  </div>
</template>
      
      <script>
export default {
  name: "getpost",
  data() {
    return {
      url: "http://localhost:3000/images/",
      post: "",
      readPostData: "",
      user: JSON.parse(localStorage.getItem("loginData")),
      userID: "",
      postID: "",
      message: "",
      image: null
    };
  },
  beforeMount() {
    this.getReadPost();
    this.getPo();
  },

  methods: {
    async getPo() {
      const headers = new Headers();
      console.log(this.user);
      headers.append("token", this.user.token);
      headers.append("userID", this.user.userID);
      const Url = "http://localhost:3000/api/post";
      await fetch(Url, {
        method: "GET",
        headers,
        mode: "cors",
        cache: "default"
      })
        .then(async response => {
          this.post = await response.json();
        })
        .catch(error => {
          console.log("Error:", error);
        });
      this.post.map(po => {
        console.log(po);
        for (let i = 0; i < this.readPostData.length; i++) {
          if (po.postID === this.readPostData[i].postID) {
            po.isRead = true;
            break;
          } else {
            po.isRead = false;
          }
        }
      });
      console.log(this.post);
    },
    async getReadPost() {
      const Url = `http://localhost:3000/api/post/read/${this.user.userID}`;
      await fetch(Url, {
        method: "GET",
        mode: "cors",
        cache: "default"
      })
        .then(async response => {
          const data = await response.json();
          this.readPostData = data;
        })

        .catch(error => {
          console.log("Error:", error);
        });
      console.log(this.readPostData);
    },
    readPost: function(postID) {
      let readData = {
        userID: this.user.userID,
        postID: postID
      };
      console.log(readData);
      const readUrl = "http://localhost:3000/api/post/read";

      fetch(readUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(readData)
      })
        .then(async response => {
          const data =  await response.json();
          console.log(data);
          var foundIndex = this.post.findIndex(x => x.postID == postID);
          this.post[foundIndex].isRead = true;
          console.log(this.post);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    },
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
        .then(async response => {
          const data =  await response.json();
          this.getReadPost();
          this.getPo();
          alert(data.message);
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
