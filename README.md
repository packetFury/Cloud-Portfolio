# Cloud-Portfolio
Portfolio website on Azure cloud infrastructure, driven by CI/CD pipelines in GitHub.

### Project Overview
This website project demonstrates DevSecOps practices by using GitHub to perform version control, SAST scanning, and deployment to an Azure Static Web App via GitHub Actions. It also serves as my personal project portfolio and web resume. This will be an evolving project for me to continue developing CI/CD and web development skills.

### Architecture
This website project is a hand-coded HTML/CSS/Javascript site. It does not use any frameworks or generation tools. It is deployed via GitHub Actions to an Azure Static Web App deployed by my [Terraform-Azure repo](https://github.com/packetFury/terraform-azuris) as part of my own spin on the [Cloud Resume Challenge](https://cloudresumechallenge.dev/).

#### Why Hand-Code?
Mostly to reinforce the foundational web development skills I picked up years ago, partly out of vanity. This website is simple and static, and will not take much, if any, user input. A web framework would be overkill. Besides, manually figuring out the UX design is fun!

### Security Design Decisions
The Azure infrastructure is deployed via Terraform to practice Infrastructure as Code and to create a standardized template for Azure deployments that can be easily translated to AWS. This will make translating this project to AWS much simpler when the time comes. The eventual plan is to demonstrate multi-cloud fluency by maintaining both an Azure and AWS version of this project, and possibly a Google Cloud Platform version in the near future.

The GitHub Actions workflow first analyzes the Pull Request using the CodeQL SAST tool. Then, once the tests have all passed and no critical or high severity issues have been identified, it allows the PR to be merged with the Main branch. The Main branch is also scanned with the SAST tool before final deployment to Azure.

#### Why Scan Twice?
The PR only contains the code that was changed. In a "shift-left" philosophy, this acts as a preventative measure to stop inherently vulnerable code from hitting the Main branch's commit history.

However, there can be unforeseen new semantic vulnerabilities that arise from merging the new code with the old Main branch. For this reason, I chose to run SAST both on the PR and on the Main commit to minimize the chances that vulnerable code would be pushed to the web app.

#### Branch Protection
This project has Branch Protection Rules set up to forbid direct commits to Main and to require that the SAST tests were successful before allowing a Pull Request to be merged to the main branch.

## TODO:
* Finish default CSS theme and layout
* Switch Gallery page to a database-driven system instead of hardcoding each project thumbnail
* Set up Gallery sub-pages to give a brief synopsis of each project instead of directly linking to the repo
* Design a better layout for the Experience page so it's not a marathon of walls of text
* Implement a backend visitor counter that tracks unique visitors in the last 30 days
* Finalize CSS for proper reactive design
* Develop alternative styles and layouts and allow the user to choose them
* Spin up the AWS version of this project
