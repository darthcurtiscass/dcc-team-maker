// write function to generate HTML
const Manager = require('../lib/Manager.subclass');

//Creates cards for each employee with each type's shared common elements, such as: name, email, id. 
generateCard = (data) => {
  return ` 
  <div class="card" style="width: 18rem; background-color:rgb(168, 110, 108);">
  <div class="card-body" style="color:black;">
    <h5 class="card-title">${data.getRole()}</h5>
    <h6 class="card-subtitle mb-2">${data.name}</h6>
    <p class="card-text text-muted">Employee ID: ${data.id}</p>
    <a href="mailto:${data.email}" class="card-link">${data.email}</a>
    ${generateUnique(data)}
  </div>
  </div>`
}

//Creates a line of text or link that is unique to the specific type of employee.
generateUnique = (data) => {
  if(data.getRole() == "Manager") {
    return`<h6 class="card-subtitle mb-2 text-muted">Office Number: ${data.officeNumber}</h6>`
  }
  if(data.getRole() == "Engineer") {
    return `<a href="https://github.com/${data.github}" class="card-link">Github account: ${data.github}</a>`
  }
  if(data.getRole() == "Intern") {
    return `<h6 class="card-subtitle mb-2">Education: ${data.school}</h6>`
  }
}

//Provides the biolerplate for the HTML file and provides a body for the elements created in generateCard().
generateHTML = (data) => {
  // console.log(data)
  console.log(data)
    return `
    <!doctype html>
    <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Maker</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>
<body style="background-color: darkgray; font-family: Georgia, 'Times New Roman', Times, serif;">
<h1>Team Maker</h1>
${data.map(generateCard)}
</body>
`
}

module.exports = generateHTML;