import { graphql } from "@/gql"; 

 // prettier-ignore 
export const CreateAgent = graphql(/* GraphQL */ `mutation CreateAgent($id: ID!, $users_id: ID!, $address: JSON) {\n  createAgent(id: $id, users_id: $users_id, address: $address) {\n    ...AgentFragment\n  }\n}`);
 // prettier-ignore 
export const RemoveAgent = graphql(/* GraphQL */ `mutation RemoveAgent($id: ID!) {\n  removeAgent(id: $id)\n}`);
 // prettier-ignore 
export const UpdateAgent = graphql(/* GraphQL */ `mutation UpdateAgent($id: ID!, $users_id: ID!, $address: JSON) {\n  updateAgent(id: $id, users_id: $users_id, address: $address) {\n    ...AgentFragment\n  }\n}`);
 // prettier-ignore 
export const CreateChannel = graphql(/* GraphQL */ `mutation CreateChannel($id: ID!, $url: String, $name: String, $priority: String, $rooms_id: [ID]) {\n  createChannel(\n    id: $id\n    url: $url\n    name: $name\n    priority: $priority\n    rooms_id: $rooms_id\n  ) {\n    ...ChannelFragment\n  }\n}`);
 // prettier-ignore 
export const RemoveChannel = graphql(/* GraphQL */ `mutation RemoveChannel($id: ID!) {\n  removeChannel(id: $id)\n}`);
 // prettier-ignore 
export const UpdateChannel = graphql(/* GraphQL */ `mutation UpdateChannel($id: ID!, $url: String, $name: String, $priority: String, $rooms_id: [ID]) {\n  updateChannel(\n    id: $id\n    url: $url\n    name: $name\n    priority: $priority\n    rooms_id: $rooms_id\n  ) {\n    ...ChannelFragment\n  }\n}`);
 // prettier-ignore 
export const CreateCompany = graphql(/* GraphQL */ `mutation CreateCompany($id: ID!, $name: String) {\n  createCompany(id: $id, name: $name) {\n    ...CompanyFragment\n  }\n}`);
 // prettier-ignore 
export const RemoveCompany = graphql(/* GraphQL */ `mutation RemoveCompany($id: ID!) {\n  removeCompany(id: $id)\n}`);
 // prettier-ignore 
export const UpdateCompany = graphql(/* GraphQL */ `mutation UpdateCompany($id: ID!, $name: String) {\n  updateCompany(id: $id, name: $name) {\n    ...CompanyFragment\n  }\n}`);
 // prettier-ignore 
export const CreateCustomer = graphql(/* GraphQL */ `mutation CreateCustomer($id: ID!, $users_id: ID!, $address: JSON) {\n  createCustomer(id: $id, users_id: $users_id, address: $address) {\n    ...CustomerFragment\n  }\n}`);
 // prettier-ignore 
export const RemoveCustomer = graphql(/* GraphQL */ `mutation RemoveCustomer($id: ID!) {\n  removeCustomer(id: $id)\n}`);
 // prettier-ignore 
export const UpdateCustomer = graphql(/* GraphQL */ `mutation UpdateCustomer($id: ID!, $users_id: ID!, $address: JSON) {\n  updateCustomer(id: $id, users_id: $users_id, address: $address) {\n    ...CustomerFragment\n  }\n}`);
 // prettier-ignore 
export const CreateDevice = graphql(/* GraphQL */ `mutation CreateDevice($id: ID!, $name: String, $type: String, $users_id: [ID], $rooms_id: [ID]) {\n  createDevice(\n    id: $id\n    name: $name\n    type: $type\n    users_id: $users_id\n    rooms_id: $rooms_id\n  ) {\n    ...DeviceFragment\n  }\n}`);
 // prettier-ignore 
export const RemoveDevice = graphql(/* GraphQL */ `mutation RemoveDevice($id: ID!) {\n  removeDevice(id: $id)\n}`);
 // prettier-ignore 
export const UpdateDevice = graphql(/* GraphQL */ `mutation UpdateDevice($id: ID!, $name: String, $type: String, $users_id: [ID], $rooms_id: [ID]) {\n  updateDevice(\n    id: $id\n    name: $name\n    type: $type\n    users_id: $users_id\n    rooms_id: $rooms_id\n  ) {\n    ...DeviceFragment\n  }\n}`);
 // prettier-ignore 
