// EXAMPLE CONFIGURATION FILE
module.exports = {
  
  'from' :  'DAL',
  'to' : 'LGA' ,
  'leave-date' : '11/01/2016' ,
  'return-date' : '11/08/2016',
  'passengers': 1 ,
  'individual-deal-price' : 50 , // In dollars (optional)
  'total-deal-price': 120 , // In dollars (optional)
  'interval' : 5, //# In minutes (optional)
  
  'TWILIO': {
    'ACCOUNT_SID' : null,
    'AUTH_TOKEN' : null,
    'PHONE_FROM' : null,
    'PHONE_TO' : null
  }
  
};