import { Container, Text, Link } from '@components/ui';

export const Copyright = () => (
  <Container className='flex flex-col justify-between border-t border-slate-300 py-5 dark:border-slate-700 md:flex-row'>
    <Text fontSize='sm'>
      Copyright © {new Date().getFullYear()} | All rights reserved.
    </Text>
    <Text fontSize='sm'>
      Made in Romania by{' '}
      <Link
        href='https://robertpetrache.com'
        className='font-medium text-rose-500 hover:text-rose-600 dark:text-rose-500'
      >
        Robert Petrache
      </Link>
      .
    </Text>
  </Container>
);
