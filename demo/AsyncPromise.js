async function myFunction(){
    console.log("Hello World!")
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
        res("Work harder!")
    }, 3000)
 })
 
myPromise.then(function(value){
    console.log(value);
});

async function myDisplay(){
    let myPromise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Great work!")
        }, 5000)
    })
    console.log(await myPromise);
}

myDisplay();