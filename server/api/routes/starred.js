import { getStarredRepos } from '../resources/starred';

export default (router) => {
  router
    .get('/users/:username/starred', getStarredRepos);
}
