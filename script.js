function createTable() {
  // Step 1: Get user input for rows and columns
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // Step 2: Validate inputs
  const rows = parseInt(rn);
  const cols = parseInt(cn);

  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  // Step 3: Get the table element and clear old content
  const table = document.getElementById("myTable");
  table.innerHTML = "";

  // Step 4: Generate table dynamically
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
