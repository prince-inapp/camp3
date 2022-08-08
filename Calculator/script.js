function toTxt(n){
    document.getElementById("txtdisp").value += n; 
    var content = document.getElementById("txtdisp").value;
    if(content.length > 10){
        err("Number is too long");
        
        document.getElementById("errTxt").innerHTML = "";
        document.getElementById("txtdisp").value = "";
    }
}

function calculate(){
    var content = document.getElementById("txtdisp").value;
    var result = eval(content);
    if(!result){
        err("Invalid Expression");

    }
    console.log(result);
    document.getElementById("txtdisp").value = result;
}



function clr(){
    document.getElementById("txtdisp").value = "";
}
function err(txt){
    document.getElementById("errTxt").innerHTML = txt;
}