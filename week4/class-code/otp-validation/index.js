const send = document.getElementById("send");
const verify = document.getElementById("verify");
const check = document.getElementById("otp");

send.addEventListener("click", function () {
  const value = Math.random() * 10000;
  const otp = value.toFixed(0);
  sessionStorage.setItem("otp", otp);
  const parentDiv = document.createElement("div");
  const childDiv = document.createElement("p");
  childDiv.innerText = "Your otp is " + otp;
  parentDiv.appendChild(childDiv);
  document.body.appendChild(parentDiv);
});

verify.addEventListener("click", function () {
  const newvalue = check.value;
  if (!newvalue) {
    return alert("Please enter the otp");
  }
  const otp = sessionStorage.getItem("otp");
  if (newvalue === otp) {
    alert("Your otp is correct");
  } else {
    alert("Otp Is wrong");
  }
});
