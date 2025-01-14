globalThis.C3.Plugins.EMI_INDO_node_axios.Acts = {
    async get(url, success, err) {
        await this._axiosGet(url, success, err);
    },
    async axiosFatch(url, success, err) {
        await this._axiosFatch(url, success, err);
    },
    async axiosPost(url, json, success, err) {
        await this._axiosPost(url, json, success, err);
    },
    async axiosPut(url, json, success, err) {
        await this._axiosPut(url, json, success, err);
    },
    async axiosDel(url, success, err) {
        await this._axiosDel(url, success, err);
    },
    async createInstance(json, success, err) {
        await this._axiosCreateInstance(json, success, err);
    },
    async customData(url, json, success, err) {
        await this._axiosCustom(url, json, success, err);
    }
};
