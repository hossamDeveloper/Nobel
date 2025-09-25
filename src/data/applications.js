// Application list and detailed content for Applications page

export const applicationsList = [
	"Aeration",
	"Air Slides",
	"Blow-Off",
	"Combustion Air",
	"Containment",
	"Cooling Towers",
	"Dilution Air",
	"Dryers",
	"Dust Control",
	"Fluidized Systems",
	"Forced Draft",
	"Fume Control",
	"Fume Exhausting",
	"Industrial Furnaces",
	"General Ventilation",
	"Grain Drying",
	"HVAC",
	"Incineration",
	"Induced Draft",
	"Lab Hood Exhaust",
	"Material Handling",
	"Mine and Tunnel Ventilation",
	"Odor Control",
	"Oil Mist",
	"Oven Exhaust",
	"Oven Recirculation",
	"Oxidizers",
	"Pickling",
	"Pneumatic Conveying",
	"Pollution Control",
	"Pressurizing",
	"Process Control",
	"Process Cooling",
	"Process Heating",
	"Refrigeration",
	"Scrubber",
	"Selective Catalytic Reduction",
	"Sewers and Water Tunnels",
	"Snow Making",
	"Spark Resistant Construction",
	"Spray Booth Exhaust",
	"Tempering",
	"Vacuum Systems",
	"Wind Tunnels",
];

// Arabic display names for applications (used for UI labels only)
export const applicationsNameMap = {
	"Aeration": "تهوية المياه",
	"Air Slides": "قنوات الهواء الهوائية",
	"Blow-Off": "تجفيف بالهواء (Blow-Off)",
	"Combustion Air": "هواء الاحتراق",
	"Containment": "الاحتواء والتهوية الموضعية",
	"Cooling Towers": "أبراج التبريد",
	"Dilution Air": "هواء التخفيف",
	"Dryers": "مجففات صناعية",
	"Dust Control": "التحكم في الغبار",
	"Fluidized Systems": "أنظمة التسييل الهوائي",
	"Forced Draft": "سحب قسري",
	"Fume Control": "التحكم في الأبخرة",
	"Fume Exhausting": "استخراج الأبخرة",
	"Industrial Furnaces": "أفران صناعية",
	"General Ventilation": "التهوية العامة",
	"Grain Drying": "تجفيف الحبوب",
	"HVAC": "تكييف الهواء والتهوية (HVAC)",
	"Incineration": "الحرق",
	"Induced Draft": "سحب طبيعي/محفَّز",
	"Lab Hood Exhaust": "شفاطات المختبر (عادم)",
	"Material Handling": "مناولة المواد",
	"Mine and Tunnel Ventilation": "تهوية المناجم والأنفاق",
	"Odor Control": "التحكم في الروائح",
	"Oil Mist": "ضباب الزيت",
	"Oven Exhaust": "عادم الأفران",
	"Oven Recirculation": "إعادة تدوير هواء الأفران",
	"Oxidizers": "أنظمة الأكسدة الحرارية",
	"Pickling": "التخليل (المعالجة الحمضية)",
	"Pneumatic Conveying": "النقل الهوائي",
	"Pollution Control": "التحكم في التلوث",
	"Pressurizing": "الضغط الإيجابي للمساحات",
	"Process Control": "التحكم في العمليات",
	"Process Cooling": "تبريد العمليات",
	"Process Heating": "تسخين العمليات",
	"Refrigeration": "التبريد",
	"Scrubber": "أنظمة الغسيل (Scrubber)",
	"Selective Catalytic Reduction": "الاختزال التحفيزي الانتقائي (SCR)",
	"Sewers and Water Tunnels": "الفساقي والأنفاق المائية",
	"Snow Making": "صناعة الثلج",
	"Spark Resistant Construction": "بناء مقاوم للشرر",
	"Spray Booth Exhaust": "عادم غرف الطلاء",
	"Tempering": "تقسية الزجاج/المعادن",
	"Vacuum Systems": "أنظمة التفريغ",
	"Wind Tunnels": "أنفاق الرياح",
};

