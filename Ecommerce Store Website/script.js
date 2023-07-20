const navbar = document.getElementById('navbar')
const close = document.getElementById('close')
const bar = document.getElementById('bar')
const proContainer = document.querySelector('.pro-container');

if(bar){
    bar.addEventListener('click', function(){
        navbar.classList.add('active')
    })
}
if(close){
    close.addEventListener('click', function(){
        navbar.classList.remove('active')
    })
}
fetch('https://fakestoreapi.com/products')
        .then((data) => {
            return data.json();
        })
        .then((completedata) => {
            const filteredData = completedata.filter((value) => {
                const title = value.title.toLowerCase();
                // return title.includes(searchTerm);
                return title
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