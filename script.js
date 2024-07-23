
        date = new Date(); //the date object
    const currentYear = date.getFullYear(); //extract the current year from the date pobject
    const currentMonth = date.getMonth(); //extract the current Month from the date object
   
   
    btn.addEventListener("click", displayDate);

    function displayDate(){
        const EnteredYear = document.getElementById("Birthdate").value;

        
        if(EnteredYear ===''){
            alert('please enter a date');
             return;
          }
          else{
            // Entered year and month
            const BirthYear = new Date(EnteredYear); 
            const BirthYear1 = BirthYear.getFullYear();
            const BirthMonth = BirthYear.getMonth() + 1;


         // Your birth year and month
            const currentYear = new Date(); 
            const currentYear1 = currentYear.getFullYear();
            const currentMonth = currentYear.getMonth() + 1;
            // document.getElementById('mwaka').textContent= currentMonth;

             //Age calculation
            var Years = currentYear1 -  BirthYear1;
            var months = currentMonth-BirthMonth;
         if(currentMonth < BirthMonth){
            Years--;
            months = months + 12;
        //    return months;
         }

        //   document.getElementById('mwaka').textContent=Years +' Years '+' '+ months + ' Months '; 
            console.log(Years);

            document.getElementById('mwaka').textContent= Years +' Years '+' '+ months + ' Months '; 

          

          }

         
    }