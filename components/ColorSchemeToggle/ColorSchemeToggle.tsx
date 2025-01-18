'use client';

import { useState, useEffect } from 'react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconBrightnessDown, IconSunOff } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ActionIcon size="lg" color="gray" variant="subtle" onClick={() => toggleColorScheme()}>
      {colorScheme === 'dark' ? (
        <IconBrightnessDown stroke={1.5} />
      ) : (
        <IconSunOff stroke={1.5} />
      )}
    </ActionIcon>
  );
}
