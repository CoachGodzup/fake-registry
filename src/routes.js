const prospect = require("./prospect/prospect");
const {
  ID_PROSPECT_STATE_PP,
  ID_PROSPECT_STATE_COMPANY,
  PROSPECT_TYPE,
} = require("./constants");

const appRouter = (app) => {
  app
    .get("/static", (_, res) => {
      res.json({
        idProspectState: ID_PROSPECT_STATE_PP.concat(ID_PROSPECT_STATE_COMPANY),
        prospectType: PROSPECT_TYPE,
      });
    })
    .on("error", (err) => {
      throw new Error(err);
    });

  app
    .get("/prospect/:idProspect", (req, res) => {
      const forgedProspect = prospect.forgeNewProspect(req);
      res.json(forgedProspect);
    })
    .on("error", (err) => {
      throw new Error(err);
    });
};

module.exports = appRouter;
