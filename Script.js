// ربط زر home
document.addEventListener("DOMContentLoaded", function () {
  let homeBtn = document.getElementById("homeBtn");

 if(homeBtn) {
  homeBtn.addEventListener("click", function (e) {
    e.preventDefault(); // 🔥 هادي أهم سطر

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
 }
});

/* ================= CONTACT1 ================= 

const contactModal = document.getElementById("contactModal");
const contactBtn = document.getElementById("contactBtn");
const closeContact = document.querySelector("#contactModal .close");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeContact.addEventListener("click", () => {
  contactModal.style.display = "none";
  document.body.style.overflow = "auto";
});
*/



/* ================= SIGN IN ================= */

const signModal = document.getElementById("signModall");
const closeSign = document.getElementById("closeSign_button");
if (signBtn){
  signBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    signModal.style.display  = "flex";
    document.body.style.overflow = "hidden";
  });
}
signBtn.addEventListener("click", (e) => {
    e.preventDefault();
  signModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeSign.addEventListener("click", () => {
  signModal.style.display = "none";
  document.body.style.overflow = "auto";
});

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggle.textContent = "🙈";
  } else {
    password.type = "password";
    toggle.textContent = "👁️";
  }
});

//      login     
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log("Email:", email);
  console.log("Password:", password);

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  alert("Login successful ✅");
});
/* ================= CONTACT2 ================= */
const openBtn = document.getElementById("openContact");
const modal = document.querySelector(".contact-modal");
const closeBtn = document.querySelector(".close-btn");

openBtn.onclick = function() {
  modal.style.display = "flex";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

/*=====================    modal     ===========================*/
function openFullModal(el) {
  document.getElementById("fullModal").style.display = "block";

  const data = JSON.parse(el.dataset.product);

  const mainImage = document.getElementById("mainImage");
  const thumbsContainer = document.getElementById("thumbs");

  thumbsContainer.innerHTML = "";

  data.forEach((item, index) => {
    const img = document.createElement("img");
    img.src = item.img;

    img.onclick = () => {
      mainImage.src = item.img;

      document.getElementById("productTitle").innerText = item.title;
      document.getElementById("productDesc").innerText = item.desc;
      document.getElementById("productPrice").innerText = item.price;

      document.getElementById("whatsappBtn").href =
        "https://wa.me/96171918022?text=مرحبا بدي استفسر عن " + item.title;
    };

    thumbsContainer.appendChild(img);

    // أول صورة افتراضية
    if (index === 0) {
      mainImage.src = item.img;

      document.getElementById("productTitle").innerText = item.title;
      document.getElementById("productDesc").innerText = item.desc;
      document.getElementById("productPrice").innerText = item.price;

      document.getElementById("whatsappBtn").href =
        "https://wa.me/96171918022?text=مرحبا بدي استفسر عن " + item.title;
    }
  });
}

function closeFullModal() {
  document.getElementById("fullModal").style.display = "none";
  document.body.classList.remove("modal-open");
}
/*=====================    view all     ===========================*/

document.querySelectorAll(".salse-container").forEach(section => {

  const btn = section.querySelector(".btn-button");
  const cards = section.querySelectorAll(".card");

  let expanded = false;

  // أول تحميل: بس 4
  cards.forEach((card, index) => {
    if (index >= 4) {
      card.classList.add("hidden");
    }
  });

  btn.addEventListener("click", () => {
    expanded = !expanded;

    cards.forEach((card, index) => {
      if (index >= 4) {
        card.classList.toggle("hidden");
      }
    });

    btn.textContent = expanded ? "Show Less" : "View All";
  });

});

/*=====================    خدماتنا    ===========================*/

const servicesBtn = document.getElementById("servicesBtn");
const servicesModal = document.getElementById("servicesModal");

servicesBtn.addEventListener("click", () => {
  servicesModal.style.display = "block";
document.body.classList.add("modal-open");
});

function closeServicesModal() {
  servicesModal.style.display = "none";
  document.body.style.overflow = "auto";
}

function goToSection(id) {
  document.getElementById("servicesModal").style.display = "none";
  document.body.classList.remove("modal-open");

  setTimeout(() => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  }, 200);
}


/*=====================    Course Modal    ===========================*/
function openCourseModal(el) {
  const data = JSON.parse(el.getAttribute("data-course"));

  const modal = document.getElementById("courseModal");
  const list = document.getElementById("courseList");

  modal.style.display = "flex";
  list.innerHTML = "";

  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "course-item";

    div.innerHTML = `
      <img src="${item.img}">
      <div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `;

    div.onclick = () => {
      window.open(item.video, "_blank");
    };

    list.appendChild(div);
  });
}

function closeCourseModal() {
  document.getElementById("courseModal").style.display = "none";
}

/*===================تصفح المتجر=================================*/
document.getElementById("shopBtn").addEventListener("click", function() {
  document.getElementById("shopSection").scrollIntoView({
    behavior: "smooth"
  });
});