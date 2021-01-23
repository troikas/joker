function _(e) {
  return document.getElementById(e);
}

const myDay = new Date();
let myYear = myDay.getFullYear();



function makeTable(col, row, id) {
  let myNum = 0;
  let myTable = '';
  for (i = 0; i < row; i++) {
    myTable += '<tr>'
    for (y = 0; y < col; y++) {
      myNum += 1;
      myTable += '<td ' + id + '-nu' + myNum + '">' + myNum + '</td>';
    }
    myTable += '</tr>';
  }
  return myTable;
}

let allBig = function() {
    let allTables = '';
    for (x = 0; x <= 5; x++) {
      allTables += '<table class="tbn" id="tbn' + (x + 1) + '">';
      allTables += makeTable(5, 9, 'id="tbn' + (x + 1));
      allTables += '</table>';
    }
    return allTables;
  }

let allJoker = function() {
    let allTables = '';
    for (x = 0; x <= 5; x++) {
      allTables += '<table class="tbn" id="tbj' + (x + 1) + '">';
      allTables += makeTable(5, 4, 'id="tbj' + (x + 1));
      allTables += '</table>';
    }
    return allTables;
  }

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

_('gen').addEventListener('click', () => {
    let x = document.querySelectorAll('.active');
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
      let myj = _('tbj' + y + '-nu' + alln.jok);
      myj.classList.add('active');
    }
  });

_('table_big').innerHTML = allBig();
_('table_joker').innerHTML = allJoker();
_('copy').innerText = (myYear - 2) + '-' + (myYear + 2);
