// const prom = () => {
//   return new Promise((resolve, rejected) => {
//     const success = Math.random();
//     // console.log(success)
//     // const val = true;
//     if (success <= 0.7) {
//       resolve(success);
//     } else {
//       rejected(success);
//     }
//   });
// };
// prom()
//   .then((data) => console.log("resolve", data))
//   .catch((err) => console.log("err", err));

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => console.log(data))


async function loadData(){
    const response =  await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = response.json();
    console.log(data)

}
loadData()

const taskLoader = async () =>{
    const response = await fatches("https://jsonplaceholder.typicode.com/posts");
    const data = response.json()
    console.log(data)
}
