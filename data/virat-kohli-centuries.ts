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
  // Test Centuries
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
  { type: 'test', runs: 100, against: 'Australia', latitude: -31.9511, longitude: 115.8855, venue: 'Perth Stadium, Perth' },

  // ODI Centuries
  { type: 'odi', runs: 107, against: 'Sri Lanka', latitude: 22.5646, longitude: 88.3433, venue: 'Eden Gardens, Kolkata' },
  { type: 'odi', runs: 102, against: 'Bangladesh', latitude: 23.8103, longitude: 90.4125, venue: 'Sher-e-Bangla Stadium, Dhaka' },
  { type: 'odi', runs: 118, against: 'Australia', latitude: 17.7215, longitude: 83.3216, venue: 'ACA–VDCA Cricket Stadium, Visakhapatnam' },
  { type: 'odi', runs: 105, against: 'New Zealand', latitude: 26.1445, longitude: 91.7362, venue: 'Nehru Stadium, Guwahati' },
  { type: 'odi', runs: 100, against: 'Bangladesh', latitude: 23.8103, longitude: 90.4125, venue: 'Sher-e-Bangla Stadium, Dhaka' },
  { type: 'odi', runs: 107, against: 'England', latitude: 51.4837, longitude: -3.1883, venue: 'Sophia Gardens, Cardiff' },
  { type: 'odi', runs: 112, against: 'England', latitude: 28.6377, longitude: 77.2433, venue: 'Feroz Shah Kotla Ground, Delhi' },
  { type: 'odi', runs: 117, against: 'West Indies', latitude: 17.7215, longitude: 83.3216, venue: 'ACA–VDCA Cricket Stadium, Visakhapatnam' },
  { type: 'odi', runs: 133, against: 'Sri Lanka', latitude: -42.8826, longitude: 147.3257, venue: 'Bellerive Oval, Hobart' },
  { type: 'odi', runs: 108, against: 'Sri Lanka', latitude: 23.8103, longitude: 90.4125, venue: 'Sher-e-Bangla Stadium, Dhaka' },
  { type: 'odi', runs: 183, against: 'Pakistan', latitude: 23.8103, longitude: 90.4125, venue: 'Sher-e-Bangla Stadium, Dhaka' },
  { type: 'odi', runs: 106, against: 'Sri Lanka', latitude: 6.1241, longitude: 81.1185, venue: 'MRIC Stadium, Hambantota' },
  { type: 'odi', runs: 128, against: 'Sri Lanka', latitude: 6.9271, longitude: 79.8612, venue: 'R. Premadasa Stadium, Colombo' },
  { type: 'odi', runs: 102, against: 'West Indies', latitude: 10.6667, longitude: -61.5189, venue: "Queen's Park Oval, Port of Spain" },
  { type: 'odi', runs: 115, against: 'Zimbabwe', latitude: -17.8252, longitude: 31.0335, venue: 'Harare Sports Club, Harare' },
  { type: 'odi', runs: 100, against: 'Australia', latitude: 26.9124, longitude: 75.7873, venue: 'Sawai Mansingh Stadium, Jaipur' },
  { type: 'odi', runs: 115, against: 'Australia', latitude: 21.0495, longitude: 79.0507, venue: 'VCA Stadium, Nagpur' },
  { type: 'odi', runs: 123, against: 'New Zealand', latitude: -39.4928, longitude: 176.9120, venue: 'McLean Park, Napier' },
  { type: 'odi', runs: 136, against: 'Bangladesh', latitude: 23.8584, longitude: 90.3590, venue: 'Khan Shaheb Osman Ali Stadium, Fatullah' },
  { type: 'odi', runs: 127, against: 'West Indies', latitude: 32.1971, longitude: 76.3233, venue: 'HPCA Stadium, Dharamshala' },
  { type: 'odi', runs: 139, against: 'Sri Lanka', latitude: 23.3441, longitude: 85.3096, venue: 'JSCA Stadium, Ranchi' },
  { type: 'odi', runs: 107, against: 'Pakistan', latitude: -34.9185, longitude: 138.5995, venue: 'Adelaide Oval, Adelaide' },
  { type: 'odi', runs: 138, against: 'South Africa', latitude: 13.0633, longitude: 80.2786, venue: 'M. A. Chidambaram Stadium, Chennai' },
  { type: 'odi', runs: 117, against: 'Australia', latitude: -37.8200, longitude: 144.9830, venue: 'Melbourne Cricket Ground, Melbourne' },
  { type: 'odi', runs: 106, against: 'Australia', latitude: -35.3206, longitude: 149.1330, venue: 'Manuka Oval, Canberra' },
  { type: 'odi', runs: 154, against: 'New Zealand', latitude: 30.6909, longitude: 76.7375, venue: 'IS Bindra Stadium, Mohali' },
  { type: 'odi', runs: 122, against: 'England', latitude: 18.6298, longitude: 73.8342, venue: 'Maharashtra Cricket Association Stadium, Pune' },
  { type: 'odi', runs: 111, against: 'West Indies', latitude: 18.0000, longitude: -76.7500, venue: 'Sabina Park, Kingston' },
  { type: 'odi', runs: 131, against: 'Sri Lanka', latitude: 6.9271, longitude: 79.8612, venue: 'R. Premadasa Stadium, Colombo' },
  { type: 'odi', runs: 110, against: 'Sri Lanka', latitude: 6.9271, longitude: 79.8612, venue: 'R. Premadasa Stadium, Colombo' },
  { type: 'odi', runs: 121, against: 'New Zealand', latitude: 18.9388, longitude: 72.8296, venue: 'Wankhede Stadium, Mumbai' },
  { type: 'odi', runs: 113, against: 'New Zealand', latitude: 26.4499, longitude: 80.3319, venue: 'Green Park Stadium, Kanpur' },
  { type: 'odi', runs: 112, against: 'South Africa', latitude: -29.8579, longitude: 31.0292, venue: 'Kingsmead Cricket Ground, Durban' },
  { type: 'odi', runs: 160, against: 'South Africa', latitude: -33.9274, longitude: 18.4233, venue: 'Newlands Cricket Ground, Cape Town' },
  { type: 'odi', runs: 129, against: 'South Africa', latitude: -25.8414, longitude: 28.1913, venue: 'SuperSport Park, Centurion' },
  { type: 'odi', runs: 140, against: 'West Indies', latitude: 26.1445, longitude: 91.7362, venue: 'ACA Stadium, Guwahati' },
  { type: 'odi', runs: 157, against: 'West Indies', latitude: 17.7215, longitude: 83.3216, venue: 'ACA–VDCA Cricket Stadium, Visakhapatnam' },
  { type: 'odi', runs: 107, against: 'West Indies', latitude: 18.6298, longitude: 73.8342, venue: 'Maharashtra Cricket Association Stadium, Pune' },
  { type: 'odi', runs: 104, against: 'Australia', latitude: -34.9185, longitude: 138.5995, venue: 'Adelaide Oval, Adelaide' },
  { type: 'odi', runs: 116, against: 'Australia', latitude: 21.0495, longitude: 79.0507, venue: 'Vidarbha Cricket Association Stadium, Nagpur' },
  { type: 'odi', runs: 123, against: 'Australia', latitude: 23.3441, longitude: 85.3096, venue: 'JSCA Stadium, Ranchi' },
  { type: 'odi', runs: 120, against: 'West Indies', latitude: 10.6667, longitude: -61.5189, venue: "Queen's Park Oval, Port of Spain" },
  { type: 'odi', runs: 114, against: 'West Indies', latitude: 10.6667, longitude: -61.5189, venue: "Queen's Park Oval, Port of Spain" },
  { type: 'odi', runs: 113, against: 'Bangladesh', latitude: 22.3569, longitude: 91.8317, venue: 'Zohur Ahmed Chowdhury Stadium, Chittagong' },
  { type: 'odi', runs: 113, against: 'Sri Lanka', latitude: 26.1445, longitude: 91.7362, venue: 'ACA Stadium, Guwahati' },
  { type: 'odi', runs: 166, against: 'Sri Lanka', latitude: 8.5241, longitude: 76.9366, venue: 'Greenfield International Stadium, Thiruvananthapuram' },
  { type: 'odi', runs: 122, against: 'Pakistan', latitude: 6.9271, longitude: 79.8612, venue: 'R. Premadasa Stadium, Colombo' },
  { type: 'odi', runs: 103, against: 'Bangladesh', latitude: 18.6298, longitude: 73.8342, venue: 'Maharashtra Cricket Association Stadium, Pune' },
  { type: 'odi', runs: 101, against: 'South Africa', latitude: 22.5646, longitude: 88.3433, venue: 'Eden Gardens, Kolkata' },
  { type: 'odi', runs: 117, against: 'New Zealand', latitude: 18.9388, longitude: 72.8296, venue: 'Wankhede Stadium, Mumbai' },

  // T20I Century
  { type: 't20i', runs: 122, against: 'Afghanistan', latitude: 25.0478, longitude: 55.2193, venue: 'Dubai International Cricket Stadium, Dubai' }
]