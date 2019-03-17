<template>
  <div id="stages">

    <nuxt-link class="stage__back" to="/">
      <i class="fa fa-angle-left"></i>
      <img class="stage__logo" src="~assets/images/logo-white.png" alt="logo-its">
    </nuxt-link>

    <section id="stages__intro">
      <img class="centered-crop-image" src="~assets/images/stages.jpg" alt="">
      <h1 class="stage__title">Stages</h1>
    </section>

    <section id="stages__description">
      <div class="stages__description-block">
        <p class="stages__description-text">
          La voix saturée prend ses racines dans l’expression de la colère. Son utilisation s’est développée
          et adaptée aux différents styles musicaux, et dans toutes les esthétiques on peut être amené à
          vivre cette décharge émotionnelle. A l’heure actuelle, la voix saturée est aussi souvent employée
          seulement pour sa couleur.
        </p>
        <p class="stages__description-text">
          Au travers d’exercices, de fondements théoriques et même scientifiques, ce stage permet une
          progression et une maîtrise approfondie et sans risque du chant et des voix extrêmes, en insistant
          sur l'implication mentale et corporelle nécessaire pour un développement ample et sans danger du
          potentiel de chaque vocaliste.</p>
      </div>
    </section>

    <section id="stages__events">
      <div class="stages__events-buttons">
        <button class="stages__events-button" v-on:click="filterKey = 'all'" :class="{ active: filterKey === 'all' }">All</button>
        <button class="stages__events-button" v-on:click="filterKey = 'level1'" :class="{ active: filterKey === 'level1' }">Level 1</button>
        <button class="stages__events-button" v-on:click="filterKey = 'level2'" :class="{ active: filterKey === 'level2' }">Level 2</button>
      </div>
      <div class="stages__events-list">
        <div class="stages__events-block"
          v-bind:key="index"
          v-for="(stage, index) in filteredStages"
          :class="{'lvl-1': stage.level === '1', 'lvl-2': stage.level === '2'}"
        >
          <div class="stages__events-tag">
            <p>{{ stage.level }}</p>
          </div>
          <p class="stages__events-title">{{ stage.title }} <span class="lvl-1"><br>[niveau {{ stage.level }}]</span></p>
          <p class="stages__events-text"><span class="underline">Dates:</span> {{ stage.date }}</p>
          <p class="stages__events-text"><span class="underline">Lieu:</span> {{ stage.place }}</p>
          <p class="stages__events-text"><span class="underline">Tarif:</span> {{ stage.price }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import stagesJSON from '~/assets/json/stages.json'

export default {
  data () {
    return {
      message: 'Hello Vue!',
      stages: null,
      filterKey: 'all'
    }
  },
  computed: {
    filteredStages () {
      return this[this.filterKey]
    },
    all () {
      return this.stages
    },
    level1 () {
      return _.filter(this.stages, {level: "1"})
    },
    level2 () {
      return _.filter(this.stages, {level: "2"})
    }
  },
  created () {
    this.stages = stagesJSON
  }
}
</script>

<style lang="scss">
#stages {
  position: relative;
  background: #f2f5f6;
}

#stages__intro {
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

.stage__back {
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

.stage__logo {
  height: 100%;
}

.stage__title {
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
  background: linear-gradient(10deg, #20626d 0%, transparent 80%);
}

#stages__description {
  display: flex;
}

.stages__description-block {
  width: 800px;
  margin: 70px auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -25px;
    left: -25px;
    width: 50px;
    height: 50px;
    border-top: 5px solid #20626d;
    border-left: 5px solid #20626d;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -25px;
    width: 50px;
    height: 50px;
    border-bottom: 5px solid #20626d;
    border-right: 5px solid #20626d;
  }
}

.stages__description-text {
  margin-bottom: 15px;
  text-align: justify;

  &:last-child {
    margin-bottom: 0;
  }
}

#stages__events {
  display: flex;
  justify-content: center;
  padding: 0 10% 100px 10%;
  font-family: "open sans";
  letter-spacing: 0.5px;
  flex-direction: column;
}

.stages__events-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.stages__events-button {
  text-transform: uppercase;
  font-weight: 600;
  margin: 0 5px;
  padding: 10px 20px;
  border-radius: 0;
  background: none;
  color: #20626d;
  cursor: pointer;
  line-height: 14px;
  border: 1px solid #20626d;

  &.active {
    background: #20626d;
    color: white;
  }

  &:active, &:focus {
    box-shadow: none;
    outline: none;
    border: 1px solid #20626d;
  }
}

.stages__events-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.stages__events-block {
  height: 200px;
  width: 420px;
  margin: 30px;
  box-shadow: 0 0 5px #a0a0a0;
  padding: 15px 30px;
  background: white;
  transition: all .3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px #898989;
  }
}

.stages__events-block.lvl-1 {
  .stages__events-tag {
    background: #4ea1af;
  }
  .stages__events-title span {
    color: #4ea1af;
  }
}
.stages__events-block.lvl-2 {
  .stages__events-tag {
    background: #e78353;
  }
  .stages__events-title span {
    color: #e78353;
  }
}


.stages__events-tag {
  position: absolute;
  top: -40px;
  right: -40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  p {
    position: absolute;
    color: #fff;
    bottom: 13px;
    left: 20px;
    font-size: 16px;
  }
}

.stages__events-title {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-weight: bold;

  span {
    font-weight: 100;
  }
}

.stages__events-text {
  margin-bottom: 10px;

  span.underline {
    border-bottom: 1px solid #ccc;
    text-transform: uppercase;
    color: #b6b6b6;
    font-size: 14px;
  }
}
</style>
