import { Box, Button, Container, Link, Text } from '@components/ui';
import { motion } from 'framer-motion';
import Image from 'next/legacy/image';

export const About = () => {
  return (
    <Container id='about' className='mb-20 grid gap-10 md:mb-40 md:grid-cols-5'>
      <Box className='md:col-span-3'>
        <Text as='h2' className='mb-5' fontSize='4xl'>
          <motion.span
            className='block'
            initial={{ x: -10 }}
            transition={{ duration: 0.8 }}
            whileInView={{ x: 0 }}
          >
            Get to know me
          </motion.span>
        </Text>
        <Text className='gap-5 md:columns-2 2xl:gap-10'>
          Hello, I&lsquo;m Robert, a Web Developer & Software Engineer from Bucharest, Romania
          and <span className='font-medium'>Founder & CEO</span> of{' '}
          <Link
            className='font-medium text-rose-500 dark:text-rose-500'
            target='_blank'
            href='https://www.primenetwork.ro'
          >
            Prime Network
          </Link>{' '}
          a company dedicated to crafting user-centric software. Over the years, I&lsquo;ve had the privilege of working
          with a diverse range of companies, from dynamic startups to esteemed
          institutions like the{' '}
          <Link
            className='font-medium text-rose-500 dark:text-rose-500'
            target='_blank'
            href='#'
          >
            Project One
          </Link>
          ,{' '}
          <Link
            className='font-medium text-rose-500 dark:text-rose-500'
            target='_blank'
            href='#'
          >
            Project Two
          </Link>
          , and{' '}
          <Link
            className='font-medium text-rose-500 dark:text-rose-500'
            target='_blank'
            href='#'
          >
            Project Three
          </Link>
          . I&lsquo;m currently based in Bucharest, Romania, where I&lsquo;m
          working as a Web Developer & Software Engineer at{' '}
          <Link
            className='font-medium text-rose-500 dark:text-rose-500'
            target='_blank'
            href='https://www.primenetwork.ro'
          >
            Prime Network.
          </Link>{' '}
          I&lsquo;m excited to continue this journey, creating impactful
          software solutions. Looking forward to what lies ahead!
        </Text>
        <Button
          variant='primary'
          size='lg'
          target='_blank'
          href='https://docs.google.com/document/d/16-sqqDzL3SR1vomlTW6gKOKIqJ7xd_MgfJXrDLkqbnU/edit'
          className='mr-3 mt-8 font-heading text-sm uppercase'
        >
          See my resume
        </Button>
      </Box>
      <motion.div
        initial={{ translateX: 30 }}
        transition={{ duration: 1 }}
        whileInView={{ translateX: 0 }}
        className='relative h-64 md:col-span-2 md:h-[360px] md:pt-10 2xl:h-[420px]'
      >
        <Image
          src='/images/me.jpeg'
          layout='fill'
          alt='Robert'
          quality={100}
          objectFit='cover'
        />
      </motion.div>
    </Container>
  );
};
