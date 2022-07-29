'use strict';

/**
 * web3daily service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web3daily.web3daily');
