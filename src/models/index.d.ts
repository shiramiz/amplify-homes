import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TestMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Test {
  readonly id: string;
  readonly name?: string;
  readonly imgUrl?: string;
  readonly price?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Test, TestMetaData>);
  static copyOf(source: Test, mutator: (draft: MutableModel<Test, TestMetaData>) => MutableModel<Test, TestMetaData> | void): Test;
}

export declare class Home {
  readonly id: string;
  readonly address?: string;
  readonly image_url?: string;
  readonly price?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}