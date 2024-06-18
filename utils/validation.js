import validate from "validate.js";

const validateNotes = (data) => {
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
    },
    note: {
      presence: {
        allowEmpty: false,
      },
    },
  };

  return validate(data, constraint, { format: "flat" });
};

export { validateNotes };
