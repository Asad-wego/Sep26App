# Warehouse Management System (WMS)

This project is a **Warehouse Management System** (WMS) mobile application built using **React Native**. The app allows users to manage warehouse inventory, including features like viewing items, adding new items, updating item details, and deleting items. It also demonstrates clean code architecture, scalability, and user-friendly UI/UX practices.

While I aimed to implement all features in the most professional manner, certain enhancements could not be included due to time constraints. However, the project is designed with scalability and maintainability in mind.

## Features

- **Authentication System:** Simple login with mock data (username: `user`, password: `password`).
- **Inventory Overview:** Display a list of warehouse items, each showing name, quantity, location, and owner.
- **Add/Update/Delete Items:** Easily manage warehouse inventory.
- **Role-based Access:** Manager can add, edit, and delete items, while staff can only update quantities.
- **Input Validation:** Quantity should always be a positive number.
- **Bonus:** (Optional) Offline support, search optimization, and dark mode can be extended.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Android Studio](https://developer.android.com/studio) (for Android builds)
- [Xcode](https://developer.apple.com/xcode/) (for iOS builds)

## Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/warehouse-management-system.git
cd warehouse-management-system
```

## Step 2: Install Dependencies

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Install Pods (iOS only)

```bash
cd ios
pod install
cd ..
```

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android

OR
npx react-native run-android

```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios

OR
npx react-native run-ios

```

# Contact

Developer:

```bash
Muhammad Asad Ilyas
```

Email:

```bash
asadilyas320@gmail.com
```

Mobile:

```bash
+923413189273
```
