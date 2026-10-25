const fs = require('fs');

// Parche seguro para entornos Windows donde Win32 GetFinalPathNameByHandleW
// devuelve EPERM sobre rutas de volumen en modo sandbox/aislado.
const origRealpath = fs.promises.realpath;
if (origRealpath) {
  fs.promises.realpath = async function (path, options) {
    try {
      return await origRealpath.call(this, path, options);
    } catch (err) {
      if (err && (err.code === 'EPERM' || err.code === 'EACCES')) {
        return fs.realpathSync(path, options);
      }
      throw err;
    }
  };
}

const origRealpathNative = fs.realpathSync.native;
if (origRealpathNative) {
  fs.realpathSync.native = function (path, options) {
    try {
      return origRealpathNative.call(this, path, options);
    } catch (err) {
      if (err && (err.code === 'EPERM' || err.code === 'EACCES')) {
        return fs.realpathSync(path, options);
      }
      throw err;
    }
  };
}

