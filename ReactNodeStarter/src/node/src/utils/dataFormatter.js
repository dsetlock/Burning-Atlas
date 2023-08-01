// Example data formatter targeting userData from the userController
function formatUserData(userData) {
    return {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      // Add other fields as needed
    };
  }
  
  module.exports = {
    formatUserData
  };
  