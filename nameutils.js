const baseGqlEndpointName = "GraphQlApi";
const baseAPIKeyResourceName = "GraphQlApiKeyDefault";
const baseGqlSchemaResourceName = "GraphQlSchema";
const baseDataSourceName = "GraphQlDs";
const baseGqlResolverName = "GraphQlResolver";
const baseGqlApiUrl = "GraphQlApiUrl";
const getGqlEndpointName = config => {
  if (!config.gqlEndpointName) {
    const i = config.index || "";
    return baseGqlEndpointName + i;
  }
  return config.gqlEndpointName;
};
const getAPIKeyResourceName = config => {
  if (!config.apiKeyResourceName) {
    const i = config.index || "";
    return baseAPIKeyResourceName + i;
  }
  return config.apiKeyResourceName;
};
const getGqlSchemaResourceName = config => {
  if (!config.schemaResourceName) {
    const i = config.index || "";
    return baseGqlSchemaResourceName + i;
  }
  return config.schemaResourceName;
};
const getDataSourceName = config => {
  if (!config.dataSourceName) {
    const i = config.index || "";
    return baseDataSourceName + i;
  }
  return config.dataSourceName;
};
const getResolverName = config => {
  if (!config.resolverName) {
    const i = config.index || "";
    return baseGqlResolverName + i;
  }
  return config.resolverName;
};
const getGqlAPIUrl = config => {
  if (!config.gqlApiUrl) {
    const i = config.index || "";
    return baseGqlApiUrl + i;
  }
  return config.gqlApiUrl;
};

module.exports = {
  getGqlEndpointName,
  getAPIKeyResourceName,
  getGqlSchemaResourceName,
  getDataSourceName,
  getResolverName,
  getGqlAPIUrl
};
