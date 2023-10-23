// for (let i = 0; i < 10; i++){
//     if (i===3) {
//         console.log(`it is ${i}`);
//         continue;
//     }
    
//     console.log(`number ${i}`)
//     if (i===7) {
//         console.log(`it's number ${i}`)
//         break;
//     }
// }

// const user = {
//     name: "han",
//     province: '경기도',
//     city: '성남시'
// }

// for (let x in user) {
//     console.log(`${x} : ${user[x]}`)
// }

// let i = 100;
// while( i < 10) {
//     console.log(`number = ${i}`);
//     i++;
// }

// let i = 100;
// do { 
//     console.log(`number : ${i}`);
//     i++;
// }
// while (i<10);

const locations = ['seoul', 'daejeon', 'daegu', 'busan'];
// for (let i = 0; i < locations.length; i++){
//     console.log(`location: ${locations[i]}`)
// }

// locations.forEach(function(location, index, array) {
//     console.log(`${index} : ${location}`);
//     console.log(array);
// });

// console.log('using map')

locations.map(function(location, index){
    console.log(`${location}`);
    console.log(index);
});
