- planning
- analysis
- design
- implementaion
- testing and integration
- maintanability

# pro manager

- talk to client
- domain expert
- call and ask system architech whether this feature is possible or not

## system architech after approveve

designer draw wired diagram of feature

## head of engineer

approve the coding is possible

## developers

## tester

## developers

## tester

## devops

### client

rise a ticket that will go to support team
and then to developer to tester to devops

# Agile

implementation of agile is scrum

14 days will be one sprints

retrospective-after 14 days what can be improved

blocker-due to some reason cannot do task

overflow /spill over-if task 1 is not completed in one sprint'
adhok request-urgent request

backlog-if work is not completed/yet to start

sprint planning(1 hour)-> story point(assigning work)

## kanban board

backlog(plan)->in progress(design)->peer review(test)->done.

# Git

ring release-developers maintain seperate code for 10k dev branch and master branch for 10m people

feature branch->developer branch->master branch;

```
git fetch --a

git branch -D branch_name

git log --graph

git merge f2   ->(go to f1 and give this command so f1 will have the extra code of f2)

git remote show origin

```

staging(testing team will test)

```
git rebase -i
how to edit commit
what is the use of fork

```

git checkout -b branch name

git checkout -m "commit msg"

git add . --->to stage

git checkout - ---->back to feature branch

git rebase master (rebase on feature branch with master )

git merge feature (fast forward statergy)

delete
git reset --soft HEAD~1(IT WILL BE IN STAGGED)

git revert commit_id (it will create one commit as commit deteted)

to delete middle commit

git rebase -i HEAD~3 (LIKE LINKED LIST GO TO 3rd commit)

p->pick,r->rewok,e->edit,d->drop

# VIM

# 3 modes

- normal mode(esc)
- insert mode(i)
- command mode(:)->>>(:wq)w for write and q for quit

cw-change word,u-undo

git rebase continue
