const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");

// @route GET api/projects/
// @desc Get all projects.
// @access Private
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ user: req.user.id });

  res.status(200).json(projects);
});

// @route GET api/projects/:id
// @desc Get a project.
// @access Private
const getProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  res.status(200).json(project);
});

// @route POST api/projects/
// @desc Create a project.
// @access Private
const createProject = asyncHandler(async (req, res) => {
  const { name, steps } = req.body;
  if (!name || !steps) {
    res.status(400);
    throw new Error("Please add all fields.");
  }

  const project = await Project.create({
    name,
    steps,
    user: req.user.id,
  });
  res.status(200).json(project);
});

// @route DELETE api/projects/:id
// @desc Delete a projects.
// @access Private
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("Project not found.");
  }
  if (project.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized.");
  }
  await project.remove();

  res.status(200).json({
    message: "Project Deleted",
  });
});

// @route PUT api/projects/:id
// @desc Update a project.
// @access Private
const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("Project not found.");
  }

  if (project.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized.");
  }

  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedProject);
});

module.exports = {
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
};
