var quizQue = [
["What is I?","india"],
["What is u?","united"],
["What is a?","america"],
];
var que;
var answer;
var response;
var correctAns =0;
var correctAnsArray = [];
var wrongAnsArray = [];
for(var i=0; i<quizQue.length; i+=1)
{
    que = quizQue[i][0];
	answer = quizQue[i][1];
	response = prompt(que);
	if(answer === response)
	{correctAns += 1;
    correctAnsArray.push(que);
}
else{wrongAnsArray.push(que);}
}
//to display collectAns Array
var correctAnsList = "<ol>";
for(var i=0; i<correctAnsArray.length; i+=1)
{
	correctAnsList += "<li>" + correctAnsArray[i]   + "</li>"
}
correctAnsList += "</ol>";

//to display wrongAnsList
var wrongAnsList = "<ol>";
for(var i=0; i<wrongAnsArray.length; i+=1)
{
	wrongAnsList += "<li>" + wrongAnsArray[i]   + "</li>"
}
wrongAnsList += "</ol>";
document.write("You have answered "+ correctAns + " correctly </br>");
document.write("<h1> You have answered following questions correctly</h1></br>");
document.write(correctAnsList);
document.write("<h1> You need to work on following questions</h1></br>");
document.write(wrongAnsList);




