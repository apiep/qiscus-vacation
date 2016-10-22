
const router = require('koa-rest-router')()

router.resource('users', {
  index: function * (next) {
    this.body = { name: 'index' }
  },
  new: function * (next) {
    this.body = { name: 'new' }
  },
  create: function * (next) {
    this.body = { name: 'create' }
  },
  show: function * (next) {
    this.body = { name: 'show' }
  },
  edit: function * (next) {
    this.body = { name: 'edit' }
  },
  update: function * (next) {
    this.update = { name: 'update' }
  },
  remove: function * (next) {
    this.remove = { name: 'remove' }
  }
})


module.exports = router
