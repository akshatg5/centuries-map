export type CenturyType = 'test' | 'odi' | 't20i';

export interface Century {
  type: CenturyType;
  runs: number;
  against: string;
  latitude: number;
  longitude: number;
  venue: string;
}

export const centuries: Century[] = [
  { type: 'test', runs: 116, against: 'Australia', latitude: -34.9185, longitude: 138.5995, venue: 'Adelaide Oval, Adelaide' },
  { type: 'test', runs: 103, against: 'New Zealand', latitude: 12.9788, longitude: 77.5996, venue: 'M. Chinnaswamy Stadium, Bangalore' },
  { type: 'test', runs: 103, against: 'England', latitude: 21.0495, longitude: 79.0507, venue: 'Vidarbha Cricket Association Stadium, Nagpur' },
  { type: 'test', runs: 107, against: 'Australia', latitude: 13.0633, longitude: 80.2786, venue: 'M. A. Chidambaram Stadium, Chennai' },
  { type: 'test', runs: 119, against: 'South Africa', latitude: -26.1947, longitude: 28.0568, venue: 'Wanderers Stadium, Johannesburg' },
  { type: 'test', runs: 105, against: 'New Zealand', latitude: -41.2924, longitude: 174.7787, venue: 'Basin Reserve, Wellington' },
  { type: 'test', runs: 115, against: 'Australia', latitude: -34.9185, longitude: 138.5995, venue: 'Adelaide Oval, Adelaide' },
  { type: 'test', runs: 141, against: 'Australia', latitude: -34.9185, longitude: 138.5995, venue: 'Adelaide Oval, Adelaide' },
  { type: 'test', runs: 169, against: 'Australia', latitude: -37.8200, longitude: 144.9830, venue: 'Melbourne Cricket Ground, Melbourne' },
  { type: 'test', runs: 147, against: 'Australia', latitude: -33.8917, longitude: 151.2247, venue: 'Sydney Cricket Ground, Sydney' },
  { type: 'test', runs: 103, against: 'Sri Lanka', latitude: 6.0535, longitude: 80.2210, venue: 'Galle International Stadium, Galle' },
  { type: 'test', runs: 200, against: 'West Indies', latitude: 17.0608, longitude: -61.7964, venue: 'Sir Vivian Richards Stadium, Antigua' },
  { type: 'test', runs: 211, against: 'New Zealand', latitude: 22.7196, longitude: 75.8577, venue: 'Holkar Stadium, Indore' },
  { type: 'test', runs: 167, against: 'England', latitude: 17.7215, longitude: 83.3216, venue: 'ACA-VDCA Cricket Stadium, Visakhapatnam' },
  { type: 'test', runs: 235, against: 'England', latitude: 18.9388, longitude: 72.8296, venue: 'Wankhede Stadium, Mumbai' },
  { type: 'test', runs: 204, against: 'Bangladesh', latitude: 17.4156, longitude: 78.5505, venue: 'Rajiv Gandhi Stadium, Hyderabad' },
  { type: 'test', runs: 103, against: 'Sri Lanka', latitude: 6.0535, longitude: 80.2210, venue: 'Galle International Stadium, Galle' },
  { type: 'test', runs: 104, against: 'Sri Lanka', latitude: 22.5646, longitude: 88.3433, venue: 'Eden Gardens, Kolkata' },
  { type: 'test', runs: 213, against: 'Sri Lanka', latitude: 21.0495, longitude: 79.0507, venue: 'Vidarbha Cricket Association Stadium, Nagpur' },
  { type: 'test', runs: 243, against: 'Sri Lanka', latitude: 28.6377, longitude: 77.2433, venue: 'Feroz Shah Kotla Ground, Delhi' },
  { type: 'test', runs: 153, against: 'South Africa', latitude: -25.8414, longitude: 28.1913, venue: 'SuperSport Park, Centurion' },
  { type: 'test', runs: 149, against: 'England', latitude: 52.4858, longitude: -1.9025, venue: 'Edgbaston, Birmingham' },
  { type: 'test', runs: 103, against: 'England', latitude: 52.9386, longitude: -1.1334, venue: 'Trent Bridge, Nottingham' },
  { type: 'test', runs: 139, against: 'West Indies', latitude: 22.3039, longitude: 70.7783, venue: 'Saurashtra Cricket Association Stadium, Rajkot' },
  { type: 'test', runs: 123, against: 'Australia', latitude: -31.9511, longitude: 115.8855, venue: 'Perth Stadium, Perth' },
  { type: 'test', runs: 254, against: 'South Africa', latitude: 18.6298, longitude: 73.8342, venue: 'Maharashtra Cricket Association Stadium, Pune' },
  { type: 'test', runs: 136, against: 'Bangladesh', latitude: 22.5646, longitude: 88.3433, venue: 'Eden Gardens, Kolkata' },
  { type: 'test', runs: 186, against: 'Australia', latitude: 23.0918, longitude: 72.5967, venue: 'Narendra Modi Stadium, Ahmedabad' },
  { type: 'test', runs: 121, against: 'West Indies', latitude: 10.6667, longitude: -61.5189, venue: "Queen's Park Oval, Port of Spain" },

  { type: 'odi', runs: 107, against: 'Sri Lanka', latitude: 22.5646, longitude: 88.3433, venue: 'Eden Gardens, Kolkata' },
  { type: 'odi', runs: 102, against: 'Bangladesh', latitude: 23.8103, longitude: 90.4125, venue: 'Sher-e-Bangla Stadium, Dhaka' },
  { type: 'odi', runs: 118, against: 'Australia', latitude: 17.7215, longitude: 83.3216, venue: 'ACA–VDCA Cricket Stadium, Visakhapatnam' },
  { type: 'odi', runs: 105, against: 'New Zealand', latitude: 26.1445, longitude: 91.7362, venue: 'Nehru Stadium, Guwahati' },
  { type: 'odi', runs: 100, against: 'Bangladesh', latitude: 23.8103, longitude: 90.4125, venue: 'Sher-e-Bangla Stadium, Dhaka' },

  { type: 't20i', runs: 122, against: 'Afghanistan', latitude: 25.0478, longitude: 55.2193, venue: 'Dubai International Cricket Stadium, Dubai' },
]

