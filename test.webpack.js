// require all `test/**/*-test.jsx`
var testContext = require.context('./test', true, /-test\.jsx?$/);
testContext.keys().forEach(testContext);
