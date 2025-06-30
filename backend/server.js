const app= require("./src/app")
const connect= require("./src/db/db")

const dotenv= require("dotenv")
dotenv.config();

connect()

app.listen(3000, ()=>{
    console.log("Server is running on the port 3000");
    
})