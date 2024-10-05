function checkAge(){
    const inputFeild = document.getElementById("age");
    const agefield  = inputFeild.value;
    const er = document.getElementById("error");
    console.log(error)


    try {
        const inputFeild2 = parseInt(agefield)
        if(isNaN(agefield)){
           throw "this is invalid input";
        }
        else if(18 > inputFeild2){
            throw "Under 18 is not allow in this room";
        }
        else if(inputFeild2 > 30){
            throw "murubbi will allow in 3 floor";
        }
        error.innerHTML = ""
    } catch (error) {
        console.log("Error: ", error)
        er.innerHTML = "Error: " + error;
    }



}