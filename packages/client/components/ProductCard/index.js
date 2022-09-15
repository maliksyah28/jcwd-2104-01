import { Text, Image, Flex, Button } from '@chakra-ui/react';
import { api_origin } from '../../constraint';

export default function ProductCard(props) {
  console.log(api_origin + props.product.productImage);
  return (
    <Flex
      flexDir={'column'}
      marginTop={'4'}
      width={{ base: '40vw', md: '14vw' }}
      flexShrink={'0'}
    >
      <Image src={api_origin + props.product.productImage} alt="vitamin" />
      <Text mx="4" mb="1" noOfLines={1} fontSize={['sm', 'md']} lineHeight={4}>
        {props.product.productName}
      </Text>
      <Text
        mx="4"
        fontSize={['xs', 'sm']}
        lineHeight={3}
        fontWeight="normal"
        color="#6E6E6E"
        marginBlock={'2'}
      >
        {`${props.product.unit} - stock ${props.product.stock}`}
      </Text>
      <Text mx="4" fontSize={['xs', 'sm']} lineHeight={5} fontWeight="medium">
        {props.product.price}
      </Text>
      <Button
        mx="4"
        variant={'outline'}
        colorScheme="twitter"
        marginBlock={'22px'}
      >
        Tambah
      </Button>
    </Flex>
  );
}
