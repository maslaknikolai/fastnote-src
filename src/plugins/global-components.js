import Vue from 'vue'

import Btn from '@/components/global/Btn'
import Icon from '@/components/global/Icon'
import Field from '@/components/global/Field'
import Checkbox from '@/components/global/Checkbox'
import FormErrors from '@/components/global/FormErrors'
import Loading from '@/components/global/Loading'
import FloatingBtn from '@/components/global/FloatingBtn'

const components = {
  Btn,
  Icon,
  Field,
  Checkbox,
  FormErrors,
  Loading,
  FloatingBtn
}

export default {
  install () {
    Object.entries(components).forEach(([name, component]) => Vue.component(name, component))
  }
}
