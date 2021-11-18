<template>
  <div className="light">
    <Header />
    <section id="mainCont">
      <div class="container">
        <div class="main__cont">
          <div class="l1">You are</div>
          <div class="l2">already</div>
          <div class="l3">doing well.</div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  porps: {
    name1: String,
    anme2: String,
  },
};
</script>
<style lang="scss">
// main__cont
#mainCont {
  background-color: #f0eeeb;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main__cont {
  color: #000;
  background-color: #f0eeeb;
  font-size: 10vw;
  line-height: 0.85;
  letter-spacing: -0.0275em;
  transition: all 2s;
  text-transform: uppercase;
  font-family: 'saol';

  .l2 {
    margin-left: 9vw;
  }
  .l3 {
    margin-left: 18vw;
  }
}
</style>
