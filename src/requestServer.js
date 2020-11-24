import axios from 'axios';

let host = `http://aliyun.willet.cool`

const instance = {
  getFileList: function (callback) {
    axios.get(`${host}/v1/file/list`)
      .then(data => callback(data))
  },

}

export default instance
