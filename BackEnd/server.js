//Block Start Dependencies
const express=require ('express');
const cors=require('cors');
const path=require('path');
const AppConfiguration=require('./configuration/AppConfiguration')
//Block Start Dependencies

//Block Start Initialize the app
const app=express();
const PORT=process.env.PORT || 4455;
//Block End Initialize the app

const today = new Date(); //date class
const day = today.getDate(); //day
const month = today.getMonth()+1; //month
const year = today.getFullYear(); //year
const time = today.getTime(); //time 
//Start Block for listening your app on defined port
app.listen(PORT,()=>{
    console.log(`Your app is listening on Port ${PORT}`)
    console.log(month);
})
//End Block for listening your app on defined port
// new