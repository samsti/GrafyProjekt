const tableBody = document.getElementById('table-body');

// Generate 100 rows of fake data using Faker.js
for (let i = 1; i <= 100; i++) {
    const id = i;
    const name = faker.name.findName();
    const age = faker.random.number({min: 18, max: 65});
    const money = faker.finance.amount();

    // Create a new table row with the data
    const row = document.createElement('tr');
    row.innerHTML = `
				<td>${id}</td>
				<td>${name}</td>
				<td>${age}</td>
				<td>${money}</td>
			`;

    // Add the row to the table body
    tableBody.appendChild(row);
}

