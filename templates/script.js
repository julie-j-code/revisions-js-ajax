// on rappelle que template reste invisible côté html tant qu'aucune référence n'y est faite dans le code
let template = document.getElementById('my-paragraph');
let templateContent = template.content;
document.body.appendChild(templateContent);