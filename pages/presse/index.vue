<template>
  <div id="press">

    <nuxt-link class="press__back" to="/">
      <i class="fa fa-angle-left"></i>
      <img class="press__logo" src="~static/images/logo-white.png" alt="logo-its">
    </nuxt-link>

    <section id="press__intro">
      <img class="centered-crop-image" src="~static/images/news.jpg" alt="">
      <h1 class="press__title">Presse</h1>
    </section>

    <section id="press__articles">
      <div class="press__article-block"
        v-bind:key="index"
        v-for="(article, index) in articles"
      >
        <img class="press__article-logo" :src="`images/logos/${article.logo}.png`"/>
        <p class="press__article-date">Publié le {{ article.date }}</p>
        <h2 class="press__article-title">{{ article.title }}</h2>
        <p class="press__article-text">{{ article.text }}</p>
        <a :href="article.link" target="_blank">
          <button class="press__article-button">Lire l'article</button>
        </a>
      </div>
    </section>


    <main-footer></main-footer>

  </div>
</template>

<script>
import MainFooter from '~/components/main-footer.vue'
import articlesJSON from '~/static/json/press.json'

export default {
  components: {
    MainFooter
  },
  head () {
    return {
      title: 'Presse - Inside the Scream',
      meta: [
        { hid: 'description', name: 'description', content: 'Ma description personnalisée' }
      ],
      script: [
        { src: 'https://use.fontawesome.com/0551651585.js' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' }
      ]
    }
  },
  data () {
    return {
      toto: 'toto'
    }
  },
  computed: {
    articles () {
      return articlesJSON
    }
  }
}
</script>

<style lang="scss">
#press {
  position: relative;
  background: #f5f5f5;
}

#press__intro {
  height: 300px;
  margin:0;
  padding:0;
  position: relative;
  overflow: hidden;

  .centered-crop-image {
    filter: grayscale(70%);
  }
}

.press__back {
  height: 70px;
  position: absolute;
  z-index: 1;
  margin: 10px;
  display: flex;

  .fa-angle-left {
    color: white;
    font-size: 40px;
    line-height: 60px;
    margin-right: 10px;
  }
}

.press__logo {
  height: 100%;
}

.press__title {
  font-size: 30px;
  color: white;
  z-index: 1;
  position: absolute;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 35px;
  bottom: 0;
  left: 0;
  height: 60px;
  line-height: 60px;
  width: 100%;
  padding-left: 40px;
  background: linear-gradient(10deg, #5B5858 0%, transparent 80%);
}

#press__articles {
  display: flex;
  justify-content: center;
  padding: 70px 5% 100px 5%;
  font-family: "open sans";
  letter-spacing: 0.5px;
  flex-wrap: wrap;
}

.press__article-block {
  height: 310px;
  width: 540px;
  margin: 20px;
  box-shadow: 0 0 5px #a0a0a0;
  padding: 20px 30px;
  background: white;
  transition: all .3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  // &:hover {
  //   transform: scale(1.05);
  //   box-shadow: 0 0 10px #898989;
  // }
}

.press__article-logo {
  height: 40px;
}

.press__article-date {
  font-size: 12px;
}

.press__article-title {
  font-size: 20px;
  margin-top: 10px;
  height: 50px;
}

.press__article-text {
  font-size: 14px;
  margin-top: 10px;
}

.press__article-button {
  font-size: 11px;
  margin-top: 15px;
  text-transform: none;
  font-weight: 700;
  padding: 15px 20px;
  line-height: 0;
  background: #DDC082;
  transition: background-color .8s;

  &:hover {
    background: #B29689;
  }
}

</style>
