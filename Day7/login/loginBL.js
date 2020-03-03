function loginverification(name, pass) {
  let msg = undefined;
  let tempname = "a";
  let temppass = "1";

  if (name === tempname && pass === temppass) {
    msg = true;
  } else {
    msg = "invalid";
  }
  return msg;
}
