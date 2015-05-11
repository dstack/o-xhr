# o-he-xhr

### Deploying for the first time

1. Create a new repository (tipically: on GitHub)
2. Delete the existing Git directory: `rm -Rf .git`
3. Initialise a new local Git repository: `git init .`
4. Add the remote repository:

  ```
  git remote add origin ssh://git@devops-tools.pearson.com/~vmoliju/o-he-xhr.git
  ```
5. Test and verify: `obt test && obt verify` (and fix the code raising errors)
6. Commit and push: `git add . && git commit -m "Initial commit" && git push origin master`

## License

This software is published by Pearson Higher Education under the [MIT licence](http://opensource.org/licenses/MIT).
