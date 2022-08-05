class Student{
    constructor(){
    var name_ = '';
    var class_ = '';
    var age = '';
    var gender = '';
    var location_ = '';
    }
}

function getInput(msg){
    var inp = prompt(msg).trim();
    console.log(inp)
    if(inp == null || inp == ""){
        alert("Invalid Input...Please Try Again")
        getInput(msg)
    }
    else{
        return inp;
    }
};

function toTitleCase(str){
    var sentence = str.toLowerCase().split(" ");
    for(var i = 0; i < sentence.length; i++){
        console.log(sentence[i])
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i+1].slice(i);
        console.log(sentence[i])
    }
    return sentence.join(" ");
console.log(toTitleCase("prince johnson"))

}

function getIntInput(msg){
    var num = parseInt(prompt(msg));
    /* if(isNaN(num)){
        alert("Invalid Input...Please Try Again")
        getIntInput(msg)
    } */
    return num;
}

list_of_students = []

function addStudent(){
    var student = new Student();
    student.name_ = getInput("Enter Student Name");
    student.class_ = getInput("Enter Student Class");
    student.age = getInput("Enter Student Age");
    student.gender = getInput("Enter Student Gender");
    student.location_ = getInput("Enter Student Location");
    alert("Name: "+student.name_+"\nClass :"+student.class_+"\nAge :"+student.age+"\nGender: "+student.gender+"\nLocation:"+student.location_)
    return student
}

function getIndex(stud_name){
    for(var i=0; i<list_of_students.length; i++){
        if(list_of_students[i].name_ == stud_name){
            console.log("Index of "+stud_name+" is "+i)
            return i;
        }
    }
}

opt = getIntInput("Enter Option \n1: Add student\n 2: Edit Student\n 3: Delete Student\n 4: Display Student\n 5: Exit")
while(opt!=5){
    if(opt == 1){
        list_of_students.push(addStudent());
    }
    else if(opt == 2){
        var student_found = false;
        var stud_name = getInput("Enter Name of Student to Edit");
        var index = getIndex(stud_name);
        console.log("Index :"+index)
        if(index!=-1){
            student_found = true;
            var student = list_of_students[index];
            student.name_ = getInput("Enter Student Name");
            student.class_ = getInput("Enter Student Class");
            student.age = getInput("Enter Student Age");
            student.gender = getInput("Enter Student Gender");
            student.location_ = getInput("enter Student Location");
        }
        if(!student_found){
            alert("Student not found")
        }
    }
    else if(opt == 3){
        var index = getIndex(getInput("Enter Name of Student to Delete"));
        list_of_students.splice(index,1);
    }
    else if(opt == 4){
        for(var i=0;i<list_of_students.length;i++){
            console.log("Name :"+list_of_students[i].name_+" "+"Class :"+list_of_students[i].class_+" "+"Age: "+list_of_students[i].age+" "+"Gender: "+list_of_students[i].gender+" "+"Location :"+list_of_students[i].location_);
            //console.log(list_of_students[i])
        }
    }
    else{
        alert("Invalid Option")
    }
    opt = getIntInput("Enter Option \n1: Add student\n 2: Edit Student\n 3: Delete Student\n 4: Display Student\n 5: Exit")
}
