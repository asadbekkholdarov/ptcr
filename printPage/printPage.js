const mainName = document.getElementById("main-name");
const minName = document.getElementById("min-name");
const passportSerie = document.getElementById("passport-serie");
const birthDate = document.getElementById("birth-date");
const sex = document.getElementById("sex");
const analize = document.getElementById("analize");
const result = document.getElementById("results");
const resultDate = document.getElementById("resultdate");
// console.log(mainName);
var qrImg = document.querySelector(".qr-image");


// ////////////////////
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
// ///////////////////
var retrievedObject = localStorage.getItem("personObj");
let parsetPersonData = JSON.parse(retrievedObject);
const { name, dateOfBirth, Seria, CovidTest, analysDate, gender, _id } =
  parsetPersonData;
mainName.innerHTML = name;
passportSerie.innerHTML = Seria;
minName.innerHTML = name;
birthDate.innerHTML = dateOfBirth;
sex.innerHTML = gender;
analize.innerHTML = analysDate;
result.innerHTML = CovidTest;
resultDate.innerHTML = `(${today})`;
console.log(resultDate);

function qrCodeGenerator() {      
  // if(qrInput.value.length > 0){ 
    // generateBtn.innerText = "Generating QR Code..."       
    // qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=%22+%27jslkfjlksdjfklsdlsdfdsffsdfsdfdsfdsfdsfds';
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=170x170&data="+`https://ptcr-app.herokuapp.com/person/${_id}`;
    qrImg.onload = function () {
      console.log(qrImg)
    }
  // }
    console.log('funciton is working')
}
qrCodeGenerator();
