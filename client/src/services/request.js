const Request = function(url) {
  this.url = url;
}

Request.prototype.get = function(callback) {
}

Request.prototype.post = function(callback, body) {
}

Request.prototype.delete = function(callback) {
}

module.exports = Request;