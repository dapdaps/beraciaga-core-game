globalThis.C3.Plugins.EMI_INDO_node_axios.Exps = {
    data() {
        return JSON.stringify(this._objectData);
    },
    error() {
        return JSON.stringify(this._errStr);
    },
    GetValueByKey(keys) {
        let data = this._objectData;
        return data[keys];
    },
    GetValueByIndexKey(index, keys) {
        let data = this._objectData;
        const firstPost = data[index];
        const firstData = firstPost[keys];
        return firstData;
    }
};
