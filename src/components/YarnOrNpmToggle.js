import React, { useState } from 'react';

const YarnOrNpmToggle = () => {
  const [isYarn, setIsYarn] = useState(true);

  const commands = {
    yarn: {
      install: 'yarn add @bagpipes/wallet react react-dom react-router-dom @polkadot/util',
      dev: 'yarn dev',
    },
    npm: {
      install: 'npm install @bagpipes/wallet react react-dom react-router-dom @polkadot/util',
      dev: 'npm run dev',
    },
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button
          onClick={() => setIsYarn(true)}
          style={{
            marginRight: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: isYarn ? '#0070f3' : '#ddd',
            color: isYarn ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Yarn
        </button>
        <button
          onClick={() => setIsYarn(false)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: !isYarn ? '#0070f3' : '#ddd',
            color: !isYarn ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          npm
        </button>
      </div>

      <pre>
        <code>{commands[isYarn ? 'yarn' : 'npm'].install}</code>
      </pre>
      <pre>
        <code>{commands[isYarn ? 'yarn' : 'npm'].dev}</code>
      </pre>
    </div>
  );
};

export default YarnOrNpmToggle;
