/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
export const documents = {
    "fragment AddressFragment on Address {\n  zip\n  street\n  city\n}": types.AddressFragmentFragmentDoc,
    "fragment AgentFragment on Agent {\n  id\n  address\n  User {\n    ...UserFragment\n  }\n}": types.AgentFragmentFragmentDoc,
    "fragment ChannelFragment on Channel {\n  id\n  priority\n  url\n  name\n}": types.ChannelFragmentFragmentDoc,
    "fragment CompanyFragment on Company {\n  id\n  name\n}": types.CompanyFragmentFragmentDoc,
    "fragment CustomerFragment on Customer {\n  id\n  address\n  User {\n    ...UserFragment\n  }\n}": types.CustomerFragmentFragmentDoc,
    "fragment DeviceFragment on Device {\n  id\n  name\n  type\n  Users {\n    ...UserFragment\n  }\n  Rooms {\n    ...RoomFragment\n  }\n}": types.DeviceFragmentFragmentDoc,
    "fragment ProductTemplateFragment on ProductTemplate {\n  id\n  name\n  items\n}": types.ProductTemplateFragmentFragmentDoc,
    "fragment RoleFragment on Role {\n  id\n  name\n}": types.RoleFragmentFragmentDoc,
    "fragment RoomFragment on Room {\n  id\n  name\n  description\n  startedAt\n  endedAt\n  Agents {\n    ...AgentFragment\n  }\n  Channels {\n    ...ChannelFragment\n  }\n  Company {\n    ...CompanyFragment\n  }\n  Customers {\n    ...CustomerFragment\n  }\n  ProductTemplates {\n    ...ProductTemplateFragment\n  }\n}": types.RoomFragmentFragmentDoc,
    "fragment UserFragment on User {\n  id\n  firstName\n  lastName\n  email\n  password\n  authenticated\n  Company {\n    ...CompanyFragment\n  }\n  Role {\n    ...RoleFragment\n  }\n}": types.UserFragmentFragmentDoc,
    "mutation CreateAgent($id: ID!, $users_id: ID!, $address: JSON) {\n  createAgent(id: $id, users_id: $users_id, address: $address) {\n    ...AgentFragment\n  }\n}": types.CreateAgentDocument,
    "mutation RemoveAgent($id: ID!) {\n  removeAgent(id: $id)\n}": types.RemoveAgentDocument,
    "mutation UpdateAgent($id: ID!, $users_id: ID!, $address: JSON) {\n  updateAgent(id: $id, users_id: $users_id, address: $address) {\n    ...AgentFragment\n  }\n}": types.UpdateAgentDocument,
    "mutation CreateChannel($id: ID!, $url: String, $name: String, $priority: String, $rooms_id: [ID]) {\n  createChannel(\n    id: $id\n    url: $url\n    name: $name\n    priority: $priority\n    rooms_id: $rooms_id\n  ) {\n    ...ChannelFragment\n  }\n}": types.CreateChannelDocument,
    "mutation RemoveChannel($id: ID!) {\n  removeChannel(id: $id)\n}": types.RemoveChannelDocument,
    "mutation UpdateChannel($id: ID!, $url: String, $name: String, $priority: String, $rooms_id: [ID]) {\n  updateChannel(\n    id: $id\n    url: $url\n    name: $name\n    priority: $priority\n    rooms_id: $rooms_id\n  ) {\n    ...ChannelFragment\n  }\n}": types.UpdateChannelDocument,
    "mutation CreateCompany($id: ID!, $name: String) {\n  createCompany(id: $id, name: $name) {\n    ...CompanyFragment\n  }\n}": types.CreateCompanyDocument,
    "mutation RemoveCompany($id: ID!) {\n  removeCompany(id: $id)\n}": types.RemoveCompanyDocument,
    "mutation UpdateCompany($id: ID!, $name: String) {\n  updateCompany(id: $id, name: $name) {\n    ...CompanyFragment\n  }\n}": types.UpdateCompanyDocument,
    "mutation CreateCustomer($id: ID!, $users_id: ID!, $address: JSON) {\n  createCustomer(id: $id, users_id: $users_id, address: $address) {\n    ...CustomerFragment\n  }\n}": types.CreateCustomerDocument,
    "mutation RemoveCustomer($id: ID!) {\n  removeCustomer(id: $id)\n}": types.RemoveCustomerDocument,
    "mutation UpdateCustomer($id: ID!, $users_id: ID!, $address: JSON) {\n  updateCustomer(id: $id, users_id: $users_id, address: $address) {\n    ...CustomerFragment\n  }\n}": types.UpdateCustomerDocument,
    "mutation CreateDevice($id: ID!, $name: String, $type: String, $users_id: [ID], $rooms_id: [ID]) {\n  createDevice(\n    id: $id\n    name: $name\n    type: $type\n    users_id: $users_id\n    rooms_id: $rooms_id\n  ) {\n    ...DeviceFragment\n  }\n}": types.CreateDeviceDocument,
    "mutation RemoveDevice($id: ID!) {\n  removeDevice(id: $id)\n}": types.RemoveDeviceDocument,
    "mutation UpdateDevice($id: ID!, $name: String, $type: String, $users_id: [ID], $rooms_id: [ID]) {\n  updateDevice(\n    id: $id\n    name: $name\n    type: $type\n    users_id: $users_id\n    rooms_id: $rooms_id\n  ) {\n    ...DeviceFragment\n  }\n}": types.UpdateDeviceDocument,
    "mutation CreateProductTemplate($id: ID!, $name: String, $items: [JSON]) {\n  createProductTemplate(id: $id, name: $name, items: $items) {\n    ...ProductTemplateFragment\n  }\n}": types.CreateProductTemplateDocument,
    "mutation RemoveProductTemplate($id: ID!) {\n  removeProductTemplate(id: $id)\n}": types.RemoveProductTemplateDocument,
    "mutation UpdateProductTemplate($id: ID!, $name: String, $items: [JSON]) {\n  updateProductTemplate(id: $id, name: $name, items: $items) {\n    ...ProductTemplateFragment\n  }\n}": types.UpdateProductTemplateDocument,
    "mutation CreateRole($id: ID!, $name: String!) {\n  createRole(id: $id, name: $name) {\n    ...RoleFragment\n  }\n}": types.CreateRoleDocument,
    "mutation RemoveRole($id: ID!) {\n  removeRole(id: $id)\n}": types.RemoveRoleDocument,
    "mutation UpdateRole($id: ID!, $name: String!) {\n  updateRole(id: $id, name: $name) {\n    ...RoleFragment\n  }\n}": types.UpdateRoleDocument,
    "mutation CreateRoom($id: ID!, $name: String, $companies_id: ID, $description: String, $customers_id: [ID], $channels_id: [ID], $agents_id: [ID], $productTemplates_id: [ID]) {\n  createRoom(\n    id: $id\n    name: $name\n    companies_id: $companies_id\n    description: $description\n    customers_id: $customers_id\n    channels_id: $channels_id\n    agents_id: $agents_id\n    productTemplates_id: $productTemplates_id\n  ) {\n    ...RoomFragment\n  }\n}": types.CreateRoomDocument,
    "mutation RemoveRoom($id: ID!) {\n  removeRoom(id: $id)\n}": types.RemoveRoomDocument,
    "mutation UpdateRoom($id: ID!, $name: String, $companies_id: ID, $description: String, $customers_id: [ID], $channels_id: [ID], $agents_id: [ID], $productTemplates_id: [ID]) {\n  updateRoom(\n    id: $id\n    name: $name\n    companies_id: $companies_id\n    description: $description\n    customers_id: $customers_id\n    channels_id: $channels_id\n    agents_id: $agents_id\n    productTemplates_id: $productTemplates_id\n  ) {\n    ...RoomFragment\n  }\n}": types.UpdateRoomDocument,
    "mutation CreateUser($id: ID!, $lastName: String, $firstName: String, $companies_id: ID, $email: String, $password: String, $authenticated: String, $roles_id: ID) {\n  createUser(\n    id: $id\n    lastName: $lastName\n    firstName: $firstName\n    companies_id: $companies_id\n    email: $email\n    password: $password\n    authenticated: $authenticated\n    roles_id: $roles_id\n  ) {\n    ...UserFragment\n  }\n}": types.CreateUserDocument,
    "mutation RemoveUser($id: ID!) {\n  removeUser(id: $id)\n}": types.RemoveUserDocument,
    "mutation UpdateUser($id: ID!, $lastName: String, $firstName: String, $companies_id: ID, $email: String, $password: String, $authenticated: String, $roles_id: ID) {\n  updateUser(\n    id: $id\n    lastName: $lastName\n    firstName: $firstName\n    companies_id: $companies_id\n    email: $email\n    password: $password\n    authenticated: $authenticated\n    roles_id: $roles_id\n  ) {\n    ...UserFragment\n  }\n}": types.UpdateUserDocument,
    "query AllAgents {\n  allAgents {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}": types.AllAgentsDocument,
    "query GetAgent($id: ID!) {\n  Agent(id: $id) {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}": types.GetAgentDocument,
    "query AllChannels {\n  allChannels {\n    id\n    url\n    name\n    priority\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}": types.AllChannelsDocument,
    "query GetChannel($id: ID!) {\n  Channel(id: $id) {\n    id\n    url\n    name\n    priority\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}": types.GetChannelDocument,
    "query AllCompanies {\n  allCompanies {\n    id\n    name\n  }\n}": types.AllCompaniesDocument,
    "query GetCompany($id: ID!) {\n  Company(id: $id) {\n    id\n    name\n  }\n}": types.GetCompanyDocument,
    "query AllCustomers {\n  allCustomers {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}": types.AllCustomersDocument,
    "query GetCustomer($id: ID!) {\n  Customer(id: $id) {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}": types.GetCustomerDocument,
    "query AllDevices {\n  allDevices {\n    id\n    name\n    type\n    Users {\n      ...UserFragment\n    }\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}": types.AllDevicesDocument,
    "query GetDevice($id: ID!) {\n  Device(id: $id) {\n    id\n    name\n    type\n    Users {\n      ...UserFragment\n    }\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}": types.GetDeviceDocument,
    "query AllProductTemplates {\n  allProductTemplates {\n    id\n    name\n    items\n  }\n}": types.AllProductTemplatesDocument,
    "query GetProductTemplate($id: ID!) {\n  ProductTemplate(id: $id) {\n    id\n    name\n    items\n  }\n}": types.GetProductTemplateDocument,
    "query AllRoles {\n  allRoles {\n    id\n    name\n  }\n}": types.AllRolesDocument,
    "query GetRole($id: ID!) {\n  Role(id: $id) {\n    id\n    name\n  }\n}": types.GetRoleDocument,
    "query AllRooms {\n  allRooms {\n    id\n    name\n    description\n    startedAt\n    endedAt\n    Agents {\n      ...AgentFragment\n    }\n    Channels {\n      ...ChannelFragment\n    }\n    Company {\n      ...CompanyFragment\n    }\n    Customers {\n      ...CustomerFragment\n    }\n    ProductTemplates {\n      ...ProductTemplateFragment\n    }\n  }\n}": types.AllRoomsDocument,
    "query GetRoom($id: ID!) {\n  Room(id: $id) {\n    id\n    name\n    description\n    startedAt\n    endedAt\n    Agents {\n      ...AgentFragment\n    }\n    Channels {\n      ...ChannelFragment\n    }\n    Company {\n      ...CompanyFragment\n    }\n    Customers {\n      ...CustomerFragment\n    }\n    ProductTemplates {\n      ...ProductTemplateFragment\n    }\n  }\n}": types.GetRoomDocument,
    "query AllUsers {\n  allUsers {\n    id\n    firstName\n    lastName\n    email\n    password\n    authenticated\n    Company {\n      ...CompanyFragment\n    }\n    Role {\n      ...RoleFragment\n    }\n  }\n}": types.AllUsersDocument,
    "query GetUser($id: ID!) {\n  User(id: $id) {\n    id\n    firstName\n    lastName\n    email\n    password\n    authenticated\n    Company {\n      ...CompanyFragment\n    }\n    Role {\n      ...RoleFragment\n    }\n  }\n}": types.GetUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment AddressFragment on Address {\n  zip\n  street\n  city\n}"): (typeof documents)["fragment AddressFragment on Address {\n  zip\n  street\n  city\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment AgentFragment on Agent {\n  id\n  address\n  User {\n    ...UserFragment\n  }\n}"): (typeof documents)["fragment AgentFragment on Agent {\n  id\n  address\n  User {\n    ...UserFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ChannelFragment on Channel {\n  id\n  priority\n  url\n  name\n}"): (typeof documents)["fragment ChannelFragment on Channel {\n  id\n  priority\n  url\n  name\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CompanyFragment on Company {\n  id\n  name\n}"): (typeof documents)["fragment CompanyFragment on Company {\n  id\n  name\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CustomerFragment on Customer {\n  id\n  address\n  User {\n    ...UserFragment\n  }\n}"): (typeof documents)["fragment CustomerFragment on Customer {\n  id\n  address\n  User {\n    ...UserFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment DeviceFragment on Device {\n  id\n  name\n  type\n  Users {\n    ...UserFragment\n  }\n  Rooms {\n    ...RoomFragment\n  }\n}"): (typeof documents)["fragment DeviceFragment on Device {\n  id\n  name\n  type\n  Users {\n    ...UserFragment\n  }\n  Rooms {\n    ...RoomFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductTemplateFragment on ProductTemplate {\n  id\n  name\n  items\n}"): (typeof documents)["fragment ProductTemplateFragment on ProductTemplate {\n  id\n  name\n  items\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RoleFragment on Role {\n  id\n  name\n}"): (typeof documents)["fragment RoleFragment on Role {\n  id\n  name\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RoomFragment on Room {\n  id\n  name\n  description\n  startedAt\n  endedAt\n  Agents {\n    ...AgentFragment\n  }\n  Channels {\n    ...ChannelFragment\n  }\n  Company {\n    ...CompanyFragment\n  }\n  Customers {\n    ...CustomerFragment\n  }\n  ProductTemplates {\n    ...ProductTemplateFragment\n  }\n}"): (typeof documents)["fragment RoomFragment on Room {\n  id\n  name\n  description\n  startedAt\n  endedAt\n  Agents {\n    ...AgentFragment\n  }\n  Channels {\n    ...ChannelFragment\n  }\n  Company {\n    ...CompanyFragment\n  }\n  Customers {\n    ...CustomerFragment\n  }\n  ProductTemplates {\n    ...ProductTemplateFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserFragment on User {\n  id\n  firstName\n  lastName\n  email\n  password\n  authenticated\n  Company {\n    ...CompanyFragment\n  }\n  Role {\n    ...RoleFragment\n  }\n}"): (typeof documents)["fragment UserFragment on User {\n  id\n  firstName\n  lastName\n  email\n  password\n  authenticated\n  Company {\n    ...CompanyFragment\n  }\n  Role {\n    ...RoleFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateAgent($id: ID!, $users_id: ID!, $address: JSON) {\n  createAgent(id: $id, users_id: $users_id, address: $address) {\n    ...AgentFragment\n  }\n}"): (typeof documents)["mutation CreateAgent($id: ID!, $users_id: ID!, $address: JSON) {\n  createAgent(id: $id, users_id: $users_id, address: $address) {\n    ...AgentFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveAgent($id: ID!) {\n  removeAgent(id: $id)\n}"): (typeof documents)["mutation RemoveAgent($id: ID!) {\n  removeAgent(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateAgent($id: ID!, $users_id: ID!, $address: JSON) {\n  updateAgent(id: $id, users_id: $users_id, address: $address) {\n    ...AgentFragment\n  }\n}"): (typeof documents)["mutation UpdateAgent($id: ID!, $users_id: ID!, $address: JSON) {\n  updateAgent(id: $id, users_id: $users_id, address: $address) {\n    ...AgentFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateChannel($id: ID!, $url: String, $name: String, $priority: String, $rooms_id: [ID]) {\n  createChannel(\n    id: $id\n    url: $url\n    name: $name\n    priority: $priority\n    rooms_id: $rooms_id\n  ) {\n    ...ChannelFragment\n  }\n}"): (typeof documents)["mutation CreateChannel($id: ID!, $url: String, $name: String, $priority: String, $rooms_id: [ID]) {\n  createChannel(\n    id: $id\n    url: $url\n    name: $name\n    priority: $priority\n    rooms_id: $rooms_id\n  ) {\n    ...ChannelFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveChannel($id: ID!) {\n  removeChannel(id: $id)\n}"): (typeof documents)["mutation RemoveChannel($id: ID!) {\n  removeChannel(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateChannel($id: ID!, $url: String, $name: String, $priority: String, $rooms_id: [ID]) {\n  updateChannel(\n    id: $id\n    url: $url\n    name: $name\n    priority: $priority\n    rooms_id: $rooms_id\n  ) {\n    ...ChannelFragment\n  }\n}"): (typeof documents)["mutation UpdateChannel($id: ID!, $url: String, $name: String, $priority: String, $rooms_id: [ID]) {\n  updateChannel(\n    id: $id\n    url: $url\n    name: $name\n    priority: $priority\n    rooms_id: $rooms_id\n  ) {\n    ...ChannelFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateCompany($id: ID!, $name: String) {\n  createCompany(id: $id, name: $name) {\n    ...CompanyFragment\n  }\n}"): (typeof documents)["mutation CreateCompany($id: ID!, $name: String) {\n  createCompany(id: $id, name: $name) {\n    ...CompanyFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveCompany($id: ID!) {\n  removeCompany(id: $id)\n}"): (typeof documents)["mutation RemoveCompany($id: ID!) {\n  removeCompany(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateCompany($id: ID!, $name: String) {\n  updateCompany(id: $id, name: $name) {\n    ...CompanyFragment\n  }\n}"): (typeof documents)["mutation UpdateCompany($id: ID!, $name: String) {\n  updateCompany(id: $id, name: $name) {\n    ...CompanyFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateCustomer($id: ID!, $users_id: ID!, $address: JSON) {\n  createCustomer(id: $id, users_id: $users_id, address: $address) {\n    ...CustomerFragment\n  }\n}"): (typeof documents)["mutation CreateCustomer($id: ID!, $users_id: ID!, $address: JSON) {\n  createCustomer(id: $id, users_id: $users_id, address: $address) {\n    ...CustomerFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveCustomer($id: ID!) {\n  removeCustomer(id: $id)\n}"): (typeof documents)["mutation RemoveCustomer($id: ID!) {\n  removeCustomer(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateCustomer($id: ID!, $users_id: ID!, $address: JSON) {\n  updateCustomer(id: $id, users_id: $users_id, address: $address) {\n    ...CustomerFragment\n  }\n}"): (typeof documents)["mutation UpdateCustomer($id: ID!, $users_id: ID!, $address: JSON) {\n  updateCustomer(id: $id, users_id: $users_id, address: $address) {\n    ...CustomerFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateDevice($id: ID!, $name: String, $type: String, $users_id: [ID], $rooms_id: [ID]) {\n  createDevice(\n    id: $id\n    name: $name\n    type: $type\n    users_id: $users_id\n    rooms_id: $rooms_id\n  ) {\n    ...DeviceFragment\n  }\n}"): (typeof documents)["mutation CreateDevice($id: ID!, $name: String, $type: String, $users_id: [ID], $rooms_id: [ID]) {\n  createDevice(\n    id: $id\n    name: $name\n    type: $type\n    users_id: $users_id\n    rooms_id: $rooms_id\n  ) {\n    ...DeviceFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveDevice($id: ID!) {\n  removeDevice(id: $id)\n}"): (typeof documents)["mutation RemoveDevice($id: ID!) {\n  removeDevice(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateDevice($id: ID!, $name: String, $type: String, $users_id: [ID], $rooms_id: [ID]) {\n  updateDevice(\n    id: $id\n    name: $name\n    type: $type\n    users_id: $users_id\n    rooms_id: $rooms_id\n  ) {\n    ...DeviceFragment\n  }\n}"): (typeof documents)["mutation UpdateDevice($id: ID!, $name: String, $type: String, $users_id: [ID], $rooms_id: [ID]) {\n  updateDevice(\n    id: $id\n    name: $name\n    type: $type\n    users_id: $users_id\n    rooms_id: $rooms_id\n  ) {\n    ...DeviceFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateProductTemplate($id: ID!, $name: String, $items: [JSON]) {\n  createProductTemplate(id: $id, name: $name, items: $items) {\n    ...ProductTemplateFragment\n  }\n}"): (typeof documents)["mutation CreateProductTemplate($id: ID!, $name: String, $items: [JSON]) {\n  createProductTemplate(id: $id, name: $name, items: $items) {\n    ...ProductTemplateFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveProductTemplate($id: ID!) {\n  removeProductTemplate(id: $id)\n}"): (typeof documents)["mutation RemoveProductTemplate($id: ID!) {\n  removeProductTemplate(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateProductTemplate($id: ID!, $name: String, $items: [JSON]) {\n  updateProductTemplate(id: $id, name: $name, items: $items) {\n    ...ProductTemplateFragment\n  }\n}"): (typeof documents)["mutation UpdateProductTemplate($id: ID!, $name: String, $items: [JSON]) {\n  updateProductTemplate(id: $id, name: $name, items: $items) {\n    ...ProductTemplateFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateRole($id: ID!, $name: String!) {\n  createRole(id: $id, name: $name) {\n    ...RoleFragment\n  }\n}"): (typeof documents)["mutation CreateRole($id: ID!, $name: String!) {\n  createRole(id: $id, name: $name) {\n    ...RoleFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveRole($id: ID!) {\n  removeRole(id: $id)\n}"): (typeof documents)["mutation RemoveRole($id: ID!) {\n  removeRole(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateRole($id: ID!, $name: String!) {\n  updateRole(id: $id, name: $name) {\n    ...RoleFragment\n  }\n}"): (typeof documents)["mutation UpdateRole($id: ID!, $name: String!) {\n  updateRole(id: $id, name: $name) {\n    ...RoleFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateRoom($id: ID!, $name: String, $companies_id: ID, $description: String, $customers_id: [ID], $channels_id: [ID], $agents_id: [ID], $productTemplates_id: [ID]) {\n  createRoom(\n    id: $id\n    name: $name\n    companies_id: $companies_id\n    description: $description\n    customers_id: $customers_id\n    channels_id: $channels_id\n    agents_id: $agents_id\n    productTemplates_id: $productTemplates_id\n  ) {\n    ...RoomFragment\n  }\n}"): (typeof documents)["mutation CreateRoom($id: ID!, $name: String, $companies_id: ID, $description: String, $customers_id: [ID], $channels_id: [ID], $agents_id: [ID], $productTemplates_id: [ID]) {\n  createRoom(\n    id: $id\n    name: $name\n    companies_id: $companies_id\n    description: $description\n    customers_id: $customers_id\n    channels_id: $channels_id\n    agents_id: $agents_id\n    productTemplates_id: $productTemplates_id\n  ) {\n    ...RoomFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveRoom($id: ID!) {\n  removeRoom(id: $id)\n}"): (typeof documents)["mutation RemoveRoom($id: ID!) {\n  removeRoom(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateRoom($id: ID!, $name: String, $companies_id: ID, $description: String, $customers_id: [ID], $channels_id: [ID], $agents_id: [ID], $productTemplates_id: [ID]) {\n  updateRoom(\n    id: $id\n    name: $name\n    companies_id: $companies_id\n    description: $description\n    customers_id: $customers_id\n    channels_id: $channels_id\n    agents_id: $agents_id\n    productTemplates_id: $productTemplates_id\n  ) {\n    ...RoomFragment\n  }\n}"): (typeof documents)["mutation UpdateRoom($id: ID!, $name: String, $companies_id: ID, $description: String, $customers_id: [ID], $channels_id: [ID], $agents_id: [ID], $productTemplates_id: [ID]) {\n  updateRoom(\n    id: $id\n    name: $name\n    companies_id: $companies_id\n    description: $description\n    customers_id: $customers_id\n    channels_id: $channels_id\n    agents_id: $agents_id\n    productTemplates_id: $productTemplates_id\n  ) {\n    ...RoomFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($id: ID!, $lastName: String, $firstName: String, $companies_id: ID, $email: String, $password: String, $authenticated: String, $roles_id: ID) {\n  createUser(\n    id: $id\n    lastName: $lastName\n    firstName: $firstName\n    companies_id: $companies_id\n    email: $email\n    password: $password\n    authenticated: $authenticated\n    roles_id: $roles_id\n  ) {\n    ...UserFragment\n  }\n}"): (typeof documents)["mutation CreateUser($id: ID!, $lastName: String, $firstName: String, $companies_id: ID, $email: String, $password: String, $authenticated: String, $roles_id: ID) {\n  createUser(\n    id: $id\n    lastName: $lastName\n    firstName: $firstName\n    companies_id: $companies_id\n    email: $email\n    password: $password\n    authenticated: $authenticated\n    roles_id: $roles_id\n  ) {\n    ...UserFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveUser($id: ID!) {\n  removeUser(id: $id)\n}"): (typeof documents)["mutation RemoveUser($id: ID!) {\n  removeUser(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateUser($id: ID!, $lastName: String, $firstName: String, $companies_id: ID, $email: String, $password: String, $authenticated: String, $roles_id: ID) {\n  updateUser(\n    id: $id\n    lastName: $lastName\n    firstName: $firstName\n    companies_id: $companies_id\n    email: $email\n    password: $password\n    authenticated: $authenticated\n    roles_id: $roles_id\n  ) {\n    ...UserFragment\n  }\n}"): (typeof documents)["mutation UpdateUser($id: ID!, $lastName: String, $firstName: String, $companies_id: ID, $email: String, $password: String, $authenticated: String, $roles_id: ID) {\n  updateUser(\n    id: $id\n    lastName: $lastName\n    firstName: $firstName\n    companies_id: $companies_id\n    email: $email\n    password: $password\n    authenticated: $authenticated\n    roles_id: $roles_id\n  ) {\n    ...UserFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllAgents {\n  allAgents {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}"): (typeof documents)["query AllAgents {\n  allAgents {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAgent($id: ID!) {\n  Agent(id: $id) {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}"): (typeof documents)["query GetAgent($id: ID!) {\n  Agent(id: $id) {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllChannels {\n  allChannels {\n    id\n    url\n    name\n    priority\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}"): (typeof documents)["query AllChannels {\n  allChannels {\n    id\n    url\n    name\n    priority\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetChannel($id: ID!) {\n  Channel(id: $id) {\n    id\n    url\n    name\n    priority\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}"): (typeof documents)["query GetChannel($id: ID!) {\n  Channel(id: $id) {\n    id\n    url\n    name\n    priority\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllCompanies {\n  allCompanies {\n    id\n    name\n  }\n}"): (typeof documents)["query AllCompanies {\n  allCompanies {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCompany($id: ID!) {\n  Company(id: $id) {\n    id\n    name\n  }\n}"): (typeof documents)["query GetCompany($id: ID!) {\n  Company(id: $id) {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllCustomers {\n  allCustomers {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}"): (typeof documents)["query AllCustomers {\n  allCustomers {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCustomer($id: ID!) {\n  Customer(id: $id) {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}"): (typeof documents)["query GetCustomer($id: ID!) {\n  Customer(id: $id) {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllDevices {\n  allDevices {\n    id\n    name\n    type\n    Users {\n      ...UserFragment\n    }\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}"): (typeof documents)["query AllDevices {\n  allDevices {\n    id\n    name\n    type\n    Users {\n      ...UserFragment\n    }\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetDevice($id: ID!) {\n  Device(id: $id) {\n    id\n    name\n    type\n    Users {\n      ...UserFragment\n    }\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}"): (typeof documents)["query GetDevice($id: ID!) {\n  Device(id: $id) {\n    id\n    name\n    type\n    Users {\n      ...UserFragment\n    }\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllProductTemplates {\n  allProductTemplates {\n    id\n    name\n    items\n  }\n}"): (typeof documents)["query AllProductTemplates {\n  allProductTemplates {\n    id\n    name\n    items\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductTemplate($id: ID!) {\n  ProductTemplate(id: $id) {\n    id\n    name\n    items\n  }\n}"): (typeof documents)["query GetProductTemplate($id: ID!) {\n  ProductTemplate(id: $id) {\n    id\n    name\n    items\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllRoles {\n  allRoles {\n    id\n    name\n  }\n}"): (typeof documents)["query AllRoles {\n  allRoles {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRole($id: ID!) {\n  Role(id: $id) {\n    id\n    name\n  }\n}"): (typeof documents)["query GetRole($id: ID!) {\n  Role(id: $id) {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllRooms {\n  allRooms {\n    id\n    name\n    description\n    startedAt\n    endedAt\n    Agents {\n      ...AgentFragment\n    }\n    Channels {\n      ...ChannelFragment\n    }\n    Company {\n      ...CompanyFragment\n    }\n    Customers {\n      ...CustomerFragment\n    }\n    ProductTemplates {\n      ...ProductTemplateFragment\n    }\n  }\n}"): (typeof documents)["query AllRooms {\n  allRooms {\n    id\n    name\n    description\n    startedAt\n    endedAt\n    Agents {\n      ...AgentFragment\n    }\n    Channels {\n      ...ChannelFragment\n    }\n    Company {\n      ...CompanyFragment\n    }\n    Customers {\n      ...CustomerFragment\n    }\n    ProductTemplates {\n      ...ProductTemplateFragment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRoom($id: ID!) {\n  Room(id: $id) {\n    id\n    name\n    description\n    startedAt\n    endedAt\n    Agents {\n      ...AgentFragment\n    }\n    Channels {\n      ...ChannelFragment\n    }\n    Company {\n      ...CompanyFragment\n    }\n    Customers {\n      ...CustomerFragment\n    }\n    ProductTemplates {\n      ...ProductTemplateFragment\n    }\n  }\n}"): (typeof documents)["query GetRoom($id: ID!) {\n  Room(id: $id) {\n    id\n    name\n    description\n    startedAt\n    endedAt\n    Agents {\n      ...AgentFragment\n    }\n    Channels {\n      ...ChannelFragment\n    }\n    Company {\n      ...CompanyFragment\n    }\n    Customers {\n      ...CustomerFragment\n    }\n    ProductTemplates {\n      ...ProductTemplateFragment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllUsers {\n  allUsers {\n    id\n    firstName\n    lastName\n    email\n    password\n    authenticated\n    Company {\n      ...CompanyFragment\n    }\n    Role {\n      ...RoleFragment\n    }\n  }\n}"): (typeof documents)["query AllUsers {\n  allUsers {\n    id\n    firstName\n    lastName\n    email\n    password\n    authenticated\n    Company {\n      ...CompanyFragment\n    }\n    Role {\n      ...RoleFragment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUser($id: ID!) {\n  User(id: $id) {\n    id\n    firstName\n    lastName\n    email\n    password\n    authenticated\n    Company {\n      ...CompanyFragment\n    }\n    Role {\n      ...RoleFragment\n    }\n  }\n}"): (typeof documents)["query GetUser($id: ID!) {\n  User(id: $id) {\n    id\n    firstName\n    lastName\n    email\n    password\n    authenticated\n    Company {\n      ...CompanyFragment\n    }\n    Role {\n      ...RoleFragment\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;