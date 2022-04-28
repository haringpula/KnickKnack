document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  console.log(navigator.notification);
}

document.getElementById("About").addEventListener("click", dialogAlert);
function dialogAlert() {
  var message = "I am Alert Dialog!";
  var title = "ALERT";
  var buttonName = "Alert Button";
  navigator.notification.alert(message, alertCallback, title, buttonName);

  function alertCallback() {
    console.log("Alert is Dismissed!");
  }
}
