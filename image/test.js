const {getImage} = require('./visit')
const x =async()=>{
    await getImage("https://www.indiehackers.com/")
}
console.log(x())
