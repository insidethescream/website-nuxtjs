<template>
  <nav id="main-nav" :class="{'fixed': isScrolled}">
    <ul>
      <li class="nav__home">
        <a class="js-scrollTo" href="#home" :class="{'current': scrollTop >= homeSectionTop && scrollTop < screamSectionTop}">Accueil</a>
      </li>
      <li class="nav__scream">
        <a class="js-scrollTo" href="#scream" :class="{'current': scrollTop >= screamSectionTop && scrollTop < aboutSectionTop}">Scream</a>
      </li>
      <li class="nav__about">
        <a class="js-scrollTo" href="#about" :class="{'current': scrollTop >= aboutSectionTop && scrollTop < contactSectionTop}">À propos</a>
      </li>
      <li class="nav__contact">
        <a class="js-scrollTo" href="#contact" :class="{'current': scrollTop >= contactSectionTop}">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isScrolled: false,
      scrollTop: 0,
      homeSectionTop: 0,
      aboutSectionTop: 0,
      screamSectionTop: 0,
      contactSectionTop: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.homeSectionTop = this.$parent.$refs.homeSection.offsetTop;
      this.aboutSectionTop = this.$parent.$refs.aboutSection.offsetTop;
      this.screamSectionTop = this.$parent.$refs.screamSection.offsetTop;
      this.contactSectionTop = this.$parent.$refs.contactSection.offsetTop;
    })
  },
  methods: {
    handleScroll () {
      this.scrollTop = window.scrollY;
      this.isScrolled = window.scrollY > 0;
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>


<style lang="scss">
#main-nav {
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: center;
  left: 0;
  // background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  transition: background-color .5s;
  width: 100%;
  z-index: 10;

  ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    align-items: center;
    display: flex;
    font-family: 'Josefin Sans', sans-serif;
    height: 50px;
    justify-content: center;
    padding: 0 30px;

    @media screen and (max-width: 768px) {
      height: 50px;
      padding: 0 10px;
    }

    @media screen and (max-width: 374px) {
      height: 50px;
      padding: 0 5px;
    }
  }

  a {
    color: #ccc;
    font-size: 11px;
    letter-spacing: 2px;
    font-weight: bold;
    opacity: 0.9;
    text-decoration: none;
    text-transform: uppercase;
    transition: opacity .3s ease-out;

    &.current {
      color: #DDC082;

      &:hover {
        color: #DDC082;
        opacity: 1;
      }
    }

    &:hover {
      color: #fff;
      opacity: 1;
    }

    @media screen and (max-width: 374px) {
      font-size: 10px;
    }
  }
}
#main-nav.fixed {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
}
</style>
