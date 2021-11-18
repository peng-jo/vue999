<template>
  <div class="light">
    <Header />
    <section id="referCont">
      <div className="container">
        <wrapTitle name1="introduce" name2="me" />
        <div className="refer__cont">
          <div className="table">
            <h3>HTML</h3>
            <ul>
              <li></li>
            </ul>
          </div>
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
<style lang="scss">
//refer__cont
#referCont {
  background-color: #000;
  color: #fff;
  padding-bottom: 300px;
}
.refer__cont {
  .table {
    border-bottom: 2px solid #fff;
    margin-top: 1.2rem;

    h3 {
      font-size: 20px;
      margin: 10px;
      display: inline-block;
      padding-bottom: 10px;
    }
    h3.active {
      color: red;
    }

    li {
      margin: 0;
      list-style: none;
      border-top: 1px solid #fff;
      position: relative;
      transition: all 0.3s;
      overflow: hidden;

      &:hover {
        background: rgba(255, 255, 255, 0.081);
      }

      span {
        display: inline-block;
        float: left;
        padding: 25px 10px;
        font-size: 14px;
        font-family: 'S-CoreDream-3Light';
        box-sizing: border-box;

        &:nth-child(1) {
          width: 5%;
          text-align: center;
        }
        &:nth-child(2) {
          width: 10%;
        }
        &:nth-child(3) {
          width: 63%;
        }
        &:nth-child(4) {
          width: 15%;
        }
      }
    }
  }
}
</style>
