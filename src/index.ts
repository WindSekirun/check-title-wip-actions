import * as core from "@actions/core";
import * as github from "@actions/github";

function run() {
  const title: string =
    github.context.payload &&
    github.context.payload.pull_request &&
    github.context.payload.pull_request.title;
  core.info(title);
  if (title.includes("WIP:")) {
    core.setFailed(`Pull request title "${title}" contains WIP:`);
  }
}

run();
