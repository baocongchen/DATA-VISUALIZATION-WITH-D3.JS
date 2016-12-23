// Get data from an external location and generate the chart when it returns
d3.csv("small_prosperLoanData.csv", function(dataset) {
	var dat = dataset;
	// Create chart 1
	// Adds an svg element based on the passed selector and returns the underlying svg element
	var svg1 = dimple.newSvg("#chart1", "100%", 520);
	// Create a new chart object based on this data and svg
	var bar_chart_1 = new dimple.chart(svg1, dat);
	bar_chart_1.setBounds(60, 35, "70%", 350);
	bar_chart_1.addCategoryAxis("x", "LoanStatus");
	bar_chart_1.addMeasureAxis("y", "LoanOriginalAmount");
	bar_chart_1.addSeries("", dimple.plot.bar);
	bar_chart_1.draw();
	// Create header and description section for chart 1
	var chart1_div = document.getElementsByClassName('sec chart1')[0];
	var h3_1 = document.createElement('h3');
	h3_1.innerHTML = "Loan Status x Loan Original Amount";
	chart1_div.insertBefore(h3_1, chart1_div.childNodes[0]);
	var html1 = '<div class="col-sm-12 col-md-5 col-lg-5 well"><h4>Description and key points</h4>\
	<ul><li>Loan Status: The current status of the loan: Cancelled,  Chargedoff, Completed, Current,\
	Defaulted,	FinalPaymentInProgress, PastDue. The PastDue status will be accompanied by a delinquency \
	bucket.</li><li>Loan Original Amount: The origination amount of the loan.</li></ul>\
	<div class="table-responsive"><table class="table"><thead><tr><th>Loan Status</th>\
	<th>Average Loan Original Amount</th><th>Count</th></tr></thead><tbody><tr><td>Current</td>\
	<td>10294</td><td>2817</td></tr><tr><td>Past Due (61-90 days)</td><td>9600</td><td>10</td></tr>\
	<tr><td>FinalPaymentInProgress</td><td>9321</td><td>14</td></tr><tr><td>Past Due (16-30 days)</td>\
	<td>9267</td><td>16</td></tr></tbody></table></div><p>Total loan original amount of accounts which have status categorized as \
	Defaulted, Chargedoff, and Past Due exceeds $6,000,000 with chargedoff accounts having the highest loan original amount. A \
	chargedoff occurs when an account becomes severely delinquent on a debt, so it is essential to deal with accounts categorized as chargedoff.</p></div>';
	chart1_div.insertAdjacentHTML('beforeend', html1);

	// Create chart 2
	// Adds an svg element based on the passed selector and returns the underlying svg element
	var svg2 = dimple.newSvg("#chart2", "100%", 450);
	// Create a new chart object based on this svg
	var bar_chart_2 = new dimple.chart(svg2, dat);
	bar_chart_2.setBounds(120, 40, "60%", 350);
	bar_chart_2.addMeasureAxis("x", "AmountDelinquent");
	bar_chart_2.addCategoryAxis("y", ["LoanStatus"]);
	bar_chart_2.addSeries("EmploymentStatus", dimple.plot.bar);
	bar_chart_2.addLegend("2%", 10, "100%", "100%", "right");
	bar_chart_2.draw();
	// Create header and description section for chart 2
	var chart2_div = document.getElementsByClassName('sec chart2')[0];
	var h3_2 = document.createElement('h3');
	h3_2.innerHTML = "Amount Delinquent x Loan Status x Employment Status";
	chart2_div.insertBefore(h3_2, chart2_div.childNodes[0]);
	var html2 = '<div class="col-sm-12 col-md-5 col-lg-5 well"><h4>Description and key points</h4>\
	<ul><li>Loan Status: The current status of the loan: Cancelled,  Chargedoff, Completed, Current, Defaulted,\
	FinalPaymentInProgress, PastDue. The PastDue status will be accompanied by a delinquency bucket.</li>\
	<li>Amount Delinquent: Dollars delinquent at the time the credit profile was pulled.</li></ul>\
	<div class="table-responsive"><table class="table"><thead><tr><th>Loan Status</th><th>Average Amount Delinquent</th>\
	<th>Count</th></tr></thead><tbody><tr><td>Past Due (61-90 days)</td><td>1723</td><td>10</td></tr><tr><td>Past Due (1-15 days)</td>\
	<td>1697</td><td>48</td></tr><tr><td>Current</td><td>839</td><td>2817</td></tr><tr><td>Past Due (16-30 days)</td>\
	<td>677</td><td>16</td></tr></tbody></table></div><p>Looking at the deliquent amount of Defaulted group and Chargedoff group, \
	I noticed	that most of them belong to the accounts whose job status is categorized as full-time and employed</p></div>';
	chart2_div.insertAdjacentHTML('beforeend', html2);

	// Create chart 3
	// Adds an svg element based on the passed selector and returns the underlying svg element
	var svg3 = dimple.newSvg("#chart3", "100%", 450);
	// Create a new chart object based on this svg
	var bar_chart_3 = new dimple.chart(svg3, dat);
	bar_chart_3.setBounds(120, 35, "60%", 350);
	bar_chart_3.addCategoryAxis("y", "LoanStatus");
	bar_chart_3.addMeasureAxis("x", "AmountDelinquent");
	bar_chart_3.addSeries("Term", dimple.plot.bar);
	bar_chart_3.addLegend("2%", 20, 200, 20, "right");
	bar_chart_3.draw();
	// Create header and description section for chart 3
	var chart3_div = document.getElementsByClassName('sec chart3')[0];
	var h3_3 = document.createElement('h3');
	h3_3.innerHTML = "Amount Delinquent x Loan Status x Term";
	chart3_div.insertBefore(h3_3, chart3_div.childNodes[0]);
	var html3 = '<div class="col-sm-12 col-md-5 col-lg-5 well"><h4>Description and key points</h4>\
	<ul><li>Loan Status: The current status of the loan: Cancelled,  Chargedoff, Completed, Current, Defaulted,\
	FinalPaymentInProgress, PastDue. The PastDue status will be accompanied by a delinquency bucket.</li>\
	<li>Amount Delinquent: Dollars delinquent at the time the credit profile was pulled.</li></ul>\
	<div class="table-responsive"><table class="table"><thead><tr><th>Loan Status</th><th>Average Amount Delinquent</th>\
	<th>Count</th></tr></thead><tbody><tr><td>Past Due (61-90 days)</td><td>1723</td><td>10</td></tr><tr><td>Past Due (1-15 days)</td>\
	<td>1697</td><td>48</td></tr><tr><td>Current</td><td>839</td><td>2817</td></tr><tr><td>Past Due (16-30 days)</td>\
	<td>677</td><td>16</td></tr></tbody></table></div><p>Chargedoff and Defaulted accounts whose term is 36 has the highest \
	delinquent amount.</p></div>';
	chart3_div.insertAdjacentHTML('beforeend', html3);
	// Create div element and add conclusion
	var conclusion = '<div class="sec row"><h3>Conclusion</h3><p class="tab1">Looking at the charts above, we can see that the loan original amount of Chargedoff \
	and Defaulted accounts exceeds $6,000,000. Based on the parterns discovered above, when we consider further research in the future, \
	we should focus on Chargedoff and Defaulted accounts whose term is 36 months and employment status categorized as full-time and employed.</p></div>';
	chart3_div.insertAdjacentHTML('afterend', conclusion);
});

// Fade out loading icon
$(window).on('load', function() {
  $(".loader").fadeOut("slow");
});
