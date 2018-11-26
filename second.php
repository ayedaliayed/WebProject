<html>
    
    <head>
        <meta charset="utf-8"/>
        <title>second page</title>
        <link rel="stylesheet" href="main.css">
    </head>
    <body>
      <header>
         <h1>MSA School</h1>
           <h3 class="f">Phone : 0123456789<br>088998822</h3>
           <h3 calss="f">email: msaschool@gmail.com</h3>
           <h3>Title : Cairo City</h3>
    </header>
        <h3>Choose one Shape </h3>
        
            <a href="circle.html">
                <img src="circle.jpg" alt="circle" width="400px" height="600px" style="margin-left: 20px;">
            </a>
           <a href="rectangle.html" style="margin-left: 20px;">
                <img src="rectangle.png" alt="rectangle" width="400px" height="500px">
            </a>
            <a href="square.html" style="margin-left: 20px;">
                <img src="square.png" alt="rectangle" width="400px" height="600px">
            </a><br>
        <a href="cubo.html" style="margin-left: 20px;">
                <img src="cubo.png" alt="cubo" width="400px" height="600px">
            </a>
         <a href="triangolo.html" style="margin-left: 20px;">
                <img src="triangolo.png" alt="cubo" width="400px" height="600px">
            </a>
        <a href="cono.html" style="margin-left: 20px;">
                <img src="cono.jpg" alt="cubo" width="400px" height="600px">
            </a>
        <br><br> <a href="index.html"><input type="button" value="GO To Main Page" class="btn"></a>
        
        
        <?php
        $conn=mysqli_connect("localhost","root","");
        if(!$conn)
        {
            die("There Is  an Error in connetion ");
        }
        if(!(mysqli_query($conn,"create database if not exists pro")))
        {
            echo "Error";
        }
        mysqli_select_db($conn,"pro");
        $q="create table if not exists student_info(
            id int auto_increment primary key,
            uname varchar(64),
            pass varchar(64)

        )";
        mysqli_query($conn,$q);
        $uname=$_GET['Username'];
        $pass=$_GET['Password'];
        $ss="insert into student_info (uname,pass) values ('$uname','$pass')";
        mysqli_query($conn,$ss);
        mysqli_close($conn);
        //echo $_GET['Username']."<br>";
        //echo $_GET['password'];
?>
            
        
        <footer>
           <h2 calss="c2">Our School Is The Best</h2>
        <br>
        <br><br>
        </footer>
        
    </body>
</html>