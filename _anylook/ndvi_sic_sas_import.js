

const fs = require('fs');


fs.readFile('data001.tsv', (err, data) => {
  if (err) throw err;
  data = '' + data
  data = data.split('\r\n')
  console.log('read OK');
  console.log(data.length);
  /// console.log(data);

  data.forEach((e, id) => {
      if (id == 0) return
      let item = e.split('\t')
      console.log(id,e, item);
  })

});
