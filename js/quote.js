/* Millennium Insurance — auto quote flow */
(function () {
  const FORMSPREE_URL = "https://formspree.io/f/xykqaeor";
  const DRAFT_KEY = "mi-quote-draft-v2";
  const NAME_KEY = "mi-quote-name";
  const MAX_DRIVERS = 6;

  const MAKES = [
    ["BMW", "bmw"],
    ["Chevrolet", "chevrolet"],
    ["Chrysler", "chrysler"],
    ["Dodge", "dodge"],
    ["Ford", "ford"],
    ["GMC", "gmc"],
    ["Honda", "honda"],
    ["Hyundai", "hyundai"],
    ["Jeep", "jeep"],
    ["Kia", "kia"],
    ["Nissan", "nissan"],
    ["Toyota", "toyota"],
    ["Acura", "acura"],
    ["Audi", "audi"],
    ["Buick", "buick"],
    ["Cadillac", "cadillac"],
    ["FIAT", "fiat"],
    ["INFINITI", "infiniti"],
    ["Jaguar", "jaguar"],
    ["Land Rover", "land-rover"],
    ["Lexus", "lexus"],
    ["Lincoln", "lincoln"],
    ["Mazda", "mazda"],
    ["Mercedes-Benz", "mercedes-benz"],
    ["MINI", "mini"],
    ["Mitsubishi", "mitsubishi"],
    ["Porsche", "porsche"],
    ["Ram", "ram"],
    ["Scion", "scion"],
    ["Smart", "smart"],
    ["Subaru", "subaru"],
    ["Tesla", "tesla"],
    ["Volkswagen", "volkswagen"],
    ["Volvo", "volvo"],
  ];

  const MODELS = {
    BMW: ["2 Series", "3 Series", "4 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X7", "i4"],
    Chevrolet: ["Blazer", "Camaro", "Colorado", "Cruze", "Equinox", "Impala", "Malibu", "Silverado", "Suburban", "Tahoe", "Traverse", "Trax"],
    Chrysler: ["300", "Pacifica", "Town & Country", "Voyager"],
    Dodge: ["Challenger", "Charger", "Durango", "Grand Caravan", "Hornet", "Journey"],
    Ford: ["Bronco", "Edge", "Escape", "Expedition", "Explorer", "F-150", "Focus", "Fusion", "Mustang", "Ranger", "Transit"],
    GMC: ["Acadia", "Canyon", "Sierra", "Terrain", "Yukon"],
    Honda: ["Accord", "Civic", "CR-V", "Fit", "HR-V", "Odyssey", "Passport", "Pilot", "Ridgeline"],
    Hyundai: ["Accent", "Elantra", "Ioniq", "Kona", "Palisade", "Santa Fe", "Sonata", "Tucson", "Venue"],
    Jeep: ["Cherokee", "Compass", "Gladiator", "Grand Cherokee", "Renegade", "Wagoneer", "Wrangler"],
    Kia: ["Carnival", "Forte", "K5", "Optima", "Rio", "Seltos", "Sorento", "Soul", "Sportage", "Telluride"],
    Nissan: ["Altima", "Armada", "Frontier", "Kicks", "Maxima", "Murano", "Pathfinder", "Rogue", "Sentra", "Titan", "Versa"],
    Toyota: ["4Runner", "Avalon", "Camry", "Corolla", "Highlander", "Prius", "RAV4", "Sequoia", "Sienna", "Tacoma", "Tundra"],
    Acura: ["ILX", "Integra", "MDX", "RDX", "TLX", "TSX"],
    Audi: ["A3", "A4", "A5", "A6", "Q3", "Q5", "Q7", "Q8"],
    Buick: ["Enclave", "Encore", "Envision", "LaCrosse", "Regal"],
    Cadillac: ["CT5", "CTS", "Escalade", "SRX", "XT4", "XT5", "XT6"],
    FIAT: ["500", "500L", "500X"],
    INFINITI: ["G37", "Q50", "QX50", "QX60", "QX80"],
    Jaguar: ["E-PACE", "F-PACE", "F-TYPE", "XE", "XF"],
    "Land Rover": ["Defender", "Discovery", "Discovery Sport", "Range Rover", "Range Rover Evoque", "Range Rover Sport"],
    Lexus: ["ES", "GX", "IS", "LS", "LX", "NX", "RX", "UX"],
    Lincoln: ["Aviator", "Corsair", "MKX", "MKZ", "Nautilus", "Navigator"],
    Mazda: ["CX-30", "CX-5", "CX-50", "CX-9", "Mazda3", "Mazda6", "MX-5 Miata"],
    "Mercedes-Benz": ["A-Class", "C-Class", "E-Class", "GLA", "GLB", "GLC", "GLE", "S-Class"],
    MINI: ["Clubman", "Cooper", "Countryman"],
    Mitsubishi: ["Eclipse Cross", "Lancer", "Mirage", "Outlander", "Outlander Sport"],
    Porsche: ["911", "Cayenne", "Macan", "Panamera", "Taycan"],
    Ram: ["1500", "2500", "3500", "ProMaster"],
    Scion: ["FR-S", "iA", "iM", "tC", "xB"],
    Smart: ["Fortwo"],
    Subaru: ["Ascent", "Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "WRX"],
    Tesla: ["Cybertruck", "Model 3", "Model S", "Model X", "Model Y"],
    Volkswagen: ["Atlas", "Beetle", "Golf", "ID.4", "Jetta", "Passat", "Taos", "Tiguan"],
    Volvo: ["S60", "S90", "V60", "XC40", "XC60", "XC90"],
  };

  const STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
    "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
  ];

  const YEARS = [];
  for (let year = 2027; year >= 1995; year -= 1) YEARS.push(String(year));

  const form = document.getElementById("quoteFlow");
  if (!form) return;

  const stepHost = document.getElementById("stepHost");
  const progressLabel = document.getElementById("progressLabel");
  const progressBar = document.getElementById("progressBar");
  const progressFill = document.getElementById("progressFill");
  const nextBtn = document.getElementById("qNext");
  const submitBtn = document.getElementById("qSubmit");
  const spinner = document.getElementById("qSpinner");
  const submitLabel = submitBtn.querySelector(".btn-label");
  const errorEl = document.getElementById("qError");
  const smsConsent = document.getElementById("smsConsent");

  const params = new URLSearchParams(location.search);
  const paramZip = (params.get("zip") || "").replace(/\D/g, "").slice(0, 5);
  const paramSource = (params.get("source") || "").slice(0, 60);

  function blankVehicle() {
    return { year: "", make: "", makeOther: "", model: "", modelOther: "", ownership: "" };
  }
  function blankDriver() {
    return { first: "", last: "", mm: "", dd: "", yyyy: "", email: "", phone: "" };
  }
  function freshData(zip) {
    return {
      zip: zip || "",
      currently_insured: "",
      purchase_timing: "",
      homeowner: "",
      vehicle_count: 0,
      vehicles: [],
      dob_mm: "",
      dob_dd: "",
      dob_yyyy: "",
      street: "",
      city: "",
      state: "Tennessee",
      garaging_zip: zip || "",
      drivers: [blankDriver()],
      more_drivers: "",
    };
  }

  function readDraft() {
    try {
      const parsed = JSON.parse(sessionStorage.getItem(DRAFT_KEY) || "null");
      if (!parsed || parsed.v !== 2 || !parsed.data) return null;
      return parsed;
    } catch (err) {
      return null;
    }
  }

  let draft = readDraft();
  if (draft && params.has("source") && (draft.source || "") !== paramSource) draft = null;
  if (draft && params.has("zip") && (draft.data.zip || "") !== paramZip) draft = null;

  let source = params.has("source") ? paramSource : draft ? draft.source || "" : "";
  let data = draft ? draft.data : freshData(paramZip);
  if (!Array.isArray(data.vehicles)) data.vehicles = [];
  if (!Array.isArray(data.drivers) || !data.drivers.length) data.drivers = [blankDriver()];
  if (!data.garaging_zip) data.garaging_zip = data.zip || "";
  if (!data.state) data.state = "Tennessee";

  let stepIndex = draft && Number.isInteger(draft.step) ? draft.step : paramZip.length === 5 ? 1 : 0;
  let errorKey = "";
  let submitting = false;
  let focusOnRender = false;
  let stepDirection = 0;
  let painted = false;
  let animating = false;
  let renderToken = 0;

  function steps() {
    const count = data.vehicle_count || 1;
    const list = [
      { id: "zip" },
      { id: "insured" },
      { id: "timing" },
      { id: "homeowner" },
      { id: "count" },
    ];
    for (let i = 0; i < count; i += 1) {
      list.push({ id: "year", car: i });
      list.push({ id: "make", car: i });
      list.push({ id: "model", car: i });
      list.push({ id: "ownership", car: i });
    }
    list.push({ id: "dob" }, { id: "address" }, { id: "driver" });
    return list;
  }

  function current() {
    const list = steps();
    if (stepIndex < 0) stepIndex = 0;
    if (stepIndex > list.length - 1) stepIndex = list.length - 1;
    return list[stepIndex];
  }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[ch]));
  }

  function digits(value) {
    return String(value || "").replace(/\D/g, "");
  }

  function formatPhone(value) {
    const d = digits(value).slice(0, 10);
    if (d.length < 4) return d;
    if (d.length < 7) return "(" + d.slice(0, 3) + ") " + d.slice(3);
    return "(" + d.slice(0, 3) + ") " + d.slice(3, 6) + "-" + d.slice(6);
  }

  function validDob(mm, dd, yyyy) {
    if (!/^\d{1,2}$/.test(mm || "") || !/^\d{1,2}$/.test(dd || "") || !/^\d{4}$/.test(yyyy || "")) return false;
    const m = Number(mm);
    const d = Number(dd);
    const y = Number(yyyy);
    if (y < 1900 || m < 1 || m > 12 || d < 1 || d > 31) return false;
    const date = new Date(y, m - 1, d);
    if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date <= today;
  }

  function fmtDob(mm, dd, yyyy) {
    return String(mm).padStart(2, "0") + "/" + String(dd).padStart(2, "0") + "/" + yyyy;
  }

  function vehicleAt(index) {
    while (data.vehicles.length <= index) data.vehicles.push(blankVehicle());
    return data.vehicles[index];
  }

  function makeLabel(vehicle) {
    if (!vehicle || !vehicle.make) return "";
    if (vehicle.make === "Other") return (vehicle.makeOther || "").trim();
    return vehicle.make;
  }

  function modelLabel(vehicle) {
    if (!vehicle || !vehicle.model) return "";
    if (vehicle.model === "Other") return (vehicle.modelOther || "").trim();
    return vehicle.model;
  }

  function modelsFor(vehicle) {
    if (!vehicle || !vehicle.make || vehicle.make === "Other") return [];
    return MODELS[vehicle.make] ? MODELS[vehicle.make].slice().sort((a, b) => a.localeCompare(b)) : [];
  }

  function save() {
    try {
      sessionStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({ v: 2, source: source, step: stepIndex, data: data })
      );
    } catch (err) {
      /* storage unavailable */
    }
  }

  function clearError() {
    errorKey = "";
    errorEl.hidden = true;
    errorEl.innerHTML = "";
  }

  function showError(key, field) {
    errorKey = key;
    errorEl.innerHTML = t(key);
    errorEl.hidden = false;
    if (field) {
      field.setAttribute("aria-invalid", "true");
      field.focus();
    }
  }

  function updateChrome() {
    const list = steps();
    const step = list[stepIndex];
    const currentNum = stepIndex + 1;
    const total = list.length;
    progressLabel.textContent = t("flow.progress").replace("{current}", currentNum).replace("{total}", total);
    progressBar.setAttribute("aria-valuenow", String(currentNum));
    progressBar.setAttribute("aria-valuemax", String(total));
    progressFill.style.width = (currentNum / total) * 100 + "%";
    const last = step.id === "driver";
    nextBtn.hidden = last;
    submitBtn.hidden = !last;
    smsConsent.hidden = !last;
    if (form.dataset.sending === "1") submitLabel.textContent = t("flow.sending");
  }

  function searchIcon() {
    return '<svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15.5 15.5 L20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  }

  function searchBox(placeholderKey) {
    const label = t(placeholderKey);
    return (
      '<label class="search-pill">' +
      '<span class="sr-only">' + esc(label) + "</span>" +
      searchIcon() +
      '<input type="search" data-search placeholder="' + esc(label) + '" autocomplete="off" />' +
      "</label>"
    );
  }

  function choiceButton(value, labelHtml, selected) {
    return (
      '<label class="bubble' + (selected ? " is-selected" : "") + '" data-choice="' + esc(value) + '">' +
      '<input type="radio" name="choice" value="' + esc(value) + '"' + (selected ? " checked" : "") + " />" +
      "<span>" + labelHtml + "</span></label>"
    );
  }

  function contextHtml(step) {
    if (step.car == null) return "";
    const vehicle = vehicleAt(step.car);
    const bits = [];
    if (vehicle.year && step.id !== "year") bits.push(vehicle.year);
    const make = makeLabel(vehicle);
    if (make && step.id !== "year" && step.id !== "make") bits.push(make);
    else if (make && step.id === "model") bits.push(make);
    const model = modelLabel(vehicle);
    if (model && step.id === "ownership") bits.push(model);
    const summary = bits.join(" ");
    const carOf = data.vehicle_count > 1
      ? t("aq.carOf").replace("{n}", step.car + 1).replace("{total}", data.vehicle_count)
      : "";
    if (!summary && !carOf) return "";
    const slug = MAKES.find((item) => item[0] === vehicle.make);
    const logo = slug && step.id !== "year" && step.id !== "make"
      ? '<img src="images/makes/' + slug[1] + '.png" alt="" width="22" height="22" />'
      : "";
    const text = [carOf, summary].filter(Boolean).join(" · ");
    return '<p class="q-context">' + logo + "<span>" + esc(text) + "</span></p>";
  }

  function question(text) {
    return '<h2 class="q-question" id="qHeading" tabindex="-1">' + esc(text) + "</h2>";
  }

  function todayISO() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return now.getFullYear() + "-" + month + "-" + day;
  }

  function partsToISO(mm, dd, yyyy) {
    if (!/^\d{4}$/.test(yyyy || "") || !/^\d{1,2}$/.test(mm || "") || !/^\d{1,2}$/.test(dd || "")) return "";
    return yyyy + "-" + String(mm).padStart(2, "0") + "-" + String(dd).padStart(2, "0");
  }

  function dobFields(prefix, mm, dd, yyyy) {
    return (
      "<label><span>" + esc(t("drv.dob")) + "</span>" +
      '<input type="date" data-prefix="' + prefix + '" autocomplete="bday" min="1900-01-01" max="' + todayISO() + '" value="' + esc(partsToISO(mm, dd, yyyy)) + '" /></label>'
    );
  }

  function renderStep() {
    const step = current();
    let html = contextHtml(step);
    if (step.id === "zip") {
      html += question(t("aq.zipQ"));
      html +=
        '<label><span>' + esc(t("form.zip")) + "</span>" +
        '<input type="text" name="zip" inputmode="numeric" maxlength="5" autocomplete="postal-code" value="' + esc(data.zip) + '" /></label>';
    } else if (step.id === "insured") {
      html += question(t("aq.insuredQ"));
      html += '<div class="bubbles bubbles-choice" role="radiogroup" aria-labelledby="qHeading">';
      html += choiceButton("Yes", esc(t("aq.yes")), data.currently_insured === "Yes");
      html += choiceButton("No", esc(t("aq.no")), data.currently_insured === "No");
      html += "</div>";
    } else if (step.id === "timing") {
      html += question(t("aq.whenQ"));
      html += '<div class="bubbles bubbles-choice" role="radiogroup" aria-labelledby="qHeading">';
      [
        ["As soon as possible", "aq.asap"],
        ["Within the next month", "aq.month"],
        ["More than a month from now", "aq.later"],
      ].forEach((item) => {
        html += choiceButton(item[0], esc(t(item[1])), data.purchase_timing === item[0]);
      });
      html += "</div>";
    } else if (step.id === "homeowner") {
      html += question(t("aq.homeQ"));
      html += '<div class="bubbles bubbles-choice" role="radiogroup" aria-labelledby="qHeading">';
      html += choiceButton("Yes", esc(t("aq.yes")), data.homeowner === "Yes");
      html += choiceButton("No", esc(t("aq.no")), data.homeowner === "No");
      html += "</div>";
    } else if (step.id === "count") {
      html += question(t("aq.countQ"));
      html += '<p class="q-help">' + esc(t("aq.countNote")) + "</p>";
      html += '<div class="bubbles bubbles-choice" role="radiogroup" aria-labelledby="qHeading">';
      for (let n = 1; n <= 5; n += 1) {
        html += choiceButton(String(n), esc(t("aq.car" + n)), String(data.vehicle_count) === String(n));
      }
      html += "</div>";
    } else if (step.id === "year") {
      const vehicle = vehicleAt(step.car);
      html += question(t("aq.yearQ"));
      html += searchBox("aq.searchYear");
      html += '<div class="bubbles bubbles-years" role="radiogroup" aria-labelledby="qHeading">';
      YEARS.forEach((year) => {
        html += choiceButton(year, esc(year), vehicle.year === year);
      });
      html += "</div>";
      html += '<p class="q-empty" data-empty hidden></p>';
    } else if (step.id === "make") {
      const vehicle = vehicleAt(step.car);
      html += question(t("aq.makeQ"));
      html += searchBox("aq.searchMake");
      html += '<div class="bubbles bubbles-logos" role="radiogroup" aria-labelledby="qHeading">';
      MAKES.forEach((item) => {
        const selected = vehicle.make === item[0];
        html +=
          '<label class="bubble bubble-logo' + (selected ? " is-selected" : "") + '" data-choice="' + esc(item[0]) + '">' +
          '<input type="radio" name="choice" value="' + esc(item[0]) + '"' + (selected ? " checked" : "") + " />" +
          '<img src="images/makes/' + item[1] + '.png" alt="" width="28" height="28" />' +
          "<span>" + esc(item[0]) + "</span></label>";
      });
      html += choiceButton("Other", esc(t("aq.other")), vehicle.make === "Other");
      html += "</div>";
      html += '<p class="q-empty" data-empty hidden></p>';
      if (vehicle.make === "Other") {
        html +=
          "<label><span>" + esc(t("aq.otherMake")) + "</span>" +
          '<input type="text" data-other-text maxlength="40" autocomplete="off" value="' + esc(vehicle.makeOther) + '" /></label>';
      }
    } else if (step.id === "model") {
      const vehicle = vehicleAt(step.car);
      const models = modelsFor(vehicle);
      html += question(t("aq.modelQ"));
      if (!models.length) {
        html +=
          "<label><span>" + esc(t("aq.otherModel")) + "</span>" +
          '<input type="text" data-model-text maxlength="60" autocomplete="off" value="' + esc(vehicle.model === "Other" ? vehicle.modelOther : vehicle.model) + '" /></label>';
      } else {
        html += searchBox("aq.searchModel");
        html += '<div class="bubbles bubbles-models" role="radiogroup" aria-labelledby="qHeading">';
        models.forEach((model) => {
          html += choiceButton(model, esc(model), vehicle.model === model);
        });
        html += choiceButton("Other", esc(t("aq.other")), vehicle.model === "Other");
        html += "</div>";
        html += '<p class="q-empty" data-empty hidden></p>';
        if (vehicle.model === "Other") {
          html +=
            "<label><span>" + esc(t("aq.otherModel")) + "</span>" +
            '<input type="text" data-other-text maxlength="60" autocomplete="off" value="' + esc(vehicle.modelOther) + '" /></label>';
        }
      }
    } else if (step.id === "ownership") {
      const vehicle = vehicleAt(step.car);
      html += question(t("aq.ownQ"));
      html += '<div class="bubbles bubbles-choice" role="radiogroup" aria-labelledby="qHeading">';
      [["Own", "aq.own"], ["Finance", "aq.finance"], ["Lease", "aq.lease"]].forEach((item) => {
        html += choiceButton(item[0], esc(t(item[1])), vehicle.ownership === item[0]);
      });
      html += "</div>";
    } else if (step.id === "dob") {
      html += question(t("aq.dobQ"));
      html += dobFields("applicant", data.dob_mm, data.dob_dd, data.dob_yyyy);
    } else if (step.id === "address") {
      html += question(t("aq.garageQ"));
      html +=
        "<label><span>" + esc(t("addr.street")) + "</span>" +
        '<input type="text" data-address="street" maxlength="120" autocomplete="street-address" value="' + esc(data.street) + '" /></label>';
      html += '<div class="form-row">';
      html +=
        "<label><span>" + esc(t("addr.city")) + "</span>" +
        '<input type="text" data-address="city" maxlength="60" autocomplete="address-level2" value="' + esc(data.city) + '" /></label>';
      html += "<label><span>" + esc(t("addr.state")) + '</span><select data-address="state" autocomplete="address-level1">';
      STATES.forEach((state) => {
        html += '<option value="' + esc(state) + '"' + (data.state === state ? " selected" : "") + ">" + esc(state) + "</option>";
      });
      html += "</select></label></div>";
      html +=
        "<label><span>" + esc(t("form.zip")) + "</span>" +
        '<input type="text" data-address="garaging_zip" inputmode="numeric" maxlength="5" autocomplete="postal-code" value="' + esc(data.garaging_zip) + '" /></label>';
    } else if (step.id === "driver") {
      if (!data.drivers[0].mm && !data.drivers[0].dd && !data.drivers[0].yyyy && data.dob_yyyy) {
        data.drivers[0].mm = data.dob_mm;
        data.drivers[0].dd = data.dob_dd;
        data.drivers[0].yyyy = data.dob_yyyy;
      }
      html += question(t("aq.driverQ"));
      data.drivers.forEach((driver, index) => {
        html += '<div class="driver-card">';
        if (index > 0) {
          html += '<div class="vehicle-head"><h3>' + esc(t("aq.driverMore")) + "</h3>";
          html += '<button class="link-btn" type="button" data-remove-driver="' + index + '">' + esc(t("aq.removeDriver")) + "</button></div>";
        }
        html +=
          "<label><span>" + esc(index === 0 ? t("aq.first") : t("form.first")) + "</span>" +
          '<input type="text" data-driver="' + index + '" data-field="first" maxlength="60" autocomplete="given-name" value="' + esc(driver.first) + '" /></label>';
        html +=
          "<label><span>" + esc(index === 0 ? t("aq.last") : t("form.last")) + "</span>" +
          '<input type="text" data-driver="' + index + '" data-field="last" maxlength="60" autocomplete="family-name" value="' + esc(driver.last) + '" /></label>';
        html += dobFields("driver-" + index, driver.mm, driver.dd, driver.yyyy);
        if (index === 0) {
          html +=
            "<label><span>" + esc(t("aq.email")) + "</span>" +
            '<input type="email" data-driver="0" data-field="email" maxlength="120" autocomplete="email" inputmode="email" value="' + esc(driver.email) + '" /></label>';
          html +=
            "<label><span>" + esc(t("aq.phone")) + "</span>" +
            '<input type="tel" data-driver="0" data-field="phone" maxlength="14" autocomplete="tel" inputmode="tel" value="' + esc(driver.phone) + '" /></label>';
        }
        html += "</div>";
      });
      html += '<fieldset class="more-drivers"><legend>' + esc(t("aq.moreQ")) + "</legend>";
      html += '<div class="bubbles bubbles-choice" role="radiogroup">';
      html += choiceButton("Yes", esc(t("aq.yes")), false);
      html += choiceButton("No", esc(t("aq.no")), data.more_drivers === "No");
      html += "</div></fieldset>";
    }
    const motion = stepDirection;
    const token = ++renderToken;
    stepDirection = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const commit = () => {
      stepHost.innerHTML = html;
      bindStep(step);
      updateChrome();
      if (focusOnRender) {
        const heading = stepHost.querySelector("h2");
        if (heading) heading.focus();
        progressLabel.scrollIntoView({ block: "start" });
        focusOnRender = false;
      }
    };

    if (!painted || reduceMotion) {
      commit();
      painted = true;
      return;
    }

    if (!motion) {
      commit();
      stepHost.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220, easing: "ease" });
      return;
    }

    animating = true;
    stepHost.style.pointerEvents = "none";
    const outX = motion > 0 ? "-18px" : "18px";
    const inX = motion > 0 ? "28px" : "-28px";
    let arrived = false;
    const arrive = () => {
      if (arrived || token !== renderToken) return;
      arrived = true;
      commit();
      stepHost.animate(
        [
          { opacity: 0, transform: "translateX(" + inX + ")" },
          { opacity: 1, transform: "translateX(0)" },
        ],
        { duration: 280, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" }
      );
      stepHost.style.pointerEvents = "";
      animating = false;
    };
    const leave = stepHost.animate(
      [
        { opacity: 1, transform: "translateX(0)" },
        { opacity: 0, transform: "translateX(" + outX + ")" },
      ],
      { duration: 150, easing: "ease-in", fill: "forwards" }
    );
    leave.onfinish = arrive;
    leave.oncancel = arrive;
  }

  function bindStep(step) {
    const search = stepHost.querySelector("[data-search]");
    if (search) {
      search.addEventListener("input", () => filterChoices(search.value));
      search.addEventListener("keydown", (event) => {
        if (event.key === "Enter") event.preventDefault();
      });
    }

    stepHost.querySelectorAll('input[name="choice"]').forEach((input) => {
      input.addEventListener("change", () => {
        if (!input.checked) return;
        applyChoice(step, input.value);
      });
    });

    const zipInput = stepHost.querySelector('input[name="zip"]');
    if (zipInput) {
      zipInput.addEventListener("input", () => {
        const next = digits(zipInput.value).slice(0, 5);
        if (zipInput.value !== next) zipInput.value = next;
        const previous = data.zip;
        data.zip = next;
        if (!data.garaging_zip || data.garaging_zip === previous) data.garaging_zip = next;
        zipInput.removeAttribute("aria-invalid");
        clearError();
        save();
      });
    }

    const other = stepHost.querySelector("[data-other-text]");
    if (other) {
      other.addEventListener("input", () => {
        const vehicle = vehicleAt(step.car);
        if (step.id === "make") vehicle.makeOther = other.value;
        if (step.id === "model") vehicle.modelOther = other.value;
        other.removeAttribute("aria-invalid");
        clearError();
        save();
      });
    }

    const modelText = stepHost.querySelector("[data-model-text]");
    if (modelText) {
      modelText.addEventListener("input", () => {
        const vehicle = vehicleAt(step.car);
        vehicle.model = modelText.value;
        vehicle.modelOther = "";
        modelText.removeAttribute("aria-invalid");
        clearError();
        save();
      });
    }

    stepHost.querySelectorAll('input[type="date"][data-prefix]').forEach((input) => {
      const saveDate = () => {
        const parts = (input.value || "").split("-");
        const yyyy = parts[0] || "";
        const mm = parts[1] || "";
        const dd = parts[2] || "";
        if (input.dataset.prefix === "applicant") {
          data.dob_yyyy = yyyy;
          data.dob_mm = mm;
          data.dob_dd = dd;
        } else {
          const driver = data.drivers[Number(input.dataset.prefix.replace("driver-", ""))];
          if (driver) {
            driver.yyyy = yyyy;
            driver.mm = mm;
            driver.dd = dd;
          }
        }
        input.removeAttribute("aria-invalid");
        clearError();
        save();
      };
      input.addEventListener("input", saveDate);
      input.addEventListener("change", saveDate);
    });

    stepHost.querySelectorAll("[data-address]").forEach((input) => {
      input.addEventListener("input", () => {
        const key = input.dataset.address;
        if (key === "garaging_zip") input.value = digits(input.value).slice(0, 5);
        data[key] = input.value;
        input.removeAttribute("aria-invalid");
        clearError();
        save();
      });
      input.addEventListener("change", () => {
        data[input.dataset.address] = input.value;
        save();
      });
    });

    stepHost.querySelectorAll("[data-driver]").forEach((input) => {
      input.addEventListener("input", () => {
        const driver = data.drivers[Number(input.dataset.driver)];
        if (input.dataset.field === "phone") {
          const next = formatPhone(input.value);
          if (input.value !== next) input.value = next;
          driver.phone = next;
        } else {
          driver[input.dataset.field] = input.value;
        }
        input.removeAttribute("aria-invalid");
        clearError();
        save();
      });
    });

    stepHost.querySelectorAll("[data-remove-driver]").forEach((button) => {
      button.addEventListener("click", () => {
        data.drivers.splice(Number(button.dataset.removeDriver), 1);
        data.more_drivers = "";
        save();
        renderStep();
      });
    });
  }

  function filterChoices(raw) {
    const query = raw.trim().toLowerCase();
    const items = [...stepHost.querySelectorAll("[data-choice]")];
    let matches = 0;
    items.forEach((el) => {
      if (el.dataset.choice === "Other") return;
      const match = !query || el.dataset.choice.toLowerCase().includes(query);
      el.hidden = !match;
      if (match) matches += 1;
    });
    items.forEach((el) => {
      if (el.dataset.choice !== "Other") return;
      const otherHit = !query || "other".includes(query) || query.includes("other");
      el.hidden = Boolean(query) && matches > 0 && !otherHit;
    });
    const empty = stepHost.querySelector("[data-empty]");
    if (empty) {
      empty.hidden = !query || matches > 0;
      empty.textContent = t("aq.noMatch");
    }
  }

  function applyChoice(step, value) {
    if (animating) return;
    clearError();
    if (step.id === "insured") data.currently_insured = value;
    else if (step.id === "timing") data.purchase_timing = value;
    else if (step.id === "homeowner") data.homeowner = value;
    else if (step.id === "count") {
      const count = Number(value);
      data.vehicle_count = count;
      data.vehicles = data.vehicles.slice(0, count);
      while (data.vehicles.length < count) data.vehicles.push(blankVehicle());
    } else if (step.id === "year") {
      vehicleAt(step.car).year = value;
    } else if (step.id === "make") {
      const vehicle = vehicleAt(step.car);
      if (vehicle.make !== value) {
        vehicle.model = "";
        vehicle.modelOther = "";
      }
      vehicle.make = value;
      if (value === "Other") {
        save();
        renderStep();
        const field = stepHost.querySelector("[data-other-text]");
        if (field) field.focus();
        return;
      }
      vehicle.makeOther = "";
    } else if (step.id === "model") {
      const vehicle = vehicleAt(step.car);
      vehicle.model = value;
      if (value === "Other") {
        save();
        renderStep();
        const field = stepHost.querySelector("[data-other-text]");
        if (field) field.focus();
        return;
      }
      vehicle.modelOther = "";
    } else if (step.id === "ownership") {
      vehicleAt(step.car).ownership = value;
    } else if (step.id === "driver") {
      if (value === "Yes") {
        const last = data.drivers[data.drivers.length - 1];
        const problem = driverProblem(last, data.drivers.length - 1);
        if (problem) {
          stepHost.querySelectorAll('input[name="choice"]').forEach((el) => {
            el.checked = false;
          });
          showError(problem.key, problem.field);
          save();
          return;
        }
        if (data.drivers.length >= MAX_DRIVERS) {
          stepHost.querySelectorAll('input[name="choice"]').forEach((el) => {
            el.checked = false;
          });
          showError("aq.errMax");
          save();
          return;
        }
        data.drivers.push(blankDriver());
        data.more_drivers = "";
        save();
        renderStep();
        const added = stepHost.querySelector('[data-driver="' + (data.drivers.length - 1) + '"]');
        if (added) added.focus();
        return;
      }
      const last = data.drivers[data.drivers.length - 1];
      const empty = !last.first && !last.last && !last.mm && !last.dd && !last.yyyy && !last.email && !last.phone;
      if (data.drivers.length > 1 && empty) data.drivers.pop();
      data.more_drivers = "No";
      save();
      renderStep();
      return;
    }

    advanceStep();
  }

  function quoteUrl() {
    return location.pathname + location.search;
  }

  function installHistory() {
    const max = steps().length - 1;
    stepIndex = Math.max(0, Math.min(stepIndex, max));
    if (history.state && Number.isInteger(history.state.miQuote)) {
      stepIndex = Math.max(0, Math.min(history.state.miQuote, max));
      return;
    }
    const url = quoteUrl();
    history.replaceState({ miQuote: 0 }, "", url);
    for (let i = 1; i <= stepIndex; i += 1) history.pushState({ miQuote: i }, "", url);
  }

  function advanceStep() {
    focusOnRender = true;
    stepDirection = 1;
    stepIndex += 1;
    save();
    history.pushState({ miQuote: stepIndex }, "", quoteUrl());
    renderStep();
  }

  function driverProblem(driver, index) {
    const field = (name) => stepHost.querySelector('[data-driver="' + index + '"][data-field="' + name + '"]');
    const dobField = () => stepHost.querySelector('[data-prefix="driver-' + index + '"]');
    if (!driver.first.trim()) return { key: "aq.errFirst", field: field("first") };
    if (!driver.last.trim()) return { key: "aq.errLast", field: field("last") };
    if (!validDob(driver.mm, driver.dd, driver.yyyy)) return { key: "aq.errDob", field: dobField() };
    if (index === 0) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(driver.email.trim())) return { key: "aq.errEmail", field: field("email") };
      if (digits(driver.phone).length !== 10) return { key: "aq.errPhone", field: field("phone") };
    }
    return null;
  }

  function validate(step) {
    if (step.id === "zip") {
      const field = stepHost.querySelector('input[name="zip"]');
      if (digits(data.zip).length !== 5) return { key: "start.zipError", field: field };
    } else if (step.id === "insured" && !data.currently_insured) {
      return { key: "aq.errChoice", field: stepHost.querySelector('input[name="choice"]') };
    } else if (step.id === "timing" && !data.purchase_timing) {
      return { key: "aq.errChoice", field: stepHost.querySelector('input[name="choice"]') };
    } else if (step.id === "homeowner" && !data.homeowner) {
      return { key: "aq.errChoice", field: stepHost.querySelector('input[name="choice"]') };
    } else if (step.id === "count" && !(data.vehicle_count >= 1)) {
      return { key: "aq.errChoice", field: stepHost.querySelector('input[name="choice"]') };
    } else if (step.id === "year" && !vehicleAt(step.car).year) {
      return { key: "aq.errYear", field: stepHost.querySelector('input[name="choice"]') };
    } else if (step.id === "make") {
      const vehicle = vehicleAt(step.car);
      if (!vehicle.make) return { key: "aq.errMake", field: stepHost.querySelector('input[name="choice"]') };
      if (vehicle.make === "Other" && !vehicle.makeOther.trim()) {
        return { key: "aq.errMakeName", field: stepHost.querySelector("[data-other-text]") };
      }
    } else if (step.id === "model") {
      const vehicle = vehicleAt(step.car);
      const models = modelsFor(vehicle);
      if (!models.length) {
        if (!String(vehicle.model || "").trim()) {
          return { key: "aq.errModelName", field: stepHost.querySelector("[data-model-text]") };
        }
      } else if (!vehicle.model) {
        return { key: "aq.errModel", field: stepHost.querySelector('input[name="choice"]') };
      } else if (vehicle.model === "Other" && !vehicle.modelOther.trim()) {
        return { key: "aq.errModelName", field: stepHost.querySelector("[data-other-text]") };
      }
    } else if (step.id === "ownership" && !vehicleAt(step.car).ownership) {
      return { key: "aq.errChoice", field: stepHost.querySelector('input[name="choice"]') };
    } else if (step.id === "dob") {
      if (!validDob(data.dob_mm, data.dob_dd, data.dob_yyyy)) {
        return { key: "aq.errDob", field: stepHost.querySelector('[data-prefix="applicant"]') };
      }
    } else if (step.id === "address") {
      if (!data.street.trim()) return { key: "addr.errStreet", field: stepHost.querySelector('[data-address="street"]') };
      if (!data.city.trim()) return { key: "addr.errCity", field: stepHost.querySelector('[data-address="city"]') };
      if (!data.state) return { key: "addr.errState", field: stepHost.querySelector('[data-address="state"]') };
      if (digits(data.garaging_zip).length !== 5) {
        return { key: "addr.errZip", field: stepHost.querySelector('[data-address="garaging_zip"]') };
      }
    } else if (step.id === "driver") {
      for (let i = 0; i < data.drivers.length; i += 1) {
        const problem = driverProblem(data.drivers[i], i);
        if (problem) return problem;
      }
      if (data.more_drivers !== "No") {
        return { key: "aq.errMore", field: stepHost.querySelector('input[name="choice"]') };
      }
    }
    return null;
  }

  function nextStep() {
    if (animating) return;
    const problem = validate(current());
    if (problem) {
      showError(problem.key, problem.field);
      return;
    }
    clearError();
    advanceStep();
  }

  function buildPayload() {
    const first = data.drivers[0].first.trim();
    const last = data.drivers[0].last.trim();
    const fd = new FormData();
    const gotcha = form.querySelector('[name="_gotcha"]');
    fd.set("_gotcha", gotcha ? gotcha.value : "");
    fd.set("_subject", "New Auto Quote - " + first + " " + last + " - " + data.zip);
    fd.set("coverage_type", "Auto");
    if (source) fd.set("lead_source", source);
    fd.set("preferred_language", typeof lang !== "undefined" && lang === "es" ? "Español" : "English");
    fd.set("zip", data.zip);
    fd.set("currently_insured", data.currently_insured);
    fd.set("purchase_timing", data.purchase_timing);
    fd.set("homeowner", data.homeowner);
    fd.set("vehicle_count", String(data.vehicle_count));
    data.vehicles.forEach((vehicle, index) => {
      const n = index + 1;
      fd.set("vehicle_" + n + "_year", vehicle.year);
      fd.set("vehicle_" + n + "_make", vehicle.make === "Other" ? vehicle.makeOther.trim() : vehicle.make);
      fd.set("vehicle_" + n + "_model", vehicle.model === "Other" ? vehicle.modelOther.trim() : vehicle.model.trim());
      fd.set("vehicle_" + n + "_ownership", vehicle.ownership);
    });
    fd.set("date_of_birth", fmtDob(data.dob_mm, data.dob_dd, data.dob_yyyy));
    fd.set("garaging_street", data.street.trim());
    fd.set("garaging_city", data.city.trim());
    fd.set("garaging_state", data.state);
    fd.set("garaging_zip", data.garaging_zip);
    fd.set("driver_count", String(data.drivers.length));
    fd.set("first_name", first);
    fd.set("last_name", last);
    fd.set("email", data.drivers[0].email.trim());
    fd.set("phone", data.drivers[0].phone.trim());
    data.drivers.forEach((driver, index) => {
      const n = index + 1;
      fd.set("driver_" + n + "_first_name", driver.first.trim());
      fd.set("driver_" + n + "_last_name", driver.last.trim());
      fd.set("driver_" + n + "_date_of_birth", fmtDob(driver.mm, driver.dd, driver.yyyy));
    });
    return fd;
  }

  async function submitQuote() {
    const problem = validate(current());
    if (problem) {
      showError(problem.key, problem.field);
      return;
    }
    if (submitting) return;
    submitting = true;
    form.dataset.sending = "1";
    submitBtn.disabled = true;
    nextBtn.disabled = true;
    spinner.hidden = false;
    submitLabel.textContent = t("flow.sending");
    clearError();
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: buildPayload(),
      });
      if (!res.ok) throw new Error("formspree");
      try {
        sessionStorage.setItem(NAME_KEY, data.drivers[0].first.trim());
        sessionStorage.setItem(
          "mi-ads-conversion",
          JSON.stringify({ quote_type: "auto", lead_source: source || "" })
        );
        sessionStorage.removeItem(DRAFT_KEY);
      } catch (err) {
        /* storage unavailable */
      }
      window.location.href = "thank-you.html";
    } catch (err) {
      submitting = false;
      form.dataset.sending = "";
      submitBtn.disabled = false;
      nextBtn.disabled = false;
      spinner.hidden = true;
      submitLabel.textContent = t("flow.submit");
      showError("flow.error");
    }
  }

  nextBtn.addEventListener("click", nextStep);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (current().id === "driver") submitQuote();
    else nextStep();
  });
  document.addEventListener("mi-lang", () => {
    renderStep();
    if (errorKey) errorEl.innerHTML = t(errorKey);
    if (form.dataset.sending === "1") submitLabel.textContent = t("flow.sending");
  });
  window.addEventListener("popstate", (event) => {
    if (!event.state || !Number.isInteger(event.state.miQuote)) return;
    const next = event.state.miQuote;
    if (next === stepIndex) return;
    clearError();
    focusOnRender = true;
    stepDirection = next > stepIndex ? 1 : -1;
    stepIndex = next;
    save();
    renderStep();
  });

  installHistory();
  renderStep();
  save();
})();