export const applicationDetails = {
	"Aeration": {
		title: "Industrial Water Aeration Equipment",
		intro:
			"The aeration of process fluids uses bubblers similar to aquariums. Aquaculture and wastewater treatment use aeration to increase oxygen and support oxidation of VOCs and organics.",
		body:
			"Fans may aerate ponds with lower bed depths. Where odors are present, fans with exhaust hoods create a vacuum and route foul air to odor control or incineration. See recommended designs below or request a quote for water aeration equipment.",
		image: "https://images.unsplash.com/photo-1658728942223-906ae2cb3c56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzgyfHxJbmR1c3RyaWFsJTIwV2F0ZXIlMjBBZXJhdGlvbiUyMEVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D",
		designFeatures: [
			"FRP Construction",
			"Special Alloy Construction",
			"Corrosion Resistant Coatings",
			"High Pressure Capability (to 130\" SP)",
		],
		materials: ["FRP", "SST Alloys", "Mild Steel"],
	
	},

	"Air Slides": {
		title: "Air Slide Fans",
		intro:
			"Forced draft fans fluidize and cool gravity conveying units. Required air volume and pressure depend on bulk density. Inlet filters avoid product contamination; inlet silencers may be required.",
		body:
			"Direct drive is common with the motor coupled to the fan wheel. Volume control via dampers or motor frequency control for energy savings. See recommended designs below.",
		image: "https://images.unsplash.com/photo-1695760177249-85c742906940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk4fHxBaXIlMjBTbGlkZSUyMEZhbnN8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
			"Housing clean out door.",
			"Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon steel", "Stainless Steel"],
	
	},

	"Blow-Off": {
		title: "Industrial Blow-Off Drying Systems",
		intro:
			"High-velocity air removes dirt, fumes, oil mist, droplets and solutions from products before or after washing. High-quality drying is essential for food, pharma and medical packaging.",
		body:
			"Systems often use higher pressure and horsepower with multiple zones and higher conveyor speeds. Inlet silencers and filters are commonly required.",
		image: "https://plus.unsplash.com/premium_photo-1661963449696-89b762c74a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW5kdXN0cmlhbCUyMEJsb3clMjBPZmYlMjBEcnlpbmclMjBTeXN0ZW1zfGVufDB8fDB8fHww",
		designFeatures: [
			"Direct Drive where possible",
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
			"Housing clean out door.",
			"Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon steel", "Stainless Steel", "Coated Carbon steel"],
	
	},

	"Combustion Air": {
		title: "Industrial Air Fans for Combustion",
		intro:
			"Rugged-duty forced-draft fans for burner systems demand stable airflow and constant pressure. High-speed dryers can use burner supply fan velocity to fluidize or convey product.",
		body:
			"Used across paint finishing, building materials and graphic arts at high conveyor speeds. Products below are recommended for combustion air applications.",
		image: "https://plus.unsplash.com/premium_photo-1682145011283-85d71a544e36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEluZHVzdHJpYWwlMjBBaXIlMjBGYW5zJTIwZm9yJTIwQ29tYnVzdGlvbiUyMGluJTIwZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
		designFeatures: [
			"Direct Drive where possible",
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
			"Housing clean out door.",
			"Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon steel", "Stainless steel", "Coated Carbon steel"],
		
	},

	"Containment": {
		title: "Industrial Ventilation Systems (Containment)",
		intro:
			"Capturing contaminated air, odors or emissions is best at the source using specialized hoods and systems. Emissions are conveyed to filtration or destruction devices.",
		body:
			"Fans are typically located on the clean side of filters, with material-handling or corrosion-resistant fans when required by design.",
		image: "https://images.unsplash.com/photo-1637035604153-9addab0821c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxJbmR1c3RyaWFsJTIwVmVudGlsYXRpb24lMjBTeXN0ZW1zJTIwKENvbnRhaW5tZW50KXxlbnwwfHwwfHx8MA%3D%3D",
		designFeatures: [
			"Direct and belt drive designs",
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
			"Housing clean out door.",
			"Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon Steel"],
	
	},

	"Cooling Towers": {
		title: "Industrial Tower Cooling Fans & Evaporative Systems",
		intro:
			"Supply and exhaust fans support heat exchange in dry/wet systems and evaporative cooling. Low-noise, high-efficiency designs are vital for hospitals and critical installations.",
		body:
			"Fans are available with corrosion-resistant or alloy construction for severe environments. Recommended designs below.",
		image: "https://images.unsplash.com/photo-1601488362867-7081e7da6a56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEluZHVzdHJpYWwlMjBUb3dlciUyMENvb2xpbmclMjBGYW5zJTIwJTI2JTIwRXZhcG9yYXRpdmUlMjBTeXN0ZW1zfGVufDB8fDB8fHww",
		designFeatures: [
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
		],
		materials: ["Coated Carbon Steel", "Stainless Steel", "FRP"],
	
	},

	"Dilution Air": {
		title: "Dilution Air Industrial Fans",
		intro:
			"Adding clean dilution air to odor or moisture-laden emissions addresses visual and code constraints. Positioning exhaust away from intakes and adding dilution achieves design criteria.",
		body:
			"Effective with high-temperature or corrosive gas streams using a fan and Venturi conductor as the primary air mover.",
		image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
		designFeatures: [
			"Direct and belt drive designs",
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
			"Housing clean out door.",
			"Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon Steel"],
		
	},

	"Dryers": {
		title: "Industrial Hot Air Blower Equipment (Dryers)",
		intro:
			"Batch dryers reduce moisture levels; recirculating fans supply heated air. Large rooms may use bi-directional fans; continuous dryers include rotary drum and spray dryers.",
		body:
			"Mean temperature and moisture are controlled by forced and induced draft fans. Nobel offers solutions for all these requirements.",
		image: "https://plus.unsplash.com/premium_photo-1751466955685-6812f6d4252f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxmYWN0b3J5JTIwaW5zaWRlfGVufDB8fDB8fHww",
		designFeatures: [
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
			"Housing clean out door.",
			"Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel"],
	
	},

	"Dust Control": {
		title: "Industrial Dust Control Blowers",
		intro:
			"Capture and control of emissions is achieved by moving air through filters or scrubbers. Fans can be on the clean side or dirty air side depending on design.",
		body:
			"Special construction may be needed for corrosive or abrasive air. Recommended designs below.",
		image: "https://images.unsplash.com/photo-1744123146393-4b5438a5d98f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEluZHVzdHJpYWwlMjBCbG93ZXJzfGVufDB8fDB8fHww",
		designFeatures: [
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
			"Housing clean out door.",
			"Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon Steel", "FRP"],
	
	},

	"Fluidized Systems": {
		title: "Fluidized Bed Fans",
		intro:
			"Spray dryers and pneumatic conveying use fluidizing air systems. Controls ensure correct fluidizing energy; moisture control is critical.",
		body:
			"Combos of inlet/outlet dampers with speed controls are common. Highest efficiency fans are preferred.",
		image: "https://images.unsplash.com/photo-1565516127952-b2aea94f71be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTYyfHxGbHVpZGl6ZWQlMjBGYW5zJTIwV2F0ZXIlMjBzcHJheXxlbnwwfHwwfHx8MA%3D%3D",
		designFeatures: [
			"Direct drive or belt drive",
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
			"Housing clean out door.",
			"Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon Steel"],
	
	},

	"Forced Draft": {
		title: "Boiler Industry Forced Draft Fans",
		intro:
			"Fans that are used to pressurize a space or create mechanical air pressure in a system are referred to as forced draft fans. Occasionally, manufacturing spaces are required by specifications to be maintained at a specific positive pressure. This requirement is common in clean room processes for scientific work. Forced draft is also used to identify the combustion process used in large boilers. When mechanical ventilation is supplied to these boilers, the heat transfer rate increases; the boiler can be reduced in size to produce the same amount of energy as natural draft.",
		body:
			"Nobel offers literally thousands of different types, models and sizes of air-movement equipment that can be customized and tailored to your specific application. See the chart below for a list of recommended fan designs, materials and features for forced draft use, or contact us to request a quote.",
		image: "https://images.unsplash.com/photo-1671157388043-6850dcf901ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEJvaWxlciUyMEluZHVzdHJ5JTIwRm9yY2VkJTIwRHJhZnQlMjBGYW5zfGVufDB8fDB8fHww",
		designFeatures: [
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
			"Housing clean out door.",
			"Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel"],
	
	},

	"Fume Exhausting": {
		title: "Industrial Fume Exhausting Blowers",
		intro:
			"Performing industrial processes within contained spaces have resulted in industrial ventilation codes. Nobel makes a wide variety of industrial fume exhausting fans & blowers in many materials to accomplish this task. From the simplest exhaust hood with a fan, to a complex industrial oxidizer, Nobel can help with the necessary process fans. When processes produce fumes, the exhaust system can simply remove the fumes from the occupied space. If the fumes are corrosive, the materials of construction for the fans and duct system must be protected. Nobel makes fans in several alloys with special coatings available.",
		body:
			"Nobel offers literally thousands of different types, models and sizes of air-movement equipment that can be customized and tailored to your specific application. See the chart below for a list of recommended fan designs, materials and features for fume exhausting use, or contact us to request a quote.",
		image: "https://images.unsplash.com/photo-1612798692278-c6f93f289b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fEluZHVzdHJpYWwlMjBGdW1lJTIwRXhoYXVzdGluZyUyMEJsb3dlcnN8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
			"Housing clean out door.",
			"Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],
		
	},

	"Fume Control": {
		title: "Industrial Fume Control Fans",
		intro:
			"Nobel makes a wide variety of industrial fume control fans in many materials to accomplish this task. From the simplest exhaust hood with a fan, to a complex industrial oxidizer, Nobel can help with the necessary fans and fume extractors.",
		body:
			"When processes produce fumes, the exhaust system can simply remove the fumes from the occupied space. If the fumes are corrosive, the materials of construction for the fans and duct system must be protected. Nobel makes fans in several alloys with special coatings available.",
		image: "https://images.unsplash.com/photo-1601782122941-2ee06e362f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fEluZHVzdHJpYWwlMjBGdW1lJTIwRXhoYXVzdGluZyUyMEJsb3dlcnN8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
			"Housing clean out door.",
			"Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],
		
	},

	"Industrial Furnaces": {
		title: "High Temperature Furnace Fans",
		intro:
			"High temperature fans can be used for a wide variety of applications ranging in temperature from 1,200-1,800°F (650-980°C). Both centrifugal and axial fans are available in custom sizes and alloys.",
		body:
			"Depending on the application, fans are typically constructed from stainless steels and high-temperature alloys. Accessories include insulation, shaft seals, water-cooled shafts, heat slingers, and designs to accommodate thermal growth across industries such as aluminum, steel, copper, carbon/charcoal, and incineration.",
		image: "https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		designFeatures: [
			"Based on Application Requirements",
			"Special Alloy Construction",
			"Corrosion Resistant Coatings",
			"Wide Variety of Accessories",
			"IoT Monitoring Devices",
		],
		materials: ["SST Alloys"],
	
	},

	"General Ventilation": {
		title: "General Ventilation Fans",
		intro:
			"Nobel makes a wide variety of fans in many materials for use in general ventilation systems across manufacturing and commercial spaces.",
		body:
			"Proper location of unit heaters along with fresh make-up air fans provide air to workspaces. Nobel supplies exhaust fans and roof ventilators for heat removal to create comfortable work spaces.",
		image: "https://plus.unsplash.com/premium_photo-1733342512311-2307883f2502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fEdlbmVyYWwlMjBWZW50aWxhdGlvbiUyMEZhbnN8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Bearings and motors isolated from the process.",
			"Shaft seals with ceramic felt elements.",
			"Housing clean out door.",
			"Safety guards and electrical disconnect.",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],
	
	},

	"Grain Drying": {
		title: "Industrial Blowers for Grain Drying",
		intro:
			"Industrial fans & blowers for grain drying are available for both portable and permanent installation, using various fan designs coupled with heaters to remove moisture.",
		body:
			"Usually, high volumes of moderate temperature air are necessary to remove moisture from agricultural products before storage. Efficiency and electrical limits often drive the selection.",
		image: "https://plus.unsplash.com/premium_photo-1682144551791-e400fcae2a2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fEluZHVzdHJpYWwlMjBCbG93ZXJzJTIwZm9yJTIwR3JhaW4lMjBEcnlpbmd8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Direct drive and belt drive are suitable",
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon steel"],
		
	},

	"HVAC": {
		title: "HVAC Blowers",
		intro:
			"Nobel produces every available type of fan necessary for HVAC systems from simple axial fans to solutions for dense office and healthcare facilities.",
		body:
			"Nobel offers thousands of configurations that can be tailored to your application. See recommended designs below.",
		image: "https://images.unsplash.com/photo-1615238168944-6ed817aeb4ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fEFpciUyMGNvbmRpdGlvbmluZyUyMHN5c3RlbSUyMHBpcGVzfGVufDB8fDB8fHww",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Safety guards and electrical disconnect.",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],
		
	},

	"Incineration": {
		title: "Incineration Blowers",
		intro:
			"Current systems involve sophisticated controls along with environmental and safety considerations. Stationery incineration techniques usually involve heat recovery schemes.",
		body:
			"Thermal oxidizers using catalytic and indirect heat exchangers give back energy after incineration. Nobel produces many heavy-duty designs of incineration fans & blowers.",
		image: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel"],
	
	},

	"Induced Draft": {
		title: "Induced Draft Blowers",
		intro:
			"Fans used to evacuate a space or create negative air pressure in a system are referred to as induced draft fans, common in combustion systems and large boilers.",
		body:
			"The induced draft fans used in combustion systems are normally high temperature and extra heavy-duty construction.",
		image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel"],
	
	},

	"Lab Hood Exhaust": {
		title: "Explosion Proof Blower / Lab Hood Exhaust",
		intro:
			"Laboratory hoods are a combination containment device and exhaust system. When air is fouled with smoke or odor, the exhaust system vents the contained space and protects occupants.",
		body:
			"If chemicals are corrosive or volatile, special construction is necessary: corrosion resistant alloys, spark resistant materials, special motors and fan shaft seals.",
		image: "https://images.unsplash.com/photo-1606947707553-679986145133?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxyb29mJTIwdmVudGlsYXRpb24lMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Bearings and motors according to local code. Shaft seals with ceramic felt elements.",
			"Safety guards and electrical disconnect.",
			"Explosion proof motors",
			"Spark Resistant Construction",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],
	
	},

	"Material Handling": {
		title: "Material Handling Fan Equipment",
		intro:
			"Applications where material will be transferred through the system require special considerations such as abrasion resistance and corrosion resistance.",
		body:
			"Special materials and modifications can extend uptime and simplify maintenance. Nobel offers many designs for material handling.",
		image: "https://images.unsplash.com/photo-1684496254076-a8d0517e4c22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fEdhcyUyMHRyYW5zbWlzc2lvbiUyMHBpcGVzfGVufDB8fDB8fHww",
		designFeatures: [
			"Belt Drive to isolate motor where possible",
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Abrasion resistant features",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon Steel"],
	
	},

	"Mine and Tunnel Ventilation": {
		title: "Tunnel Ventilation Fans",
		intro:
			"Primary and auxiliary fans provide intake and return airflows in tunnels and mines. Directing air to active areas is critical to efficiency and safety.",
		body:
			"Selection depends on detailed job requirements. Nobel provides efficient axial and centrifugal solutions for primary and booster duties.",
		image: "https://images.unsplash.com/photo-1579932689303-d6d322cbd69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxUdW5uZWwlMjBWZW50aWxhdGlvbiUyMEZhbnN8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Axial, Centrifugal and Mixed Flow Fans",
			"Anti-friction and sleeve bearings",
			"Explosion doors/covers",
			"Shaft covers, ducts, E-Houses",
			"IoT (I4) instrumentation and control",
			"Silencers, dampers and turning bends",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],
	
	},

	"Odor Control": {
		title: "Odor Control Fans & Equipment",
		intro:
			"Capture and control of odors is accomplished by creating air movement. Every type of fan can be used to move air through odor-absorber scrubbers.",
		body:
			"Occasionally, the air is corrosive or contains gases that require special construction. Nobel provides clean-air and foul-air fan solutions.",
		image: "https://images.unsplash.com/photo-1707307316792-390a2daba778?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDI4fHxPZG9yJTIwQ29udHJvbCUyMEZhbnMlMjAlMjYlMjBFcXVpcG1lbnR8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon Steel", "FRP"],
	
	},

	"Oil Mist": {
		title: "Oil Mist Industrial Blowers",
		intro:
			"Oil mist emissions come from machining and forming operations. Fans must be spark-proof and often material-handling designs.",
		body:
			"If the oil mist is corrosive, fans and duct systems must be protected. Nobel offers alloys, special coatings and FRP construction.",
		image: "https://plus.unsplash.com/premium_photo-1661881284896-c5b5c2a2e4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk3fHxQcm9kdWN0aW9uJTIwbGluZXN8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],
	
	},

	"Oven Exhaust": {
		title: "Industrial Oven Exhaust Blowers",
		intro:
			"Process ovens with gas/oil burners are normally under positive pressure; an exhaust fan is used to prevent bleed of fumes into surrounding areas.",
		body:
			"Electric element heaters use a small make-up air port and only exhaust enough air to maintain neutral pressure. Sizing often ~10% of recirculation volume.",
		image: "https://images.unsplash.com/photo-1599159877389-a07f25b6ed20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fEluZHVzdHJpYWwlMjBPdmVuJTIwRXhoYXVzdCUyMEJsb3dlcnN8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon Steel", "FRP"],
	
	},

	"Oven Recirculation": {
		title: "Process Oven Fans",
		intro:
			"Air changes per minute determine recirculation airflow. Designers choose single or multiple fans; plug fans offer higher efficiencies and pressures.",
		body:
			"Multiple fans allow counter rotation of air currents for improved temperature gradients. Long shaft air kits provide clean installation for roof-mounted fans.",
		image: "https://plus.unsplash.com/premium_photo-1682145049170-35b724c01632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU5fHxmYWN0b3J5JTIwbWFjaGluZXN8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon Steel", "FRP"],
	
	},

	"Oxidizers": {
		title: "Thermal Oxidizer Blowers & Fans",
		intro:
			"Oxidizers specialize in the destruction of VOCs with sophisticated controls and heat recovery schemes.",
		body:
			"Regenerative catalytic and direct-fired systems with concurrent heat exchangers give back energy after incineration. Nobel provides heavy-duty designs.",
		image: "https://images.unsplash.com/photo-1684146286510-b3c8f560aba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgwfHxoZXJtYWwlMjBPeGlkaXplciUyMEJsb3dlcnMlMjAlMjYlMjBGYW5zfGVufDB8fDB8fHww",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel"],

	},

	"Pickling": {
		title: "Pickling Industrial Blowers",
		intro:
			"Pickling, common in the steel industry, may require corrosion-resistant construction. Nobel offers a wide variety of fans for pickling systems.",
		body:
			"From simple exhaust hoods to complex scrubber systems, Nobel can help with the necessary process fans and materials of construction.",
		image: "https://images.unsplash.com/photo-1740487093227-cf9d1d4554e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzU2fHxleHRpbmd1aXNoZXMlMjB0aGUlMjBmaXJlJTIwSU4lMjBGQUNUT1JZfGVufDB8fDB8fHww",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],
	
	},

	"Pneumatic Conveying": {
		title: "Pneumatic Conveying Fans",
		intro:
			"High-velocity air carries materials from a process to a collection point; dilution air and bulk density determine airflow.",
		body:
			"Conveying airstream can cool and aerate materials. Proper selection handles abrasion and maintains efficiency.",
		image: "https://images.unsplash.com/photo-1609373235983-bef55d06268d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fEdhcyUyMHBpcGVsaW5lc3xlbnwwfHwwfHx8MA%3D%3D",
		designFeatures: [
			"Direct Drive where possible",
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon steel"],
	
	},

	"Pollution Control": {
		title: "Pollution Control Blowers",
		intro:
			"Capture and control of emissions are accomplished by creating air movement through filters or scrubbers.",
		body:
			"Clean-side devices call for high-efficiency low-power designs; dirty air devices require rugged-duty industrial designs.",
		image: "https://images.unsplash.com/photo-1703346897303-ad9197c545d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fFBvbGx1dGlvbiUyMENvbnRyb2wlMjBCbG93ZXJzfGVufDB8fDB8fHww",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon steel", "FRP"],
	
	},

	"Pressurizing": {
		title: "Industrial Pressurizing Blowers",
		intro:
			"Used to keep spaces from allowing air to leak into surrounding spaces (e.g., computer or control rooms in harsh environments).",
		body:
			"Fans are normally supplied with variable-speed controls. Nobel Junior, General Purpose, and ACF/PLR/BC clean air designs are recommended.",
		image: "https://images.unsplash.com/photo-1565954786194-d22abeaac3ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEluZHVzdHJpYWwlMjBQcmVzc3VyaXppbmclMjBCbG93ZXJzfGVufDB8fDB8fHww",
		designFeatures: [
			"Direct Drive where possible",
			"Bearings and motors suitable for the location. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon steel", "FRP"],
	
	},

	"Process Control": {
		title: "Industrial Blowers for Process Control",
		intro:
			"Process controls often use variable speed drives for precise airflow without dampers; some combine speed control with dampers for fine adjustments.",
		body:
			"Nobel offers high-quality industrial fans & blowers to make your application a success.",
		image: "https://plus.unsplash.com/premium_photo-1749149653994-d807cd0ee22d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fEluZHVzdHJpYWwlMjBCbG93ZXJzJTIwZm9yJTIwUHJvY2VzcyUyMENvbnRyb2x8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],
		
	},

	"Process Cooling": {
		title: "Industrial Blowers for Process Cooling",
		intro:
			"Fans push or pull air through cooling coils or across coolers. Primary air movers for flash freezers and food processing plants often require special alloys.",
		body:
			"Fans are specially welded and cleaned for sanitary cycles, designed for extreme temperature variations and long life.",
		image: "https://plus.unsplash.com/premium_photo-1740510700585-7c11ed76eaf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHJlYWN0b3JzfGVufDB8fDB8fHww",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],
	
	},

	"Process Heating": {
		title: "Industrial Blowers for Process Heating",
		intro:
			"Fans supply combustion air and recirculate heated air for ovens and furnaces; reliability and bearing life are critical.",
		body:
			"Nobel provides fans for boilers, fired heaters and dryers in chemical process installations with proven reliability.",
		image: "https://images.unsplash.com/photo-1697281679290-ad7be1b10682?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SW5kdXN0cmlhbCUyMEJsb3dlcnMlMjBmb3IlMjBQcm9jZXNzJTIwSGVhdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],

	},

	"Refrigeration": {
		title: "Commercial Refrigeration Fans",
		intro:
			"Fans expel heat from condenser coils and serve flash freezers and chillers in food processing plants; sanitary construction is required.",
		body:
			"Corrosion-resistant materials withstand extreme temperature cycles and provide long life.",
		image: "https://plus.unsplash.com/premium_photo-1682148734654-995384287c47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxhaXIlMjBjb25kaXRpb25pbmclMjB2ZW50aWxhdGlvbiUyMHN5c3RlbXN8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],
	
	},

	"Scrubber": {
		title: "Scrubber Systems Fans",
		intro:
			"Simple scrubbers to advanced packed towers require higher energy fans and corrosion protection.",
		body:
			"Fans and duct systems must be protected from water and chemical corrosion. Nobel offers alloys, coatings and FRP.",
		image: "https://images.unsplash.com/photo-1637296001304-4a098990b084?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fFNjcnViYmVyJTIwU3lzdGVtcyUyMEZhbnMlMjBtYWNoaW5lfGVufDB8fDB8fHww",
		designFeatures: [
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer.",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP", "Hastelloy and Inconel"],
	
	},

	"Selective Catalytic Reduction": {
		title: "Selective Catalytic Reduction (SCR)",
		intro:
			"SCR systems reduce NOx using ammonia injection and catalysts; fans supply airflow through the injection skid.",
		body:
			"Customized emissions management solutions adhere to stringent energy and environmental standards while improving mechanical reliability.",
		image: "https://images.unsplash.com/photo-1623986854615-85baba27dfb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fE5pdHJvZ2VuJTIwb3hpZGVzJTIwZmlsdGVyc3xlbnwwfHwwfHx8MA%3D%3D",
		designFeatures: [
			"Peak Reliability",
			"Custom-Designed Tunnel Bearing Unit to Avoid Excessive Vibration Issues",
			"Temperatures from Ambient to >900°F (482°C)",
			"Minimal Leakage Shaft Seal",
			"Retrofits to improve reliability of SCR systems",
		],
		materials: ["SST Alloys", "Mild Steel"],
	
	},

	"Sewers and Water Tunnels": {
		title: "Sewers and Water Tunnels Ventilation",
		intro:
			"Proper ventilation provides airflow, contains fumes, and disperses gases. Fans face harsh chemicals, temperatures and abrasives.",
		body:
			"Solutions include stainless construction, hot-dip galvanizing, and corrosion-resistant coatings. Fans serve scrubbers, odor control, thermal oxidation, and general ventilation.",
		image: "https://images.unsplash.com/photo-1641630462519-3ac2f9857def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fFNld2VycyUyMGFuZCUyMFdhdGVyJTIwVHVubmVscyUyMFZlbnRpbGF0aW9ufGVufDB8fDB8fHww",
		designFeatures: [
			"Vinyl/Polyester Resin options, Spark Resistant Construction, Low Leakage Construction",
			"Special Coatings, SST and Aluminum Construction, Material Documentation",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon Steel", "FRP"],
		
	},

	"Snow Making": {
		title: "Snow Making Blowers & Fans",
		intro:
			"Fans blow artificially-created snow onto trails or slopes. Equipment must provide rugged service with quick setup and seasonal reliability.",
		body:
			"Nobel offers cast aluminum impellers and direct drive fans with extended lubrication lines and long-life bearings for dependable service.",
		image: "https://media.istockphoto.com/id/171316657/photo/snowmaking.webp?a=1&b=1&s=612x612&w=0&k=20&c=q8gI7ZKQdhquEqVHYT5eXtOIYreIc_7Cxhvlh2DUeGs=",
		designFeatures: [
			"Aluminum Construction with High efficiency motors.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Extra heavy-duty bearing and extended lube lines.",
		],
		materials: ["Carbon Steel", "Stainless Steel", "FRP"],
		
	},

	"Spark Resistant Construction": {
		title: "Spark Resistant Construction (SRC)",
		intro:
			"Explosive or flammable airstreams require SRC fan components to minimize spark potential during operation.",
		body:
			"AMCA A/B/C types available. Systems can include ductwork, dampers, filters, and heating/cooling coils.",
		image: "https://images.unsplash.com/photo-1755413566879-a8c5a4719c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3BhcmslMjBSZXNpc3RhbnQlMjBDb25zdHJ1Y3Rpb24lMjBmYW5zJTIwbWFjaGluZSUyMChTUkMpfGVufDB8fDB8fHww",
		designFeatures: [
			"Fan Types: Airstream, Wheel, Buffer SRC",
			"Components: Ductwork, Dampers, Filters, Coils",
		],
		materials: [
			"Aluminum 5052/6061", "Brass CDA 360", "Bronze CDA 958", "Copper CDA 110/122",
			"Monel 400 Shafting"
		],
	
	},

	"Spray Booth Exhaust": {
		title: "Paint Booth Exhaust Fans",
		intro:
			"Removal of paint fumes and overspray requires precise airflow across the booth face and through filters to meet code and noise constraints.",
		body:
			"Fans must be adequately rated to overcome booth and filtration losses while maintaining low noise for worker exposure.",
		image: "https://images.unsplash.com/photo-1603142495954-8f4d49106756?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxQYWludCUyMEZhbnMlMjBtYWNoaW5lfGVufDB8fDB8fHww",
		designFeatures: [
			"Direct drive and belt drive are suitable",
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon steel"],

	},

	"Tempering": {
		title: "Fans for Glass Tempering",
		intro:
			"High-velocity ambient air is directed onto hot glass or metal to achieve target surface properties; requires large airflow and horsepower.",
		body:
			"Nobel metal or glass tempering blowers with highest efficiencies are used for this application.",
		image: "https://plus.unsplash.com/premium_photo-1682146920372-bd950e25125d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fEZhbnMlMjBmb3IlMjBHbGFzcyUyMFRlbXBlcmluZyUyMGZhY3Rvcnl8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Direct Drive where possible",
			"Bearings and motors suitable for the location. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon steel"],

	},

	"Vacuum Systems": {
		title: "Industrial Blowers for Vacuum Systems",
		intro:
			"Vacuum systems can transfer material, clean workspaces, or hold items in place; require completely stable fans.",
		body:
			"Nobel makes several designs that perform well under these conditions for conveying and fixture applications.",
		image: "https://images.unsplash.com/photo-1637296001523-d97d6a70c3f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxJbmR1c3RyaWFsJTIwQmxvd2VycyUyMGZvciUyMFZhY3V1bSUyMFN5c3RlbXN8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Direct Drive where possible",
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon steel"],
	
	},

	"Wind Tunnels": {
		title: "Industrial Wind Tunnel Blowers",
		intro:
			"Fans provide high-velocity airstreams for industrial and scientific testing; labs study environmental and meteorological effects.",
		body:
			"High volumes often require axial flow for space-saving, while high-pressure tests may require centrifugal designs.",
		image: "https://images.unsplash.com/photo-1673613288967-d7543b7b2b21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzA3fHxJbmR1c3RyaWFsJTIwV2luZCUyMFR1bm5lbCUyMEJsb3dlcnN8ZW58MHx8MHx8fDA%3D",
		designFeatures: [
			"Direct Drive where possible",
			"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.",
			"Housing clean out door. Safety guards and electrical disconnect.",
			"Ambient air inlet filter and silencer",
		],
		materials: ["Carbon Steel", "Stainless Steel", "Coated Carbon steel"],
	
	},
};

