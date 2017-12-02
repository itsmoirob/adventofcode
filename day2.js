const fs = require('fs');
const fileURL = '../../../../input';

const checksum = new Promise((resolve, reject) => {
    let tempLine = [];
    let checksum = 0;
    fs.readFile(fileURL, 'utf8', (err, data) => {
        tempLine = data.split('\n');
        tempLine.forEach(line => {
            const nums = line.split('\t');
            let high = Math.max(...nums);
            let low = Math.min(...nums);
            let diff = high - low;
            checksum = checksum + diff;
        } )
        resolve(checksum);
    });
})

checksum.then(res => console.log(res));