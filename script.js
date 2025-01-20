const userInput = document.querySelector("#date");
console.log(userInput);

userInput.max = new Date().toISOString().split("T")[0]; // Max tarih bugünün tarihi

const calculateBtn = document.querySelector("button");
const result = document.querySelector("#result"); // Yaş hesaplama sonucunun gösterileceği element

const customAlert = document.querySelector("#customAlert");
const alertMessage = document.querySelector("#alertMessage");
const closeAlertBtn = document.querySelector("#closeAlert");

function showAlert(message) {
  alertMessage.textContent = message;
  customAlert.style.display = "flex";
}

closeAlertBtn.addEventListener("click", function () {
  customAlert.style.display = "none";
});

function calculateAge() {
  const birthDate = new Date(userInput.value); // Kullanıcının doğum tarihi
  const date = birthDate.getDate(); // Doğum günü
  const month = birthDate.getMonth() + 1; // Doğum ayı (0 bazlı olduğu için 1 ekliyoruz)
  const year = birthDate.getFullYear(); // Doğum yılı

  const today = new Date(); // Bugünün tarihi

  const todayDate = today.getDate(); // Bugün günü
  const todayMonth = today.getMonth() + 1; // Bugün ayı
  const todayYear = today.getFullYear(); // Bugün yılı

  let age = todayYear - year; // Yıl farkını hesapla
  let ageMonths = todayMonth - month; // Ay farkını hesapla
  let ageDays = todayDate - date; // Gün farkını hesapla

  // Eğer doğum günü henüz geçmemişse, yaş bir eksik olacak
  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    age--; // Yaşı bir eksik yap
    ageMonths = 12 + ageMonths; // Ay farkını düzelt
  }

  if (ageDays < 0) {
    const daysInMonth = new Date(todayYear, todayMonth - 1, 0).getDate(); // Geçerli ayın gün sayısını al
    ageDays = daysInMonth + ageDays; // Gün farkını düzelt
  }

  // Sonuçları ekranda gösterme
  result.textContent = `Yaşınız: ${age} yıl, ${ageMonths} ay, ${ageDays} gün`;
}

calculateBtn.addEventListener("click", function () {
  if (userInput.value) {
    // Eğer kullanıcı bir tarih girerse
    calculateAge();
  } else {
    showAlert("Lütfen bir doğum tarihi girin!");
  }
});
