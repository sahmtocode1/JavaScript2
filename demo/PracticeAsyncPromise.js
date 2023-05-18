async function myFunction(){
    console.log("Feed the dog!")
 }

 myFunction().then(
    function(value){
        //code if successful
    },
    function(error){
        //code if there is an error
    }
 );

 const myPromise = new Promise(function(res,rej){
    setTimeout(function(){
        res("Right now!")
    }, 5000)
 })
 
myPromise.then(function(value){
    console.log(value);
});

async function myDisplay(){
    let myPromise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Nevermind, do it later!")
        }, 10000)
    })
    console.log(await myPromise);
}

myDisplay();

//async make a function return a Promise
//await make a function wait for a Promise

