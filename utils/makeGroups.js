const shuffle = require("./shuffle");

const makeGroups = (arr, groupLength) => {
  if (isNaN(groupLength)) return "number must be passed as second argument";

  const groups = [];
  const apprenticeArray = shuffle([...arr]);
  const tableGroups = {};

  let groupsIterator = 0;

  for (let i = 0; i < groupLength; i++) groups.push([]);

  apprenticeArray.forEach((apprentice) => {
    groupsIterator === groupLength && (groupsIterator = 0);
    groups[groupsIterator].push(apprentice);
    groupsIterator++;
  });

  groups.map((group, index) => {
    if (tableGroups[`Group ${index + 1}`] === undefined)
      tableGroups[`Group ${index + 1}`] = group;
  });

  return tableGroups;
};

module.exports = makeGroups;
