document.addEventListener('DOMContentLoaded', function() {
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
});
