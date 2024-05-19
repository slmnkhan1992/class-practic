// for (let i = 0; i <= 10; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(i)
//     } x
//     document.write('<br/>')
// }



// let userName = prompt('enter your userName')
// userName = userName.toLowerCase()

// switch (userName) {
//     case "salman":
//         alert('you are elgible');
//         break
//     case 'sameer':
//         alert('you are eligible')
//         break
//     case 'zaid':
//         alert('you are eligible');
//         break
//     default:
//         alert('not eligible');
// }


// for (let i = 5; i < 8; i++) {
//     console.log(`Salman have ${i} Dollars`)

// }


// let j = 5

// while (j < 10) (
//     console.log();
// )


// Slide 51

// function fullName(firstName, lastName) {
//     let fullNameUpercase = (firstName + lastName).toupercase()  
// }

// fullName('salman', 'khan')


// let details = {
//     name: 'Salman',
//     age: 25,
//     Married : true
// }

// let newDetails = details

// newDetails.name = 'sameer'

// console.log(details);
// console.log(newDetails);

// 

// let details = {
//     name: 'Salman',
//     age: 25,
//     Married : true
// }

// let newDetails = {...details, name:'zaid', age:20, Married:false}


// console.log(details);
// console.log(newDetails);



// function first(name) {
//     console.log(`hey my name is ${name}`); 
// }

// function second(name, foo) {
//     foo(name)
// }

// second('salman', first);


// Array (For Each, Map, Filter & Find)

// const students =  [
//     {
//         id: 101,
//         name: 'salman',
//         score: 80,
//         favSubject: 'english'
//     },

//     {
//         id: 102,
//         name: 'sammer',
//         score: 70,
//         favSubject: 'math'
//     },

//     {
//         id: 103,
//         name: 'zaid',
//         score: 90,
//         favSubject: 'urdu'
//     },

//     {
//         id: 104,
//         name: 'aswad',
//         score: 95,
//         favSubject: 'bio'
//     },

//     {
//         id: 105,
//         name: 'shuraim',
//         score: 100,
//         favSubject: 'physics'
//     }
// ]

// // First

// const updatedStudents = students.map((item) => {
//     return {
//         ...item,
//         role: 'teacher'
//     }
// })

// console.log(updatedStudents);


// // 2nd
// const highScore = students.filter((item) => {
//     return item.score    >= 80
// })

// console.log(highScore);


// // 3rd

// const specificId = students.find((item) => {
//     return item.id === 104
// })

// console.log(specificId);


// const bioData = [
//     {name: 'Babar Azam', matches: 200, HS: 119, catagory: 'batsman'},
//     {name: 'Muhammad Rizwan', matches: 70, HS: 115, catagory: 'Keeper'},
//     {name: 'Shaheen Afridi', matches: 92, HS: 199, catagory: 'bowler'},
//     {name: 'Imad', matches: 45, HS: 99, catagory: 'All-rounder'}
// ]

// const revisedData = bioData.forEach((item) => {
//     console.log(item.catagory);
// })

// console.log(revisedData);

// const updatedDetails = bioData.map((item) => {
//     return item.name.toUpperCase()
// })
// console.log(updatedDetails);


// // Filter
// const Hs = bioData.filter((item) => {
//     return item.HS < 120
// })

// console.log(Hs);

// const filt = bioData.find((item) => {
//     return item.catagory === "keeper"
// })
// console.log(filt);


// const students = [
//     {name:'salman', score: 25, favSub: 'english'},
//     {name:'sameer', score: 85, favSub: 'math'},
//     {name:'zaid', score: 18, favSub: 'science'},
//     {name:'shariq', score: 181, favSub: 'english'},
//     {name:'burhan', score: 81, favSub: 'math'},
//     {name:'aswad', score: 74, favSub: 'math'},
//     {name:'noman', score: 69, favSub: 'math'},
// ]

// const totalScore = students.reduce((acc, cur) => {
//     return acc + cur.score
// },0)

// console.log(totalScore);

// const avgScore = (totalScore / students.length)
// console.log(avgScore)


// // 2nd

// const favSubject = students.reduce((acc, curr) => {
//     acc[curr.favSub] = ()
// })



// function themeChanger () {
//     console.log('ha bhae main chal raha hu');

//     if (document.body.style.backgroundColor === 'black') {
//         document.body.style.backgroundColor = 'white'
//         document.body.style.color = 'black'
//         document.body.style.textAlign = 'center'
     
//     } else {
//         document.body.style.backgroundColor = 'black'
//         document.body.style.color = 'white'
//         document.body.style.textAlign = 'center'        
//     }
// }

const language = document.querySelectorAll('li').forEach((item) => {
    item.style.border = '4px solid purple'
    item.style.borderRadius = '100%'
    item.style.backgroundColor = 'Skyblue'
    item.style.marginBottom = '15px'
    item.style.padding = '15px'
    item.style.listStyle = 'none'
    item.style.width = '70px'
    item.style.height = '70px'
    item.style.textAlign = 'center'
    item.style.alignContent = 'center'
    item.style.color = 'purple'
    item.style.fontSize = '25px'
    document.body.style.backgroundColor = 'black'

})
const language2 = document.querySelectorAll('ul').forEach((item) => {
    item.style.display = 'flex'
    item.style.justifyContent = 'space-around'
})

const language3 = document.querySelectorAll('.unique').forEach((item) => {
    item.style.backgroundColor = 'yellow'
    item.style.color = 'black'
    item.style.border = '4px solid red'
    item.style.borderRadius = '100%'    
})




