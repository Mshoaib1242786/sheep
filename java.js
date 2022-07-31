function zakatCal(){
 let goatZakat = document.getElementById('goatValue').value;
 let result;
 
 if(goatZakat <= 39)
 {result="0 Goat";}
 else if(goatZakat <=120)
{result="1 Goat";}
 else if (goatZakat<= 200)
{result="2 Goat";}
else if(goatZakat <=399 )
{result ="3 Goat";}
else if(goatZakat <=400 )
{result ="4 Goat";}
else if(goatZakat <=500)
{result="5 Goat";}
 else if (goatZakat<=600)
{result="6 Goat";}
else if(goatZakat <=700 )
{result ="7 Goat";}
else if(goatZakat <=800 )
{result ="8 Goat";}
else if(goatZakat <=900 )
{result ="9 Goat";}
else if(goatZakat <=1000 )
{result ="10 Goat";}
else if(goatZakat <=1100)
{result="11 Goat";}
 else if (goatZakat<=1200)
{result="12 Goat";}
else if(goatZakat <=1300 )
{result ="13 Goat";}
else if(goatZakat <=1400 )
{result ="14 Goat";}





    document.getElementById('resultshow').innerText=result;
}
