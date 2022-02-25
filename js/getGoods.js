const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')

  const getData = () => {
    fetch('https://willberries-test-5fc10-default-rtdb.firebaseio.com/db.json')
    .then(res => res.json())
    .then(data => localStorage.setItem('data', (JSON.stringify(data))))
  }

  links.forEach(link => {
    link.addEventListener('click', (event) => {
event.preventDefault()
getData();
    })
  })
}

getGoods();