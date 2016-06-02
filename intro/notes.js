
// Talk about dependency injection  after you introduce services

// We are injecting our dependencies into our controller. We need to specify which dependencies we want
//by including the dependencies as parameters in the function.

// When angular renders the page it will make a first pass threw and register the controller name and the function attached to it
// on the second pass threw it will look for the parameter and pass them to the function to make them available to then invoke