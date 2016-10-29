import rest from 'rest';
import imgurConfig from '../../../config/imgur.config';

export default class RestWrapper {
  get(url, callback) {
    rest({
      path: url,
      headers: { Authorization: `Client-Id ${imgurConfig.clientId}` } }).then((response) => {
        callback(response);
      });
  }
}
