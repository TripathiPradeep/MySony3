/*function myFunction(){

var month = document.getElementById("myInput").value;

switch(month) {

case "january":
    
case "feb":
    
   
case "march":
    text = "winter";
    break;
case "april":
    
case "may":
    
case "june":
    text = "summer";
    break;
case "july":
   
case "august":

case "september":
    text = "Rainy!";
    break;
case "october":
   
case "november":
	  
case "december":
	 text = "Spring!";
    break;
    default: text= "forgot the month??";
}
alert(text);
}*/

/*function myFunction(){
	
	for (var counter1=1;counter1<5;counter1++)
		for(var counter2=5;counter2>0;counter2--)		
	{
			sum+=1;
	}
}*/
/*function sum(num1,num2){
	return num1+num2;
}

function test(){
	var name = Array(2);
	name[0]='AA'
		name[1]='BB'
     for(index in name){
    	 alert(name[index]);
     }
}*/

function Car(make, model, year, engine) {

		this.make = make;

		this.model = model;

		this.year = year;

		this.engine = engine;
		this.displayCar=displayCar;

		}
function displayCar(){
	var result= "A Beautiful" +this.year+""+this.make+""+this.model;
	alert(result);
	return result;
}

function test(){
	var car1= new Car("ford","mustang",2018,{cylinder: 100, size: 5});
	car1.displayCar();






	   /*myToyota=new Car("ford","mustang",2018,{cylinder: 100,size: 5});
	   document.write(myToyota.make);*/
	
	
	/*var myHonda={ color:"red",wheels:4,engine:{cylinder:4,size:2.2}}
	document.write(myHonda.engine.cylinder  +"  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +myHonda.engine.size );
	alert("yiiipppeee!!!");*/
    
	
	/*var myCar = new Object();
	myCar.make="ford";
	myCar.model="Mustang";
	myCar.year= 1969;
	
	document.write(myCar.make);*/
/*var abc=document.getElementById("demo");
abc.innerHTML= "hello raif";
console.log("errrrooorrrr");*/

}