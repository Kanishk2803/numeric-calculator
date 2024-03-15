let a = confirm(
  "Performing an arithmatic operation on two number.\nClick on 'OK' to continue or click on 'cancle' to exit."
);

if (a == true) {
  let operation;
  operation = prompt(
    "Select number according to operation name.\n1: Addition operation.\n2: Subtraction Operation.\n3: Multiplication operation.\n4: division operation.\nEnter number according to operation"
  );
  var op = Number(operation);
  let add;
  switch (op) {
    case 1: {
      value();
      add = d1 + d2;
      alert(`The addition of '${d1}' and '${d2}' = ${add}.`);
      break;
    }
    case 2: {
      value();
      add = d1 - d2;
      alert(`The subtraction of '${d1}' and '${d2}' = ${add}.`);
      break;
    }
    case 3: {
      value();
      add = d1 * d2;
      alert(`The multiplication of '${d1}' and '${d2}' = ${add}.`);
      break;
    }
    case 4: {
      value();
      add = d1 / d2;
      alert(`The division of '${d1}' and '${d2}' = ${add}.`);
      break;
    }
  }
} else {
  alert("You have exit the programe.");
}

function value() {
  a1 = prompt("Enter frist value =");
  d1 = Number(a1);
  a2 = prompt("Enter second value =");
  d2 = Number(a2);
  return d1, d2;
}
