document.addEventListener('DOMContentLoaded', function() {
  const volunteer = document.getElementById('Volunteer');
  volunteer.addEventListener('click', function() {
    document.getElementById('Form').style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const Submit = document.getElementById('Submit');
  Submit.addEventListener('click', function(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('Form').style.display = 'none';
    document.getElementById('Form').innerHTML = "Thanks for volunteering " + name + "! We will contact you at " + email + "soon!";
  });
});
