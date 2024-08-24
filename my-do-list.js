let addBtn = document.getElementById("add-text");
let textValue = document.getElementById("textInput");
let editbtn = document.getElementsByName("edit");
let deletebtn = document.getElementsByName("delete");
let tablerow = document.getElementsByName("tablerow");
let editWrap = document.getElementById("editWrap");

let newName = document.getElementById("newName");
getCount = 1;

addBtn.addEventListener("click", function () {
  let table = document.getElementById("tableName");
  table.innerHTML += `<tr name='tablerow' class="tablerow"><td name ="count">${getCount}</td><td id="newName">${
    textValue.value
  }</td><td>${tableGetTime()}</td> <td><button class="edit" name="edit">Edit</button></td><td><button class="delete" name="delete">Delete</button></td></tr>`;
  deleteTodo();
  getCount++;
  textValue.value = " ";
  if (textValue.value == " ") {
    return;
  }
  textValue.value.trim();
});

function tableGetTime() {
  let time = new Date();
  let hours = time.getHours(60);
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  return `${hours}hr:${minutes}m:${seconds}s`;
}

// edit buttons
function deleteTodo() {
  // console.log(editbtn);
  deletebtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let tr = btn.parentElement.parentElement.parentElement.remove();
    });
  });
}

// to update the serial number

function updateSN() {
  let newcount = document.getElementsByName("count");
  let C = 1;
  newcount.forEach((td) => {
    td.innerText = C;
    C++;
  });
  getCount = C;
}

// The edit  button  section
editbtn.addEventListener("click", function () {
  let editrow = td.parentElement.parentElement;
});
