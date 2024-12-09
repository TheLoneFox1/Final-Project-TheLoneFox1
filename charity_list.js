document.addEventListener('DOMContentLoaded', function() {
  const animal = document.getElementById('Animal');
  animal.addEventListener('click', function() {
    let isAnimal = new Boolean(true);
    let isAdopt = new Boolean(false);
    let isChurch = new Boolean(false);
    module.export = {isAnimal, isAdopt, isChurch};
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const adopt = document.getElementById('Adoption');
  adopt.addEventListener('click', function() {
    let isAnimal = new Boolean(false);
    let isAdopt = new Boolean(true);
    let isChurch = new Boolean(false);
    module.export = {isAnimal, isAdopt, isChurch};
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const church = document.getElementById('Church');
  church.addEventListener('click', function() {
    let isAnimal = new Boolean(false);
    let isAdopt = new Boolean(false);
    let isChurch = new Boolean(true);
    module.export = {isAnimal, isAdopt, isChurch};
  });
});
