const { Enseignant } = require("../models");

class EnseignantsController {
    static async getAll (req, res){
        let enseignant;
        try {
            enseignant = await Enseignant.findAll();
        } catch(e) {
            console.error(e);
        }

        res.status(200).json({enseignant});
    }

    static async getMe (req, res) {
        let enseignant;
        const { id } = req.params;
        try {
            enseignant = await Enseignant.findOne({ where: { id: id } });
        } catch(e) {
            console.error(e);
        }

        if (!enseignant) {
            return (res.status(404).send('Enseignant not found'));
        }
        res.status(200).json({enseignant});
    }

    static async postNew (req, res){
        let enseignant;
        const { nom } = req.body;
        const { prenom } = req.body;
        const { email } = req.body;
        const { matiere } = req.body;

        enseignant = await Enseignant.findOne({ where: { nom, prenom, email, matiere } });
        // const { class_id } = req.body;
        if (enseignant) {
            return (res.status(204).send("Enseignant exist"));
        }

        try {
            enseignant = await Enseignant.create({
                nom,
                prenom,
                email,
                matiere
                // class_id
            });
        } catch(e) {
            console.error(e);
        }

        res.status(201).json("Enseignant created");
    }

    static async edit(req, res){
        let enseignant;
        const id = req.params.id;
        try{
            enseignant = await Enseignant.findOne({ where: { id } });
        } catch(e){
            console.error(e)
        }
        if (!enseignant) {
            return (res.status(404).send("Enseignant does not exist"));
        }
        const { nom } = req.body;
        const { prenom } = req.body;
        const { email } = req.body;
        const { matiere } = req.body;
        
        console.log(id)

        enseignant.update({
            nom,
            prenom,
            email,
            matiere
        })

        res.status(200).json({
            nom,
            prenom,
            email,
            matiere
        });

    }

    static async delete(req, res){
        let enseignant;
        const id = req.params.id;
        try{
            enseignant = await Enseignant.findByPk(id);
            if (!enseignant) {
                return (res.status(404).send("Enseignant does not exist"));
            }
    
            await enseignant.destroy({ where: {id}});
            return(res.status(204).send("deleted"));
        } catch(e){
            console.error(e)
            return(res.status(500).send("erreur server"));
        }
    
    }
}

module.exports = EnseignantsController;