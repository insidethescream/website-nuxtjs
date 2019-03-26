<template>
  <div id="homepage">

    <main-nav></main-nav>

    <section id="home" ref="homeSection" :style="sectionStyle">
      <img class="logo" src="~static/images/logo-white.png" alt="logo-its">
      <a class="js-scrollTo" href="#scream"><i class="fa fa-angle-down" aria-hidden="true"></i></a>
    </section>

    <section id="scream" ref="screamSection" :style="sectionStyle">
      <div class="scream__block" id="block-class" data-aos="fade">
        <img class="centered-crop-image" src="~static/images/class.jpg" alt="">
        <p class="scream__block-title">cours</p>
      </div>
      <nuxt-link class="scream__block" id="block-stages" to="/stages" data-aos="fade">
        <img class="centered-crop-image" src="~static/images/stages.jpg" alt="">
        <p class="scream__block-title">stages et masterclasses</p>
      </nuxt-link>
      <div class="scream__block" id="block-masterclasses" data-aos="fade">
        <img class="centered-crop-image" src="~static/images/masterclass.jpg" alt="">
        <p class="scream__block-title">coatching scénique</p>
      </div>
      <div class="scream__block" id="block-about" data-aos="fade">
        <img class="centered-crop-image" src="~static/images/about.jpg" alt="">
        <p class="scream__block-title">à propos</p>
      </div>
      <nuxt-link class="scream__block" id="block-videos" to="/videos" data-aos="fade">
        <img class="centered-crop-image" src="~static/images/videos.jpg" alt="">
        <p class="scream__block-title">vidéos</p>
      </nuxt-link>
      <div class="scream__block" id="block-press" data-aos="fade">
        <img class="centered-crop-image" src="~static/images/press.jpg" alt="">
        <p class="scream__block-title">presse</p>
      </div>
      <a class="js-scrollTo" href="#about"><i class="fa fa-angle-down" aria-hidden="true"></i></a>
    </section>

    <section id="about" ref="aboutSection">
      <div class="about__wrapper">
        <div class="about__box-title">
          <h1 class="about__title">Inside The Scream</h1>
          <p class="about__comp">Cours de chant saturés avec David Féron</p>
        </div>
        <div class="about__block left" data-aos="fade-right">
          <h2 class="about__subtitle">La voix saturée</h2>
          <p class="about__text">La voix saturée prend ses racines dans l’expression de la colère.<br>
          Son utilisation s’est développée et adaptée aux différents styles musicaux,<br>
          et dans toutes les esthétiques on peut être amené à vivre cette décharge émotionnelle.<br>
          A l’heure actuelle, la voix saturée est aussi très souvent employée seulement pour sa couleur.</p>
        </div>

        <div class="about__block right" data-aos="fade-left">
          <h2 class="about__subtitle">Pour le metal, mais pas que...</h2>
          <p class="about__text">Les chanteurs de Métal recherchent des sons agressifs, type grognements, hurlements.<br>
          Autour de ces techniques de chant extrêmes, connues sous le nom générique « Growl » ou « Scream »,<br>
          on retrouve plusieurs techniques vocales déclinées en fonction du style et de l’esthétique recherchée.</p>
          <p class="about__text">Dans le Blues, le Gospel, la saturation tend vers des sons plus rocailleux, éraillés;</p>
          <p class="about__text">Dans la pop, le rock, le heavy métal,  on retrouve des saturations plus légères…</p>
        </div>

        <div class="about__block left" data-aos="fade-right">
          <h2 class="about__subtitle">La voix saturée</h2>
          <p class="about__text">Au travers de fondements théoriques et même scientifiques,<br>
          David Féron vous permettra de découvrir comment fonctionne la voix saturée et comment<br>
          on peut prétendre à une maîtrise approfondie et sans risque du chant et des voix extrêmes.</p>
          <p class="about__text">En insistant sur l’implication mentale et corporelle nécessaire,<br>
          pour un développement ample et sans danger du potentiel de chaque vocaliste.</p>
        </div>
      </div>

      <a class="js-scrollTo" href="#contact"><i class="fa fa-angle-down" aria-hidden="true"></i></a>
    </section>

    <section id="contact" ref="contactSection" :style="sectionStyle">
      <h2 class="contact__title">Contact</h2>
      <form id="contact__form" action="https://formspree.io/tiffany.vachez@outlook.com" method="POST">
        <input class="contact__input" type="text" name="name" placeholder="Nom">
        <input class="contact__input" type="email" name="email" placeholder="Email">
        <textarea class="contact__textarea" type="text" name="message" placeholder="Message"></textarea>
        <button class="contact__submit" type="submit" value="Send">envoyer</button>
      </form>

      <div class="contact__social">
        <a href="https://www.facebook.com/Prof-de-chant-voix-satur%C3%A9e-164150446935401/" target="_blank" rel="noopener">
          <div class="contact__social-icon">
            <i class="fa fa-facebook"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/david_feron_prof_de_chant/" target="_blank" rel="noopener">
          <div class="contact__social-icon">
            <i class="fa fa-instagram"></i>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=zkGa_BItnag" target="_blank" rel="noopener">
          <div class="contact__social-icon">
            <i class="fa fa-youtube-play"></i>
          </div>
        </a>
      </div>

      <main-footer></main-footer>
    </section>

  </div>

