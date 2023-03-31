/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace XLARSCValveFactory {
  export type RSCCreateDataStruct = {
    controller: PromiseOrValue<string>;
    distributors: PromiseOrValue<string>[];
    isImmutableRecipients: PromiseOrValue<boolean>;
    isAutoNativeCurrencyDistribution: PromiseOrValue<boolean>;
    minAutoDistributeAmount: PromiseOrValue<BigNumberish>;
    initialRecipients: PromiseOrValue<string>[];
    percentages: PromiseOrValue<BigNumberish>[];
    creationId: PromiseOrValue<BytesLike>;
  };

  export type RSCCreateDataStructOutput = [
    string,
    string[],
    boolean,
    boolean,
    BigNumber,
    string[],
    BigNumber[],
    string
  ] & {
    controller: string;
    distributors: string[];
    isImmutableRecipients: boolean;
    isAutoNativeCurrencyDistribution: boolean;
    minAutoDistributeAmount: BigNumber;
    initialRecipients: string[];
    percentages: BigNumber[];
    creationId: string;
  };
}

export interface XLAValveFactory_v010Interface extends utils.Interface {
  functions: {
    "contractImplementation()": FunctionFragment;
    "createRSCValve((address,address[],bool,bool,uint256,address[],uint256[],bytes32))": FunctionFragment;
    "owner()": FunctionFragment;
    "platformFee()": FunctionFragment;
    "platformWallet()": FunctionFragment;
    "predictDeterministicAddress((address,address[],bool,bool,uint256,address[],uint256[],bytes32),address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPlatformFee(uint256)": FunctionFragment;
    "setPlatformWallet(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "contractImplementation"
      | "createRSCValve"
      | "owner"
      | "platformFee"
      | "platformWallet"
      | "predictDeterministicAddress"
      | "renounceOwnership"
      | "setPlatformFee"
      | "setPlatformWallet"
      | "transferOwnership"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "contractImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createRSCValve",
    values: [XLARSCValveFactory.RSCCreateDataStruct]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "platformFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "platformWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "predictDeterministicAddress",
    values: [XLARSCValveFactory.RSCCreateDataStruct, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformWallet",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "contractImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createRSCValve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "platformFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "platformWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "predictDeterministicAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PlatformFeeChanged(uint256,uint256)": EventFragment;
    "PlatformWalletChanged(address,address)": EventFragment;
    "RSCValveCreated(address,address,address[],bytes32,bool,bool,uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlatformFeeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlatformWalletChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RSCValveCreated"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PlatformFeeChangedEventObject {
  oldFee: BigNumber;
  newFee: BigNumber;
}
export type PlatformFeeChangedEvent = TypedEvent<
  [BigNumber, BigNumber],
  PlatformFeeChangedEventObject
>;

export type PlatformFeeChangedEventFilter =
  TypedEventFilter<PlatformFeeChangedEvent>;

export interface PlatformWalletChangedEventObject {
  oldPlatformWallet: string;
  newPlatformWallet: string;
}
export type PlatformWalletChangedEvent = TypedEvent<
  [string, string],
  PlatformWalletChangedEventObject
>;

export type PlatformWalletChangedEventFilter =
  TypedEventFilter<PlatformWalletChangedEvent>;

export interface RSCValveCreatedEventObject {
  contractAddress: string;
  controller: string;
  distributors: string[];
  version: string;
  isImmutableRecipients: boolean;
  isAutoNativeCurrencyDistribution: boolean;
  minAutoDistributeAmount: BigNumber;
  creationId: string;
}
export type RSCValveCreatedEvent = TypedEvent<
  [string, string, string[], string, boolean, boolean, BigNumber, string],
  RSCValveCreatedEventObject
>;

export type RSCValveCreatedEventFilter = TypedEventFilter<RSCValveCreatedEvent>;

export interface XLAValveFactory_v010 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: XLAValveFactory_v010Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    contractImplementation(overrides?: CallOverrides): Promise<[string]>;

    createRSCValve(
      _data: XLARSCValveFactory.RSCCreateDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    platformFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    platformWallet(overrides?: CallOverrides): Promise<[string]>;

    predictDeterministicAddress(
      _data: XLARSCValveFactory.RSCCreateDataStruct,
      _deployer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPlatformFee(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPlatformWallet(
      _platformWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  contractImplementation(overrides?: CallOverrides): Promise<string>;

  createRSCValve(
    _data: XLARSCValveFactory.RSCCreateDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  platformFee(overrides?: CallOverrides): Promise<BigNumber>;

  platformWallet(overrides?: CallOverrides): Promise<string>;

  predictDeterministicAddress(
    _data: XLARSCValveFactory.RSCCreateDataStruct,
    _deployer: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPlatformFee(
    _fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPlatformWallet(
    _platformWallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    contractImplementation(overrides?: CallOverrides): Promise<string>;

    createRSCValve(
      _data: XLARSCValveFactory.RSCCreateDataStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    platformFee(overrides?: CallOverrides): Promise<BigNumber>;

    platformWallet(overrides?: CallOverrides): Promise<string>;

    predictDeterministicAddress(
      _data: XLARSCValveFactory.RSCCreateDataStruct,
      _deployer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setPlatformFee(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPlatformWallet(
      _platformWallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "PlatformFeeChanged(uint256,uint256)"(
      oldFee?: null,
      newFee?: null
    ): PlatformFeeChangedEventFilter;
    PlatformFeeChanged(
      oldFee?: null,
      newFee?: null
    ): PlatformFeeChangedEventFilter;

    "PlatformWalletChanged(address,address)"(
      oldPlatformWallet?: null,
      newPlatformWallet?: null
    ): PlatformWalletChangedEventFilter;
    PlatformWalletChanged(
      oldPlatformWallet?: null,
      newPlatformWallet?: null
    ): PlatformWalletChangedEventFilter;

    "RSCValveCreated(address,address,address[],bytes32,bool,bool,uint256,bytes32)"(
      contractAddress?: null,
      controller?: null,
      distributors?: null,
      version?: null,
      isImmutableRecipients?: null,
      isAutoNativeCurrencyDistribution?: null,
      minAutoDistributeAmount?: null,
      creationId?: null
    ): RSCValveCreatedEventFilter;
    RSCValveCreated(
      contractAddress?: null,
      controller?: null,
      distributors?: null,
      version?: null,
      isImmutableRecipients?: null,
      isAutoNativeCurrencyDistribution?: null,
      minAutoDistributeAmount?: null,
      creationId?: null
    ): RSCValveCreatedEventFilter;
  };

  estimateGas: {
    contractImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    createRSCValve(
      _data: XLARSCValveFactory.RSCCreateDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    platformFee(overrides?: CallOverrides): Promise<BigNumber>;

    platformWallet(overrides?: CallOverrides): Promise<BigNumber>;

    predictDeterministicAddress(
      _data: XLARSCValveFactory.RSCCreateDataStruct,
      _deployer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPlatformFee(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPlatformWallet(
      _platformWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    contractImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createRSCValve(
      _data: XLARSCValveFactory.RSCCreateDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    platformFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    platformWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    predictDeterministicAddress(
      _data: XLARSCValveFactory.RSCCreateDataStruct,
      _deployer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPlatformFee(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPlatformWallet(
      _platformWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}