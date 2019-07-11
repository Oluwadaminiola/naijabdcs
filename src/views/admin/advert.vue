<template>
  <div class="addmin py-5">
    <div class="container">
      <div class="ad_rectangle">
        <div class="row">
          <div class="col-lg-10 col-xs-12">
            <h1 class="p-24">Advert Management</h1>
          </div>
          <div class="col-lg-2 col-xs-12 ">
            <button class="ml-auto btn btn-white w-100">Bulk Upload</button>
          </div>
          <div class="col-12">
            <hr />
          </div>
          <div class="col-12 mb-3">
            <b class="p-15">Home Page</b>
            <br />
            <small class="l-12">This controls all adverts on the home / landing page</small>
          </div>
          <div class="col-12 mb-4">
            <div class="ad_greyrec">
              <div class="row">
                <div class="col-lg-8 col-xs-12">
                  <div class="row">
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Upload Image</b>
                      <br />
                      <small class="l-12">
                        Image must be a .png or .jpeg file of
                        the dimensions 262px * 250px
                      </small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Upload Banner</label>
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="validatedCustomFile" />
                        <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                        
                      </div>
                    </div>

                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Target URL</b>
                      <br />
                      <small class="l-12">
                        This refers to the target website you
                        want potential users to visit when the link
                        is clicked
                      </small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Target URL</label>
                      <input type="text" class="lightform form-control" />
                    </div>
                    <div class="col-lg-6 col-xs-12"></div>
                    <div class="col-lg-6 col-xs-12">
                      <button class="btn btn-green px-5">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <b class="p-15">About Us Page</b>
            <br />
            <small class="l-12">This controls all adverts on the About us page</small>
          </div>
          <div class="col-12">
            <div class="ad_greyrec">
              <div class="row">
                <div class="col-lg-8 col-xs-12">
                  <div class="row">
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Upload Image</b>
                      <br />
                      <small class="l-12">
                        Image must be a .png or .jpeg file of
                        the dimensions 262px * 250px
                      </small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Upload Banner</label>
                      <input type="file" class="lightform form-control" />
                    </div>

                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Target URL</b>
                      <br />
                      <small class="l-12">
                        This refers to the target website you
                        want potential users to visit when the link
                        is clicked
                      </small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Target URL</label>
                      <input type="text" class="lightform form-control" />
                    </div>
                    <div class="col-lg-6 col-xs-12"></div>
                    <div class="col-lg-6 col-xs-12">
                      <button class="btn btn-green px-5">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>