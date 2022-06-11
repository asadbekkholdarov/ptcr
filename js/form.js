const inputs = document.querySelectorAll(".gs-neumorphic-input");
const addMemberBtn = document.querySelector(".gs-neumorphic-button");
let postMemberUrl = "https://ptcr-app.herokuapp.com/person";
const userObj = {};
inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    userObj[e.target.name] = e.target.value;
    console.log(userObj);
  });
});

addMemberBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hdfdfd");
  getTodoItems();
});

const getTodoItems = async () => {
  axios
    .post(postMemberUrl, userObj)
    .then((response) => {
      console.log(response.data.data.person);
      localStorage.setItem(
        "personObj",
        JSON.stringify(response.data.data.person)
      );
      location.href = "printPage.html";
    })
    .catch((err) => console.log(err));
};

// localStorage.setItem("testObject", JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem("testObject");

// console.log("retrievedObject: ", JSON.parse(retrievedObject));
