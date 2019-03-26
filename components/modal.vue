<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__body" :style="bodyStyle">
        <img src="~assets/images/icons/cross.png" class="modal__close" @click="close"/>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      'default': '400'
    }
  },
  computed: {
    bodyStyle() {
      return { width: this.width }
    }
  },
  methods: {
    close() {
      this.$emit('closed')
    }
  },
  mounted() {
    document.body.appendChild(this.$el)
  },
  destroyed() {
    if(this.$el.parentElement) {
      this.$el.parentElement.removeChild(this.$el)
    }
  }
}
</script>

<style lang="scss">

.modal {
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  font-family: 'open sans';
}

.modal__body {
  background-color: #fff;
  box-shadow:  0 2px 8px rgba(0, 0, 0, .33);
  position: relative;
}

.modal__close {
  height: 25px;
  width: 25px;
  position: absolute;
  top: -35px;
  right: -35px;
  cursor: pointer;
}

.modal__container {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  min-height: 100%;
  padding: 40px 40px 20px;
  width: 100%;
  background: rgba(0,0,0,.7);
}

.modal__content {
  padding: 20px;
}

.modal__title {
  color: #404040;
  font-weight: bold;
  font-size: 18px;
  padding-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
}

.modal__subtitle {
  font-size: 12.5px;
  text-align: center;
}
</style>


