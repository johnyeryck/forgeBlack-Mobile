import sqlite3 from 'sqlite3'
const db = new sqlite3.Database('./database/forge.db', (error)=>{
    if(error){
        console.log(error)
    }
})
export default db