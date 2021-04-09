const prospect = require("./prospect/prospect");
const {
  ID_PROSPECT_STATO_PF,
  ID_PROSPECT_STATO_PG,
  PROSPECT_TYPE,
} = require("./constants");

const appRouter = (app) => {
  app
    .get("/static", (_, res) => {
      res.json({
        idProspectStato: ID_PROSPECT_STATO_PF.concat(ID_PROSPECT_STATO_PG),
        prospectTipo: PROSPECT_TYPE,
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
