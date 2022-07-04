function clickFunctions(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val;

}
function clearCalculation(){
    document.getElementById("screen").value=""
}
function eqlCalculation(){
    var cal=document.getElementById("screen").value
    var result=eval(cal);
    document.getElementById("screen").value=result
}