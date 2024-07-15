---
sidebar_position: 1
---
# HRMP

## Open HRMP Channels

### Overview

Horizontal Relay-routed Message Passing (HRMP) channels are a key component in Polkadot's cross-chain messaging system. They allow parachains to send messages to each other through the Relay Chain. 

Using Bagpipes, you can easily create and manage HRMP channels...

### Setting Up an HRMP Channel

#### 1. Initiate HRMP Channel

To initiate an HRMP channel using Bagpipes:

1. **Drop a Chain Tx Node**: Drag and drop a Chain Tx node into the canvas.
   
   <!-- ![Chain Tx Node](path_to_chain_tx_node_image) -->

    <img src={require('@site/static/img/chainTx1.png').default}  width="500"/>

2. **Configure the Chain Tx Node:**

     - **Select Address:** Choose the address with the appropriate privileges.
     - **Select Chain:** Choose `Polkadot`.
     - **Select Pallet:** Choose the `hrmp` pallet.
     - **Select Method**: Choose `hrmp_init_open_channel`.

   <!-- ![HRMP Init Channel Configuration](path_to_hrmp_init_channel_image) -->

3. **Fill in the Method Fields:**

     - **Recipient ParaId:** Enter the recipient parachain ID (e.g., 2222).
     - **Proposed Max Capacity:** Enter the proposed maximum capacity (e.g., 100000000).
     - **Proposed Max Message Size:** Enter the proposed maximum message size (e.g., 100000000).
   
   <!-- ![HRMP Init Channel Method Fields](path_to_hrmp_init_method_fields_image) -->

4. **Execute the Transaction:**

     - Click play button to execute the scenario. (The play button is in the top right part of the screen).

#### 2. Accept HRMP Channel

To accept an HRMP channel:

1. **Drop a Chain Tx Node:** Drag and drop another Chain Tx node into the canvas.

<!-- ![Chain Tx Node](path_to_chain_tx_node_image) -->

2. **Configure the Chain Tx Node:**

     - **Select Address:** Choose the address with the appropriate privileges.
     - **Select Chain:** Choose `Polkadot`.
     - **Select Pallet:** Choose the `hrmp` pallet.
     - **Select Method:** Choose `hrmp_accept_open_channel`.

<!-- ![HRMP Accept Channel Configuration](path_to_hrmp_accept_channel_image) -->

3. **Fill in the Method Fields:**

     - **Sender ParaId:** Enter the sender parachain ID (e.g., 2222).

<!-- ![HRMP Accept Channel Method Fields](path_to_hrmp_accept_method_fields_image) -->

4. **Execute the Transaction:**

     - Click play button to execute the scenario. (The play button is in the top right part of the screen).

### Tips and Best Practices

:::tip Pro Tip
Use the toggle button to manually input data if required. This helps ensure accuracy and prevents validation issues.
:::

:::danger Caution
Ensure that all input fields are filled out accurately to avoid errors in transaction execution.
:::

### Creating Pills from Output
If you want to use the output of these transactions in other nodes:

1. **Run the Method Once:**

     - Click the Run Method Once button to execute the transaction individually.

<!-- ![Run Method Once](path_to_run_method_once_image) -->

2. **Generate Pills:**

After executing the scenario once, data will show in the event notifications.
Connect a node to the right of the Chain Tx node to use the output fields as Pills.

By following these steps, you can efficiently manage HRMP channels on Polkadot using Bagpipes. For more detailed information, refer to the [Polkadot Wiki on HRMP Channels](https://wiki.polkadot.network/docs/build-hrmp-channel).