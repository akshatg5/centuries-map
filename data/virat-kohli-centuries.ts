export type CenturyType = 'test' | 'odi' | 't20i';

export interface Century {
  type: CenturyType;
  runs: number;
  against: string;
  lat: number;
  lng: number;
  venue: string;
}

export const centuries: Century[] = [
  // Test Centuries
  { type: 'test', runs: 116, against: 'Australia', lat: -34.9185, lng: 138.5995, venue: 'Adelaide Oval, Adelaide' },
  { type: 'test', runs: 103, against: 'New Zealand', lat: 12.9788, lng: 77.5996, venue: 'M. Chinnaswamy Stadium, Bangalore' },
  { type: 'test', runs: 103, against: 'England', lat: 21.0495, lng: 79.0507, venue: 'Vidarbha Cricket Association Stadium, Nagpur' },
  { type: 'test', runs: 107, against: 'Australia', lat: 13.0633, lng: 80.2786, venue: 'M. A. Chidambaram Stadium, Chennai' },
  { type: 'test', runs: 119, against: 'South Africa', lat: -26.1947, lng: 28.0568, venue: 'Wanderers Stadium, Johannesburg' },
  { type: 'test', runs: 105, against: 'New Zealand', lat: -41.2924, lng: 174.7787, venue: 'Basin Reserve, Wellington' },
  { type: 'test', runs: 115, against: 'Australia', lat: -34.9185, lng: 138.5995, venue: 'Adelaide Oval, Adelaide' },
  { type: 'test', runs: 141, against: 'Australia', lat: -34.9185, lng: 138.5995, venue: 'Adelaide Oval, Adelaide' },
  { type: 'test', runs: 169, against: 'Australia', lat: -37.8200, lng: 144.9830, venue: 'Melbourne Cricket Ground, Melbourne' },
  { type: 'test', runs: 147, against: 'Australia', lat: -33.8917, lng: 151.2247, venue: 'Sydney Cricket Ground, Sydney' },
  { type: 'test', runs: 103, against: 'Sri Lanka', lat: 6.0535, lng: 80.2210, venue: 'Galle International Stadium, Galle' },
  { type: 'test', runs: 200, against: 'West Indies', lat: 17.0608, lng: -61.7964, venue: 'Sir Vivian Richards Stadium, Antigua' },
  { type: 'test', runs: 211, against: 'New Zealand', lat: 22.7196, lng: 75.8577, venue: 'Holkar Stadium, Indore' },
  { type: 'test', runs: 167, against: 'England', lat: 17.7215, lng: 83.3216, venue: 'ACA-VDCA Cricket Stadium, Visakhapatnam' },
  { type: 'test', runs: 235, against: 'England', lat: 18.9388, lng: 72.8296, venue: 'Wankhede Stadium, Mumbai' },
  { type: 'test', runs: 204, against: 'Bangladesh', lat: 17.4156, lng: 78.5505, venue: 'Rajiv Gandhi Stadium, Hyderabad' },
  { type: 'test', runs: 103, against: 'Sri Lanka', lat: 6.0535, lng: 80.2210, venue: 'Galle International Stadium, Galle' },
  { type: 'test', runs: 104, against: 'Sri Lanka', lat: 22.5646, lng: 88.3433, venue: 'Eden Gardens, Kolkata' },
  { type: 'test', runs: 213, against: 'Sri Lanka', lat: 21.0495, lng: 79.0507, venue: 'Vidarbha Cricket Association Stadium, Nagpur' },
  { type: 'test', runs: 243, against: 'Sri Lanka', lat: 28.6377, lng: 77.2433, venue: 'Feroz Shah Kotla Ground, Delhi' },
  { type: 'test', runs: 153, against: 'South Africa', lat: -25.8414, lng: 28.1913, venue: 'SuperSport Park, Centurion' },
  { type: 'test', runs: 149, against: 'England', lat: 52.4858, lng: -1.9025, venue: 'Edgbaston, Birmingham' },
  { type: 'test', runs: 103, against: 'England', lat: 52.9386, lng: -1.1334, venue: 'Trent Bridge, Nottingham' },
  { type: 'test', runs: 139, against: 'West Indies', lat: 22.3039, lng: 70.7783, venue: 'Saurashtra Cricket Association Stadium, Rajkot' },
  { type: 'test', runs: 123, against: 'Australia', lat: -31.9511, lng: 115.8855, venue: 'Perth Stadium, Perth' },
  { type: 'test', runs: 254, against: 'South Africa', lat: 18.6298, lng: 73.8342, venue: 'Maharashtra Cricket Association Stadium, Pune' },
  { type: 'test', runs: 136, against: 'Bangladesh', lat: 22.5646, lng: 88.3433, venue: 'Eden Gardens, Kolkata' },
  { type: 'test', runs: 186, against: 'Australia', lat: 23.0918, lng: 72.5967, venue: 'Narendra Modi Stadium, Ahmedabad' },
  { type: 'test', runs: 121, against: 'West Indies', lat: 10.6667, lng: -61.5189, venue: "Queen's Park Oval, Port of Spain" },
  { type: 'test', runs: 100, against: 'Australia', lat: -31.9511, lng: 115.8855, venue: 'Perth Stadium, Perth' },

  // ODI Centuries
  { type: 'odi', runs: 107, against: 'Sri Lanka', lat: 22.5646, lng: 88.3433, venue: 'Eden Gardens, Kolkata' },
  { type: 'odi', runs: 102, against: 'Bangladesh', lat: 23.8103, lng: 90.4125, venue: 'Sher-e-Bangla Stadium, Dhaka' },
  { type: 'odi', runs: 118, against: 'Australia', lat: 17.7215, lng: 83.3216, venue: 'ACA–VDCA Cricket Stadium, Visakhapatnam' },
  { type: 'odi', runs: 105, against: 'New Zealand', lat: 26.1445, lng: 91.7362, venue: 'Nehru Stadium, Guwahati' },
  { type: 'odi', runs: 100, against: 'Bangladesh', lat: 23.8103, lng: 90.4125, venue: 'Sher-e-Bangla Stadium, Dhaka' },
  { type: 'odi', runs: 107, against: 'England', lat: 51.4837, lng: -3.1883, venue: 'Sophia Gardens, Cardiff' },
  { type: 'odi', runs: 112, against: 'England', lat: 28.6377, lng: 77.2433, venue: 'Feroz Shah Kotla Ground, Delhi' },
  { type: 'odi', runs: 117, against: 'West Indies', lat: 17.7215, lng: 83.3216, venue: 'ACA–VDCA Cricket Stadium, Visakhapatnam' },
  { type: 'odi', runs: 133, against: 'Sri Lanka', lat: -42.8826, lng: 147.3257, venue: 'Bellerive Oval, Hobart' },
  { type: 'odi', runs: 108, against: 'Sri Lanka', lat: 23.8103, lng: 90.4125, venue: 'Sher-e-Bangla Stadium, Dhaka' },
  { type: 'odi', runs: 183, against: 'Pakistan', lat: 23.8103, lng: 90.4125, venue: 'Sher-e-Bangla Stadium, Dhaka' },
  { type: 'odi', runs: 106, against: 'Sri Lanka', lat: 6.1241, lng: 81.1185, venue: 'MRIC Stadium, Hambantota' },
  { type: 'odi', runs: 128, against: 'Sri Lanka', lat: 6.9271, lng: 79.8612, venue: 'R. Premadasa Stadium, Colombo' },
  { type: 'odi', runs: 102, against: 'West Indies', lat: 10.6667, lng: -61.5189, venue: "Queen's Park Oval, Port of Spain" },
  { type: 'odi', runs: 115, against: 'Zimbabwe', lat: -17.8252, lng: 31.0335, venue: 'Harare Sports Club, Harare' },
  { type: 'odi', runs: 100, against: 'Australia', lat: 26.9124, lng: 75.7873, venue: 'Sawai Mansingh Stadium, Jaipur' },
  { type: 'odi', runs: 115, against: 'Australia', lat: 21.0495, lng: 79.0507, venue: 'VCA Stadium, Nagpur' },
  { type: 'odi', runs: 123, against: 'New Zealand', lat: -39.4928, lng: 176.9120, venue: 'McLean Park, Napier' },
  { type: 'odi', runs: 136, against: 'Bangladesh', lat: 23.8584, lng: 90.3590, venue: 'Khan Shaheb Osman Ali Stadium, Fatullah' },
  { type: 'odi', runs: 127, against: 'West Indies', lat: 32.1971, lng: 76.3233, venue: 'HPCA Stadium, Dharamshala' },
  { type: 'odi', runs: 139, against: 'Sri Lanka', lat: 23.3441, lng: 85.3096, venue: 'JSCA Stadium, Ranchi' },
  { type: 'odi', runs: 107, against: 'Pakistan', lat: -34.9185, lng: 138.5995, venue: 'Adelaide Oval, Adelaide' },
  { type: 'odi', runs: 138, against: 'South Africa', lat: 13.0633, lng: 80.2786, venue: 'M. A. Chidambaram Stadium, Chennai' },
  { type: 'odi', runs: 117, against: 'Australia', lat: -37.8200, lng: 144.9830, venue: 'Melbourne Cricket Ground, Melbourne' },
  { type: 'odi', runs: 106, against: 'Australia', lat: -35.3206, lng: 149.1330, venue: 'Manuka Oval, Canberra' },
  { type: 'odi', runs: 154, against: 'New Zealand', lat: 30.6909, lng: 76.7375, venue: 'IS Bindra Stadium, Mohali' },
  { type: 'odi', runs: 122, against: 'England', lat: 18.6298, lng: 73.8342, venue: 'Maharashtra Cricket Association Stadium, Pune' },
  { type: 'odi', runs: 111, against: 'West Indies', lat: 18.0000, lng: -76.7500, venue: 'Sabina Park, Kingston' },
  { type: 'odi', runs: 131, against: 'Sri Lanka', lat: 6.9271, lng: 79.8612, venue: 'R. Premadasa Stadium, Colombo' },
  { type: 'odi', runs: 110, against: 'Sri Lanka', lat: 6.9271, lng: 79.8612, venue: 'R. Premadasa Stadium, Colombo' },
  { type: 'odi', runs: 121, against: 'New Zealand', lat: 18.9388, lng: 72.8296, venue: 'Wankhede Stadium, Mumbai' },
  { type: 'odi', runs: 113, against: 'New Zealand', lat: 26.4499, lng: 80.3319, venue: 'Green Park Stadium, Kanpur' },
  { type: 'odi', runs: 112, against: 'South Africa', lat: -29.8579, lng: 31.0292, venue: 'Kingsmead Cricket Ground, Durban' },
  { type: 'odi', runs: 160, against: 'South Africa', lat: -33.9274, lng: 18.4233, venue: 'Newlands Cricket Ground, Cape Town' },
  { type: 'odi', runs: 129, against: 'South Africa', lat: -25.8414, lng: 28.1913, venue: 'SuperSport Park, Centurion' },
  { type: 'odi', runs: 140, against: 'West Indies', lat: 26.1445, lng: 91.7362, venue: 'ACA Stadium, Guwahati' },
  { type: 'odi', runs: 157, against: 'West Indies', lat: 17.7215, lng: 83.3216, venue: 'ACA–VDCA Cricket Stadium, Visakhapatnam' },
  { type: 'odi', runs: 107, against: 'West Indies', lat: 18.6298, lng: 73.8342, venue: 'Maharashtra Cricket Association Stadium, Pune' },
  { type: 'odi', runs: 104, against: 'Australia', lat: -34.9185, lng: 138.5995, venue: 'Adelaide Oval, Adelaide' },
  { type: 'odi', runs: 116, against: 'Australia', lat: 21.0495, lng: 79.0507, venue: 'Vidarbha Cricket Association Stadium, Nagpur' },
  { type: 'odi', runs: 123, against: 'Australia', lat: 23.3441, lng: 85.3096, venue: 'JSCA Stadium, Ranchi' },
  { type: 'odi', runs: 120, against: 'West Indies', lat: 10.6667, lng: -61.5189, venue: "Queen's Park Oval, Port of Spain" },
  { type: 'odi', runs: 114, against: 'West Indies', lat: 10.6667, lng: -61.5189, venue: "Queen's Park Oval, Port of Spain" },
  { type: 'odi', runs: 113, against: 'Bangladesh', lat: 22.3569, lng: 91.8317, venue: 'Zohur Ahmed Chowdhury Stadium, Chittagong' },
  { type: 'odi', runs: 113, against: 'Sri Lanka', lat: 26.1445, lng: 91.7362, venue: 'ACA Stadium, Guwahati' },
  { type: 'odi', runs: 166, against: 'Sri Lanka', lat: 8.5241, lng: 76.9366, venue: 'Greenfield International Stadium, Thiruvananthapuram' },
  { type: 'odi', runs: 122, against: 'Pakistan', lat: 6.9271, lng: 79.8612, venue: 'R. Premadasa Stadium, Colombo' },
  { type: 'odi', runs: 103, against: 'Bangladesh', lat: 18.6298, lng: 73.8342, venue: 'Maharashtra Cricket Association Stadium, Pune' },
  { type: 'odi', runs: 101, against: 'South Africa', lat: 22.5646, lng: 88.3433, venue: 'Eden Gardens, Kolkata' },
  { type: 'odi', runs: 117, against: 'New Zealand', lat: 18.9388, lng: 72.8296, venue: 'Wankhede Stadium, Mumbai' },

  // T20I Century
  { type: 't20i', runs: 122, against: 'Afghanistan', lat: 25.0478, lng: 55.2193, venue: 'Dubai International Cricket Stadium, Dubai' }
]