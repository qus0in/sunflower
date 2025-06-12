document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const promptId = urlParams.get('id');
    if (!promptId) {
        alert('프롬프트 ID가 제공되지 않았습니다.');
        return;
    }
    // QueryString(id) 처리
    const response = await fetch('http://localhost:8080/api/prompt/' + promptId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        alert('프롬프트 기록을 가져오는 중 오류가 발생했습니다.');
        return;
    }
    const result = await response.json();
    // alert(JSON.stringify(result));
    // 결과를 화면에 표시
    const promptDataId = document.querySelector('#promptDataId');
    const promptDataQuestion = document.querySelector('#promptDataQuestion');
    const promptDataAnswer = document.querySelector('#promptDataAnswer');
    promptDataId.textContent = result.id;
    promptDataQuestion.textContent = result.question;
    promptDataAnswer.textContent = result.answer;
    // 복사 관련
    const shareLink = document.querySelector('#shareLink');
    shareLink.value = `http://${location.hostname}:5500/docs/history/?id=${result.id}`;
    const promptData = document.querySelector('#promptData');
    promptData.style.display = 'block';
});