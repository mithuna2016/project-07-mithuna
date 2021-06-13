
<template>
  <!--- \\\\\\\ get the Posts from backend-->
  <div class="card gedf-card">
    <div class="card-header bg-primary">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-between align-items-center">
          <div class="ml-2 text-white">
            <div class="h5 m-0">@{{ user.firstName }}</div>
            <div class="h7 text-white">
              {{ user.firstName }} {{ user.lastName }}
            </div>
          </div>
        </div>
        <div>
          <div class="dropdown bg-white">
            <button
              class="btn btn-link  "
              type="button"
              id="gedf-drop1"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-edit "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body bg-white" v-for="po in post" :key="po.id">
      <div class="text-muted h7 mb-2"></div>

      <p class="card-text">
        {{ po.message }}
      </p>
      <div>
        <img :src="url + po.image" alt="Not Found" width="200" height="100" />
      </div>
    </div>
    <div class="card-footer bg-white">
      <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
      <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
    </div>
  </div>
</template>
      
      <script>
export default {
  name: "getpost",
  data() {
    return {
      url: "http://localhost:3000/",
      post: "",
      user: JSON.parse(localStorage.getItem("loginData"))
    };
  },
  beforeMount() {
    this.getPo();
  },

  methods: {
    async getPo() {
      const headers = new Headers();
      headers.append("token", this.user.token);
      headers.append("userID", this.user.userID);
      const Url = "http://localhost:3000/api/post";
      await fetch(Url,{
        method: "GET",
          headers,
          mode: "cors",
          cache: "default"
      })
        .then(response => response.json())
        .then(data => (this.post = data))
        .catch(error => {
          console.log("Error:", error);
        });

      console.log(this.post);
    }
  }
};
</script>
