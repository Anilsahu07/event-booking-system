const app= require("./src/app")
const connect= require("./src/db/db")

connect()



const Uri=3000;

app.listen(Uri, ()=>{
    console.log("Server is running on the port 3000", Uri);
    
})