import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import img5 from '../assests/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4x1',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.x1'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur maiores iusto facere et. Quibusdam dignissimos, ab quis
            nisi voluptas repellat ad quidem. Rem velit iure veniam nihil
            officia rerum ipsam? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ad velit asperiores aliquam adipisci illum dolores
            suscipit, vero aperiam officia rerum architecto quibusdam sint optio
            praesentium cum est alias sunt ducimus? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nulla asperiores laborum eos aliquid?
            Saepe dolorum, dolorem aperiam explicabo velit quasi dolore quis,
            alias quibusdam reprehenderit corporis. Totam illum blanditiis ea.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur maiores iusto facere et. Quibusdam dignissimos, ab quis
            nisi voluptas repellat ad quidem. Rem velit iure veniam nihil
            officia rerum ipsam? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ad velit asperiores aliquam adipisci illum dolores
            suscipit, vero aperiam officia rerum architecto quibusdam sint optio
            praesentium cum est alias sunt ducimus? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nulla asperiores laborum eos aliquid?
            Saepe dolorum, dolorem aperiam explicabo velit quasi dolore quis,
            alias quibusdam reprehenderit corporis. Totam illum blanditiis ea.
       </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        <h1>Future is Gaming</h1>
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming in console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