// Arabic overrides for details (incrementally filled). Only provided fields will override the English base.
export const applicationDetailsAr = {
	"Aeration": {
		title: "معدات تهوية المياه الصناعية",
		intro:
			"تشبه تهوية السوائل الصناعية أنظمة الفقاعات في الأحواض. تُستخدم في الاستزراع المائي ومعالجة مياه الصرف لزيادة الأكسجين ودعم أكسدة المركبات العضوية والمتطايرة.",
		body:
			"يمكن استخدام المراوح لتهوية البرك ذات الأعماق الصغيرة. وعند وجود روائح، تُنشئ المراوح مع أغطية العادم تفريغًا وتوجّه الهواء الملوث إلى وحدات التحكم في الروائح أو الحرق. اطّلع على التصاميم الموصى بها أدناه أو اطلب عرض سعر لمعدات تهوية المياه.",
	},
	"Air Slides": {
		title: "مراوح قنوات الهواء (Air Slides)",
		intro:
			"تقوم مراوح السحب القسري بتسييل وتبريد وحدات النقل بالجاذبية. يعتمد حجم الهواء والضغط المطلوبان على الكثافة الظاهرية للمواد. تساعد مرشحات الدخول على تجنب تلوث المنتج وقد تكون كواتم الصوت مطلوبة.",
		body:
			"يشيع استخدام القيادة المباشرة حيث يُقترن المحرك بعجلة المروحة. يتم التحكم في الحجم عبر المخمدات أو عبر التحكم في تردد المحرك لتوفير الطاقة. راجع التصاميم الموصى بها أدناه.",
	},
	"Blow-Off": {
		title: "أنظمة تجفيف بالهواء الصناعي",
		intro:
			"تُزيل تيارات الهواء العالية السرعة الأوساخ والأبخرة وضباب الزيت والقطرات والحلول من المنتجات قبل أو بعد الغسل. يُعد التجفيف عالي الجودة ضروريًا للصناعات الغذائية والدوائية وتغليف الأجهزة الطبية.",
		body:
			"تستخدم الأنظمة غالبًا ضغوطًا وقدرات حصانية أعلى مع مناطق متعددة وسرعات ناقل أعلى. عادةً ما تكون كواتم الصوت ومرشحات الدخول مطلوبة.",
	},
	"Combustion Air": {
		title: "مراوح هواء الاحتراق الصناعية",
		intro:
			"تتطلب مراوح السحب القسري الشاقة لأنظمة الحراق تدفق هواء ثابتًا وضغطًا ثابتًا. يمكن لمجففات السرعة العالية استخدام سرعة مروحة تغذية الحارق لتسييل المنتج أو نقله.",
		body:
			"تُستخدم عبر طلاء الأفران ومواد البناء وفنون الطباعة بسرعات ناقل عالية. المنتجات أدناه موصى بها لتطبيقات هواء الاحتراق.",
	},
	"Containment": {
		title: "أنظمة تهوية صناعية (الاحتواء)",
		intro:
			"يُعد التقاط الهواء الملوث أو الروائح أو الانبعاثات عند المصدر أفضل عبر أغطية وأنظمة متخصصة. يتم نقل الانبعاثات إلى أجهزة الترشيح أو الإتلاف.",
		body:
			"تُوضَع المراوح عادةً على جانب الهواء النظيف من المرشحات، مع استخدام مراوح مناولة المواد أو مقاومة للتآكل عند الحاجة التصميمية.",
	},
	"Cooling Towers": {
		title: "مراوح أبراج التبريد والأنظمة التبخيرية",
		intro:
			"تدعم مراوح التغذية والعادم تبادل الحرارة في الأنظمة الجافة/الرطبة والتبريد التبخيري. تُعد التصاميم منخفضة الضوضاء وعالية الكفاءة حيوية للمستشفيات والتركيبات الحرجة.",
		body:
			"تتوفر مراوح بمواد مقاومة للتآكل أو سبائك خاصة للبيئات القاسية. التصاميم الموصى بها أدناه.",
	},
	"Dilution Air": {
		title: "مراوح هواء التخفيف الصناعية",
		intro:
			"يُعالج إضافة هواء نقي مخفِّف إلى الانبعاثات المحمّلة بالرطوبة أو الروائح القيود البصرية والمتطلبات التنظيمية. يحقق إبعاد العادم عن المآخذ وإضافة التخفيف معايير التصميم.",
		body:
			"فعّال مع مجاري غاز عالية الحرارة أو تآكلية باستخدام مروحة ومقنطرة فينتوري كمحرك هواء أساسي.",
	},
	"Dryers": {
		title: "معدات نفخ هواء ساخن (مجففات)",
		intro:
			"تخفض المجففات الدفعيّة مستويات الرطوبة؛ وتؤمن مراوح التدوير الهواءَ المسخن. قد تستخدم الغرف الكبيرة مراوح ثنائية الاتجاه؛ وتشمل المجففات المستمرة المجففات الدوارة ومجففات الرذاذ.",
		body:
			"يتم التحكم في متوسط الحرارة والرطوبة عبر مراوح السحب القسري والمحَفَّز. تقدم نوبل حلولاً لكل هذه المتطلبات.",
	},
	"Dust Control": {
		title: "مراوح التحكم في الغبار الصناعية",
		intro:
			"يتم التقاط الانبعاثات والتحكم بها عبر تحريك الهواء خلال المرشحات أو أجهزة الغسيل. يمكن وضع المراوح على جانب الهواء النظيف أو الهواء الملوث حسب التصميم.",
		body:
			"قد تكون هناك حاجة إلى بناء خاص لمجاري الهواء التآكلية أو الكاشطة. التصاميم الموصى بها أدناه.",
	},
	"Fluidized Systems": {
		title: "مراوح طبقة مميعة",
		intro:
			"تستخدم مجففات الرذاذ والنقل الهوائي أنظمة تسييل بالهواء. تضمن أنظمة التحكم طاقة تسييل صحيحة؛ والتحكم في الرطوبة أمر بالغ الأهمية.",
		body:
			"شائع استخدام مجموعات المخمدات على المداخل والمخارج مع التحكم بالسرعة. تُفضَّل المراوح الأعلى كفاءة.",
	},
	"Forced Draft": {
		title: "مراوح السحب القسري لصناعة الغلايات",
		intro:
			"تُسمى المراوح المستخدمة لزيادة ضغط الهواء ميكانيكيًا أو لضخ الهواء في الفراغات بمراوح السحب القسري. تُطلب أحيانًا المحافظة على ضغط إيجابي محدد في المساحات الصناعية مثل غرف النظافة، كما يُستخدم المصطلح لوصف عملية الاحتراق في الغلايات الكبيرة عند تزويدها بالتهوية الميكانيكية.",
		body:
			"تقدم نوبل آلاف الأنواع والنماذج والأحجام من معدات تحريك الهواء القابلة للتخصيص لتطبيقك. اطلع على الجدول أدناه للتصاميم والمواد والميزات الموصى بها لاستخدام السحب القسري أو تواصل لطلب عرض سعر.",
	},
	"Fume Control": {
		title: "مراوح التحكم في الأبخرة",
		intro:
			"تصنع نوبل مجموعة واسعة من مراوح التحكم في الأبخرة بمواد متعددة لإنجاز هذه المهمة. من أبسط غطاء عادم بمروحة إلى مؤكسِد صناعي معقد، نوفر المراوح المطلوبة.",
		body:
			"عند توليد الأبخرة، يمكن لنظام العادم إزالة الأبخرة من منطقة العمل. وإذا كانت الأبخرة تآكلية، فيجب حماية مواد تصنيع المراوح ومجاري الهواء. تُوفر نوبل سبائك وطلاءات خاصة متاحة.",
	},
	"Fume Exhausting": {
		title: "مراوح عادم الأبخرة الصناعية",
		intro:
			"أدت العمليات الصناعية داخل مساحات مُحتواة إلى ظهور أكواد تهوية صناعية. تصنع نوبل مجموعة واسعة من مراوح عادم الأبخرة بمواد متعددة لإنجاز هذه المهمة.",
		body:
			"من أبسط غطاء عادم بمروحة إلى مؤكسِد صناعي معقد، يمكن لنوبل توفير مراوح العملية اللازمة. عند وجود أبخرة تآكلية، يجب حماية مواد تصنيع المراوح ومجاري الهواء. تتوفر سبائك متعددة مع طلاءات خاصة.",
	},
	"Industrial Furnaces": {
		title: "مراوح أفران صناعية عالية الحرارة",
		intro:
			"يمكن استخدام مراوح درجات الحرارة العالية لتطبيقات متعددة ضمن نطاق 1,200–1,800°F (650–980°C). تتوفر مراوح طرد مركزي ومحورية بمقاسات وسبائك مخصصة.",
		body:
			"وفقًا للتطبيق، تُصنع المراوح عادةً من الفولاذ المقاوم للصدأ وسبائك عالية الحرارة. تشمل الملحقات العزل، أختام الأعمدة، أعمدة مبردة بالماء، موزعات حرارة، وتصاميم لاستيعاب التمدد الحراري عبر صناعات الألمنيوم والصلب والنحاس والكربون والحرق.",
	},
	"General Ventilation": {
		title: "مراوح التهوية العامة",
		intro:
			"تصنع نوبل مجموعة واسعة من المراوح وبمواد متعددة لاستخدامها في أنظمة التهوية العامة عبر المساحات الصناعية والتجارية.",
		body:
			"يوفر الموقع الصحيح لسخانات الوحدات مع مراوح تعويض الهواء النقي هواءً لمساحات العمل. وتوفر نوبل مراوح العادم وفتحات الأسقف لإزالة الحرارة وخلق بيئات عمل مريحة.",
	},
	"Grain Drying": {
		title: "مراوح صناعية لتجفيف الحبوب",
		intro:
			"تتوفر مراوح وتجهيزات نفخ صناعية لتجفيف الحبوب لكل من التركيب المحمول والدائم، باستخدام تصاميم مراوح مختلفة مقترنة بسخانات لإزالة الرطوبة.",
		body:
			"عادة ما تكون أحجام كبيرة من الهواء بدرجة حرارة معتدلة ضرورية لإزالة الرطوبة قبل التخزين. غالبًا ما تحكم الكفاءة والحدود الكهربائية الاختيار.",
	},
	"HVAC": {
		title: "مراوح أنظمة التكييف والتهوية (HVAC)",
		intro:
			"تنتج نوبل كل نوع مطلوب من المراوح اللازمة لأنظمة HVAC من المراوح المحورية البسيطة إلى الحلول لمرافق المكاتب والرعاية الصحية كثيفة الأحمال.",
		body:
			"تقدم نوبل آلاف التهيئات التي يمكن تخصيصها لتطبيقك. راجع التصاميم الموصى بها أدناه.",
	},
	"Incineration": {
		title: "مراوح الحرق",
		intro:
			"تشمل الأنظمة الحديثة تحكمًا متطورًا إلى جانب اعتبارات بيئية وسلامة. غالبًا ما تتضمن تقنيات الحرق الثابتة مخططات لاسترجاع الحرارة.",
		body:
			"توفّر المحارق الحرارية باستخدام المبادلات الحفّازة وغير المباشرة طاقة مسترجعة بعد الحرق. تنتج نوبل العديد من تصاميم مراوح الحرق للخدمة الشاقة.",
	},
	"Induced Draft": {
		title: "مراوح السحب المحفَّز",
		intro:
			"تُسمى المراوح المستخدمة لإخلاء الفراغات أو خلق ضغط هواء سالب في الأنظمة بمراوح السحب المحفَّز، وهي شائعة في أنظمة الاحتراق والغلايات الكبيرة.",
		body:
			"تكون مراوح السحب المحفَّز المستخدمة في أنظمة الاحتراق عادةً عالية الحرارة وذات بناء للخدمة الشاقة جدًا.",
	},
	"Lab Hood Exhaust": {
		title: "مروحة مقاومة للانفجار / عادم شفاط المختبر",
		intro:
			"أغطية المختبر تجمع بين جهاز احتواء ونظام عادم. عند تلوث الهواء بالدخان أو الرائحة، يقوم العادم بتهوية الحيز المحتوى وحماية الشاغلين.",
		body:
			"إذا كانت المواد الكيميائية تآكلية أو متطايرة، فتكون هناك حاجة لبناء خاص: سبائك مقاومة للتآكل، مواد مقاومة للشرر، محركات خاصة وأختام أعمدة للمراوح.",
	},
	"Material Handling": {
		title: "معدات مراوح مناولة المواد",
		intro:
			"تتطلب التطبيقات التي يمر فيها المواد خلال النظام اعتبارات خاصة مثل مقاومة التآكل والتآكل الكيميائي.",
		body:
			"يمكن للمواد والتهيئات الخاصة أن تطيل زمن التشغيل وتبسّط الصيانة. تقدم نوبل عدة تصاميم لمناولة المواد.",
	},
	"Mine and Tunnel Ventilation": {
		title: "مراوح تهوية الأنفاق",
		intro:
			"توفر المراوح الرئيسية والفرعية تدفقات هواء دخول وعودة في الأنفاق والمناجم. يعد توجيه الهواء إلى المناطق النشطة أمرًا حاسمًا للكفاءة والسلامة.",
		body:
			"يعتمد الاختيار على متطلبات العمل التفصيلية. تقدم نوبل حلولًا محورية وطرد مركزي فعالة للمهام الأساسية والمعزِّزة.",
	},
	"Odor Control": {
		title: "مراوح ومعدات التحكم في الروائح",
		intro:
			"يتم التقاط الروائح والتحكم بها عبر خلق حركة هواء. يمكن استخدام كل أنواع المراوح لتحريك الهواء خلال أجهزة امتصاص الروائح.",
		body:
			"أحيانًا يكون الهواء تآكليًا أو يحتوي على غازات تتطلب بناءً خاصًا. توفر نوبل حلول مراوح للهواء النظيف والهواء الملوث.",
	},
	"Oil Mist": {
		title: "مراوح ضباب الزيت الصناعية",
		intro:
			"ينشأ ضباب الزيت من عمليات التشغيل والقولبة. يجب أن تكون المراوح مقاومة للشرر وغالبًا بتصاميم مناولة مواد.",
		body:
			"إذا كان ضباب الزيت تآكليًا، فيجب حماية المراوح ومجاري الهواء. تقدم نوبل سبائك وطلاءات خاصة وبناء FRP.",
	},
	"Oven Exhaust": {
		title: "مراوح عادم الأفران الصناعية",
		intro:
			"تعمل أفران العمليات ذات حراقات الغاز/الزيت عادةً بضغط موجب؛ وتُستخدم مروحة عادم لمنع تسرب الأبخرة إلى المناطق المحيطة.",
		body:
			"تستخدم السخانات ذات العناصر الكهربائية منفذ هواء تعويض صغير وتستنفد فقط ما يكفي للحفاظ على ضغط متعادل. يكون الحجم عادةً ~10% من حجم التدوير.",
	},
	"Oven Recirculation": {
		title: "مراوح أفران العمليات",
		intro:
			"يُحدّد معدل تغيّر الهواء في الدقيقة تدفق التدوير. يختار المصممون مروحة واحدة أو عدة مراوح؛ تقدم مراوح القابس كفاءات وضغوطًا أعلى.",
		body:
			"تتيح المراوح المتعددة تدوير تيارات الهواء باتجاهات معاكسة لتحسين تدرجات الحرارة. توفّر أطقم الأعمدة الطويلة تركيبًا أنيقًا للمراوح المثبتة على الأسقف.",
	},
	"Oxidizers": {
		title: "مراوح وأنظمة الأكسدة الحرارية",
		intro:
			"تتخصص المؤكسدات في تدمير المركبات العضوية المتطايرة عبر تحكمات متقدمة ومخططات استرجاع حرارة.",
		body:
			"توفر الأنظمة الحفّازة التجديدية والمباشرة مع مبادلات حرارية متزامنة طاقة مسترجعة بعد الحرق. تقدّم نوبل تصاميم للخدمة الشاقة.",
	},
	"Pickling": {
		title: "مراوح صناعية لعمليات التخليل",
		intro:
			"التخليل شائع في صناعة الصلب وقد يتطلب بناءً مقاومًا للتآكل. تقدم نوبل مجموعة واسعة من المراوح لأنظمة التخليل.",
		body:
			"بدءًا من أغطية العادم البسيطة إلى أنظمة الغسيل المعقدة، يمكن لنوبل توفير مراوح العمليات ومواد التصنيع المناسبة.",
	},
	"Pneumatic Conveying": {
		title: "مراوح النقل الهوائي",
		intro:
			"يحمل الهواء عالي السرعة المواد من العملية إلى نقطة التجميع؛ ويحدد هواء التخفيف والكثافة الظاهرية معدل التدفق.",
		body:
			"يمكن أن يبرد تيار الهواء الناقل المواد ويهويها. يضمن الاختيار الصحيح التعامل مع التآكل والحفاظ على الكفاءة.",
	},
	"Pollution Control": {
		title: "مراوح التحكم في التلوث",
		intro:
			"يتم التقاط الانبعاثات والتحكم بها عبر تحريك الهواء خلال المرشحات أو أجهزة الغسيل.",
		body:
			"تتطلب أجهزة جانب الهواء النظيف تصاميم عالية الكفاءة ومنخفضة الاستطاعة؛ بينما تتطلب أجهزة الهواء الملوث تصاميم صناعية للخدمة الشاقة.",
	},
	"Pressurizing": {
		title: "مراوح الضغط الإيجابي",
		intro:
			"تُستخدم للحفاظ على المساحات من تسرب الهواء إلى المناطق المحيطة (مثل غرف الحواسيب أو غرف التحكم في البيئات القاسية).",
		body:
			"تُزوَّد المراوح عادةً بتحكمات سرعة متغيرة. تُوصى تصاميم Nobel Junior وGeneral Purpose وACF/PLR/BC للهواء النظيف.",
	},
	"Process Control": {
		title: "مراوح التحكم في العمليات",
		intro:
			"تستخدم أنظمة التحكم في العمليات غالبًا مُبدّلات سرعة لتوفير تدفق هواء دقيق دون مخمدات؛ وبعضها يجمع بين التحكم بالسرعة والمخمدات لضبط أدق.",
		body:
			"تقدم نوبل مراوح صناعية عالية الجودة لنجاح تطبيقك.",
	},
	"Process Cooling": {
		title: "مراوح تبريد العمليات",
		intro:
			"تدفع المراوح الهواء عبر ملفات التبريد أو عبر المبرّدات. تتطلب مجمدات الوميض ومنشآت تجهيز الأغذية غالبًا سبائك خاصة.",
		body:
			"تُلحَم المراوح خصيصًا وتُنظَّف لدورات التعقيم، وتُصمَّم لتحمّل تغيرات الحرارة القصوى وعمر تشغيلي طويل.",
	},
	"Process Heating": {
		title: "مراوح تسخين العمليات",
		intro:
			"تؤمن المراوح هواء الاحتراق وتعيد تدوير الهواء المسخن للأفران والأتّون؛ الموثوقية وعمر المحامل أمران حاسمان.",
		body:
			"توفر نوبل مراوحًا للغلايات والسخانات والمجففات في منشآت العمليات الكيميائية مع موثوقية مثبتة.",
	},
	"Refrigeration": {
		title: "مراوح التبريد التجاري",
		intro:
			"تطرد المراوح الحرارة من ملفات المكثّف وتخدم مجمدات الوميض والمبرّدات في مصانع الأغذية؛ ويتطلب ذلك بناءً صحّيًا.",
		body:
			"تتحمل المواد المقاومة للتآكل دورات حرارة قاسية وتوفر عمرًا تشغيليًا طويلاً.",
	},
	"Scrubber": {
		title: "مراوح أنظمة الغسيل",
		intro:
			"تتطلب أجهزة الغسيل من البسيطة إلى الأبراج المعبأة المتقدمة مراوح ذات طاقة أعلى وحماية من التآكل.",
		body:
			"يجب حماية المراوح ومجاري الهواء من الماء والتآكل الكيميائي. تقدم نوبل سبائك وطلاءات وFRP.",
	},
	"Selective Catalytic Reduction": {
		title: "الاختزال التحفيزي الانتقائي (SCR)",
		intro:
			"تقلّل أنظمة SCR من أكاسيد النيتروجين (NOx) عبر حقن الأمونيا ومحفّزات؛ وتزوّد المراوح تدفق الهواء عبر مشهد الحقن.",
		body:
			"تلتزم حلول إدارة الانبعاثات المُخصصة بمعايير الطاقة والبيئة الصارمة مع تحسين الموثوقية الميكانيكية.",
	},
	"Sewers and Water Tunnels": {
		title: "تهوية الفساقي والأنفاق المائية",
		intro:
			"يوفّر التهوية المناسبة تدفق الهواء ويحتوي الأبخرة ويبدد الغازات. تواجه المراوح مواد كيميائية وحرارة وكاشطات قاسية.",
		body:
			"تشمل الحلول تصنيعًا من الستانلس، جلفنة بالغمس الساخن، وطلاءات مقاومة للتآكل. تخدم المراوح أجهزة الغسيل والتحكم بالروائح والأكسدة الحرارية والتهوية العامة.",
	},
	"Snow Making": {
		title: "مراوح وأنظمة صناعة الثلج",
		intro:
			"تنفخ المراوح الثلج المُنشأ صناعيًا على المسارات أو المنحدرات. يجب أن تؤمّن المعدات خدمة متينة وتركيبًا سريعًا وموثوقية موسمية.",
		body:
			"تقدم نوبل دوّارات من الألمنيوم ومراوح قيادة مباشرة مع خطوط تزييت ممتدة ومحامل طويلة العمر لخدمة موثوقة.",
	},
	"Spark Resistant Construction": {
		title: "بناء مقاوم للشرر",
		intro:
			"تتطلب تيارات الهواء القابلة للاشتعال أو الانفجار مكوّنات SRC لتقليل احتمال الشرر أثناء التشغيل.",
		body:
			"تتوفر أنواع AMCA A/B/C. يمكن أن تشمل الأنظمة مجاري الهواء والمخمدات والمرشحات وملفات التسخين/التبريد.",
	},
	"Spray Booth Exhaust": {
		title: "مراوح عادم غرف الطلاء",
		intro:
			"يتطلب إزالة أبخرة الطلاء والرذاذ الزائد تدفق هواء دقيقًا عبر واجهة الكابينة ومن خلال المرشحات لتلبية قيود الأكواد والضوضاء.",
		body:
			"يجب أن تكون المراوح ذات تصنيف كافٍ للتغلب على خسائر الكابينة والترشيح مع الحفاظ على ضوضاء منخفضة لتعرض العاملين.",
	},
	"Tempering": {
		title: "مراوح تقسية الزجاج/المعادن",
		intro:
			"يُوجَّه هواء محيط عالي السرعة إلى الزجاج أو المعدن الساخن لتحقيق الخصائص السطحية المطلوبة؛ ويتطلب ذلك تدفقات كبيرة وقدرات حصانية عالية.",
		body:
			"تُستخدم مراوح تقسية المعادن أو الزجاج من نوبل ذات أعلى كفاءة لهذا التطبيق.",
	},
	"Vacuum Systems": {
		title: "مراوح لأنظمة التفريغ",
		intro:
			"يمكن لأنظمة التفريغ نقل المواد أو تنظيف مساحات العمل أو تثبيت العناصر في مكانها؛ وتتطلب مراوح مستقرة تمامًا.",
		body:
			"تصنع نوبل عدة تصاميم تعمل جيدًا تحت هذه الظروف لكل من تطبيقات النقل والتثبيت.",
	},
	"Wind Tunnels": {
		title: "مراوح أنفاق الرياح الصناعية",
		intro:
			"توفر المراوح تيارات هواء عالية السرعة للاختبارات الصناعية والعلمية؛ وتدرس المختبرات التأثيرات البيئية والطقسية.",
		body:
			"تتطلب الأحجام الكبيرة غالبًا تدفقًا محوريًا لتوفير المساحة، بينما قد تتطلب اختبارات الضغط العالي تصاميم طرد مركزي.",
	},
}; 

