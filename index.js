var mongoose = require("mongoose");

module.exports = function (req, res, next) {
  try {
    var paramKeys = Object.keys(req.params);

    var validKeys = paramKeys.filter(function (key) {
      var validKey = key.substr(key.lastIndexOf("_") + 1);
      return validKey == "id";
    });

    for (let key of validKeys) {
      if (
        !req.params[key] ||
        !mongoose.Types.ObjectId.isValid(req.params[key])
      ) {
        throw new Error();
      }
    }
  } catch (error) {
    return res.status(404).json({});
  }
  next();
};
