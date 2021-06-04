
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
<form action="/" method="post" enctype="multipart/form-data">
 <input
                      type="file"
                      class="custom-file-input"
                      id="customFile"
                      accept="image/*"
                      @change.prevent="addImage"
                      name="image"
                    />
</form>

                    
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
      
     
</template>

<script>
export default {
    name:"createpost",
data() {
    return {
      image: null
    };
  },

  methods: {
    sbmmitPost() {
      const post ={
message:this.message,
      image:this.$refs.fileInput.click()
      }
     
      getdata(post)
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
    },
     makeRequest(data) {
  
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    const url ="http://localhost:8080/api/post";
    request.open('POST', url );
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 201) {
          resolve(JSON.parse(request.response));
        
        } else {
          reject(JSON.parse(request.response));
        }
      }
    };
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data)); 
    
  });
 
},
  async getdata(data){
 
  try{
    const requestPromise = makeRequest(data);
    
    const response = await requestPromise;
    console.log(response);
   
}catch(errorResponse){
  }
}
    
  }

}
</script>
