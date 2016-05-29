//make sure you have your directory and regex test set correctly!
var context = require.context('./test', true, /-test\.jsx?$/);
context.keys().forEach(context);
