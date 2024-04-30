// Solution 1
// we need to have a stepper,ex steps(3), for every empty step, it should be a space
// '#  '
// '## '
// '###'
// complexity O(n^2)

// const steps = (n)=>{
//     for (let i = 1; i <= n; i++) {
//         let str = "";
//         for (let j = 1; j <= n; j++) {
//             if (j <= i) {
//                 str += "#"
//             } else {
//                 str += " "
//             }
//         }
//         console.log(str)
//     }
// }

// Solution 2
// we need to have a stepper,ex steps(3), for every empty step, dont need a space
// '#'
// '##'
// '###'
// complexity O(n^2)

// const steps = (n)=>{
//     for (let i = 1; i <= n; i++) {
//         let str = "";
//         for (let j = 1; j <= i; j++) {
//             str += "#"
//         }
//         console.log(str)
//     }
// }

// Solution 3
// using recursion
// complexity O(n^2)

// const steps = (totalRows, curRow=0)=>{
//     if (totalRows === 0) {
//         return;
//     }
//     let str = ''
//     for (let i = 0; i <= totalRows + curRow; i++) {
//         if (i <= curRow) {
//             str += '#'
//         } else {
//             str += ' '
//         }
//     }
//     console.log(str)
//     steps(totalRows - 1, curRow + 1)
// }

// Solution 4
// complexity O(n)

const steps = (totalRows) => {
    for (let row = 0; row < totalRows; row++) {
        let stair = '';

        // Number of '#' characters in each row
        const numHash = row + 1;

        // Number of ' ' characters in each row
        const numSpaces = totalRows - numHash;

        // Append '#' characters
        stair += '#'.repeat(numHash);

        // Append ' ' characters
        stair += ' '.repeat(numSpaces);

        console.log(stair);
    }
};
steps(5)
