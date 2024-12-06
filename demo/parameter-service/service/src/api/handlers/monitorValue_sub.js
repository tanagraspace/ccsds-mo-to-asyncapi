const handler = module.exports = {};

const monitorValue_subMiddlewares = [];

/**
 * Registers a middleware function for the monitorValue_sub operation to be executed during request processing.
 *
 * Middleware functions have access to options object that you can use to access the message content and other helper functions
 *
 * @param {function} middlewareFn - The middleware function to be registered.
 * @throws {TypeError} If middlewareFn is not a function.
 */
handler.registerMonitorValue_subMiddleware = (middlewareFn) => {
  if (typeof middlewareFn !== 'function') {
    throw new TypeError('middlewareFn must be a function');
  }
  monitorValue_subMiddlewares.push(middlewareFn);
}

/**
 * 
 *
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.headers.replyTo - The channel to which the reply must be sent.
 * @param {string} options.message.headers.requestId - The unique identifier for correlating request and response.
 *
 * @param {string} options.message.headers.subscriptionId - The identifier of this subscription.
 * @param {string} options.message.headers.name - The parameter name.
 * @param {integer} options.message.headers.parameterDefinitionId - The parameter identity.
 * @param {integer} options.message.headers.parameterValueInstance - The parameter value instance.
 */
handler._monitorValue_sub = async ({
  message
}) => {
  for (const middleware of monitorValue_subMiddlewares) {
    await middleware(message);
  }
};