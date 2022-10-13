import { Flex, Spacer, Text, Button, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getSession } from 'next-auth/react';
import axiosInstance from '../../src/config/api';

const StatusTransaction = ({ data, statusTrans, user }) => {
<<<<<<< HEAD
  // console.log(user);
=======
>>>>>>> 4972fc98a9b27f4466ac9a9b625aab2197bd0c60
  const [addressUser, setAddressUser] = useState({});
  let dtId;
  let status;
  let createdAt;
  let totalPrice;
  let key;
  let ongkir;
  let userId;
  data.forEach((v, i) => {
    key = i;
    dtId = v.transaction.transactionId;
    status = v.transaction.transactionStatus;
    createdAt = v.transaction.createdAt;
    totalPrice = v.transaction.total;
    ongkir = v.transaction.biaya;
    userId = v.transaction.userId;
  });
  let NumOnkir = Number(ongkir);
  let NumPrice = Number(totalPrice);
  let grandTotal = NumOnkir + NumPrice;

  useEffect(() => {
    fetchUserMainAddress();
  }, []);
  const fetchUserMainAddress = async () => {
    try {
      const session = await getSession();
      const { accessToken } = session.user;
      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };

      const res = await axiosInstance.get(`/addresses/mainAddress`, config);
      setAddressUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user.isAdmin ? (
        // admin
        <div>
          <Flex>
            <Text minW="140px">Order Number </Text>:
            <Spacer />
            <Text textAlign={'end'}>{dtId}</Text>
          </Flex>
          <Flex>
            <Text minW="140px">Order Status </Text>:
            <Spacer />
            <Text textAlign={'end'}>{status}</Text>
          </Flex>
          <Flex>
            <Text minW="140px">Order Time </Text>:
            <Spacer />
            <Text textAlign={'end'} minW="160px">
              {moment(createdAt).format('LLL')}
            </Text>
          </Flex>
          <Flex mt="2rem">
            <Text minW="140px">Total Price </Text>:
            <Spacer />
            <Text textAlign={'end'}>Rp.{NumPrice.toLocaleString('id-ID')}</Text>
          </Flex>
          <Flex>
            <Text minW="140px">Delivery Fee </Text>:
            <Spacer />
            <Text textAlign={'end'}>Rp.{NumOnkir.toLocaleString('id-ID')}</Text>
          </Flex>
          <Flex>
            <Text minW="140px" fontWeight={'700'}>
              Total Payment{' '}
            </Text>
            :
            <Spacer />
            <Text textAlign={'end'} fontWeight={'700'}>
              Rp.{grandTotal.toLocaleString('id-ID')}
            </Text>
          </Flex>{' '}
        </div>
      ) : (
        //user
        <div>
          <Flex>
            <Text minW="140px">Order Number </Text>:
            <Spacer />
            <Text textAlign={'end'}>{dtId}</Text>
          </Flex>
          <Flex>
            <Text minW="140px">Order Status </Text>:
            <Spacer />
            <Text textAlign={'end'}>{status}</Text>
          </Flex>
          <Flex>
            <Text minW="140px">Order Time </Text>:
            <Spacer />
            <Text textAlign={'end'} minW="160px">
              {moment(createdAt).format('LLL')}
            </Text>
          </Flex>
          <Flex>
            <Text minW="140px">ShippingAddress </Text>:
            <Spacer />
            <Text textAlign={'end'} minW="170px">
              {' '}
              {addressUser.address} {addressUser.city_name}{' '}
              {addressUser.province}
            </Text>
          </Flex>
          <Flex mt="2rem">
            <Text minW="140px">Total Price </Text>:
            <Spacer />
            <Text textAlign={'end'}>Rp.{NumPrice.toLocaleString('id-ID')}</Text>
          </Flex>
          <Flex>
            <Text minW="140px">Delivery Fee </Text>:
            <Spacer />
            <Text textAlign={'end'}>Rp.{NumOnkir.toLocaleString('id-ID')}</Text>
          </Flex>
          <Flex>
            <Text minW="140px" fontWeight={'700'}>
              Total Payment{' '}
            </Text>
            :
            <Spacer />
            <Text textAlign={'end'} fontWeight={'700'}>
              Rp.{grandTotal.toLocaleString('id-ID')}
            </Text>
          </Flex>{' '}
        </div>
      )}
    </>
  );
};
export default StatusTransaction;
