export const SEED_CUSTOMERS = [
  { customerId: 'C1001', name: 'Rahul Sharma', email: 'rahul@email.com', phone: '+91 98765 43210', city: 'Mumbai', segment: 'Premium', totalOrders: 28, totalSpent: 125600, joined: '12 Jan 2023', status: 'Active', lastActive: '28 May 2024' },
  { customerId: 'C1002', name: 'Priya Patel', email: 'priya@email.com', phone: '+91 87654 32109', city: 'Delhi', segment: 'Premium', totalOrders: 32, totalSpent: 189400, joined: '05 Mar 2022', status: 'Active', lastActive: '27 May 2024' },
  { customerId: 'C1003', name: 'Amit Verma', email: 'amit@email.com', phone: '+91 76543 21098', city: 'Bengaluru', segment: 'Loyal', totalOrders: 19, totalSpent: 67800, joined: '20 Jul 2023', status: 'Active', lastActive: '25 May 2024' },
  { customerId: 'C1004', name: 'Sneha Iyer', email: 'sneha@email.com', phone: '+91 65432 10987', city: 'Chennai', segment: 'Loyal', totalOrders: 15, totalSpent: 45200, joined: '14 Sep 2023', status: 'Active', lastActive: '22 May 2024' },
  { customerId: 'C1005', name: 'Karan Mehta', email: 'karan@email.com', phone: '+91 54321 09876', city: 'Hyderabad', segment: 'Premium', totalOrders: 41, totalSpent: 234500, joined: '01 Jan 2022', status: 'Active', lastActive: '20 May 2024' },
  { customerId: 'C1006', name: 'Divya Nair', email: 'divya@email.com', phone: '+91 43210 98765', city: 'Kolkata', segment: 'Price Sensitive', totalOrders: 8, totalSpent: 12400, joined: '18 Nov 2023', status: 'Active', lastActive: '18 May 2024' },
  { customerId: 'C1007', name: 'Vikram Singh', email: 'vikram@email.com', phone: '+91 32109 87654', city: 'Pune', segment: 'New', totalOrders: 2, totalSpent: 4800, joined: '10 May 2024', status: 'Active', lastActive: '15 May 2024' },
  { customerId: 'C1008', name: 'Neha Gupta', email: 'neha@email.com', phone: '+91 21098 76543', city: 'Ahmedabad', segment: 'Inactive', totalOrders: 3, totalSpent: 7200, joined: '08 Aug 2023', status: 'Blocked', lastActive: '01 Mar 2024' },
  { customerId: 'C1009', name: 'Rohan Joshi', email: 'rohan@email.com', phone: '+91 10987 65432', city: 'Jaipur', segment: 'Price Sensitive', totalOrders: 11, totalSpent: 18900, joined: '22 Apr 2023', status: 'Active', lastActive: '10 May 2024' },
  { customerId: 'C1010', name: 'Ananya Reddy', email: 'ananya@email.com', phone: '+91 09876 54321', city: 'Bengaluru', segment: 'Loyal', totalOrders: 22, totalSpent: 89300, joined: '15 Jun 2022', status: 'Active', lastActive: '26 May 2024' },
]

export const SEED_ORDERS = [
  { orderId: 'ORD-4821', customer: 'Rahul Sharma', items: 2, total: 112400, date: '28 May 2024', status: 'Processing', payment: 'UPI' },
  { orderId: 'ORD-4820', customer: 'Priya Patel', items: 1, total: 134900, date: '28 May 2024', status: 'Delivered', payment: 'Credit Card' },
  { orderId: 'ORD-4819', customer: 'Amit Verma', items: 3, total: 8900, date: '27 May 2024', status: 'Delivered', payment: 'UPI' },
  { orderId: 'ORD-4818', customer: 'Sneha Iyer', items: 1, total: 32500, date: '27 May 2024', status: 'Shipped', payment: 'Debit Card' },
  { orderId: 'ORD-4817', customer: 'Karan Mehta', items: 4, total: 156800, date: '26 May 2024', status: 'Delivered', payment: 'Credit Card' },
  { orderId: 'ORD-4816', customer: 'Divya Nair', items: 1, total: 24900, date: '26 May 2024', status: 'Cancelled', payment: 'UPI' },
  { orderId: 'ORD-4815', customer: 'Vikram Singh', items: 2, total: 4800, date: '25 May 2024', status: 'Pending', payment: 'COD' },
  { orderId: 'ORD-4814', customer: 'Neha Gupta', items: 1, total: 12995, date: '25 May 2024', status: 'Returned', payment: 'Credit Card' },
  { orderId: 'ORD-4813', customer: 'Rohan Joshi', items: 2, total: 3490, date: '24 May 2024', status: 'Refunded', payment: 'UPI' },
  { orderId: 'ORD-4812', customer: 'Ananya Reddy', items: 3, total: 89400, date: '24 May 2024', status: 'Delivered', payment: 'Credit Card' },
]

