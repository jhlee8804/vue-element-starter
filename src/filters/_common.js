import Vue from 'vue'

Vue.filter('yesno', function(value) {
  if (typeof value === 'boolean')
    return value ? 'Yes' : 'No'

  return value
})
