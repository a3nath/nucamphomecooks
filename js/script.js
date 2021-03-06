const menu = {}
menu.$checkbox = $("input[type='checkbox']");
menu.$cookCat = $('.cook-cat');

menu.cooks = 
[
    {cookName: "Christian Pullisic",
    cookNum:1,
    cuisine: "Mexican",
    rating:3.5,
    cookImg: "chef1.jpg",
    foodImg1: "food11.jpg",
    foodImg2: "food12.jpg",
    page:"cook1.html"
    },
    {cookName: "N'golo Kante",
    cookNum:2,
    cuisine:   "Ethopian",
    rating:4.8,
    cookImg: "chef2.jpg",
    foodImg1: "food21.jpg",
    foodImg2:"food22.jpg",
    page:"cook2.html"
    },
    {cookName: "Ji So-yun",
    cookNum:3,
    cuisine: "Pakistani",
    rating:5,
    cookImg: "chef3.jpg",
    foodImg1: "food31.jpg",
    foodImg2: "food32.jpg",
    page:"cook3.html"
    },
    {cookName: "Magdalena Eriksson",
    cookNum:4,
    cuisine: "Thai",
    rating:4.2,
    cookImg: "chef4.jpg",
    foodImg1: "food41.jpg",
    foodImg2: "food42.jpg",
    page:"cook4.html"
    }
]

menu.cookAppend = function(filterCook){
    console.log("dda")
    menu.$cookCat.append(filterCook.map(function(cook){
        return `<div class="card">
        <div class="carousel slide" data-ride='carousel' id='carouselcook${cook.cookNum}'>
            <ol class="carousel-indicators">
                <li class='active' data-target='#carouselcook${cook.cookNum}' data-slide-to='0'></li>
                <li data-target='#carouselcook${cook.cookNum}' data-slide-to='1'></li>
                <li data-target='#carouselcook${cook.cookNum}' data-slide-to='2'></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/cook${cook.cookNum}.jpg" alt="chef image" class='cook-img .d-block img-fluid'>
                </div>
                <div class="carousel-item">
                    <img src="img/${cook.foodImg1}.jpg" alt="chef food1 image" class='cook-img'>
                </div>
                <div class="carousel-item">
                    <img src="img/${cook.foodImg2}.jpg" alt="chef food2 image" class='cook-img'>
                </div>
            </div>
        </div>
        <div class="card-body">
            <h5 class='card-title cook-name'>${cook.cookName}</h5>
            <p class='card-text cuisine-name checked'>${cook.cuisine}</p>
            <p>Rating: ${cook.rating}/5</p>
            <a class='stretched-link' href='${cook.page}'></a>
        </div>
    </div>`
    }))
};

menu.cookFilter = function() {
    let filterVal;
    let filterMenu;
    if($(this).prop("checked")===true) {
        menu.$cookCat.empty()
        filterVal = $(this).val();
        filterMenu = menu.cooks.filter(item => filterVal === item.cuisine);
        menu.cookAppend(filterMenu);
        menu.$checkbox.not(this).prop('checked', false);
    }
    else{
        filterMenu = menu.cooks;
        menu.cookAppend(filterMenu)
    }
}

menu.init = function(){
    menu.$checkbox.on('click', menu.cookFilter);
}

$(document).ready(function() {
    console.log("scriptload")
    menu.init();
});




