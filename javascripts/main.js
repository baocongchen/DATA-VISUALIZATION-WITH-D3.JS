d3.csv("small_proserLoanData.csv", function(dataset) {
	var dat = dataset;
	var svg1 = dimple.newSvg("#chart1", 800, 500);
	var bar_chart_1 = new dimple.chart(svg1, dat);
	bar_chart_1.setBounds(60, 30, 510, 305);
	bar_chart_1.addCategoryAxis("x", "LoanStatus");
	bar_chart_1.addMeasureAxis("y", "BorrowerRate");
	bar_chart_1.addSeries(null, dimple.plot.bar);
	bar_chart_1.draw();

	var svg2 = dimple.newSvg("#chart2", 800, 450);
	var bar_chart_2 = new dimple.chart(svg2, dat);
	bar_chart_2.setBounds(150, 50, 480, 330);
    bar_chart_2.addMeasureAxis("x", "IncomeRange");
    bar_chart_2.addCategoryAxis("y", ["LoanStatus"]);
    bar_chart_2.addSeries("EmploymentStatus", dimple.plot.bar);
    bar_chart_2.addLegend(200, 20, 510, 20, "right");
    bar_chart_2.draw();

    var svg3 = dimple.newSvg("#chart3", 800, 450);
    var bar_chart_3 = new dimple.chart(svg3, dat);
    bar_chart_3.setBounds(120, 30, 510, 305);
    bar_chart_3.addCategoryAxis("y", "LoanStatus");
    bar_chart_3.addMeasureAxis("x", "AmountDelinquent");
    bar_chart_3.addSeries("ListingCategory", dimple.plot.bar);
    bar_chart_3.addLegend(120, 10, 510, 20, "right");
    bar_chart_3.draw();
    
})
