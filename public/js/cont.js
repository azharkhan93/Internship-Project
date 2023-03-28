async function contactUs() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var phone = document.getElementById('phone').value;
    var successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    // var date = document.getElementById('date-picker').value;


    if (name === "") {
        alert('Enter Valid Name')
        return;
    }
    if (email === "") {
        alert('All Fields Are Required')
        return;
    }
    if (message === "") {
        alert('All Fields Are Required')
        return;
    }
    if (phone.length < 7 || phone.length > 14) {
        alert('Enter a Vaild Phone Number')
        return;
    }

    // alert("Your Enquiry Has Been  Recieved, Somebody From Our Team Will GeT Back To You In Next 24hrs");

    // var data1 = {
    //     name: name,
    //     email: email,
    //     message: message,
    //     phone: phone
    
    await fetch("http://localhost:3000/send-email", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, message, subject: subject.value })
        // body: JSON.stringify({name,email,phone,message,subject})
        // body: JSON.stringify({data1}),
    })
    // $("#success_message").show()
    //   console.log(data1);
}

