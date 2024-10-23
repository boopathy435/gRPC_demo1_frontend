// package: monitoring
// file: monitoring.proto

import * as monitoring_pb from "./monitoring_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MonitoringServiceGetMonitoringData = {
  readonly methodName: string;
  readonly service: typeof MonitoringService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof monitoring_pb.MonitoringRequest;
  readonly responseType: typeof monitoring_pb.MonitoringData;
};

export class MonitoringService {
  static readonly serviceName: string;
  static readonly GetMonitoringData: MonitoringServiceGetMonitoringData;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MonitoringServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getMonitoringData(requestMessage: monitoring_pb.MonitoringRequest, metadata?: grpc.Metadata): ResponseStream<monitoring_pb.MonitoringData>;
}

