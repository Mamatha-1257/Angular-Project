function Redirect() 
    {  
        this.router.navigate(['home']);
 
    } 
    document.write("You will be redirected to a new page in 5 seconds"); 
    setTimeout('Redirect()', 10000);