function _(el) {
  return document.getElementById(el);
}

const gen = _('gen');
gen.addEventListener('click', () => {
    let x = document.querySelectorAll('.active');
    console.log(x);
    if (x.length > 0) {
      for (z = 0; z < x.length; z++) {
        x[z].classList.remove('active');
      }
    }
    for (y = 1; y <= 6; y++) {
      let alln = gener();
      for (i = 0; i < alln.nums.length; i++) {
        let myn = _('tbn' + y + '-nu' + alln.nums[i]);
        myn.classList.add('active');
      }
      let myj = _('tbj' + y + '-nj' + alln.jok);
      myj.classList.add('active');
    }
  });

function gener() {
  let allNums = {
    nums: [],
    jok: 0,
  };

  let myNum = Math.floor(Math.random() * 45) + 1;
  allNums.nums.push(myNum);

  while (allNums.nums.length <= 4) {
    myNum = Math.floor(Math.random() * 45) + 1;
    if (allNums.nums.includes(myNum)) {
      myNum = Math.floor(Math.random() * 45) + 1;
    }
    allNums.nums.push(myNum);
  }

  let myJoker = Math.floor(Math.random() * 20) + 1;
  allNums.jok = myJoker;
  return allNums;
}

let myDay = new Date();
let myYear = myDay.getFullYear();

let copy = _('copy');
copy.innerText = (myYear - 2) + '-' + (myYear + 2);
