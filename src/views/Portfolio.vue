<template>
  <div class="light">
    <Header />
    <Contents>
      <section id="portCont">
        <div className="container">
          <wrapTitle name1="introduce" name2="me" />
          <div className="port__cont">
            <div class="port" v-for="port in ports" :key="port.id">
              <a :href="port.link" target="_blank">
                <div class="pImg">
                  <img :src="port.image" :alt="port.title" />
                </div>
                <div class="pText">
                  <h3>{{ port.title }}</h3>
                  <p>{{ port.category }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <ContInfo />
    </Contents>
    <Footer />
  </div>
</template>
<script>
import WrapTitle from '../components/WrapTitle.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import ContInfo from '../components/ContInfo.vue';
import { ref } from '@vue/reactivity';

// import { ref } from 'vue';

export default {
  components: {
    Header,
    Footer,
    WrapTitle,
    ContInfo,
  },
  porps: {
    name1: String,
    anme2: String,
  },
  setup() {
    const ports = ref([]);
    const Portfolios = () => {
      fetch(
        'https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json'
      )
        .then((response) => response.json())
        .then((data) => {
          ports.value = data.data.ports;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    setTimeout(() => {
      Portfolios();
    }, 2000);

    return {
      ports,
      Portfolios,
    };
  },
};
</script>
<style lang="scss">
#portCont {
  background-color: #000;
  color: #fff;
}
.port__cont {
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 300px;
  .port {
    width: 32%;
    margin-bottom: 2%;
    .pImg {
    }
    .pText {
      padding: 35px;
      background: #151517;

      h3 {
        font-family: 'saol';
        font-size: 50px;
        line-height: 47px;
      }
      p {
        font-size: 12px;
        color: #b0aead;
      }
    }
  }
}
</style>
