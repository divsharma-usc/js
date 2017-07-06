var calendar=function(){
var date=new Date();
var month=date.getMonth();
var year=date.getFullYear();
var nextyear=document.getElementById('nextyear');
var prevyear=document.getElementById('prevyear');
var nextmonth=document.getElementById('nextmonth');
var prevmonth=document.getElementById('prevmonth');
nextmonth.addEventListener('click',nextMonth);
prevmonth.addEventListener('click',prevMonth);
nextyear.addEventListener('click',nextYear);
prevyear.addEventListener('click',prevYear);
var days=['SUN','MON','TUES','WED','THU','FRI','SAT',];
var months=['Jan','Feb','March','April','May','June','July','August','Sept','Oct','Nov','Dec'];
var show_month_and_year=document.getElementById('monthandyear');
var tablecontent=document.getElementById('tablecontent');
var htmltable=tablecontent.innerHTML;
show();
function nextYear(){
	year=year+1;
	date.setFullYear(year);
	show();

}
function prevYear(){
	year=year-1;
	date.setFullYear(year);
	show();

}
function prevMonth(){
	 if(date.getMonth()==0){
	 	month=11;
	 	year=year-1;
	 	date.setFullYear(year);
	 	date.setMonth(month);
	 }
	 else{
	 	month=month-1;
	 	date.setMonth(month);
	 }
	 show();
}
function nextMonth(){
	 if(date.getMonth()==11){
	 	month=0;
	 	year=year+1;
	 	date.setFullYear(year);
	 	date.setMonth(month);
	 }
	 else{
	 	month=month+1;
	 	date.setMonth(month);
	 }
	 show();
}
function show(){
	var obj=find();
	var daysofmonth=obj.days;
	var dayofmonth=obj.day;
	var setdate=1;
    var newdate=new Date();
   show_month_and_year.innerHTML='<h2>'+months[month]+"-"+year+'</h1>';
   htmltable='<table>'+'<tr>'
   for(var i=0;i<7;i++){
   	   htmltable=htmltable+'<th id="daysheading">'+" "+days[i]+" "+'</th>'
   }
    htmltable=htmltable+'</tr>'+'<tr>'
   for(var i=0;i<7;i++){
   	   if(i<dayofmonth)
   	   htmltable=htmltable+'<th id="box">'+" "+'</th>'
   	   else{
   	   	 if(setdate==newdate.getDate()&&month==newdate.getMonth()&&year==newdate.getFullYear())
   	                htmltable=htmltable+'<th id="box2">'+setdate+'</th>'
   	     else
   	   	            htmltable=htmltable+'<th id="box">'+setdate+'</th>'
   	   	 setdate++;
   	   }
   }
   htmltable=htmltable+'</tr>'
   while(setdate<=daysofmonth){
   	htmltable=htmltable+'<tr>';
   	     for(var i=0;i<7;i++){ 
   	     
   	     
   	     	if(setdate>daysofmonth)
   	     	htmltable=htmltable+'<th id="box">'+" "+'</th>'
   	        else{
   	        if(setdate==newdate.getDate()&&month==newdate.getMonth()&&year==newdate.getFullYear())
   	              htmltable=htmltable+'<th id="box2">'+setdate+'</th>'
   	        else
   	     	      htmltable=htmltable+'<th id="box">'+setdate+'</th>'
   	   	    setdate++; 
   	   	    }
   	 	     }
   	htmltable=htmltable+'</tr>'
   }
   htmltable=htmltable+'</table>'
   tablecontent.innerHTML=htmltable;
}
function find(){
	date.setDate(1);
	var day=date.getDay();
	var month=date.getMonth();
	var days;
	if(month==1){
		if(year%4==0){
         days=29;
		} 
		else{
			days=28;
		}
	}
	else if([0,2,4,6,7,9,11].includes(month)){
		days=31;
	}
	else{
		days=30;
	}
	var obj={
		days:days,
		day:day
	}
	return obj;
}
}
calendar();