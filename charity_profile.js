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

document.addEventListener('DOMContentLoaded', function() {
  import('charity_list.js')
  .then(module => {
    const { isAnimal, isAdopt, isChurch } = module;
  if (isAnimal == true){
    fetch('https://partners.every.org/v0.2/nonprofit/30-0648659?apiKey=pk_live_81997ba66ed0a63342343fdc16deede2')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const charityName = data.data.nonprofit ? data.data.nonprofit.name : 'Not available';
      const charityLocation = data.data.nonprofit ? data.data.nonprofit.location : 'Not available';
      const charityDescritpion = data.data.nonprofit ? data.data.nonprofit.description : 'Not available';
      document.getElementById('CharityName').innerHTML = charityName;
      document.getElementById('Location').innerHTML = charityLocation;
      document.getElementById('Description').innerHTML = charityDescritpion;
      })
    .catch(error => console.error('Error:', error));
    const charityImage = "https://static.wixstatic.com/media/3006fa_3f45d20a30804ba887676ef3dcdf4351.jpg/v1/fill/w_570,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3006fa_3f45d20a30804ba887676ef3dcdf4351.jpg";
    const charityMission = "FAV's mission is to provide supplemental financial and promotional support to our local shelter, the Little Rock Animal Village. Through fundraising events, donations, and promotion, our ultimate goal is to raise awareness about the Village and increase adoptions.";
    document.getElementById('Mission').innerHTML = charityMission;
    document.getElementById('Image').src = charityImage;
  } else if (isAdopt == true){
    fetch('https://partners.every.org/v0.2/nonprofit/46-0637405?apiKey=pk_live_81997ba66ed0a63342343fdc16deede2')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const charityName = data.data.nonprofit ? data.data.nonprofit.name : 'Not available';
      const charityLocation = data.data.nonprofit ? data.data.nonprofit.location : 'Not available';
      const charityDescritpion = data.data.nonprofit ? data.data.nonprofit.description : 'Not available';
      document.getElementById('CharityName').innerHTML = charityName;
      document.getElementById('Location').innerHTML = charityLocation;
      document.getElementById('Description').innerHTML = charityDescritpion;
      })
    .catch(error => console.error('Error:', error));
    const charityImage = "https://nfpaonline.org/wp-content/uploads/2023/08/NFPA.png";
    const charityMission = "(Did not have one in the API)";
    document.getElementById('Mission').innerHTML = charityMission;
    document.getElementById('Image').src = charityImage;
  } else if (isChurch == true){
    fetch('https://partners.every.org/v0.2/nonprofit/71-0239727?apiKey=pk_live_81997ba66ed0a63342343fdc16deede2')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const charityName = data.data.nonprofit ? data.data.nonprofit.name : 'Not available';
      const charityLocation = data.data.nonprofit ? data.data.nonprofit.location : 'Not available';
      const charityDescritpion = data.data.nonprofit ? data.data.nonprofit.description : 'Not available';
      document.getElementById('CharityName').innerHTML = charityName;
      document.getElementById('Location').innerHTML = charityLocation;
      document.getElementById('Description').innerHTML = charityDescritpion;
      })
      
    .catch(error => console.error('Error:', error));
    const charityImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XEWA3gGiwVj8nRKmx7rH_E6SumHW_7al_WwCkLx9JSS44k_jipMOqbzDvGDcBbSVFoM&usqp=CAU";
    const charityMission = "The mission of Trinity Episcopal Cathedral is to proclaim the Word of God by sharing our gifts, ourselves, and our properties through ministry to each other, our neighbors, and our community as we serve God and represent the Episcopal Diocese of Arkansas.";
    document.getElementById('Mission').innerHTML = charityMission;
    document.getElementById('Image').src = charityImage;
  }
    })
    .catch(error => {
      console.error('Error loading the module:', error);
    });
});
