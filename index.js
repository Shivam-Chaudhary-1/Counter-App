const countVal = document.querySelector('#counter');

// const increment = () =>{
//     // get the val from UI
//     let val = parseInt(countVal.innerText);
//     // update the val
//     val = val + 1;
//     // place the new val again
//     countVal.innerText = val;
// }

// const decrement = () =>{
//     // get the val from UI
//     let val = parseInt(countVal.innerText);
//     // update the val
//     val = val - 1;
//     // place the new val again
//     countVal.innerText = val;
// }

function increment(){
    // get the val from UI
    let val = parseInt(countVal.innerText);
    // update the val
    val = val + 1;
    // place the new val again
    countVal.innerText = val;
}

function decrement(){
    // get the val from UI
    let val = parseInt(countVal.innerText);
    // update the val
    val = val - 1;
    // place the new val again
    countVal.innerText = val;
}