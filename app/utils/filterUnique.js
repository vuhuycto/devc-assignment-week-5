import _ from 'lodash';

export default function filterUnique(array) {
  return _.uniqBy(array, (item) => JSON.stringify(item));
}