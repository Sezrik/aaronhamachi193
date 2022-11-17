let contacts1 = {
  name: "Maxwell Wright",
  phone1: "(0191) 719 6495",
  email1: "Curabitur.egestas.nunc@nonummyac.co.uk"
  };

    
let contacts2 = {
  name: "Raja Villarreal",
  phone: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
  }; 
  
  
  let contacts3 = {
  name: "Helen Richards",
  phone: "0800 1111",
  email: "libero@convallis.edu"
  };
  

  
  // write your code here

  let contacts = window.prompt("Add contacts name", "Jane Doe");
  contacts = contacts ? contacts : "anonymous";
  
  let phone = prompt( " Add contacts phone number", "555-5555");
  
  let email = prompt(  " Add contacts email address", "JaneDoe@example.com");
  
  alert(contacts + " " + " " + phone + " "  +  email +  "  is the new contact added ");
  
  

  
  console.log(contacts1);
  console.log(contacts, phone, email);