// Arabic feature/material dictionaries and helper to merge details based on language
const __featureArMap = {
	"Direct Drive where possible": "قيادة مباشرة قدر الإمكان",
	"Direct and belt drive designs": "تصميمات قيادة مباشرة وبالحزام",
	"Belt Drive to isolate motor where possible": "قيادة بالحزام لعزل المحرك قدر الإمكان",
	"Bearings and motors isolated from the process.": "عزل المحامل والمحركات عن الوسط التشغيلي.",
	"Bearings and motors according to local code. Shaft seals with ceramic felt elements.": "محامل ومحركات وفق الأكواد المحلية. أختام عمود بعناصر لباد خزفي.",
	"Shaft seals with ceramic felt elements.": "أختام عمود بعناصر لباد خزفي.",
	"Housing clean out door.": "باب تنظيف هيكل المروحة.",
	"Safety guards and electrical disconnect.": "واقيات أمان وفصل كهربائي.",
	"Ambient air inlet filter and silencer": "مرشح هواء دخول من الوسط وكاتم صوت.",
	"Explosion proof motors": "محركات مقاومة للانفجار",
	"Spark Resistant Construction": "بناء مقاوم للشرر",
	"Based on Application Requirements": "حسب متطلبات التطبيق",
	"Special Alloy Construction": "بناء بسبائك خاصة",
	"Corrosion Resistant Coatings": "طلاءات مقاومة للتآكل",
	"Wide Variety of Accessories": "مجموعة واسعة من الملحقات",
	"IoT Monitoring Devices": "أجهزة مراقبة إنترنت الأشياء",
	"Axial, Centrifugal and Mixed Flow Fans": "مراوح محورية وطرد مركزي وتدفق مختلط",
	"Anti-friction and sleeve bearings": "محامل مضادة للاحتكاك ومحامل انزلاقية",
	"Explosion doors/covers": "أبواب/أغطية مقاومة للانفجار",
	"Shaft covers, ducts, E-Houses": "أغطية أعمدة، مجاري هواء، غرف كهربائية",
	"IoT (I4) instrumentation and control": "أجهزة وتحكم إنترنت الأشياء (I4)",
	"Silencers, dampers and turning bends": "كاتمات، مخمدات وانحناءات توجيه",
	"High Pressure Capability (to 130\" SP)": "قدرة ضغط مرتفع (حتى 130 بوصة SP)",
	"Aluminum Construction with High efficiency motors.": "هيكل من الألمنيوم مع محركات عالية الكفاءة",
	"Housing clean out door. Safety guards and electrical disconnect.": "باب تنظيف للهيكل. واقيات أمان وفصل كهربائي",
	"Extra heavy-duty bearing and extended lube lines.": "محامل للخدمة الشاقة جدًا وخطوط تزييت ممتدة",
	"Direct drive and belt drive are suitable": "القيادة المباشرة وبالحزام مناسبة",
	"Bearings and motors isolated from the process. Shaft seals with ceramic felt elements.": "عزل المحامل والمحركات عن الوسط التشغيلي. أختام عمود بعناصر لباد خزفي.",
	"Bearings and motors suitable for the location. Shaft seals with ceramic felt elements.": "محامل ومحركات مناسبة للموقع. أختام عمود بعناصر لباد خزفي.",
	"Fan Types: Airstream, Wheel, Buffer SRC": "أنواع المراوح: مجرى هوائي، عجلة، عازل شرر SRC",
	"Components: Ductwork, Dampers, Filters, Coils": "المكونات: مجاري هواء، مخمدات، مرشحات، ملفات",
	"Vinyl/Polyester Resin options, Spark Resistant Construction, Low Leakage Construction": "خيارات راتنج فينيل/بوليستر، بناء مقاوم للشرر، بناء منخفض التسرب",
	"Special Coatings, SST and Aluminum Construction, Material Documentation": "طلاءات خاصة، بناء من الفولاذ المقاوم للصدأ والألمنيوم، توثيق المواد",
	"Peak Reliability": "موثوقية قصوى",
	"Custom-Designed Tunnel Bearing Unit to Avoid Excessive Vibration Issues": "وحدة محمل نفق مصممة خصيصًا لتجنب مشاكل الاهتزاز المفرط",
	"Temperatures from Ambient to >900°F (482°C)": "درجات حرارة من المحيط حتى أكثر من 900°F (482°C)",
	"Minimal Leakage Shaft Seal": "ختم عمود منخفض التسرب",
	"Retrofits to improve reliability of SCR systems": "تعديلات لرفع موثوقية أنظمة SCR",
	"Ambient air inlet filter and silencer.": "مرشح هواء دخول من الوسط وكاتم صوت.",
	"Abrasion resistant features": "ميزات مقاومة للتآكل",
	"Direct drive or belt drive": "قيادة مباشرة أو بالحزام",
	"FRP Construction": "هيكل من الألياف الزجاجية (FRP)",
};

