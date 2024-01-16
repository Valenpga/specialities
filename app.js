const express = require('express');
const app = express();

function filterUsersBySpecialty(specialty) {
    return usersData.filter(user => user.specialty.toLowerCase() === specialty.toLowerCase());
}

app.get('/',(req , res) => {
    const navigation = `
    <a href="/marketing">Marketing</a>
    <a href="/developers">Developers</a>
    <a href="/ventas">Ventas</a>
    < a href="/QAs">QAS</a>
    `;
    res.send(`<h1>Home</h1>${navigation}`);
});

app.get('/developers',(req , res) => {
    const specialty = 'developers'
    const filteredUser = filterUsersBySpecialty(specialty);
    const pageContent = `
    <h1>${specialty.charAt(0).toUpperCase() + specialty.slice(1)}Team</h1>
    <p>${filteredUsers.length} personas en este equipo:</p>
    <ul>
    ${filteredUser.map(user => `<li>${user.name} (${user.age})</li>`).join('')}
    </ul>
    <a href="/">Volver a Home</a>
    `;
    res.send(pageContent);
});

app.get('/marketing', (req , res) => {
    const specialty = 'marketing'
    const filteredUser = filterUsersBySpecialty(specialty);
    const pageContent = `
    <h1>${specialty.charAt(0).toLocaleLowerCase() + specialty.slice(1)}Team</h1>
    <p>${filteredUser.length} personas en este equipo: </p>
    <ul>
    ${filteredUser.map(user => `<li>${user.name} (${user.age})</li>`).join('')}
    </ul>
    <a href="/">Volver a Home</a>
    `;
    res.send(pageContent)
})

app.get('/ventas',(req,res) => {
    const specialty = 'ventas'
    const filteredUser = filterUsersBySpecialty(specialty)
    const pageContent = `
    <h1>${specialty.charAt(0).toLocaleLowerCase() + specialty.slice(1)}Team</h1>
    <p>${filteredUser.length} personas en este equipo </p>
    <ul>
    ${filteredUser.map(user => `<li>${user.name} (${user.age})</li>`).join()}
    </ul>
    <a href="/">Volver a Home</a>
    `;
    res.send(pageContent)
});

app.get('/QAs',(req , res) => {
    const specialty = 'QAs'
    const filteredUser = filterUsersBySpecialty(specialty)
    const pageContent = `
    <h1>${specialty.charAt(0).toLocaleLowerCase() + specialty.slice(1)}Team</h1>
    <p>${filteredUser.length} personas en este equipo </p>
    <ul>
    ${filteredUser.map(user => `<li>${user.name} (${user.age})</li>`).join()}
    </ul>
    <a href="/">Volver a Home</a>
    `;
    res.send(pageContent)
});
app.use((req , res) => {
    res.status(404).send('Error 404 pagina no encontrada')
});

const puerto = 3000;
app.listen(puerto, () => {
    console.log('El servidor esta escuchando en el puerto ${puerto}');
});