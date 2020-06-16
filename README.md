# Amplify Demo (amplify-demo-awsug)

App built for the Singapore AWS User Group presentation on 16th June 2020.

## Before you start
* AWS CLI
* At least 1 profile configured in AWS CLI
* nodejs 12
* Quasar CLI: `npm -g @quasar/cli`
* Amplify CLI: `npm -g @aws-amplify/cli`
* Amplify configured: `amplify configure`

## Bootstrap the app
```bash
git clone https://github.com/DanielMuller/amplify-demo-awsug.git
cd amplify-demo-awsug
npm ci
amplify init
# Choose a name for the environment
# Editor: choose yours
# Do you want to use an AWs Profile? Yes
# Please choose the profile you want to use: default
# Do you want to configure Lambda Triggers for Cognito? n
amplify status
```

## Deploy the infra
```bash
amplify push
```
Since there is no _hosting_ defined, this will only deploy the infra.

Either you add hosting with `s3 add hosting`, or you publish the code to a repo and connect it to `Amplify Console`.

## Open the console
```bash
amplify console
```
Connect your repo to your project.

### Rewrite and Redirect
* Source address: `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/>`
* Target address: `/index.html`
* Type: `200 (Rewrite)`

## Tell Amplify to build

## Open the URL
In the general tab, open the application URL and start playing.

## Delete your stack
```bash
amplify delete
```
