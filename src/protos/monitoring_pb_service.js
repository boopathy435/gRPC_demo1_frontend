// package: monitoring
// file: monitoring.proto

var monitoring_pb = require("./monitoring_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MonitoringService = (function () {
  function MonitoringService() {}
  MonitoringService.serviceName = "monitoring.MonitoringService";
  return MonitoringService;
}());

MonitoringService.GetMonitoringData = {
  methodName: "GetMonitoringData",
  service: MonitoringService,
  requestStream: false,
  responseStream: true,
  requestType: monitoring_pb.MonitoringRequest,
  responseType: monitoring_pb.MonitoringData
};

exports.MonitoringService = MonitoringService;

function MonitoringServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MonitoringServiceClient.prototype.getMonitoringData = function getMonitoringData(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MonitoringService.GetMonitoringData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.MonitoringServiceClient = MonitoringServiceClient;