export const SEED_REFUNDS = [
  { orderId: 'ORD-4814', customer: 'Neha Gupta', amount: 12995, reason: 'Product not as described', date: '26 May 2024', status: 'Pending' },
  { orderId: 'ORD-4813', customer: 'Rohan Joshi', amount: 3490, reason: 'Wrong size delivered', date: '25 May 2024', status: 'Approved' },
  { orderId: 'ORD-4790', customer: 'Divya Nair', amount: 2450, reason: 'Defective product', date: '20 May 2024', status: 'Refunded' },
]

export const SEED_FEEDBACK = [
  { type: 'Review', customer: 'Rahul Sharma', product: 'MacBook Air M3', content: 'Excellent product quality and fast delivery!', rating: 5, date: '28 May 2024', status: 'Published' },
  { type: 'Review', customer: 'Priya Patel', product: 'iPhone 15 Pro', content: 'Amazing camera quality, worth every penny.', rating: 5, date: '27 May 2024', status: 'Published' },
  { type: 'Complaint', customer: 'Divya Nair', product: 'AirPods Pro', content: 'Late delivery by 2 days, expected better service.', rating: 2, date: '26 May 2024', status: 'In Progress' },
  { type: 'Suggestion', customer: 'Amit Verma', product: 'N/A', content: 'Add more filter options in the electronics category.', rating: 4, date: '25 May 2024', status: 'Reviewed' },
  { type: 'Feedback', customer: 'Sneha Iyer', product: 'Smart Watch Series 5', content: 'Good value for money, battery could be better.', rating: 4, date: '24 May 2024', status: 'Published' },
  { type: 'Ticket', customer: 'Karan Mehta', product: 'Samsung TV', content: 'Screen flickering issue reported after 2 weeks of use.', rating: 1, date: '23 May 2024', status: 'Open' },
  { type: 'Ticket', customer: 'Rohan Joshi', product: 'Nike Shoes', content: 'Wrong size delivered, requesting replacement.', rating: 2, date: '22 May 2024', status: 'Resolved' },
]

export const SEED_NOTIFICATIONS = [
  { type: 'Email', title: 'Summer Sale Reminder', audience: 'All Customers', scheduled: '29 May 2024', status: 'Sent', opened: '68%' },
  { type: 'Push', title: 'Flash Deal: 30% Off Electronics', audience: 'Premium Customers', scheduled: '30 May 2024', status: 'Scheduled', opened: '—' },
  { type: 'SMS', title: 'Order Confirmation #ORD-4821', audience: 'Rahul Sharma', scheduled: '28 May 2024', status: 'Sent', opened: '95%' },
  { type: 'Email', title: 'New Arrivals This Week', audience: 'Loyal Customers', scheduled: '27 May 2024', status: 'Sent', opened: '54%' },
  { type: 'Push', title: 'Cart Abandonment Reminder', audience: 'Price Sensitive', scheduled: '26 May 2024', status: 'Sent', opened: '42%' },
]

export const SEED_CAMPAIGNS = [
  { campaignId: 'CMP-001', name: 'Summer Sale Campaign', segment: 'Premium Customers', channel: 'Email, WhatsApp', type: 'Seasonal', startDate: '01 May 2024', endDate: '31 May 2024', status: 'Active', performance: 78, budget: 150000, spent: 112000 },
  { campaignId: 'CMP-002', name: 'Electronics Festival', segment: 'Loyal Customers', channel: 'Email, Push Notification', type: 'Festival', startDate: '05 May 2024', endDate: '20 May 2024', status: 'Active', performance: 65, budget: 200000, spent: 165000 },
  { campaignId: 'CMP-003', name: 'New User Welcome Offer', segment: 'New Customers', channel: 'Email', type: 'Personalized', startDate: '10 May 2024', endDate: '30 May 2024', status: 'Completed', performance: 72, budget: 80000, spent: 72000 },
  { campaignId: 'CMP-004', name: 'Clearance Sale Drive', segment: 'Price Sensitive', channel: 'WhatsApp, Email', type: 'Seasonal', startDate: '02 May 2024', endDate: '15 May 2024', status: 'Completed', performance: 55, budget: 120000, spent: 98000 },
  { campaignId: 'CMP-005', name: 'Loyalty Points Booster', segment: 'Loyal Customers', channel: 'Push Notification', type: 'Loyalty', startDate: '12 May 2024', endDate: '28 May 2024', status: 'Paused', performance: 86, budget: 100000, spent: 67000 },
  { campaignId: 'CMP-006', name: 'Monsoon Gear Launch', segment: 'Price Sensitive', channel: 'Email, WhatsApp', type: 'Seasonal', startDate: '18 May 2024', endDate: '10 Jun 2024', status: 'Scheduled', performance: 0, budget: 90000, spent: 0 },
]

