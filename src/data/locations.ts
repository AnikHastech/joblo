export interface Location {
  slug: string;
  city: string;
  country: string;
  imageUrl: string;
  jobs: number;
  companies?: number;
  avgSalary?: string;
  featured?: boolean;
}

export const locations: Location[] = [
  {
    slug: "remote",
    city: "Remote",
    country: "Worldwide",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    jobs: 42180,
    companies: 8420,
    avgSalary: "$142K",
    featured: true,
  },
  {
    slug: "san-francisco",
    city: "San Francisco",
    country: "United States",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    jobs: 12340,
    avgSalary: "$185K",
  },
  {
    slug: "new-york",
    city: "New York",
    country: "United States",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80",
    jobs: 9870,
    avgSalary: "$168K",
  },
  {
    slug: "london",
    city: "London",
    country: "United Kingdom",
    imageUrl: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=900&q=80",
    jobs: 7250,
  },
  {
    slug: "berlin",
    city: "Berlin",
    country: "Germany",
    imageUrl: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=900&q=80",
    jobs: 5140,
  },
  {
    slug: "tokyo",
    city: "Tokyo",
    country: "Japan",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
    jobs: 4380,
  },
  {
    slug: "singapore",
    city: "Singapore",
    country: "Singapore",
    imageUrl: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=900&q=80",
    jobs: 3620,
  },
];
