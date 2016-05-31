//make sure you have your directory and regex test set correctly!
var testContext = require.context('./test', true, /-test\.jsx?$/);
testContext.keys().forEach(testContext);
