export default async id => {
    const app = document.getElementById(id);
    const content = await require('./picasso.html');
    app.innerHTML = content.default;
}