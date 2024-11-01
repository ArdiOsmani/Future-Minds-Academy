exports.printMethod = (req, res, next)=>{
    console.log(req.method);
    next()
}



exports.printUrl = (req, res, next)=>{
    console.log(req.url);
    next()
}