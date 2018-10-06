const salesRepContainer = document.getElementById('salesRep');
const url = 'https://randomuser.me/api/?results=1&nat=us';

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

fetch(url)
  .then((response) => response.json()) 
  .then(function(data) 
  {
    console.log(data);
    let salesReps = data.results;
    return salesReps.map(function(salesRep) {
      let div   = createNode('div'),
          img   = createNode('img'),
          contactInfo  = createNode('div');
      img.src = salesRep.picture.large;
      contactInfo.innerHTML = `${salesRep.name.first} ${salesRep.name.last} ${salesRep.phone} ${salesRep.location.city} ${salesRep.location.state}`;
      append(div, img);
      append(div, contactInfo);
      append(salesRepContainer, div);
    })
  })
  .catch(function(error) {
    console.log(error);
  });