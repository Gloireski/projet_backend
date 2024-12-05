// const { Where } = require("sequelize/types/lib/utils");
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
        let classes;
        const { id } = req.params;
        try {
            classes = await Classe.findOne({ where: { id: id }});
            if (!classes) {
                return (res.status(404).send('Classes not found'));
            }
        } catch(e) {
            console.error(e);
        }

        let enseignant;
        try {
            // result = await Classe.findOne({ where: { id: id }, include: {Enseignant} });
            enseignant= await Enseignant.findOne({ Where: {id: classes.enseignant_principal_id}});
        } catch(e) {
            console.error(e);
        }

        let etudiants;
        try {
            // result = await Classe.findOne({ where: { id: id }, include: {Enseignant} });
            enseignant= await Etudiant.findAll({ Where: {classe_id: id}});
        } catch(e) {
            console.error(e);
        }
       
        res.status(200).json({classes, enseignant, etudiants});
    }

    static async postNew (req, res){
        let classes;
        const { nom } = req.body;
        const { niveau } = req.body;
        const enseignant_principal_id = req.body.enseignant_principal_id ? req.body.enseignant_principal_id : null;

        classes = await Classe.findOne({ where: { nom, niveau} });
        // const { class_id } = req.body;
        if (classes) {
            return (res.status(204).send("Classe exist"));
        }

        try {
            classes = await Classe.create({
                nom,
                niveau,
                enseignant_principal_id,
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
            enseignant_principal_id
        })

        res.status(200).json({
            nom,
            niveau,
            enseignant_principal_id
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