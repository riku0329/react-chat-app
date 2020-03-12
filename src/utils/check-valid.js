export const checkLength = (event, min, max) => {
  if (event.length < min) {
    alert(`must be at least ${min} characters`);
    return;
  } else if (event.length > max) {
    alert(`must be at than ${max} characters`);
    return;
  }
};

export const checkEmail = input => {
  const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  if (re.test(input.trim())) {
    return input;
  } else {
    alert("Email is not valid");
  }
};
