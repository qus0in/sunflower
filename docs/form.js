const promptForm = document.querySelector('#promptForm');
const promptText = document.querySelector('#promptText');

promptForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('폼 제출!')
});