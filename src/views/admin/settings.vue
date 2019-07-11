<template>
  <div class="addmin py-5">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-lg-10">
          <h1 class="p-24">Settings</h1>
        </div>
        <div class="col-xs-12 col-lg-2">
          <button class="btn btn-green w-100"
            data-toggle="modal"
            data-target="#exampleModal"
          >Add User</button>
        </div>
        <div class="col-12">
          <ul class="nav nav-tabs ad_tabs" role="tablist">
            <li class="nav-item pr-3">
              <a
                class="nav-link active"
                href="#usermanagement"
                role="tab"
                data-toggle="tab"
              >User Management</a>
            </li>
            <li class="nav-item pr-3">
              <a class="nav-link" href="#settings" role="tab" data-toggle="tab">Settings</a>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <div class="ad_rectangle">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="usermanagement">
                <div class="row">
                  <div class="col-12">
                    <h5 class="g-17">User Management</h5>
                    <hr />
                  </div>
                  <div class="col-12">
                    <div class="table-responsive-md">
                      <table class="table table-striped ad_table">
                        <thead>
                          <th>FULL NAME</th>
                          <th>EMAIL ADDRESS</th>
                          <th>ROLE</th>
                          <th>STATUS</th>
                          <th>ACTION</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Marc Huff</td>
                            <td>vivien.feest@gmail.com</td>
                            <td>Administrator</td>
                            <td>Active</td>
                            <td>07:38AM</td>
                          </tr>
                          <tr>
                            <td>Marc Huff</td>
                            <td>vivien.feest@gmail.com</td>
                            <td>Administrator</td>
                            <td>Active</td>
                            <td>07:38AM</td>
                          </tr>
                          <tr>
                            <td>Marc Huff</td>
                            <td>vivien.feest@gmail.com</td>
                            <td>Administrator</td>
                            <td>Active</td>
                            <td>07:38AM</td>
                          </tr>
                          <tr>
                            <td>Marc Huff</td>
                            <td>vivien.feest@gmail.com</td>
                            <td>Administrator</td>
                            <td>Active</td>
                            <td>07:38AM</td>
                          </tr>
                          <tr>
                            <td>Marc Huff</td>
                            <td>vivien.feest@gmail.com</td>
                            <td>Administrator</td>
                            <td>Active</td>
                            <td>07:38AM</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="settings">
                <div class="row">
                  <div class="col-12">
                    <h5 class="g-17">Settings</h5>
                    <hr />
                  </div>
                  <div class="col-lg-8 col-xs-12">
                    <div class="row">
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Old Password</b>
                        <br />
                        <small class="l-12">Enter the current passord which you want to change</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Old Password</label>
                        <input type="text" class="lightform form-control" />
                      </div>

                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">New Password</b>
                        <br />
                        <small
                          class="l-12"
                        >Now enter a new password, Make sure this remains confidential</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">New Password</label>
                        <input type="text" class="lightform form-control" />
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Confirm password</b>
                        <br />
                        <small class="l-12">Confirm the new password</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Confirm password</label>
                        <input type="text" class="lightform form-control" />
                      </div>
                      <div class="col-lg-6 col-xs-12"></div>
                      <div class="col-lg-6 col-xs-12">
                        <button class="btn btn-green px-5">Submit Password</button>
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
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content p-5">
          <h1 class="p-20">Add New User</h1>
          <hr />
          <label for class="p-14">Full Name</label>
          <input type="text" class="lightform form-control mb-4" />
          <label for class="p-14">Email Address</label>
          <input type="email" class="lightform form-control mb-4" />
          <label for class="p-14">Role</label>
          <input type="text" class="lightform form-control mb-4" />
          <button class="btn btn-green px-4" data-dismiss="modal">Add User</button>
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