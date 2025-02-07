import React from "react";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";

// Sample category data
const categories = [
  { label: "Restaurants", icon: "/icons/restaurant.png" },
  { label: "Hotels", icon: "/icons/hotel.png" },
  { label: "Beauty Spa", icon: "/icons/spa.png" },
  { label: "Home Decor", icon: "/icons/home-decor.png" },
  { label: "Wedding Planning", icon: "/icons/wedding.png" },
  { label: "Education", icon: "/icons/education.png" },
  { label: "Rent & Hire", icon: "/icons/rent.png" },
  { label: "Hospitals", icon: "/icons/hospital.png" },
  { label: "Contractors", icon: "/icons/contractor.png" },
  { label: "Pet Shops", icon: "/icons/pet-shop.png" },
  { label: "PG/Hostels", icon: "/icons/hostel.png" },
  { label: "Estate Agent", icon: "/icons/estate-agent.png" },
  { label: "Dentists", icon: "/icons/dentist.png" },
  { label: "Gym", icon: "/icons/gym.png" },
  { label: "Loans", icon: "/icons/loan.png" },
  { label: "Event Organisers", icon: "/icons/event.png" },
  { label: "Driving Schools", icon: "/icons/driving-school.png" },
  { label: "Packers & Movers", icon: "/icons/packers-movers.png" },
  { label: "Courier Service", icon: "/icons/courier.png" },
  { label: "Popular Categories", icon: "/icons/popular.png" },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 20px;
`;

const CategoryGrid = () => {
  return (
    <Grid>
      {categories.map((category, index) => (
        <CategoryCard key={index} icon={category.icon} label={category.label} />
      ))}
    </Grid>
  );
};

export default CategoryGrid;