import { graphql } from "@/gql"; 
export const AllAgents = graphql(/* GraphQL */ `query AllAgents {
  allAgents {
    id
    address
    User {
      ...UserFragment
    }
  }
}`);
 // prettier-ignore 
export const GetAgent = graphql(/* GraphQL */ `query GetAgent($id: ID!) {
  Agent(id: $id) {
    id
    address
    User {
      ...UserFragment
    }
  }
}`);
 // prettier-ignore 
export const AllChannels = graphql(/* GraphQL */ `query AllChannels {
  allChannels {
    id
    url
    name
    priority
    Rooms {
      ...RoomFragment
    }
  }
}`);
 // prettier-ignore 
export const GetChannel = graphql(/* GraphQL */ `query GetChannel($id: ID!) {
  Channel(id: $id) {
    id
    url
    name
    priority
    Rooms {
      ...RoomFragment
    }
  }
}`);
 // prettier-ignore 
export const AllCompanies = graphql(/* GraphQL */ `query AllCompanies {
  allCompanies {
    id
    name
  }
}`);
 // prettier-ignore 
export const GetCompany = graphql(/* GraphQL */ `query GetCompany($id: ID!) {
  Company(id: $id) {
    id
    name
  }
}`);
 // prettier-ignore 
export const AllCustomers = graphql(/* GraphQL */ `query AllCustomers {
  allCustomers {
    id
    address
    User {
      ...UserFragment
    }
  }
}`);
 // prettier-ignore 
export const GetCustomer = graphql(/* GraphQL */ `query GetCustomer($id: ID!) {
  Customer(id: $id) {
    id
    address
    User {
      ...UserFragment
    }
  }
}`);
 // prettier-ignore 
export const AllDevices = graphql(/* GraphQL */ `query AllDevices {
  allDevices {
    id
    name
    type
    Users {
      ...UserFragment
    }
    Rooms {
      ...RoomFragment
    }
  }
}`);
 // prettier-ignore 
export const GetDevice = graphql(/* GraphQL */ `query GetDevice($id: ID!) {
  Device(id: $id) {
    id
    name
    type
    Users {
      ...UserFragment
    }
    Rooms {
      ...RoomFragment
    }
  }
}`);
 // prettier-ignore 
export const AllProductTemplates = graphql(/* GraphQL */ `query AllProductTemplates {
  allProductTemplates {
    id
    name
    items
  }
}`);
 // prettier-ignore 
export const GetProductTemplate = graphql(/* GraphQL */ `query GetProductTemplate($id: ID!) {
  ProductTemplate(id: $id) {
    id
    name
    items
  }
}`);
 // prettier-ignore 
export const AllRoles = graphql(/* GraphQL */ `query AllRoles {
  allRoles {
    id
    name
  }
}`);
 // prettier-ignore 
export const GetRole = graphql(/* GraphQL */ `query GetRole($id: ID!) {
  Role(id: $id) {
    id
    name
  }
}`);
 // prettier-ignore 
export const AllRooms = graphql(/* GraphQL */ `query AllRooms {
  allRooms {
    id
    name
    description
    startedAt
    endedAt
    Agents {
      ...AgentFragment
    }
    Channels {
      ...ChannelFragment
    }
    Company {
      ...CompanyFragment
    }
    Customers {
      ...CustomerFragment
    }
    ProductTemplates {
      ...ProductTemplateFragment
    }
  }
}`);
 // prettier-ignore 
export const GetRoom = graphql(/* GraphQL */ `query GetRoom($id: ID!) {
  Room(id: $id) {
    id
    name
    description
    startedAt
    endedAt
    Agents {
      ...AgentFragment
    }
    Channels {
      ...ChannelFragment
    }
    Company {
      ...CompanyFragment
    }
    Customers {
      ...CustomerFragment
    }
    ProductTemplates {
      ...ProductTemplateFragment
    }
  }
}`);
 // prettier-ignore 
export const AllUsers = graphql(/* GraphQL */ `query AllUsers {
  allUsers {
    id
    firstName
    lastName
    email
    password
    authenticated
    Company {
      ...CompanyFragment
    }
    Role {
      ...RoleFragment
    }
  }
}`);
 // prettier-ignore 
export const GetUser = graphql(/* GraphQL */ `query GetUser($id: ID!) {
  User(id: $id) {
    id
    firstName
    lastName
    email
    password
    authenticated
    Company {
      ...CompanyFragment
    }
    Role {
      ...RoleFragment
    }
  }
}`);