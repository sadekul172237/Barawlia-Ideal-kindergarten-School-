
document.addEventListener("DOMContentLoaded", () => {
  // মোবাইল মেনু খোলা ও বন্ধ করা
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // ফুটারে বর্তমান বছর দেখানো
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // ডেমো ফর্মের বার্তা
  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const message = form.querySelector(".form-message");

      if (message) {
        message.textContent =
          "এটি ডেমো ফর্ম—কোনো তথ্য পাঠানো বা সংরক্ষণ করা হয়নি। বাস্তব ব্যবহারের আগে নিরাপদ সার্ভার যুক্ত করুন।";
      }
    });
  });

  // লাইব্রেরির বই খোঁজার ব্যবস্থা
  const search = document.querySelector("#book-search");

  if (search) {
    search.addEventListener("input", () => {
      const term = search.value.trim().toLocaleLowerCase();

      document.querySelectorAll(".searchable").forEach((item) => {
        item.hidden = !item.textContent
          .toLocaleLowerCase()
          .includes(term);
      });
    });
  }
});

/* 🔴 EDIT HERE: ভর্তি বিজ্ঞাপনের লেখা ও লিংক */
document.addEventListener("DOMContentLoaded", function () {
  const ticker = document.querySelector(".admission-ticker");

  if (!ticker) return;

  // এখানে নিজের বিজ্ঞাপনের লেখা পরিবর্তন করো
  const admissionMessage =
    "২০২৭ শিক্ষাবর্ষে ভর্তি চলছে! প্লে থেকে নবম শ্রেণি পর্যন্ত ভর্তি চলছে। ভর্তির তথ্য জানতে ক্লিক করুন।";

  const messages = ticker.querySelectorAll(".admission-message");

  messages.forEach(function (item) {
    item.textContent = admissionMessage;
  });

  // 🔴 EDIT HERE: প্রয়োজন হলে ভর্তি পেজের লিংক পরিবর্তন করো
  const admissionPage = "admission.html";
  const link = ticker.querySelector(".admission-ticker-link");

  if (link) {
    link.setAttribute("href", admissionPage);
  }
});
// Student Registration Form

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("studentProfileForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            alert("আপনার রেজিস্ট্রেশন তথ্য গ্রহণ করা হয়েছে।");

            form.reset();
        });
    }

});

