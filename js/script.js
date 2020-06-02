window.onscroll = function () {

    if(window.scrollY > 10) {

        document.getElementById('N').classList.add('navbar2');

        document.getElementById('N').classList.remove('navbar');

        // document.getElementById('btn').classList.add('buttn');
        // document.getElementById('brnd').classList.add('brannd');


    }else{

        document.getElementById('N').classList.remove('navbar2');

        document.getElementById('N').classList.add('navbar');
    }
}



function myFunction() {
    var x;
  
    x = document.getElementById("mail").value;
  
 
    if (x == '') {
    
        document.getElementById("invalid").innerHTML = 'Please enter your e-mail';
        document.getElementById('mail').classList.add('input2');

    }else{
   
        document.getElementById("invalid").innerHTML = 'Submitting...';
        document.getElementById('mail').classList.remove('input2');

    }
    
    // else if(x != '@'){

    //     document.getElementById("invalid").innerHTML = 'e-mail must have @ sign';

    // } 
    
    // else if(x == '@'){

    //     document.getElementById("invalid").innerHTML = 'Submitting...';
    //     document.getElementById('mail').classList.remove('input2');
    // }
    
   


    
  }