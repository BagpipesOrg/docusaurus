import YarnOrNpmToggle from '@site/src/components/YarnOrNpmToggle';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Bagpipes Wallet "Hello World"

## Creating a React Vite Template with @bagpipes/wallet

Here is a "Hello World" DApp using @bagpipes/wallet. We will build this using React Vite. 

Users can easily fork this template and start building their applications with wallet functionalities already set up.



## Table of Contents
1. Prerequisites
1. Project Setup
1. Installing Dependencies
1. Project Structure
1. Adding @bagpipes/wallet
1. Creating the Wallet Integration
1. Running the Project
1. Preparing the Template for Forking
1. Conclusion

---



## Prerequisites
- Node.js (v20 or above)
- npm or Yarn
- Git (optional, for version control and hosting on GitHub)

## Project Setup
1. Create a New Vite React Project

We'll use Vite to set up a fast and lightweight React project.

<Tabs>
  <TabItem value="yarn" label="Yarn" default>
```bash

# Using Yarn
yarn create vite bagpipes-wallet-template --template react
```
</TabItem> 
<TabItem value="npm" label="npm">

```
# Using npm
npm create vite@latest bagpipes-wallet-template -- --template react
```
</TabItem></Tabs>

Navigate to the project directory:

```bash

cd bagpipes-wallet-template
```

2. Initialize Git (Optional)

If you plan to host this template on GitHub or another Git repository, initialize Git:

```bash
git init
```
Installing Dependencies
1. Install Project Dependencies
First, install the basic dependencies:

<Tabs>
<TabItem value="npm" label="npm">
```bash
# Using npm
npm install
```
</TabItem>

<TabItem value="yarn" label="Yarn">

```
# Using Yarn
yarn
```
</TabItem>

</Tabs>

2. Install @bagpipes/wallet and Other Necessary Packages
<Tabs>
<TabItem value="npm" label="npm">

```bash
# Using npm
npm install @bagpipes/wallet @polkadot/util-crypto
```

</TabItem><TabItem value="yarn" label="Yarn">

```bash
# Using Yarn
yarn add @bagpipes/wallet @polkadot/util-crypto
```
</TabItem>
</Tabs>


- @bagpipes/wallet: The wallet integration library.
- antd: UI components library used by @bagpipes/wallet.
- @polkadot/util-crypto: Utility functions for working with addresses.

## Project Structure

Your project structure should look like this:

```arduino
bagpipes-wallet-template/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── AccountInfo.jsx
│   │   ├── ConnectWalletButton.jsx
│   │   └── WalletWidgetWrapper.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Adding @bagpipes/wallet
1. Setting Up the Wallet Context Provider
Wrap your application with the WalletContextProvider to supply wallet context values.

```jsx

// src/App.jsx
import React from 'react';
import { WalletContextProvider, SelectWalletModal } from '@bagpipes/wallet';
import ConnectWalletButton from './components/ConnectWalletButton';
import AccountInfo from './components/AccountInfo';
import WalletWidgetWrapper from './components/WalletWidgetWrapper';
import './App.css';

function App() {
  return (
    <WalletContextProvider>
      <div className="app-header">
        <WalletWidgetWrapper />
      </div>
      <div className="app-content">
        <h1>Hello, Bagpipes Wallet!</h1>
        <ConnectWalletButton />
        <AccountInfo />
      </div>
      <SelectWalletModal />
    </WalletContextProvider>
  );
}

export default App;
```
Creating the Wallet Integration
1. Create the ConnectWalletButton Component
```jsx

// src/components/ConnectWalletButton.jsx
import React, { useContext } from 'react';
import { OpenSelectWallet } from '@bagpipes/wallet';

function ConnectWalletButton() {
  const selectWallet = useContext(OpenSelectWallet);

  const handleConnectWallet = () => {
    selectWallet.open();
  };

  return <button onClick={handleConnectWallet}>Connect Wallet</button>;
}

export default ConnectWalletButton;
2. Create the AccountInfo Component
jsx

// src/components/AccountInfo.jsx
import React, { useContext } from 'react';
import { WalletContext } from '@bagpipes/wallet';

function AccountInfo() {
  const walletContext = useContext(WalletContext);

  if (!walletContext.wallet) {
    return <div>No wallet connected</div>;
  }

  return (
    <div>
      <p>Connected Wallet Type: {walletContext.walletType}</p>
      <p>Connected Account: {walletContext.accounts[0]?.address}</p>
    </div>
  );
}

export default AccountInfo;
```

3. Create the WalletWidgetWrapper Component

```jsx

// src/components/WalletWidgetWrapper.jsx
import React from 'react';
import { WalletWidget } from '@bagpipes/wallet';
import './WalletWidgetWrapper.css'; // Optional CSS styling

function WalletWidgetWrapper() {
  return (
    <div className="wallet-widget-wrapper">
      <WalletWidget />
    </div>
  );
}

export default WalletWidgetWrapper;

```

4. Update main.jsx
Ensure that your entry point main.jsx renders the App component.

```jsx

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional: Global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

## Running the Project

### 1. Start the Development Server
```bash

# Using npm
npm run dev

# Using Yarn
yarn dev
```
This will start the Vite development server, and you can view your app at http://localhost:5173 (default port).

### 2. Test the Wallet Integration

- Click on the "Connect Wallet" button.
- The SelectWalletModal should appear.
- Select a wallet to connect.
- After connecting, the AccountInfo component should display the connected wallet type and account address.
- The WalletWidget should display wallet information in the header.

