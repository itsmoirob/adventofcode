const fs = require('fs');
const fileURL = './input';

const checksum = new Promise((resolve, reject) => {
    let tempLine = [];
    let checksum = 0;
    fs.readFile(fileURL, 'utf8', (err, data) => {
        tempLine = data.split('\n');
        tempLine.forEach(line => {
            const nums = line.split('\t');
            let num1, num2, diff;
            for (let i = 0; i < nums.length - 1; i++) {
                for(let n = i+1; n < nums.length; n++) {
                    if(nums[i] % nums[n] === 0 || nums[n] % nums[i] === 0) {
                        num1 = nums[i];
                        num2 = nums[n];
                        diff = Math.max(num1, num2) / Math.min(num1, num2);
                        checksum = checksum + diff;
                    }
                }
            }
        })
        resolve(checksum);
    });
})

checksum.then(res => console.log(res));