const __materialArMap = {
	"Carbon steel": "صلب كربوني",
	"Carbon Steel": "صلب كربوني",
	"Coated Carbon steel": "صلب كربوني مطلي",
	"Coated Carbon Steel": "صلب كربوني مطلي",
	"Stainless Steel": "فولاذ مقاوم للصدأ",
	"Stainless steel": "فولاذ مقاوم للصدأ",
	"FRP": "ألياف زجاجية (FRP)",
	"SST Alloys": "سبائك مقاومة للصدأ",
	"Mild Steel": "فولاذ طري",
	"Aluminum 5052/6061": "ألمنيوم 5052/6061",
	"Brass CDA 360": "نحاس CDA 360",
	"Bronze CDA 958": "برونز CDA 958",
	"Copper CDA 110/122": "نحاس CDA 110/122",
	"Monel 400 Shafting": "أعمدة مونيل 400",
	"Hastelloy and Inconel": "هاستلوي وإنكونيل",
};

const __mapArray = (arr, dict) => Array.isArray(arr) ? arr.map((item) => dict[item] || item) : arr;

export const getApplicationDetails = (key, isArabic = false) => {
	const base = applicationDetails[key];
	if (!base) return undefined;
	if (!isArabic) return base;
	const ar = applicationDetailsAr[key] || {};
	const merged = { ...base, ...ar };
	if (!ar.designFeatures && Array.isArray(base.designFeatures)) {
		merged.designFeatures = __mapArray(base.designFeatures, __featureArMap);
	}
	if (!ar.materials && Array.isArray(base.materials)) {
		merged.materials = __mapArray(base.materials, __materialArMap);
	}
	return merged;
}; 