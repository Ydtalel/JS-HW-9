const checkboxGroups = document.querySelectorAll('.interest');

function checkboxSwitch(checkboxGroup, value = false) {
  const innerInterestCheckboxes = checkboxGroup.querySelectorAll('.interest__check');
  innerInterestCheckboxes.forEach(checkbox => {
    checkbox.checked = value;
  });

  let allChecked = true;
  let allUnchecked = true;
  innerInterestCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      allUnchecked = false;
    } else {
      allChecked = false;
    }
  });

  const parentCheckbox = checkboxGroup.querySelector('.interest__check');
  if (allChecked) {
    parentCheckbox.checked = true;
    parentCheckbox.indeterminate = false;
  } else if (allUnchecked) {
    parentCheckbox.checked = false;
    parentCheckbox.indeterminate = false;
  } else {
    parentCheckbox.checked = false;
    parentCheckbox.indeterminate = true;
  }
}

checkboxGroups.forEach(checkboxGroup => {
  const parentCheckbox = checkboxGroup.querySelector('.interest__check');
  parentCheckbox.addEventListener('change', () => {
    checkboxSwitch(checkboxGroup, parentCheckbox.checked);
  });
});

