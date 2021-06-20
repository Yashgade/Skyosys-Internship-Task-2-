
	function getPrinted()
	{
		
		var name=document.getElementById('TextName').value;
		var email=document.getElementById('TextEmail').value;
		var phone=document.getElementById('TextPhone').value;
		var msg=document.getElementById('TextMsg').value;

		mandatory();
		
		if( validateMail(email) && checkPhone(phone)){
			console.log("Name    : "+name);
			console.log("Email   : "+email);
			console.log("Phone No: "+phone);
			console.log("Message : "+msg);
		}
		
	}

	function mandatory()
	{
		if(document.getElementById('TextName').value == ""){
			alert("Please Enter Name");
			console.log("Please Enter Name");
			return false;
		}
		if (document.getElementById('TextEmail').value == "") {
			alert("Please Enter Email");
			console.log("Please Enter Email");
			return false;
		}

		if (document.getElementById('TextPhone').value == "") {
			alert("Please Enter Phone number");
			console.log("Please Enter Phone number");
			return false;
		}

		if (document.getElementById('TextMsg').value == "") {
			alert("Please Enter Message");
			console.log("Please Enter Message");
			return false;
		}
	}		

	function validateMail(email) {
	
		var expr =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 
		if(email.match(expr)){
			return true;
		}
		else{
			alert("Please Enter Valid Email");
			console.log("Please Enter Valid Email");
			return false;
		}
	}
	
	function checkPhone(phone)
	{
 		
 		var phoneno = /^\d{10}$/;

  		if(phone.match(phoneno))
		{
      			return true;
		}
 
      		else
        	{
       			alert("Please Enter Valid Phone number");
			console.log("Please Enter Valid Phone number");
        		return false;
        	}
	}

	 
	