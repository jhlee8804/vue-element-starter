<template>
  <div class="user-view">
    <img src="static/img/logo.png" />
    <h1>View 1</h1>
    <div>User: {{ $get(currentUser, 'userName') }}</div>
    <div>User.isEnabled: {{ $get(currentUser, 'isEnabled', undefined) | yesno }}</div>
  </div>
</template>

<script>
import { UserController } from '@/api'

function fetchData({ userId }) {
  return UserController.getUserAsync(userId)
}

export default {
  name: 'UserView',
  props: {
    userId: {
      type: String,
      default: 'jhlee'
    }
  },
  data() {
    return {
      visible: false,
      currentUser: null
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(to)

    fetchData({ userId: to.params.userId || 'jhlee' }).then(result => {
      next(vm => vm.setData(result))
    })
  },
  mounted() {
    // nothing
  },
  methods: {
    setData(data) {
      this.currentUser = data.data
    }
  }
}
</script>

<style lang="scss">
.user-view {
}
</style>
