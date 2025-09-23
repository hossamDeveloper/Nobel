export const categories = [
  {
    id: "centrifugal-fan",
    name: "Centrifugal Fan",
    description: "Heavy-duty centrifugal fans for industrial ventilation and air movement applications with high efficiency and reliability.",
    image: "src/assets/hero-image.jpg",
    subcategories: [
      { id: "heavy-duty", name: "Heavy Duty" },
      { id: "transport", name: "Transport Series" },
      { id: "box-fans", name: "Box Fans" }
    ]
  },
  {
    id: "axial-fans",
    name: "Axial Fans Ventilation",
    description: "High-performance axial fans designed for efficient air circulation in various industrial and commercial applications.",
    image: "src/assets/hero-image.jpg",

    subcategories: []
  },
  {
    id: "roof-top-fans",
    name: "Roof Top Fans",
    description: "Durable roof-mounted fans for building ventilation systems with weather-resistant construction.",
    image: "src/assets/hero-image.jpg",

    subcategories: []
  },
  {
    id: "air-filtering",
    name: "Air Filtering System",
    description: "Advanced air filtration systems for clean air management in industrial environments and production facilities.",
    image: "src/assets/hero-image.jpg",

    subcategories: []
  },
  {
    id: "custom-ventilators",
    name: "Custom Ventilators",
    description: "Bespoke ventilation solutions tailored to specific industrial requirements and challenging applications.",
    image: "src/assets/hero-image.jpg",

    subcategories: []
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Complete range of ventilation accessories including dampers, grilles, and mounting systems.",
    image: "src/assets/hero-image.jpg",

    subcategories: []
  },
  {
    id: "smoke-axial",
    name: "Smoke Axial Inline Fans",
    description: "Specialized smoke extraction fans for fire safety systems in buildings, tunnels, and parking areas.",
    image: "src/assets/hero-image.jpg",

    subcategories: []
  },
  {
    id: "smoke-centrifugal",
    name: "Smoke Centrifugal Fans",
    description: "High-temperature centrifugal fans designed for smoke evacuation in emergency ventilation systems.",
    image: "src/assets/hero-image.jpg",

    subcategories: []
  }
];

