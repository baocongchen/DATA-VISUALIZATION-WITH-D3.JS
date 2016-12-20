# Data Visualization by Buu Thong Tran
## Udacity Data Analyst Project 6

### Summary

In this project, I created an explanatory data visualization from Prosper Loan data that highlights the relationships loan status has with other variables such as loan original amount, amount delinquent, employment status, and term. 
<hr>
 
### Design

Dataset: Loan Data from Prosper. 
<br>The data contains 113,937 loans with 81 variables on each loan, including loan amount, loan original amount, loan status, and many others. Load time was one of the big problems that I had since the data was larger than 80M, so I used random sample to extract only 5% from the total data. As a result, the load time was cut significantly. The page did not look beautiful and responsive, so I improved it by using Twitter Bootstrap. The other problem is that users may not understand the meaning of the variables showed in each chart, so I decided to design a place where I could add some description and key points. Users may use the charts to analyze loan status that do not belong to `Current`, `Completed`, or `FinalPaymentInProgress` categories, which are `Defaulted`, `Chargedoff`, and `Past Due` which also is divided into smaller categories. I used dimple.js to visualize the data.

### Feedback

I posted my project on Facebook and Linkedin and asked for feedback but have not received any feedback yet.


### Post Feedback Design