const { Etudiant } = require("../models");
class EtudiantsController {
    static async getAll (req, res){
        let etudiants;
        try {
            etudiants = await Etudiant.findAll();
        } catch(e) {
            console.error(e);
        }

        res.status(200).json({etudiants});
    }

    static async getMe (req, res) {
        let etudiant;
        const { id } = req.params;
        try {
            etudiant = await Etudiant.findOne({ where: { id: id } });
        } catch(e) {
            console.error(e);
        }

        if (!etudiant) {
            return (res.status(404).send('Etudiant not found'));
        }
        res.status(200).json({etudiant});
    }

    static async postNew (req, res){
        let etudiant;
        const { nom } = req.body;
        const { prenom } = req.body;
        const { age } = req.body;
        const { email } = req.body;
        // const {  class_id } = req.body.class_id? req.body.class_id : '';

        etudiant = await Etudiant.findOne({ where: { nom, prenom, age, email } });
        // const { class_id } = req.body;
        if (etudiant) {
            return (res.status(204).send("Etudiant exist"));
        }

        try {
            etudiant = await Etudiant.create({
                nom,
                prenom,
                age: parseInt(age),
                email,
            });
        } catch(e) {
            console.error(e);
        }

        res.status(201).json("Etudiant created");
    }

    static async edit(req, res){
        let etudiant;
        const id = req.params.id;
        try{
            etudiant = await Etudiant.findOne({ where: { id } });
        } catch(e){
            console.error(e)
        }
        if (!etudiant) {
            return (res.status(404).send("Etudiant does not exist"));
        }
        const { nom } = req.body;
        const { prenom } = req.body;
        const { age } = req.body;
        const { email } = req.body;
        const { classe_id } = req.body;
        
        console.log(classe_id)

        etudiant.update({
            nom,
            prenom,
            age,
            email,
            classe_id: parseInt(classe_id)
        })
        etudiant.save();
        res.status(200).json({
            nom,
            prenom,
            age,
            email,
            classe_id: parseInt(classe_id)
        });
    }

    static async deleteEtud(req, res){
        let etudiant;
        const id = req.params.id;
        try{
            etudiant = await Etudiant.findByPk(id);
            if (!etudiant) {
                return (res.status(404).send("Etudiant does not exist"));
            }
    
            etudiant.destroy({ where: {id}});
            return(res.status(204).send("deleted"));
        } catch(e){
            console.error(e)
            return(res.status(500).send("erreur"));
        }
    
    }
}

module.exports = EtudiantsController;