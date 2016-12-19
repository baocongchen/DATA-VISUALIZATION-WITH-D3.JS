dataset <- read.csv("prosperLoanData.csv",row.names=NULL)
colnames(dataset)
plot(dataset$MonthlyLoanPayment, dataset$DebtToIncomeRatio)
small_dt <- dataset[sample(nrow(dataset), size = 0.05*nrow(dataset)),]
write.csv(small_dt, "small_prosperLoanData.csv")
library(dplyr)
summarise(group_by(small_dt, LoanStatus),
          mean=mean(LoanOriginalAmount), sd=sd(LoanOriginalAmount), count=n())
str(small_dt)

small_dt <- read.csv("small_prosperLoanData.csv",row.names=NULL)
summarise(group_by(small_dt, LoanStatus),
          mean=mean(AmountDelinquent), count=n())