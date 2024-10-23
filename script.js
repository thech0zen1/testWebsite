document.addEventListener('DOMContentLoaded', () => {
    const tagsBox = document.getElementById('tags-box');
    const selectedTags = new Set();

    function addTag(tag) {
        const tagElement = document.createElement('div');
        tagElement.classList.add('tag');
        tagElement.innerText = tag;

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close');
        closeBtn.innerText = 'x';
        closeBtn.addEventListener('click', () => {
            removeTag(tag);
        });

        tagElement.appendChild(closeBtn);
        tagsBox.appendChild(tagElement);
    }

    function removeTag(tag) {
        selectedTags.delete(tag);
        const tagElements = document.querySelectorAll('.tag');
        tagElements.forEach(tagElement => {
            if (tagElement.innerText.includes(tag)) {
                tagsBox.removeChild(tagElement);
            }
        });
    }

    const selectContainer = document.querySelector('.tag-container');
    const selectElement = document.createElement('div');
    selectElement.setAttribute('class', 'select-selected');
    selectElement.innerHTML = 'Select Stream';

    const optionContainer = document.createElement('div');
    optionContainer.setAttribute('class', 'select-items select-hide');

    const options = [
        'CSE', 'IE', 'ME', 'ECE', 'EEE', 'AE','ID','CV'
    ];

    options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.innerHTML = option;
        optionElement.addEventListener('click', function() {
            if (!selectedTags.has(option)) {
                selectedTags.add(option);
                addTag(option);
            }
            closeAllSelect();
        });
        optionContainer.appendChild(optionElement);
    });

    selectContainer.appendChild(selectElement);
    selectContainer.appendChild(optionContainer);

    selectElement.addEventListener('click', function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        optionContainer.classList.toggle('select-hide');
        this.classList.toggle('select-arrow-active');
    });

    function closeAllSelect(elmnt) {
        const selectItems = document.querySelectorAll('.select-items');
        const selectSelected = document.querySelectorAll('.select-selected');
        selectItems.forEach((item, index) => {
            if (elmnt !== selectSelected[index]) {
                item.classList.add('select-hide');
                selectSelected[index].classList.remove('select-arrow-active');
            }
        });
    }

    document.addEventListener('click', closeAllSelect);
});
