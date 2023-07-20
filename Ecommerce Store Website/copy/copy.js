// script for navigation bar
// called for navbar
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const proContainer = document.querySelector('.pro-container');

// end
// navbar command
if(bar){
    bar.addEventListener('click',function(){
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',function(){
        nav.classList.remove('active');
    })
}

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    fetch('https://fakestoreapi.com/products')
        .then((data) => {
            return data.json();
        })
        .then((completedata) => {
            const filteredData = completedata.filter((value) => {
                const title = value.title.toLowerCase();
                return title.includes(searchTerm);
            });
            let data1 = "";
            filteredData.forEach((value) => {
                data1 += `<div class="pro">
                            <img src=${value.image} alt=${value.title}>
                            <div class="des">
                                <span>${value.title}</span>
                                <h5>${value.title}</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>${value.price}</h4>
                            </div>
                            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                        </div>`;
            });
            proContainer.innerHTML = data1;
        })
        .catch((err) => {
            console.log(err);
        });
});