import { graphql } from "@/gql"; 
export const CreateAgent = graphql(/* GraphQL */ `mutation CreateAgent($id: ID!, $users_id: ID!, $address: JSON) {
  createAgent(id: $id, users_id: $users_id, address: $address) {
    ...AgentFragment
  }
}`);
 // prettier-ignore 
export const RemoveAgent = graphql(/* GraphQL */ `mutation RemoveAgent($id: ID!) {
  removeAgent(id: $id)
}`);
 // prettier-ignore 
export const UpdateAgent = graphql(/* GraphQL */ `mutation UpdateAgent($id: ID!, $users_id: ID!, $address: JSON) {
  updateAgent(id: $id, users_id: $users_id, address: $address) {
    ...AgentFragment
  }
}`);
 // prettier-ignore 
export const CreateChannel = graphql(/* GraphQL */ `mutation CreateChannel($id: ID!, $url: String, $name: String, $priority: String, $rooms_id: [ID]) {
  createChannel(
    id: $id
    url: $url
    name: $name
    priority: $priority
    rooms_id: $rooms_id
  ) {
    ...ChannelFragment
  }
}`);
 // prettier-ignore 
export const RemoveChannel = graphql(/* GraphQL */ `mutation RemoveChannel($id: ID!) {
  removeChannel(id: $id)
}`);
 // prettier-ignore 
export const UpdateChannel = graphql(/* GraphQL */ `mutation UpdateChannel($id: ID!, $url: String, $name: String, $priority: String, $rooms_id: [ID]) {
  updateChannel(
    id: $id
    url: $url
    name: $name
    priority: $priority
    rooms_id: $rooms_id
  ) {
    ...ChannelFragment
  }
}`);
 // prettier-ignore 
export const CreateCompany = graphql(/* GraphQL */ `mutation CreateCompany($id: ID!, $name: String) {
  createCompany(id: $id, name: $name) {
    ...CompanyFragment
  }
}`);
 // prettier-ignore 
export const RemoveCompany = graphql(/* GraphQL */ `mutation RemoveCompany($id: ID!) {
  removeCompany(id: $id)
}`);
 // prettier-ignore 
export const UpdateCompany = graphql(/* GraphQL */ `mutation UpdateCompany($id: ID!, $name: String) {
  updateCompany(id: $id, name: $name) {
    ...CompanyFragment
  }
}`);
 // prettier-ignore 
export const CreateCustomer = graphql(/* GraphQL */ `mutation CreateCustomer($id: ID!, $users_id: ID!, $address: JSON) {
  createCustomer(id: $id, users_id: $users_id, address: $address) {
    ...CustomerFragment
  }
}`);
 // prettier-ignore 
export const RemoveCustomer = graphql(/* GraphQL */ `mutation RemoveCustomer($id: ID!) {
  removeCustomer(id: $id)
}`);
 // prettier-ignore 
export const UpdateCustomer = graphql(/* GraphQL */ `mutation UpdateCustomer($id: ID!, $users_id: ID!, $address: JSON) {
  updateCustomer(id: $id, users_id: $users_id, address: $address) {
    ...CustomerFragment
  }
}`);
 // prettier-ignore 
export const CreateDevice = graphql(/* GraphQL */ `mutation CreateDevice($id: ID!, $name: String, $type: String, $users_id: [ID], $rooms_id: [ID]) {
  createDevice(
    id: $id
    name: $name
    type: $type
    users_id: $users_id
    rooms_id: $rooms_id
  ) {
    ...DeviceFragment
  }
}`);
 // prettier-ignore 
export const RemoveDevice = graphql(/* GraphQL */ `mutation RemoveDevice($id: ID!) {
  removeDevice(id: $id)
}`);
 // prettier-ignore 
export const UpdateDevice = graphql(/* GraphQL */ `mutation UpdateDevice($id: ID!, $name: String, $type: String, $users_id: [ID], $rooms_id: [ID]) {
  updateDevice(
    id: $id
    name: $name
    type: $type
    users_id: $users_id
    rooms_id: $rooms_id
  ) {
    ...DeviceFragment
  }
}`);
 // prettier-ignore 
