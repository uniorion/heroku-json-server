// CLI > json-server make-random-data.js 
module.exports = function() {
  var data = { members: [] }
  for (var i = 1; i <= 100; i++) {
    data.members.push({ id: i, 
                        company: 'Company' + i,
                        name: 'Name' + i,
                        userid: 'UserID' + i,
                        password: 'Pass' + Math.floor(Math.random() * 9999)
                    })
  }
  return data;
}