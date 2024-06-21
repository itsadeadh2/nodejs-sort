const app = require('./infrastructure/server');
app.listen(3000, () => {
  console.log(`Server running on port 3000`)
})