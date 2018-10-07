const salesRepContainer = document.getElementById('salesRep');
const url = 'https://randomuser.me/api/?results=1&nat=us';

const titles = ["energy consultant", "technical sales representative", "solar consultant", "solar sales specialist", "solar energy consultant", "account manager", "solar sales engineer"];

const randomTitle = titles[Math.floor(Math.random() * titles.length)];

fetch(url)
  .then((response) => response.json()) 
  .then(function(data) 
  {
    console.log(data);
    let salesReps = data.results;
    return salesReps.map(function(salesRep) {
      const markup = `
        <div class="sales-card">
          <h2>${salesRep.name.first} ${salesRep.name.last}</h2>
          <span>${randomTitle}</span>
          <img src="${salesRep.picture.large}" alt="${salesRep.name.first} ${salesRep.name.last}" />
          <span>${salesRep.location.city}, ${salesRep.location.state}</span>
          <span>${salesRep.phone}</span>
          <span>${salesRep.email}</span>
        </div>
      `;
      document.getElementById('salesRep').innerHTML = markup;
    })
  })
  .catch(function(error) {
    console.log(error);
  });