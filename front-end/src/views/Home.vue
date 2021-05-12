<template>
  <!-- about the user /////-->

  <div class="container-fluid gedf-wrapper ">
    <div class="row">
      <div class="col-md-3">
        <div class="card bg-primary">
          <div class="card-body">
            <div class="h5" id="userName">@</div>
            <div class="h7" id="fullName">name</div>
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
      <!--- \\\\\\\create the post and sent backend-->
      <div class="col-md-6 gedf-main">
        <div class="card gedf-card">
          <div class="card-header bg-primary">
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <h4 class="text-white">Make a Post</h4>
              </li>
            </ul>
          </div>
          <div class="card-body bg-white">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="posts"
                role="tabpanel"
                aria-labelledby="posts-tab"
              >
                <div class="form-group">
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
                    <input
                      type="file"
                      class="custom-file-input"
                      id="customFile"
                      accept="image/*"
                      @change.prevent="addImage"
                    />
                    <label class="custom-file-label" for="customFile"
                      >Upload image</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-toolbar justify-content-between">
              <div class="btn-group">
                <button
                  type="submit"
                  class="btn btn-primary"
                  @click.prevent="sbmmitPost"
                >
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
          </div>
        </div>

        <!--- \\\\\\\ get the Posts from backend-->
        <div class="card gedf-card" >
          <div class="card-header bg-primary">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-between align-items-center">
                <div class="ml-2 text-white">
                  <div class="h5 m-0">@LeeCross</div>
                  <div class="h7 text-white">Miracles Lee Cross</div>
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
          <div class="card-body bg-white">
            <div class="text-muted h7 mb-2">
              
            </div>
            

            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
              sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste
              voluptates.
            </p>
          </div>
          <div class="card-footer bg-white">
            <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
            <a href="#" class="card-link"
              ><i class="fa fa-comment"></i> Comment</a
            >
          </div>
        </div>

        <!-- about company and sent feedback /////-->
      </div>
      <div class="col-md-3">
        <div class="card gedf-card">
          <div class="card-body bg-white">
            <img alt="company logo" src="@/assets/logo.png" />

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
            <email class="text-primary">Groupomain@hotmail.uk.co</email>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      image: null
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
