const student={
    fullname:"muneeba mehmood",
    age:22,
    printdetail:function(){
        console.log("name: " ,this.fullname);
}}
student.printdetail();
//prototype ek object ka object hy

// ___proto___

const graduate={
    rollnumber: 54
};

graduate.__proto__=student; //making prototype , so that student waly function hum graduate mein use kr skien
graduate.printdetail();

//jb object ur prototype k function same hu tu object wala call hoga 