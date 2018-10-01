const salesRepContainer = document.getElementById('salesRep');
const url = 'https://randomuser.me/api/?location=arizona&results=2';

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
    let authors = data.results;
    return authors.map(function(author) {
      let div   = createNode('div'),
          img   = createNode('img'),
          span  = createNode('span');
      img.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(div, img);
      append(div, span);
      append(salesRepContainer, div);
    })
  })
  .catch(function(error) {
    console.log(error);
  });