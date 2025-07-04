export const validatePhone = (phone: string): boolean => {
  return /^\d{10}$/.test(phone);
};

export const validateOTP = (otp: string): boolean => {
  return otp === '123456'; // In production, this would verify with a backend
};

// Enhanced coupon system with multiple discount codes
export const validateCoupon = (code: string): boolean => {
  const validCoupons = {
    // Welcome & New User Coupons
    'WELCOME10': 10,
    'NEWUSER15': 15,
    'FIRSTBUY20': 20,
    
    // General Discount Coupons
    'SAVE20': 20,
    'DISCOUNT25': 25,
    'DEAL30': 30,
    
    // Student & Educational Discounts
    'STUDENT25': 25,
    'EDUCATION30': 30,
    'CAMPUS35': 35,
    
    // Seasonal & Holiday Coupons
    'HOLIDAY30': 30,
    'SUMMER25': 25,
    'WINTER40': 40,
    'SPRING20': 20,
    'FALL35': 35,
    'NEWYEAR50': 50,
    'BLACKFRIDAY60': 60,
    'CYBERMONDAY55': 55,
    
    // VIP & Premium Coupons
    'VIP40': 40,
    'PREMIUM45': 45,
    'ELITE50': 50,
    'PLATINUM55': 55,
    
    // Flash Sale & Limited Time
    'FLASH50': 50,
    'LIGHTNING45': 45,
    'QUICK40': 40,
    'RUSH35': 35,
    
    // High Value Discounts
    'MEGA60': 60,
    'SUPER65': 65,
    'ULTRA70': 70,
    'MAXIMUM75': 75,
    'ULTIMATE80': 80,
    'SUPREME85': 85,
    'EXTREME90': 90,
    
    // Special Event Coupons
    'LAUNCH50': 50,
    'ANNIVERSARY60': 60,
    'BIRTHDAY70': 70,
    'MILESTONE80': 80,
    
    // Developer & Creator Codes
    'ANKITA': 99,
    'DEVELOPER95': 95,
    'CREATOR90': 90,
    'CODER85': 85,
    
    // Category Specific
    'MACBOOK30': 30,
    'IPHONE25': 25,
    'IPAD35': 35,
    'WATCH40': 40,
    
    // Loyalty & Referral
    'LOYAL30': 30,
    'REFERRAL25': 25,
    'FRIEND20': 20,
    'FAMILY35': 35,
    
    // Bundle & Bulk Discounts
    'BUNDLE40': 40,
    'BULK45': 45,
    'COMBO50': 50,
    'PACKAGE55': 55
  };
  
  return code.toUpperCase() in validCoupons;
};

export const getCouponDiscount = (code: string): number => {
  const couponDiscounts = {
    // Welcome & New User Coupons
    'WELCOME10': 10,
    'NEWUSER15': 15,
    'FIRSTBUY20': 20,
    
    // General Discount Coupons
    'SAVE20': 20,
    'DISCOUNT25': 25,
    'DEAL30': 30,
    
    // Student & Educational Discounts
    'STUDENT25': 25,
    'EDUCATION30': 30,
    'CAMPUS35': 35,
    
    // Seasonal & Holiday Coupons
    'HOLIDAY30': 30,
    'SUMMER25': 25,
    'WINTER40': 40,
    'SPRING20': 20,
    'FALL35': 35,
    'NEWYEAR50': 50,
    'BLACKFRIDAY60': 60,
    'CYBERMONDAY55': 55,
    
    // VIP & Premium Coupons
    'VIP40': 40,
    'PREMIUM45': 45,
    'ELITE50': 50,
    'PLATINUM55': 55,
    
    // Flash Sale & Limited Time
    'FLASH50': 50,
    'LIGHTNING45': 45,
    'QUICK40': 40,
    'RUSH35': 35,
    
    // High Value Discounts
    'MEGA60': 60,
    'SUPER65': 65,
    'ULTRA70': 70,
    'MAXIMUM75': 75,
    'ULTIMATE80': 80,
    'SUPREME85': 85,
    'EXTREME90': 90,
    
    // Special Event Coupons
    'LAUNCH50': 50,
    'ANNIVERSARY60': 60,
    'BIRTHDAY70': 70,
    'MILESTONE80': 80,
    
    // Developer & Creator Codes
    'ANKITA': 99,
    'DEVELOPER95': 95,
    'CREATOR90': 90,
    'CODER85': 85,
    
    // Category Specific
    'MACBOOK30': 30,
    'IPHONE25': 25,
    'IPAD35': 35,
    'WATCH40': 40,
    
    // Loyalty & Referral
    'LOYAL30': 30,
    'REFERRAL25': 25,
    'FRIEND20': 20,
    'FAMILY35': 35,
    
    // Bundle & Bulk Discounts
    'BUNDLE40': 40,
    'BULK45': 45,
    'COMBO50': 50,
    'PACKAGE55': 55
  };
  
  return couponDiscounts[code.toUpperCase()] || 0;
};

