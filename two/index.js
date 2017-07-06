var blocks=document.querySelectorAll('div');
var empty=[];
empty.length=blocks.length;
var arr=new Array(4);
for(var i=0;i<4;i++){
	arr[i]=new Array(4);
}
for(var i=0,k=0;i<4;i++){
	for(var j=0;j<4;j++){
		arr[i][j]=blocks[k];
		k++;
	}
}
for(var i=0;i<blocks.length;i++){
     empty[i]=blocks[i].id;
}
function find(){
	return Math.floor(Math.random()*empty.length);
}
function fill(){
	var position=find();
	arr[parseInt(position/4)][position%4].value=2;
	arr[parseInt(position/4)][position%4].innerHTML="2"
	empty.splice(position,1);
}
fill();
console.log(empty);
document.body.addEventListener('keydown',function(event){
         if(event.key=="ArrowDown"){
         	manipulate(-1)
         }
         else if(event.key=="ArrowUp"){
            manipulate(1);
         }
         else if(event.key=="ArrowLeft"){
         	manipulate(-2)
         }
         else if(event.key=="ArrowRight"){
           manipulate(2); 
         }
});
function manipulate(dir){
	if(dir==-2){
		for(var i=0;i<4;i++){
			for(var j=1;j<4;j++){
				if(arr[i][j].value!=undefined){
					var k = j-1;
					while((arr[i][k].value==undefined)&&k>0){
						k--;
					}
					if(arr[i][k].value==undefined){
						arr[i][k].value=arr[i][j].value;
						arr[i][j].value=undefined;
						var a=empty.indexOf(arr[i][k].id);
						empty.splice(a,1);
						empty.push(arr[i][j].id);
					}
				}
			}

		}
	}
	console.log(empty);
	draw();
}
function draw(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(arr[i][j].value!=undefined){
				arr[i][j].innerHTML=arr[i][j].value
			}
			else{
				arr[i][j].innerHTML="";
			}
		}

	}
}