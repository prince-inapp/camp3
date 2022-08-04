var students = []
var num = 0

function toTitleCase(str){
    var sentence = str.toLowerCase().split(" ");
    for(var i = 0; i < sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(i);
    }
    return sentence.join(" ");
}
function getInput(msg){
    var inp = prompt(msg).trim();
    if(inp == null || inp == ""){
        alert("Empty Input...Please Try Again")
        getInput(msg)
    }
    else{
        return toTitleCase(inp)
    }
};

class Student{
    constructor(){
        this.name_ = undefined;       this.class_ = undefined;        this.age = undefined;
        this.gender = undefined;        this.location = undefined;
    }
    displayDetails(){
        console.log("Name :"+this.name_+"Class :"+this.class_+"Age:"+this.age+"Gender :"+this.gender+"Location :"+this.location)
    }
    addStudent(s){
        students[num] = s
    }
    editStudent(s){
        let name_ = getInput("Enter your Name: ");
        let class_ = getInput("Enter Your Class :");
        let age = getInput("Enter Your Age: ");
        let gen = getInput("Enter Your Gender ")
    }

}
