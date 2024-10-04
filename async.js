const asy = ()=>{
    console.log("output printed")
}
console.log(1)
console.log(2)
setTimeout(asy, 4000)
console.log(3)
console.log(4)
console.log(5)


console.log("I");
setTimeout(() => {
    console.log("Eat")
}, 2000);
console.log("Ice-cream")
