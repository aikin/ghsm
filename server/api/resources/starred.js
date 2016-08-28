import GitHubApi from 'github';

const github = new GitHubApi({});

export const getStarredRepos = async(ctx, next) => {

  const start = new Date;

  ctx.body = await github.activity.getStarredReposForUser({
    user: ctx.params.username
    // page: "Number",
    // per_page: "Number"
  });
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms - ${ctx.params.username}`);
}
