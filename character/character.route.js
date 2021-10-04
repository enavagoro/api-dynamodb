const characterController = require('./controllers/character.controller');

exports.routesConfig = (app)=>{
    app.get('/characters', [
        characterController.list
    ])

    app.put('/character', [
        characterController.addOrUpdate
    ])

    app.delete('/character', [
        characterController.delete
    ])
}