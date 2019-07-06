const router = require('express').Router()
const Candy = require('../db/models/Candy')

router.get('/', async (req, res, next) => {
  console.log(Candy)
  try {
    const candies = await Candy.findAll({ include: { all: true } })
    res.send(candies)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => {
  console.error(err.message);
  res.status(404).send('Not Found')
});

module.exports = router;
