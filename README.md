# Cloud-Portfolio
Portfolio website on Azure cloud infrastructure, driven by CI/CD pipelines in GitHub.

### Project Overview
This website project demonstrates DevSecOps practices by using GitHub to perform version control, SAST scanning, and deployment to an Azure Static Web App via GitHub Actions. It also serves as my personal project portfolio and web resume. This will be an evolving project for me to continue developing CI/CD and web development skills.

### Architecture
This website project is a hand-coded HTML/CSS/Javascript site. It does not use any frameworks or generation tools. It is deployed via GitHub Actions to an Azure Static Web App deployed by my [Terraform-Azure repo](https://github.com/packetFury/terraform-azuris) as part of my own spin on the [Cloud Resume Challenge](https://cloudresumechallenge.dev/).

### Security Design Decisions
The Azure infrastructure is deployed via Terraform to practice Infrastructure as Code and to create a standardized template for Azure deployments that can be easily translated to AWS. This will make translating this project to AWS much simpler when the time comes. The eventual plan is to demonstrate multi-cloud fluency by maintaining both an Azure and AWS version of this project, and possibly a Google Cloud Platform version in the near future.

The GitHub Actions workflow first analyzes the code using the CodeQL SAST tool. Then, once the tests have all passed and no critical or high severity issues have been identified, it deploys the application to the Azure Static Web App.

This project has Branch Protection Rules set up to forbid direct commits to Main and to require that the SAST tests were successful before allowing a Pull Request to be merged to the main branch.
