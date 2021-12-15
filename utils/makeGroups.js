const shuffle = require("./shuffle");

const makeGroups = (arr, lead) => {
  if (isNaN(lead.length)) return "number must be passed as second argument";

  const groups = [];
  const apprenticeArray = shuffle([...arr]);
  const tableGroups = {};

  let groupsIterator = 0;

  for (let i = 0; i < lead.length; i++) groups.push([]);

  apprenticeArray.forEach((apprentice) => {
    groupsIterator === lead.length && (groupsIterator = 0);
    groups[groupsIterator].push(apprentice);
    groupsIterator++;
  });

  groups.map((group, index) => {
    if (tableGroups[lead[index].name] === undefined)
      tableGroups[lead[index].name] = group;
  });

  return tableGroups;
};

module.exports = makeGroups;
