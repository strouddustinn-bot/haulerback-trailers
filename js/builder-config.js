/* =====================================================================
   Haul 'Er Back custom builder: ALL prices, weights, and limits live here.
   Edit numbers in this file only; builder.js reads them.
   Prices are CAD. Weights are preliminary estimates in lb.
   ===================================================================== */
window.HB_BUILDER_CONFIG = {
  tiers: { basic: 10900, pro: 13900, wrap: 17900 },       // Jobsite 612 Lite reference (6x12 + V-nose, single axle, full interior)
  interiorAllowance: 1500,  // portion of the tier price that covers shelving + desk + cooler bench
  size: { referenceSqFt: 72, pricePerSqFt: 45, minAdjustment: -1500 },  // box W x L vs the 6x12 reference
  rounding: 100,

  // ---- Legal / design limits checked live (Ontario HTA + our build plan) ----
  limits: {
    maxWidthM: 2.6,              // Ontario max vehicle width
    maxTotalHeightM: 4.15,       // Ontario max height
    maxTrailerLengthM: 12.5,     // Ontario max single trailer length
    maxCombinationLengthM: 23,   // Ontario max overall combination length
    assumedTowVehicleM: 6.4,     // long-box crew-cab pickup, for the combination check
    brakeThresholdKg: 1360,      // Ontario: trailer brakes required at a gross weight of 1,360 kg or more
    brakeThresholdLb: 2998,
    noBrakeGvwrLb: 2990,         // label cap we use for no-brake builds
    singleBrakedGvwrLb: 3500,    // single axle with the brake upgrade
    tandemGvwrLb: 7000,
    minPayloadLb: 500,           // options that would leave less payload than this are disabled
    singleAxleMaxLengthFt: 14,
    tandemMinLengthFt: 12
  },

  geometry: { vnoseFt: 2, deckAndRoofM: 0.62, fenderAllowanceM: 0.40, tongueM: 1.2 },

  uses: [
    { id: "jobsite",  label: "Contractor / jobsite", note: "Shelving, plan desk, side door", suggest: { width: 6, length: 12 } },
    { id: "snow",     label: "Snowmobile", note: "Ramp door, 7' wide for full-size sleds", suggest: { width: 7, length: 12 } },
    { id: "atv",      label: "ATV / UTV", note: "Ramp door, wider and longer box", suggest: { width: 7, length: 16 } },
    { id: "car",      label: "Car hauler", note: "For full-size cars see the Roadhaul 8520 (8.5' x 20'), quoted separately", suggest: { width: 7, length: 16 } },
    { id: "workshop", label: "Mobile workshop", note: "Desk, shelving, lighting", suggest: { width: 7, length: 14 } },
    { id: "overland", label: "Camping / overland", note: "Roof vent, cooler bench, heater", suggest: { width: 6, length: 10 } },
    { id: "other",    label: "Something else", note: "Tell us in the notes", suggest: { width: 6, length: 12 } }
  ],
  widths: [5, 6, 7],                 // ft (box). 7' box = about 2.53 m outside, under the 2.6 m limit
  lengths: [8, 10, 12, 14, 16],      // ft (box, excluding the V-nose)

  axles: {
    single: { label: "Single axle", note: "3,500 lb torsion axle, label capped at 2,990 lb so no brakes are needed", price: 0, lb: 0 },
    tandem: { label: "Tandem axle", note: "2 x 3,500 lb axles, 7,000 lb GVWR; electric brakes + breakaway kit included", price: 1800, lb: 350 }
  },
  materials: {
    steel:    { label: "Steel frame (Basic)", tier: "basic", base: 790, perSqFt: 7.1, note: "Tough and affordable" },
    aluminum: { label: "Aluminum-heavy (Pro)", tier: "pro", base: 470, perSqFt: 4.9, note: "About 30% lighter frame, more payload" }
  },
  fronts: {
    vnose: { label: "24\" V-nose", price: 0, lb: 0, note: "Better towing, 2 ft more floor" },
    flat:  { label: "Flat front", price: -400, lb: -40, note: "Saves cost and weight, less storage" }
  },
  heights: [
    { id: "5",   label: "5'0\" inside", m: 1.52, price: -200, lb: -40 },
    { id: "6",   label: "6'0\" inside", m: 1.83, price: 0,    lb: 0 },
    { id: "6.5", label: "6'6\" inside", m: 1.98, price: 200,  lb: 40 },
    { id: "7",   label: "7'0\" inside", m: 2.13, price: 400,  lb: 80 }
  ],
  rearDoors: {
    ramp: { label: "Rear ramp door", price: 0, lb: 0, note: "Spring-assisted ramp" },
    barn: { label: "Barn doors", price: 150, lb: -20, note: "Cam-bar locks, no ramp" }
  },
  exterior: {
    colour: { label: "White aluminum skin", note: "Our only colour for now: it's what we build in the shop" },
    stoneGuard: { label: "Diamond-plate stone guard", price: 150, lb: 15, default: true },
    trim: { label: "Aluminum trim package", price: 120, lb: 5, default: true },
    wrap: { label: "Wrap graphics (full custom wrap)", price: 4000, lb: 5, note: "Your branding or a Haul 'Er Back design. Aluminum-heavy + wrap = our Wrap tier" }
  },
  sideDoors: {
    none: { label: "No side door", price: -350, lb: -35 },
    d32:  { label: "32\" side door", price: 0, lb: 0 },
    d36:  { label: "36\" side door", price: 150, lb: 10 }
  },
  interior: [
    { id: "shelving", label: "Aluminum T-slot shelving", price: 600, lb: 55, default: true, note: "Adjustable 12–16\" shelves, road-side wall" },
    { id: "desk",     label: "Fold-down plan desk with LED light", price: 450, lb: 35, default: true, note: "36\" x 24\" top, plan rack" },
    { id: "cooler",   label: "120 qt cooler bench seat", price: 450, lb: 55, default: true, note: "Insulated, padded lid, floor drain (a full cooler adds 100–150 lb of payload)" }
  ],
  options: [
    { id: "drings",  label: "D-ring tie-down set (4)", price: 160, lb: 10 },
    { id: "led",     label: "LED lighting upgrade", price: 250, lb: 5, note: "Extra ceiling lights and a rear load light" },
    { id: "vent",    label: "Roof vent", price: 180, lb: 8, heightM: 0.05 },
    { id: "ladder",  label: "Ladder rack", price: 650, lb: 60, heightM: 0.23 },
    { id: "spare",   label: "Spare tire and mount", price: 275, lb: 45 },
    { id: "wheels",  label: "Aluminum wheels", price: 600, lb: -15 },
    { id: "brakes",  label: "Electric brake upgrade (single axle)", price: 650, lb: 25, singleOnly: true, note: "Brakes + breakaway kit; raises GVWR to 3,500 lb" },
    { id: "winch",   label: "Winch plate", price: 220, lb: 25 }
  ],
  heaters: [
    { id: "none",     label: "No heater", price: 0, lb: 0, fuel: "" },
    { id: "electric", label: "Electric heater", price: 350, lb: 15, fuel: "Power: 120V shore power or a generator. No flame, no fuel." },
    { id: "diesel",   label: "Diesel air heater", price: 1600, lb: 25, fuel: "Fuel: small diesel tank; 12V battery for the fan. Exhaust vented outside." },
    { id: "propane",  label: "Propane heater (vented catalytic or forced-air)", price: 900, lb: 40, fuel: "Fuel: 20 lb propane tank on an exterior mount. About 30–50 lb with bracket and tank.",
      warning: "Propane: must be a TSSA/CSA-compliant install, including an exterior tank mount, venting, and a CO and propane detector.",
      autoAdd: { id: "detectors", label: "CO + propane detectors (auto-added)", price: 120, lb: 2 } }
  ],
  financing: {
    message: "Financing options for personal buyers and contractor lease-to-own are being set up. Ask us about financing when you request a quote."
    /* Lenders: add once agreements are signed, then show them on /financing.
    lenders: [
      // { name: "LENDER NAME", type: "personal", url: "https://...", notes: "rates/terms TBD" },
      // { name: "LENDER NAME", type: "business_lease", url: "https://...", notes: "lease-to-own terms TBD" }
    ]
    */
  },
  timelines: ["ASAP", "1–3 months", "3–6 months", "6+ months", "Just looking"],
  upload: { maxBytes: 5 * 1024 * 1024, accept: "image/jpeg,image/png,image/webp,image/heic,application/pdf" }
};
