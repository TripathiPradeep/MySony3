/*function x(){


var n = 3;
var sample = new Array();
for (var i = 0; i < n; i++)
    sample.push(new Object());

sample[0] = {title:"Java", author:"Doe", alreadyRead:false};
sample[1] = {title:"javascript", author:"ranjana", alreadyRead:true};
sample[2] = {title:"HTML", author:"pradeep", alreadyRead:true};


for (var i = 0; i < n; i++){
document.write(sample[i].title + " !!!!!! " + sample[i].author +"!!!!!!!" +  sample[i].alreadyRead);
document.write("<br>");
}
}*/
function x(){
	var obj= {title:"KNPH", duration:3, Actors:['sajdhjsdh','fjdkdsjdksjk']};

document.write("<" +obj.title+">   for " + "<"+obj.duration+"> .   Actors:  <" +obj.Actors +">");
}