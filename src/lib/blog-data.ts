export interface BlogPost {
  slug: string;
  title: string;
  category: "Regulations" | "Trends" | "Renovations" | "Building" | "Commercial";
  date: string;
  readTime: string;
  summary: string;
  img: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-melbourne-building-permits",
    title: "Understanding Melbourne Building Permits: A Builder's Guide",
    category: "Regulations",
    date: "June 12, 2026",
    readTime: "5 min read",
    summary: "A practical breakdown of planning vs building permits, asset protection, and municipal consents required under Victorian building laws.",
    img: "/images/a-suburban-luxury-home-in-a-north-american-city-2026-03-26-09-21-00-utc.jpg.jpeg",
    content: `
      <p>Embarking on a custom home construction, knockdown rebuild, or major second-storey extension in Melbourne requires a thorough understanding of the local municipal building approval system. Many property owners confuse <strong>Planning Permits</strong> with <strong>Building Permits</strong>, leading to severe schedule delays or unapproved structural work penalties.</p>
      
      <h3>1. Planning Permit vs. Building Permit</h3>
      <p>A Planning Permit is issued by your local municipal council (such as the City of Cardinia, Casey, or Greater Dandenong) and focuses on the use and visual look of the land. It dictates setbacks, boundary boundary heights, overlays (such as heritage or vegetation protection), and neighborhood character. A Building Permit, on the other hand, is issued by a registered private or municipal building surveyor and deals with structural integrity, fire safety, and compliance with the National Construction Code (NCC).</p>
      
      <h3>2. Essential Pre-Construction Documents</h3>
      <ul>
        <li><strong>Soil Test & Geotechnical Report:</strong> Determines soil plasticity and slab classification (Class A, S, M, H, P).</li>
        <li><strong>Structural Engineering Computations:</strong> Detailed calculations specifying concrete reinforcement steel and load-bearing timber/steel lintels.</li>
        <li><strong>Title Search & Copy of Covenants:</strong> Verifies easements and legal building envelopes on your property block.</li>
      </li>
      
      <h3>3. Asset Protection Permits</h3>
      <p>Before any heavy equipment, trucks, or excavators roll onto your block, we must submit an Asset Protection Permit application to the council. This protects public curbs, footpaths, nature strips, and storm drain inlets. In Pakenham and Berwick, municipal inspectors review the perimeter conditions before and after framing to ensure no municipal structures were damaged.</p>
      
      <p>At Dhaliwal Homes, we handle the preparation and filing of all planning and building permit files directly, ensuring your construction project satisfies Victorian regulations before excavation begins.</p>
    `,
  },
  {
    slug: "7-star-energy-rating-compliance-victoria",
    title: "Exceeding Victoria's New 7-Star Energy Rating Regulations",
    category: "Regulations",
    date: "June 05, 2026",
    readTime: "6 min read",
    summary: "Victorian residential codes now mandate 7-star minimum energy efficiency. Explore how framing, double glazing, and wall wrapping help satisfy the NCC.",
    img: "/images/luxury-house-at-sunny-day-in-vancouver-canada-2026-03-26-11-34-19-utc.jpg.jpeg",
    content: `
      <p>As of recent updates to the National Construction Code (NCC) in Victoria, all newly constructed residential dwellings must achieve a minimum **7-star NatHERS thermal energy rating**. This regulatory shift demands that builders design smart, climate-responsive structures rather than relying on heavy mechanical heating or cooling.</p>
      
      <h3>1. Orientation is Key</h3>
      <p>Building a 7-star home begins with the layout draft. We align primary living zones, kitchen workspaces, and double-glazed windows facing north to capture low-angle winter sunlight. Bedrooms are positioned to the south or east, and western walls receive minimal glazing to block blistering summer afternoon heat.</p>
      
      <h3>2. High-Performance Glazing</h3>
      <p>Single-glazed, aluminum-frame windows act as thermal leaks, draining heat in winter and flooding rooms with heat in summer. We mandate double-glazed window profiles with thermally broken timber or high-grade composite frames. This reduces thermal transfer and significantly cuts down external suburb noises.</p>
      
      <h3>3. Insulation and Air Seals</h3>
      <p>We install R2.5 high-density wall batts, R4.0 ceiling insulation blankets, and wrap the entire timber frame in reflective weather barriers. Every ceiling exhaust fan, recessed light canister, and sliding door track must be sealed to prevent draft leaks. Building a draft-free envelope keeps internal climates stable and lowers energy utility bills for years.</p>
    `,
  },
  {
    slug: "renovation-vs-knockdown-rebuild-cost-analysis",
    title: "Renovation vs. Knockdown Rebuild: A Detailed Cost Analysis",
    category: "Renovations",
    date: "May 28, 2026",
    readTime: "7 min read",
    summary: "Stuck between remodeling your existing home or demolishing it to build fresh? We audit site conditions, demolition fees, and square-meter rates.",
    img: "/images/beautiful-house-exterior-at-twilight-in-suburban-s-2026-03-18-08-25-48-utc.jpg.jpeg",
    content: `
      <p>Many homeowners in established suburbs like Berwick or Narre Warren love their current block address but outgrow their aging single-storey brick veneer home. This triggers a crucial question: <em>Do we renovate and extend, or do we execute a complete knockdown rebuild?</em> Here is an honest cost audit based on current building conditions.</p>
      
      <h3>1. Renovation & Extension Costs</h3>
      <p>Renovations involve stripping out old plasterboards, modifying framing structures, or lifting roof lines for second-storey additions. While it saves you from demolishing structural brick outer walls, old homes often reveal hidden problems: dry-rotted studs, outdated wiring, or non-compliant plumbing. Renovations average higher per-square-meter trade rates due to manual structural splicing constraints.</p>
      
      <h3>2. Knockdown Rebuild Costs</h3>
      <p>Demolishing a single-storey timber/brick dwelling and removing the slab costs roughly $22,000 to $35,000. Once the site is cleared and leveled, construction of a brand-new custom home is highly organized. Carpenters and plumbers work with straight walls and level boundaries, achieving lower per-square-meter installation rates compared to complex structural retrofitting.</p>
      
      <h3>3. Decision Framework</h3>
      <ul>
        <li><strong>Renovate if:</strong> Your existing home has historical heritage value, your block has significant slope access limits, or you only need to upgrade isolated zones like the kitchen and master bedroom.</li>
        <li><strong>Rebuild if:</strong> Your existing home slab is cracked, the internal layout is poorly oriented, or you want to expand your layout significantly while bringing building insulation up to modern 7-star compliance.</li>
      </ul>
    `,
  },
  {
    slug: "top-kitchen-design-trends-melbourne",
    title: "Top Luxury Kitchen Design Trends for Melbourne Homes in 2026",
    category: "Trends",
    date: "May 20, 2026",
    readTime: "4 min read",
    summary: "Discover the material palettes defining luxury kitchens: butler's pantries, fluted joinery, natural stone, and seamless integrated smart appliances.",
    img: "/images/Industrial Design Cafe Interiors.jpg",
    content: `
      <p>The kitchen is the functional heart of the home and a key value driver in modern properties. In 2026, luxury custom kitchens in Melbourne focus on minimalist lines, natural organic textures, and functional food prep spaces.</p>
      
      <h3>1. Double Islands & Natural Stone</h3>
      <p>Large open-plan layouts accommodate oversized central islands, often clad in marble, quartzite, or premium engineered quartz slabs. Fluted timber or curved plaster detailing around the base of the island adds visual depth, turning the food prep zone into an elegant architectural focal point.</p>
      
      <h3>2. Integrated Butler's Pantries</h3>
      <p>To keep the main kitchen clean, design layouts include integrated butler's pantries hidden behind seamless joinery doors. The pantry houses the microwave, dishwasher, coffee machines, and storage drawers, keeping clutter out of sight when hosting guests.</p>
      
      <h3>3. Warm Earthy Color Palettes</h3>
      <p>Plain stark-white gloss kitchens have been replaced by rich graphite greys, warm cashmere beiges, muted olive greens, and natural stained oak surfaces. Combining these organic tones with matte black tapware or brushed gold handles creates a balanced luxury look.</p>
    `,
  },
  {
    slug: "maximizing-space-ground-floor-extension",
    title: "Maximizing Space: Essential Tips for Ground Floor Extensions",
    category: "Renovations",
    date: "May 12, 2026",
    readTime: "5 min read",
    summary: "Extend outwards to expand living areas. We cover structural joins, footing integration, and keeping natural light flowing into your spaces.",
    img: "/images/a-suburban-luxury-home-in-a-north-american-city-2026-01-11-09-38-23-utc.jpg.jpeg",
    content: `
      <p>A ground floor extension is a popular way to expand your kitchen, add dining zones, or construct an alfresco deck. However, extending outwards changes your outdoor space and can block natural light to your existing rooms if designed poorly.</p>
      
      <h3>1. Keeping Natural Light Flowing</h3>
      <p>When you extend a room outwards, the original interior spaces lose direct window exposure. To fix this, we incorporate raked ceilings with skylights, large highlight windows, or expansive glass sliding doors. This keeps natural light flowing into the center of your home.</p>
      
      <h3>2. Foundation and Structural Joins</h3>
      <p>Connecting a new concrete slab or timber floor to an existing foundation requires careful engineering. We install structural anchors to tie the new slab to the old footings, preventing uneven settlement and structural cracking at the boundary.</p>
      
      <h3>3. Seamless Roof Integration</h3>
      <p>Roof line transitions are a common leak risk. Our carpenters ensure the extension roof truss layout integrates smoothly with your existing roof valleys, installing deep flashing trays and compliant gutters to manage Melbourne's heavy downpours.</p>
    `,
  },
  {
    slug: "what-to-expect-soil-test-site-survey",
    title: "Understanding Soil Tests & Site Surveys Before Building",
    category: "Building",
    date: "May 03, 2026",
    readTime: "4 min read",
    summary: "Geotechnical testing and boundary surveys protect your project. Learn how soil class affects slab designs and structural costs.",
    img: "/images/attractive-suburban-home-with-black-iron-gate-2026-03-26-11-36-08-utc.jpg.jpeg",
    content: `
      <p>Before any foundation design can be calculated, structural engineers require two critical pre-construction reports: a Geotechnical Soil Test and a Land Boundary Survey. Skipping or rushing these assessments can lead to foundation shifting, shifting brickwork, and border disputes.</p>
      
      <h3>1. Soil Classification</h3>
      <p>A geotechnical engineer drills boreholes to analyze soil profile layers and clay content. Soils are categorized into classifications:</p>
      <ul>
        <li><strong>Class A & S:</strong> Stable, sandy, or non-reactive soils. Requires standard footing designs.</li>
        <li><strong>Class M & H (Highly Reactive):</strong> Clay-rich soils that expand when wet and shrink when dry. Requires stiffer concrete slabs with deeper support beams.</li>
        <li><strong>Class P (Problem Soil):</strong> Soft clay, organic silt, fill soil, or shifting sand. Requires concrete piers drilled down to solid rock layers.</li>
      </ul>
      
      <h3>2. Land Boundary Surveys</h3>
      <p>A licensed surveyor uses lasers to map boundary lines, easements, existing fences, and height levels. Fences in older Melbourne suburbs are often offset from the true property lines by several inches. Re-establishing the correct boundaries ensures your walls comply with side setback codes.</p>
    `,
  },
  {
    slug: "guide-to-mixed-use-commercial-developments",
    title: "The Builder's Guide to Mixed-Use Commercial Developments",
    category: "Commercial",
    date: "April 26, 2026",
    readTime: "6 min read",
    summary: "Building mixed-use spaces requires balancing commercial zoning laws with residential building requirements under the NCC.",
    img: "/images/central-melbourne-city-riverside-skyline-in-austra-2026-03-25-08-25-38-utc.jpg.jpeg",
    content: `
      <p>Mixed-use commercial construction—such as ground-floor retail storefronts topped by modern residential apartments—is growing in popularity across South East Melbourne's main business districts. These multi-use projects require navigating unique council zones and building safety regulations.</p>
      
      <h3>1. Fire Separation Metrics</h3>
      <p>Under the National Construction Code (NCC), mixed-use buildings have strict fire separation guidelines. Commercial zones (like cafes or retail shops) must be separated from residential spaces above by fire-rated concrete slabs and plasterboard barriers, preventing thermal heat and smoke from spreading.</p>
      
      <h3>2. Acoustic Insulation Profiles</h3>
      <p>Acoustic insulation is critical to protect residents above from commercial noise. We install high-density insulation batts, acoustic rubber underlays beneath floorboards, and double-glazed windows to block traffic and retail sounds.</p>
      
      <h3>3. Separate Services Access</h3>
      <p>Commercial tenants require separate access, gas lines, electric meters, and grease traps. Coordinating these utilities during the framing phase ensures a smooth transition to occupancy certifications.</p>
    `,
  },
  {
    slug: "how-to-select-masonry-and-mortar-colors",
    title: "Bespoke Aesthetics: Selecting Masonry & Mortar Colors",
    category: "Trends",
    date: "April 18, 2026",
    readTime: "4 min read",
    summary: "Exterior bricks and mortar colors define your home's character. We review brick textures, linear designs, and mortar styles.",
    img: "/images/beautiful-blue-house-on-a-sunny-day-in-vancouver-2026-03-26-09-48-53-utc.jpg.jpeg",
    content: `
      <p>Bricks are a popular facade material for Melbourne homes due to their durability and thermal benefits. However, many owners overlook the impact of mortar joints, which make up about 15% of your brick wall's surface area.</p>
      
      <h3>1. Selecting Brick Profiles</h3>
      <p>Modern luxury homes often use long linear bricks, dark textured clinkers, or hand-thrown bricks with natural variations. Choosing the right texture and scale sets the tone for your home's exterior character.</p>
      
      <h3>2. Mortar Colors and Joints</h3>
      <p>Changing your mortar color completely transforms the look of your bricks:</p>
      <ul>
        <li><strong>Natural Mortar (Grey):</strong> A traditional look that outlines individual bricks clearly.</li>
        <li><strong>Off-White Mortar:</strong> Adds contrast and brightness, creating a soft, warm look.</li>
        <li><strong>Colored Mortar (Charcoal):</strong> Blends dark bricks into a monolithic, modern wall surface.</li>
      </ul>
      <p>Joint styles (ironed, flush, or raked) also affect shadow lines, changing how your facade catches light throughout the day.</p>
    `,
  },
  {
    slug: "smart-home-automation-pre-wiring-guide",
    title: "Future-Proofing: A Builder's Pre-Wiring Guide for Smart Homes",
    category: "Trends",
    date: "April 10, 2026",
    readTime: "5 min read",
    summary: "Avoid expensive retrofits. Learn why pre-wiring Ethernet cables, camera conduits, and smart switches during framing is essential.",
    img: "/images/Industrial Design Cafe Interiors.jpg",
    content: `
      <p>A smart home requires more than just connecting a smart speaker. To support high-definition security feeds, automated blinds, built-in speakers, and mesh Wi-Fi, pre-wiring your home during the framing phase is essential.</p>
      
      <h3>1. Running Structured Cabling</h3>
      <p>Wireless signals can struggle to penetrate thick steel frames and double brick walls. We run Cat6 Ethernet lines from a central utility closet to key smart TV mounts, office spaces, and Wi-Fi access points, ensuring fast, stable data connections.</p>
      
      <h3>2. Conduits for Future Upgrades</h3>
      <p>Technology changes rapidly. We install empty plastic conduits from your ceiling cavities to wall points, allowing you to run new fiber, speaker wires, or solar lines later without cutting open finished plasterboards.</p>
      
      <h3>3. Smart Light Switch Wiring</h3>
      <p>Many smart dimmers require a neutral wire to function. We pre-wire active, neutral, and earth lines to all switch boxes during the rough-in stage, giving you the flexibility to install smart lighting systems anytime.</p>
    `,
  },
  {
    slug: "demystifying-domestic-building-insurance-DBI",
    title: "Demystifying Domestic Building Insurance (DBI) in Victoria",
    category: "Regulations",
    date: "April 02, 2026",
    readTime: "5 min read",
    summary: "Domestic Building Insurance protects your investment in Victoria. Explore DBI rules, coverage caps, and owner rights.",
    img: "/images/modern-luxury-house-with-landscaped-garden-under-a-2026-03-09-02-55-27-utc.jpg.jpeg",
    content: `
      <p>In Victoria, builders must supply **Domestic Building Insurance (DBI)** for all residential building works valued over $16,000. DBI is a key consumer protection framework that safeguards your investment during construction.</p>
      
      <h3>1. What is DBI Coverage?</h3>
      <p>DBI protects homeowners against structural defects or incomplete work if their builder dies, disappears, or becomes insolvent. It covers structural items like cracked foundations, leaking roofs, or sagged beams for 6.5 years from project completion.</p>
      
      <h3>2. Coverage Limits</h3>
      <p>Victorian building regulations cap DBI coverage at $350,000 for structural rectifications. Before paying a deposit or signing a contract, ensure your builder issues you an official DBI Certificate of Insurance from the Victorian Managed Insurance Authority (VMIA).</p>
      
      <h3>3. Our Compliance Commitment</h3>
      <p>For all applicable residential construction works, a valid Domestic Building Insurance certificate is provided to the homeowner before any site work commences, ensuring full compliance and peace of mind.</p>
    `,
  },
];
