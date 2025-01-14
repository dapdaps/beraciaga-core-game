const C3 = globalThis.C3;
import { axios, fetchData } from './bundle.js';
class EMI_INDO_node_axiosInstance extends globalThis.ISDKInstanceBase {
    constructor() {
        super();
        this._isDebug = false;
        const properties = this._getInitProperties();
        if (properties) {
            this._isDebug = properties[0];
        }
        this._objectData = null;
        this._errStr = null;
        this._successTag = "";
        this._errorTag = "";
        this._isLoad = false;
    }
    _release() {
        super._release();
    }
    _setTestProperty(n) {
    }
    _getTestProperty() {
    }
    _saveToJson() {
        return {};
    }
    _loadFromJson(o) {
    }
    _axiosGet(url, success, err) {
        if (typeof axios !== 'undefined') {
            axios.get(url)
                .then((response) => {
                this._successTag = success;
                this._objectData = response.data;
                this._isDebug && console.log('Data:', response.data);
                this._isLoad = true;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onSuccessTag);
            })
                .catch((error) => {
                this._isDebug && console.error('Error:', error);
                this._isLoad = false;
                this._errStr = error;
                this._errorTag = err;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onErrorTag);
            });
        }
    }
    _axiosCustom(url, json, success, err) {
        if (typeof axios !== 'undefined') {
            axios.get(url, JSON.parse(json))
                .then((response) => {
                this._isDebug && console.log('Data:', response.data);
                this._successTag = success;
                this._objectData = response.data;
                this._isLoad = true;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onSuccessTag);
            })
                .catch((error) => {
                this._isDebug && console.error('error:', error);
                this._isLoad = false;
                this._errStr = error;
                this._errorTag = err;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onErrorTag);
            });
        }
    }
    _axiosFatch(url, success, err) {
        if (typeof axios !== 'undefined') {
            fetchData(url)
                .then((data) => {
                this._isDebug && console.log('fatch data:', data);
                this._successTag = success;
                this._objectData = data;
                this._isLoad = true;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onSuccessTag);
            })
                .catch((error) => {
                this._isDebug && console.error('fatch error:', error);
                this._isLoad = false;
                this._errStr = error;
                this._errorTag = err;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onErrorTag);
            });
        }
    }
    _axiosPost(url, json, success, err) {
        if (typeof axios !== 'undefined') {
            axios.post(url, JSON.parse(json))
                .then((response) => {
                this._isDebug && console.log('Data:', response.data);
                this._successTag = success;
                this._objectData = response.data;
                this._isLoad = true;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onSuccessTag);
            })
                .catch((error) => {
                this._isDebug && console.error('Error:', error);
                this._isLoad = false;
                this._errStr = error;
                this._errorTag = err;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onErrorTag);
            });
        }
    }
    _axiosPut(url, json, success, err) {
        if (typeof axios !== 'undefined') {
            axios.put(url, JSON.parse(json))
                .then((response) => {
                this._isDebug && console.log('Data:', response.data);
                this._successTag = success;
                this._objectData = response.data;
                this._isLoad = true;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onSuccessTag);
            })
                .catch((error) => {
                this._isDebug && console.error('Error:', error);
                this._isLoad = false;
                this._errStr = error;
                this._errorTag = err;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onErrorTag);
            });
        }
    }
    _axiosDel(url, success, err) {
        if (typeof axios !== 'undefined') {
            axios.delete(url)
                .then((response) => {
                this._isDebug && console.log('Data:', response.data);
                this._successTag = success;
                this._objectData = response.data;
                this._isLoad = true;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onSuccessTag);
            })
                .catch((error) => {
                this._isDebug && console.error('Error:', error);
                this._isLoad = false;
                this._errStr = error;
                this._errorTag = err;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onErrorTag);
            });
        }
    }
    _axiosCreateInstance(json, success, err) {
        if (typeof axios !== 'undefined') {
            const apiClient = axios.create(JSON.parse(json));
            apiClient.get('/data')
                .then((response) => {
                this._isDebug && console.log('Data:', response.data);
                this._successTag = success;
                this._objectData = response.data;
                this._isLoad = true;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onSuccessTag);
            })
                .catch((error) => {
                this._isDebug && console.error('Error:', error);
                this._isLoad = false;
                this._errStr = error;
                this._errorTag = err;
                this._trigger(C3.Plugins.EMI_INDO_node_axios.Cnds.onErrorTag);
            });
        }
    }
}
;
C3.Plugins.EMI_INDO_node_axios.Instance = EMI_INDO_node_axiosInstance;
