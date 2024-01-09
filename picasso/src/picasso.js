export default async id => {
    const app = document.querySelector(id);
    const content = await require('./picasso.html');
    app.innerHTML = content.default;
}