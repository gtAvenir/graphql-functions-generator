import { graphql } from "@/gql"; 

 // prettier-ignore 
export const AllAgents = graphql(/* GraphQL */ `query AllAgents {\n  allAgents {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}`);
 // prettier-ignore 
export const GetAgent = graphql(/* GraphQL */ `query GetAgent($id: ID!) {\n  Agent(id: $id) {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}`);
 // prettier-ignore 
export const AllChannels = graphql(/* GraphQL */ `query AllChannels {\n  allChannels {\n    id\n    url\n    name\n    priority\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}`);
 // prettier-ignore 
export const GetChannel = graphql(/* GraphQL */ `query GetChannel($id: ID!) {\n  Channel(id: $id) {\n    id\n    url\n    name\n    priority\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}`);
 // prettier-ignore 
export const AllCompanies = graphql(/* GraphQL */ `query AllCompanies {\n  allCompanies {\n    id\n    name\n  }\n}`);
 // prettier-ignore 
export const GetCompany = graphql(/* GraphQL */ `query GetCompany($id: ID!) {\n  Company(id: $id) {\n    id\n    name\n  }\n}`);
 // prettier-ignore 
export const AllCustomers = graphql(/* GraphQL */ `query AllCustomers {\n  allCustomers {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}`);
 // prettier-ignore 
export const GetCustomer = graphql(/* GraphQL */ `query GetCustomer($id: ID!) {\n  Customer(id: $id) {\n    id\n    address\n    User {\n      ...UserFragment\n    }\n  }\n}`);
 // prettier-ignore 
export const AllDevices = graphql(/* GraphQL */ `query AllDevices {\n  allDevices {\n    id\n    name\n    type\n    Users {\n      ...UserFragment\n    }\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}`);
 // prettier-ignore 
export const GetDevice = graphql(/* GraphQL */ `query GetDevice($id: ID!) {\n  Device(id: $id) {\n    id\n    name\n    type\n    Users {\n      ...UserFragment\n    }\n    Rooms {\n      ...RoomFragment\n    }\n  }\n}`);
 // prettier-ignore 
export const AllProductTemplates = graphql(/* GraphQL */ `query AllProductTemplates {\n  allProductTemplates {\n    id\n    name\n    items\n  }\n}`);
 // prettier-ignore 
export const GetProductTemplate = graphql(/* GraphQL */ `query GetProductTemplate($id: ID!) {\n  ProductTemplate(id: $id) {\n    id\n    name\n    items\n  }\n}`);
 // prettier-ignore 
export const AllRoles = graphql(/* GraphQL */ `query AllRoles {\n  allRoles {\n    id\n    name\n  }\n}`);
 // prettier-ignore 
export const GetRole = graphql(/* GraphQL */ `query GetRole($id: ID!) {\n  Role(id: $id) {\n    id\n    name\n  }\n}`);
 // prettier-ignore 
export const AllRooms = graphql(/* GraphQL */ `query AllRooms {\n  allRooms {\n    id\n    name\n    description\n    startedAt\n    endedAt\n    Agents {\n      ...AgentFragment\n    }\n    Channels {\n      ...ChannelFragment\n    }\n    Company {\n      ...CompanyFragment\n    }\n    Customers {\n      ...CustomerFragment\n    }\n    ProductTemplates {\n      ...ProductTemplateFragment\n    }\n  }\n}`);
 // prettier-ignore 
export const GetRoom = graphql(/* GraphQL */ `query GetRoom($id: ID!) {\n  Room(id: $id) {\n    id\n    name\n    description\n    startedAt\n    endedAt\n    Agents {\n      ...AgentFragment\n    }\n    Channels {\n      ...ChannelFragment\n    }\n    Company {\n      ...CompanyFragment\n    }\n    Customers {\n      ...CustomerFragment\n    }\n    ProductTemplates {\n      ...ProductTemplateFragment\n    }\n  }\n}`);
 // prettier-ignore 
export const AllUsers = graphql(/* GraphQL */ `query AllUsers {\n  allUsers {\n    id\n    firstName\n    lastName\n    email\n    password\n    authenticated\n    Company {\n      ...CompanyFragment\n    }\n    Role {\n      ...RoleFragment\n    }\n  }\n}`);
 // prettier-ignore 
export const GetUser = graphql(/* GraphQL */ `query GetUser($id: ID!) {\n  User(id: $id) {\n    id\n    firstName\n    lastName\n    email\n    password\n    authenticated\n    Company {\n      ...CompanyFragment\n    }\n    Role {\n      ...RoleFragment\n    }\n  }\n}`);