const maleBtn = document.getElementById("maleBtn");
const femaleBtn = document.getElementById("femaleBtn");

const maleContentToBeInserted = `
<div class="form-group">
<label> Enter Your Age </label>
<input type="number" name="age" class="form-control" placeholder="How old are you !!" id='age' onkeyup="isEmpty()">
</div> <br>
<div class="form-group">
<label> Select Blood Group :  </label>
<select id="selectbox>
<option disaled hidden> Select </option>
<option value="A+">A +</option>
<option value="A-">A -</option>
<option value="B+">B +</option>
<option value="O+">O +</option>
</select>
</div><br>
<!--  -->

<div class="dropdown show">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Select Your Marriage Status
</a>

    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
        <a class="dropdown-item" onclick="handleSpouceContent()" href="#">Married</a>
        <a class="dropdown-item" href="#" onClick="handleUnmarried()"> Unmarried </a>
    </div>
    <div id="dynamicSpouceContent"></div>
</div><br>




<div class="form-group">
<button class="btn form-control btn-success" onClick="savedata"  id="btn" hidden> Submit </button> 
</div>

`;
const femaleContentToBeInserted = `
<div class="form-group">
<label> Enter Your Age </label>
<input type="number" name="age" class="form-control" placeholder="How old are you" id='age' onkeyup="isEmpty()">
</div> <br>
<div class="form-group">
<label> Select Blood Group :  </label>
<select id="selectbox>
<option disaled hidden> Select </option>
<option value="A+">A +</option>
<option value="A-">A -</option>
<option value="B+">B +</option>
<option value="O+">O +</option>

</select>
</div><br>
<!--  -->

<div class="dropdown show">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Select Your Marriage Status
</a>

    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
        <a class="dropdown-item" onclick="handleSpouceContent()" href="#">Married</a>
        <a class="dropdown-item"  onclick="handleUnmarried()" href="#" > Unmarried </a>
        
    </div>
    <div id="dynamicSpouceContent"></div>
</div><br>

<div class="form-group">
    
</div>
<button class="btn btn-success" type="" onClick="savedata()" id="submitBtn" hidden> Submit </button> 

`;
const spouceContentToBeInserted = `
<div class="form-group">
<label> Spouse Name </label>
<input type="text" name="sp_name" class="form-control" id='sp_name' placeholder="Enter Your Spouse Name" onkeyup="isEmpty()">
</div> <br>
`

const handleSpouceContent = () => {
    let dynamicSpouceContent = document.getElementById("dynamicSpouceContent");
    dynamicSpouceContent.innerHTML = ``;
    dynamicSpouceContent.innerHTML = spouceContentToBeInserted;
}

const handleUnmarried = () => {

    let dynamicSpouceContent = document.getElementById('dynamicSpouceContent')
    dynamicSpouceContent.innerHTML = `
            <div class="form-group">
        <button class="btn form-control btn-success"  onClick="savedata" id="btn" hidden> Submit </button> 
        </div> 
        `;
    document.getElementById("hardBtn").style.visibility = "visible";
}


maleBtn.addEventListener("click", () => {

    let dynamicContent = document.getElementById("dynamicContent");
    dynamicContent.innerHTML = ``;
    dynamicContent.innerHTML = maleContentToBeInserted;
})

femaleBtn.addEventListener("click", () => {
    let dynamicContent = document.getElementById("dynamicContent");
    dynamicContent.innerHTML = ``;
    dynamicContent.innerHTML = femaleContentToBeInserted;
})

// enable submit button if all fields not empty
function isEmpty() {
    let fname = document.getElementById("first_name").value;
    let age = document.getElementById("age").value;

    if (fname != "" && age != "") {
        document.getElementById("btn").removeAttribute("hidden")
    }
}

// query select valu
let selection = document.querySelector('select')
console.log(selection);


// local storage
function savedata() {

    let first_name = document.getElementById("first_name").value;
    console.log(first_name);
    localStorage.setItem('first_name', first_name)
    alert("saved")

    //gen

    var malebtn = document.getElementById("maleBtn")
    var femalebtn = document.getElementById("femaleBtn")
    if (maleBtn.checked == true)
        alert("selected:" + maleBtn.value)

    var select = document.getElementById("selectbox");
    selected = options[select.selectedIndex].value

}

document.getElementById("hardBtn").addEventListener("click", () => {
    let first_name = document.getElementById("first_name").value;
    let age = document.getElementById("age").value;
    let spouse_name = document.getElementById("sp_name").value;

    localStorage.setItem('first_name', first_name)
    localStorage.setItem('age', age)
    localStorage.setItem('spouse_name', spouse_name)

})