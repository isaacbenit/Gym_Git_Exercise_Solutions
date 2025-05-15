// the following are the codes use to perform the all requirements in the exercise
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git init
Initialized empty Git repository in C:/Users/HP-/codes/javascript-practice-exercises/git exercises/.git/
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git add .
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   index.html

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git commit -m "first commit"
[master (root-commit) 2871fd4] first commit
 1 file changed, 11 insertions(+)
 create mode 100644 index.html
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch -M main
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git remote add origin https://github.com/isaacbenit/git-exercises.git
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git push -u origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 383 bytes | 22.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/isaacbenit/git-exercises.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch
* main
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch -m main master
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch
* master
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch -m master main
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch 
* main
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch dev
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch 
  dev
* main
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git switch dev
Switched to branch 'dev'
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch
* dev
  main
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git test
git: 'test' is not a git command. See 'git --help'.

The most similar command is
        reset
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch test
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git brach
git: 'brach' is not a git command. See 'git --help'.

The most similar command is
        branch
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch
* dev
  main
  test
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git switch test
Switched to branch 'test'
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git -d test
unknown option: -d
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--no-lazy-fetch]
           [--no-optional-locks] [--no-advice] [--bare] [--git-dir=<path>]
           [--work-tree=<path>] [--namespace=<name>] [--config-env=<name>=<envvar>]
           <command> [<args>]
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git switch dev 
Switched to branch 'dev'
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch -d test
Deleted branch test (was 2871fd4).
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git add .
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git commit -m 'first commit'
On branch dev
nothing to commit, working tree clean
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git push
fatal: The current branch dev has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin dev

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git push --set-upstream origin dev
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote: 
remote: Create a pull request for 'dev' on GitHub by visiting:
remote:      https://github.com/isaacbenit/git-exercises/pull/new/dev
remote:
To https://github.com/isaacbenit/git-exercises.git
 * [new branch]      dev -> dev
branch 'dev' set up to track 'origin/dev'.
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git pull
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (3/3), 1001 bytes | 83.00 KiB/s, done.
From https://github.com/isaacbenit/git-exercises
   2871fd4..16b9ad5  main       -> origin/main
Already up to date.
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch
* dev
  main
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git switch main
Switched to branch 'main'
Your branch is behind 'origin/main' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git pull
Updating 2871fd4..16b9ad5
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> 