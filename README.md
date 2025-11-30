# 🚀 React Native Wolt Clone

A **feature-rich React Native clone** of the Wolt food delivery app, built with **Expo**, **TypeScript**, and modern mobile development best practices.

> ⚠️ **Note:** This project uses **dummy data** for demonstration only.  
> No real backend is connected.

---

## ✨ Features

### 🧩 Core Features

- **User Authentication** — Apple & Google sign-in
- **Restaurant Discovery** — beautifully designed home & list screens
- **Search & Filter** — advanced filtering & suggestions
- **Interactive Map** — powered by Expo Maps
- **Menu Navigation** — categories, details & item pages
- **Shopping Cart** — quantities, subtotals, and real-time totals
- **Checkout Flow** — delivery scheduling & confirmation
- **Location Selection** — save and manage addresses
- **Smooth Animations** — Reanimated + Gesture Handler
- **Bottom Tabs** — modern tab navigation UX

---

## 🛠️ Tech Stack

| Category         | Tools                                            |
| ---------------- | ------------------------------------------------ |
| Navigation       | **Expo Router**                                  |
| Animations       | **React Native Reanimated**, **Gesture Handler** |
| Maps             | **Expo Maps**                                    |
| UI               | **Expo Linear Gradient**                         |
| State Management | **Zustand**                                      |
| Storage          | **MMKV**                                         |
| Monitoring       | **Sentry**                                       |

---

## 📦 Getting Started

### ✅ Prerequisites

Make sure you have:

- **Node**, **Bun**, or **npm**
- **Expo CLI**
- **Android Studio** (for Android)
- **Xcode** (macOS only, for iOS)

---

## 🔧 Installation

### 1. Clone the repository

```sh
git clone <repository-url>
cd wolt
```

### 2. Install dependencies

```sh
bun install
# or
npm install
```

### 3. Prebuild native code

```sh
bunx expo prebuild
```

### 4. Run the app

## iOS:

```sh
bunx expo run:ios
```

## Android:

```sh
bunx expo run:android
```

## Screenshots

![Screen 1](./assets/demos/1.png)
![Screen 2](./assets/demos/2.png)
![Screen 3](./assets/demos/3.png)
![Screen 4](./assets/demos/4.png)
![Screen 5](./assets/demos/5.png)
![Screen 6](./assets/demos/6.png)
![Screen 7](./assets/demos/7.png)
![Screen 8](./assets/demos/8.png)
![Screen 9](./assets/demos/9.png)
![Screen 10](./assets/demos/10.png)
![Screen 11](./assets/demos/11.png)
![Screen 12](./assets/demos/12.png)

## 🎥 Demo Videos

![Demo 1](./assets/demos/demo1.gif)
![Demo 2](./assets/demos/demo2.gif)
![Demo 3](./assets/demos/demo3.gif)
![Demo 4](./assets/demos/demo4.gif)
![Demo 5](./assets/demos/demo5.gif)
![Demo 6](./assets/demos/demo6.gif)
![Demo 7](./assets/demos/demo7.gif)

## Project Structure

app/
├── (app)/
│ ├── (public)/ # Public routes (authentication)
│ └── (auth)/ # Protected routes
│ ├── (tabs)/ # Bottom tab navigation
│ │ ├── restaurants/ # Restaurant browsing
│ │ ├── stores/ # Store browsing
│ │ ├── search/ # Search functionality
│ │ ├── discovery/ # Discovery feed
│ │ └── profile/ # User profile
│ ├── (modal)/ # Modal screens
│ │ ├── location/ # Location picker
│ │ ├── filter/ # Filter options
│ │ ├── map/ # Map view
│ │ └── [id]/ # Restaurant/menu details
│ └── order/ # Order flow
│ ├── index/ # Cart view
│ ├── schedule/ # Delivery scheduling
│ └── checkout/ # Checkout
components/ # Reusable components
constants/ # Theme, colors, fonts
assets/ # Images and static files
