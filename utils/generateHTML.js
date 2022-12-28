// write function to generate HTML
addEmail = () => {}
addGitHub = () => {}
addOfficeNumber = () => {}
addName = () => {}


//write function to receive data from terminal and write to HTML IF choice is Engineer.
addEmployee = (position) => {
    if(position === 'Engineer') {
        console.log('working')
        return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Engineer.</p>
    <a href="#" class="card-link">${data.email}</a>
    <a href="#" class="card-link">${data.gitHub}</a>
  </div>
</div>`
} else if(position === 'Manager') {
        return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">id</h6>
      <p class="card-text">Manager</p>
      <a href="#" class=s"card-link">${data.email}</a>
      <a href="#" class="card-link">Office Number: ${data.officeNumber}</a>
    </div>
  </div>`
} else if(position === 'Intern') {
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
//write function to receive data from terminal and write to HTML IF choice is Intern.
//write fucntion to receive data from terminal and write to HTML IF choice is Manager.

// manager = () => {
    
// }

generateHTML = (data) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/style.css">
    <title>Document</title>
</head>
<body>
 ${addEmployee(data.position)}
</body>
`
}



module.exports = generateHTML;