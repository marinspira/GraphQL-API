export const typeDefs = `#graphql

    type Owner {
    id: ID!
    fullName: String!
    email: String!
    appleUserId: String!
    hostels: [Hostel!] # An owner can have multiple hostels
    }

    type Hostel {
    id: ID!
    name: String!
    address: String!
    zipcode: String!
    owner: Owner! # Relationship with Owner
    positions: [Position!] # A hostel can have multiple positions
    reviews: [Review!] # A hostel can have multiple reviews
    }

    type Staff {
    id: ID!
    fullName: String!
    email: String!
    appleUserId: String!
    description: String
    verified: Boolean!
    reviews: [Review!] # Relationship with reviews sent
    birth: String!
    }

    type Position {
    id: ID!
    title: String!
    hostel: Hostel! # Relationship with Hostel
    description: String!
    }

    type Review {
    id: ID!
    rating: Int!
    content: String!
    staff: Staff! # Relationship with Staff
    hostel: Hostel! # Relationship with Hostel
    reviewedByHostel: Boolean! # To differentiate if the review was made by a hostel or staff
    }

    # Queries
    type Query {

    # Returns a list of all owners
    owners: [Owner!]!

    # Returns a list of all hostels
    hostels: [Hostel!]!

    # Returns a list of all staffs
    staffs: [Staff!]!

    # Returns a list of all positions
    positions: [Position!]!

    # Returns a list of all reviews
    reviews: [Review!]!
    }

    # Input types for creating new records (mutations)
    input CreateOwnerInput {
    fullName: String!
    email: String!
    appleUserId: String!
    }

    input CreateHostelInput {
    name: String!
    address: String!
    zipcode: String!
    ownerId: ID!
    }

    input CreateStaffInput {
    fullName: String!
    email: String!
    appleUserId: String!
    description: String
    verified: Boolean!
    birth: String!
    }

    input CreatePositionInput {
    title: String!
    hostelId: ID!
    description: String!
    }

    input CreateReviewInput {
    rating: Int!
    content: String!
    staffId: ID!
    hostelId: ID!
    reviewedByHostel: Boolean! # True if the review was made by the hostel, false if by the staff
    }

    # Mutations for creating new records
    type Mutation {
    createOwner(input: CreateOwnerInput!): Owner!
    createHostel(input: CreateHostelInput!): Hostel!
    createStaff(input: CreateStaffInput!): Staff!
    createPosition(input: CreatePositionInput!): Position!
    createReview(input: CreateReviewInput!): Review!
    }
`