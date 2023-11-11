const accessKey = "gZ3E4AHJUQljrAMCQSSIeX0cpEDNeu0CIXXzQpfDvSg";

const searchForm = document.getElementById("form-search");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showmoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage(){
    keyword= searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page===1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src=result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";

        imagelink.appendChild(image);

        searchResult.appendChild(imagelink);
    })
    showmoreBtn.style.display = "block";
}
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page=1;
    searchImage();
})
showmoreBtn.addEventListener("click", () =>{
    page++;
    searchImage();
})