'use strict';

/**
 * `isOwner` policy.
 */

module.exports = async (ctx, next) => {

  console.log("Testing policy firing");
  // Add your own logic here.
  if (ctx.state.user) {
    let data = await strapi.query('restaurant').findOne({id: ctx.params.id})

    if (ctx.state.user.id === data.owner.id) {
      await next();
    } else {
      ctx.unauthorized('You are not the owner')
    }
  }
};
