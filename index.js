var hiddenUI = document.querySelector('.sub-list');
    function toggleClick() {
        if(hiddenUI.classList.contains('seen')){
            hiddenUI.classList.remove('seen')
        }
        else {
            hiddenUI.classList.add('seen')
        }
    }