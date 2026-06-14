# Test Suite Documentation

## Overview

This test suite provides comprehensive unit and integration testing for the Moroccan Food Restaurant application. The tests cover all major features including authentication, shopping cart, checkout, order management, admin dashboard, and delivery operations.

## Test Files Structure

### Unit Tests

#### `src/App.utils.test.js`
Tests utility functions used throughout the application:
- `slugifyDishName()` - Converts dish names to URL-safe slugs
- `getNumericPrice()` - Extracts numeric values from price strings
- `isAdminUser()` - Identifies admin users
- `getItemBySlug()` - Retrieves dishes by slug identifier
- `getCartDetails()` - Calculates cart totals and item details
- `getDishMeta()` - Returns metadata for dishes
- `getOrderStatusFromTime()` - Determines order status based on elapsed time
- `normalizeDishes()` - Normalizes dish data
- `normalizeImageSrc()` - Processes image paths

#### `src/components/HeaderBar.test.jsx`
Tests header component functionality:
- Header rendering and navigation
- Cart button display and functionality
- User authentication state display
- Logout functionality
- Navigation menu items

#### `src/components/Menu.test.jsx`
Tests menu display and filtering:
- Display all menu items with prices and descriptions
- Filter by category, price range, and dietary options
- Sorting by price, popularity, and rating
- Search functionality (by name and description)
- Favorites management

#### `src/components/Cart.test.jsx`
Tests shopping cart operations:
- Add/remove items
- Increase/decrease quantities
- Cart total calculations
- Cart persistence in localStorage
- Cart validation and cleanup

#### `src/hooks/useAuth.test.js`
Tests authentication hook:
- User login/registration validation
- Email format validation
- Password requirements
- Admin user identification
- Session management and persistence
- User profile management

#### `src/hooks/useCart.test.js`
Tests cart management hook:
- Add/remove items operations
- Quantity management
- Cart calculations and totals
- Duplicate item handling
- Cart validation and limits
- Checkout readiness checks

#### `src/hooks/useFavorites.test.js`
Tests favorites functionality:
- Add/remove from favorites
- Toggle favorite status
- Favorites persistence
- Favorites validation
- Favorites sorting and filtering

### Integration Tests

#### `src/App.integration.test.jsx`
Tests complete user workflows:
- Homepage navigation and content
- Menu browsing flow
- Cart management and checkout
- Authentication flow (login/register)
- User profile and orders
- Page navigation
- Footer and legal pages

#### `src/pages/admin/Admin.integration.test.jsx`
Tests admin dashboard features:
- Admin authentication and access control
- Dish management (add, edit, delete)
- Order management and updates
- Dashboard statistics and analytics
- Admin reports and exports
- Admin notifications and alerts
- Security and access control

#### `src/pages/checkout/Checkout.integration.test.jsx`
Tests complete checkout flow:
- Cart display and summary
- Customer information collection
- Address validation
- Delivery options
- Order calculations (subtotal, tax, delivery)
- Payment processing
- Order confirmation
- Error handling

#### `src/pages/auth/Auth.integration.test.jsx`
Tests authentication flows:
- Login form and validation
- Registration and email verification
- Session management and persistence
- Admin authentication
- Password management and reset
- Security measures (CSRF, SSL, password hashing)
- Error messages and user feedback

#### `src/pages/delivery/Delivery.integration.test.jsx`
Tests delivery dashboard:
- Display assigned deliveries
- Status updates and tracking
- Route navigation and timing
- Delivery history
- Performance metrics
- Notifications and alerts

#### `src/pages/worker/Worker.integration.test.jsx`
Tests worker dashboard:
- Order display and management
- Status updates (Preparing → Cooking → Ready)
- Order scanning and verification
- Packaging and labeling
- Order queue prioritization
- Performance metrics
- Shift and break tracking

#### `src/services/Orders.test.js`
Tests order management service:
- Order creation and validation
- Status management and progression
- Order retrieval and filtering
- Order summaries and calculations
- Delivery information
- Order persistence
- Cancellation rules
- Analytics and revenue tracking

