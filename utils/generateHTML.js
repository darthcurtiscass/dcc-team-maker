// write function to generate HTML

addEngineer = (data) => {

}

//write function to receive data from terminal and write to HTML IF choice is Engineer.
//write function to receive data from terminal and write to HTML IF choice is Intern.
//write fucntion to receive data from terminal and write to HTML IF choice is Manager.
addEmployee = (data) => {
    if(data.position === 'Engineer') {
        console.log('working')
        return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Engineer</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Engineer</p>
    <a href="#" class="card-link">  </a>
    <a href="#" class="card-link">  </a>
  </div>
</div>`
} else if(data.position === 'Manager') {
        return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.id}</h6>
      <h6 class="card-subtitle mb-2 text-muted">${data.officeNumber}</h6>
      <p class="card-text">Manager</p>
      <a href="#" class="card-link">Email: ${data.email}</a>
    </div>
  </div>`
} else if(data.position === 'Intern') {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Intern</p>
          <a href="#" class="card-link">${data.email}</a>
          <a href="#" class="card-link">${data.gitHub}</a>>
        </div>
      </div>`
}}


generateHTML = (data) => {
    return `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>
<body>
 ${addEmployee(data)}
</body>
`
}



module.exports = generateHTML;