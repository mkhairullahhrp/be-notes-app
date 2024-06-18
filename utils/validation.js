const validate = require("validate.js");

exports.validateNotes = (data) => {
  // user schema
  var constraint = {
    id: {
      presence: {
        allowEmpty: false,
      },
    },
    title: {
      presence: {
        allowEmpty: false,
      },
    },
    datetime: {
      presence: {
        allowEmpty: false,
      },
      url: true,
    },
    note: {
      presence: {
        allowEmpty: false,
      },
    },
  };

  return validate(data, constraint, { format: "flat" });
};
