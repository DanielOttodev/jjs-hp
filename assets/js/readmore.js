function showMore(num) {
    //removes the link
    document.getElementById(`link${num}`).classList.toggle("d-none");
    //shows the #more
    document.getElementById(`more${num}`).classList.toggle('d-none')

    if (num == 3) {
        let nodes = document.querySelectorAll('.break')
        nodes.forEach((e) => {
            e.style.display = 'none';
        })
    }
}
function showLess(num) {
    //shows the link
    document.getElementById(`link${num}`).classList.toggle('d-none')
    //removes the #more
    document.getElementById(`more${num}`).classList.toggle('d-none')
    if (num == 3) {
        let nodes = document.querySelectorAll('.break')
        nodes.forEach((e) => {
            e.style.display = 'block';
        })
    }
}