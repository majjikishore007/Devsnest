var data1="";
var data2="";
var wholeData="";
var isNumComplete = false;
// const document.getElementById('ans').onclick;
// console.log("hello world",stop);
document.querySelector('#ans').addEventListener('click', function(event) {
    event.preventDefault();
  });
  document.querySelectorAll('#number').forEach(e=>{
    addEventListener('click', function(event) {
        event.preventDefault();
      }); 
  })
const handleChange =(value)=>{
   console.log(value);
    if(isNumComplete){
        data2+=value;
        data1=""
    }
    else{
        data1+=value;
       
    }
  wholeData+=value;
   console.log("wholeData",wholeData);
   document.getElementById("input").value = wholeData;
}
const handleAddition=(value) =>{
    console.log(value);
    isNumComplete=true;
    
    wholeData+=value;
    document.getElementById("input").value = wholeData;
}
const handleSubstration=() =>{

}
const handleDivision=() =>{

}
const stop=()=>{
    
    console.log("hello world");
    console.log("end the prorgam");
    

    document.getElementById("input").value = wholeData;
}


const handleclearAll=()=>{
    data1=""
    data2=""
    wholeData=""
    isNumComplete=!isNumComplete;
    document.getElementById("input").value = wholeData;
}