export const SEED_TEAM_USERS = [
  { userId: 'U001', name: 'Super Admin', email: 'superadmin@shopsmart.com', role: 'Super Admin', status: 'Active', lastLogin: '28 May 2024, 3:45 PM' },
  { userId: 'U002', name: 'Rajesh Kumar', email: 'rajesh@shopsmart.com', role: 'Admin', status: 'Active', lastLogin: '28 May 2024, 2:30 PM' },
  { userId: 'U003', name: 'Meera Singh', email: 'meera@shopsmart.com', role: 'Marketing Manager', status: 'Active', lastLogin: '28 May 2024, 1:15 PM' },
  { userId: 'U004', name: 'Arjun Nair', email: 'arjun@shopsmart.com', role: 'Support Agent', status: 'Active', lastLogin: '27 May 2024, 5:00 PM' },
  { userId: 'U005', name: 'Kavitha Reddy', email: 'kavitha@shopsmart.com', role: 'Marketing Manager', status: 'Active', lastLogin: '27 May 2024, 4:30 PM' },
  { userId: 'U006', name: 'Suresh Menon', email: 'suresh@shopsmart.com', role: 'Viewer', status: 'Inactive', lastLogin: '20 May 2024, 10:00 AM' },
]

export const SEED_ACTIVITY_LOGS = [
  { user: 'Super Admin', action: 'Logged in', timestamp: '28 May 2024, 3:45 PM', ip: '192.168.1.1' },
  { user: 'Rajesh Kumar', action: 'Updated product P1001', timestamp: '28 May 2024, 2:30 PM', ip: '192.168.1.2' },
  { user: 'Meera Singh', action: 'Created campaign "Monsoon Gear"', timestamp: '28 May 2024, 1:15 PM', ip: '192.168.1.3' },
  { user: 'Arjun Nair', action: 'Resolved ticket #TKT-007', timestamp: '27 May 2024, 5:00 PM', ip: '192.168.1.4' },
  { user: 'Super Admin', action: 'Changed role of Suresh to Viewer', timestamp: '27 May 2024, 3:00 PM', ip: '192.168.1.1' },
  { user: 'Kavitha Reddy', action: 'Exported sales report', timestamp: '27 May 2024, 2:15 PM', ip: '192.168.1.5' },
]

export const SEED_ML_MODELS = [
  { name: 'K-Means Clustering', status: 'Active', lastTrained: '30 May 2024', accuracy: 92.45, clusters: 5, type: 'Clustering', description: 'Partition-based clustering for customer segmentation.' },
  { name: 'DBSCAN', status: 'Available', lastTrained: '—', accuracy: 0, clusters: 0, type: 'Clustering', description: 'Density-based clustering for irregular shapes.' },
  { name: 'Hierarchical Clustering', status: 'Available', lastTrained: '—', accuracy: 0, clusters: 0, type: 'Clustering', description: 'Tree-based clustering with dendrograms.' },
  { name: 'Random Forest', status: 'Available', lastTrained: '—', accuracy: 0, clusters: 0, type: 'Classification', description: 'Ensemble method for purchase prediction.' },
]

export const SEED_PREDICTION_LOGS = [
  { model: 'K-Means', input: 'Customer C1001 behaviour data', prediction: 'Premium Segment', confidence: '94.2%', timestamp: '28 May 2024, 3:00 PM' },
  { model: 'K-Means', input: 'Customer C1002 behaviour data', prediction: 'Premium Segment', confidence: '91.8%', timestamp: '28 May 2024, 3:00 PM' },
  { model: 'K-Means', input: 'Customer C1003 behaviour data', prediction: 'Loyal Segment', confidence: '87.5%', timestamp: '28 May 2024, 3:00 PM' },
  { model: 'K-Means', input: 'Customer C1004 behaviour data', prediction: 'New Segment', confidence: '82.1%', timestamp: '28 May 2024, 3:00 PM' },
  { model: 'K-Means', input: 'Customer C1005 behaviour data', prediction: 'Inactive Segment', confidence: '78.9%', timestamp: '28 May 2024, 3:00 PM' },
]

