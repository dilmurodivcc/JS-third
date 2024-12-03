function m1() {
  const input = document.getElementById("inputValue").value;
  const input2 = document.getElementById("inputValue2").value;
  const input3 = document.getElementById("inputValue3").value;
  const number = parseInt(input);
  const number2 = parseInt(input2);
  const number3 = parseInt(input3);

  const result = Math.max(number, number2, number3);

  document.getElementById("output").innerText = `Eng katta son:    ${result}`;
}

function m2() {
  const input = document.getElementById("inputValue2-1").value;
  const input2 = document.getElementById("inputValue2-2").value;
  const input3 = document.getElementById("inputValue2-3").value;
  const number = parseInt(input);
  const number2 = parseInt(input2);
  const number3 = parseInt(input3);
  const sum1 = number + number2;
  const sum2 = number + number3;
  const sum3 = number2 + number3;
  if (sum1 >= sum2 && sum1 >= sum3) {
    document.getElementById(
      "output18"
    ).innerHTML = `Eng katta yig‘indi: ${sum1}, sonlar: ${number} va ${number2}`;
  } else if (sum2 >= sum1 && sum2 >= sum3) {
    document.getElementById(
      "output18"
    ).innerHTML = `Eng katta yig‘indi: ${sum2}, sonlar: ${number} va ${number3}`;
  } else {
    document.getElementById(
      "output18"
    ).innerHTML = `Eng katta yig‘indi: ${sum3}, sonlar: ${number2} va ${number3}`;
  }
}
0

function m3() {
  const input33 = document.getElementById("inputValue33").value;
  const number33 = parseInt(input33);
  let result = "";
  if (isNaN(number33)) {
    result = "Iltimos, son kiriting.";
  } else if (number33 === 0) {
    result = "Son 0 ga teng.";
  } else if (number33 > 0 && number33 % 2 === 0) {
    result = "Musbat juft son.";
  } else if (number33 > 0 && number33 % 2 !== 0) {
    result = "Musbat toq son.";
  } else if (number33 < 0 && number33 % 2 === 0) {
    result = "Manfiy juft son.";
  } else if (number33 < 0 && number33 % 2 !== 0) {
    result = "Manfiy toq son.";
  }
  document.getElementById("output3").innerHTML = `${result}`;
}

function m4() {
  const input4 = document.getElementById("inputValue4").value;
  const A = parseInt(input4);
  if (A % 2 === 0) {
    document.getElementById("output4").innerText = "A soni juft";
  } else {
    document.getElementById("output4").innerText = "A soni toq";
  }
}

function m5() {
  const input5 = document.getElementById("inputValue5").value;
  const num = parseInt(input5);
  if (num % 3 === 0 && num % 5 === 0) {
    document.getElementById("output5").innerText =
      "A soni 3 va 5 ga bo'linadi!";
  } else if (num % 3 === 0) {
    document.getElementById("output5").innerText = "A soni 3 ga bo'linadi!";
  } else if (num % 5 === 0) {
    document.getElementById("output5").innerText = "A soni 5 ga bo'linadi!";
  } else {
    document.getElementById("output5").innerText =
      "A soni 3 va 5 ga bo'linmaydi!";
  }
}

function m6() {
  const inputA = document.getElementById("inputValueA").value;
  const inputB = document.getElementById("inputValueB").value;
  const A = parseInt(inputA);
  const B = parseInt(inputB);
  const AA = Math.abs(A - 5);
  const BB = Math.abs(B - 5);
  let resultMessage;
  if (AA < BB) {
    resultMessage = `A soni (${A}) 5 ga yaqinroq.`;
  } else if (BB < AA) {
    resultMessage = `B soni (${B}) 5 ga yaqinroq.`;
  } else {
    resultMessage = `A (${A}) va B (${B}) sonlari 5 ga teng masofada.`;
  }
  document.getElementById("output6").innerText = resultMessage;
}

function m7n() {
  const numbers = [12, 45, 67, 23, 89];
  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];
  const sum = firstNumber + lastNumber;

  document.getElementById("output7n").innerText = "Arrar yig'indisi: " + sum;
}

function m7() {
  const input = document.getElementById("inputValue7").value;
  const numbers = input.split(",").map((num) => parseInt(num.trim()));
  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];
  const sum = firstNumber + lastNumber;
  document.getElementById("output7").innerHTML = `
     ${firstNumber} va ${lastNumber} => 
     Yig'indisi: ${sum}`;
}

// SOME FUNCTION -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const moonIcon = document.querySelector(".moon-icon");
const body = document.body;

if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "dark");
  body.classList.add("dark");
} else {
  body.classList.add(localStorage.getItem("mode"));
}

moonIcon.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("mode", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }

  if (body.classList.contains("dark")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  } else {
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  }
});
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 550);
});
AOS.init({
  duration: 1700,
  once: true,
});
