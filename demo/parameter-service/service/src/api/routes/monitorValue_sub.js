const Router = require('hermesjs/lib/router');

const router = new Router();
const monitorValueSubHandler = require('../handlers/monitorValue_sub');
module.exports = router;

router.useOutbound('monitorValue_sub', async (message, next) => {
  try {

    await monitorValueSubHandler._monitorValue_sub({
      message
    });
    next();
  } catch (e) {
    next(e);
  }
});