export const CreateProductTemplate = graphql(/* GraphQL */ `mutation CreateProductTemplate($id: ID!, $name: String, $items: [JSON]) {\n  createProductTemplate(id: $id, name: $name, items: $items) {\n    ...ProductTemplateFragment\n  }\n}`);
 // prettier-ignore 
export const RemoveProductTemplate = graphql(/* GraphQL */ `mutation RemoveProductTemplate($id: ID!) {\n  removeProductTemplate(id: $id)\n}`);
 // prettier-ignore 
export const UpdateProductTemplate = graphql(/* GraphQL */ `mutation UpdateProductTemplate($id: ID!, $name: String, $items: [JSON]) {\n  updateProductTemplate(id: $id, name: $name, items: $items) {\n    ...ProductTemplateFragment\n  }\n}`);
 // prettier-ignore 
export const CreateRole = graphql(/* GraphQL */ `mutation CreateRole($id: ID!, $name: String!) {\n  createRole(id: $id, name: $name) {\n    ...RoleFragment\n  }\n}`);
 // prettier-ignore 
export const RemoveRole = graphql(/* GraphQL */ `mutation RemoveRole($id: ID!) {\n  removeRole(id: $id)\n}`);
 // prettier-ignore 
export const UpdateRole = graphql(/* GraphQL */ `mutation UpdateRole($id: ID!, $name: String!) {\n  updateRole(id: $id, name: $name) {\n    ...RoleFragment\n  }\n}`);
 // prettier-ignore 
export const CreateRoom = graphql(/* GraphQL */ `mutation CreateRoom($id: ID!, $name: String, $companies_id: ID, $description: String, $customers_id: [ID], $channels_id: [ID], $agents_id: [ID], $productTemplates_id: [ID]) {\n  createRoom(\n    id: $id\n    name: $name\n    companies_id: $companies_id\n    description: $description\n    customers_id: $customers_id\n    channels_id: $channels_id\n    agents_id: $agents_id\n    productTemplates_id: $productTemplates_id\n  ) {\n    ...RoomFragment\n  }\n}`);
 // prettier-ignore 
export const RemoveRoom = graphql(/* GraphQL */ `mutation RemoveRoom($id: ID!) {\n  removeRoom(id: $id)\n}`);
 // prettier-ignore 
export const UpdateRoom = graphql(/* GraphQL */ `mutation UpdateRoom($id: ID!, $name: String, $companies_id: ID, $description: String, $customers_id: [ID], $channels_id: [ID], $agents_id: [ID], $productTemplates_id: [ID]) {\n  updateRoom(\n    id: $id\n    name: $name\n    companies_id: $companies_id\n    description: $description\n    customers_id: $customers_id\n    channels_id: $channels_id\n    agents_id: $agents_id\n    productTemplates_id: $productTemplates_id\n  ) {\n    ...RoomFragment\n  }\n}`);
 // prettier-ignore 
export const CreateUser = graphql(/* GraphQL */ `mutation CreateUser($id: ID!, $lastName: String, $firstName: String, $companies_id: ID, $email: String, $password: String, $authenticated: String, $roles_id: ID) {\n  createUser(\n    id: $id\n    lastName: $lastName\n    firstName: $firstName\n    companies_id: $companies_id\n    email: $email\n    password: $password\n    authenticated: $authenticated\n    roles_id: $roles_id\n  ) {\n    ...UserFragment\n  }\n}`);
 // prettier-ignore 
export const RemoveUser = graphql(/* GraphQL */ `mutation RemoveUser($id: ID!) {\n  removeUser(id: $id)\n}`);
 // prettier-ignore 
export const UpdateUser = graphql(/* GraphQL */ `mutation UpdateUser($id: ID!, $lastName: String, $firstName: String, $companies_id: ID, $email: String, $password: String, $authenticated: String, $roles_id: ID) {\n  updateUser(\n    id: $id\n    lastName: $lastName\n    firstName: $firstName\n    companies_id: $companies_id\n    email: $email\n    password: $password\n    authenticated: $authenticated\n    roles_id: $roles_id\n  ) {\n    ...UserFragment\n  }\n}`);