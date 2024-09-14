# Hostel & Staff Review API - GraphQL
This project implements a GraphQL API that allows hostels to review staff members and staff to review hostels. The API supports operations for managing hostels, staff, positions, owners, and reviews. It enables bidirectional reviews between hostels and staff.

## Features
- Owners: Manage hostels and staff.
- Hostels: Manage positions and send reviews to staff members.
- Staff: Manage their profiles and send reviews to hostels.
- Positions: List of job positions at each hostel.
- Reviews: Bidirectional reviews between hostels and staff members.

## Tech Stack
- Node.js
- Apollo Server
- TypeScript (for type safety)
- GraphQL
- In-memory Data (for demonstration purposes)

## Make sure you have the following installed:
- Node.js v14 or above
- npm or yarn

## Installation

Clone the repository:
`git clone https://github.com/yourusername/hostel-staff-review-api.git`

Install dependencies:
`npm install`
`yarn install`

Run the server:
`npm start`
`yarn start`

The server will start on http://localhost:4000/.

### Access GraphQL Playground: Open a browser and go to http://localhost:4000/graphql to interact with the API through GraphQL Playground.

### API Overview

Entities
Owner: A person who owns hostels.
Hostel: An accommodation place managed by an owner.
Staff: Employees working at a hostel.
Position: A job role at a hostel (e.g., manager, receptionist).
Review: A feedback comment left either by a hostel about a staff member or vice versa.

### Sample GraphQL Queries & Mutations

1. Query All Hostels

query {
  hostels {
    id
    name
    address
    owner {
      fullName
    }
  }
}

2. Create a Review from Hostel to Staff

mutation {
  createReview(input: {
    rating: 5,
    content: "Great job managing the hostel!",
    staffId: "1", # Staff ID being reviewed
    reviewedByHostel: true
  }) {
    id
    rating
    content
  }
}

3. Create a Review from Staff to Hostel

mutation {
  createReview(input: {
    rating: 4,
    content: "The hostel had great amenities, but the check-in was slow.",
    hostelId: "1", # Hostel ID being reviewed
    reviewedByHostel: false
  }) {
    id
    rating
    content
  }
}

## Contribution
If you would like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch.
- Commit your changes.
- Submit a pull request for review.

## License
This project is licensed under the MIT License - see the LICENSE file for details.