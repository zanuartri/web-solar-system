const DISTANCE_SCALE = 50; // Faktor jarak
const SIZE_SCALE = 1.5; // Faktor ukuran untuk visibilitas
const SPEED_SCALE = 10; // Faktor kecepatan untuk visibilitas

// Fungsi untuk menghitung jarak yang sudah diskalakan secara non-linear
const calculateDistance = (semiMajorAxis) =>
  Math.sqrt(semiMajorAxis) * DISTANCE_SCALE;

const planetData = [
  {
    name: "Merkurius",
    size: 0.38 * SIZE_SCALE,
    semiMajorAxis: calculateDistance(0.39),
    semiMajorAxisInfo: 0.39,
    eccentricity: 0.205,
    inclination: 7.0,
    color: "#b0b0b0",
    speed: 47.87 / SPEED_SCALE,
    info: {
      size: "4,879 km (0.38 x Bumi)",
      distanceFromSun: "57.9 juta km (0.39 AU)",
      rotationSpeed: {
        daily: "1,408 jam",
        yearly: "88 hari Bumi",
      },
    },
  },
  {
    name: "Venus",
    size: 0.95 * SIZE_SCALE,
    semiMajorAxis: calculateDistance(0.72),
    semiMajorAxisInfo: 0.72,
    eccentricity: 0.0067,
    inclination: 3.39,
    color: "#f5d76e",
    speed: 35.02 / SPEED_SCALE,
    info: {
      size: "12,104 km (0.95 x Bumi)",
      distanceFromSun: "108.2 juta km (0.72 AU)",
      rotationSpeed: {
        daily: "-5,832 jam (retrograde)",
        yearly: "224.7 hari Bumi",
      },
    },
  },
  {
    name: "Bumi",
    size: 1 * SIZE_SCALE,
    semiMajorAxis: calculateDistance(1.0),
    semiMajorAxisInfo: 1.0,
    eccentricity: 0.0167,
    inclination: 0.0,
    color: "#4a90e2",
    speed: 29.78 / SPEED_SCALE,
    info: {
      name: "Bumi",
      size: "12,742 km",
      distanceFromSun: "149.6 juta km (1 AU)",
      rotationSpeed: {
        daily: "24 jam",
        yearly: "365.25 hari",
      },
    },
  },
  {
    name: "Mars",
    size: 0.53 * SIZE_SCALE,
    semiMajorAxis: calculateDistance(1.52),
    semiMajorAxisInfo: 1.52,
    eccentricity: 0.0934,
    inclination: 1.85,
    color: "#d04e4e",
    speed: 24.07 / SPEED_SCALE,
    info: {
      size: "6,779 km (0.53 x Bumi)",
      distanceFromSun: "227.9 juta km (1.52 AU)",
      rotationSpeed: {
        daily: "24.6 jam",
        yearly: "687 hari Bumi",
      },
    },
  },
  {
    name: "Jupiter",
    size: 11.2 * SIZE_SCALE,
    semiMajorAxis: calculateDistance(5.2),
    semiMajorAxisInfo: 5.2,
    eccentricity: 0.0489,
    inclination: 1.3,
    color: "#f39c12",
    speed: 13.07 / SPEED_SCALE,
    info: {
      size: "139,820 km (11.2 x Bumi)",
      distanceFromSun: "778.5 juta km (5.2 AU)",
      rotationSpeed: {
        daily: "9.9 jam",
        yearly: "4,333 hari Bumi",
      },
    },
  },
  {
    name: "Saturnus",
    size: 9.14 * SIZE_SCALE,
    semiMajorAxis: calculateDistance(9.58),
    semiMajorAxisInfo: 9.58,
    eccentricity: 0.0565,
    inclination: 2.49,
    color: "#d4af37",
    speed: 9.69 / SPEED_SCALE,
    info: {
      size: "116,460 km (9.14 x Bumi)",
      distanceFromSun: "1.43 miliar km (9.58 AU)",
      rotationSpeed: {
        daily: "10.7 jam",
        yearly: "10,759 hari Bumi",
      },
    },
  },
  {
    name: "Uranus",
    size: 3.92 * SIZE_SCALE,
    semiMajorAxis: calculateDistance(19.2),
    semiMajorAxisInfo: 19.2,
    eccentricity: 0.046,
    inclination: 0.77,
    color: "#7fdbff",
    speed: 6.81 / SPEED_SCALE,
    info: {
      size: "50,724 km (3.92 x Bumi)",
      distanceFromSun: "2.87 miliar km (19.2 AU)",
      rotationSpeed: {
        daily: "-17.2 jam (retrograde)",
        yearly: "30,688 hari Bumi",
      },
    },
  },
  {
    name: "Neptunus",
    size: 3.86 * SIZE_SCALE,
    semiMajorAxis: calculateDistance(30.05),
    semiMajorAxisInfo: 30.05,
    eccentricity: 0.009,
    inclination: 1.77,
    color: "#2e86de",
    speed: 5.43 / SPEED_SCALE,
    info: {
      size: "49,244 km (3.86 x Bumi)",
      distanceFromSun: "4.5 miliar km (30.05 AU)",
      rotationSpeed: {
        daily: "16.1 jam",
        yearly: "60,182 hari Bumi",
      },
    },
  },
];

export default planetData;
