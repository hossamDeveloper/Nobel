export const categories = [
  {
    id: "centrifugal-fan",
    name: "Centrifugal Fan",
    description: "Heavy-duty centrifugal fans for industrial ventilation and air movement applications with high efficiency and reliability.",
    image: "src/assets/nbd.png",
    subcategories: []
  },
  {
    id: "axial-fans",
    name: "Axial Fans Ventilation",
    description: "High-performance axial fans designed for efficient air circulation in various industrial and commercial applications.",
    image: "src/assets/nead.png",

    subcategories: []
  },
  {
    id: "roof-top-fans",
    name: "Roof Top Fans",
    description: "Durable roof-mounted fans for building ventilation systems with weather-resistant construction.",
    image: "src/assets/axial-roof-fans-ne-serie.png",

    subcategories: []
  },
  {
    id: "air-filtering",
    name: "Air Filtering System",
    description: "Advanced air filtration systems for clean air management in industrial environments and production facilities.",
    image: "src/assets/seafp.png",

    subcategories: []
  },
  {
    id: "custom-ventilators",
    name: "Custom Ventilators",
    description: "Bespoke ventilation solutions tailored to specific industrial requirements and challenging applications.",
    image: "src/assets/cv.png",

    subcategories: []
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Complete range of ventilation accessories including dampers, grilles, and mounting systems.",
    image: "https://www.glacier-technology.com/wp-content/uploads/2019/11/Damper-Category-Collage-1.png",

    subcategories: []
  },
  {
    id: "smoke-axial",
    name: "Smoke Axial Inline Fans",
    description: "Specialized smoke extraction fans for fire safety systems in buildings, tunnels, and parking areas.",
    image: "src/assets/axial-inline-smoke-bifurcated-fans-nsaf1-series.png",

    subcategories: []
  },
  {
    id: "smoke-centrifugal",
    name: "Smoke Centrifugal Fans",
    description: "High-temperature centrifugal fans designed for smoke evacuation in emergency ventilation systems.",
    image: "src/assets/nprs.png",

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
      subcategory: "",
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
          image: "src/assets/products/nba.png",
          specifications: {
            volume: "from 2000 m3/h up to 250000 m3/h",
            pressure: "from 20 mm/H20 up to 350mm/H20",
            temperature: "up to 300 C"
          }
        },
        {
          name: "BACKWARD BLADE FLAT PROFILE - NBR series",
          description: "Low noise. For a fan the source of noise is mainly the air turbulence created by the impeller. The NBR series has been created to obtain the lowest noise thank to the aerodynamic profile of the inlet cone and of the static and dynamic balancing of the impeller.",
          image: "src/assets/products/nbr.png",
          specifications: {
            volume: "from 2000 m3/h up to 250000 m3/h",
            pressure: "from 20 mm/H20 up to 350mm/H20",
            temperature: "up to 300 C"
          }
        },
        {
          name: "SCIROCCO PROFILE - NBS series",
          description: "The NBS series is suitable when low noise performances are required. The 'scirocco' profile of blades allows a very low rotation speed with a limited mechanical noisiness. Efficiency can be up to 64%.",
          image: "src/assets/products/nbs.png",
          specifications: {
            volume: "from 1000 m3/h up to 250000 m3/h",
            pressure: "from 30 mm/H20 up to 150mm/H20",
            temperature: "up to 150 C"
          }
        },
        {
          name: "BACKWARD BLADE WING PROFILE - NPD series",
          description: "Suitable for severe and difficult application and for the various industrial applications where a complete reliability of the product is necessary. Application sectors are pneumatic transportation, chemical industries, silos and metallurgic industries.",
          image: "src/assets/products/nbd.png",
          specifications: {
            volume: "from 1000 m3/h up to 160000 m3/h",
            pressure: "from 100 mm/H20 up to 1000 mm/H20",
            temperature: "up to 90 C and up to 400 C with shaft cooler and hollow shaft"
          }
        },
       
      ]
    },
    {
      id: productId++,
      name: "Centrifugal Fan - Transport Series",
      category: "centrifugal-fan",
      subcategory: "",
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
       
        
      ]
    },
    {
      id: productId++,
      name: "Centrifugal Fan - Box Fans",
      category: "centrifugal-fan",
      subcategory: "",
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
          name: "PLUG FAN - NP series",
          description: "In most instances, plug fans are unhoused and rely on the plenum space around the wheel to direct airflow as required in the system. This style of fan designed with the motor, bearings, and drives out of the airstream.",
          image: "src/assets/np.png",
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
          name: "Axial inline - NEA/D series",
          description: "The NEA/D series are primarily designed for air ventilation, either supply or exhaust duty.",
          image: "src/assets/nead.png",
          specifications: {
            wheelSizes: "400 mm up to 1000 mm",
            volume: "from 1000 m3/h up to 43000 m3/h",
            pressure: "from 3 mm/H20 up to 25 mm/H20"
          }
        },
        {
          name: "PLATE MOUNTED - NET/D series",
          description: "The NET/D series are primarily designed for air ventilation, either supply or exhaust duty.",
          image: "src/assets/products/netd.png",
          specifications: {
            wheelSizes: "250 mm up to 710 mm",
            volume: "from 600 m3/h to 180000 m3/h",
            pressure: "from 3 mm/H20 up to 25 mm/H20"
          }
        },
        {
          name: "DUCTED DIRECT DRIVEN WING BLADES - NEI/D series",
          description: "Suitable for the exhaust of smoke, dusty foul and humid air up to a maximum temperature of 600C.",
          image: "src/assets/products/neid.png",
          specifications: {
            wheelSizes: "400 mm up to 2240 mm",
            volume: "from 600 m3/h up to 250000 m3/h",
            pressure: "from 5 mm/H20 up to 100 mm/H20"
          }
        },
       
        {
          name: "DUCTED DOUBLE INLET FANS - NEI2/D series",
          description: "Suitable for the exhaust of smoke, dusty foul and humid air up to a maximum temperature of 60C. The product has been especially developed and designed to create the required ventilation within tunnels.",
          image: "src/assets/products/nei2d.png",
          specifications: {
            wheelSizes: "500 mm up to 1250 mm",
            volume: "from 18000 m3/h up to 175000 m3/h",
            pressure: "from 152 newton up to 2100 newton"
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
          image: "src/assets/products/axial-roof-fans-ne-serie.png",
          specifications: {
            wheelSizes: "400 mm up to 900 mm",
            volume: "from 2300 m3/h up to 530000 m3/h",
            pressure: "up to 2 mm/h20 up to 30 mm/h2O"
          }
        },
        {
          name: "CENTRIFUGAL ROOF FANS - NC series",
          description: "The NC series is widely used in civil and industrial ventilation plants. They are mainly suitable as air exhausters. The maximum of the fluid in continuous operation is 400C.",
          image: "src/assets/products/nc.png",
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
          image: "src/assets/ceafp.png",
          specifications: {
            volume: "up to 150000 m3/h"
          }
        },
        {
          name: "SLEEVES EXTRACTION AND FILTRATION PLANTS",
          description: "Sleeves filter at high efficiency. Suitable in all environment where there is a need to separate dry dust. Suitable for use by chemical, petrochemical and ceramic working industries.",
          image: "src/assets/seafp.png",
          specifications: {
            volume: "up to 250000 m3/h"
          }
        },
        {
          name: "ACTIVE COAL FILTRATION PLANTS",
          description: "Compact filtration plant easy to move. Environments where industrial processes creates gas and smoke emissions. Smokes exhausted are profiteered and conveyed to the absolute filter of large loss surface.",
          image: "src/assets/acfp.png",
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
          image: "src/assets/cv.png",
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
          image: "https://www.glacier-technology.com/wp-content/uploads/2019/11/Damper-Category-Collage-1.png",
          specifications: {
            operation: "Manual or automatic",
            control: "Electric or pneumatic motors",
            application: "All air handling systems"
          }
        },
        {
          name: "AIR OUTLETS",
          description: "NOBEL has a wide range of aluminum grilles designed for use as supply and exhaust air devices and transfer air units for example in offices and commercial premises. Product range includes grilles for wall, ceiling, floor, windowsill, and door mounting.",
          image: "src/assets/products/air-outlets.png",
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
          image: "src/assets/products/axial-inline-smoke-bifurcated-fans-nsaf1-series.png",
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
          name: "Centrifugal smoke Fan - NBRS series",
          description: "This series is used for smoke evacuation from various types of buildings. It can achieve a wider static pressure range than axial fans and is more durable due to its reinforced construction, capable of withstanding temperatures exceeding 900C.",
          image: "src/assets/nprs.png",
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
          subcategory: "",
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

// Arabic mappings for categories and products
const __categoriesAr = {
  "centrifugal-fan": {
    name: "مراوح الطرد المركزي",
    description: "مراوح طرد مركزي للخدمة الشاقة لتطبيقات التهوية الصناعية وتحريك الهواء بكفاءة وموثوقية عاليتين.",
    subcategories: {
      "heavy-duty": "خدمة شاقة",
      "transport": "سلسلة النقل",
      "box-fans": "مراوح صندوقية"
    }
  },
  "axial-fans": {
    name: "مراوح محورية للتهوية",
    description: "مراوح محورية عالية الأداء مصممة لدوران هواء فعّال في التطبيقات الصناعية والتجارية المختلفة."
  },
  "roof-top-fans": {
    name: "مراوح سطحية",
    description: "مراوح تُركّب على الأسطح لأنظمة التهوية في المباني بقدرة تحمل للعوامل الجوية."
  },
  "air-filtering": {
    name: "أنظمة ترشيح الهواء",
    description: "أنظمة ترشيح متقدمة لإدارة الهواء النظيف في البيئات الصناعية ومرافق الإنتاج."
  },
  "custom-ventilators": {
    name: "حلول تهوية مخصصة",
    description: "حلول تهوية مصممة خصيصًا لتلبية المتطلبات الصناعية المحددة والتطبيقات التحدّية."
  },
  "accessories": {
    name: "ملحقات",
    description: "مجموعة متكاملة من ملحقات التهوية بما في ذلك المخمدات والشبكات وأنظمة التثبيت."
  },
  "smoke-axial": {
    name: "مراوح محورية للدخان",
    description: "مراوح متخصصة لاستخراج الدخان لأنظمة السلامة من الحريق في المباني والأنفاق ومواقف السيارات."
  },
  "smoke-centrifugal": {
    name: "مراوح طرد مركزي للدخان",
    description: "مراوح طرد مركزي عالية الحرارة مصممة لإخلاء الدخان في أنظمة التهوية الطارئة."
  }
};

const __productNameAr = {
  "Centrifugal Fan - Heavy Duty": "مروحة طرد مركزي - خدمة شاقة",
  "BACKWARD BLADE WING PROFILE - NBA series": "ريش خلفية بجناح انسيابي - سلسلة NBA",
  "BACKWARD BLADE FLAT PROFILE - NBR series": "ريش خلفية بملف مسطح - سلسلة NBR",
  "SCIROCCO PROFILE - NBS series": "ملف شيروكو - سلسلة NBS",
  "BACKWARD BLADE WING PROFILE - NPD series": "ريش خلفية بجناح انسيابي - سلسلة NPD",
  "BACKWARD BLADE FLAT PROFILE - NPE series": "ريش خلفية بملف مسطح - سلسلة NPE",

  "Centrifugal Fan - Transport Series": "مروحة طرد مركزي - سلسلة النقل",
  "BACKWARD BLADES - NTRO series": "ريش خلفية - سلسلة NTRO",
  "RADIAL BLADES - NTRA series": "ريش شعاعية - سلسلة NTRA",
  "OPEN BLADES - NTAP series": "ريش مفتوحة - سلسلة NTAP",

  "Centrifugal Fan - Box Fans": "مروحة طرد مركزي - مراوح صندوقية",
  "IN LINE": "داخل مجرى الهواء (In-Line)",
  "DIRECT DRIVE DOUBLE INLET": "قيادة مباشرة بمدخل مزدوج",
  "DOUBLE INLET BELT DRIVEN": "مدخل مزدوج بقيادة بالحزام",
  "PLUG FAN - NPLG series": "مروحة بلينوم - سلسلة NPLG",

  "Axial Fans Ventilation": "مراوح محورية للتهوية",
  "RING - NEA/D series": "حلقي - سلسلة NEA/D",
  "PLATE MOUNTED - NET/D series": "مثبّت على لوحة - سلسلة NET/D",
  "DUCTED DIRECT DRIVEN WING BLADES - NEI/D series": "مجاري هواء بقدحة مباشرة وريش جناحية - سلسلة NEI/D",
  "DUCTED DIRECT DRIVEN - EIH series": "مجاري هواء بقدحة مباشرة - سلسلة EIH",
  "DUCTED DOUBLE INLET FANS - NEI2/D series": "مجاري هواء بمدخل مزدوج - سلسلة NEI2/D",

  "Roof Top Fans": "مراوح سطحية",
  "AXIAL ROOF FANS - NE series": "مراوح محورية سطحية - سلسلة NE",
  "CENTRIFUGAL ROOF FANS - NC series": "مراوح طرد مركزي سطحية - سلسلة NC",

  "Air Filtering System": "نظام ترشيح الهواء",
  "CARTRIDGE EXTRACTION AND FILTRATION PLANTS": "منشآت استخلاص وترشيح بالخرطوشة",
  "SLEEVES EXTRACTION AND FILTRATION PLANTS": "منشآت استخلاص وترشيح بالأكمام",
  "ACTIVE COAL FILTRATION PLANTS": "منشآت ترشيح بالفحم النشط",

  "Custom Ventilators": "حلول تهوية مخصصة",
  "CUSTOM VENTILATORS": "حلول تهوية مخصصة",

  "Accessories": "ملحقات",
  "DAMPERS": "مخمدات",
  "AIR OUTLETS": "مخارج هواء",

  "Smoke Axial Inline Fans": "مراوح محورية خطية للدخان",
  "Axial inline smoke bifurcated fans - NSAF/1 series": "مراوح محورية خطية للدخان بمجرى منقسم - سلسلة NSAF/1",

  "Smoke Centrifugal Fans": "مراوح طرد مركزي للدخان",
  "Centrifugal smoke Fan - VBRS series": "مروحة دخان بالطرد المركزي - سلسلة VBRS"
};

const __productDescAr = {
  "NOBEL CENTRIFUGAL FANS ARE SUITABLE FOR THE EXHAUST OF CLEAN AIR, LIGHTLY DUSTY. Low, medium, and high pressure, single and double inlet models with various volume flow for different necessities. Backward impellers with high efficiency, featuring flat, wing, and scirocco profiles.": "مراوح نوبل بالطرد المركزي مناسبة لسحب الهواء النظيف وقليل الغبار. تتوفر بنماذج ضغط منخفض ومتوسط وعالٍ، بمدخل أحادي ومزدوج، مع تدفقات مختلفة حسب الحاجة. رياش خلفية عالية الكفاءة بملفات مسطحة وجناحية وشيروكو.",
  "Low noise. For a fan the source of noise is mainly the airturbulence created by the impeller. The NBA series has been created to obtain the lowest noise thank to the aerodynamic profile of the inlet cone and of the static and dynamic balancing of the impeller": "ضجيج منخفض؛ مصدر الضوضاء في المراوح هو اضطراب الهواء الناتج عن الدوّار. صُممت سلسلة NBA لتحقيق أقل ضوضاء بفضل الشكل الانسيابي لمخروط الدخول والاتزانين الساكن والديناميكي للدوّار.",
  "Low noise. For a fan the source of noise is mainly the air turbulence created by the impeller. The NBR series has been created to obtain the lowest noise thank to the aerodynamic profile of the inlet cone and of the static and dynamic balancing of the impeller.": "ضجيج منخفض؛ صُممت سلسلة NBR لتحقيق أقل ضوضاء بفضل الشكل الانسيابي لمخروط الدخول والاتزانين الساكن والديناميكي للدوّار.",
  "The NBS series is suitable when low noise performances are required. The 'scirocco' profile of blades allows a very low rotation speed with a limited mechanical noisiness. Efficiency can be up to 64%.": "تُناسب سلسلة NBS الحالات التي تتطلب أداءً منخفض الضوضاء. يسمح ملف " + '"شيروكو"' + " للرياش بسرعة دوران منخفضة جداً مع ضجيج ميكانيكي محدود. تصل الكفاءة حتى 64%.",
  "Suitable for severe and difficult application and for the various industrial applications where a complete reliability of the product is necessary. Application sectors are pneumatic transportation, chemical industries, silos and metallurgic industries.": "مناسبة للتطبيقات القاسية والصعبة ولمختلف التطبيقات الصناعية التي تتطلب موثوقية كاملة. تشمل القطاعات النقل الهوائي والصناعات الكيميائية وصوامع التخزين والصناعات المعدنية.",
  "Fan series NT is suitable for the exhaust of dusty air and transportation of filamentous substances. Low, medium and high pressure models with various volume flow for the different necessities": "سلسلة NT مناسبة لسحب الهواء المحمل بالغبار ونقل المواد الليفية. تتوفر نماذج ضغط منخفض ومتوسط وعالٍ مع تدفقات حجمية مختلفة حسب الحاجة.",
  "These types of fan are designed for the handling of air, fumes or gases or where light concentration of dust or material are present.": "تم تصميم هذه الأنواع للتعامل مع الهواء أو الأبخرة أو الغازات أو حيث توجد تراكيز خفيفة من الغبار أو المواد.",
  "This type of fan is designed for the handling of air, fumes or gases either clean or containing dry granular material, dust exhaust from buffing and grinding wheels, conveying all types of materials.": "تم تصميم هذا النوع للتعامل مع الهواء أو الأبخرة أو الغازات سواء كانت نظيفة أو تحتوي على مواد حبيبية جافة، مثل غبار الصقل والطحن، ونقل مختلف أنواع المواد.",
  "This type of fan is designed to convey or handle air or gases containing material. It is ideal for sticky, heavy or abrasive dust problems.": "مصمم لنقل أو معالجة الهواء أو الغازات التي تحتوي على مواد. مثالي لمشاكل الغبار اللزج أو الثقيل أو الكاشط.",
  "Box fans are particularly designed for air extraction, filtration systems, and air conditioning plants where low noise emission is necessary. They are suitable for civil and industrial applications.": "تُصمَّم المراوح الصندوقية خصيصًا لاستخراج الهواء وأنظمة الترشيح ومحطات تكييف الهواء حيث يكون خفض الضجيج ضروريًا. مناسبة للتطبيقات المدنية والصناعية.",
  "Suited to ventilate and convey clean air up to a maximum temperature of 60C. The low noise level and the medium pressure head make them ideal for industrial and residential installations.": "مناسبة لتهوية ونقل الهواء النظيف حتى درجة حرارة قصوى 60°م. مستوى الضجيج المنخفض والرأس الضغطي المتوسط يجعلانها مثالية للتركيبات الصناعية والسكنية.",
  "Suited to ventilate and convey clean air up to a maximum temperature of 400C. The low noise level and the high compactness head make them ideal in ventilation plants with limited space like offices and shops.": "مناسبة لتهوية ونقل الهواء النظيف حتى 400°م. الضجيج المنخفض والحجم المدمج يجعلانها مثالية لمنشآت التهوية ذات المساحة المحدودة مثل المكاتب والمتاجر.",
  "Suitable where air extracting or filtering is necessary. The low noise level head makes them ideal for environments like offices, bars, and gymnasiums.": "مناسبة حيث يلزم استخراج الهواء أو ترشيحه. مستوى الضجيج المنخفض يجعلها مثالية لبيئات مثل المكاتب والمقاهي والصالات الرياضية.",
  "In most instances, plug fans are unhoused and rely on the plenum space around the wheel to direct airflow as required in the system. This style of fan designed with the motor, bearings, and drives out of the airstream.": "في معظم الحالات، تكون مراوح البلينوم بدون غلاف وتعتمد على حيز البلينوم حول الدوّار لتوجيه الهواء وفق حاجة النظام، مع إبقاء المحرك والمحامل وناقل الحركة خارج تيار الهواء.",
  "The NEA/D and NET/D series are primarily designed for air ventilation, either supply or exhaust duty.": "تم تصميم سلسلتي NEA/D وNET/D أساساً للتهوية سواءً للتغذية أو للعادم.",
  "The NEA/D series are primarily designed for air ventilation, either supply or exhaust duty.": "سلسلة NEA/D مصممة أساسًا للتهوية، سواء للتغذية أو للعادم.",
  "The NET/D series are primarily designed for air ventilation, either supply or exhaust duty.": "سلسلة NET/D مصممة أساسًا للتهوية، سواء للتغذية أو للعادم.",
  "Suitable for the exhaust of smoke, dusty foul and humid air up to a maximum temperature of 600C.": "مناسبة لعادم الدخان والهواء الملوث بالغبار والرطوبة حتى درجة حرارة قصوى 60°م/600°م وفق الطراز.",
  "Suitable for the exhaust of smoke, dusty foul and humid air up to a maximum temperature of 60C. The product has been especially developed and designed to create the required ventilation within tunnels.": "مناسبة لعادم الدخان والهواء الملوث بالغبار والرطوبة حتى 60°م. طُوّر المنتج لتأمين التهوية المطلوبة داخل الأنفاق.",
  "The NE series is widely used in civil and industrial ventilation plants. They are mainly suitable as exhausters for high air volumes. The maximum of the fluid in continuous operation is 400C.": "تُستخدم سلسلة NE على نطاق واسع في منشآت التهوية المدنية والصناعية، ومناسبة أساسًا كعوادم لأحجام هواء كبيرة. درجة حرارة التشغيل المستمر تصل حتى 40°م/400°م وفق الطراز.",
  "The NC series is widely used in civil and industrial ventilation plants. They are mainly suitable as air exhausters. The maximum of the fluid in continuous operation is 400C.": "تُستخدم سلسلة NC على نطاق واسع في منشآت التهوية المدنية والصناعية، ومناسبة أساسًا كعوادم هواء. درجة حرارة التشغيل المستمر تصل حتى 40°م/400°م وفق الطراز.",
  "EXTRACTION PLANTS AND AIR FILTERING SYSTEM - Complete range of filtration solutions for industrial applications.": "محطات استخلاص وأنظمة ترشيح الهواء - مجموعة متكاملة من حلول الترشيح للتطبيقات الصناعية.",
  "Cartridges filter at high efficiency also with very thin dust. The limited sizes allow the installation inside of the production plants and close to the source of pollution. Suitable for use by chemical, foodstuff, metallurgic and ceramic working industries.": "مرشحات الخرطوشة بكفاءة عالية حتى مع الغبار الناعم جدًا. الأبعاد المحدودة تسمح بالتركيب داخل منشآت الإنتاج وقرب مصدر التلوث. مناسبة للصناعات الكيميائية والغذائية والمعدنية والسيراميكية.",
  "Sleeves filter at high efficiency. Suitable in all environment where there is a need to separate dry dust. Suitable for use by chemical, petrochemical and ceramic working industries.": "مرشحات الأكمام بكفاءة عالية، مناسبة في البيئات التي تتطلب فصل الغبار الجاف. مناسبة للصناعات الكيميائية والبتروكيميائية والسيراميكية.",
  "Compact filtration plant easy to move. Environments where industrial processes creates gas and smoke emissions. Smokes exhausted are profiteered and conveyed to the absolute filter of large loss surface.": "محطة ترشيح مدمجة سهلة النقل. مناسبة للبيئات التي تولّد العمليات الصناعية فيها غازات وانبعاثات دخانية، حيث يتم سحب الدخان وتوجيهه إلى مرشح عالي الكفاءة واسع السطح.",
  "NOBEL custom-engineered products are designed to answer to exacting specifications. Designs meet specific flow, pressure, temperature, leak integrity, and configuration requirements.": "تُصمم منتجات نوبل الهندسية المخصصة لتلبية المواصفات الدقيقة، وتستوفي متطلبات التدفق والضغط والحرارة والضيق والتكوين المحددة.",
  "NOBEL custom-engineered products are designed to answer to exacting specifications. Designs meet specific flow, pressure, temperature, leak integrity, and configuration requirements. NOBEL technical department is at your disposal to study the project.": "تُصمم منتجات نوبل الهندسية المخصصة لتلبية المواصفات الدقيقة، وتستوفي متطلبات التدفق والضغط والحرارة والضيق والتكوين. قسمنا الفني في خدمتك لدراسة مشروعك.",
  "Complete range of accessories for ventilation systems including dampers and air outlets.": "مجموعة متكاملة من ملحقات أنظمة التهوية بما في ذلك المخمدات ومخارج الهواء.",
  "A damper is a valve or plate that stops or regulates the flow of air inside a duct, chimney, VAV box, air handler, or other air handling equipment. A damper may be used to cut off central air conditioning (heating or cooling) to an unused room, or to regulate it for room-by-room temperature and climate control.": "المخمّد صمام أو صفيحة لوقف أو تنظيم تدفق الهواء داخل مجرى أو مدخنة أو صندوق VAV أو وحدة معالجة هواء. يُستخدم لقطع التكييف عن غرفة غير مستخدمة أو لضبطه للتحكم بالغرفة على حدة.",
  "NOBEL has a wide range of aluminum grilles designed for use as supply and exhaust air devices and transfer air units for example in offices and commercial premises. Product range includes grilles for wall, ceiling, floor, windowsill, and door mounting.": "توفّر نوبل مجموعة واسعة من الشوايات الألمنيوم للاستخدام كمخارج ومداخل هواء ووحدات نقل هواء في المكاتب والمنشآت التجارية. تشمل المنتجات شوايات للحائط والسقف والأرض وعَتب النوافذ والأبواب.",
  "This series is used for smoke evacuation from various types of applications such as (Tunnels - high rise buildings  car parkings -etc..) Where it's from the highest recommended fan types when the high total and static efficiencies are required.": "تُستخدم هذه السلسلة لإخلاء الدخان في تطبيقات متعددة مثل الأنفاق والمباني الشاهقة ومواقف السيارات، وتُعد من أكثر الأنواع توصيةً عندما تُطلب كفاءات إجمالية واستاتيكية عالية.",
  "This series is used for smoke evacuation from various types of applications such as (Tunnels - high rise buildings  car parkings -etc..) Where it's from the highest recommended fan types when the high total and static efficiencies are required since due to the aerodynamic airfoil and also the fan body profile which achieves the minimum losses in the air flow due to pressure drag which makes it from the minimum power consumers": "تُستخدم هذه السلسلة لإخلاء الدخان في تطبيقات مثل الأنفاق والمباني الشاهقة ومواقف السيارات. يحقق الجناح الانسيابي وشكل جسم المروحة أقل خسائر في تدفق الهواء بسبب مقاومة الضغط، ما يجعلها من الأقل استهلاكًا للطاقة.",
  "This series is used for smoke evacuation from various types of buildings. It can achieve a wider static pressure range than axial fans and is more durable due to its reinforced construction, capable of withstanding temperatures exceeding 900C.": "تُستخدم هذه السلسلة لإخلاء الدخان من أنواع مختلفة من المباني. تحقق مدى ضغط ساكن أوسع من المراوح المحورية وهي أكثر متانة بفضل بنيتها المُعزّزة، وقادرة على تحمل درجات حرارة تتجاوز 900°م.",
  "This series is used for smoke evacuation from various types of buildings. It can achieve a wider static pressure range than axial fans and is more durable due to its reinforced construction, capable of withstanding temperatures exceeding 900C.": "تُستخدم هذه السلسلة لإخلاء الدخان من أنواع مختلفة من المباني. تحقق مدى ضغط ساكن أوسع من المراوح المحورية وهي أكثر متانة بفضل بنيتها المُعزّزة، وقادرة على تحمل درجات حرارة تتجاوز 900°م."
};

const __localizeCategory = (cat) => {
  const ar = __categoriesAr[cat.id];
  if (!ar) return cat;
  return {
    ...cat,
    name: ar.name || cat.name,
    description: ar.description || cat.description,
    subcategories: Array.isArray(cat.subcategories)
      ? cat.subcategories.map((s) => ({ ...s, name: (ar.subcategories && ar.subcategories[s.id]) || s.name }))
      : cat.subcategories
  };
};

const __localizeProduct = (p) => {
  const localizedName = __productNameAr[p.name] || p.name;
  const localizedDesc = __productDescAr[p.description] || p.description;
  const localizedParent = p.parentProduct ? (__productNameAr[p.parentProduct] || p.parentProduct) : undefined;
  return {
    ...p,
    name: localizedName,
    description: localizedDesc,
    parentProduct: localizedParent
  };
};

export const getCategories = (isArabic = false) => {
  return isArabic ? categories.map(__localizeCategory) : categories;
};

export const getAllProducts = (isArabic = false) => {
  return isArabic ? products.map(__localizeProduct) : products;
};

export const getProductsByCategoryLocalized = (categoryId, isArabic = false) => {
  const base = getProductsByCategory(categoryId);
  return isArabic ? base.map(__localizeProduct) : base;
};

export const getProductsBySubcategoryLocalized = (categoryId, subcategoryId, isArabic = false) => {
  const base = getProductsBySubcategory(categoryId, subcategoryId);
  return isArabic ? base.map(__localizeProduct) : base;
};
