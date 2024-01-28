/* eslint-disable react-native/no-inline-styles */
import TestIcon from '@assets/svgs/TestIcon';
import {Button, SizedBox} from '@components';
import Text from '@components/text';
import Block from 'block';
import React, {FC} from 'react';

export const Home: FC = ({navigation}: any) => {
  return (
    <Block scroll>
      <SizedBox height={50} />
      <Button icon={<TestIcon />} />
      <SizedBox height={50} />
      <Block justifyContent="space-evenly" row>
        <Text>Left Side</Text>
        <Text>Right Side</Text>
      </Block>
      <SizedBox height={50} />
      <Block gap={24} alignItems="center">
        <Text h1>Top Side</Text>
        <Text h4 bold>
          Down Side
        </Text>
      </Block>
    </Block>
  );
};
