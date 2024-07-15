const sendMessage = message => {
  console.log('🔵 You sent: ' + message);
};

const createConnection = (serverUrl, roomId) => {
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...'
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
};

export { createConnection, sendMessage };