</template>

<script>
import AOS from 'aos'
import MainNav from '~/components/main-nav.vue'
import MainFooter from '~/components/main-footer.vue'

export default {
  components: {
    MainNav,
    MainFooter
  },
  head () {
    return {
      title: 'Inside the Scream',
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
      isScrolled: false,
      scrollTop: 0
    };
  },
  mounted() {
    AOS.init({
      duration: 800,
      delay: 50,
    });

    $('.js-scrollTo').on('click', function() {
      var page = $(this).attr('href');

      $('html, body').animate( { scrollTop: $(page).offset().top }, 600 );
      return false;
    });
  },
  methods: {
    triggerScroll () {
      this.scrollTop = window.scrollY;
      this.isScrolled = window.scrollY > 0;
      AOS.refresh();
    }
  },
  computed: {
    windowHeight() {
      return window.innerHeight
    },
    sectionStyle() {
      return { height: this.windowHeight + 'px' }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.triggerScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.triggerScroll);
  }
}
</script>

<style lang="scss">
.loader {
  align-items: center;
  background-color: black;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  img {
    -webkit-animation: blink 2.5s;
    -webkit-animation-iteration-count: infinite;
  }
}

#home {
  align-items: center;
  background: url('~static/images/background-home-overlay.png') no-repeat center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin:0;
  padding:0;
}


.logo {
  filter: drop-shadow(5px 5px 5px black);
  height: 40%;
  // margin-bottom: 40px;
  width: auto;
}

.fa.fa-angle-down {
  animation: bounce 4s infinite;
  bottom: 20px;
  color: orange;
  font-size: 80px;
  height: 40px;
  left: 0; right: 0;
  line-height: 40px;
  margin: auto;
  opacity: .8;
  position: absolute;
  transition: opacity .4s ease-out;
  width: 50px;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    bottom: 15px;
  }
}

@keyframes bounce {
	0%, 20%, 60%, 100%  { transform: translateY(0); }
  40%  { transform: translateY(-20px); }
	80% { transform: translateY(-10px); }
}

#about {
  position: relative;
}

.about__wrapper {
  padding: 70px 15%;
}

.about__box-title {
  margin-bottom: 50px;
}

.about__title {
  text-align: center;
  font-size: 30px;
}

.about__comp {
  font-size: 15px;
  text-align: center;
  font-style: italic;
}

.about__block {
  margin-bottom: 50px;

  &.right {
    text-align: right;

    .about__subtitle {
      border-left: none;
      padding-left: 0;
      border-right: 5px solid orange;
      padding-right: 15px;
    }
  }
}

.about__subtitle {
  font-size: 25px;
  margin-bottom: 30px;
  border-left: 5px solid orange;
  line-height: 30px;
  padding-left: 15px;
}

.about__text {
  margin-bottom: 10px;
  line-height: 25px;
}

#scream {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.scream__block {
  align-items: center;
  cursor: pointer;
  display: flex;
  filter: grayscale(70%);
  justify-content: center;
  width: calc(50% - 18px);
  margin-top: 10px;
  margin-left: 12px;
  height: calc(33.33% - 15px);
  overflow: hidden;
  position: relative;
  font-family: "PT Sans";

  &:nth-child(5),
  &:nth-child(6) {
    margin-bottom: 10px;
  }
  &:nth-child(2),
  &:nth-child(4),
  &:nth-child(6) {
    margin-right: 12px;
  }

  &::after {
    opacity: 0;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #fff;
    transition: all .3s;
  }

  &:hover {
    &::after {
      opacity: .3;
      transition: all .3s;
    }
  }
}

#block-class .centered-crop-image {
  padding-top: 25%;
}
#block-stage .centered-crop-image {
  padding-top: 10%;
}
#block-about .centered-crop-image {
  padding-top: 10%;
}
#block-videos .centered-crop-image {
  padding-top: 10%;
}

//reset padding-top
@include respond-to(phone) {
  #block-class .centered-crop-image {
    padding-top: 0;
  }
  #block-stage .centered-crop-image {
    padding-top: 0;
  }
  #block-about .centered-crop-image {
    padding-top: 0;
  }
  #block-videos .centered-crop-image {
    padding-top: 0;
  }
}


.scream__block-title {
  text-transform: uppercase;
  color: white;
  font-size: 30px;
  font-family: 'Righteous', cursive;
  letter-spacing: 3px;
  text-shadow: 0 0 5px rgba(0,0,0,0.7);
  z-index: 1;

  @include respond-to(phone) {
    font-size: 18px;
  }
}

#contact {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  // background-color: #eaeaea;
  background-image: url('~static/images/pattern.jpg');
  background-repeat: repeat;
  background-size: 250px;
}

#contact__form {
  display: flex;
  flex-direction: column;
  width: 400px;

  @include respond-to(phone) {
    width: 90%;
  }
}

.contact__title {
  font-size: 40px;
  margin-bottom: 40px;
  color: #000;
}

.contact__social {
  margin-top: 40px;
  display: flex;
}

.contact__social-icon {
  width: 40px;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #404040;
  border-radius: 50%;
  margin: 0 5px;

  i {
    font-size: 20px;
  }
}
</style>

