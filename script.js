function toggleCustomStackInput() {
  const stackSelect = document.getElementById('stackSizeSelect');
  const customInput = document.getElementById('customStackSize');

  if (stackSelect.value === 'custom') {
    customInput.style.display = 'inline-block';
  } else {
    customInput.style.display = 'none';
  }
}

function calculateStacks() {
  const itemCount = parseInt(document.getElementById('itemCount').value);
  const stackSelect = document.getElementById('stackSizeSelect');
  let stackSize;

  if (isNaN(itemCount) || itemCount < 0) {
    document.getElementById('output').innerHTML = "Please enter a valid positive number of items.";
    return;
  }

  if (stackSelect.value === 'custom') {
    stackSize = parseInt(document.getElementById('customStackSize').value);
    if (isNaN(stackSize) || stackSize <= 0) {
      document.getElementById('output').innerHTML = "Please enter a valid custom stack size.";
      return;
    }
  } else {
    stackSize = parseInt(stackSelect.value);
  }

  const stacks = Math.floor(itemCount / stackSize);
  const remainder = itemCount % stackSize;

  let result = `${stacks} full stack(s)`;

  if (remainder > 0) {
    result += ` and ${remainder} extra item(s)`;
  }

  document.getElementById('output').innerHTML = result;
}
