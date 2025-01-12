let val = document.querySelector("input");

val.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let myval = document.querySelector("input").value;
    let mycard = document.querySelectorAll("p");
    //document.querySelector("#card").style.order = "0";
    let loops = document.querySelectorAll("#card");
    for (let loop of loops) {
      loop.style.order = "0";
    }

    switch (myval) {
      case "topiwala":
        for (let cr of mycard) {
          if (cr.innerText == "Topiwala") {
            let out = cr.parentElement;
            out.style.order = "-1";
          }
        }
        break;
      case "kgf":
        for (let cr of mycard) {
          if (cr.innerText == "KGF") {
            let out = cr.parentElement;

            out.style.order = "-1";
          }
        }
        break;

      case "paramatma":
        for (let cr of mycard) {
          if (cr.innerText == "Paramatma") {
            let out = cr.parentElement;

            out.style.order = "-1";
          }
        }
        break;

      case "simplallag ond love story":
        for (let cr of mycard) {
          if (cr.innerText == "Simpallag Ond Love Story") {
            let out = cr.parentElement;

            out.style.order = "-1";
          }
        }
        break;

      case "jackie":
        for (let cr of mycard) {
          if (cr.innerText == "Jackie") {
            let out = cr.parentElement;
            out.style.order = "-1";
          }
        }
        break;
      case "mungaru male":
        for (let cr of mycard) {
          if (cr.innerText == "Mugaru Male") {
            let out = cr.parentElement;
            out.style.order = "-1";
          }
        }
        break;
      case "kavaludaari":
        for (let cr of mycard) {
          if (cr.innerText == "Kavaludari") {
            let out = cr.parentElement;
            out.style.order = "-1";
          }
        }
        break;
      case "kirik party":
        for (let cr of mycard) {
          if (cr.innerText == "Kirik Party") {
            let out = cr.parentElement;
            out.style.order = "-1";
          }
        }
        break;

      case "pathaan":
        for (let cr of mycard) {
          if (cr.innerText == "Pathaan") {
            let out = cr.parentElement;
            out.style.order = "-1";
          }
        }
        break;
      case "pushpa":
        for (let cr of mycard) {
          if (cr.innerText == "Pushpa") {
            let out = cr.parentElement;
            out.style.order = "-1";
          }
        }
        break;
      case "bahubali":
        for (let cr of mycard) {
          if (cr.innerText == "Bahubali") {
            let out = cr.parentElement;
            out.style.order = "-1";
          }
        }
        break;
      case "vikram":
        for (let cr of mycard) {
          if (cr.innerText == "Vikram") {
            let out = cr.parentElement;
            out.style.order = "-1";
          }
        }
        break;
      case "bangalore days":
        for (let cr of mycard) {
          if (cr.innerText == "Bangalore Days") {
            let out = cr.parentElement;
            out.style.order = "-1";
          }
        }
        break;

      case "sita ramam":
        for (let cr of mycard) {
          if (cr.innerText == "Sita Ramam") {
            let out = cr.parentElement;
            out.style.order = "-1";
          }
        }
        break;
    }
  }
});
