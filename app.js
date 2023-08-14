window.addEventListener( 'DOMContentLoaded', () => {

    const title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    year = document.querySelector('#year'),
    btn = document.querySelector('.btn'),
    bookList = document.querySelector('#book-list');

    btn.addEventListener('click', (event) => {
        event.preventDefault()
        if (title.value == '' && author.value == '' && year.value == ''){
            alert("Maydonlarni to'ldiring");
        }else{
            const ls = localStorage;
            const newRow = document.createElement('tr')
            
            const newTitle = document.createElement('th')
            newTitle.innerHTML = title.value
            newRow.appendChild(newTitle)
            
            const newAuthor = document.createElement('th')
            newAuthor.innerHTML = author.value

            newRow.appendChild(newAuthor)

            const dataYear = document.createElement('th')
            dataYear.innerHTML = year.value

            newRow.appendChild(dataYear)

            bookList.appendChild(newRow);

            title.value = '';
            author.value = '';
            year.value = '';

            ls.setItem(title.value);
            ls.setItem(author.value);
            ls.setItem(year.value);

        }
    })
})


