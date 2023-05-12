const tableBody = document.getElementById('table-body');

for (let i = 1; i <= 100; i++) {
    const id = i;
    const name = faker.name.findName();
    const age = faker.random.number({min: 18, max: 65});
    const money = faker.finance.amount();

    const row = document.createElement('tr');
    row.innerHTML = `
				<td>${id}</td>
				<td>${name}</td>
				<td>${age}</td>
				<td>${money} $</td>
			`;

    tableBody.appendChild(row);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Series 1');
    data.addColumn('number', 'Series 2');
    data.addColumn('number', 'Series 3');
    data.addRows([
        [1, 37.8, 80.8, 41.8],
        [2, 30.9, 69.5, 32.4],
        [3, 25.4, 57, 25.7],
        [4, 11.7, 18.8, 10.5],
        [5, 11.9, 17.6, 10.4],
        [6, 8.8, 13.6, 7.7],
        [7, 7.6, 12.3, 9.6],
        [8, 12.3, 29.2, 10.6],
        [9, 16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
    ]);

    // Set chart options
    var options = {'title':'Chart Title',
        'width':1000,
        'height':500};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart'));
    chart.draw(data, options);
}
