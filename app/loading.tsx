import { Loader } from '@mantine/core';

export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.7)',
      zIndex: 9999,
    }}>
      <Loader size="xl" color="blue" variant="dots" />
    </div>
  );
} 