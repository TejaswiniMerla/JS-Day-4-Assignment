var sales = prompt("Enter the sales made by him during this year.");
var cpercentage;
if(sales>=0 && sales<5001)
    {
        var cpercentage = 0.02;
    }else if(sales>=5001 && sales<10001){
        var cpercentage = 0.05;
    }else if(sales>=10001 && sales<20001){
        var cpercentage = 0.07;
    }else{
        var cpercentage = 0.10;
    }
var commission = sales * cpercentage;
console.log(commission)







