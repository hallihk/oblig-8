import sanityClient from '@sanity/client'

const options = {
    projectId: "idh615gy",
    dataset: "production",
    apiVersion: '2021-08-31',
}
const client = sanityClient({
    ...options,
    useCdn: false,
  })

export default client