// Helper function to generate all products including series
export const generateAllProducts = () => {
  const allProducts = [];
  let productId = 1;

  // Main products data
  const mainProducts = [
    {
      id: productId++,
      name: "Centrifugal Fan - Heavy Duty",
      category: "centrifugal-fan",
      subcategory: "heavy-duty",
      description: "NOBEL CENTRIFUGAL FANS ARE SUITABLE FOR THE EXHAUST OF CLEAN AIR, LIGHTLY DUSTY. Low, medium, and high pressure, single and double inlet models with various volume flow for different necessities. Backward impellers with high efficiency, featuring flat, wing, and scirocco profiles.",
      icon: "",
      image: "src/assets/hero-image.jpg",
      isMainProduct: true,
      specifications: {
        wheelSizes: "310 mm up to 2000 mm",
        volumeFlow: "2000 m3/h up to 600000 m3/h",
        pressure: "up to 1800 mm/h20"
      },
      series: [
        {
          name: "BACKWARD BLADE WING PROFILE - NBA series",
          description: "Low noise. For a fan the source of noise is mainly the airturbulence created by the impeller. The NBA series has been created to obtain the lowest noise thank to the aerodynamic profile of the inlet cone and of the static and dynamic balancing of the impeller",
          image: "src/assets/slider-1.jpg",
          specifications: {
            volume: "from 2000 m3/h up to 250000 m3/h",
            pressure: "from 20 mm/H20 up to 350mm/H20",
            temperature: "up to 300 C"
          }
        },
        {
          name: "BACKWARD BLADE FLAT PROFILE - NBR series",
          description: "Low noise. For a fan the source of noise is mainly the air turbulence created by the impeller. The NBR series has been created to obtain the lowest noise thank to the aerodynamic profile of the inlet cone and of the static and dynamic balancing of the impeller.",
          image: "src/assets/slider-2.jpg",
          specifications: {
            volume: "from 2000 m3/h up to 250000 m3/h",
            pressure: "from 20 mm/H20 up to 350mm/H20",
            temperature: "up to 300 C"
          }
        },
        {
          name: "SCIROCCO PROFILE - NBS series",
          description: "The NBS series is suitable when low noise performances are required. The 'scirocco' profile of blades allows a very low rotation speed with a limited mechanical noisiness. Efficiency can be up to 64%.",
          image: "src/assets/50-D3T6-8eR.jpg",
          specifications: {
            volume: "from 1000 m3/h up to 250000 m3/h",
            pressure: "from 30 mm/H20 up to 150mm/H20",
            temperature: "up to 150 C"
          }
        },
        {
          name: "BACKWARD BLADE WING PROFILE - NPD series",
          description: "Suitable for severe and difficult application and for the various industrial applications where a complete reliability of the product is necessary. Application sectors are pneumatic transportation, chemical industries, silos and metallurgic industries.",
          image: "src/assets/hero-image.jpg",
          specifications: {
            volume: "from 1000 m3/h up to 160000 m3/h",
            pressure: "from 100 mm/H20 up to 1000 mm/H20",
            temperature: "up to 90 C and up to 400 C with shaft cooler and hollow shaft"
          }
        },
        {
          name: "BACKWARD BLADE FLAT PROFILE - NPE series",
          description: "Suitable for severe and difficult application and for the various industrial applications where a complete reliability of the product is necessary. Application sectors are pneumatic transportation, chemical industries, silos and metallurgic industries.",
          image: "src/assets/slider-1.jpg",
          specifications: {
            volume: "from 500 m3/h up to 100000 m3/h",
            pressure: "from 150 mm/H20 up to 1000 mm/H20",
            temperature: "up to 90 C and up to 400 C with shaft cooler and hollow shaft"
          }
        }
      ]
    },
    {
      id: productId++,
      name: "Centrifugal Fan - Transport Series",
      category: "centrifugal-fan",
      subcategory: "transport",
      description: "Fan series NT is suitable for the exhaust of dusty air and transportation of filamentous substances. Low, medium and high pressure models with various volume flow for the different necessities",
      icon: "",
      image: "src/assets/slider-1.jpg",
      isMainProduct: true,
      specifications: {
        wheelSizes: "300 mm up to 1600 mm",
        volumeFlow: "1000 m3/h up to 100000 m3/h",
        pressure: "up to 700 mm/H20"
      },
      series: [
        {
          name: "BACKWARD BLADES - NTRO series",
          description: "These types of fan are designed for the handling of air, fumes or gases or where light concentration of dust or material are present.",
          image: "src/assets/slider-2.jpg",
          specifications: {
            wheelSizes: "300 mm up to 1600 mm",
            volume: "from 1000 m3/h up to 100000 m3/h",
            pressure: "up to 700 mm/H2o"
          }
        },
        {
          name: "RADIAL BLADES - NTRA series",
          description: "This type of fan is designed for the handling of air, fumes or gases either clean or containing dry granular material, dust exhaust from buffing and grinding wheels, conveying all types of materials.",
          image: "src/assets/50-D3T6-8eR.jpg",
          specifications: {
            wheelSizes: "300 mm up to 1600 mm",
            volume: "from 1000 m3/h up to 100000 m3/h",
            pressure: "up to 700 mm/H2o"
          }
        },
        {
          name: "OPEN BLADES - NTAP series",
          description: "This type of fan is designed to convey or handle air or gases containing material. It is ideal for sticky, heavy or abrasive dust problems.",
          image: "src/assets/hero-image.jpg",
          specifications: {
            wheelSizes: "300 mm up to 1600 mm",
            volume: "from 1000 m3/h up to 100000 m3/h",
            pressure: "up to 700 mm/H2o"
          }
        }
      ]
    },
    {
      id: productId++,
      name: "Centrifugal Fan - Box Fans",
      category: "centrifugal-fan",
      subcategory: "box-fans",
      description: "Box fans are particularly designed for air extraction, filtration systems, and air conditioning plants where low noise emission is necessary. They are suitable for civil and industrial applications.",
      icon: "",
      image: "src/assets/slider-2.jpg",
      isMainProduct: true,
      specifications: {
        volumeFlow: "100 m3/h up to 500000 m3/h",
        pressure: "5 mm/H20 up to 150 mm/H20"
      },
      series: [
        {
          name: "IN LINE",
          description: "Suited to ventilate and convey clean air up to a maximum temperature of 60C. The low noise level and the medium pressure head make them ideal for industrial and residential installations.",
          image: "src/assets/slider-1.jpg",
          specifications: {
            volume: "from 100 m3/h up to 250000 m3/h",
            pressure: "from 5 mm/H20 up to 110 mm/H20"
          }
        },
        {
          name: "DIRECT DRIVE DOUBLE INLET",
          description: "Suited to ventilate and convey clean air up to a maximum temperature of 400C. The low noise level and the high compactness head make them ideal in ventilation plants with limited space like offices and shops.",
          image: "src/assets/slider-2.jpg",
          specifications: {
            volume: "from 200 m3/h up to 6500 m3/h",
            pressure: "from 10 mm/H20 up to 80 mm/H20"
          }
        },
        {
          name: "DOUBLE INLET BELT DRIVEN",
          description: "Suitable where air extracting or filtering is necessary. The low noise level head makes them ideal for environments like offices, bars, and gymnasiums.",
          image: "src/assets/50-D3T6-8eR.jpg",
          specifications: {
            volume: "from 750 m3/h up to 500000 m3/h",
            pressure: "from 30 mm/H20 up to 150 mm/H20"
          }
        },
        {
          name: "PLUG FAN - NPLG series",
          description: "In most instances, plug fans are unhoused and rely on the plenum space around the wheel to direct airflow as required in the system. This style of fan designed with the motor, bearings, and drives out of the airstream.",
          image: "src/assets/hero-image.jpg",
          specifications: {
            volume: "up to 7000 cfm (118931m3/hr)",
            pressure: "Maximum pressures of 8 in. wg (1984 Pa)",
            temperature: "Maximum operating temperature of 800F (426C)"
          }
        }
      ]
    },
    {
      id: productId++,
      name: "Axial Fans Ventilation",
      category: "axial-fans",
      subcategory: "",
      description: "The NEA/D and NET/D series are primarily designed for air ventilation, either supply or exhaust duty.",
      icon: "",
      image: "src/assets/50-D3T6-8eR.jpg",
      isMainProduct: true,
      specifications: {
        wheelSizes: "250 mm up to 1000 mm",
        volumeFlow: "600 m3/h up to 180000 m3/h",
        pressure: "3 mm/H20 up to 25 mm/H20"
      },
      series: [
        {
          name: "RING - NEA/D series",
          description: "The NEA/D series are primarily designed for air ventilation, either supply or exhaust duty.",
          image: "src/assets/slider-1.jpg",
          specifications: {
            wheelSizes: "400 mm up to 1000 mm",
            volume: "from 1000 m3/h up to 43000 m3/h",
            pressure: "from 3 mm/H20 up to 25 mm/H20"
          }
        },
        {
          name: "PLATE MOUNTED - NET/D series",
          description: "The NET/D series are primarily designed for air ventilation, either supply or exhaust duty.",
          image: "src/assets/slider-2.jpg",
          specifications: {
            wheelSizes: "250 mm up to 710 mm",
            volume: "from 600 m3/h to 180000 m3/h",
            pressure: "from 3 mm/H20 up to 25 mm/H20"
          }
        },
        {
          name: "DUCTED DIRECT DRIVEN WING BLADES - NEI/D series",
          description: "Suitable for the exhaust of smoke, dusty foul and humid air up to a maximum temperature of 600C.",
          image: "src/assets/50-D3T6-8eR.jpg",
          specifications: {
            wheelSizes: "400 mm up to 2240 mm",
            volume: "from 600 m3/h up to 250000 m3/h",
            pressure: "from 5 mm/H20 up to 100 mm/H20"
          }
        },
        {
          name: "DUCTED DIRECT DRIVEN - EIH series",
          description: "Suitable for the exhaust of smoke, dusty foul and humid air up to a maximum temperature of 600C.",
          image: "src/assets/hero-image.jpg",
          specifications: {
            wheelSizes: "400 mm up to 2240 mm",
            volume: "from 1200 m3/h up to 250000 m3/h",
            pressure: "from 5 mm/H20 up to 100 mm/H20"
          }
        },
        {
          name: "DUCTED DOUBLE INLET FANS - NEI2/D series",
          description: "Suitable for the exhaust of smoke, dusty foul and humid air up to a maximum temperature of 60C. The product has been especially developed and designed to create the required ventilation within tunnels.",
          image: "src/assets/slider-1.jpg",
          specifications: {
            wheelSizes: "500 mm up to 1250 mm",
            volume: "from 18000 m3/h up to 175000 m3/h",
            pressure: "from 152 newton up to newton"
          }
        }
      ]
    },
    {
      id: productId++,
      name: "Roof Top Fans",
      category: "roof-top-fans",
      subcategory: "",
      description: "The NE and NC series are widely used in civil and industrial ventilation plants. They are mainly suitable as exhausters for high air volumes.",
      icon: "",
      image: "src/assets/hero-image.jpg",
      isMainProduct: true,
      specifications: {
        wheelSizes: "210 mm up to 900 mm",
        volumeFlow: "300 m3/h up to 530000 m3/h",
        pressure: "2 mm/h20 up to 65 mm/h2O"
      },
      series: [
        {
          name: "AXIAL ROOF FANS - NE series",
          description: "The NE series is widely used in civil and industrial ventilation plants. They are mainly suitable as exhausters for high air volumes. The maximum of the fluid in continuous operation is 400C.",
          image: "src/assets/slider-2.jpg",
          specifications: {
            wheelSizes: "400 mm up to 900 mm",
            volume: "from 2300 m3/h up to 530000 m3/h",
            pressure: "up to 2 mm/h20 up to 30 mm/h2O"
          }
        },
        {
          name: "CENTRIFUGAL ROOF FANS - NC series",
          description: "The NC series is widely used in civil and industrial ventilation plants. They are mainly suitable as air exhausters. The maximum of the fluid in continuous operation is 400C.",
          image: "src/assets/50-D3T6-8eR.jpg",
          specifications: {
            wheelSizes: "210 mm up to 620 mm",
            volume: "from 300 m3/h up to 20000 m3/h",
            pressure: "up to 2 mm/h20 up to 65 mm/h2O"
          }
        }
      ]
    },
    {
      id: productId++,
      name: "Air Filtering System",
      category: "air-filtering",
      subcategory: "",
      description: "EXTRACTION PLANTS AND AIR FILTERING SYSTEM - Complete range of filtration solutions for industrial applications.",
      icon: "",
      image: "src/assets/slider-1.jpg",
      isMainProduct: true,
      specifications: {
        volumeFlow: "up to 250000 m3/h",
        pressure: "up to 50 mm/H20"
      },
      series: [
        {
          name: "CARTRIDGE EXTRACTION AND FILTRATION PLANTS",
          description: "Cartridges filter at high efficiency also with very thin dust. The limited sizes allow the installation inside of the production plants and close to the source of pollution. Suitable for use by chemical, foodstuff, metallurgic and ceramic working industries.",
          image: "src/assets/slider-2.jpg",
          specifications: {
            volume: "up to 150000 m3/h"
          }
        },
        {
          name: "SLEEVES EXTRACTION AND FILTRATION PLANTS",
          description: "Sleeves filter at high efficiency. Suitable in all environment where there is a need to separate dry dust. Suitable for use by chemical, petrochemical and ceramic working industries.",
          image: "src/assets/50-D3T6-8eR.jpg",
          specifications: {
            volume: "up to 250000 m3/h"
          }
        },
        {
          name: "ACTIVE COAL FILTRATION PLANTS",
          description: "Compact filtration plant easy to move. Environments where industrial processes creates gas and smoke emissions. Smokes exhausted are profiteered and conveyed to the absolute filter of large loss surface.",
          image: "src/assets/hero-image.jpg",
          specifications: {
            volume: "up to 2000 m3/h",
            pressure: "up to 50 mm/H20"
          }
        }
      ]
    },
    {
      id: productId++,
      name: "Custom Ventilators",
      category: "custom-ventilators",
      subcategory: "",
      description: "NOBEL custom-engineered products are designed to answer to exacting specifications. Designs meet specific flow, pressure, temperature, leak integrity, and configuration requirements.",
      icon: "",
      image: "src/assets/slider-2.jpg",
      isMainProduct: true,
      specifications: {
        customDesign: "Tailored to specific requirements",
        applications: "All industrial sectors"
      },
      series: [
        {
          name: "CUSTOM VENTILATORS",
          description: "NOBEL custom-engineered products are designed to answer to exacting specifications. Designs meet specific flow, pressure, temperature, leak integrity, and configuration requirements. NOBEL technical department is at your disposal to study the project.",
          image: "src/assets/slider-1.jpg",
          specifications: {
            design: "Custom specifications",
            flow: "Specific flow requirements",
            pressure: "Pressure optimization",
            temperature: "Temperature resistance",
            configuration: "Bespoke design"
          }
        }
      ]
    },
    {
      id: productId++,
      name: "Accessories",
      category: "accessories",
      subcategory: "",
      description: "Complete range of accessories for ventilation systems including dampers and air outlets.",
      icon: "",
      image: "src/assets/50-D3T6-8eR.jpg",
      isMainProduct: true,
      specifications: {
        types: "Dampers and Air Outlets",
        materials: "Aluminum and steel construction"
      },
      series: [
        {
          name: "DAMPERS",
          description: "A damper is a valve or plate that stops or regulates the flow of air inside a duct, chimney, VAV box, air handler, or other air handling equipment. A damper may be used to cut off central air conditioning (heating or cooling) to an unused room, or to regulate it for room-by-room temperature and climate control.",
          image: "src/assets/slider-2.jpg",
          specifications: {
            operation: "Manual or automatic",
            control: "Electric or pneumatic motors",
            application: "All air handling systems"
          }
        },
        {
          name: "AIR OUTLETS",
          description: "NOBEL has a wide range of aluminum grilles designed for use as supply and exhaust air devices and transfer air units for example in offices and commercial premises. Product range includes grilles for wall, ceiling, floor, windowsill, and door mounting.",
          image: "src/assets/hero-image.jpg",
          specifications: {
            material: "Aluminum construction",
            mounting: "Wall, ceiling, floor, windowsill, and door",
            application: "Offices and commercial premises"
          }
        }
      ]
    },
    {
      id: productId++,
      name: "Smoke Axial Inline Fans",
      category: "smoke-axial",
      subcategory: "",
      description: "This series is used for smoke evacuation from various types of applications such as (Tunnels - high rise buildings  car parkings -etc..) Where it's from the highest recommended fan types when the high total and static efficiencies are required.",
      icon: "",
      image: "src/assets/hero-image.jpg",
      isMainProduct: true,
      specifications: {
        wheelSizes: "300 mm up to 2240 mm",
        volumeFlow: "1000 m3/h up to 250000 m3/h",
        pressure: "5 mm/H20 up to 350 mm/H20",
        temperature: "400C/2hrs"
      },
      series: [
        {
          name: "Axial inline smoke bifurcated fans - NSAF/1 series",
          description: "This series is used for smoke evacuation from various types of applications such as (Tunnels - high rise buildings  car parkings -etc..) Where it's from the highest recommended fan types when the high total and static efficiencies are required since due to the aerodynamic airfoil and also the fan body profile which achieves the minimum losses in the air flow due to pressure drag which makes it from the minimum power consumers",
          image: "src/assets/slider-1.jpg",
          specifications: {
            wheelSizes: "300 mm up to 2000 mm",
            volume: "from 1000 m3/h up to 200000 m3/h",
            pressure: "from 5 mm/H20 up to 300 mm/H20",
            motor: "thermal insulation (class F)"
          }
        },
        // {
        //   name: "Axial inline smoke bifurcated fans - NSAF/2 series",
        //   description: "This series is used for smoke evacuation from various types of applications such as (Tunnels - high rise buildings  car parkings -etc..) Where high flow range could be achieved and also equipped with aerodynamic airfoil profile diecast aluminum blade for excellent efficiency",
        //   image: "src/assets/slider-2.jpg",
        //   specifications: {
        //     wheelSizes: "300 mm up to 2240 mm",
        //     volume: "from 1000 m3/h up to 250000 m3/h",
        //     pressure: "from 5 mm/H20 up to 350mm/H20",
        //     motor: "thermal insulation (class F)"
        //   }
        // },
        // {
        //   name: "Axial inline smoke bifurcated fans - NSAH series",
        //   description: "This series is used for smoke evacuation from various types of applications such as (Tunnels - high rise buildings  car parkings -etc..) Where high flow range could be achieved and also equipped with aerodynamic airfoil profile diecast aluminum blade for excellent efficiency",
        //   image: "src/assets/50-D3T6-8eR.jpg",
        //   specifications: {
        //     wheelSizes: "300 mm up to 2240 mm",
        //     volume: "from 1000 m3/h up to 250000 m3/h",
        //     pressure: "from 5 mm/H20 up to 350mm/H20",
        //     motor: "thermal insulation (class H)"
        //   }
        // }
      ]
    },
    {
      id: productId++,
      name: "Smoke Centrifugal Fans",
      category: "smoke-centrifugal",
      subcategory: "",
      description: "This series is used for smoke evacuation from various types of buildings. It can achieve a wider static pressure range than axial fans and is more durable due to its reinforced construction, capable of withstanding temperatures exceeding 900C.",
      icon: "",
      image: "src/assets/slider-1.jpg",
      isMainProduct: true,
      specifications: {
        wheelSizes: "310 mm up to 1800 mm",
        volumeFlow: "2000 m3/h up to 250000 m3/h",
        pressure: "30 mm/H2O up to 350 mm/H2O",
        temperature: "400C/2hrs"
      },
      series: [
        {
          name: "Centrifugal smoke Fan - VBRS series",
          description: "This series is used for smoke evacuation from various types of buildings. It can achieve a wider static pressure range than axial fans and is more durable due to its reinforced construction, capable of withstanding temperatures exceeding 900C.",
          image: "src/assets/slider-2.jpg",
          specifications: {
            wheelSizes: "310 mm up to 1800 mm",
            volume: "from 2000 m3/h up to 250000 m3/h",
            pressure: "from 30 mm/H2O up to 350 mm/H2O",
            motor: "thermal insulation (class F)"
          }
        }
      ]
    }
  ];

  // Add all main products
  allProducts.push(...mainProducts);

  // Add all series as separate products
  mainProducts.forEach(mainProduct => {
    if (mainProduct.series) {
      mainProduct.series.forEach(series => {
        allProducts.push({
          id: productId++,
          name: series.name,
          category: mainProduct.category,
          subcategory: mainProduct.subcategory,
          description: series.description,
          icon: mainProduct.icon,
          image: series.image,
          isMainProduct: false,
          parentProduct: mainProduct.name,
          specifications: series.specifications
        });
      });
    }
  });

  return allProducts;
};

export const products = generateAllProducts();

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductsBySubcategory = (categoryId, subcategoryId) => {
  return products.filter(product => 
    product.category === categoryId && product.subcategory === subcategoryId
  );
};
