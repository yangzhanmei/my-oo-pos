const Promotion = require('./models/promotion');

function loadPromotions() {

  return [new Promotion('BUY_TWO_GET_ONE_FREE',['ITEM000000','ITEM000001','ITEM000005'])];
}

exports.loadPromotions = loadPromotions;
