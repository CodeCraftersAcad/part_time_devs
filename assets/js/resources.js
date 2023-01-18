class Resource {
    constructor(title, link, text, type, moreLinkText, moreLinkTextLink, mainLink, img) {
        this.title = title;
        this.link = link;
        this.text = text;
        this.type = type;
        this.img = img;
        this.mainLink = mainLink;
        this.moreLinkText = moreLinkText;
        this.moreLinkTextLink = moreLinkTextLink;
    }
}
const resourceArr = [
    new Resource(
        "Tech Talk",
        "_ew75yz-vLk",
        "This channel covers tech related subjects in regards to programming, working with Arduino, Raspberry PI, LInux, and more.",
        "youtube",
        "Robinson Handy and Technology Services",
        "https://rhtservices.net",
        "https://youtube.com/@rhtservicesllctech"),
    new Resource(
        "weekendwebpro",
        "https://www.weekendwebpro.com",
        "Weekly workshop series where I help people (usually new-ish small biz owners) create a WordPress website with some live DIYish help",
        "img",
        "",
        "",
        "",
        "./assets/images/weekendwebpro.jpg"),
    new Resource("blackfacts", "MUv_ARaRg-k", "", "youtube"),
];

const resourceList = document.querySelector("#resourceList");
resourceList.style.backgroundColor = "#161a1e"
resourceList.style.color = "#4299e1"
resourceArr.map((r, i) => {
    if (r.type === "youtube") {
        resourceList.innerHTML += `
        <div class="col-md-4 p-3">
            <div class="d-flex justify-content-center align-items-center">
                <div>
                    <div>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/${r.link}" class="resource-img" style="display: block; margin: 0 auto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div style="width: 300px; margin-top: 10px; color: #f2f2f2;">
                        <h4><b><a href="${r.mainLink || '#'}" target="_blank" style="color: #f2f2f2">${r.title}</a></b></h4>
                        <p style="margin: 0px; padding-top: 0px;">${r.text}</p>
                        <p style="display:${r.moreLinkText ? "block" : "none"}; color: #f2f2f2; margin-top: 0px; padding-top: 0px;">Addtional Info: <a href="${r.moreLinkTextLink}" target="_blank" style="text-decoration: none;">${r.moreLinkText}</a></p>
                    </div>
                </div>
            </div>
        </div>
                    `
    } else {
        resourceList.innerHTML += `
        <div class="col-md-4 p-3">
            <div class="d-flex justify-content-center align-items-center">
                <div>
                    <div style="width: 300px; margin-top: 10px; color: #f2f2f2; height: 200px; background: #000;" class="d-flex justify-content-center align-items-center">
                        <img class="resource-img" src="${r.img}" alt="${r.text}" style="height: 170px; width: auto; display: block; margin: 0 auto;" />
                    </div>
                    <div style="width: 300px; margin-top: 10px; color: #f2f2f2;">
                        <h4><b><a href="${r.link}" target="_blank" style="color: #f2f2f2;">${r.title}</b></a></h4>
                        <p>${r.text}</p>
                        <p style="display:${r.moreLinkText ? "block" : "none"}; color: #f2f2f2; margin-top: 0px; padding-top: 0px;">Addtional Info: <a href="${r.moreLinkTextLink}" target="_blank" style="text-decoration: none;">${r.moreLinkText}</a></p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
});
