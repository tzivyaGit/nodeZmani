 const websiteModel=[
  {id:"1",name:"tzivya"},
  {id:"1",name:"tzivya"},
  {id:"1",name:"tzivya"}
 ];

module.exports={
   getAll: (req, res) => {
    res.send(websiteModel)
  } 
}



