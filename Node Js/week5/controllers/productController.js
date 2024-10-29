const router = require('express').Router()

router.get('/', (req, res)=>{
    res.write('Get products')
    res.end()
})

router.get('/:id', (req, res)=>{
    const id = req.params.id;

    res.write('Post products')
    res.end()
})

router.post('/', (req, res)=>{
    res.write('Delete products')
    res.end()
})


router.get('/add', (req, res)=>{
    const a = req.query.a;
    
    res.write('Post products')
    res.end()
})


module.exports = router