// @route GET api/projects/
// @desc Get all projects.
// @access Private
const getProjects = (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
};

// @route POST api/projects/
// @desc Create a project.
// @access Private
const createProject = (req, res) => {
  const { name, steps, progress } = req.body;
  res.status(200).json({
    name,
    steps,
    progress,
  });
};

// @route DELETE api/projects/:id
// @desc Delete a projects.
// @access Private
const deleteProject = (req, res) => {
  res.status(200).json({
    message: "Delete is executing",
  });
};

// @route PUT api/projects/:id
// @desc Update a project.
// @access Private
const updateProject = (req, res) => {
  res.status(200).json({
    message: "Update is executing",
  });
};

module.exports = { getProjects, createProject, deleteProject, updateProject };
