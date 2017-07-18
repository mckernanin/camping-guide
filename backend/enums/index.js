const Activities = require('./Activities');

const enums = {
  Activities
};

// Create arrays from the enum values
Object.keys(enums).forEach((key) => {
  const structure = enums[key];
  const list = Object.keys(structure).map((key2) => structure[key2]);
  enums[`All${key}`] = list;
});

module.exports = enums;
