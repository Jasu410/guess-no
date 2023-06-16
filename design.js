var a=Math.ceil(Math.random()*100);
console.log(a);
var c=0;
document.getElementById("Click").onclick=function(){
    var n=parseInt(document.getElementById("g").value);
    if(n<a){
     document.getElementById("result").textContent="try it greater no";
     c++;
    }
     else if(n>a){
     document.getElementById("result").textContent="try it smaller no";
     c++;
     }
     else
     {
     document.getElementById("result").textContent="Congrulations!!!you have got the number in "+c+" tries";
     }
}
