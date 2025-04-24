const { getConnection } = require("../db/oracle");

exports.createProject = async (req, res) => {
  const {
    projectId,
    divisionName,
    projectName,
    projectType,
    tahsil,
    mouza,
    khasra,
    landArea,
    landAreaUnit,
    budgetHead,
    projectCost,
    projectCostUnit,
    timeLimit,
    projectDept,
    remark,
    isPublish,
    publishDate
  } = req.body;

  let conn;
  try {
    conn = await getConnection();

    const sql = `
      INSERT INTO PROJECT_MASTER (
        project_id, division_name, project_name, project_type, tahsil,
        mouza, khasra, land_area, land_area_unit, budget_head,
        project_cost, project_cost_unit, time_limit, project_by,
        remark, is_publish, publish_date
      ) VALUES (
        :projectId, :divisionName, :projectName, :projectType, :tahsil,
        :mouza, :khasra, :landArea, :landAreaUnit, :budgetHead,
        :projectCost, :projectCostUnit, :timeLimit, :projectDept,
        :remark, :isPublish, TO_DATE(:publishDate, 'YYYY-MM-DD')
      )
    `;

    const binds = {
      projectId, divisionName, projectName, projectType, tahsil,
      mouza, khasra, landArea, landAreaUnit, budgetHead,
      projectCost, projectCostUnit, timeLimit, projectDept,
      remark, isPublish, publishDate
    };

    await conn.execute(sql, binds, { autoCommit: true });
    res.status(201).send({ message: "Project added successfully" });
  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).send({ error: err.message });
  } finally {
    if (conn) await conn.close();
  }
};
