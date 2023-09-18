const form = document.querySelector("form");
const serachValue = document.querySelector("input");
const showMore = document.querySelector("#showMore");
const searchResult = document.querySelector("#search_result");

const accessKey = "vHosP361YiXcxuxqpDS1aMIfQKXwhbiCKaCWD_GD3XU";

async function searchImage(){
    let keyword = serachValue.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    const result = data.results;
    
    if(page==1){
        searchResult.innerHTML="";
    }
    
    result.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        searchResult.appendChild(image)
    })
    showMore.style.display = "block";
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImage()
})

showMore.addEventListener("click", ()=>{
    page++;
    searchImage()
})