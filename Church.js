document.addEventListener('DOMContentLoaded', function() {
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
