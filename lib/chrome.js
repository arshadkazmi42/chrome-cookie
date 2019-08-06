const os = require('os');

const get = () => {
  const homeDir = os.homedir();
  if (os.platform() === 'win32') {
    throw new Error('Windows is not supported');
  }

  if (os.platform() === 'darwin') {
    return `${homeDir}/Library/Application Support/Google/Chrome/Default/Cookies`;
  }

  return `${homeDir}/.config/google-chrome/Default/Cookies`;
};


module.exports = {
  get
};
