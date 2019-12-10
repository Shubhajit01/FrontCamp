/*******************
 * Read the csv file and write to a text file using the streams.
 * a) Read/write the file line by line.
 * b) If any errors log to the console.
*/
const fs = require('fs');
const readline = require('readline'); // Helps in READING a string ONE LINE at a time.

const file_not_found = `Sorry, couldn't find the file!`;
const file_written_successfully = `File Written Successfully!`;

const inputValue = fs.createReadStream('./DummyCSV.csv'); // Create a READABLE STREAM from the file.

// HANDLE ERRORS While Reading
inputValue.on('error', (err) => {
    if (err.code === 'ENOENT') {
        console.log(file_not_found);
    }
});


// CREATE Readline Interface with input as the 
// Readable stream created above.
const fileReader = readline.createInterface({
    input: inputValue
});

// ON LINE Event, append to the file and handle errors as well. 
fileReader.on('line', (line) => {
    fs.appendFile('File_Written_From_CSV.txt', `${line}\n`, (err) => {
        if (err) {
            console.log(err);
        }
    });
})

// SHOW VISUAL MESSAGE when File is done writting.
fileReader.on('close', () => {
    console.log(file_written_successfully);
})
