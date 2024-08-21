//passing down properties of parent or class 1 to child class
//using key word extend

class parent{
    hell0=()=>{
        console.log("Hello from parent class");
    }
}

class child extends parent{}


let first =new child();
first.hell0();


class person{
    eat=()=>{
        console.log("i eat");
    }

    sleep=()=>{
        console.log("i sleep");
    }

    pray=()=>
    {
        console.log("i pray");
    }
}

class girl extends person{
    constructor(branch){
        super();
        this.branchname=branch;

    }
    pray=()=>{
        console.log("muneeba prays")
    }
}

let muneeba=new girl();
muneeba.pray()

//methood overriding , same name of functions but different purpose
//in child class we can override the method of parent class
//agr dono k nam same huye tu child ka apna he run hoga


//super keyword
//child class sy parent k constructor ko call krty 


//extends keyword
//parents class sy properties ya functions excess krty

//child, parents ,child