export const calculateDiscount = (total: number, couponCode: string): number => {
  if (!couponCode) return 0;
  
  const discountPercentage = getCouponDiscount(couponCode);
  return (total * discountPercentage) / 100;
};

// Get coupon information for display
export const getCouponInfo = (code: string) => {
  const couponInfo = {
    // Welcome & New User Coupons
    'WELCOME10': { name: 'Welcome Discount', description: 'New user welcome offer', category: 'Welcome' },
    'NEWUSER15': { name: 'New User Special', description: 'First-time buyer discount', category: 'Welcome' },
    'FIRSTBUY20': { name: 'First Purchase', description: 'Your first order discount', category: 'Welcome' },
    
    // General Discount Coupons
    'SAVE20': { name: 'General Savings', description: 'Save on all products', category: 'General' },
    'DISCOUNT25': { name: 'Site-wide Discount', description: 'Apply to entire order', category: 'General' },
    'DEAL30': { name: 'Great Deal', description: 'Limited time offer', category: 'General' },
    
    // Student & Educational Discounts
    'STUDENT25': { name: 'Student Discount', description: 'Educational pricing', category: 'Education' },
    'EDUCATION30': { name: 'Education Special', description: 'For students and teachers', category: 'Education' },
    'CAMPUS35': { name: 'Campus Exclusive', description: 'University student offer', category: 'Education' },
    
    // Seasonal & Holiday Coupons
    'HOLIDAY30': { name: 'Holiday Special', description: 'Seasonal celebration discount', category: 'Seasonal' },
    'SUMMER25': { name: 'Summer Sale', description: 'Hot summer deals', category: 'Seasonal' },
    'WINTER40': { name: 'Winter Wonderland', description: 'Cold weather savings', category: 'Seasonal' },
    'SPRING20': { name: 'Spring Fresh', description: 'New season, new savings', category: 'Seasonal' },
    'FALL35': { name: 'Fall Harvest', description: 'Autumn special pricing', category: 'Seasonal' },
    'NEWYEAR50': { name: 'New Year Blast', description: 'Start the year with savings', category: 'Holiday' },
    'BLACKFRIDAY60': { name: 'Black Friday Mega', description: 'Biggest sale of the year', category: 'Holiday' },
    'CYBERMONDAY55': { name: 'Cyber Monday', description: 'Online exclusive deals', category: 'Holiday' },
    
    // VIP & Premium Coupons
    'VIP40': { name: 'VIP Member', description: 'Exclusive member pricing', category: 'VIP' },
    'PREMIUM45': { name: 'Premium Access', description: 'Premium customer discount', category: 'VIP' },
    'ELITE50': { name: 'Elite Status', description: 'Top-tier customer offer', category: 'VIP' },
    'PLATINUM55': { name: 'Platinum Member', description: 'Highest tier discount', category: 'VIP' },
    
    // Flash Sale & Limited Time
    'FLASH50': { name: 'Flash Sale', description: 'Limited time flash offer', category: 'Flash' },
    'LIGHTNING45': { name: 'Lightning Deal', description: 'Quick savings opportunity', category: 'Flash' },
    'QUICK40': { name: 'Quick Save', description: 'Fast discount application', category: 'Flash' },
    'RUSH35': { name: 'Rush Hour', description: 'Time-sensitive offer', category: 'Flash' },
    
    // High Value Discounts
    'MEGA60': { name: 'Mega Discount', description: 'Massive savings event', category: 'High Value' },
    'SUPER65': { name: 'Super Saver', description: 'Super-sized discount', category: 'High Value' },
    'ULTRA70': { name: 'Ultra Discount', description: 'Ultra-high savings', category: 'High Value' },
    'MAXIMUM75': { name: 'Maximum Save', description: 'Maximum discount possible', category: 'High Value' },
    'ULTIMATE80': { name: 'Ultimate Deal', description: 'Ultimate savings experience', category: 'High Value' },
    'SUPREME85': { name: 'Supreme Discount', description: 'Supreme level savings', category: 'High Value' },
    'EXTREME90': { name: 'Extreme Save', description: 'Extreme discount event', category: 'High Value' },
    
    // Special Event Coupons
    'LAUNCH50': { name: 'Product Launch', description: 'New product launch offer', category: 'Event' },
    'ANNIVERSARY60': { name: 'Anniversary Sale', description: 'Celebrating our anniversary', category: 'Event' },
    'BIRTHDAY70': { name: 'Birthday Special', description: 'Birthday celebration discount', category: 'Event' },
    'MILESTONE80': { name: 'Milestone Achievement', description: 'Special milestone offer', category: 'Event' },
    
    // Developer & Creator Codes
    'ANKITA': { name: 'Creator Special', description: 'Developer exclusive code', category: 'Creator' },
    'DEVELOPER95': { name: 'Developer Discount', description: 'For fellow developers', category: 'Creator' },
    'CREATOR90': { name: 'Content Creator', description: 'Creator community offer', category: 'Creator' },
    'CODER85': { name: 'Coder Special', description: 'Programming community discount', category: 'Creator' },
    
    // Category Specific
    'MACBOOK30': { name: 'MacBook Special', description: 'Exclusive MacBook discount', category: 'Product' },
    'IPHONE25': { name: 'iPhone Deal', description: 'iPhone-specific savings', category: 'Product' },
    'IPAD35': { name: 'iPad Offer', description: 'iPad exclusive discount', category: 'Product' },
    'WATCH40': { name: 'Apple Watch Deal', description: 'Watch-specific offer', category: 'Product' },
    
    // Loyalty & Referral
    'LOYAL30': { name: 'Loyalty Reward', description: 'Thank you for your loyalty', category: 'Loyalty' },
    'REFERRAL25': { name: 'Referral Bonus', description: 'Friend referral discount', category: 'Referral' },
    'FRIEND20': { name: 'Friend Discount', description: 'Shared with friends', category: 'Referral' },
    'FAMILY35': { name: 'Family Plan', description: 'Family member discount', category: 'Family' },
    
    // Bundle & Bulk Discounts
    'BUNDLE40': { name: 'Bundle Deal', description: 'Multiple item discount', category: 'Bundle' },
    'BULK45': { name: 'Bulk Purchase', description: 'Large quantity savings', category: 'Bundle' },
    'COMBO50': { name: 'Combo Offer', description: 'Product combination deal', category: 'Bundle' },
    'PACKAGE55': { name: 'Package Deal', description: 'Complete package discount', category: 'Bundle' }
  };
  
  const upperCode = code.toUpperCase();
  return couponInfo[upperCode] || { name: 'Unknown Coupon', description: 'Invalid coupon code', category: 'Unknown' };
};

