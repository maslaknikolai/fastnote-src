<template>
  <div>{{ formatedDate }}</div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  props: {
    value: { type: Number, default: +new Date() }
  },
  setup(props) {
    const formatedDate = DateTime.fromMillis(props.value).toLocaleString(DateTime.DATETIME_MED)

    return {
      formatedDate
    }
  }
}
</script>
