# Welcome to `ov-igloo-ui` contributing guide

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected in `@igloo-ui/*` NPM packages.

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## New contributor guide

To get an overview of the project, read the [README](../README.md).

## Getting started

### Issues

#### Create a new issue

If you spot a problem with the components, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments) on our [issues page](https://github.com/workleap/ov-igloo-ui/issues). If a related issue doesn't exist, you can [open a new issue](https://github.com/workleap/ov-igloo-ui/issues/new).

#### Solve an issue

Scan through our [existing issues](https://github.com/workleap/ov-igloo-ui/issues) to find one that interests you. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

#### Make changes locally

1. Fork the repository.

- Using GitHub Desktop:

  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:

  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

- GitHub Codespaces:
  - [Fork, edit, and preview](https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/creating-a-codespace) using [GitHub Codespaces](https://github.com/features/codespaces) without having to install and run the project locally.

2. Install or update to **Node.js v14** or **v16**.

3. Install [Yarn](https://yarnpkg.com/).

4. Create a working branch and start with your changes!

### Commit your update

Commit the changes once you are happy with them.

Each commit message needs a title and a body. The title must contain a type, a target and a subject.

#### Type

The title type must be one of the following:

- **build**: Changes that affect the build system or external dependencies
- **chore**: Changes that don't affect the logic of the code (formatting, white spaces, missing semicolon)
- **ci**: Modifications targeting configuration files or CI scripts
- **docs**: Modifications to the documentation
- **feat**: For new component or new feature
- **fix**: Bug fix
- **refactor**: Changes to the code base that don't fix a bug or add feature
- **test**: Add missing tests or fix existing ones

### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.

- Run `yarn changeset` and follow the steps to generate a changeset file (that needs to be committed with your PR).
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.

Once you submit your PR, a GSoft team member will review your proposal. We may ask questions or request for additional information.

- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://lab.github.com/githubtraining/managing-merge-conflicts) to help you resolve merge conflicts and other issues.

### Your PR is merged!

Congratulations :tada::tada: The GSoft team thanks you.

## Windows

On Windows, an additional step is required to ensure that everything is working fine.

You need to add a new Git flag using the following command:

```sh
git config core.protectNTFS false
```
