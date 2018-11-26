function circle()
{
   
    r=(parseInt(Math.random()*100))/10 ;
    document.getElementById("out_div").innerHTML="The Length  = "+r; 
}
function rectangle()
{
    
    r1=(parseInt(Math.random()*100))/10 ;
    r2=(parseInt(Math.random()*100))/10 ;
    r3=(parseInt(Math.random()*100))/10 ;
    document.getElementById("out_div").innerHTML="Width  = "+r1+"<br> Height = "+r2+"<br> Length = "+r3;
}
function square()
{
    r=(parseInt(Math.random()*100))/10 ;
    document.getElementById("out_div").innerHTML="The Length  = "+r; 
}
function cubo()
{
     r=(parseInt(Math.random()*100))/10 ;
    document.getElementById("out_div").innerHTML="The r  = "+r; 
}
function cone()

{
     r1=(parseInt(Math.random()*100))/10 ;
    r2=(parseInt(Math.random()*100))/10 ;
    document.getElementById("out_div").innerHTML="The Height  = "+r1+"<br> The Radius = "+r2;
}
function triangle()
{
     x1=(parseInt(Math.random()*100))/10 ;
    x2=(parseInt(Math.random()*100))/10 ;
    x3=(parseInt(Math.random()*100))/10 ;
    document.getElementById("out_div").innerHTML="The L1  = "+x1+"<br> The L2 = "+x2+"<br> The L3 = "+x3;
}
function cal_triangle()
{
    var pp=(x1+x2+x3)/2;
    var v=Math.sqrt(pp*(pp-x1)*(pp-x2)*(pp-x3));
    var area=parseInt(v);
   var  par=parseInt(x1+x2+x3);
    var a=parseInt( document.getElementById("area").value);
    var p=parseInt( document.getElementById("Perimeter").value);
     var err="";
    if(a!=area )
        err+="The area Wronge <br>";
   
    if(p!=par )
        err+="The Perimeter Wronge <br>Try Again";
    
    
    
    
    if( err.length>0)
    {
      document.getElementById('result').innerHTML=err;  
    }
    
    else
        {
             document.getElementById('result').innerHTML="All Result is true <br>Excellent  "; 
        }
}

function cal_cone()
{
   var a=(r1*(3.14*r2))+(3.14*(r2*r2))
    var area=parseInt(r1*r2);
    var v=1/3*3.14*r2*r2*r1;
    var volum=parseInt(v);
    var p= (1/3) * 3.14 * r1 * r2;
   var  par=parseInt(p);
    var a=parseInt( document.getElementById("area").value);
    var v=parseInt( document.getElementById("Volum").value);
    var p=parseInt( document.getElementById("Perimeter").value);
     var err="";
    if(a!=area )
        err+="The area Wronge <br>";
    if(v!=volum )
        err+="The volum Wronge <br>";
    if(p!=par )
        err+="The Perimeter Wronge <br>Try Again";
    
    
    
    
    if( err.length>0)
    {
      document.getElementById('result').innerHTML=err;  
    }
    
    else
        {
             document.getElementById('result').innerHTML="All Result is true <br>Excellent  "; 
        }
    
}
function cal_cubo()
{
    var rr=r*r;
    var area=parseInt(rr*6);
    var volum=parseInt(rr*r);
   var  par=parseInt(r*12);
    var a=parseInt( document.getElementById("area").value);
    var v=parseInt( document.getElementById("Volum").value);
    var p=parseInt( document.getElementById("Perimeter").value);
     var err="";
    if(a!=area )
        err+="The area Wronge <br>";
    if(v!=volum )
        err+="The volum Wronge <br>";
    if(p!=par )
        err+="The Perimeter Wronge <br>Try Again";
    
    
    
    
    if( err.length>0)
    {
      document.getElementById('result').innerHTML=err;  
    }
    
    else
        {
             document.getElementById('result').innerHTML="All Result is true <br>Excellent  "; 
        }
}

function cal_square()
{
    var rr=r*r;
    var area=parseInt(r*r);
    var volum=parseInt(rr*r);
   var  par=parseInt(r*4);
    var a=parseInt( document.getElementById("area").value);
    var v=parseInt( document.getElementById("Volum").value);
    var p=parseInt( document.getElementById("Perimeter").value);
     var err="";
    if(a!=area )
        err+="The area Wronge <br>";
    if(v!=volum )
        err+="The volum Wronge <br>";
    if(p!=par )
        err+="The Perimeter Wronge <br>Try Again";
    
    
    
    
    if( err.length>0)
    {
      document.getElementById('result').innerHTML=err;  
    }
    
    else
        {
             document.getElementById('result').innerHTML="All Result is true <br>Excellent  "; 
        }
}
function cal_rectangle()
{
   var rr=r1*r2;
    var area=parseInt(r1*r2);
    var volum=parseInt(rr*r3);
   var  par=parseInt((r1+r2)*2);
    var a=parseInt( document.getElementById("area").value);
    var v=parseInt( document.getElementById("Volum").value);
    var p=parseInt( document.getElementById("Perimeter").value);
     var err="";
    if(a!=area )
        err+="The area Wronge <br>";
    if(v!=volum )
        err+="The volum Wronge <br>";
    if(p!=par )
        err+="The Perimeter Wronge <br>Try Again";
    
    
    
    
    if( err.length>0)
    {
      document.getElementById('result').innerHTML=err;  
    }
    
    else
        {
             document.getElementById('result').innerHTML="All Result is true <br>Excellent  "; 
        }
    
}
function cal_circle()
{
    var area=parseInt( r*r*3.14);
    var volum=parseInt(4/3*r*r*r*3.14);
   var  par=parseInt(2*r*3.14);
    var a=parseInt( document.getElementById("area").value);
    var v=parseInt( document.getElementById("Volum").value);
    var p=parseInt( document.getElementById("Perimeter").value);
     var err="";
    if(a!=area )
        err+="The area Wronge <br>";
    if(v!=volum )
        err+="The volum Wronge <br>";
    if(p!=par )
        err+="The Perimeter Wronge <br>Try Again";
    
    if( err.length>0)
    {
      document.getElementById('result').innerHTML=err;  
    }
    
    else
        {
             document.getElementById('result').innerHTML="All Result is true <br>Excellent  "; 
        }
    
}