/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function ComponentYade(props) {
  const { test, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="252px"
      height="304px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        width="212px"
        height="212px"
        position="absolute"
        left="20px"
        top="20px"
        padding="0px 0px 0px 0px"
        src={test?.imgUrl}
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        width="252px"
        height="72px"
        position="absolute"
        left="0px"
        top="232px"
        padding="12px 20px 20px 20px"
        {...getOverrideProps(overrides, "View.Flex[0]")}
      >
        <Flex
          gap="0"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.Flex[0].Flex[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="212px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children={test?.name}
            {...getOverrideProps(overrides, "View.Flex[0].Flex[0].Text[0]")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(149.00000631809235,4.000000236555934,4.000000236555934,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.010000000000000009px"
            width="212px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children={test?.price}
            {...getOverrideProps(overrides, "View.Flex[0].Flex[0].Text[1]")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
