---
sidebar_position: 2
---

# Wallet API

To help users understand the key components from `@bagpipes/wallet`, here is detailed documentation for each component used in the example.

## Components

- [`WalletContextProvider`](#walletcontextprovider)
- [`WalletContext`](#walletcontext)
- [`SelectWalletModal`](#selectwalletmodal)
- [`OpenSelectWallet`](#openselectwallet)
- [`WalletWidget`](#walletwidget)
- [`WalletIcon`](#walleticon)

---

## `WalletContextProvider`

### Description

The `WalletContextProvider` is a context provider component that wraps your application and supplies wallet-related context values. It manages the wallet connections, accounts, and network states.

### Usage

Wrap your root component or the part of your app where you need wallet functionalities with `WalletContextProvider`.

```jsx
import { WalletContextProvider } from '@bagpipes/wallet';

function App() {
  return (
    <WalletContextProvider>
      {/* Your app components */}
    </WalletContextProvider>
  );
}
```

### Props

- `children`: React nodes to render within the provider.

### Example

```jsx
import React from 'react';
import { WalletContextProvider } from '@bagpipes/wallet';
import MainApp from './MainApp';

function App() {
  return (
    <WalletContextProvider>
      <MainApp />
    </WalletContextProvider>
  );
}

export default App;
```

---

## `WalletContext`

### Description

`WalletContext` provides access to the wallet state and methods throughout your application. It includes information about the connected wallet, accounts, and methods to interact with the wallet.

### Usage

Use React's `useContext` hook to access the `WalletContext`.

```jsx
import { useContext } from 'react';
import { WalletContext } from '@bagpipes/wallet';

function MyComponent() {
  const walletContext = useContext(WalletContext);

  // Access wallet context values
  const { wallet, accounts } = walletContext;

  // Use wallet methods
  const disconnectWallet = walletContext.disconnectWallet;

  return (
    <div>
      {/* Your component code */}
    </div>
  );
}
```

### Available Properties and Methods

- `wallet`: Information about the connected wallet.
- `accounts`: Array of connected accounts.
- `connectWallet()`: Method to connect a wallet.
- `disconnectWallet()`: Method to disconnect the wallet.
- `evmWallet`: Information about connected EVM wallets (if applicable).
- `walletType`: Type of the connected wallet.

### Example

```jsx
import { useContext } from 'react';
import { WalletContext } from '@bagpipes/wallet';

function AccountInfo() {
  const { wallet, accounts, disconnectWallet } = useContext(WalletContext);

  if (!wallet) {
    return <p>No wallet connected</p>;
  }

  return (
    <div>
      <h2>Connected Wallet: {wallet.title}</h2>
      <h3>Accounts:</h3>
      {accounts.map((account) => (
        <p key={account.address}>{account.address}</p>
      ))}
      <button onClick={disconnectWallet}>Disconnect</button>
    </div>
  );
}
```

---

## `SelectWalletModal`

### Description

`SelectWalletModal` is a modal component that displays a list of available wallets for the user to select and connect. It handles the UI for wallet selection and initiates the connection process.

### Usage

Include `SelectWalletModal` somewhere in your app (e.g., at the root level within `WalletContextProvider`).

```jsx
import { SelectWalletModal } from '@bagpipes/wallet';

function App() {
  return (
    <WalletContextProvider>
      {/* Your app components */}
      <SelectWalletModal theme="light" debug={false} />
    </WalletContextProvider>
  );
}
```

### Props

- `theme`: The theme of the modal (`"light"` or `"dark"`).
- `debug`: If `true`, enables debug mode for additional logging.

### Example

```jsx
<SelectWalletModal theme="light" debug={false} />
```

---

## `OpenSelectWallet`

### Description

`OpenSelectWallet` is a context that provides a method to open the `SelectWalletModal` from anywhere within your component tree.

### Usage

Use `useContext` to access `OpenSelectWallet`, and then call its `open` method to display the wallet selection modal.

```jsx
import { useContext } from 'react';
import { OpenSelectWallet } from '@bagpipes/wallet';

function ConnectWalletButton() {
  const selectWallet = useContext(OpenSelectWallet);

  const handleConnect = () => {
    selectWallet.open();
  };

  return <button onClick={handleConnect}>Connect Wallet</button>;
}
```

### Example

```jsx
import { useContext } from 'react';
import { Button } from 'antd';
import { OpenSelectWallet } from '@bagpipes/wallet';

function ConnectWalletButton() {
  const selectWallet = useContext(OpenSelectWallet);

  return (
    <Button onClick={selectWallet.open}>Connect Wallet</Button>
  );
}
```

---

## `WalletWidget`

### Description

`WalletWidget` is a component that displays the connected wallet's information, including the selected account and balance. It provides a user-friendly interface for users to view their wallet status.

### Usage

Include `WalletWidget` where you want to display wallet information, such as in a header.

```jsx
import { WalletWidget } from '@bagpipes/wallet';

function Header() {
  return (
    <header>
      {/* Other header elements */}
      <WalletWidget />
    </header>
  );
}
```

### Example

```jsx
import { WalletWidget } from '@bagpipes/wallet';

function WalletWidgetWrapper() {
  return (
    <div className="wallet-widget-wrapper">
      <WalletWidget />
    </div>
  );
}

export default WalletWidgetWrapper;
```

---

## `WalletIcon`

### Description

`WalletIcon` is a component that renders a wallet icon, useful for buttons or indicators related to wallet actions.

### Usage

Import `WalletIcon` and include it in your components.

```jsx
import { WalletIcon } from '@bagpipes/wallet';

function ConnectWalletButton() {
  return (
    <button>
      <WalletIcon /> Connect Wallet
    </button>
  );
}
```

### Example

```jsx
import { WalletIcon } from '@bagpipes/wallet';

function Header() {
  return (
    <button className="header-wallet-btn">
      <WalletIcon /> Connect Wallet
    </button>
  );
}
```

---

# Additional Notes

- Ensure you have the required peer dependencies installed, such as React and React DOM versions compatible with the library.
- Style the components as needed to match your application's design.
- Explore the `@bagpipes/wallet` documentation for more advanced usage and customization options.
