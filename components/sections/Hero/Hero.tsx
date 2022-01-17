import { AiOutlineArrowDown } from 'react-icons/ai';

import { Text, Box, Container, Link, Button, ToggleDark } from '@components/ui';

export const Hero = () => {
  return (
    <Box className='grid md:grid-cols-2 md:h-screen mb-10 md:mb-40' id='top'>
      <Container className='w-full md:pl-16 pb-12 pt-5 flex flex-col justify-between order-1 md:order-0'>
        <Box className='order-3 md:order-1 mt-10 md:mt-0 flex justify-between'>
          <Box>
            <span className='mr-2 uppercase font-heading text-sm 2xl:text-xs'>
              Mail me:
            </span>
            <Link
              className='uppercase font-heading text-sm 2xl:text-xs border-b pb-[1px] border-slate-500 dark:border-slate-200 hover:border-rose-500'
              href='maito:hello@josemukorivo.dev'
            >
              hello@josemukorivo.dev
            </Link>
          </Box>
        </Box>
        <Box className='max-w-xl order-1 md:order-2'>
          <Text as='h1'>
            Hi 👋🏼, I’m Joseph. <br /> Writer, Software Engineer, DevOps
            Enthusiat.
          </Text>
          <Text className='mb-6 2xl:mb-10'>
            <code className='font-medium dark:text-slate-100 text-base 2xl:text-lg'>
              &lt;Welcome😎/&gt;
            </code>
            , nice to meet you. I occasionaly write about Software Development
            and Cloud Native Technologies here. I enjoy turning business
            problems into digital solutions through{' '}
            <code className='text-base 2xl:text-lg'>{'<code/>'}</code>.
          </Text>
          <Button
            variant='primary'
            size='lg'
            href='/blog'
            className='text-sm font-heading uppercase mr-3'
          >
            Read my blog
          </Button>
          <Button
            variant='secondary'
            size='lg'
            target='_blank'
            href='https://docs.google.com/document/d/16-sqqDzL3SR1vomlTW6gKOKIqJ7xd_MgfJXrDLkqbnU/edit'
            className='text-sm font-heading uppercase mr-3'
          >
            View my resume
          </Button>
        </Box>
        <Box className='hidden md:block order-2 md:order-3'>
          <Link
            className='uppercase font-heading text-slate-900 dark:text-slate-200 text-sm flex gap-1'
            href='#latest'
          >
            <AiOutlineArrowDown className='h-[21px] w-auto' /> scroll down
          </Link>
        </Box>
      </Container>
      <Box
        className={`bg-[url('/images/jose.png')] bg-slate-800 dark:bg-[#0d1424] md:bg-transparent md:dark:bg-transparent bg-cover bg-top order-0 md:order-1 h-[70vh] md:h-full relative md:right-10 pt-6 flex justify-end`}
      >
        <Box className='hidden md:block'>
          <ToggleDark />
        </Box>
      </Box>
    </Box>
  );
};