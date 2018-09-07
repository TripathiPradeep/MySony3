function a(){
	var curday = function(sp){

today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy =today.getFullYear();

return (mm+sp+dd+sp+yyyy);

};

console.log(curday('/'));
console.log(curday('-'));
}