function fireQuoteConversion() {
  let raw = "";
  try {
    raw = sessionStorage.getItem("mi-ads-conversion") || "";
    if (raw) sessionStorage.removeItem("mi-ads-conversion");
  } catch (err) {
    return;
  }
  if (!raw) return;
  let info = { quote_type: "auto", lead_source: "" };
  try {
    info = JSON.parse(raw);
  } catch (err) {
    /* keep the default payload */
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "quote_submitted",
    quote_type: info.quote_type || "auto",
    lead_source: info.lead_source || "",
  });
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("event", "conversion", { send_to: "AW-18364627721/MInCCIu5-PscEIn297RE" });
}

function initThanks() {
  const heading = document.getElementById("thanksHeading");
  if (!heading) return;
  fireQuoteConversion();
  function render() {
    let name = "";
    try {
      name = (sessionStorage.getItem("mi-quote-name") || "").trim();
    } catch (err) {
      name = "";
    }
    heading.textContent = name ? t("thanks.heading").replace("{name}", name) : t("thanks.headingPlain");
  }
  render();
  document.addEventListener("mi-lang", render);
  const button = document.getElementById("saveContact");
  if (!button) return;
  button.addEventListener("click", () => {
    const card = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:;Millennium Insurance;;;",
      "FN:Millennium Insurance",
      "ORG:Millennium Insurance",
      "TEL;TYPE=WORK,VOICE:+19316472434",
      "ADR;TYPE=WORK:;;313 Dover Rd;Clarksville;TN;37042;USA",
      "END:VCARD",
      "",
    ].join("\r\n");
    const blob = new Blob([card], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Millennium-Insurance.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
  });
}

if (document.getElementById("thanksHeading")) initThanks();
