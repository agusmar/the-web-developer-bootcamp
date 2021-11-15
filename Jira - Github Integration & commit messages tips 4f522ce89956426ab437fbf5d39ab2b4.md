# Jira - Github Integration & commit messages tips

# Pass it on

### Endava Training 2021

There is a common saying that you may have heard:

> “The best developers are lazy”.
> 

What this is really saying is that the best developers will always **optimize** their time **by automating repetitive tasks**.

**Integrate with development tools**

Connecting Jira Software to compatible development tools provides your team with a range of functionality and information related to your development work.

## **How it works**

When development tools are integrated with Jira Software, a developer simply needs to supply an issue key for the issue to be automatically linked:

- Commits are linked automatically if the issue key is included in the commit message.
- Branches are linked automatically if the issue key is included in the branch name.
- Pull requests are linked automatically if the issue key is included in the pull request's title or in the source branch name.

![Untitled](Jira%20-%20Github%20Integration%20&%20commit%20messages%20tips%204f522ce89956426ab437fbf5d39ab2b4/Untitled.png)

Follow this [**documentation**](https://support.atlassian.com/jira-cloud-administration/docs/integrate-with-github/) to configure the integration with Github

# Why use a commit message convention?

### **Better collaboration across committers**

It is important to **communicate** the nature of changes in your projects in order to foster **transparency** to a slew of people: existing teammates, future contributors, and sometimes the public and other stakeholders. 

A well-formatted Git commit message convention is the best way to **communicate context** about a change to fellow developers (and their future selves) when requesting a peer code review. 

A commit message convention also **makes it easier to explore** a more structured commit **history** and understand which **notable changes** have been made between each release (or version) of the project.

### **1. Adopt good practices**

This approach is about setting a simple and easy guideline, which is good for getting folks get used to the idea of having a convention. It's also good when you work with many junior developers on the team. 

1. Have a **commit message** 
2. Use the imperative mood in the subject line. *Imperative mood* just means “spoken or written as if giving a command or instruction
    
    The imperative can sound a little rude; that’s why we don’t often use it. But it’s perfect for Git commit subject lines. One reason for this is that **Git itself uses the imperative whenever it creates a commit on your behalf**.
    
    For example, the default message created when using `git merge` reads:
    
    `Merge branch 'myfeature'`
    
3. Keep a s**hort subject line** – long subjects won’t look good when executing some git commands. Limit the subject line to **50 characters.**
4. **Don’t end the subject line with a period** – it’s unnecessary. Especially when you are trying to keep the commit title to under 50 characters.
5. **Start with a capital letter** – straight from the [source](https://chris.beams.io/posts/git-commit/#capitalize): “this is as simple as it sounds. Begin all subject lines with a capital letter”.
6. **Link to an issue tracker** – if you are working with an issue tracking system (like Jira), it is important to create a logical link between the issue ticket number and the subsequent code change.

Specify the type of commit:

**feat:** The new feature you're adding to a particular application

**fix:** A bug fix

**style:** Feature and updates related to styling

**refactor:** Refactoring a specific section of the codebase

**test:** Everything related to testing

**docs:** Everything related to documentation

**chore:** Regular code maintenance.

References

- [https://support.atlassian.com/jira-cloud-administration/docs/integrate-with-development-tools/](https://support.atlassian.com/jira-cloud-administration/docs/integrate-with-development-tools/)
- [https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/)
- [https://chris.beams.io/posts/git-commit/](https://chris.beams.io/posts/git-commit/)