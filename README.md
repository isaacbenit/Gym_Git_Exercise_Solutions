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


```
second exercise

```

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git status
On branch dev
Your branch is up to date with 'origin/dev'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        home.html

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash
No local changes to save
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash list
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash
No local changes to save
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git status
On branch dev
Your branch is up to date with 'origin/dev'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        home.html

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git add .
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash
Saved working directory and index state WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash list
stash@{0}: WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git add .
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash
Saved working directory and index state WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash list
stash@{0}: WIP on dev: 7a6d17e the changes made to create a pr
stash@{1}: WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git add .
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash
Saved working directory and index state WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash list
stash@{0}: WIP on dev: 7a6d17e the changes made to create a pr
stash@{1}: WIP on dev: 7a6d17e the changes made to create a pr
stash@{2}: WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop
On branch dev
Your branch is up to date with 'origin/dev'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   team.html

Dropped refs/stash@{0} (90c00e7d0410d3a2e5982921dfe7c1f2cd95a749)
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash
Saved working directory and index state WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash list
stash@{0}: WIP on dev: 7a6d17e the changes made to create a pr
stash@{1}: WIP on dev: 7a6d17e the changes made to create a pr
stash@{2}: WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop stash@{0}
error: unknown switch `e'
usage: git stash pop [--index] [-q | --quiet] [<stash>]

    -q, --[no-]quiet      be quiet, only report errors
    --[no-]index          attempt to recreate the index

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop stash@{0}
error: unknown switch `e'
usage: git stash pop [--index] [-q | --quiet] [<stash>]

    -q, --[no-]quiet      be quiet, only report errors
    --[no-]index          attempt to recreate the index

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop stash@{1}
error: unknown switch `e'
usage: git stash pop [--index] [-q | --quiet] [<stash>]

    -q, --[no-]quiet      be quiet, only report errors
    --[no-]index          attempt to recreate the index

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash lis
fatal: subcommand wasn't specified; 'push' can't be assumed due to unexpected token 'lis'
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash list
stash@{0}: WIP on dev: 7a6d17e the changes made to create a pr
stash@{1}: WIP on dev: 7a6d17e the changes made to create a pr
stash@{2}: WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop stash@{0}
error: unknown switch `e'
usage: git stash pop [--index] [-q | --quiet] [<stash>]

    -q, --[no-]quiet      be quiet, only report errors
    --[no-]index          attempt to recreate the index

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash clear        
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash list
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git app .
git: 'app' is not a git command. See 'git --help'.

The most similar command is
        apply
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git add .
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash
Saved working directory and index state WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git add .
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash
Saved working directory and index state WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git add .
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash
Saved working directory and index state WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash
No local changes to save
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash list
stash@{0}: WIP on dev: 7a6d17e the changes made to create a pr
stash@{1}: WIP on dev: 7a6d17e the changes made to create a pr
stash@{2}: WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop
On branch dev
Your branch is up to date with 'origin/dev'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   team.html

