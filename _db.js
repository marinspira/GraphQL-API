const owners = [
    {
        id: "1",
        fullName: "John Doe",
        email: "john.doe@example.com",
        appleUserId: "apple123"
    },
    {
        id: "2",
        fullName: "Jane Smith",
        email: "jane.smith@example.com",
        appleUserId: "apple456"
    }
];

const hostels = [
    {
        id: "1",
        name: "Mountain View Hostel",
        address: "Zagreb, Croácia",
        zipcode: "23049",
        owner_id: "1"
    },
    {
        id: "2",
        name: "Ocean Breeze Hostel",
        address: "Rio de Janeiro, Brazil",
        zipcode: "23049",
        owner_id: "2"
    }
];

const staffs = [
    {
        id: "1",
        fullName: "Alice Johnson",
        email: "alice.johnson@example.com",
        appleUserId: "apple789",
        description: "Experienced manager",
        verified: true,
        reviews: [],
        birth: "12/05/2003"
    },
    {
        id: "2",
        fullName: "Bob Williams",
        email: "bob.williams@example.com",
        appleUserId: "apple101112",
        description: "Front desk specialist",
        verified: false,
        reviews: [],
        birth: "20/03/1999"
    }
];

const positions = [
    {
        id: "1",
        title: "Manager",
        hostel_id: "1",
        reviews: [],
        description: "Manage the hostel operations"
    },
    {
        id: "2",
        title: "Receptionist",
        hostel_id: "2",
        reviews: [],
        description: "Handle guest check-ins and inquiries"
    }
];

const reviews = [
    {
        id: "1",
        rating: 5,
        content: "Great work!",
        staff_id: "1",
        hostel_id: "2"
    },
    {
        id: "2",
        rating: 4,
        content: "Very friendly and professional",
        staff_id: "1",
        hostel_id: "2"
    }
];

export default {
    owners,
    hostels,
    positions,
    staffs,
    reviews
};
