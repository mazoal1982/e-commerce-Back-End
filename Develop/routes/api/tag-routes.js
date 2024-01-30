const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({})
  .then(data => res.json(data))
  .catch(err => {
    res.json(err)
    console.log(err)
  })
});
router.get('/:id', (req, res) => {
  // find one Tag by its `id` value
  // be sure to include its associated Products
  Tag.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(data => res.json(data))
  .catch(err => {
    res.json(err)
    console.log(err)
  })
});

router.post('/', (req, res) => {
  // create a new Tag
  Tag.create(req.body)
  .then(data => res.json(data))
  .catch(err => {
    res.json(err)
    console.log(err)
  })
});

router.put('/:id', (req, res) => {
  // update a Tag by its `id` value
  Tag.update(req.body,{
    where: {
      id: req.params.id
    }
  })
  .then(data => res.json(data))
  .catch(err => {
    res.json(err)
    console.log(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a Tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => res.json(data))
  .catch(err => {
    res.json(err)
    console.log(err)
  })
});

module.exports = router;
