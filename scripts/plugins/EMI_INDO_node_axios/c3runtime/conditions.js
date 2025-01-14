globalThis.C3.Plugins.EMI_INDO_node_axios.Cnds = {
    onSuccessTag(success) {
        return this._successTag === success;
    },
    onErrorTag(err) {
        return this._errorTag === err;
    },
    isLoad(tag) {
        return this._successTag === tag && this._isLoad;
    }
};
