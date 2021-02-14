const route = require('express').Router();
const info = require('../data/data.json');
const _ = require('underscore');

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  };


route.get('/',(req,res)=>{
    res.json(info)
})

route.post('/',(req,res)=>{
    
    const {name,stars,price,image,amenities} = req.body;
    if(name && stars && price && image && amenities){
        const idRandom = between(12000,1000000);
        const newHotel = {idRandom,...req.body};
        info.push(newHotel);
        res.status(200).send("nuevo hotel registrado")  
    }else{
        res.status(500).send("error al registrar el hotel")
    }
})

route.put('/:id',(req,res)=>{
    const { idHotel } = req.params;
    const {name,stars,price,image,amenities} = req.body;
    if(name && stars && price && image && amenities){
        _.each(info,(information,i)=>{
            if(information.id == idHotel){
                information.name == name;
                information.stars == stars;
                information.price == price;
                information.image == image;
                information.amenities == amenities;
            }
        })
    }
})

route.delete('/:id',(req,res)=>{
    const { idHotel } = req.params;
    _.each(info, (information,i)=>{
        if(information.id == idHotel){
                     
            info.splice(i,1);
           
        }
    })
})
module.exports = route