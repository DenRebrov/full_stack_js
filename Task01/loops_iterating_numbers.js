for (let i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

var i = 2;
while (i <= 20 && i % 2 == 0) {
  alert( i );
  i++;
}

var i = 2;
do {
  alert( i );
  i++;
} while (i <= 20 && i % 2 == 0);
