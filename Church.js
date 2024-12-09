document.addEventListener('DOMContentLoaded', function() {
fetch('https://partners.every.org/v0.2/nonprofit/71-0239727?apiKey=pk_live_81997ba66ed0a63342343fdc16deede2')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const charityName = data.data.nonprofit ? data.data.nonprofit.name : 'Not available';
        const charityLocation = data.data.nonprofit ? data.data.nonprofit.location : 'Not available';
        const charityDescritpion = data.data.nonprofit ? data.data.nonprofit.description : 'Not available';
        document.getElementById('CharityName1').innerHTML = charityName;
        document.getElementById('Location1').innerHTML = charityLocation;
        document.getElementById('Description1').innerHTML = charityDescritpion;
      })
  .catch(error => console.error('Error:', error));
}
