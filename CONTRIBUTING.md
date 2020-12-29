# Contribution is fun! :green_heart:

Thanks for checking out our contribution guide. We greatly appreciate any work contributed, no matter how small!

## How to Contribute

When you are ready to start work on an issue:

- Declare your intent of working on a issue by raising appropriate comments. (Also, let us know later if you are no longer working on it.)
- If you've already discussed with the Maintainer, then you can comment `/assign` on the issue. A Github Action Bot will automatically assign the issue on a first come, first serve basis.
- Upon assignment of the Issue, proceed to make the Pull Request. This will help avoid multiple PRs pertaining to the same issue.

If you don't see your idea listed in the issues, please do one of the following:
* **If your contribution is minor,** such as a typo fix, open a pull request.
* **If your contribution is major,** such as a new feature/enhancement, start by opening an issue first. This way, other people can be also involved in the discussion before you do any work.

In order to make a hassle-free environment, I implore you all to follow the instructions mentioned below!

Happy Contributing :slightly_smiling_face:

## :arrow_down: Installation

- First, fork this repository and follow the given instructions:

```bash
# clone the repository to your local machine using Git Bash
$ git clone https://github.com/<YOUR-GITHUB-USERNAME>/AllNotes.git

# navigate to the project's directory 
# and install all the relevant dev-dependencies
$ cd AllNotes

# add upstream 
$ git remote add upstream https://github.com/HarshCasper/AllNotes.git

# include all the latest changes from the remote repository
# to keep your local branch updated with develop branch.
$ git fetch upstream
$ git merge upstream/develop
```

Checkout to develop branch 
`$ git checkout develop` 

Next, create a new branch for the particular issue - `$ git checkout -b <NEW-BRANCH-NAME>` and make PR from that branch while leaving other branches unchanged.
- Branch name should be feature/FeatureName or fix/FixName 

Once you have made your changes, run the following command:

```bash
# add your changes
$ git add .
```

##  Git Commit Messages

A good Git Commit Messages is always good for the overall status and health of the project. Here are some Git Commit Guidelines that you should be following for the project:

-   feat : feature
-   fix : bug fix
-   docs : documentation
-   style : formatting, lint stuff
-   refactor : code restructure without changing external behaviour
-   test : adding missing tests
-   chore : maintenance
-   init : initial commit
-   rearrange : files moved, added, deleted etc
-   update : update code (versions, library compatibility)

Some examples of the pull requests following the above guidelines would look like:
`feat: add nav bar on react app`  
`docs: add code of conduct`  
`test: add cypress e2e for login and signup`

Try to keep the Commit Lines, under 80 characters in width and should be in the present tense, with no letters capitalized (until necessary).

```bash
# make your commit
$ git commit -m "<YOUR-COMMIT-MESSAGE>"

#push your changes
git push -u origin NEW-BRANCH-NAME
```
Every PR should have one atomic commit. The commit should be logical and imperative. So, if you are making multiple commits for all good reasons, try to push them into one single commit. For squashing commits and pushing the changes:
```bash
# checkout to your branch
$ git checkout <NEW-BRANCH-NAME>

# to act and operate on the last N commits
# N = number of commits you want to squash
$ git reset --soft HEAD~N

#now you can make a single commit 
$ git add .
$ git commit -m "<YOUR-COMMIT-MESSAGE>"

# push your changes
$ git push -f origin HEAD
```
> Think you're ready :grey_question: Make the PR. 
> Always make PRs to develop branch.

In case, you want to do some changes after making the pull request, make the changes in your local repository and then, run the following commands:

```bash
# add your changes
$ git add .

# amend your changes 
$ git commit --amend
```
This will open a vim text editor. Press `esc` , write `:q` and then hit enter .

Voila! Your Pull Request has been submitted and will be reviewed by the moderators and merged.

## Need more help?🤔  
You can refer to the following articles on basics of Git and Github and also contact the Project Mentors, in case you are stuck:  
- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)  
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)  
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)  
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)  
- [Learn GitHub from Scratch](https://lab.github.com/githubtraining/introduction-to-github)  
 - [Learn more about Vim Shortcuts](https://docs.google.com/document/d/1AwJ0QTpi73-IF7yzpHeszr3iBnL2W2CsuY1qpwjZP7s/edit?usp=sharing) 
  
## Tip from us😇  
It always takes time to understand and learn. So, do not worry at all. We know **you have got this**!💪