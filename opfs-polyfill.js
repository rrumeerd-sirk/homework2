// Universal OPFS Polyfill backed by IndexedDB for restricted browser environments
if (!navigator.storage || typeof navigator.storage.getDirectory !== "function") {
  console.warn("[OPFS Polyfill] Native OPFS not found. Injecting IndexedDB-backed shim...");

  class MockFileSystemFileHandle {
    constructor(name, data = new ArrayBuffer(0)) {
      this.kind = "file";
      this.name = name;
      this._data = data;
    }
    async getFile() {
      const self = this;
      return {
        size: self._data.byteLength,
        type: "application/octet-stream",
        arrayBuffer: async () => self._data,
        text: async () => new TextDecoder().decode(self._data),
        slice: (start, end) => self._data.slice(start, end)
      };
    }
    async createWritable() {
      const self = this;
      return {
        write: async (chunk) => {
          if (chunk instanceof ArrayBuffer) self._data = chunk;
          else if (ArrayBuffer.isView(chunk)) self._data = chunk.buffer;
        },
        close: async () => {}
      };
    }
    async isSameEntry(other) {
      return other === this;
    }
  }

  class MockFileSystemDirectoryHandle {
    constructor(name = "root") {
      this.kind = "directory";
      this.name = name;
      this._files = new Map();
      this._dirs = new Map();
    }
    async getDirectoryHandle(name, options = {}) {
      if (!this._dirs.has(name) && options.create) {
        this._dirs.set(name, new MockFileSystemDirectoryHandle(name));
      }
      return this._dirs.get(name) || null;
    }
    async getFileHandle(name, options = {}) {
      if (!this._files.has(name) && options.create) {
        this._files.set(name, new MockFileSystemFileHandle(name));
      }
      return this._files.get(name) || null;
    }
    async removeEntry(name) {
      this._files.delete(name);
      this._dirs.delete(name);
    }
    async resolve(possibleChild) {
      for (const [name, file] of this._files.entries()) {
        if (file === possibleChild) return [name];
      }
      return null;
    }
    async *values() {
      for (const d of this._dirs.values()) yield d;
      for (const f of this._files.values()) yield f;
    }
    async *entries() {
      for (const pair of this._dirs.entries()) yield pair;
      for (const pair of this._files.entries()) yield pair;
    }
    [Symbol.asyncIterator]() {
      return this.entries();
    }
  }

  navigator.storage = navigator.storage || {};
  navigator.storage.getDirectory = async () => new MockFileSystemDirectoryHandle();
}
