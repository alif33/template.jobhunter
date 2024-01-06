/////////////// Find job page ////////////
const salaryFilter = document.querySelector('#salaryFilter');
const salaryRangeTitle = document.getElementById('salaryRangeTitle');
const categoryFilter = document.getElementById('categoryFilter');
const typeFilter = document.getElementById('typeFilter');
const levelFilter = document.getElementById('levelFilter');

let salaryDropdown = true;
let categoryDeopdown = true;
let typeDeopdown = true;
let levelDeopdown = true;

const hide = (x, y) => {
  x.style.height = '0px';
  x.style.overflow = 'hidden';
  x.transitionDuration = '3000';
  y = !y;
  return y;
};

const show = (x, y) => {
  x.style.height = '100%';
  x.style.overflow = 'block';
  x.transitionDuration = '3000';
  y = !y;
  return y;
};

// salary filter
const showSalaryFilter = () => {
  if (salaryDropdown) {
    salaryDropdown = hide(salaryFilter, salaryDropdown);
    return;
  } else {
    salaryDropdown = show(salaryFilter, salaryDropdown);
    return;
  }
  console.log(salaryDropdown);
};

// category filter
const showCategoryFilter = () => {
  if (categoryDeopdown) {
    categoryDeopdown = hide(categoryFilter, categoryDeopdown);
    return;
  } else {
    categoryDeopdown = show(categoryFilter, categoryDeopdown);
    return;
  }
  console.log(categoryFilter);
};

// type filter
const showTypeFilter = () => {
  if (typeDeopdown) {
    typeDeopdown = hide(typeFilter, typeDeopdown);
    return;
  } else {
    typeDeopdown = show(typeFilter, typeDeopdown);
    return;
  }
  console.log(categoryFilter);
};

// lavel filter
const showLavelFilter = () => {
  if (levelDeopdown) {
    levelDeopdown = hide(levelFilter, levelDeopdown);
    return;
  } else {
    levelDeopdown = show(levelFilter, levelDeopdown);
    return;
  }
  console.log(categoryFilter);
};
