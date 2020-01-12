import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin, AmplifyEventBus } from 'aws-amplify-vue'
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions'
import awsconfig from '../aws-exports'
Amplify.configure(awsconfig)
Amplify.addPluggable(new AmazonAIPredictionsProvider())

export default async ({
  router,
  Vue
}) => {
  Vue.use(AmplifyPlugin, AmplifyModules)
  Vue.prototype.$AmplifyEventBus = AmplifyEventBus
}
