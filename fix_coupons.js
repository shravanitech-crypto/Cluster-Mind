const mongoose = require('mongoose');
const Coupon = require('./models/Coupon.js').default;
const MarketingTeam = require('./models/MarketingTeam.js').default;

async function fix() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopsmart_db');
  const marketing = await MarketingTeam.findOne({ username: 'marketing' });
  console.log('Marketing ID:', marketing._id);
  await Coupon.updateMany(
    { createdBy: { $exists: false } },
    { $set: { createdBy: marketing._id } }
  );
  console.log('Fixed coupons');
  const coupons = await Coupon.find().lean();
  console.log('All coupons now:', coupons.map(c => ({ code: c.code, createdBy: c.createdBy?.toString() })));
  await mongoose.disconnect();
}
fix().catch(console.error);