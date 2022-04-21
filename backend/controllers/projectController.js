const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");

// @route GET api/projects/
// @desc Get all projects.
// @access Private
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();

  res.status(200).json(projects);
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

  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedProject);
});

module.exports = { getProjects, createProject, deleteProject, updateProject };
