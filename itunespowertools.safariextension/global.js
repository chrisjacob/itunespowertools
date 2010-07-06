var command_handle = function(msgEvent) {
  var msgEventName = msgEvent.name;
  var msgEventMessage = msgEvent.message;

  console.log(msgEvent);
  console.log(msgEventName);
  console.log(msgEventMessage);
};

var validate_handle = function(msgEvent) {
  var msgEventName = msgEvent.name;
  var msgEventMessage = msgEvent.message;

  console.log(msgEvent);
  console.log(msgEventName);
  console.log(msgEventMessage);
};

var message_handle = function(msgEvent) {
  var msgEventName = msgEvent.name;
  var msgEventMessage = msgEvent.message;

  console.log(msgEvent);
  console.log(msgEventName);
  console.log(msgEventMessage);
};

safari.application.addEventListener("command", command_handle, false);
safari.application.addEventListener("validate", validate_handle, false);
safari.application.addEventListener("message", message_handle, false);