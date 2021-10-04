const { getCharacters, addOrUpdateCharacter, deleteCharacter } = require('../model/character.model')

exports.list = (req, res)=>{
    getCharacters().then(characters =>{
        const data = characters.Items;
        res.send(data, 200);
    }).catch(err =>{
        res.send('No se encontró personajes', 404);
    })
}

exports.addOrUpdate = (req, res)=>{
    const character = req.body;

    addOrUpdateCharacter(character).then(character =>{
        const data = character;

        res.send('actualizao', 200);
    }).catch(err =>{
        res.send('No se pudo realizar la operación', 401);
    })
}

exports.delete = (req, res)=>{
    const id = req.body.id;
    console.log('id:',id);

    deleteCharacter(id).then(character =>{
        const data = character;

        res.send('borrao', 200);
    }).catch(err =>{
        res.send('No se pudo realizar la operación', 401);
    })
}