export const USER_ROLES = [
  { name: 'Super Admin', users: 2, permissions: 'Full Access', description: 'Complete system access' },
  { name: 'Admin', users: 5, permissions: 'Manage All', description: 'Access to all modules' },
  { name: 'Marketing Manager', users: 8, permissions: 'Marketing Only', description: 'Campaign and customer management' },
  { name: 'Support Agent', users: 12, permissions: 'Feedback & Orders', description: 'Handle complaints and tickets' },
  { name: 'Viewer', users: 15, permissions: 'Read Only', description: 'View-only dashboard access' },
]

export const BEHAVIOUR_ANALYSIS = {
  stats: [
    { label: 'Total Purchases', value: '48,210', change: '+6.4%' },
    { label: 'Average Spending', value: '₹4,215', change: '+3.1%' },
    { label: 'Purchase Frequency', value: '3.8 / month', change: '+0.2' },
    { label: 'Average Order Value', value: '₹6,750', change: '+5.0%' },
    { label: 'Wishlist Activity', value: '8,942', change: '+12.3%' },
    { label: 'Cart Activity', value: '15,630', change: '+9.8%' },
    { label: 'Search Activity', value: '27,450', change: '+18.5%' },
  ],
  purchaseFrequency: [
    { name: '0-1', value: 18 },
    { name: '2-3', value: 27 },
    { name: '4-5', value: 24 },
    { name: '6-10', value: 19 },
    { name: '10+', value: 12 },
  ],
  spendingDistribution: [
    { name: '< ₹5k', value: 28 },
    { name: '₹5k-15k', value: 31 },
    { name: '₹15k-35k', value: 22 },
    { name: '₹35k-70k', value: 13 },
    { name: '70k+', value: 6 },
  ],
  favouriteCategories: [
    { name: 'Electronics', value: 34 },
    { name: 'Fashion', value: 24 },
    { name: 'Home', value: 16 },
    { name: 'Beauty', value: 14 },
    { name: 'Grocery', value: 12 },
  ],
  customerActivity: [
    { name: 'May 01', views: 4200, carts: 1200, purchases: 480 },
    { name: 'May 05', views: 5100, carts: 1450, purchases: 560 },
    { name: 'May 10', views: 4600, carts: 1380, purchases: 520 },
    { name: 'May 15', views: 6800, carts: 2100, purchases: 790 },
    { name: 'May 20', views: 5900, carts: 1780, purchases: 640 },
    { name: 'May 25', views: 7300, carts: 2400, purchases: 880 },
    { name: 'May 31', views: 8100, carts: 2650, purchases: 960 },
  ],
  repeatPurchaseAnalysis: [
    { name: '1-time', value: 35 },
    { name: '2-3 times', value: 28 },
    { name: '4-6 times', value: 20 },
    { name: '7-10 times', value: 10 },
    { name: '10+ times', value: 7 },
  ],
  insights: [
    'Electronics is the top-performing category with 34% of all purchases.',
    'Customers who browse 3+ categories have 2.4x higher conversion.',
    'Mobile users account for 68% of all browsing activity.',
    'Weekend purchases are 40% higher than weekday average.',
    'Cart abandonment rate decreased by 8% this month.',
  ],
}

export const SEGMENTATION = {
  segments: [
    { name: 'Premium Customers', customers: 4359, percentage: 35, avgSpending: '₹45,000', frequency: 'High', type: 'High Value', color: '#7c3aed' },
    { name: 'Loyal Customers', customers: 3114, percentage: 25, avgSpending: '₹25,000', frequency: 'High', type: 'Repeat Buyer', color: '#2563eb' },
    { name: 'Price Sensitive', customers: 2491, percentage: 20, avgSpending: '₹8,500', frequency: 'Medium', type: 'Discount Driven', color: '#06b6d4' },
    { name: 'Inactive Customers', customers: 1245, percentage: 10, avgSpending: '₹2,500', frequency: 'Low', type: 'Inactive', color: '#94a3b8' },
    { name: 'New Customers', customers: 1247, percentage: 10, avgSpending: '₹3,000', frequency: 'Low', type: 'New', color: '#10b981' },
  ],
}