## Running the Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm test -- --watch
```

### Run Tests with Coverage Report
```bash
npm test:coverage
```

### Run Specific Test File
```bash
npm test -- App.utils.test.js
```

### Run Tests Matching a Pattern
```bash
npm test -- --testNamePattern="authentication"
```

## Test Coverage

The test suite covers:

### Functionality Areas
- ✅ User Authentication (Login, Registration, Password Reset)
- ✅ Shopping Cart (Add, Remove, Update Quantities)
- ✅ Menu Browsing (Filter, Sort, Search)
- ✅ Checkout Process (Address, Payment, Confirmation)
- ✅ Order Management (Creation, Status Updates, Tracking)
- ✅ Admin Dashboard (Dish Management, Analytics)
- ✅ Delivery Operations (Status Tracking, Navigation)
- ✅ Worker Operations (Order Preparation, Scanning)
- ✅ User Favorites (Add, Remove, Persistence)
- ✅ Session Management (Login Persistence, Logout)

### Testing Approaches
- **Unit Tests**: Individual functions and components
- **Integration Tests**: Complete user workflows
- **Validation Tests**: Input validation and error handling
- **Persistence Tests**: localStorage and session management
- **Security Tests**: Password handling, CSRF tokens, data sanitization

## Key Testing Utilities

All tests use:
- **Vitest** - Fast unit test framework
- **React Testing Library** - Component testing
- **@testing-library/user-event** - User interaction simulation
- **jsdom** - DOM environment

## Example Test Patterns

### Testing Component Rendering
```javascript
it('should render header with navigation links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  
  expect(screen.getByRole('link', { name: /menu/i })).toBeInTheDocument();
});
```

### Testing User Interactions
```javascript
it('should add item to cart', async () => {
  const user = userEvent.setup();
  render(<Menu />);
  
  const addButton = screen.getByRole('button', { name: /add to cart/i });
  await user.click(addButton);
  
  expect(screen.getByText(/cart.*2/i)).toBeInTheDocument();
});
```

### Testing localStorage Persistence
```javascript
it('should save cart to localStorage', () => {
  const cart = [{ slug: 'tagine', quantity: 1 }];
  localStorage.setItem('moroccan_food_cart', JSON.stringify(cart));
  
  const retrieved = JSON.parse(localStorage.getItem('moroccan_food_cart'));
  expect(retrieved).toEqual(cart);
});
```

## Best Practices

1. **Always clean up after tests**
   ```javascript
   afterEach(() => {
     localStorage.clear();
     jest.clearAllMocks();
   });
   ```

2. **Use meaningful test descriptions**
   - ✅ `should add item to cart when button clicked`
   - ❌ `test add button`

3. **Test user behavior, not implementation**
   - ✅ Click buttons and check results
   - ❌ Mock component internals

4. **Use query matchers appropriately**
   - `getByRole()` - For interactive elements
   - `getByText()` - For visible text
   - `queryBy*()` - When element might not exist

5. **Keep tests focused and independent**
   - One main behavior per test
   - No test should depend on another
   - Clean up after each test

## Common Test Scenarios

### Authentication Tests
- Valid login credentials
- Invalid email format
- Missing password
- Duplicate registration
- Admin access control

### Cart Tests
- Add single and multiple items
- Increase/decrease quantities
- Remove items
- Calculate totals correctly
- Prevent negative quantities

### Checkout Tests
- Customer information collection
- Address validation
- Payment processing
- Order confirmation
- Error handling

### Admin Tests
- Dish CRUD operations
- Order management
- Dashboard statistics
- Report generation
- User access control

## Troubleshooting

### Tests Not Running
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm test
```

### localStorage Issues
Ensure `afterEach` cleanup is present:
```javascript
afterEach(() => {
  localStorage.clear();
});
```

### Router Issues
Always wrap components with `<MemoryRouter>`:
```javascript
render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);
```

## Coverage Goals

Current coverage includes:
- **Functions**: Core utilities and helpers
- **Components**: All major page components
- **Workflows**: Complete user journeys
- **Edge Cases**: Error states and validation
- **Security**: Authentication and data protection

## Future Enhancements

Potential areas for expanded testing:
- Visual regression testing
- Performance testing
- E2E testing with Cypress/Playwright
- Accessibility testing (a11y)
- API mocking and testing
- Real-time updates testing

## Contributing

When adding new features:
1. Write tests first (TDD approach)
2. Implement the feature
3. Ensure all tests pass
4. Update this documentation
5. Maintain >80% coverage

## Support

For test-related questions:
- Check existing test patterns in the suite
- Review React Testing Library documentation
- Consult Vitest documentation
- Review test comments for explanations
