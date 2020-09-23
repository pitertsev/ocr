const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://raccoon:poiuytrewq@firstcluster.dcokl.mongodb.net/babushka', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB Connected')
})

module.exports = mongoose.connection
