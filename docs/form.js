const promptForm = document.querySelector('#promptForm');
const promptText = document.querySelector('#promptText');

promptForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    // alert('폼 제출!')
    const promptTextValue = promptText.value.trim();
    // alert(`입력된 프롬프트: ${promptTextValue}`);
    if (!promptTextValue) {
        alert('프롬프트를 입력해주세요.');
        return;
    }
    // 페치 시 폼 버튼 disabled
    const submitButton = document.querySelector('#promptForm button');
    submitButton.disabled = true;
    // 프롬프트 처리
    try {
        const response = await fetch('http://localhost:8080/api/prompt', {
            method: 'POST',
            // Fetch시 직렬화하세요...
            body: JSON.stringify({ text: promptTextValue }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            alert('프롬프트 처리 중 오류가 발생했습니다.');
            return;
        }
        const result = await response.json();
        alert(JSON.stringify(result));
    } finally {
        // 다 끝나면
        submitButton.disabled = false;
    }
});