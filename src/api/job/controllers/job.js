'use strict';

/**
 *  job controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const axios = require('axios');

module.exports = createCoreController('api::job.job', ({ strapi }) =>  ({

  async find(ctx) {
    const url = "https://api.github.com/repos/rebase-network/who-is-hiring/issues?per_page=5&page=1"

    const opts =  {
      'Content-Type': 'application/json'
    }

      const resp = await axios.get(url);
      console.log("resp.status"  + resp.status)
      const jobs = await resp.data;

    // some custom logic here
    ctx.query = { ...ctx.query, local: 'en' }

    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    // some more custom logic
    meta.abc = Date.now()

    return { data, meta, jobs };
  },

  async info(ctx, next) {
    const id = ctx.request.params

    return {
      url: "https://github.com/rebase-network/who-is-hiring",
      info: "这个仓库是由 Rebase 社区创建的。",
    }
  },
}));
