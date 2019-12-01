<template>
  <div>
    <Hamburger v-if="!isAuthShown" @click="isAuthShown = true" />

    <transition name="animation">
      <div v-if="isAuthShown" class="overlay" @click.self="isAuthShown = false">
        <div class="side">
          <Personal v-if="token" />
          <template v-else>
            <LoginForm v-if="form  === 'login'" @register="form = 'register'" @close="isAuthShown = false" />
            <RegisterForm v-else-if="form === 'register'" @login="form = 'login'" />
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import { useStore } from '@/composables/use-store'

import Hamburger from './Hamburger'
import Personal from './Personal'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default {
  components: {
    Hamburger,
    Personal,
    LoginForm,
    RegisterForm
  },
  setup: () => {
    const isAuthShown = false
    const form = ref('login')

    const store = useStore()
    const token = computed(() => store.state.user.token)

    return {
      form,
      isAuthShown,
      token
    }
  }
}
</script>

<style lang="scss" scoped>
.animation {
  &-enter-active, &-leave-active {
    transition: all .2s;
    .side {
      transition: all .2s;
    }
  }
  &-enter, &-leave-active {
    opacity: 0 !important;
    .side {
      right: -100% !important;
    }
  }
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(#000, .5);
  z-index: 4;
}
.side {
  position: fixed;
  top: 0;
  right: 0;
  width: 55vw;
  overflow: auto;
  min-width: 240px;
  max-width: 480px;
  height: 100%;
  background: #000;
  padding-top: 40px;
  &__item {
    list-style-type: none;
  }
  &__link {
    padding: 10px 20px;
    color: #fff;
    width: 100%;
    text-align: left;
    &:hover {
      background: rgba(#fff, .1);
    }
  }
}
</style>
