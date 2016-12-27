# Data Visualization by Buu Thong Tran
## Udacity Data Analyst Project 6

### Summary

In this project, I created an explanatory data visualization from Prosper Loan data that highlights the relationships loan status has with other variables such as loan original amount, amount delinquent, employment status, and term. 
<hr>
 
### Design

Dataset: Loan Data from Prosper. 
<br>The data contains 113,937 loans with 81 variables on each loan, including loan amount, loan original amount, loan status, and many others. Load time was one of the big problems that I had since the data was larger than 80M, so I used random sample to extract only 5% from the total data. As a result, the load time was cut significantly. The page did not look beautiful and responsive, so I improved it by using Twitter Bootstrap. The other problem is that users may not understand the meaning of the variables showed in each chart, so I decided to design a place where I could add some description and key points. Users may use the charts to analyze loan status that do not belong to `Current`, `Completed`, or `FinalPaymentInProgress` categories, which are `Defaulted`, `Chargedoff`, and `Past Due` which also is divided into smaller categories. I used dimple.js to visualize the data.

### Feedback

I pose the following questions as I collect feedback.<br>
What do you notice in the visualization?<br>
What questions do you have about the data?<br>
What relationships do you notice?<br>
What do you think is the main takeaway from this visualization?<br>
Is there something you don’t understand in the graphic?<br>

- Feedback 1:
The charts are interactive and easy to understand. Each chart has a description and key points, so it is easy to relate the information to each chart. The data source was described but there is no link where I can download the data to verify the info. 
- Feedback 2:
The visualiztion shows the relationships between loan status and other variables. The explanation provided in each chart helps me understand the main takeaway of the charts: account that has term 36 months and employment status categorized as full-time and employed should be the main subject of analysis in next phase investigation. There is one thing I notice is the load time. I have to wait around 10 seconds until the charts show. Hope you will improve the load time. 
- Feedback 3:
The charts are well-designed and backed up with explanation, so it is easy to understand what you try to explain here. I think the relationships between loan status and other variables showed on the charts can be understood easily, and people can use this understanding to further investigate and develop a solution to decrease the delinquent amount of accounts whose term is 36 and employment status classified as full-time and employment. I would suggest that you change the chart labels by adding a space between each word in a label. 

### Post Feedback Design
I implemented the following improvements after examining all the feedback: <br>

#### Added link to download the data.<br>
![Feedback 1](/stylesheets/images/feedback1.png?raw=true "Feedback 1") <br>

#### Added space between each word in a label. <br>
![Feedback 3-1](/stylesheets/images/feedback3-1.png?raw=true "Feedback 3-1")
![Feedback 3-2](/stylesheets/images/feedback3-2.png?raw=true "Feedback 3-2")
![Feedback 3-3](/stylesheets/images/feedback3-3.png?raw=true "Feedback 3-3") <br>

#### I did not improve the time needed to load the data. However, I have added a loading icon to notify users that the page is loading and they have to wait until the charts appear.<br>
![Feedback 2](/stylesheets/images/feedback2.png?raw=true "Feedback 2")<br>


### Reference

[dimple.js documentation](https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#setBounds "DimpleJS's Wiki")

[Twitter Bootstrap documentation](http://getbootstrap.com/getting-started/ "Twitter Bootstrap")