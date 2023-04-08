const BeearStyleModel = require('../models/BeearStyleModel');

class BeerStyleController {

    async create(req, res){
        try{
            const beerStyleData = req.body;

            const cervejaExiste =  await BeearStyleModel.findAll({
                where: {
                    style: beerStyleData.style
                }
            });

            if(cervejaExiste.length > 0){
                return res.json({
                    msg: 'Cerveja já cadastrado na base de dados'
                });
            }


            console.log(beerStyleData);

            const beerstyle = await BeearStyleModel.create(beerStyleData)

            res.json({
                msg: 'Cerveja inserido com sucesso!',
                beerstyle: beerstyle
            });
        }catch(erro){
            console.log(erro)
            res.json({
                msg: 'erro ao inserir a cerveja'
            });
        }
    }

    async read(req, res){
        try{
            const usuarios = await UsuariosModel.findAll();
            res.json({
                msg: 'Usuários recuperados com sucesso!',
                usuarios: usuarios
            });
        }catch(error){
            console.log(error);
            res.json({
                msg: 'erro ao inserir usuario'
            });
        }
    }

    update(){

    }

    delete(){

    }
}

module.exports = new BeerStyleController();