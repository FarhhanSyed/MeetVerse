const { Server } = require("socket.io");

exports.connectToSocket = (server) => {
  const io = new Server(server);
  return io;
};
