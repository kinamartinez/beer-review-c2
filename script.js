var beers = [];


$(".post-beer").on("click", function () {
    var beerName = $(".beer-input").val();
    var category = $(".category-input").val();
    var rating = $(".rating-input").val();

    addBeer(beerName, category, rating);
    updateBeers();
    sortByKey(beers);
});

var addBeer = function (beerName, category, rating) {
    beers.push({
        beerName: beerName,
        category: category,
        rating: rating
    });


};
var updateBeers = function () {
    $(".beers-list").find("li").remove();
    for (var i = 0; i < beers.length; i++) {
        $(".beers-list").append("<li></li>");
        $(".beers-list li:last-child").append("Name" + " " + beers[i]["beerName"] + " - " + "Category" + " " + beers[i]["category"] + " - " + "Rating" + " " + beers[i]["rating"]);
    }
};

function sortByKey() {
    beers.sort(function (a, b) {
        return a.rating - b.rating;

    })
}
function sortByKeyReverse() {
    beers.sort(function (a, b) {
        return b.rating - a.rating;
    })
}

console.log(beers);









