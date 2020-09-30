const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;






// //Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     //Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//       console.log(profileItem)
//     });
//   };
  
//   printProfileData(profileDataArgs);

// hard-wiring the text into the terminal output:
// const generatePage = () => 'Name: Jane, Github: janehub';

// // interpolated the text using variables passed into the function that created the output
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;