function wordcount(stringtocount) {
  var arr1 = stringtocount.split(" ");
  var n = arr1.length;
  let i = 0;
  let arr2 = [];
  while (i < n) {
    if (arr1[i] != "") {
      arr2.push(arr1[i]);
    } else {
      console.log("space");
    }
    i++;
  }
  var x = arr2.length;
  return x;
}

function create() {
  var text2 = document.getElementById("inp").value;
  if (text2.trim() == "" || text2.trim() == null) {
    return false;
  } else if (wordcount(text2) > 25) {
    alert("too long");
    return false;
  } else {
    document.getElementById("inp").value = "";
  }

  let ul = document.getElementById("list");
  let li = document.createElement("li");

  li.setAttribute("class", "todo");
  let tx = document.createElement("div");
  tx.setAttribute("class", "task");
  let p1 = document.createElement("p");
  p1.setAttribute("class", "text");

  let teks = document.createTextNode(text2);
  p1.appendChild(teks);
  tx.appendChild(p1);

  let btn1 = document.createElement("img");
  btn1.setAttribute("class", "logo edit");
  btn1.setAttribute("src", "edit.png");
  btn1.addEventListener("click", function () {
    var l2 = btn1.parentNode;
    let editelem = l2.childNodes[0].childNodes[0].innerHTML;
    document.getElementById("inp").value = editelem;
    let btn = document.getElementById("btn1");
    btn.style.display = "inline";
    let btnc = document.getElementById("btn");
    btnc.style.display = "none";

    btn.addEventListener("click", function () {
      let y = l2.childNodes[0];
      let z = y.childNodes[0];
      let x1 = z.innerHTML;
      let x2 = document.getElementById("inp").value;
      if (x2 != x1 && x2 != '') {
        let p2 = document.createElement("p");
        p2.setAttribute("class", "text");
        // let editecont = document.getElementById("inp").value;
        let teks = document.createTextNode(x2);
        p2.appendChild(teks);
        y.replaceChild(p2, z);
        console.log(y.childNodes[0]);
        btn.style.display = "none";
        let btnc = document.getElementById("btn");
        btnc.style.display = "inline";
      } else {
        btn.style.display = "none";
        let btnc = document.getElementById("btn");
        btnc.style.display = "inline";
      }
      document.getElementById("inp").value = "";
    });
  });

  let btn2 = document.createElement("img");
  btn2.setAttribute("class", "logo delete");
  btn2.setAttribute("src", "dlt.png");
  btn2.addEventListener("click", function () {
    let btn = document.getElementById("btn1");
    let disp = btn.style.display;
    if (disp == "none") {
      let li = btn2.parentNode;
      ul.removeChild(li);
    } else if (disp != "none") {
      let li = btn2.parentNode;
      ul.removeChild(li);
      document.getElementById("btn1").style.display = "none";
      document.getElementById("inp").value = "";
      document.getElementById("btn").style.display = "inline";
    }
  });

  li.appendChild(tx);
  li.appendChild(btn1);
  li.appendChild(btn2);
  ul.appendChild(li);
}

// code for printing date and day in the navbar

let today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
let yr = today.getFullYear();
let day = today.getDay();
document.getElementById("date").innerHTML = date;
document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = yr;
let dayarr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayname = dayarr[today.getDay()];
document.getElementById("day").innerHTML = dayname;
