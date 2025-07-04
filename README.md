# 🍎 Apple Store Clone

A modern, responsive Apple Store clone built with React, TypeScript, and Tailwind CSS. This project showcases advanced web development techniques with beautiful animations, dark mode support, and a complete e-commerce experience.

![Apple Store Clone](https://images.unsplash.com/photo-1603791239531-1dda55e194a6?auto=format&fit=crop&w=1200&q=80)

## ✨ Features

### 🎨 **Design & UI**
- **Apple-inspired Design**: Pixel-perfect recreation of Apple's design language
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode Support**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Modern Typography**: Clean, readable fonts with proper hierarchy

### 🛍️ **E-commerce Functionality**
- **Product Catalog**: Browse Mac, iPhone, iPad, and Apple Watch
- **Shopping Cart**: Add, remove, and update product quantities
- **Advanced Checkout**: Multi-step checkout with address, OTP verification, and payment
- **Coupon System**: Multiple discount codes with varying percentages
- **Real-time Updates**: Live cart count and total calculations

### 🔧 **Technical Features**
- **TypeScript**: Full type safety and better developer experience
- **Performance Optimized**: Lazy loading, memoization, and efficient re-renders
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Modern React**: Hooks, Context API, and functional components

### 📱 **Navigation & UX**
- **Advanced Navbar**: Dropdown menus, search functionality, and user account
- **Smooth Scrolling**: Progress indicator and scroll-based animations
- **Mobile Menu**: Collapsible navigation with smooth transitions
- **Search System**: Real-time search with suggestions
- **User Account**: Login/signup interface (UI only)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/apple-store-clone.git
   cd apple-store-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
npm run preview
```

## 🎫 Coupon System

### Available Discount Codes

| Coupon Code | Discount | Description | Usage |
|-------------|----------|-------------|-------|
| `WELCOME10` | 10% | Welcome discount for new users | First-time buyers |
| `SAVE20` | 20% | General savings code | All products |
| `STUDENT25` | 25% | Student discount | Educational purchases |
| `HOLIDAY30` | 30% | Holiday special offer | Seasonal promotion |
| `VIP40` | 40% | VIP member exclusive | Premium customers |
| `FLASH50` | 50% | Flash sale discount | Limited time offer |
| `MEGA60` | 60% | Mega sale event | Special occasions |
| `ULTIMATE70` | 70% | Ultimate discount | Rare promotion |
| `SUPER80` | 80% | Super saver deal | Clearance items |
| `MAXIMUM90` | 90% | Maximum discount | Special events |
| `ANKITA` | 99% | Developer special | Creator's code |

### How to Use Coupons

1. **Add products to cart**
2. **Proceed to checkout**
3. **Complete address and OTP verification**
4. **Enter coupon code in the payment section**
5. **Click "Apply" to see discount**
6. **Complete payment with discounted total**

### Coupon Features
- **Real-time validation**: Instant feedback on coupon validity
- **Automatic calculation**: Discount applied immediately to total
- **Error handling**: Clear messages for invalid codes
- **Visual feedback**: Green success indicators for valid coupons
- **Percentage display**: Shows exact discount percentage

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Cart/            # Shopping cart components
│   ├── Checkout/        # Checkout flow components
│   ├── Hero.tsx         # Landing page hero section
│   ├── Navbar.tsx       # Navigation component
│   ├── ProductCard.tsx  # Product display card
│   └── ...
├── context/             # React Context providers
│   ├── CartContext.tsx  # Shopping cart state
│   └── ThemeContext.tsx # Dark/light theme
├── data/                # Static data and mock APIs
│   └── products.ts      # Product catalog
├── pages/               # Page components
│   ├── HomePage.tsx     # Landing page
│   ├── StorePage.tsx    # Product listing
│   ├── MacPage.tsx      # Mac products
│   ├── iPadPage.tsx     # iPad products
│   ├── iPhonePage.tsx   # iPhone products
│   └── WatchPage.tsx    # Apple Watch products
├── types/               # TypeScript type definitions
│   ├── index.ts         # Main types
│   └── checkout.ts      # Checkout related types
├── utils/               # Utility functions
│   └── validation.ts    # Form and coupon validation
└── App.tsx              # Main application component
```

## 🛠️ Technologies Used

### Frontend Framework
- **React 18**: Latest React with concurrent features
- **TypeScript**: Type-safe JavaScript development
- **Vite**: Fast build tool and development server

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Beautiful icon library

### Routing & State
- **React Router DOM**: Client-side routing
- **React Context**: Global state management
- **Local Storage**: Persistent theme preferences

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 🎯 Key Components

### Shopping Cart System
```typescript
// Add to cart functionality
const { addToCart, removeFromCart, updateQuantity, total } = useCart();

// Usage
addToCart(product);
updateQuantity(productId, newQuantity);
removeFromCart(productId);
```

### Theme System
```typescript
// Theme toggle
const { theme, toggleTheme } = useTheme();

// Usage
<button onClick={toggleTheme}>
  {theme === 'light' ? <Moon /> : <Sun />}
</button>
```

### Coupon Validation
```typescript
// Validate coupon codes
const isValid = validateCoupon(code);
const discount = calculateDiscount(total, couponCode);
```

## 🎨 Design Principles

### Apple Design Language
- **Minimalism**: Clean, uncluttered interfaces
- **Typography**: San Francisco font family inspiration
- **Spacing**: Consistent 8px grid system
- **Colors**: Neutral grays with accent blues
- **Shadows**: Subtle depth and elevation

### Responsive Design
- **Mobile First**: Designed for mobile, enhanced for desktop
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Layouts**: CSS Grid and Flexbox
- **Touch Friendly**: Adequate tap targets and spacing

### Animation Guidelines
- **Subtle Movements**: Gentle hover states and transitions
- **Performance**: Hardware-accelerated transforms
- **Purposeful**: Animations enhance UX, not distract
- **Accessibility**: Respects reduced motion preferences

## 🔧 Customization

### Adding New Products
```typescript
// In src/data/products.ts
export const products = [
  {
    id: 10,
    name: 'New Product',
    description: 'Product description',
    image: 'https://images.unsplash.com/...',
    price: 'From $999',
    priceAmount: 999,
    category: 'mac' // or 'iphone', 'ipad'
  }
];
```

### Adding New Coupons
```typescript
// In src/utils/validation.ts
export const validateCoupon = (code: string): boolean => {
  const validCoupons = {
    'WELCOME10': 10,
    'SAVE20': 20,
    'YOURNEW25': 25, // Add your new coupon here
  };
  return code.toUpperCase() in validCoupons;
};
```

### Customizing Theme Colors
```javascript
// In tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',    // Apple blue
        secondary: '#5856D6',  // Apple purple
        success: '#34C759',    // Apple green
        warning: '#FF9500',    // Apple orange
        danger: '#FF3B30',     // Apple red
      }
    }
  }
}
```

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 90+

## 🚀 Performance

### Optimization Techniques
- **Code Splitting**: Lazy loading of route components
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Webpack bundle analyzer
- **Memoization**: React.memo and useMemo for expensive operations
- **Debouncing**: Search input and scroll handlers

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🧪 Testing

### Test Coverage
- **Unit Tests**: Component testing with Jest
- **Integration Tests**: User flow testing
- **E2E Tests**: Cypress for critical paths
- **Accessibility Tests**: axe-core integration

### Running Tests
```bash
npm run test          # Unit tests
npm run test:e2e      # End-to-end tests
npm run test:coverage # Coverage report
```

## 🔒 Security

### Security Measures
- **Input Validation**: All user inputs sanitized
- **XSS Protection**: Content Security Policy headers
- **HTTPS Only**: Secure connections enforced
- **Dependency Scanning**: Regular security audits

## 📈 Analytics & Monitoring

### Tracking Implementation
- **Google Analytics**: User behavior tracking
- **Performance Monitoring**: Core Web Vitals
- **Error Tracking**: Sentry integration
- **A/B Testing**: Feature flag system

## 🤝 Contributing

### Development Workflow
1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Code Standards
- **ESLint**: Follow configured rules
- **Prettier**: Code formatting
- **TypeScript**: Strict type checking
- **Conventional Commits**: Semantic commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Credits

### Development Team
- **Lead Developer**: Ankita Agarwal
- **UI/UX Design**: Apple Design Team (inspiration)
- **Icons**: Lucide React
- **Images**: Unsplash

### Acknowledgments
- Apple Inc. for design inspiration
- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations

## 📞 Support

### Getting Help
- **Documentation**: Check this README first
- **Issues**: GitHub Issues for bug reports
- **Discussions**: GitHub Discussions for questions
- **Email**: support@example.com

### FAQ

**Q: How do I add new products?**
A: Edit the `src/data/products.ts` file and add your product object.

**Q: Can I customize the theme colors?**
A: Yes, modify the `tailwind.config.js` file to change colors.

**Q: How do I add new coupon codes?**
A: Update the `validateCoupon` function in `src/utils/validation.ts`.

**Q: Is this production ready?**
A: This is a demo project. For production use, add backend integration, payment processing, and security measures.

---

**Built with ❤️ by Ankita Agarwal**

*This project is a demonstration of modern web development techniques and is not affiliated with Apple Inc.*