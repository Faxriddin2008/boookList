window.addEventListener( 'DOMContentLoaded', () => {

    const title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    year = document.querySelector('#year'),
    btn = document.querySelector('.btn'),
    bookList = document.querySelector('#book-list');

    btn.addEventListener('click', (event) => {
        event.preventDefault()
        // Basic validation
        if (title.value == '' && author.value == '' && year.value == ''){
            alert('Maydonlarni toldiring');
        }else{
            const l = localStorage;
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

            l.setItem(title.value);
            l.setItem(author.value);
            l.setItem(year.value);

        }
    })
})