Dropped refs/stash@{0} (b56652a001d5656ccbb519cdd9b4d31739ac8557)
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash
Saved working directory and index state WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop stash@{0}
error: unknown switch `e'
usage: git stash pop [--index] [-q | --quiet] [<stash>]

    -q, --[no-]quiet      be quiet, only report errors
    --[no-]index          attempt to recreate the index

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash apply stash@{0}
error: unknown switch `e'
usage: git stash apply [--index] [-q | --quiet] [<stash>]

    -q, --[no-]quiet      be quiet, only report errors
    --[no-]index          attempt to recreate the index

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> 
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> 
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop stash@{1} 
error: unknown switch `e'
usage: git stash pop [--index] [-q | --quiet] [<stash>]

    -q, --[no-]quiet      be quiet, only report errors
    --[no-]index          attempt to recreate the index

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop stash@{1}               
error: unknown switch `e'
usage: git stash pop [--index] [-q | --quiet] [<stash>]

    -q, --[no-]quiet      be quiet, only report errors
    --[no-]index          attempt to recreate the index

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop stash@{2}
error: unknown switch `e'
usage: git stash pop [--index] [-q | --quiet] [<stash>]

    -q, --[no-]quiet      be quiet, only report errors
    --[no-]index          attempt to recreate the index

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop "stash@{2}" 
On branch dev
Your branch is up to date with 'origin/dev'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   home.html

Dropped stash@{2} (f9e1ca698a26fbbbb149ed973c7f4e42d3c77337)
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop "stash@{1}"
On branch dev
Your branch is up to date with 'origin/dev'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   about.html
        new file:   home.html

Dropped stash@{1} (86a85a605bf6d3bceea5e35d3da89a9a921ca61f)
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git commit -m 'the second exercises'
[dev a0bd493] the second exercises
 2 files changed, 22 insertions(+)
 create mode 100644 about.html
 create mode 100644 home.html
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 522 bytes | 104.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
remote: This repository moved. Please use the new location:
remote:   https://github.com/isaacbenit/Gym_Git_Exercise_Solutions.git
To https://github.com/isaacbenit/git-exercises.git
   7a6d17e..a0bd493  dev -> dev
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash list
stash@{0}: WIP on dev: 7a6d17e the changes made to create a pr
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash pop "stash@{0}"
On branch dev
Your branch is up to date with 'origin/dev'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   team.html

Dropped stash@{0} (13918648162830666367d016d43a6a87dcf0bdae)
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git reset
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git stash list
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git status    
On branch dev
Your branch is up to date with 'origin/dev'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        team.html

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git reset
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git status
On branch dev
Your branch is up to date with 'origin/dev'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        team.html

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git reset 
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git status
On branch dev
Your branch is up to date with 'origin/dev'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        team.html

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git add .
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git status
On branch dev
Your branch is up to date with 'origin/dev'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   team.html

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git reset 
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git status
On branch dev
Your branch is up to date with 'origin/dev'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        team.html

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises>

```
bundle 2 exercise 1
```
Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'.

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch
* dev
  main
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch ft/bundle-2
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git branch
* dev
  ft/bundle-2
  main
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git switch ft/bundle-2
Switched to branch 'ft/bundle-2'
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git add
Nothing specified, nothing added.
hint: Maybe you wanted to say 'git add .'?
hint: Disable this message with "git config advice.addEmptyPathspec false"
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git add .
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git commit -m 'first changes on new repo'
[ft/bundle-2 34ded5a] first changes on new repo
 1 file changed, 11 insertions(+)
 create mode 100644 services.html
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git push
fatal: The current branch ft/bundle-2 has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin ft/bundle-2

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises> git push --set-upstream origin ft/bundle-2 
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 452 bytes | 150.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: This repository moved. Please use the new location:
remote:   https://github.com/isaacbenit/Gym_Git_Exercise_Solutions.git
remote:
remote: Create a pull request for 'ft/bundle-2' on GitHub by visiting:
remote:      https://github.com/isaacbenit/Gym_Git_Exercise_Solutions/pull/new/ft/bundle-2
remote:
To https://github.com/isaacbenit/git-exercises.git
 * [new branch]      ft/bundle-2 -> ft/bundle-2
branch 'ft/bundle-2' set up to track 'origin/ft/bundle-2'.
PS C:\Users\HP-\codes\javascript-practice-exercises\git exercises>

```
bundle 2 exercise 2
```
HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git pull
remote: Enumerating objects: 8, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 5 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (5/5), 2.46 KiB | 96.00 KiB/s, done.
From https://github.com/isaacbenit/git-exercises
   6acab32..d99463e  main       -> origin/main
Updating 6acab32..d99463e
Fast-forward
 README.md     | 54 ++++++++++++++++++++++++++++++++++++++++++++++++++++++
 about.html    | 11 +++++++++++
 home.html     | 12 ++++++++++++
 index.html    |  1 +
 services.html | 11 +++++++++++
 team.html     | 11 +++++++++++
 6 files changed, 100 insertions(+)
 create mode 100644 about.html
 create mode 100644 home.html
 create mode 100644 services.html
 create mode 100644 team.html

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git branch ft/service-redesign

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git branch
  dev
  ft/bundle-2
  ft/service-redesign
* main

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git switch ft/service-redesign
Switched to branch 'ft/service-redesign'

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git add .

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git commit -m 'this are new changes'
[ft/service-redesign 3ff1508] this are new changes
 1 file changed, 1 insertion(+)

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git push
fatal: The current branch ft/service-redesign has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin ft/service-redesign

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.


HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git push --set-upstream origin ft/service-redesign
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 375 bytes | 187.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: This repository moved. Please use the new location:
remote:   https://github.com/isaacbenit/Gym_Git_Exercise_Solutions.git
remote:
remote: Create a pull request for 'ft/service-redesign' on GitHub by visiting:
remote:      https://github.com/isaacbenit/Gym_Git_Exercise_Solutions/pull/new/ft/service-redesign
remote:
To https://github.com/isaacbenit/git-exercises.git
 * [new branch]      ft/service-redesign -> ft/service-redesign
branch 'ft/service-redesign' set up to track 'origin/ft/service-redesign'.

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git switch main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git add .

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git commit -m 'changes made on main'
[main dc6e334] changes made on main
 1 file changed, 1 insertion(+)

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 358 bytes | 89.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: This repository moved. Please use the new location:
remote:   https://github.com/isaacbenit/Gym_Git_Exercise_Solutions.git
To https://github.com/isaacbenit/git-exercises.git
   d99463e..dc6e334  main -> main

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git checkout ft/service-redesig
error: pathspec 'ft/service-redesig' did not match any file(s) known to git

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git branch
  dev
  ft/bundle-2
  ft/service-redesign
* main

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git checkout ft/service-redesign
Switched to branch 'ft/service-redesign'
Your branch is up to date with 'origin/ft/service-redesign'.

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git diff

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git diff main..ft/service-redesign
diff --git a/services.html b/services.html
index be83262..23754ec 100644
--- a/services.html
+++ b/services.html
@@ -7,6 +7,6 @@
 </head>
 <body>
     <h1>services</h1>
-    <p>This are the changes made on main</p>
+    <p>this is a new paragraph to compare the changes</p>
 </body>
 </html>
\ No newline at end of file
...skipping...
diff --git a/services.html b/services.html
index be83262..23754ec 100644
--- a/services.html
+++ b/services.html
@@ -7,6 +7,6 @@
 </head>
 <body>
     <h1>services</h1>
-    <p>This are the changes made on main</p>
+    <p>this is a new paragraph to compare the changes</p>
 </body>
 </html>
\ No newline at end of file
...skipping...
diff --git a/services.html b/services.html
index be83262..23754ec 100644
--- a/services.html
+++ b/services.html
@@ -7,6 +7,6 @@
 </head>
 <body>
     <h1>services</h1>
-    <p>This are the changes made on main</p>
+    <p>this is a new paragraph to compare the changes</p>
 </body>
 </html>
\ No newline at end of file
(END)
```
BUndle 2 exercise 2
```
HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git pull
remote: Enumerating objects: 8, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 5 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (5/5), 2.46 KiB | 96.00 KiB/s, done.
From https://github.com/isaacbenit/git-exercises
   6acab32..d99463e  main       -> origin/main
Updating 6acab32..d99463e
Fast-forward
 README.md     | 54 ++++++++++++++++++++++++++++++++++++++++++++++++++++++
 about.html    | 11 +++++++++++
 home.html     | 12 ++++++++++++
 index.html    |  1 +
 services.html | 11 +++++++++++
 team.html     | 11 +++++++++++
 6 files changed, 100 insertions(+)
 create mode 100644 about.html
 create mode 100644 home.html
 create mode 100644 services.html
 create mode 100644 team.html

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git branch ft/service-redesign

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git branch
  dev
  ft/bundle-2
  ft/service-redesign
* main

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git switch ft/service-redesign
Switched to branch 'ft/service-redesign'

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git add .

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git commit -m 'this are new changes'
[ft/service-redesign 3ff1508] this are new changes
 1 file changed, 1 insertion(+)

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git push
fatal: The current branch ft/service-redesign has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin ft/service-redesign

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.


HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git push --set-upstream origin ft/service-redesign
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 375 bytes | 187.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: This repository moved. Please use the new location:
remote:   https://github.com/isaacbenit/Gym_Git_Exercise_Solutions.git
remote:
remote: Create a pull request for 'ft/service-redesign' on GitHub by visiting:
remote:      https://github.com/isaacbenit/Gym_Git_Exercise_Solutions/pull/new/ft/service-redesign
remote:
To https://github.com/isaacbenit/git-exercises.git
 * [new branch]      ft/service-redesign -> ft/service-redesign
branch 'ft/service-redesign' set up to track 'origin/ft/service-redesign'.

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git switch main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git add .

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git commit -m 'changes made on main'
[main dc6e334] changes made on main
 1 file changed, 1 insertion(+)

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 358 bytes | 89.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: This repository moved. Please use the new location:
remote:   https://github.com/isaacbenit/Gym_Git_Exercise_Solutions.git
To https://github.com/isaacbenit/git-exercises.git
   d99463e..dc6e334  main -> main

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git checkout ft/service-redesig
error: pathspec 'ft/service-redesig' did not match any file(s) known to git

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git branch
  dev
  ft/bundle-2
  ft/service-redesign
* main

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git checkout ft/service-redesign
Switched to branch 'ft/service-redesign'
Your branch is up to date with 'origin/ft/service-redesign'.

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git diff

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git diff main..ft/service-redesign
diff --git a/services.html b/services.html
index be83262..23754ec 100644
--- a/services.html
+++ b/services.html
@@ -7,6 +7,6 @@
 </head>
 <body>
     <h1>services</h1>
-    <p>This are the changes made on main</p>
+    <p>this is a new paragraph to compare the changes</p>
 </body>
 </html>
\ No newline at end of file
...skipping...
diff --git a/services.html b/services.html
index be83262..23754ec 100644
--- a/services.html
+++ b/services.html
@@ -7,6 +7,6 @@
 </head>
 <body>
     <h1>services</h1>
-    <p>This are the changes made on main</p>
+    <p>this is a new paragraph to compare the changes</p>
 </body>
 </html>
\ No newline at end of file
...skipping...
diff --git a/services.html b/services.html
index be83262..23754ec 100644
--- a/services.html
+++ b/services.html
@@ -7,6 +7,6 @@
 </head>
 <body>
     <h1>services</h1>
-    <p>This are the changes made on main</p>
+    <p>this is a new paragraph to compare the changes</p>
 </body>
 </html>
\ No newline at end of file

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (ft/service-redesign)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git merge ft/service-redesign
Auto-merging services.html
CONFLICT (content): Merge conflict in services.html
Automatic merge failed; fix conflicts and then commit the result.

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main|MERGING)
$ git commit -m 'commiting the merged changes'
U       services.html
error: Committing is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
hint: as appropriate to mark resolution and make a commit.
fatal: Exiting because of an unresolved conflict.

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main|MERGING)
$ git merge ft/service-redesign
error: Merging is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
hint: as appropriate to mark resolution and make a commit.
fatal: Exiting because of an unresolved conflict.

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main|MERGING)
$ git diff
diff --cc services.html
index be83262,23754ec..0000000
--- a/services.html
+++ b/services.html
@@@ -7,6 -7,6 +7,7 @@@
  </head>
  <body>
      <h1>services</h1>
 +    <p>This are the changes made on main</p>
+     <p>this is a new paragraph to compare the changes</p>
  </body>
  </html>

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main|MERGING)
$ git add .
warning: in the working copy of 'landingpage/landing-vpn/.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'landingpage/landing-vpn/README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'landingpage/landing-vpn/eslint.config.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'landingpage/landing-vpn/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'landingpage/landing-vpn/package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'landingpage/landing-vpn/package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'landingpage/landing-vpn/src/App.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'landingpage/landing-vpn/src/App.jsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'landingpage/landing-vpn/src/main.jsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'landingpage/landing-vpn/vite.config.js', LF will be replaced by CRLF the next time Git touches it

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main|MERGING)
$ git commit -m 'commiting the merged changes'
[main cf81bdc] commiting the merged changes

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git push 
To https://github.com/isaacbenit/git-exercises.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/isaacbenit/git-exercises.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git pull
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (3/3), 1.90 KiB | 62.00 KiB/s, done.
From https://github.com/isaacbenit/git-exercises
   dc6e334..5a64f07  main       -> origin/main
hint: Waiting for your editor to close the file... 
Merge made by the 'ort' strategy.
 README.md | 166 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 166 insertions(+)

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
$ git push
Enumerating objects: 33, done.
Counting objects: 100% (32/32), done.
Delta compression using up to 8 threads
Compressing objects: 100% (24/24), done.
Writing objects: 100% (27/27), 114.50 KiB | 1.71 MiB/s, done.
Total 27 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), completed with 2 local objects.
remote: This repository moved. Please use the new location:
remote:   https://github.com/isaacbenit/Gym_Git_Exercise_Solutions.git
To https://github.com/isaacbenit/git-exercises.git
   5a64f07..67febde  main -> main

HP-@isaacb24 MINGW64 ~/codes/javascript-practice-exercises/git exercises (main)
