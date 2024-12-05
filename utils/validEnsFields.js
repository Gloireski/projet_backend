const validEnsFields = (req, res, next) => {
    if(!Object.keys(req.body).length) {
            
        return (res.status(400).json({message: "Champs vide"}));
        
    } else if(!req.body.nom || !req.body.prenom || !req.body.email || !req.body.matiere) {
        let params = [req.body.nom, req.body.prenom, req.body.email, req.body.matiere];
        let lackingParam = params.findIndex(param => !param === true) > 0 ? params.findIndex(
            param => !param === true) > 1 ? params.findIndex(
                param => !param === true) > 2? "email":"age" : "prenom" : "nom";
        // lacking only lackingParam
        return (res.status(400).json({message: `Champs ${lackingParam} vide`}));}
    next();
}

module.exports = validEnsFields;