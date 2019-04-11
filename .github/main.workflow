workflow "New workflow" {
  resolves = [
    "Filter on Master",
    "NPM Install",
    "NPM Publish",
  ]
  on = "push"
}

action "Filter on Master" {
  uses = "actions/bin/filter@3c98a2679187369a2116d4f311568596d3725740"
  args = "branch master"
}

action "NPM Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = "Filter on Master"
  args = "ci"
}

action "NPM Publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = "NPM Install"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