// Get all available coupons for display
export const getAllCoupons = () => {
  return [
    // Welcome & New User (10-20%)
    { code: 'WELCOME10', discount: 10, category: 'Welcome', description: 'New user welcome offer' },
    { code: 'NEWUSER15', discount: 15, category: 'Welcome', description: 'First-time buyer discount' },
    { code: 'FIRSTBUY20', discount: 20, category: 'Welcome', description: 'Your first order discount' },
    
    // General Discounts (20-30%)
    { code: 'SAVE20', discount: 20, category: 'General', description: 'Save on all products' },
    { code: 'DISCOUNT25', discount: 25, category: 'General', description: 'Site-wide discount' },
    { code: 'DEAL30', discount: 30, category: 'General', description: 'Limited time offer' },
    
    // Student & Education (25-35%)
    { code: 'STUDENT25', discount: 25, category: 'Education', description: 'Student discount' },
    { code: 'EDUCATION30', discount: 30, category: 'Education', description: 'Educational pricing' },
    { code: 'CAMPUS35', discount: 35, category: 'Education', description: 'University exclusive' },
    
    // Seasonal & Holiday (20-60%)
    { code: 'HOLIDAY30', discount: 30, category: 'Seasonal', description: 'Holiday special' },
    { code: 'NEWYEAR50', discount: 50, category: 'Holiday', description: 'New Year celebration' },
    { code: 'BLACKFRIDAY60', discount: 60, category: 'Holiday', description: 'Black Friday mega sale' },
    
    // VIP & Premium (40-55%)
    { code: 'VIP40', discount: 40, category: 'VIP', description: 'VIP member exclusive' },
    { code: 'PREMIUM45', discount: 45, category: 'VIP', description: 'Premium customer offer' },
    { code: 'PLATINUM55', discount: 55, category: 'VIP', description: 'Platinum tier discount' },
    
    // Flash Sales (35-50%)
    { code: 'FLASH50', discount: 50, category: 'Flash', description: 'Flash sale special' },
    { code: 'LIGHTNING45', discount: 45, category: 'Flash', description: 'Lightning deal' },
    
    // High Value (60-90%)
    { code: 'MEGA60', discount: 60, category: 'High Value', description: 'Mega discount event' },
    { code: 'ULTRA70', discount: 70, category: 'High Value', description: 'Ultra savings' },
    { code: 'ULTIMATE80', discount: 80, category: 'High Value', description: 'Ultimate deal' },
    { code: 'EXTREME90', discount: 90, category: 'High Value', description: 'Extreme savings' },
    
    // Creator Codes (85-99%)
    { code: 'ANKITA', discount: 99, category: 'Creator', description: 'Developer special code' },
    { code: 'DEVELOPER95', discount: 95, category: 'Creator', description: 'Developer community' },
    { code: 'CREATOR90', discount: 90, category: 'Creator', description: 'Content creator offer' }
  ];
};