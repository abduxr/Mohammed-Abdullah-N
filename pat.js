document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;
    const email = document.getElementById('email').value;
    const qrsDuration = parseInt(document.getElementById('qrsDuration').value);
    const qrsVoltage = parseFloat(document.getElementById('qrsVoltage').value); 

    
    if((qrsDuration > 120 && qrsDuration < 130)  && qrsVoltage < 5) {
        
        window.location.href = 'bundle_branch_block.html'; 
    }
     else if((qrsDuration >= 100 && qrsDuration < 110)  && qrsVoltage < 5) 
    {

        window.location.href = 'incomplete_bbb.html';
    }
    else if((qrsDuration >= 130 && qrsDuration < 140)  && qrsVoltage < 5)
    {
        window.location.href= 'Ventricular_Ectopy.html';
    }

    else if((qrsDuration >= 140 && qrsDuration < 150)  && qrsVoltage < 5)
    {
      window.location.href ='Dilated Cardiomyopathy.html';
    }
    else if(qrsDuration >= 150  && qrsVoltage < 5)
        {
        window.location.href = 'hk.html';
    }
    else if (qrsDuration < 60) {
        console.log(`Details:
         Name: ${name}, Age: ${age}, Sex: ${sex}, QRS Duration: ${qrsDuration}, QRS Voltage: ${qrsVoltage}`);
        
        window.location.href = `pre_excitation_syndrome.html?name=${name}&age=${age}&sex=${sex}`; 
    }

    
    else {
        
        window.location.href='fine.html';
    }

    
    console.log(`Sending email to: ${email}`);
    
});
