// Set up any dynamic content on the page (that can be set by the user).
function setup(data) {
    const linkContainer = document.querySelector('#link-container');

    for (let link of data.links) {
        const div = document.createElement('div');

        const anchor = document.createElement('a');
        anchor.setAttribute('href', link.url);

        anchor.innerHTML = link.name;

        div.appendChild(anchor);

        linkContainer.appendChild(div);
    }
}

new CustomStartStorage().get()
    .then(data => {
        setup(data);
    });
