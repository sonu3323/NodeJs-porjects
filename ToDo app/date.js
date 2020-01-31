
//And now this is a module and we have to export in app.js file....
// So the mehtod is : module.exports = name ;


exports.getdate = ()=>{
const today = new Date();
  
    const options = {
        weekday:"long",
        day :"numeric",
        month : "long"
    }

    return today.toLocaleDateString("en-US", options);
    
}

//And if ther is multiple functions returns and we exports to main file then what we do -- So the js is object here is example --


exports.getday = ()=>{
    const today = new Date();
      
        const options = {
            weekday:"long",
            
        }
    
        return today.toLocaleDateString("en-US", options);
        
    }





    
  
    