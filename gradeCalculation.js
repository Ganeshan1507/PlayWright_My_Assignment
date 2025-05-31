let grade;
function studentScore(mark)
{
    
switch(true){
case (mark >= 90) :
    {
        grade =("Student Score First Class Grade");
        break;
        
    }
case (mark >= 80) :
    {
        grade =("Student Score Second Class Grade");
        break;
    }
    case (mark >= 70) :
    {
        grade =("Student Score Third Class Grade");
        break;
    }
    case (mark >= 60) :
    {
        grade =("Student Score Fourth Class Grade");
        break;
    }
     case (mark < 35) :
    {
        grade =("Failed Mark");
        break;
    }
   
}
console.log(grade)
}

studentScore(60);