<template>
  <div class="light">
    <Header />
    <section id="youtubeCont">
      <div className="container">
        <WrapTitle name1="yotube" name2="reference" />
        <div className="youtube__cont">
          <div class="youtube"></div>
        </div>
      </div>
    </section>
    <ContInfo />
    <Footer />
  </div>
</template>
<script>
import WrapTitle from '../components/WrapTitle.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import ContInfo from '../components/ContInfo.vue';

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
};
</script>
<style lang="scss"></style>
