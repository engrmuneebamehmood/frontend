//practice code for classes

let data="this is user data"
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
}
viewdata=()=>{
    console.log("user data: ", data);
}
}

let student1=new user("muneeba","muneeba0");
let student2=new user("mehmood", "muneeba26");

student1.viewdata();
student2.viewdata();

let teacher=new user("mukhtiar","bano7");

teacher.viewdata();

class Admin extends user

{

    constructor(name,email)
    {
        super(name,email);
    }
    editdata=()=>{
        data="admin edited user data";
    }
}

let adm=new Admin("abc", "xyz");

adm.editdata();
adm.viewdata();