var wordItems = document.getElementsByTagName("strong");

for (var i = 0; i < wordItems.length; i++) {
    wordItems[i].addEventListener("mouseover", function(event) {
        event.target.style.color = "red";

        setTimeout(function() {
            event.target.style.color = "";
        }, 750);
    }, false);
}