// 1-MASALA
// let array = []
// array.push(Number(prompt("Raqam kiriting:")))
// array.push(Number(prompt("Raqam kiriting:")))
// array.push(Number(prompt("Raqam kiriting:")))
// array.push(Number(prompt("Raqam kiriting:")))
// array.push(Number(prompt("Raqam kiriting:")))

// function sum(array) {
//     let sum = 0;
//     for(let i of array){
//         sum+=i
//     }
//     return sum;
// }

// console.log(sum(array))



// 2-MASALA


// let arr = ["Jazz" , "Blues"]

// arr.push("Rosk-n-roll")

// for(let i of arr){

//     i ="Classic"

// }


// console.log(arr);




// 3-MASALA
// let salaries = {
// 	"Akmal": 1200,
// 	"Salim": 5200,
// 	"Karima": 1800,
// 	"Karima": 1800,


// }
// function sumSalaries(salaries){
//     let sum = Object.values(salaries)
//     // console.log(sum);
//     let summa = 0
//     for(let i of sum){
//         summa+=sum[i]
//     }
//     return summa
// }
// // console.log(salaries);
// console.log(sumSalaries(salaries)) // Natija: 8200 -> chiqishi kk




// 4-MASALA
// const arr = [1,3,3,3,5,6,2,8,9,0,11,12,13,14,15,16,17,18,19,20]

// function calcSum(arr) {
//     const toqArr = []
//     const juftArr =[]
//     for(let i of arr){
//         if(arr[i] % 2 === 0){
//             juftArr.push(arr[i])
//             // console.log(arr[i]);
//         }else{
//             toqArr.push(arr[i])
//         }

//     }
//     return `Juft array ${juftArr}  Toq array${toqArr}`
// }
// console.log(calcSum(arr));


// 5-MASALA
const arr = [-10,-7,-5,-1,4,8,11,15,20]
    const yoqArr = []
for (let i of arr) {

    for (let k = arr[i]; k <= arr[i+1]; k++) {
        if(arr[i] < arr[k]){
            // arr[i]+=1
            yoqArr.push(arr[i]+1)



        }

    }
    // console.log(element);
}
console.log(yoqArr);