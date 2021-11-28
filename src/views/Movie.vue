<template>
  <div>
    <div class="container">
      <header id="header">
        <ul>
          <li><a href="#">리액트.JS</a></li>
          <li><a href="#">영화</a></li>
          <li><a href="#">TV</a></li>
        </ul>
        <div class="search">
          <label for="search" class="sr-only"></label>
          <input
            type="search"
            id="search"
            placeholder="검색어를 입력해주세요!"
            v-model="search"
          />
        </div>
      </header>
    </div>
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
    <section id="popular"></section>
    <section id="youtubeCont">
      <div className="container">
        <div className="youtube__cont">
          <form @submit.prevent="SearchMovies()"></form>

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
import { ref } from 'vue';
export default {
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
.container {
  max-width: 1280px;
  margin: 0 auto;

  #header {
    color: #fff;
    border-bottom: 1px solid #2e2e30;
    align-items: center;
    font-family: 'Rajdhani', 'Chosunilbo_myungjo';
    font-weight: 500;
    background: #000;
    display: flex;

    ul {
      li {
        display: inli;
        margin-right: 20px;
        a {
          font-size: 24px;
          font-weight: 400;
        }
      }
    }
    .search {
      display: flex;
      margin-top: 50px;

      input {
        background: #282828;
        border: 0;
        border: 1px solid #000;
        border-radius: 50px;
        font-family: 'S-CoreDream-3Light';
        padding: 15px 10px;
        outline: #000;
        color: #fff;
        max-width: 1058px;
        width: 100%;
        height: 36px;

        &::placeholder {
          font-size: 18px;
          font-weight: 400;
          color: #fff;
        }
      }
    }
  }
}

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

.scontainer {
  background-color: #141414;
  overflow: hidden;
}

.scontainer h3 {
  font-size: 40px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 28px;
}

.scontainer {
  width: 1320px;
  margin: 0 auto;
  padding: 136px 0;
  box-sizing: border-box;
}

.scontainer .s1sliderWrap {
  width: 100%;

  cursor: move;
}

.scontainer .s1sliderWrap .s1sliderInner {
  display: flex;
  white-space: nowrap;
}

.scontainer .s1sliderWrap .s1sliderInner .s1slider {
  margin: 0 1%;
}

.scontainer .s1sliderWrap .s1sliderInner .s1slider:first-child {
  margin-left: 0;
}

.scontainer .s1sliderWrap .s1sliderInner .s1slider .s1sliderImg {
  background-color: #333;
  width: 202px;
  height: 300px;
  margin-bottom: 20px;
}

.scontainer .s1sliderWrap .s1sliderInner .s1slider .s1sliderDesc {
}

.scontainer
  #section1
  .s1sliderWrap
  .s1sliderInner
  .s1slider
  .s1sliderDesc
  .s1sliderTitle {
  font-size: 20px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 5px;
}

.scontainer .s1sliderWrap .s1sliderInner .s1slider .s1sliderDesc .s1sliderDay {
  font-size: 18px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
}
</style>
