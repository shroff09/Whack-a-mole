const butn = document.getElementById('clk');

 function random(){
   setInterval(()=>{
    const y = Math.floor(Math.random()*9); 
  // console.log(y);
  const array= [ff0,ff1,ff2,ff3,ff4,ff5,ff6,ff7,ff8];
console.log(array[y]);
array[y].style.backgroundImage="url('download.jfif')"; 
 setInterval(()=>{
 
  array[y].style.backgroundImage="url('')";
   // array[y].style.backgroundImage="white";
},3000); 
   return y;
   },2500) ;  
}

/*function clear(random){
  setTimeout(()=>{
    const end = document.createElement("h1").innerHTML('Game ends');
    random();
  },10000);
}*/


//const box = document.getElementById('ff1');
 
butn.addEventListener("click",random);