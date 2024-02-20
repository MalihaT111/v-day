var colours=new Array('#ffefca','#ffeab3', '#FF7097', '#FE3169', "#FC0E41");
const minisize = 20;
const maxisize = 40;
const hearts = 66;
const over_or_under = "over";

let x = 0;
let y = 0;
let ox = 0;
let oy = 0;
let swide = 0;
let shigh = 0;
let sleft = 0;
let sdown = 0;

const herz = new Array(hearts).fill(null).map(() => {
  const heart = createDiv("auto", "auto");
  heart.style.visibility = "hidden";
  heart.style.zIndex = over_or_under === "over" ? "1001" : "0";
  heart.style.pointerEvents = "none";
  if (navigator.appName === "Microsoft Internet Explorer") {
    heart.style.filter = "alpha(opacity=75)";
  } else {
    heart.style.opacity = 0.75;
  }
  heart.appendChild(document.createTextNode(String.fromCharCode(9829)));
  document.body.appendChild(heart);
  return heart;
});
const herzx = new Array(hearts).fill(0);
const herzy = new Array(hearts).fill(false);
const herzs = new Array(hearts).fill(minisize);
let kiss = false;

function mwah() { if (document.getElementById) {
  var i, heart;
  for (i=0; i<hearts; i++) {
    heart=createDiv("auto", "auto");
    heart.style.visibility="hidden";
	heart.style.zIndex=(over_or_under=="over")?"1001":"0";
    heart.style.color=colours[i%colours.length];
	heart.style.pointerEvents="none";
    if (navigator.appName=="Microsoft Internet Explorer") heart.style.filter="alpha(opacity=75)";
    else heart.style.opacity=0.75;
    heart.appendChild(document.createTextNode(String.fromCharCode(9829)));
    document.body.appendChild(heart);
    herz[i]=heart;
	herzy[i]=false;
  }
  set_scroll();
  set_width();
  herzle();
}}


function herzle() {
  if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
    ox = x;
    oy = y;
    for (let c = 0; c < hearts; c++) {
      if (herzy[c] === false) {
        herz[c].firstChild.nodeValue = String.fromCharCode(9829);
        herz[c].style.left = `${(herzx[c] = x - minisize / 2)}px`;
        herz[c].style.top = `${(herzy[c] = y - minisize)}px`;
        herz[c].style.fontSize = `${minisize}px`;
        herz[c].style.fontWeight = 'normal';
        herz[c].style.visibility = 'visible';
        herzs[c] = minisize;
        break;
      }
    }
  }
  for (let c = 0; c < hearts; c++) {
    if (herzy[c] !== false) {
      blow_me_a_kiss(c);
    }
  }
  requestAnimationFrame(herzle);
}

function pucker() {
  ox = -1;
  oy = -1;
  kiss = setTimeout(pucker, 100);
}

document.addEventListener('mousedown', pucker);
document.addEventListener('mouseup', () => {
  clearTimeout(kiss);
});



function blow_me_a_kiss(i) {
  herzy[i] -= herzs[i] / minisize + i % 2;
  herzx[i] += (i % 5 - 2) / 5;
  if (herzy[i] < sdown - herzs[i] || herzx[i] < sleft - herzs[i] || herzx[i] > sleft + swide - herzs[i]) {
    herz[i].style.visibility = "hidden";
    herzy[i] = false;
  } else if (herzs[i] > minisize + 2 && Math.random() < .5 / hearts) {
    break_my_heart(i);
  } else {
    if (Math.random() < maxisize / herzy[i] && herzs[i] < maxisize) {
      herz[i].style.fontSize = `${++herzs[i]}px`;
    }
    herz[i].style.top = `${herzy[i]}px`;
    herz[i].style.left = `${herzx[i]}px`;
  }
}

function break_my_heart(i) {
  herz[i].firstChild.nodeValue = String.fromCharCode(9676);
  herz[i].style.fontWeight = 'bold';
  herzy[i] = false;
  for (let t = herzs[i]; t <= maxisize; t++) {
    setTimeout(() => {
      herz[i].style.fontSize = `${t}px`;
    }, 60 * (t - herzs[i]));
  }
  setTimeout(() => {
    herz[i].style.visibility = "hidden";
  }, 60 * (maxisize - herzs[i]));
}

function mouse(e) {
  if (e) {
    y = e.pageY;
    x = e.pageX;
  } else {
    set_scroll();
    y = e.clientY + sdown;
    x = e.clientX + sleft;
  }
}

window.addEventListener('mousemove', mouse);

function set_width() {
  let sw_min = Math.min(
    document.documentElement.clientWidth || Infinity,
    window.innerWidth || Infinity,
    document.body.clientWidth || Infinity,
    800
  );
  let sh_min = Math.min(
    document.documentElement.clientHeight || Infinity,
    window.innerHeight || Infinity,
    document.body.clientHeight || Infinity,
    600
  );
  swide = sw_min;
  shigh = sh_min;
}

window.addEventListener('resize', set_width);

function set_scroll() {
  sdown = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
  sleft = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
}

function createDiv(height, width) {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = height;
  div.style.width = width;
  div.style.overflow = "hidden";
  div.style.backgroundColor = "transparent";
  return div;
}

mwah(); // Trigger the animation