export const CreateProductTemplate = graphql(/* GraphQL */ `mutation CreateProductTemplate($id: ID!, $name: String, $items: [JSON]) {
  createProductTemplate(id: $id, name: $name, items: $items) {
    ...ProductTemplateFragment
  }
}`);
 // prettier-ignore 
export const RemoveProductTemplate = graphql(/* GraphQL */ `mutation RemoveProductTemplate($id: ID!) {
  removeProductTemplate(id: $id)
}`);
 // prettier-ignore 
export const UpdateProductTemplate = graphql(/* GraphQL */ `mutation UpdateProductTemplate($id: ID!, $name: String, $items: [JSON]) {
  updateProductTemplate(id: $id, name: $name, items: $items) {
    ...ProductTemplateFragment
  }
}`);
 // prettier-ignore 
export const CreateRole = graphql(/* GraphQL */ `mutation CreateRole($id: ID!, $name: String!) {
  createRole(id: $id, name: $name) {
    ...RoleFragment
  }
}`);
 // prettier-ignore 
export const RemoveRole = graphql(/* GraphQL */ `mutation RemoveRole($id: ID!) {
  removeRole(id: $id)
}`);
 // prettier-ignore 
export const UpdateRole = graphql(/* GraphQL */ `mutation UpdateRole($id: ID!, $name: String!) {
  updateRole(id: $id, name: $name) {
    ...RoleFragment
  }
}`);
 // prettier-ignore 
export const CreateRoom = graphql(/* GraphQL */ `mutation CreateRoom($id: ID!, $name: String, $companies_id: ID, $description: String, $customers_id: [ID], $channels_id: [ID], $agents_id: [ID], $productTemplates_id: [ID]) {
  createRoom(
    id: $id
    name: $name
    companies_id: $companies_id
    description: $description
    customers_id: $customers_id
    channels_id: $channels_id
    agents_id: $agents_id
    productTemplates_id: $productTemplates_id
  ) {
    ...RoomFragment
  }
}`);
 // prettier-ignore 
export const RemoveRoom = graphql(/* GraphQL */ `mutation RemoveRoom($id: ID!) {
  removeRoom(id: $id)
}`);
 // prettier-ignore 
export const UpdateRoom = graphql(/* GraphQL */ `mutation UpdateRoom($id: ID!, $name: String, $companies_id: ID, $description: String, $customers_id: [ID], $channels_id: [ID], $agents_id: [ID], $productTemplates_id: [ID]) {
  updateRoom(
    id: $id
    name: $name
    companies_id: $companies_id
    description: $description
    customers_id: $customers_id
    channels_id: $channels_id
    agents_id: $agents_id
    productTemplates_id: $productTemplates_id
  ) {
    ...RoomFragment
  }
}`);
 // prettier-ignore 
export const CreateUser = graphql(/* GraphQL */ `mutation CreateUser($id: ID!, $lastName: String, $firstName: String, $companies_id: ID, $email: String, $password: String, $authenticated: String, $roles_id: ID) {
  createUser(
    id: $id
    lastName: $lastName
    firstName: $firstName
    companies_id: $companies_id
    email: $email
    password: $password
    authenticated: $authenticated
    roles_id: $roles_id
  ) {
    ...UserFragment
  }
}`);
 // prettier-ignore 
export const RemoveUser = graphql(/* GraphQL */ `mutation RemoveUser($id: ID!) {
  removeUser(id: $id)
}`);
 // prettier-ignore 
export const UpdateUser = graphql(/* GraphQL */ `mutation UpdateUser($id: ID!, $lastName: String, $firstName: String, $companies_id: ID, $email: String, $password: String, $authenticated: String, $roles_id: ID) {
  updateUser(
    id: $id
    lastName: $lastName
    firstName: $firstName
    companies_id: $companies_id
    email: $email
    password: $password
    authenticated: $authenticated
    roles_id: $roles_id
  ) {
    ...UserFragment
  }
}`);