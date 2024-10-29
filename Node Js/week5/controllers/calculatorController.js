const router = require('express').Router()


router.get('/add', (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const result = a + b;

    res.json({a: a, b: b, operation: 'add', result:result  })

    res.end()
})




router.get('/sub', (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const result = a - b;

    res.json({a: a, b: b, operation: 'sub', result:result  })

    res.end()
})



router.get('/mult', (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const result = a * b;

    res.json({a: a, b: b, operation: 'multiply', result:result  })

    res.end()
})




router.get('/devide', (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if(b == 0){
        res.sendStatus(400)
        return;
    }

    const result = a / b;

    res.json({a: a, b: b, operation: 'devide', result:result  })

    res.end()
})


router.get('/', (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const oper = req.query.operation;

    let result;

    switch(oper){
        case "add":
            result = a+b;
        break;
        case "sub":
            result = a-b;
        break;
        case "mult":
            result = a*b;
        break;
        case "devide":
            if(b==0){
                res.status(400).json({error: 'Cant devide with 0'})
                return;
            }
            result = a/b;
        break;
        default:
            res.status(400).json({error: 'Invalid Operation'})
    }

    res.json({a: a, b: b, operation: oper, result:result  })
    
})


module.exports = router