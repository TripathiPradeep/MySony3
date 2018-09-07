var cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

function cashRegister(cartForParty){
	var sum=0;
	for(var index in cartForParty)
		{
	sum+=parseFloat(cartForParty[index]);
		}
	alert(sum);
	
}