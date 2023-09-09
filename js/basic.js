
/* Register event listener for empty-table button */
document.getElementById("empty-table").addEventListener("click", clearTable);

/* Register event listener for submit-data button */
document.getElementById("submit-data").addEventListener("click", submitFormData);

/*
    Function to delete all rows from table with id data-table.
*/
function clearTable() {
    const table = document.getElementById("data-table");
    const rows = table.rows.length;
  
    for (var x=rows; x>1; x--) {
      table.deleteRow(1);
   }
}

function submitFormData() {
    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const admin = document.getElementById("input-admin");
    const image = document.getElementById("input-image").value;
    const myTable = document.getElementById("data-table");

    console.log(username);
    console.log(admin.checked);
  
    index = tableContainsUser(myTable, username);
  
    if (index === undefined) {
      let usernameCell = document.createElement("td");
      usernameCell.textContent = username;
  
      let emailCell = document.createElement("td");
      emailCell.textContent = email;
  
      let adminCell = document.createElement("td");
      adminCell.textContent = admin.checked ? "X" : "-";
  
      let imageCell = document.createElement("td");
      imageCell.textContent = image;
  
      let newTableRow = document.createElement("tr");
      newTableRow.appendChild(usernameCell);
      newTableRow.appendChild(emailCell);
      newTableRow.appendChild(adminCell);
      newTableRow.appendChild(imageCell);
  
      let table = document.getElementById("data-table");
      table.appendChild(newTableRow);
    }
    else {
      var row = myTable.rows[index];
      row.cells[0].textContent = username;
      row.cells[1].textContent = email;
      row.cells[2].textContent = admin.checked ? "X" : "-";
      row.cells[3].textContent = image;
    }
}

function tableContainsUser(myTable, username)
{
  for (var i=0; i < myTable.rows.length; i++) {
    var row = myTable.rows[i];

    // Iterate through each cell in the row
    for (var j = 0; j < row.cells.length; j++) {
      var cell = row.cells[j];

      // Check if the cell contains the search value
      if (cell.innerHTML.includes(username)) {
        return i;
      }
    }
  }

  return;
}