function fontBold() {
    var checkbox = document.getElementsByClassName('section__checkbox');
    var text = document.getElementsByClassName('object__text');

    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            text[i].classList.add('object__text--check')
        } else if (!checkbox[i].checked) {
            text[i].classList.remove('object__text--check');
            text[i].classList.add('object__text');
        }
    }
}

function nextBtn() {
    document.getElementsByClassName('face-shape__section')[0].style.display = 'none';
    document.getElementsByClassName('glasses-type__section')[0].style.display = 'block';
}

function backBtn() {
    document.getElementsByClassName('glasses-type__section')[0].style.display = 'none';
    document.getElementsByClassName('face-shape__section')[0].style.display = 'block';
}