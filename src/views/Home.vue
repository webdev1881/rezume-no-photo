<template>
  <div class="container">
    <div class="left">
      <!-- <div class="photo">
        <img src="@/assets/my_photo.jpg" alt="" class="img" />
        https://github.com/webdev1881/rezume-no-photo.git
      </div> -->

      <div class="name">
        <div class="fname">Litvinovsky Volodymyr</div>
        <div class="prof">Frontend Developer</div>
      </div>

      <div class="info">
        <div class="title">
          <div class="img"></div>
          <div class="left_title">General Info</div>
        </div>
        <div class="content">
          <div class="personal">
            <div class="inf">
              Adress:
              <div class="val">Ukrain, Kiyv</div>
            </div>

            <div class="inf">
              English level:
              <div class="val">Intermediate</div>
            </div>
            <div class="inf">
              Experience:
              <div class="val">6 years</div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact">
        <div class="title">
          <div class="img"></div>
          <div class="left_title">For Contact</div>
        </div>

        <div class="content">
          <div class="cont_items">
            <!-- <div class="cont_item">
              <div class="img"></div>
              <span>Kiyv Nekhody 5, 03815</span>
            </div> -->
            <div class="cont_item">
              <div class="img2"></div>
              <span>+38 (063) 545-74-50</span>
            </div>
            <div class="cont_item">
              <div class="img3"></div>
              <span>litvinovskiyv@gmail.com</span>
            </div>
          </div>
        </div>

        <div class="social"></div>
      </div>

      <div class="social">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%BB%D0%B8%D1%82%D0%B2%D0%B8%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-695b01308/"
          ><img
            src="@/assets/l5.png"
            style="
              width: 41px;
              height: 41px;
              margin-top: 3px;
              background-color: white;
              border-radius: 3px;
            "
        /></a>

        <a target="_blank" href="https://www.facebook.com/litvinovskiyv/"
          ><div class="img"></div
        ></a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%BB%D0%B8%D1%82%D0%B2%D0%B8%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-695b01308/"
          ><div class="img2"></div
        ></a>

        <!-- <div class="img"></div>
        <div class="img2"></div> -->
        <!-- <div class="img3"></div> -->
      </div>
    </div>

    <div class="right">
      <div class="leng_wrap">
        <div class="lang">
          <router-link class="en" to="/">EN</router-link>
          <div class="separ">|</div>
          <router-link class="ua" to="/ua">UA</router-link>
        </div>
      </div>

      <div class="edu">
        <div class="title">Experience</div>
        <div class="college">
          <div class="year">2015 - 2017</div>
          <div class="name">Y-Contract</div>
          <div class="func">
            Design a responsive layout for the website, optimization and
            expansion of code functionality, Single Page Applications
          </div>
        </div>
        <div class="college">
          <div class="year">2017 - 2020</div>
          <div class="name">Invest-Сom</div>
          <div class="func">
            Development applications and services. Participate in the
            development of the CRM system
          </div>
        </div>
        <div class="college">
          <div class="year">2020 - 2024</div>
          <div class="name">RGC (Regional gas company)</div>
          <div class="func">
            Creating websites for marketplaces, online stores, CRM systems, and
            calculator websites.
          </div>
        </div>
      </div>

      <div class="skill">
        <div class="title">Programming Skill</div>
        <div class="skills">
          <div class="item">
            <div class="title">Javascript</div>
            <div class="line">
              <div class="progress" style="width: 95%"></div>
            </div>
            <div class="pers">95%</div>
          </div>

          <div class="item">
            <div class="title">Vue.js (VueEx)</div>
            <div class="line">
              <div class="progress" style="width: 90%"></div>
            </div>
            <div class="pers">90%</div>
          </div>

          <div class="item">
            <div class="title">Nuxt.js (SSR, SEO)</div>
            <div class="line">
              <div class="progress" style="width: 85%"></div>
            </div>
            <div class="pers">85%</div>
          </div>

          <!-- <div class="item">
            <div class="title">Nuxt.js (SSR, SEO)</div>
            <div class="line">
              <div class="progress" style="width: 90%;"></div>
            </div>
            <div class="pers">90%</div>
          </div> -->

          <div class="item">
            <div class="title">UI/UX (Element, BS)</div>
            <div class="line">
              <div class="progress" style="width: 95%"></div>
            </div>
            <div class="pers">95%</div>
          </div>

          <div class="item">
            <div class="title">React.js</div>
            <div class="line">
              <div class="progress" style="width: 75%"></div>
            </div>
            <div class="pers">75%</div>
          </div>
        </div>
      </div>

      <div class="experiance">
        <div class="title">Tools</div>
        <div class="ex_wrap">
          <ul>
            <li>Type Script</li>
            <li>Chart.js</li>
            <li>Webpack</li>
            <li>JQuery</li>
            <li>SASS/SCSS</li>
          </ul>
          <ul>
            <li>HTML5, CSS3</li>
            <li>Gulp (Pug, Style)</li>
            <li>Tailwind</li>
            <li>Git Lab</li>
            <li>Figma</li>
          </ul>
          <ul>
            <li>Firebase</li>
            <li>RESTful API</li>
            <li>GraphQL</li>
            <li>Swagger</li>
            <li>Redmine</li>
          </ul>
        </div>
      </div>

      <div class="experiance2">
        <div class="title">Additional skills</div>
        <ul>
          <li>Сonducting conferences</li>
          <li>Сode reviews</li>
          <li>Process Optimization</li>
          <li>Application testing</li>
          <!-- <li>Сonducting interviews</li> -->
        </ul>
      </div>

      <div class="portfolio">
        <div class="title">Приклади портфоліо</div>
        <li>
          <a target="_blank" href="https://ergo-ua.com/ua/products/tvs/"
            >Телевізори та аксесуари</a
          >
        </li>

        <!-- <li><a target="_blank" href="https://yug-gfk.firebaseapp.com/">Інформаційна панель графіків TV (пароль 0099)</a></li>    -->

        <li>
          <a
            target="_blank"
            href="http://cabinet.marketplace.ent.ukrgas.com.ua/login?redirect=%2Fdashboard"
            >Дашборд маркетплейс (waiting production)</a
          >
          <router-link class="ex1" :to="{ name: 'ex1' }" target="_blank"
            >Example 1</router-link
          >
          <router-link class="ex1" :to="{ name: 'ex2' }" target="_blank"
            >Example 2</router-link
          >
          <router-link class="ex1" :to="{ name: 'ex3' }" target="_blank"
            >Example 3</router-link
          >
        </li>

        <li>
          <a target="_blank" href="http://marketplace.ent.ukrgas.com.ua/"
            >Маркет 104 (waiting production)</a
          >
          <router-link class="ex1" :to="{ name: 'exm' }" target="_blank"
            >Example 1</router-link
          >
        </li>

        <li>
          <a target="_blank" href="https://yug-gfk.firebaseapp.com/"
            >Інформаційна панель графіків TV (пароль 0099)</a
          >
        </li>

        <li>
          <a target="_blank" href="https://excelcourse1881.web.app//"
            >SPA - Excel</a
          >
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  // height: 100vh;
  max-width: 930px;
  min-height: 100vh;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0 auto;
  background-color: #285788;

  .left {
    width: 35%;
    color: #fff;
    padding: 0px 2%;
    .photo {
      display: flex;
      align-items: center;
      margin-top: 20px;
      .img {
        width: 109px;
        height: 140px;
        margin: 0 auto;
      }
    }
    .name {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .fname {
        text-transform: uppercase;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        margin-top: 25px;
      }
      .prof {
        font-size: 20px;
        margin-top: 5px;
      }
    }
    .info {
      margin: 25px 0;
      .title {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #fff;
        margin-bottom: 5px;
        .img {
          width: 55px;
          height: 55px;
          background-color: white;
          mask: url(@/assets/inf.svg) no-repeat center;
          mask-size: cover !important;
        }
        .left_title {
          margin-left: 15px;
        }
      }
      .content {
        padding: 5px 0 0 20px;
        .inf {
          display: flex;
          line-height: 1.3;
          .val {
            margin-left: 10px;
            font-size: 14px;
          }
        }
      }
    }

    .contact {
      .title {
        display: flex;
        align-items: center;
        .img {
          width: 55px;
          height: 55px;
          background-color: white;
          mask: url(@/assets/cont.svg) no-repeat center;
          mask-size: cover !important;
        }
        .left_title {
          margin-left: 15px;
          font-size: 20px;
        }
      }
      .content {
        padding: 5px 0 0 20px;
        .cont_items {
          margin-bottom: 50px;
          margin-top: 15px;
          .cont_item {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            .img {
              width: 22px;
              height: 22px;
              margin-right: 15px;
              background-color: white;
              mask: url(@/assets/home.svg) no-repeat center;
              mask-size: cover !important;
            }
            .img2 {
              width: 22px;
              height: 22px;
              margin-right: 15px;
              background-color: white;
              mask: url(@/assets/phone.svg) no-repeat center;
              mask-size: cover !important;
            }
            .img3 {
              width: 24px;
              height: 18px;
              margin-right: 15px;
              background-color: white;
              mask: url(@/assets/mail.svg) no-repeat center;
              mask-size: cover !important;
            }
          }
        }
      }
    }
    .social {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 87%;
      margin: 0 auto;
      .img {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        background-color: white;
        mask: url(@/assets/0.svg) no-repeat center;
        mask-size: cover !important;
      }
      .img2 {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        background-color: white;
        mask: url(@/assets/1.svg) no-repeat center;
        mask-size: cover !important;
      }
      .img3 {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        background-color: white;
        mask: url(@/assets/2.svg) no-repeat center;
        mask-size: cover !important;
      }
    }
  }

  .right {
    width: 65%;
    background-color: #fff;
    padding: 0 2%;
    position: relative;
    .leng_wrap {
      width: 100%;
      height: 24px;
      display: flex;
      position: relative;
      justify-content: end;
      .lang {
        width: 50px;
        display: flex;
        position: fixed;
        // right: 90px;
        top: 10px;
        background-color: white;
        padding: 2px 2px 2px 6px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
          0 3px 10px 0 rgba(0, 0, 0, 0.19);
        .en,
        .ua {
          cursor: pointer;
          text-decoration: none;
          color: black;
          &:hover {
            font-weight: bold;
          }
        }
      }
    }
    .edu {
      margin-bottom: 30px;
      .title {
        font-size: 25px;
        padding: 0 0 15px 0;
      }
      .college {
        display: flex;
        align-items: center;
        padding: 5px 0;
        .year {
          width: 20%;
        }
        .name {
          width: 20%;
        }
        .func {
          width: 60%;
        }
      }
    }
    .skill {
      .title {
        font-size: 25px;
      }
      .skills {
        .item {
          display: flex;
          align-items: center;
          margin: 10px 0;
          .title {
            font-size: 14px;
            width: 25%;
            min-width: 85px;
          }
          .line {
            background-color: #c5c3c3;
            height: 10px;
            min-width: 60%;
            margin-right: 10px;
            .progress {
              background-color: #285788;
              height: 100%;
              width: 75%;
            }
          }
        }
      }
    }

    .experiance {
      margin-bottom: 15px;
      .title {
        font-size: 25px;
        padding: 15px 0;
      }
      .ex_wrap {
        display: flex;
        ul {
          margin: 0 15px;
          padding: 0;
          li {
            margin-bottom: 8px;
          }
        }
      }
    }
    .experiance2 {
      margin-bottom: 15px;
      .title {
        font-size: 25px;
        // padding: 15px 0;
      }
      .ex_wrap {
        display: flex;
        ul {
          margin: 0 35px 0 15px;
          padding: 0;
          li {
            margin-bottom: 8px;
          }
        }
      }
    }
    .portfolio {
      margin-bottom: 30px;
      .title {
        font-size: 25px;
        padding: 0px 0;
      }
      li {
        padding: 5px 0;
        list-style-type: decimal;
        a {
          color: #000;
          // text-decoration: none;
        }
      }
    }
  }
}

.ex1 {
  margin-left: 10px;
}
</style>
