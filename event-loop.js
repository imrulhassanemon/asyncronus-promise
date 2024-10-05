// function name(){
//     console.log("my name is ")
//     console.log("Imrul")
//     name2()
//     console.log("This is my name")
// }
// function name2(){
//     console.log("Hassan")
//     name3()
// }
// function name3(){
//     console.log("Emon");
// }
// name()

function function1() {
  console.log("functon 1 is called");
  function2();
  console.log("function 1 is end");
}

function function2() {
  console.log("functon 2 is called");
  function3();
  console.log("function 2 is end");
}
function function3() {
  console.log("functon 3 is called");
  function4();
  console.log("function 3 is end");
}
function function4() {
  console.log("functon 4 is called");
}

setTimeout(() => {
    console.log("time is out baby")
}, 21);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then(data => console.log(data));

function1();
