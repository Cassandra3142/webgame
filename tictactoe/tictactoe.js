const data = [];
for (let i = 0 ; i < 3 ; i ++) {
  data.push([]);
}

const $table = document.createElement('table');
document.body.append($table);
for (let i = 0 ; i < 3 ; i ++) {
  const $tr = document.createElement('tr');
  for (let i = 0 ; i < 3 ; i ++) {
    const $td = document.createElement('td');
    $tr.append($td);
  }
  $table.append($tr);
}

