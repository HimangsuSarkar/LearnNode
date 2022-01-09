const fs = require('fs');

// fs.appendFile('demoFile.txt', "This is himangsu", (err)=> {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully create a file');
//   }
// })

// fs.readFile('demoFile.txt','utf-8', (err,data)=> {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

// fs.rename('demoFile.txt','demo.txt', (err)=> {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully");
//   }
// })

fs.unlink('demo.txt', (err)=> {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully");
  }
})