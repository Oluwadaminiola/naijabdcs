<template>
  <div class="home">
    <nav class="navbar navbar-default navbar-light fixed-top navbar-expand-md">
      <div class="container">
        <a href="/" class="navbar-brand">
          <img src="../../public/img/toplogo.png" height="40px;" alt>
        </a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#naijanav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="naijanav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="#home" class="nav-link">Home</a>
            </li>
            <li class="nav-item mx-2">
              <a href="#home" class="nav-link">About Us</a>
            </li>
            <li class="nav-item mx-2">
              <a href="#home" class="nav-link">Historic Rates</a>
            </li>
            <li class="nav-item mx-2">
              <a href="#home" class="nav-link">News</a>
            </li>
            <li class="nav-item mx-2">
              <a href="#home" class="nav-link">Gallery</a>
            </li>
            <li class="nav-item mx-2">
              <a href="#home" class="nav-link">Contact Us</a>
            </li>
            <li class="nav-item mx-2">
              <form class="form-inline input-group">
                <div class="input-group-prepend px-1">
                  <img src="../../public/img/worldsvg.svg" alt>
                </div>
                <select name id class="form-control px-0 py-0" style="width: 20px; height: 30px;">
                  <option value>EN</option>
                  <option value>BR</option>
                </select>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section id="home">
      <div class="container"></div>
    </section>
    <div class="recTop">
      <div class="container py-4">
        
        <div class="sitemessage " >
          <b class="p-15 px-3">BTN/NGN = 60703.3594 </b>
          <b class="p-15 px-3">ETH/NGN = 49703.3594 <img src="../../public/img/arrow-up.svg" ></b>
          <b class="p-15 px-3">NGN/SDG = 203.35 <img src="../../public/img/arrow-down.svg" ></b>
          <b class="p-15 px-3">NGN/BBD = 180.1802 <img src="../../public/img/arrow-up.svg" ></b>
          <b class="p-15 px-3">NGN/USD = 361.0108 <img src="../../public/img/arrow-up.svg" ></b>
          <b class="p-15 px-3">NGN/BRL = 93.3707</b>
          <b class="p-15 px-3">NGN/BRL = 93.3707 <img src="../../public/img/arrow-down.svg" ></b>
        </div>
      </div>
    </div>
    <section id="about" class="mb-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-9 col-xs-12">
            <div class="row">
              <div class="col-lg-6 col-xs-12">
                <p class="p-19">
                  Bureau De Change Fx Rates By Location<br>
                  <small class="p-14">
                    <b style="color: #fa4f4f">*</b> buy / sell rate  values
                  </small>
                </p>
                
              </div>
              <div class="col-lg-6 col-xs-12 mb-3">
                <div class="d-flex">
                  <div class="date input-group">
                    <div class="input-group-prepend px-2">
                      <img src="../../public/img/calendar.svg" alt="">
                    </div>
                    <input type="date" class="date form-control">
                  </div>
                  <div class="pt-3 px-2">
                    <div class="border" style="width: 40px;"></div>
                  </div>
                  <div class="date input-group">
                    <div class="input-group-prepend px-2">
                      <img src="../../public/img/calendar.svg" alt="">
                    </div>
                    <input type="date" class="date form-control">
                  </div>
                </div>
              </div>
            </div>
            
            <div class="table-responsive-md">
              <table class="table red1">
                <thead>
                  <th>LOCATION</th>
                  <th>MORNING</th>
                  <th>MIDDAY</th>
                  <th>EVENING</th>
                  <th>CURRENCY</th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        id="checkbox-1"
                        class="checkbox-custom"
                        name="checkbox-1"
                        type="checkbox"
                      >
                      <label for="checkbox-1" class="checkbox-custom-label p-10"></label> Lagos
                    </td>
                    <td>774/400</td>
                    <td>774/400</td>
                    <td>774/400</td>
                    <td>
                      <img src="../../public/img/canada.svg" alt> CAD
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        id="checkbox-2"
                        class="checkbox-custom"
                        name="checkbox-2"
                        type="checkbox"
                      >
                      <label for="checkbox-2" class="checkbox-custom-label p-10"></label> Calabar
                    </td>
                    <td>774/400</td>
                    <td>774/400</td>
                    <td>774/400</td>
                    <td>
                      <img src="../../public/img/canada.svg" alt> USD
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        id="checkbox-3"
                        class="checkbox-custom"
                        name="checkbox-3"
                        type="checkbox"
                      >
                      <label for="checkbox-3" class="checkbox-custom-label p-10"></label> Abuja
                    </td>
                    <td>774/400</td>
                    <td>774/400</td>
                    <td>774/400</td>
                    <td>
                      <img src="../../public/img/gpb.svg" alt> GBP
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        id="checkbox-4"
                        class="checkbox-custom"
                        name="checkbox-4"
                        type="checkbox"
                      >
                      <label for="checkbox-4" class="checkbox-custom-label p-10"></label> Kano
                    </td>
                    <td>774/400</td>
                    <td>774/400</td>
                    <td>774/400</td>
                    <td>
                      <img src="../../public/img/euro.png" height="20px" alt> EURO
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        id="checkbox-5"
                        class="checkbox-custom"
                        name="checkbox-5"
                        type="checkbox"
                      >
                      <label for="checkbox-5" class="checkbox-custom-label p-10"></label> Port Harcourt
                    </td>
                    <td>774/400</td>
                    <td>774/400</td>
                    <td>774/400</td>
                    <td>
                      <img src="../../public/img/drh.svg" alt> DRH
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-lg-3 col-xs-12 px-5">
            <p class="p-20">Currency Converter</p>
            <div class="border mb-3">
              <div class>
                <select name id class>
                  <option value style="background-image: url(../../public/img/canada.svg);">GBP</option>
                  <option value style="background-image: url(../../public/img/canada.svg);">GBP</option>
                  <option value style="background-image: url(../../public/img/canada.svg);">GBP</option>
                  <option value style="background-image: url(../../public/img/canada.svg);">GBP</option>
                </select>
              </div>
              <div class="border-top">
                <select name id class>
                  <option value style="background-image: url(../../public/img/canada.svg);">GBP</option>
                  <option value style="background-image: url(../../public/img/canada.svg);">GBP</option>
                  <option value style="background-image: url(../../public/img/canada.svg);">GBP</option>
                  <option value style="background-image: url(../../public/img/canada.svg);">GBP</option>
                </select>
              </div>
            </div>
            <button class="btn btn-green w-100 mb-4">Convert Currency</button>

            <input type="text" class="grey form-control mb-3">
            <p class="p-14">
              <b style="color: #fa4f4f">*</b> The existing rate engine platforms is
              built sorely for display of FX rates,
              currency converter, adverts, historic rates,
              about us and contact.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="getapp">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 px-0 d-none d-md-block col-xs-12">
            <p class="text-right">
              <img src="../../public/img/mobile@2x.png" height="350px;" style="margin-top: -20px; margin-right: -7px;" alt="">
            </p>
          </div>
          <div class="col-lg-8 px-5 col-xs-12 py-5 google">
            <p class="w-36">
              Get the Naija bdc app
            </p>
            <p class="w-20">
              No deal Brexit chills sends pounds to a five month low vs euro
            </p>
            <a href="#">
              <img src="../../public/img/googleplay.png" height="50px;" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="exchange" class="mt-5">
      <div class="container py-3">
        <div class="row">
          <div class="col-lg-6 col-xs-12 mb-4">
            <p class="p-18">WESTERN UNION (RECEIVING)</p>
            <div class="table-responsive-md">
              <table class="table table-striped exchange yel">
                <thead>
                  <th>
                    NGN
                    <img src="../../public/img/gpb.svg" style="height:13px;" alt>
                  </th>
                  <th>
                    USD
                    <img src="../../public/img/gpb.svg" style="height:13px;" alt>
                  </th>
                  <th>
                    GSP
                    <img src="../../public/img/gpb.svg" style="height:13px;" alt>
                  </th>
                  <th>
                    EURO
                    <img src="../../public/img/gpb.svg" style="height:13px;" alt>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>08 Mar 2019</td>
                    <td>234</td>
                    <td>453</td>
                    <td>987</td>
                  </tr>
                  <tr>
                    <td>08 Mar 2019</td>
                    <td>234</td>
                    <td>453</td>
                    <td>987</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-lg-6 col-xs-12 mb-4">
            <p class="p-18">CBN EXCHANGE RATES</p>
            <div class="table-responsive-md">
              <table class="table table-striped exchange red">
                <thead>
                  <th>
                    NGN
                    <img src="../../public/img/gpb.svg" style="height:13px;" alt>
                  </th>
                  <th>
                    USD
                    <img src="../../public/img/gpb.svg" style="height:13px;" alt>
                  </th>
                  <th>
                    GSP
                    <img src="../../public/img/gpb.svg" style="height:13px;" alt>
                  </th>
                  <th>
                    EURO
                    <img src="../../public/img/gpb.svg" style="height:13px;" alt>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>08 Mar 2019</td>
                    <td>234</td>
                    <td>453</td>
                    <td>987</td>
                  </tr>
                  <tr>
                    <td>08 Mar 2019</td>
                    <td>234</td>
                    <td>453</td>
                    <td>987</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="signup">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-xs-12 py-4 px-5">
            <p class="p-17">Sign up for daily parallel market FX rates</p>
            <p class="w-14">We’ll not spam you. Promise!</p>
            <input type="email" class="g form-control mb-3" placeholder="yourmail@email.com">
            <button class="btn btn-green">Send Me Rates</button>
          </div>
          <div class="col-lg-4 col-xs-12 py-4 px-5">
            <p class="p-17">Contact Us</p>
            <div class="d-flex row">
              <div class="py-1 px-3">
                <i class="fas fa-map-marker-alt" style="color: #008752;font-size: 18px;"></i>
              </div>
              <div class="py-1 px-3 w-14">
                4, Oluwaleyimu Street, P.O.Box 15750,
                <br>Ikeja, Lagos, Nigeria.
              </div>
            </div>
            <div class="d-flex row">
              <div class="py-1 px-3">
                <i class="fas fa-phone-alt" style="color: #008752;font-size: 18px;"></i>
              </div>
              <div class="py-1 px-3 w-14">
                080-23202255, 081-3843 0600,
                <br>070-84009851, 080-34612197,
                <br>080-88981824
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xs-12 py-4 px-5">
            <p class="p-17">Follow Us On</p>
            <div class="d-flex row px-2">
              <a href="#" class="p-2">
                <i class="fab fa-facebook-f" style="color: #fff;"></i>
              </a>
              <a href="#" class="p-2">
                <i class="fab fa-twitter" style="color: #fff;"></i>
              </a>
              <a href="#" class="p-2">
                <i class="fab fa-google-plus-g" style="color: #fff;"></i>
              </a>
              <a href="#" class="p-2">
                <i class="fab fa-instagram" style="color: #fff;"></i>
              </a>
              <a href="#" class="p-2 w-14">
                <img src="../../public/img/youtube.svg" alt>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="footer pt-3">
      <div class="container">
        <div class="row">
          <div class="col col-xs-12">
            <p class="p-14">© 2019 All right reserved.</p>
          </div>
          <div class="ml-auto col col-xs-12">
            <p class="p-14 text-right">
              Powered by ABCON
              <img src="../../public/img/abcon.png" class="mx-2" style="height: 30px;">
              Technical Partners:
              <img src="../../public/img/sbsc.png" class="mx-2" style="height: 30px;">
              <img src="../../public/img/tech (2).jpg" class="mx-2" style="height: 30px;">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
