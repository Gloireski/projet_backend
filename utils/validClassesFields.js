const validClassesFields = (req, res, next) => {
    if(!Object.keys(req.body).length) {
            
        return (res.status(400).json({message: "Champs vide"}));
        
    } else if(!req.body.nom || !req.body.niveau) {
        let params = [req.body.nom, req.body.niveau];
        let lackingParam = params.findIndex(param => !param === true) > 0 ? "nom":"niveau";
        // lacking only lackingParam
        return (res.status(400).json({message: `Champs ${lackingParam} vide`}));}
    next();
}

module.exports = validClassesFields;