function game(){
var blocks=document.querySelectorAll('div');
var score_counter=document.getElementById("score");
var empty=[];
var score=0;
score_counter.innerHTML=score;
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
	return Math.floor(Math.random()*(empty.length));
}
function fill(){
	var position=find();
	var position2=empty[position];
	arr[parseInt(position2/4)][position2%4].value=2;
	draw();
	empty.splice(position,1);
}
fill();
console.log(empty);
document.body.addEventListener('keydown',function(event){
	  
	     if(empty.length==0){
	     	alert("You Loose !!!");
	     	window.location.reload();
	     }
         if(event.key=="ArrowDown"){
         	manipulate(-1)
         }
         else if(event.key=="ArrowUp"){
           console.log("yes")
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
					else if(arr[i][k].value!=undefined&&arr[i][k].value==arr[i][j].value){
						arr[i][k].value*=2;
						score=score+arr[i][k].value;
						arr[i][j].value=undefined;
						empty.push(arr[i][j].id);
						if(arr[i][k].value==2048){
							arr[i][k].value=undefined;
							empty.push(arr[i][k].id);
						}
					}
					else if(arr[i][k].value!=undefined&&arr[i][k].value!=arr[i][j].value&&k+1!=j){
						arr[i][k+1].value=arr[i][j].value;
						arr[i][j].value=undefined;
						var a=empty.indexOf(arr[i][k+1].id);
						empty.splice(a,1);
						empty.push(arr[i][j].id);
					}
				}
			}

		}
	}
	if(dir==2){
		for(var i=3;i>=0;i--){
			for(var j=2;j>=0;j--){
				if(arr[i][j].value!=undefined){
					var k = j+1;
					while((arr[i][k].value==undefined)&&k<3){
						k++;
					}
					if(arr[i][k].value==undefined){
						arr[i][k].value=arr[i][j].value;
						arr[i][j].value=undefined;
						var a=empty.indexOf(arr[i][k].id);
						empty.splice(a,1);
						empty.push(arr[i][j].id);
					}
					else if(arr[i][k].value!=undefined&&arr[i][k].value==arr[i][j].value){
						arr[i][k].value*=2;
						score=score+arr[i][k].value
						arr[i][j].value=undefined;
						empty.push(arr[i][j].id);
						if(arr[i][k].value==2048){
							arr[i][k].value=undefined;
							empty.push(arr[i][k].id);
						}
					}
					else if(arr[i][k].value!=undefined&&arr[i][k].value!=arr[i][j].value&&k-1!=j){
						arr[i][k-1].value=arr[i][j].value;
						arr[i][j].value=undefined;
						var a=empty.indexOf(arr[i][k-1].id);
						empty.splice(a,1);
						empty.push(arr[i][j].id);
					}
				}
			}

		}
	}
	if(dir==1){
		for(var j=0;j<4;j++){
			for(var i=1;i<4;i++){
				if(arr[i][j].value!=undefined){
					var k = i-1;
					while((arr[k][j].value==undefined)&&k>0){
						k--;
					}
					if(arr[k][j].value==undefined){
						arr[k][j].value=arr[i][j].value;
						arr[i][j].value=undefined;
						var a=empty.indexOf(arr[k][j].id);
						empty.splice(a,1);
						empty.push(arr[i][j].id);
					}
					else if(arr[k][j].value!=undefined&&arr[k][j].value==arr[i][j].value){
						arr[k][j].value*=2;
						score=score+arr[k][j].value;
						arr[i][j].value=undefined;
						empty.push(arr[i][j].id);
						if(arr[k][j].value==2048){
							arr[k][j].value=undefined;
							empty.push(arr[k][j].id);
						}
					}
					else if(arr[k][j].value!=undefined&&arr[k][j].value!=arr[i][j].value&&k+1!=i){
						arr[k+1][j].value=arr[i][j].value;
						arr[i][j].value=undefined;
						var a=empty.indexOf(arr[k+1][j].id);
						empty.splice(a,1);
						empty.push(arr[i][j].id);

					}
				}
			}

		}
	}
	if(dir==-1){
		for(var j=3;j>=0;j--){
			for(var i=2;i>=0;i--){
				if(arr[i][j].value!=undefined){
					var k = i+1;
					while((arr[k][j].value==undefined)&&k<3){
						k++;
					}
					if(arr[k][j].value==undefined){
						arr[k][j].value=arr[i][j].value;
						arr[i][j].value=undefined;
						var a=empty.indexOf(arr[k][j].id);
						empty.splice(a,1);
						empty.push(arr[i][j].id);
					}
					else if(arr[k][j].value!=undefined&&arr[k][j].value==arr[i][j].value){
						arr[k][j].value*=2;
						score=score+arr[k][j].value;
						arr[i][j].value=undefined;
						empty.push(arr[i][j].id);
						if(arr[k][j].value==2048){
							arr[k][j].value=undefined;
							empty.push(arr[k][j].id);
						}
					}
					else if(arr[k][j].value!=undefined&&arr[k][j].value!=arr[i][j].value&&k-1!=i){
						arr[k-1][j].value=arr[i][j].value;
						arr[i][j].value=undefined;
						var a=empty.indexOf(arr[k-1][j].id);
						empty.splice(a,1);
						empty.push(arr[i][j].id);
					}
				}
			}

		}
	}	
	draw();
	score_counter.innerHTML=score;
	fill();
}
function draw(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(arr[i][j].value!=undefined&&arr[i][j].value!=NaN){
				arr[i][j].innerHTML=arr[i][j].value
				if(arr[i][j].value==2){
					arr[i][j].style["background-color"]="blue";
				}
				else if(arr[i][j].value==4){
					arr[i][j].style["background-color"]="green";
				}
				else if(arr[i][j].value==8){
					arr[i][j].style["background-color"]="brown";
				}
				else if(arr[i][j].value==16){
					arr[i][j].style["background-color"]="pink";
				}
				else if(arr[i][j].value==32){
					arr[i][j].style["background-color"]="pink";
				}
				else if(arr[i][j].value==64){
					arr[i][j].style["background-color"]="pink";
				}
				else if(arr[i][j].value==1028){
					arr[i][j].style["background-color"]="pink";
				}
				else if(arr[i][j].value==2048){
					arr[i][j].style["background-color"]="pink";
				}
			}
			else{
				arr[i][j].innerHTML="";
				arr[i][j].style["background-color"]="red"
			}
		}

	}
}
}
game();