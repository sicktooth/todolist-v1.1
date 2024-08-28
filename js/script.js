let head = document.querySelector('#head');
console.log(head.outerHTML);

head.addEventListener('click', () => {
    if (head) {
        head.outerHTML = '<del class="bg-purple-300 p-2 text-white text-3xl" id="head">Wednesday, August 28</del>';
    }
})