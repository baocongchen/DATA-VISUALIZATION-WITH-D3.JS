d3.csv("small_proserLoanData.csv", function(dataset) {
	var dat = dataset;
	var svg1 = dimple.newSvg("#chart1", "100%", 520);
	var bar_chart_1 = new dimple.chart(svg1, dat);
	bar_chart_1.setBounds(60, 35, "60%", 350);
	bar_chart_1.addCategoryAxis("x", "LoanStatus");
	bar_chart_1.addMeasureAxis("y", "BorrowerRate");
	bar_chart_1.addSeries(null, dimple.plot.bar);
	bar_chart_1.draw();
	var chart1_div = document.getElementsByClassName('row chart1')[0];
    var h3_1 = document.createElement('h3');
    h3_1.innerHTML = "Loan Status x Borrow Rate";
    chart1_div.insertBefore(h3_1, chart1_div.childNodes[0]);

	var svg2 = dimple.newSvg("#chart2", "100%", 450);
	var bar_chart_2 = new dimple.chart(svg2, dat);
	bar_chart_2.setBounds(120, 35, "60%", 350);
    bar_chart_2.addMeasureAxis("x", "IncomeRange");
    bar_chart_2.addCategoryAxis("y", ["LoanStatus"]);
    bar_chart_2.addSeries("EmploymentStatus", dimple.plot.bar);
    bar_chart_2.addLegend(20, 10, 510, 20, "right");
    bar_chart_2.draw();
    var chart2_div = document.getElementsByClassName('row chart2')[0];
    var h3_2 = document.createElement('h3');
    h3_2.innerHTML = "Income Range x Loan Status";
    chart2_div.insertBefore(h3_2, chart2_div.childNodes[0]);

    var svg3 = dimple.newSvg("#chart3", "100%", 450);
    var bar_chart_3 = new dimple.chart(svg3, dat);
    bar_chart_3.setBounds(120, 35, "60%", 350);
    bar_chart_3.addCategoryAxis("y", "LoanStatus");
    bar_chart_3.addMeasureAxis("x", "AmountDelinquent");
    bar_chart_3.addSeries("Term", dimple.plot.bar);
    bar_chart_3.addLegend(50, 20, 200, 20, "right");
    bar_chart_3.draw();
    var chart3_div = document.getElementsByClassName('row chart3')[0];
    var h3_3 = document.createElement('h3');
    h3_3.innerHTML = "Amount Delinquent x Loan Status";
    chart3_div.insertBefore(h3_3, chart3_div.childNodes[0]);
    
})
