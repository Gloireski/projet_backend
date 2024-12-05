const { Classe } = require("../models");
const { Etudiant } = require("../models");
const { Enseignant } = require("../models");

class ClassesController {
    static async getAll (req, res){
        let classes;
        try {
            classes = await Classe.findAll();
        } catch(e) {
            console.error(e);
        }

        res.status(200).json({classes});
    }

    static async getMe (req, res) {
        let classe;
        const { id } = req.params;

        try {
            classe = await Classe.findOne({ 
                where: { id: id },
                include: [
                    {
                        model: Enseignant,
                        as: 'enseignant_principal', // Alias de la relation
                        attributes: ['id', 'nom', 'prenom', 'matiere', 'email'] // On inclut les infos de l'enseignant
                    },
                    {
                        model: Etudiant,
                        as: 'etudiants', // Alias de la relation
                        attributes: ['id', 'nom', 'prenom', 'email', 'age'] // On inclut les infos des étudiants
                    }
                ]
            });

            // classe = await Classe.findOne({ 
            //     where: { id: id },});
            // const cls = Classe.findOne();
            // console.log((await classe.getEnseignant())?.toJSON());



            if (!classe) {
                return res.status(404).json({ message: 'Classes not found' });
            }

            res.status(200).json(classe);

        } catch(e) {
            console.error(e);
            res.status(500).json({ message: 'Erreur du serveur' });
        }
    }

    static async postNew (req, res){
        let classes;
        const { nom } = req.body;
        const { niveau } = req.body;
        // const enseignant_principal_id = req.body.enseignant_principal_id ? req.body.enseignant_principal_id : null;

        classes = await Classe.findOne({ where: { nom, niveau} });
        // const { class_id } = req.body;
        if (classes) {
            return (res.status(204).send("Classe exist"));
        }

        try {
            classes = await Classe.create({
                nom,
                niveau,
                // enseignant_principal_id,
            });
        } catch(e) {
            console.error(e);
        }

        res.status(201).json("Classes created");
    }

    static async edit(req, res){
        let classes;
        const id = req.params.id;
        try{
            classes = await Classe.findOne({ where: { id } });
        } catch(e){
            console.error(e)
        }
        if (!classes) {
            return (res.status(404).send("Classes does not exist"));
        }
        const { nom } = req.body;
        const { niveau } = req.body;
        const { enseignant_principal_id } = req.body;
        
        console.log(id)

        classes.update({
            nom,
            niveau,
            enseignant_principal_id: parseInt(enseignant_principal_id)
        })

        res.status(200).json({
            nom,
            niveau,
            enseignant_principal_id: parseInt(enseignant_principal_id)
        });

    }

    static async delete(req, res){
        let classes;
        const id = req.params.id;
        try{
            classes = await Classe.findByPk(id);
            if (!classes) {
                return (res.status(404).send("Classes does not exist"));
            }
    
            await classes.destroy({ where: {id}});
            return(res.status(204).send("deleted"));
        } catch(e){
            console.error(e)
            return(res.status(500).send("erreur server"));
        }
    
    }
}

module.exports = ClassesController;