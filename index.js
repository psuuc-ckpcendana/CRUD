var selectedRow = null;
function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}
//retrieve data
function readFormData() {
    

    var formData = {};
    formData["pCode"] = document.getElementById("pCode").value;
    formData["pName"] = document.getElementById("pName").value;
    formData["pQty"] = document.getElementById("pQty").value;
    formData["pPrice"] = document.getElementById("pPrice").value;
    return formData;
}

//insert data
function insertNewRecord(data) {
      var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
                cell1.innerHTML = data.pCode;
    var cell2 = newRow.insertCell(1);
                cell2.innerHTML = data.pName;
    var cell3 = newRow.insertCell(2);
                cell3.innerHTML = data.pQty;
    var cell4 = newRow.insertCell(3);
                cell4.innerHTML = data.pPrice;
    var cell5 = newRow.insertCell(4);
                cell5.innerHTML = '<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>';
}

//edit
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('pCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('pName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('pQty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('pPrice').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.pCode;
    selectedRow.cell[1].innerHTML = formData.pName;
    selectedRow.cells[2].innerHTML = formData.pQty;
    selectedRow.cell[3].innerHTML = formData.pPrice;
}
//delete
function onDelete(td) {
    if(confirm('do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//reset
function resetForm() {
    document.getElementById('pCode').value = '';
    document.getElementById('pName').value = '';
    document.getElementById('pQty').value = '';
    document.getElementById('pPrice').value = '';
}