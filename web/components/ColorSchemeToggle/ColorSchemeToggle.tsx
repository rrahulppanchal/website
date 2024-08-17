'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconBrightnessDown, IconSunOff } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  if (colorScheme == 'dark') {
    return (
      <>
        <ActionIcon size="lg" color="gray" variant="subtle" onClick={() => toggleColorScheme()}>
          <IconBrightnessDown stroke={1.5} />
        </ActionIcon>
      </>
    );
  } else {
    return (
      <>
        <ActionIcon size="lg" color="gray" variant="subtle" onClick={() => toggleColorScheme()}>
          <IconSunOff stroke={1.5} />
        </ActionIcon>
      </>
    );
  }
}
