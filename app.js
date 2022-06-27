const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const github = profileDataArgs[1];

const generatePage = (userName, githubName) => {
    return `
    Name: ${userName}
    Github: ${githubName}
    `;
};
console.log(generatePage(name, github));




// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('==============');
//     profileDataArr.forEach((profileItem)=> {
//         console.log(profileItem)
//     });
// };

// printProfileData(profileDataArgs);