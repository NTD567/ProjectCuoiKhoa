// js hien thi login form
document.querySelector(".icon-user").addEventListener("click", function () {
  document.querySelector(".login-from").style.display = "block";
  document.querySelector(".login-form-conten").style.display = "flex";
});

document.querySelector(".login-from").addEventListener("click", function () {
  document.querySelector(".login-from").style.display = "none";
  document.querySelector(".login-form-conten").style.display = "none";
});

//hien thi thanh tim kiem
document.querySelector(".icon-tim-kiem").addEventListener("click", function () {
  document.querySelector(".thanh-tim-kiem").style.display = "block";
  document.querySelector("#tim-kiem-san-pham").style.display = "block";
});

document
  .querySelector(".thanh-tim-kiem")
  .addEventListener("click", function () {
    document.querySelector(".thanh-tim-kiem").style.display = "none";
    document.querySelector("#tim-kiem-san-pham").style.display = "none";
  });
//Dang ky - Dang Nhap
//đăng Ký
const formRegister = document.querySelector("form.form-reg");
let listUsers = [];
if (localStorage.getItem("listUsers")) {
  listUsers = JSON.parse(localStorage.getItem("listUsers"));
}
formRegister.addEventListener("submit", function (e) {
  e.preventDefault();
  //  DOM tới thẻ có name là email
  const email = formRegister["email"].value;
  const password = formRegister["password"].value;
  const confirmPassword = formRegister["confirmPassword"].value;
  try {
    if (email === "") throw new Error("Bạn chưa nhập email!");
    if (password === "") throw new Error("Bạn chưa nhập mật khẩu!");
    if (confirmPassword === "") throw new Error("Bạn chưa xác thực mật khẩu!");
    if (confirmPassword !== password)
      throw new Error("Xác thực mật khẩu thất bại!");
    listUsers.map(function (item) {
      if (item.email === email) throw new Error("Tài khoản đã tồn tại!");
    });
    const newUser = {
      email,
      password,
    };
    listUsers.push(newUser);
    localStorage.setItem("listUsers", JSON.stringify(listUsers));
    alert("Đăng Ký Thành Công");
    // code ...
  } catch (error) {
    alert(error.message);
  }
});
//Đăng Nhập
const formLogin = document.querySelector("form.form-login");
let users = JSON.parse(localStorage.getItem("listUsers"));
formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  if (users) {
    let userName = formLogin["email"];
    let UserPass = formLogin["password"];
    let loginSucceed = false;
    users.forEach((element) => {
      if (
        element.email == userName.value &&
        element.password == UserPass.value
      ) {
        loginSucceed = true;
        return;
      }
    });
    if (loginSucceed == true) {
      alert("Đăng Nhập Thành Công");
    } else {
      alert("Đăng nhập thất bại vui lòng kiểm tra lại email hoặc mật khẩu");
    }
  }
});

// //menu mobile
const menuMobileElement = document.querySelector(".icon-menu-mobile");
menuMobileElement.addEventListener("click", menuMobile);
function menuMobile() {
  document.querySelector(".menu-mobile-conten").style.display = "block";
  document.querySelector(".close-x").style.display = "block";
}

const closeMenuMobileElement = document.querySelector(".close-x");
closeMenuMobileElement.addEventListener("click", closeMenu);
function closeMenu() {
  document.querySelector(".menu-mobile-conten").style.display = "none";
  document.querySelector(".close-x").style.display = "none";
}
