// package: monitoring
// file: monitoring.proto

import * as jspb from "google-protobuf";

export class MonitoringData extends jspb.Message {
  getCpuusage(): number;
  setCpuusage(value: number): void;

  getMemoryusage(): number;
  setMemoryusage(value: number): void;

  getNetworkin(): number;
  setNetworkin(value: number): void;

  getNetworkout(): number;
  setNetworkout(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonitoringData.AsObject;
  static toObject(includeInstance: boolean, msg: MonitoringData): MonitoringData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonitoringData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonitoringData;
  static deserializeBinaryFromReader(message: MonitoringData, reader: jspb.BinaryReader): MonitoringData;
}

export namespace MonitoringData {
  export type AsObject = {
    cpuusage: number,
    memoryusage: number,
    networkin: number,
    networkout: number,
  }
}

export class MonitoringRequest extends jspb.Message {
  getStarttime(): string;
  setStarttime(value: string): void;

  getEndtime(): string;
  setEndtime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonitoringRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonitoringRequest): MonitoringRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonitoringRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonitoringRequest;
  static deserializeBinaryFromReader(message: MonitoringRequest, reader: jspb.BinaryReader): MonitoringRequest;
}

export namespace MonitoringRequest {
  export type AsObject = {
    starttime: string,
    endtime: string,
  }
}

