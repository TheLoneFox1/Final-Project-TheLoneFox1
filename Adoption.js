document.addEventListener('DOMContentLoaded', function() {
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
});
