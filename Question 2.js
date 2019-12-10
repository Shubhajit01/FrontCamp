const readline = require('readline');
const fs = require('fs');

const inputValue = fs.createReadStream('./DummyCSV.csv');
inputValue.on('error', (err) => {
    console.log(err);
});

const fileReader = readline.createInterface({
    input: inputValue
});

fileReader.on('line', (line) => {
    fs.appendFile('File_Written_From_CSV.txt', line, (err) => {
        if (err) {
            console.log(err);
        }
    });
})

fileReader.on('close', () => {
    console.log('File Written!');
})