const $editForm = document.getElementById('editForm');
const $title = document.getElementById('title');
const $dateOfCreate = document.getElementById('dateOfCreate');
const $dateOfGoals = document.getElementById('dateOfGoals');
const $todoDetail = document.getElementById('todoDetail');
const $alertMessage = document.querySelector('.alertMessage');

const __url = document.getElementById('__url').value;
const __method = document.getElementById('__method').value;

$editForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = $title.value;
  const dateOfCreate = $dateOfCreate.value;
  const dateOfGoals = $dateOfGoals.value;
  const todoDetail = $todoDetail.value;

  if (!title.trim() || !dateOfGoals) {
    $alertMessage.textContent = '제목과 목표 날짜는 필수 입력 항목입니다.';
    return;
  }
  if (dateOfGoals < dateOfCreate) {
    $alertMessage.textContent = '목표 날짜는 생성 날짜보다 작을 수 없습니다.';
    return;
  }

  const response = await fetch(__url, {
    method: __method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      dateOfCreate,
      dateOfGoals,
      todoDetail,
    }),
  });
  const data = await response.json();

  location.href = data.redirectUrl;
});
