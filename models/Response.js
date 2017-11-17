var mongoose = require('mongoose');

var responseSchema = new mongoose.Schema({
  name: String,
  count: Number
});

responseSchema.methods.setCount = function(count, cb) {
  this.count = count;
  this.save(cb);
}

mongoose.model('Response', responseSchema);
