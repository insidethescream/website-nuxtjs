<template>
  <div id="videos">

    <nuxt-link class="videos__back" to="/">
      <i class="fa fa-angle-left"></i>
      <img class="videos__logo" src="~static/images/logo-white.png" alt="logo-its">
    </nuxt-link>

    <section id="videos__intro">
      <img class="centered-crop-image" src="~static/images/coatching.jpg" alt="">
      <h1 class="videos__title">Vidéos</h1>
    </section>

    <section>
      <div class="videos__grid">
        <div class="videos__column">
          <div class="videos__block"
            v-bind:key="index"
            v-for="(video, index) in videosCol1"
            :class="{'small': video.size === 'small'}"
            @click="openModal(video)"
          >
            <img class="videos__preview" :src="`images/${video.preview}`"/>
            <img class="videos__player" src="~static/images/icons/player.png"/>
            <h2 class="videos__block-title">{{ video.title }}</h2>
          </div>
        </div>
        <div class="videos__column">
          <div class="videos__block"
            v-bind:key="index"
            v-for="(video, index) in videosCol2"
            :class="{'small': video.size === 'small'}"
            @click="openModal(video)"
          >
            <img class="videos__preview" :src="`images/${video.preview}`"/>
            <img class="videos__player" src="~static/images/icons/player.png"/>
            <h2 class="videos__block-title">{{ video.title }}</h2>
          </div>
        </div>
      </div>
    </section>

    <modal
      v-if="isModalOpened"
      width="auto"
      @closed="closeModal()"
    >
      <iframe width="800" height="450" :src="modalData.link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" style="display: block" allowfullscreen></iframe>
    </modal>

    <main-footer></main-footer>

  </div>
</template>

<script>
import Modal from '~/components/modal.vue'
import MainFooter from '~/components/main-footer.vue'

export default {
  components: {
    Modal,
    MainFooter
  },
  head () {
    return {
      title: 'Vidéos - Inside the Scream',
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
      isModalOpened: false,
      videosCol1: [
        {
          link: 'https://www.youtube.com/embed/zkGa_BItnag',
          preview: 'tuto_chant_metal.png',
          title: 'Tuto : le chant metal',
          size: 'large'
        },
        {
          link: 'https://www.youtube.com/embed/DIay3tHBOIc?start=2543',
          preview: 'je_taime_etc.png',
          title: 'Je t\aime etc : les grandes voix',
          size: 'small'
        },
        {
          link: 'https://www.youtube.com/embed/zkGa_BItnag',
          preview: 'tuto_chant_metal_small.png',
          title: 'Tuto : le chant metal',
          size: 'small'
        },
        {
          link: 'https://www.youtube.com/embed/WdwY3QsJfbA',
          preview: 'chant_guttural.png',
          title: 'Le chant guttural',
          size: 'large'
        },
      ],
      videosCol2: [
        {
          link: 'https://www.youtube.com/embed/zkGa_BItnag',
          preview: 'tuto_chant_metal_small.png',
          title: 'Tuto : le chant metal',
          size: 'small'
        },
        {
          link: 'https://www.youtube.com/embed/DIay3tHBOIc?start=2543',
          preview: 'je_taime_etc.png',
          title: 'Je t\aime etc : les grandes voix',
          size: 'small'
        },
        {
          link: 'https://www.youtube.com/embed/en30M4aqnus',
          preview: 'preview_masterclass.jpg',
          title: 'Le plus grand cours de chant du Monde',
          size: 'large'
        },
        {
          link: 'https://www.youtube.com/embed/DIay3tHBOIc?start=2543',
          preview: 'je_taime_etc.png',
          title: 'Je t\aime etc : les grandes voix',
          size: 'small'
        },
        {
          link: 'https://www.youtube.com/embed/zkGa_BItnag',
          preview: 'tuto_chant_metal_small.png',
          title: 'Tuto : le chant metal',
          size: 'small'
        },
        {
          link: 'https://www.youtube.com/embed/zkGa_BItnag',
          preview: 'tuto_chant_metal_small.png',
          title: 'Tuto : le chant metal',
          size: 'small'
        },
        {
          link: 'https://www.youtube.com/embed/DIay3tHBOIc?start=2543',
          preview: 'je_taime_etc.png',
          title: 'Je t\aime etc : les grandes voix',
          size: 'small'
        },
      ],
      modalData: null
    }
  },
  methods: {
    openModal(data) {
      this.modalData = data
      this.isModalOpened = true
    },
    closeModal() {
      this.isModalOpened = false
    }
  },
}
</script>

<style lang="scss">
#videos {
  position: relative;
  // background: #f2f5f6;
}

#videos__intro {
  height: 300px;
  margin:0;
  padding:0;
  position: relative;
  overflow: hidden;

  .centered-crop-image {
    padding-top: 20%;
    filter: grayscale(70%);
  }
}

.videos__back {
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

.videos__logo {
  height: 100%;
}

.videos__title {
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

.videos__grid {
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 50px 0 100px 0;
}

.videos__column {
  width: 50%;
}

.videos__block {
  width: calc(100% - 6px);
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin: 3px;
  margin-bottom: -2px;

  &.small {
    width: calc(50% - 6px);
  }
}

.videos__preview {
  width: 100%;
  height: auto;
  display: block;
}

.videos__player {
  position: absolute;
  height: 80px;
  width: 80px;
  z-index: 1;
  top: calc(50% - 40px);
  right: calc(50% - 40px);
}

.videos__block.small {
  .videos__player {
    height: 50px;
    width: 50px;
    top: calc(50% - 25px);
    right: calc(50% - 25px);
  }
}

.videos__block-title {
  color: white;
  z-index: 1;
  position: absolute;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 25px;
  bottom: 0;
  left: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
  padding-left: 20px;
  background: linear-gradient(10deg, #DDC082 0%, transparent 80%);
}

.videos__block.small {
  .videos__block-title {
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    padding-left: 12px;
  }
}

.modal__body {
  background: black;
}
</style>
