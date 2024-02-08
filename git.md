# Git

ring release-developers maintain seperate code for 10k dev branch and master branch for 10m people

feature branch->developer branch->master branch;

```


git branch -D branch_name

git log --graph

git fetch --a

git merge f2   ->(go to f1 and give this command so f1 will have the extra code of f2)

git remote show origin
```

staging(testing team will test)

```
git rebase -i
how to edit commit
what is the use of fork

```

### git rebase

`git rebase master`

- (rebase on feature branch with master )

- when we give git rebase the commits on feature branch will go to the top of the latest commit on master branch
- usually we have to rebase the feature and merge the master with rebase

### git rebase -i

`git rebase -i HEAD~3`

- (LIKE LINKED LIST GO TO 3rd commit)
- i means interactive where we can do the below operations and more
- p->pick,r->rewok,e->edit,d->drop

## delete commit

### reset

`git reset --soft HEAD~1`

- It will be in stagged

` git reset --hard HEAD~1`

### revert

`git revert commit_id`

- it will create one commit as commit deteted
- actually removes all the changes done as a part of that commit

## git fork

A fork in git is simply copy of repository to a new owner

- go to github and search for owner repository
- add files to the repository and give commit cahnges
- it will ask pull request for owner
- after that repo will be forked

### command line arguments

git checkout -b branch name

git checkout -m "commit msg"

git add . --->to stage

git checkout - ---->back to feature branch

git merge feature (fast forward statergy)

# VIM

# 3 modes

- normal mode(esc)
- insert mode(i)
- command mode(:)->>>(:wq)w for write and q for quit

cw-change word,u-undo

git rebase continue

- git stash (undo changes)
- git stash apply
