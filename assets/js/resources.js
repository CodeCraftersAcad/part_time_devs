class Resource {
    constructor(title, link, text, type, img) {
        this.title = title;
        this.link = link;
        this.text = text;
        this.type = type;
        this.img = img;
    }
}
const resourceArr = [
    new Resource("Tech Talk", "_ew75yz-vLk", "", "youtube"),
    new Resource("blackfacts", "MUv_ARaRg-k", "", "youtube"),
];

const resourceList = document.querySelector("#resourceList");
resourceList.style.backgroundColor = "#161a1e"
resourceList.style.color = "#4299e1"
resourceArr.map((r, i) => {
    if (r.type === "youtube") {
        resourceList.innerHTML += `
            <div class="d-flex justify-content-center align-items-center">
                <div class="col-md-4 p-3">
                    <div>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/${r.link}" style="display: block; margin: 0 auto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                        <h4><b>${r.title}</b></h4>
                        <p>${r.text}</p>
                    </div>
                </div>
            </div>
                    `
    } else {
        resourceList.innerHTML += `
            <div class="d-flex justify-content-center align-items-center">
                <div class="col-md-4 p-3">
                    <div>
                        <a href="${r.link}">
                            <img src="${r.img}" alt="${r.text}" style="height: 200px; width: auto; display: block; margin: 0 auto;"/>
                        </a>
                    </div>
                    <div>
                        <h4><b>${r.title}</b></h4>
                        <p>${r.text}</p>
                    </div>
                </div>
            </div>
        `
    }
});