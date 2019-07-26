<template>
  <div class="addmin py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="p-24">Bdc Operators</h1>
        </div>

        <div class="col-12">
          <ul class="nav nav-tabs ad_tabs" role="tablist">
            <li class="nav-item pr-3">
              <a
                class="nav-link active pb-3"
                href="#alloperators"
                role="tab"
                data-toggle="tab"
              >All Bdc Operators</a>
            </li>
            <li class="nav-item pr-3">
              <a
                class="nav-link pb-3"
                href="#addoperators"
                role="tab"
                data-toggle="tab"
              >Add Bdc Operators</a>
            </li>
            <li class="ml-auto">
              <div class="input-group operator">
                  <div class="input-group-prepend px-2 pt-1"><i class="icon ion-ios-search"></i></div>
                  <input type="text" class="form-control" placeholder="Search Operators">
              </div>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <div class="ad_rectangle">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="alloperators">
                <div class="table-responsive-md">
                  <table class="table table-striped ad_table">
                    <thead>
                      <th>FULL NAME</th>
                      <th>TYPE OF INSTITUTION</th>
                      <th>ADDRESS</th>
                      <th>PHONE</th>
                      <th>DATE REGISTERED</th>
                      <th>ACTION</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Marc Huff</td>
                        <td>Bureau de change</td>
                        <td>168 Ova Centers</td>
                        <td>179-729-1044</td>
                        <td>30 Dec 2019</td>
                        <td>
                          View &nbsp;&nbsp;
                          <a style="color: rgba(37, 56, 88, 0.3);font-size: 18px;"
                            class="dropdown-toggle px-3"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          ><i class="icon ion-md-more"></i></a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Marc Huff</td>
                        <td>Bureau de change</td>
                        <td>168 Ova Centers</td>
                        <td>179-729-1044</td>
                        <td>30 Dec 2019</td>
                        <td>
                          View &nbsp;&nbsp;
                          <a style="color: rgba(37, 56, 88, 0.3);font-size: 18px;"
                            class="dropdown-toggle px-3"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          ><i class="icon ion-md-more"></i></a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Marc Huff</td>
                        <td>Bureau de change</td>
                        <td>168 Ova Centers</td>
                        <td>179-729-1044</td>
                        <td>30 Dec 2019</td>
                        <td>
                          View &nbsp;&nbsp;
                          <a style="color: rgba(37, 56, 88, 0.3);font-size: 18px;"
                            class="dropdown-toggle px-3"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          ><i class="icon ion-md-more"></i></a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div role="tabpanel" class="tab-pane" id="addoperators">
                <div class="row">
                  <div class="col-lg-10 col-xs-12 mb-2">
                    <h1 class="p-24">Add Bdc Operator</h1>
                  </div>
                  <div class="col-xs-12 col-lg-2 mb-2">
                    <button class="btn btn-white w-100">Bulk Upload</button>
                  </div>
                  <div class="col-12">
                    <hr />
                  </div>
                  <div class="col-lg-8 col-xs-12">
                    <div class="row">
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Full Name</b>
                        <br />
                        <small class="l-12">First and Last name of BDC operator</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Full Name</label>
                        <input type="text" class="lightform form-control" placeholder="John Doe" />
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Type of Institution</b>
                        <br />
                        <small class="l-12">Institution type od BDC operator</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Type of Institution</label>
                        <select name id class="lightform form-control custom-select">
                          <option value>Bureau de change</option>
                          <option value>Bank</option>
                          <option value>Bureau de change</option>
                        </select>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Date Registered</b>
                        <br />
                        <small class="l-12">Date of registration</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Date</label>
                        <input
                          type="date"
                          class="lightform form-control"
                          placeholder="mm / dd / yyyy"
                        />
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Address</b>
                        <br />
                        <small class="l-12">Address , city and country of opertion</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Address</label>
                        <input
                          type="text"
                          class="lightform form-control mb-3"
                          placeholder="47 Ignacio Ramp Apt. 631"
                        />
                        <label for class="pl-14">City</label>
                        <input
                          type="text"
                          class="lightform form-control mb-3"
                          placeholder="Portharcourt"
                        />
                        <label for class="pl-14">Country</label>
                        <input
                          type="text"
                          class="lightform form-control mb-3"
                          placeholder="Nigeria"
                        />
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Telephone</b>
                        <br />
                        <small class="l-12">Current phone number of Bdc operator</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Phone Number</label>
                        <div class="input-group lightform">
                          <div class="input-group-prepend pt-2 p-14 pl-3">+234</div>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Fax</b>
                        <br />
                        <small class="l-12">Fax of Bdc operator if any</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Fax</label>
                        <input type="text" class="lightform form-control" />
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Web site</b>
                        <br />
                        <small class="l-12">Web address of Bdc operator</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Web site</label>
                        <input type="text" class="lightform form-control" />
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-5">
                        <b class="p-15">Ownership</b>
                        <br />
                        <small class="l-12">Select ownership type</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-5">
                        <label for class="pl-14">Ownership Type</label>
                        <select name id class="lightform form-control custom-select">
                          <option value>Domestic</option>
                          <option value>Corporate</option>
                        </select>
                      </div>
                      <div class="col-lg-6 col-xs-12"></div>
                      <div class="col-lg-6 col-xs-12">
                        <button class="btn btn-green px-5">Submit Rate</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row">
                <div class="col-12">
                    <h1 class="p-24">Add Bdc Operator</h1>
                </div>
                <div class="col-lg-8 col-xs-12">
                    <div class="row">
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Full Name</b><br>
                            <small class="l-12">First and Last name of BDC operator</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Full Name</label>
                            <input type="text" class="lightform form-control" placeholder="John Doe">
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Type of Institution</b><br>
                            <small class="l-12">Institution type od BDC operator</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Type of Institution</label>
                            <select name="" id="" class="lightform form-control custom-select">
                                <option value="">Bureau de change</option>
                                <option value="">Bank</option>
                                <option value="">Bureau de change</option>
                            </select>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Date Registered</b><br>
                            <small class="l-12">Date of registration </small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Date</label>
                            <input type="date" class="lightform form-control" placeholder="mm / dd / yyyy">
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Address</b><br>
                            <small class="l-12">Address , city and country of opertion</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Address</label>
                            <input type="text" class="lightform form-control mb-3" placeholder="47 Ignacio Ramp Apt. 631">
                            <label for="" class="pl-14">City</label>
                            <input type="text" class="lightform form-control mb-3" placeholder="Portharcourt">
                            <label for="" class="pl-14">Country</label>
                            <input type="text" class="lightform form-control mb-3" placeholder="Nigeria">
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Telephone</b><br>
                            <small class="l-12">Current phone number of Bdc operator</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Phone Number</label>
                            <div class="input-group lightform">
                                <div class="input-group-prepend pt-2 p-14 pl-3">
                                    +234
                                </div>
                                <input type="text" class="form-control">
                            </div>
                            
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Fax</b><br>
                            <small class="l-12">Fax of Bdc operator if any</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Fax</label>
                            <input type="text" class="lightform form-control">
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Web site</b><br>
                            <small class="l-12">Web address of Bdc operator</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Web site</label>
                            <input type="text" class="lightform form-control">
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-5">
                            <b class="p-15">Ownership</b><br>
                            <small class="l-12">Select ownership type</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-5">
                            <label for="" class="pl-14">Ownership Type</label>
                            <select name="" id="" class="lightform form-control custom-select">
                                <option value="">Domestic</option>
                                <option value="">Corporate</option>
                            </select>
                        </div>
                        <div class="col-lg-6 col-xs-12"></div>
                        <div class="col-lg-6 col-xs-12">
                            <button class="btn btn-green px-5">
                                Submit Rate
                            </button>
                        </div>
                    </div>
                </div>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>