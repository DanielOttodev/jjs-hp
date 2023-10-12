function showMore(num) {
    //removes the link
    document.getElementById(`link${num}`).style.display = "none";
    //shows the #more
    document.getElementById(`more${num}`).style.display = "block";

    if (num == 3) {
        let nodes = document.querySelectorAll('.break')
        nodes.forEach((e) => {
            e.style.display = 'none';
        })
    }
}
function showLess(num) {
    //removes the link
    document.getElementById(`link${num}`).style.display = "block";
    //shows the #more
    document.getElementById(`more${num}`).style.display = "none";
    if (num == 3) {
        let nodes = document.querySelectorAll('.break')
        nodes.forEach((e) => {
            e.style.display = 'block';
        })
    }
}