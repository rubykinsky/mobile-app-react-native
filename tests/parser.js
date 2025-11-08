import { log } from 'mobile-app-react-native/utils';

const parser = {
  parse(input) {
    try {
      const data = JSON.parse(input);
      if (data.type === 'error') {
        log.error(data.message);
        return false;
      }
      return data;
    } catch (error) {
      log.error(`Error parsing input: ${error.message}`);
      return false;
    }
  },
};

export default parser;