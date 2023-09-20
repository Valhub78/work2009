// function sub() {
//     console.log('test');
// }

// let inputs = table.getElementsByTagName('input');
// document.addEventListener
//   for (let input of inputs) {
//     input.addEventListener('change', ()=>{
//         alert( input.value + ': ' + input.checked );    
//     })

//   }

// var ul = document.body.children[0];
// var li5 = ul.children[2];
// li5.insertAdjacentHTML("beforeBegin", "<li>3</li><li>4</li>");




let autoIncrement = 1;
function transferData() {
  var nameInput = document.getElementById("nameInput");
  var nameOutput = document.getElementById("nameOutput");

  nameOutput.insertAdjacentHTML("beforebegin", `
<div class="hard">
<p>   ${autoIncrement++}        </p>
<p></p>
<div> ${nameInput.value}</div>
</div> 




`, );



}

function transferData1() {
  var nameInput1 = document.getElementById("nameInput1");
  var nameOutput = document.getElementById("nameOutput");

  nameOutput.insertAdjacentHTML("beforebegin", `
<div class="hard">
<p>   ${autoIncrement++}        </p>
<p></p>
<div> ${nameInput1.value}</div>
</div> 




`, );
}