const fs = require('fs').promises;
const  path = require('path')

//Read
async function main() {
    try{
        const data= await fs.readFile('fajlli.txt');
        console.log(data.toString());
    }
    catch(err){
        throw err;
    }
}



//Write
async function mainRead() {
    try{
        fs.writeFile('teksti.txt',  'Kjo eshte nje tekst')

    }
    catch(err){
        throw err;
    }
}



//Update

async function mainUpdate() {
    try{
        fs.appendFile('teksti.txt',  'Kjo eshte nje tekst')

    }
    catch(err){
        throw err;
    }
}


//Delete

async function mainDelete() {
    try{
        fs.unlink('teksti.txt')

    }
    catch(err){
        throw err;
    }
}


main();

mainRead();

mainUpdate();

mainDelete();