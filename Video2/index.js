const FS=require('fs');

FS.writeFile('demo.txt',"Here is content",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Successfull");
    }
})

FS.appendFile("demo.txt","Keep it UP",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("It's successfull")
    }
})

FS.readFile("demo.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data);
    }
})
FS.rename("demo.txt","myDemo.txt",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("renamed");
    }
})



//OS

const OS=require('os');
console.log(OS);