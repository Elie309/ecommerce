---
created: 2023-07-31T21:10:47.252Z
updated: 2023-07-31T21:17:43.215Z
assigned: ""
progress: 0
tags: []
due: 2023-08-05T00:00:00.000Z
started: 2023-08-01T00:00:00.000Z
---

# Remove the new feature of the createSwitchRouter

I want to remove the createSwitchRouter the new feature of the react router, because it reloads the page 
ANd the best way to diminish the authProvider user is not by reloading the page and keep needing the data

So remove this

Instead of actions or loader (use effect and onSubmit should do the job)
