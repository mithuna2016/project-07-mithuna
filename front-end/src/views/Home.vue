<template>
  <!-- about the user /////-->

  <div class="container-fluid gedf-wrapper ">
    <div class="row">
      <div class="col-md-3">
        <div class="card bg-primary">
          <div class="card-body">
            <div class="h4 text-white" id="userName">@</div>
            <div class="h4 text-white " id="fullName">{{ user.firstName }} {{ user.lastName }}</div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <i class=" text-warning fas fa-users fa-3x"></i>
              <div class="h5">300</div>
            </li>
            <li class="list-group-item">
              <i class="text-warning far fa-calendar-alt fa-3x"></i>
              <div class="h5">new year party</div>
            </li>
            <li class="list-group-item">
              <i class=" text-warning  fas fa-briefcase fa-3x "></i>
              <div class="h5"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 gedf-main">
        <getpost />

        <!-- about company and sent feedback /////-->
      </div>
      <div class="col-md-3">
        <div class="card gedf-card">
          <div class="card-body bg-white">
            <img alt="company logo" src="@/assets/logo.png" class="logoimg" />

            <p class="card-text">
              Our company, a multinatioal retail corporation, is expandind by
              the day. We've grown by 100% over the last three years,and we now
              employ over 600 peopele
            </p>
            <h6 class="card-subtitle mb-2 text-dark">
              Help us make Groupomain better
            </h6>
            <p class="card-text">
              The people who make Groupomain want your feedback. Email us what
              works well and what we could do better.
            </p>
            <email class=" h6 text-dark">Groupomain@hotmail.uk.co</email>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import getpost from "@/components/getpost.vue";
export default {
  components: {
    getpost
  },
  name: "Home",
  data() {
    return {
      image: null,
      user: JSON.parse(localStorage.getItem("loginData"))
    };
  },

  methods: {
    sbmmitPost() {
      console.log(this.message, this.image);
      this.$refs.fileInput.click();
    },
    addImage(event) {
      const files = event.target.files;
      //let filename = files[0].name
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    }
  }
};
</script>
