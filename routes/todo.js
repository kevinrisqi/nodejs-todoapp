const router = require('express').Router()

router.route('/').get((req, res) => {
    res.send('List ToDo')
})

module.exports = router
