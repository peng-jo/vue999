<template>
  <div class="light">
    <Header />
    <section id="youtubeCont">
      <div className="container">
        <WrapTitle name1="moive" name2="Search" />
        <div className="youtube__cont">
          <form @submit.prevent="SearchMovies()">
            <div class="search">
              <label for="search" class="sr-only">검색하기</label>
              <input
                type="search"
                id="search"
                placeholder="검색하기"
                v-model="search"
              />
              <button type="submit" value="search">검색</button>
            </div>
          </form>

          <div class="youtube">
            <div v-for="movie in movies" :key="movie.id">
              <a
                :href="
                  'https://image.tmdb.org/t/p/original/' + movie.poster_path
                "
              >
                <img
                  :src="
                    'https://image.tmdb.org/t/p/original/' + movie.poster_path
                  "
                  :alt="movie.title"
                />
                <p>{{ movie.title }}</p>
              </a>
            </div>
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
import { ref } from 'vue';

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
    const movieAPI = process.env.VUE_APP_MOVIE_KEY;
    const search = ref('');
    const movies = ref([]);

    const SearchMovies = () => {
      if (search.value != '') {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };

        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${movieAPI}&query=${search.value}&page=1`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            movies.value = result.results;
            console.log(result);
          })
          .catch((error) => console.log('error', error));
      }
    };

    return {
      movies,
      search,
      SearchMovies,
    };
  },
};
</script>
<style lang="scss">
.youtube {
  p {
    color: #000;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 200px;

  div {
    flex: 0 0 19%;

    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-family: 'S-CoreDream-3Light';
      margin: 10px 0 50px;
    }
  }
}
.search {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  input {
    flex: 0 0 79%;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #000;
    font-family: 'S-CoreDream-3Light';
    padding: 15px 10px;
    outline: #000;
    color: #000;

    &::placeholder {
      color: #000;
    }
  }
  button {
    font-family: 'S-CoreDream-3Light';
    background: #000;
    flex: 0 0 20%;
    color: #fff;
    border: 1px solid #000;
    font-weight: bold;
  }
}
</style>