export const AI_RECOMMENDATIONS = {
  stats: [
    { label: 'Total Recommendations', value: '45,230' },
    { label: 'Accepted Recommendations', value: '18,765' },
    { label: 'Conversion Rate', value: '41.52%' },
    { label: 'Average Recommendation Value', value: '₹6,750' },
  ],
  product: [
    { segment: 'Premium Customer', item: 'MacBook Air M3', reason: 'High electronics interest', type: 'Product', status: 'Active' },
    { segment: 'Price Sensitive', item: 'Budget Smartphone', reason: 'Price preference', type: 'Product', status: 'Active' },
    { segment: 'Loyal Customer', item: 'Smartwatch Series 5', reason: 'Repeat accessory buyer', type: 'Product', status: 'Active' },
    { segment: 'New Customer', item: 'Starter Gift Pack', reason: 'First-purchase incentive', type: 'Product', status: 'Active' },
  ],
  offer: [
    { segment: 'Loyal Customer', item: 'Free Shipping Weekend', reason: 'High order frequency', type: 'Offer', status: 'Active' },
    { segment: 'Premium Customer', item: 'Early Access Sale', reason: 'High value engagement', type: 'Offer', status: 'Active' },
  ],
  crossSelling: [
    { primary: 'MacBook Air M3', cross: 'USB-C Hub', affinity: '89%', reason: 'Often bought together' },
    { primary: 'iPhone 15 Pro', cross: 'AirPods Pro', affinity: '76%', reason: 'Ecosystem pairing' },
    { primary: 'Smart Watch', cross: 'Wireless Charger', affinity: '68%', reason: 'Complementary product' },
  ],
  upSelling: [
    { product: 'iPhone 15', upsell: 'iPhone 15 Pro', priceDiff: '₹40,000', conversion: '23%' },
    { product: 'AirPods', upsell: 'AirPods Pro', priceDiff: '₹10,000', conversion: '31%' },
    { product: 'Galaxy Watch 4', upsell: 'Galaxy Watch 5', priceDiff: '₹8,000', conversion: '18%' },
  ],
  frequentlyBoughtTogether: [
    { items: ['MacBook Air M3', 'USB-C Hub', 'Laptop Stand'], frequency: 892 },
    { items: ['iPhone 15 Pro', 'AirPods Pro', 'MagSafe Charger'], frequency: 756 },
    { items: ['Smart Watch', 'Watch Band', 'Screen Protector'], frequency: 534 },
  ],
  history: [
    { date: '28 May 2024', recommendations: 2340, accepted: 956, rate: '40.9%' },
    { date: '27 May 2024', recommendations: 2180, accepted: 912, rate: '41.8%' },
    { date: '26 May 2024', recommendations: 2450, accepted: 1034, rate: '42.2%' },
    { date: '25 May 2024', recommendations: 1980, accepted: 792, rate: '40.0%' },
    { date: '24 May 2024', recommendations: 2210, accepted: 928, rate: '42.0%' },
  ],
}

export const ADMIN_REPORTS_BASE = {
  customerReport: { totalCustomers: 12456, newCustomers: 1247, activeCustomers: 10854, churnedCustomers: 355 },
  salesReport: { totalSales: 34567800, monthlyGrowth: 12.4, averageOrderValue: 6750, totalOrders: 48210 },
  productReport: { totalProducts: 3480, activeProducts: 3200, lowStock: 145, outOfStock: 32 },
  behaviourReport: { pageViews: 275400, cartAdditions: 15630, wishlists: 8942, searches: 27450 },
  marketingReport: { campaignsRun: 23, emailsSent: 45600, openRate: 68.2, clickRate: 12.4 },
  recommendationReport: { totalGenerated: 45230, accepted: 18765, conversionRate: 41.52 },
  revenueHistory: [
    { month: 'Jan', revenue: 2890000 },
    { month: 'Feb', revenue: 3120000 },
    { month: 'Mar', revenue: 2780000 },
    { month: 'Apr', revenue: 3450000 },
    { month: 'May', revenue: 3890000 },
  ],
  campaignPerformance: [
    { name: 'Summer Sale', revenue: 312000, conversion: 78 },
    { name: 'Electronics Fest', revenue: 265000, conversion: 65 },
    { name: 'Loyalty Week', revenue: 198000, conversion: 86 },
    { name: 'New User Offer', revenue: 142000, conversion: 72 },
    { name: 'Clearance Sale', revenue: 96000, conversion: 55 },
  ],
  customerGrowth: [
    { month: 'Jan', customers: 9800 },
    { month: 'Feb', customers: 10200 },
    { month: 'Mar', customers: 10800 },
    { month: 'Apr', customers: 11500 },
    { month: 'May', customers: 12456 },
  ],
}
