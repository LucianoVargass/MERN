const express = require('express');
const rutas = express.Router();
const tareas = require('../models/tareas');

rutas.get('/' , async (req , res ) => {

  const traer = await tareas.find()
   console.log(traer);
   res.json(traer)
});
rutas.get('/' , async (req , res ) => {
  const tarea = await tareas.findById(req.params.id )
  res.json(tarea)
  
});
 rutas.post('/' , async (req , res) =>{
    const {title , description } = req.body;
  const tareaaa =  new tareas ({title , description});
   await tareaaa.save();
  console.log(tareaaa)
    res.json({status: 'la terea termino'})
});
rutas.put('/:id' , async (req , res) => {
  const {title , description } = req.body;
  const newtarea = {title ,description};
   await tareas.findByIdAndUpdate(req.params.id , newtarea)
   
   res.json({status: 'tarea update'})
})
rutas.delete('/:id' , async (req , res) => {
 
   await tareas.findByIdAndUpdate(req.params.id )
   
   res.json({status: 'tarea borrada'})
})
module.exports = rutas;
