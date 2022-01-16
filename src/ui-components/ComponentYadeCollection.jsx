/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Test } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ComponentYade from "./ComponentYade";
import { Collection } from "@aws-amplify/ui-react";
import { SortDirection } from "@aws-amplify/datastore";
export default function ComponentYadeCollection(props) {
  const { test, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const itemsPagination = { sort: (s) => s.price(SortDirection.ASCENDING) };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Test,
          pagination: itemsPagination,
        }).items;
  return (
    <Collection
      type="list"
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <ComponentYade
          test={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.ComponentYade[0]")}
        ></ComponentYade>
      )}
    </Collection>
  );
}
