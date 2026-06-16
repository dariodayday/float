// ===== Activity catalog =====
// travel: 0=home, 1=nearby (few km), 2=across town, 3=road trip
// cost: rough $ per person · fits: durations ('short'|'half'|'full')
// min21: alcohol-centric venue · tags: vibe tags for mood matching
// setting 'home' needs gear in `needs`; 'out' gets a Maps link via `map`
const ACTIVITIES = [
  // ---- Nearby (a few km out) ----
  { name: "Dinner out", emoji: "🍽️", cat: "Sit-down meal", setting: "out", cost: 40, travel: 1, fits: ["short", "half"], tags: ["foodie", "datey", "chill"], map: "restaurants" },
  { name: "Food hall crawl", emoji: "🥡", cat: "Graze a bunch of spots", setting: "out", cost: 25, travel: 1, fits: ["short", "half"], tags: ["foodie", "chill", "party"], map: "food hall" },
  { name: "Sports bar", emoji: "🍻", cat: "Drinks, game's on", setting: "out", cost: 30, travel: 1, fits: ["short", "half"], min21: true, tags: ["party", "chill"], map: "sports bar" },
  { name: "Cocktail bar", emoji: "🍸", cat: "Nice drinks out", setting: "out", cost: 35, travel: 1, fits: ["short", "half"], min21: true, tags: ["datey", "party", "chill"], map: "cocktail bar" },
  { name: "Brewery / taproom", emoji: "🍺", cat: "Beers & hangout", setting: "out", cost: 30, travel: 1, fits: ["short", "half"], min21: true, tags: ["chill", "foodie", "party"], map: "brewery" },
  { name: "Coffee & dessert", emoji: "🍰", cat: "Sweet low-key", setting: "out", cost: 12, travel: 1, fits: ["short"], tags: ["chill", "datey", "cheap"], map: "dessert cafe" },
  { name: "Bowling", emoji: "🎳", cat: "Classic group fun", setting: "out", cost: 25, travel: 1, fits: ["short", "half"], tags: ["competitive", "party", "chill"], map: "bowling alley" },
  { name: "Movie theater", emoji: "🎬", cat: "Catch a film", setting: "out", cost: 20, travel: 1, fits: ["short", "half"], tags: ["chill", "datey"], map: "movie theater" },
  { name: "Mini golf", emoji: "⛳", cat: "Low-key competition", setting: "out", cost: 18, travel: 1, fits: ["short", "half"], tags: ["competitive", "chill", "datey"], map: "mini golf" },
  { name: "Arcade", emoji: "🕹️", cat: "Games & tickets", setting: "out", cost: 28, travel: 1, fits: ["short", "half"], tags: ["party", "competitive"], map: "arcade" },
  { name: "Karaoke", emoji: "🎤", cat: "Sing it out", setting: "out", cost: 25, travel: 1, fits: ["short", "half"], tags: ["party"], map: "karaoke" },
  { name: "Pool & billiards", emoji: "🎱", cat: "Rack 'em up", setting: "out", cost: 20, travel: 1, fits: ["short", "half"], tags: ["chill", "competitive"], map: "pool hall billiards" },
  { name: "Axe throwing", emoji: "🪓", cat: "Throw stuff, safely", setting: "out", cost: 30, travel: 1, fits: ["short", "half"], tags: ["competitive", "active", "adventurous", "party"], map: "axe throwing" },
  { name: "Topgolf / driving range", emoji: "🏌️", cat: "Swing & drinks", setting: "out", cost: 35, travel: 1, fits: ["short", "half"], tags: ["competitive", "active", "party"], map: "topgolf driving range" },
  { name: "Trampoline park", emoji: "🤸", cat: "Bounce it out", setting: "out", cost: 25, travel: 1, fits: ["short", "half"], tags: ["active", "party"], map: "trampoline park" },
  { name: "Laser tag", emoji: "🔫", cat: "Team battle", setting: "out", cost: 25, travel: 1, fits: ["short", "half"], tags: ["active", "competitive", "party"], map: "laser tag" },
  { name: "Escape room", emoji: "🔐", cat: "Team puzzle", setting: "out", cost: 35, travel: 1, fits: ["short"], tags: ["competitive", "adventurous"], map: "escape room" },
  { name: "Comedy club", emoji: "🎙️", cat: "Stand-up show", setting: "out", cost: 30, travel: 1, fits: ["half"], tags: ["party", "datey"], map: "comedy club" },
  { name: "Local live music", emoji: "🎸", cat: "Catch a set", setting: "out", cost: 25, travel: 1, fits: ["half"], tags: ["party", "chill"], map: "live music venue" },
  { name: "Board game café", emoji: "🎲", cat: "Games + snacks", setting: "out", cost: 15, travel: 1, fits: ["short", "half"], tags: ["chill", "competitive"], map: "board game cafe" },
  { name: "Night market", emoji: "🏮", cat: "Food, stalls, lights", setting: "out", cost: 20, travel: 1, fits: ["short", "half"], tags: ["foodie", "chill", "datey"], map: "night market" },

  // ---- Across town ----
  { name: "Concert / big show", emoji: "🎟️", cat: "Live event", setting: "out", cost: 60, travel: 2, fits: ["half"], tags: ["party"], map: "concerts tonight" },
  { name: "Pro / college game", emoji: "🏟️", cat: "Catch a game live", setting: "out", cost: 55, travel: 2, fits: ["half"], tags: ["party", "active"], map: "sports game tickets" },
  { name: "Nightclub / dancing", emoji: "🪩", cat: "Dance floor", setting: "out", cost: 40, travel: 2, fits: ["half"], min21: true, tags: ["party"], map: "nightclub" },
  { name: "Rooftop bar", emoji: "🌆", cat: "Views & drinks", setting: "out", cost: 40, travel: 2, fits: ["short", "half"], min21: true, tags: ["datey", "chill", "party"], map: "rooftop bar" },
  { name: "Museum", emoji: "🏛️", cat: "Wander & learn", setting: "out", cost: 20, travel: 2, fits: ["short", "half"], tags: ["cultured", "chill", "datey"], map: "museum" },
  { name: "Aquarium", emoji: "🐠", cat: "Fishy day out", setting: "out", cost: 30, travel: 2, fits: ["short", "half"], tags: ["chill", "datey", "cultured"], map: "aquarium" },
  { name: "Zoo", emoji: "🦁", cat: "Animals & walking", setting: "out", cost: 25, travel: 2, fits: ["half"], tags: ["chill", "outdoorsy"], map: "zoo" },
  { name: "Art gallery / exhibit", emoji: "🖼️", cat: "Culture fix", setting: "out", cost: 18, travel: 2, fits: ["short"], tags: ["cultured", "datey", "chill"], map: "art gallery exhibit" },
  { name: "Go-kart racing", emoji: "🏎️", cat: "Race your friends", setting: "out", cost: 40, travel: 2, fits: ["short", "half"], tags: ["competitive", "active", "adventurous"], map: "go kart racing" },
  { name: "Rock climbing gym", emoji: "🧗", cat: "Climb walls", setting: "out", cost: 25, travel: 2, fits: ["short", "half"], tags: ["active", "adventurous"], map: "rock climbing gym" },
  { name: "Paint & sip", emoji: "🎨", cat: "Make art, have wine", setting: "out", cost: 40, travel: 2, fits: ["half"], tags: ["chill", "datey", "cultured"], map: "paint and sip" },
  { name: "Indoor skydiving", emoji: "🪂", cat: "Float on air", setting: "out", cost: 70, travel: 2, fits: ["short"], tags: ["adventurous", "active"], map: "indoor skydiving" },
  { name: "Festival / fair", emoji: "🎡", cat: "Food, rides, music", setting: "out", cost: 30, travel: 2, fits: ["half", "full"], tags: ["party", "foodie", "outdoorsy"], map: "festival fair this weekend" },
  { name: "Spa / hot springs", emoji: "🧖", cat: "Full relax mode", setting: "out", cost: 80, travel: 2, fits: ["half"], tags: ["chill", "datey"], map: "spa day hot springs" },

  // ---- Road trip ----
  { name: "Beach day", emoji: "🏖️", cat: "Sun & sand", setting: "out", cost: 10, travel: 3, fits: ["full"], tags: ["chill", "outdoorsy"], map: "beach" },
  { name: "Hiking / state park", emoji: "🥾", cat: "Get outside", setting: "out", cost: 5, travel: 3, fits: ["half", "full"], tags: ["outdoorsy", "active", "cheap"], map: "hiking trails state park" },
  { name: "Amusement park", emoji: "🎢", cat: "Big day out", setting: "out", cost: 80, travel: 3, fits: ["full"], tags: ["adventurous", "party"], map: "amusement park" },
  { name: "Water park", emoji: "🌊", cat: "Slides & splashing", setting: "out", cost: 55, travel: 3, fits: ["full"], tags: ["active", "party"], map: "water park" },
  { name: "City day trip", emoji: "🏙️", cat: "Explore somewhere new", setting: "out", cost: 60, travel: 3, fits: ["full"], tags: ["adventurous", "cultured", "foodie"], map: "things to do downtown" },
  { name: "Winery / vineyard", emoji: "🍷", cat: "Tastings & views", setting: "out", cost: 50, travel: 3, fits: ["half", "full"], min21: true, tags: ["datey", "chill", "foodie"], map: "winery vineyard tour" },
  { name: "Camping trip", emoji: "🏕️", cat: "Out in nature", setting: "out", cost: 25, travel: 3, fits: ["full"], tags: ["outdoorsy", "adventurous", "cheap"], map: "campgrounds" },
  { name: "Lake day / kayaking", emoji: "🛶", cat: "On the water", setting: "out", cost: 30, travel: 3, fits: ["half", "full"], tags: ["outdoorsy", "active"], map: "lake kayak rental" },
  { name: "Scenic drive + lookout", emoji: "🚗", cat: "Windows down", setting: "out", cost: 15, travel: 3, fits: ["half"], tags: ["chill", "datey", "cheap"], map: "scenic overlook" },
  { name: "Ski / snowboard", emoji: "🎿", cat: "Hit the slopes", setting: "out", cost: 90, travel: 3, fits: ["full"], tags: ["active", "adventurous"], map: "ski resort" },

  // ---- At home ----
  { name: "Video game tourney", emoji: "🎮", cat: "At home", setting: "home", cost: 5, travel: 0, fits: ["short", "half"], tags: ["party", "competitive"], needs: ["console"] },
  { name: "Board game night", emoji: "🎲", cat: "At home", setting: "home", cost: 10, travel: 0, fits: ["short", "half"], tags: ["chill", "competitive"], needs: ["boardgames"] },
  { name: "Movie marathon", emoji: "🍿", cat: "At home", setting: "home", cost: 8, travel: 0, fits: ["half", "full"], tags: ["chill", "datey"], needs: ["tv"] },
  { name: "Backyard cookout", emoji: "🔥", cat: "At home", setting: "home", cost: 20, travel: 0, fits: ["half", "full"], tags: ["chill", "foodie", "party"], needs: ["yard"] },
  { name: "Pool party", emoji: "🏊", cat: "At home", setting: "home", cost: 15, travel: 0, fits: ["half", "full"], tags: ["party", "active"], needs: ["pool"] },
  { name: "Poker night", emoji: "🃏", cat: "At home", setting: "home", cost: 10, travel: 0, fits: ["short", "half"], tags: ["competitive", "chill"], needs: ["cards"] },
  { name: "Potluck dinner", emoji: "🥘", cat: "At home", setting: "home", cost: 15, travel: 0, fits: ["short", "half", "full"], tags: ["chill", "foodie"], needs: [] },
];

// Maps each activity to OpenStreetMap tags so we can find real venues nearby.
// Activities not listed here simply won't drop map pins (they still appear as idea cards).
const OSM_TAGS = {
  "Dinner out": ["amenity=restaurant"],
  "Food hall crawl": ["amenity=food_court", "amenity=marketplace"],
  "Sports bar": ["amenity=bar", "amenity=pub"],
  "Cocktail bar": ["amenity=bar"],
  "Brewery / taproom": ["amenity=pub"],
  "Bowling": ["leisure=bowling_alley"],
  "Movie theater": ["amenity=cinema"],
  "Mini golf": ["leisure=miniature_golf"],
  "Arcade": ["leisure=amusement_arcade"],
  "Karaoke": ["amenity=karaoke_box"],
  "Pool & billiards": ["sport=billiards"],
  "Axe throwing": ["sport=axe_throwing"],
  "Topgolf / driving range": ["leisure=golf_course"],
  "Trampoline park": ["leisure=trampoline_park"],
  "Laser tag": ["sport=laser_tag"],
  "Escape room": ["leisure=escape_game"],
  "Comedy club": ["amenity=theatre"],
  "Local live music": ["amenity=theatre", "amenity=nightclub"],
  "Night market": ["amenity=marketplace"],
  "Concert / big show": ["amenity=theatre"],
  "Pro / college game": ["leisure=stadium"],
  "Nightclub / dancing": ["amenity=nightclub"],
  "Rooftop bar": ["amenity=bar"],
  "Museum": ["tourism=museum"],
  "Aquarium": ["tourism=aquarium"],
  "Zoo": ["tourism=zoo"],
  "Art gallery / exhibit": ["tourism=gallery"],
  "Go-kart racing": ["sport=karting"],
  "Rock climbing gym": ["sport=climbing"],
  "Spa / hot springs": ["leisure=spa"],
  "Beach day": ["natural=beach"],
  "Hiking / state park": ["leisure=park"],
  "Amusement park": ["tourism=theme_park"],
  "Water park": ["leisure=water_park"],
  "Winery / vineyard": ["craft=winery"],
  "Camping trip": ["tourism=camp_site"],
};

// Reverse lookup: OSM selector -> { emoji, label, cost, desc }, so each pin
// gets a fitting icon plus what-it-is / price / blurb for the hover tooltip.
const PIN_EMOJI = {};
const PIN_INFO = {};
for (const act of ACTIVITIES) {
  for (const sel of OSM_TAGS[act.name] || []) {
    if (!PIN_EMOJI[sel]) {
      PIN_EMOJI[sel] = act.emoji;
      PIN_INFO[sel] = { emoji: act.emoji, label: act.name, cost: act.cost, desc: act.cat };
    }
  }
}

const DURATION_LABEL = { short: "a couple hours", half: "half a day / a night out", full: "a full day or more" };

// Max-distance options. cap = how far-flung an activity can be (1 local, 2 regional, 3 trip);
// radius = how wide to search the map, in metres.
// radius ≈ minutes of travel at ~25 mph (driving), so the search covers
// everything UP TO the chosen time, not a far-only band.
const DISTANCE_OPTS = [
  { label: "🚶 Walking distance", cap: 1, radius: 1500 },
  { label: "🚗 Up to ~5 min", cap: 1, radius: 3000 },
  { label: "🚗 Up to ~10 min", cap: 2, radius: 7000 },
  { label: "🚗 Up to ~20 min", cap: 2, radius: 13000 },
  { label: "🛣️ Up to ~40 min", cap: 3, radius: 27000 },
  { label: "🧭 Up to an hour+", cap: 3, radius: 50000 },
];
const distOpt = (a) => DISTANCE_OPTS[parseInt(a.distance, 10)] || DISTANCE_OPTS[2];
const HAVE_LABEL = { console: "Game console", boardgames: "Board games", tv: "Big TV / projector", yard: "Backyard / grill", pool: "Pool", cards: "Deck of cards" };

// Plain-language categories of what people feel like doing.
// Each activity is tagged with one or more of these (see CATS below).
const VIBE_CHIPS = [
  { label: "🍔 Food", value: "food" },
  { label: "🍸 Drinks", value: "drinks" },
  { label: "🏀 Sports", value: "sports" },
  { label: "🎮 Games", value: "games" },
  { label: "🎶 Music", value: "music" },
  { label: "🌳 Outdoors", value: "outdoors" },
  { label: "🎢 Adventure", value: "adventure" },
  { label: "🎭 Culture", value: "culture" },
  { label: "😎 Chill", value: "chill" },
  { label: "❤️ Date", value: "date" },
];

// Keywords for understanding free text like "we feel like sports and food".
const MOOD_WORDS = {
  food: ["food", "eat", "eating", "hungry", "dinner", "lunch", "brunch", "restaurant", "snacks", "tacos", "pizza", "burgers", "sushi"],
  drinks: ["drink", "drinks", "drinking", "bar", "beer", "beers", "cocktail", "cocktails", "brewery", "pub", "wine", "booze", "happy hour"],
  sports: ["sport", "sports", "active", "athletic", "basketball", "soccer", "workout", "gym", "physical", "competitive", "compete"],
  games: ["game", "games", "arcade", "bowling", "pool", "billiards", "darts", "mini golf", "escape room", "laser tag", "play"],
  music: ["music", "concert", "show", "band", "dj", "dance", "dancing", "club", "clubbing", "nightlife", "karaoke", "rave", "live"],
  outdoors: ["outdoor", "outdoors", "outside", "nature", "hike", "hiking", "beach", "park", "camping", "lake", "fresh air"],
  adventure: ["adventure", "adventurous", "thrill", "thrills", "exciting", "crazy", "extreme", "climbing", "go-kart", "karting", "rollercoaster", "amusement", "skydiving"],
  culture: ["culture", "art", "museum", "gallery", "history", "theatre", "comedy", "exhibit", "aquarium", "zoo"],
  chill: ["chill", "relax", "lowkey", "low-key", "low key", "easy", "mellow", "calm", "lazy", "casual", "coffee", "movie"],
  date: ["date", "romantic", "couple", "datey", "cute"],
};

// Which plain-language categories each activity belongs to (keyed by name).
const CATS = {
  "Dinner out": ["food", "date"],
  "Food hall crawl": ["food"],
  "Sports bar": ["drinks"],
  "Cocktail bar": ["drinks", "date"],
  "Brewery / taproom": ["drinks"],
  "Coffee & dessert": ["chill"],
  "Bowling": ["games"],
  "Movie theater": ["chill", "date"],
  "Mini golf": ["games"],
  "Arcade": ["games"],
  "Karaoke": ["music", "games"],
  "Pool & billiards": ["games"],
  "Axe throwing": ["adventure", "games"],
  "Topgolf / driving range": ["sports", "games"],
  "Trampoline park": ["sports"],
  "Laser tag": ["games", "sports"],
  "Escape room": ["games"],
  "Comedy club": ["culture"],
  "Local live music": ["music"],
  "Board game café": ["games", "chill"],
  "Night market": ["food"],
  "Concert / big show": ["music"],
  "Pro / college game": ["sports"],
  "Nightclub / dancing": ["music"],
  "Rooftop bar": ["drinks", "date"],
  "Museum": ["culture"],
  "Aquarium": ["culture", "date"],
  "Zoo": ["outdoors", "culture"],
  "Art gallery / exhibit": ["culture", "date"],
  "Go-kart racing": ["adventure", "sports"],
  "Rock climbing gym": ["adventure", "sports"],
  "Paint & sip": ["culture", "date"],
  "Indoor skydiving": ["adventure"],
  "Festival / fair": ["music", "food"],
  "Spa / hot springs": ["chill", "date"],
  "Beach day": ["outdoors"],
  "Hiking / state park": ["outdoors"],
  "Amusement park": ["adventure"],
  "Water park": ["adventure", "outdoors"],
  "City day trip": ["culture"],
  "Winery / vineyard": ["drinks", "date"],
  "Camping trip": ["outdoors"],
  "Lake day / kayaking": ["outdoors", "adventure"],
  "Scenic drive + lookout": ["chill", "outdoors"],
  "Ski / snowboard": ["adventure", "sports"],
  "Video game tourney": ["games"],
  "Board game night": ["games", "chill"],
  "Movie marathon": ["chill"],
  "Backyard cookout": ["food", "chill"],
  "Pool party": ["chill"],
  "Poker night": ["games"],
  "Potluck dinner": ["food", "chill"],
};

// Pull a dollar figure out of free text like "around $20" or "20-30 bucks"
function parseMoney(str) {
  const nums = (String(str).match(/\d+(\.\d+)?/g) || []).map(Number);
  if (!nums.length) return null;
  if (nums.length >= 2) return Math.round((nums[0] + nums[1]) / 2);
  return nums[0];
}

function parseMood(text, chips) {
  const tags = new Set(chips || []);
  const t = (text || "").toLowerCase();
  for (const [tag, words] of Object.entries(MOOD_WORDS)) {
    if (words.some((w) => t.includes(w))) tags.add(tag);
  }
  return [...tags];
}

// ===== Conversation script =====
const STEPS = [
  {
    key: "mode", type: "choice",
    q: "Hey! 👋 Let's sort out your plans. First — feeling like going out, or staying home tonight?",
    options: [
      { label: "🎉 Going out", value: "out" },
      { label: "🛋️ Staying home", value: "in" },
    ],
  },
  {
    key: "transport", type: "choice",
    q: "How are you getting around?",
    when: (a) => a.mode === "out",
    options: [
      { label: "🚗 Everybody has a car", value: "car" },
      { label: "🚕 Rideshare it", value: "ride" },
      { label: "🚶 On foot / transit", value: "walk" },
    ],
  },
  {
    key: "mood", type: "open",
    q: "What do you feel like doing? Tap what sounds good — or just type it.",
    placeholder: "e.g. sports and food…",
    options: VIBE_CHIPS,
  },
  { key: "people", type: "number", q: "How many of you are there?", placeholder: "e.g. 4", min: 1, max: 50 },
  {
    key: "age", type: "choice",
    q: "Roughly what age is the crew?",
    options: [
      { label: "Under 16", value: "u16" },
      { label: "16–17", value: "16" },
      { label: "18–20", value: "18" },
      { label: "21–25", value: "21" },
      { label: "26–30", value: "26" },
      { label: "30+", value: "30plus" },
      { label: "Mixed", value: "mixed" },
    ],
  },
  {
    key: "budget", type: "text",
    q: "Roughly what's the budget per person? Just tell me — like \"around $20\".",
    placeholder: "e.g. around $20",
    parse: parseMoney,
  },
  {
    key: "distance", type: "choice",
    q: "What's the max distance you'll travel?",
    when: (a) => a.mode === "out",
    options: (a) => {
      // Only walking is truly range-limited; rideshare & car can both go the distance.
      const maxCap = a.transport === "walk" ? 1 : 3;
      return DISTANCE_OPTS.map((o, i) => ({ label: o.label, value: String(i), cap: o.cap })).filter((o) => o.cap <= maxCap);
    },
  },
  {
    key: "have", type: "multi",
    q: "Nice — night in it is. 🍿 What have you got to work with? (Tap any, or skip.)",
    when: (a) => a.mode === "in",
    options: Object.entries(HAVE_LABEL).map(([value, label]) => ({ label, value })),
  },
  {
    key: "duration", type: "choice",
    q: "How much time you got?",
    options: [
      { label: "A couple hours", value: "short" },
      { label: "A night out", value: "half" },
      { label: "Full day+", value: "full" },
    ],
  },
  {
    key: "location", type: "location",
    q: "Last thing — where are you? Drop a neighborhood, city, or address and I'll map out spots around you.",
    placeholder: "e.g. Santa Monica, CA",
    when: (a) => a.mode === "out" && a.transport !== "ride",
  },
  {
    key: "location", type: "locations",
    q: "Since you're splitting rides — where's everyone coming from? Add each place and I'll find spots in the middle. 🎯",
    placeholder: "your place, a friend's address…",
    when: (a) => a.mode === "out" && a.transport === "ride",
  },
];

const state = { step: 0, answers: {} };
const chatEl = document.getElementById("chat");
const composerEl = document.getElementById("composer");

// ===== Chat helpers =====
function addMsg(html, who) {
  const wrap = document.createElement("div");
  wrap.className = `msg ${who}`;
  wrap.innerHTML = `<div class="bubble">${html}</div>`;
  chatEl.appendChild(wrap);
  wrap.scrollIntoView({ behavior: "smooth", block: "end" });
  return wrap;
}

function aiSay(text, then) {
  const typing = document.createElement("div");
  typing.className = "msg ai typing";
  typing.innerHTML = `<div class="bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`;
  chatEl.appendChild(typing);
  typing.scrollIntoView({ behavior: "smooth", block: "end" });
  setTimeout(() => { typing.remove(); addMsg(text, "ai"); if (then) then(); }, 520);
}

const clearComposer = () => (composerEl.innerHTML = "");

// ===== Step rendering =====
function askStep() {
  // Skip steps that don't apply to the chosen path (out vs in)
  while (state.step < STEPS.length && STEPS[state.step].when && !STEPS[state.step].when(state.answers)) {
    state.step++;
  }
  if (state.step >= STEPS.length) return finish();
  const step = STEPS[state.step];
  aiSay(step.q, () => renderComposer(step));
}

function renderComposer(step) {
  clearComposer();

  if (step.type === "number") {
    const row = document.createElement("div");
    row.className = "row";
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = step.placeholder || "";
    if (step.min != null) input.min = step.min;
    if (step.max != null) input.max = step.max;
    const btn = document.createElement("button");
    btn.className = "btn primary";
    btn.textContent = "Send";
    const submit = () => {
      const v = parseFloat(input.value);
      if (isNaN(v) || v < (step.min ?? -Infinity)) { input.focus(); return; }
      const disp = step.prefix ? `${step.prefix}${v}` : String(v);
      answer(step, v, step.key === "budget" ? `${disp} per person` : disp);
    };
    btn.addEventListener("click", submit);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") submit(); });
    row.append(input, btn);
    composerEl.appendChild(row);
    input.focus();
  }

  if (step.type === "text") {
    const row = document.createElement("div");
    row.className = "row";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = step.placeholder || "";
    const btn = document.createElement("button");
    btn.className = "btn primary";
    btn.textContent = "Send";
    const submit = () => {
      const raw = input.value.trim();
      const parsed = step.parse ? step.parse(raw) : raw;
      if (parsed == null || raw === "") { input.focus(); return; }
      const disp = step.key === "budget" ? `~$${parsed} per person` : raw;
      answer(step, parsed, disp);
    };
    btn.addEventListener("click", submit);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") submit(); });
    row.append(input, btn);
    composerEl.appendChild(row);
    input.focus();
  }

  if (step.type === "location") {
    const row = document.createElement("div");
    row.className = "row";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = step.placeholder || "";
    const go = document.createElement("button");
    go.className = "btn primary";
    go.textContent = "Map it";
    const submit = () => {
      const raw = input.value.trim();
      if (!raw) { input.focus(); return; }
      answer(step, { query: raw }, `📍 ${raw}`);
    };
    go.addEventListener("click", submit);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") submit(); });
    row.append(input, go);

    const geoRow = document.createElement("div");
    geoRow.className = "row";
    const geo = document.createElement("button");
    geo.className = "btn";
    geo.textContent = "📍 Use my current location";
    geo.style.flex = "1";
    geo.addEventListener("click", () => {
      if (!navigator.geolocation) { input.focus(); return; }
      geo.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(
        (pos) => answer(step, { coords: { lat: pos.coords.latitude, lon: pos.coords.longitude } }, "📍 My current location"),
        () => { geo.textContent = "Couldn't get location — type it instead"; input.focus(); },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    });
    geoRow.appendChild(geo);
    composerEl.append(row, geoRow);
    input.focus();
  }

  if (step.type === "locations") {
    const points = []; // each: { query } or { coords, label }
    const chips = document.createElement("div");
    chips.className = "choices";
    const renderChips = () => {
      chips.innerHTML = "";
      points.forEach((p, i) => {
        const c = document.createElement("button");
        c.className = "btn chip selected";
        c.innerHTML = `${p.label || p.query} &nbsp;✕`;
        c.title = "Remove";
        c.addEventListener("click", () => { points.splice(i, 1); renderChips(); });
        chips.appendChild(c);
      });
    };

    const row = document.createElement("div");
    row.className = "row";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = step.placeholder || "";
    const add = document.createElement("button");
    add.className = "btn";
    add.textContent = "Add";
    const addTyped = () => {
      const raw = input.value.trim();
      if (!raw) { input.focus(); return; }
      points.push({ query: raw });
      input.value = "";
      renderChips();
      input.focus();
    };
    add.addEventListener("click", addTyped);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") addTyped(); });
    row.append(input, add);

    const geoRow = document.createElement("div");
    geoRow.className = "row";
    const geo = document.createElement("button");
    geo.className = "btn";
    geo.textContent = "📍 Add my place";
    geo.style.flex = "1";
    geo.addEventListener("click", () => {
      if (!navigator.geolocation) { input.focus(); return; }
      geo.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(
        (pos) => { points.push({ coords: { lat: pos.coords.latitude, lon: pos.coords.longitude }, label: "My place" }); geo.textContent = "📍 Add my place"; renderChips(); },
        () => { geo.textContent = "Couldn't locate — type it instead"; input.focus(); },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    });
    const done = document.createElement("button");
    done.className = "btn primary";
    done.textContent = "Find the middle 🎯";
    done.style.flex = "1";
    done.addEventListener("click", () => {
      if (!points.length) { input.focus(); return; }
      const label = `📍 ${points.length} ${points.length === 1 ? "place" : "places"}`;
      answer(step, { points: points.slice() }, label);
    });
    geoRow.append(geo, done);

    composerEl.append(chips, row, geoRow);
    input.focus();
  }

  if (step.type === "choice") {
    const box = document.createElement("div");
    box.className = "choices";
    const opts = typeof step.options === "function" ? step.options(state.answers) : step.options;
    opts.forEach((o) => {
      const b = document.createElement("button");
      b.className = "btn";
      b.textContent = o.label;
      b.addEventListener("click", () => answer(step, o.value, o.label));
      box.appendChild(b);
    });
    composerEl.appendChild(box);
  }

  if (step.type === "multi") {
    const box = document.createElement("div");
    box.className = "choices";
    const picked = new Set();
    step.options.forEach((o) => {
      const b = document.createElement("button");
      b.className = "btn chip";
      b.textContent = o.label;
      b.addEventListener("click", () => {
        if (picked.has(o.value)) { picked.delete(o.value); b.classList.remove("selected"); }
        else { picked.add(o.value); b.classList.add("selected"); }
      });
      box.appendChild(b);
    });
    const done = document.createElement("button");
    done.className = "btn primary";
    done.textContent = "Done";
    done.addEventListener("click", () => {
      const vals = [...picked];
      const label = vals.length ? vals.map((v) => HAVE_LABEL[v]).join(", ") : "Nothing special";
      answer(step, vals, label);
    });
    composerEl.append(box, done);
  }

  if (step.type === "open") {
    const picked = new Set();
    const box = document.createElement("div");
    box.className = "choices";
    step.options.forEach((o) => {
      const b = document.createElement("button");
      b.className = "btn chip";
      b.textContent = o.label;
      b.addEventListener("click", () => {
        if (picked.has(o.value)) { picked.delete(o.value); b.classList.remove("selected"); }
        else { picked.add(o.value); b.classList.add("selected"); }
      });
      box.appendChild(b);
    });
    const row = document.createElement("div");
    row.className = "row";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = step.placeholder || "";
    const btn = document.createElement("button");
    btn.className = "btn primary";
    btn.textContent = "Go";
    const submit = () => {
      const text = input.value.trim();
      const chips = [...picked];
      const tags = parseMood(text, chips);
      const labelParts = [];
      if (text) labelParts.push(`"${text}"`);
      if (chips.length) labelParts.push(chips.map((c) => VIBE_CHIPS.find((v) => v.value === c).label).join(" "));
      const label = labelParts.join("  ") || "Surprise us";
      answer(step, tags, label);
    };
    btn.addEventListener("click", submit);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") submit(); });
    row.append(input, btn);
    composerEl.append(box, row);
    input.focus();
  }
}

function answer(step, value, displayText) {
  state.answers[step.key] = value;
  addMsg(displayText, "user");
  clearComposer();
  state.step++;
  askStep();
}

// ===== Recommendation engine =====
function recommend(a) {
  const perPerson = a.budget;
  const cap = distOpt(a).cap;
  const under21 = ["u16", "16", "18"].includes(a.age);
  const mood = a.mood || [];
  const have = a.have || [];
  const out = [];

  for (const act of ACTIVITIES) {
    // Match the chosen path: going out vs staying in
    if (a.mode === "in" && act.setting !== "home") continue;
    if (a.mode === "out" && act.setting !== "out") continue;
    if (act.setting === "out" && act.travel > cap) continue;
    if (under21 && act.min21) continue;
    if (act.setting === "home" && act.needs.length && !act.needs.every((n) => have.includes(n))) continue;
    if (act.cost > perPerson * 1.1) continue;

    let score = 50;
    if (act.fits.includes(a.duration)) score += 22; else score -= 14;
    if (act.setting === "out" && act.travel === cap) score += 10;
    if (act.cost <= perPerson * 0.6) score += 6;

    // Category match — the heart of it
    const cats = CATS[act.name] || [];
    const hits = cats.filter((t) => mood.includes(t)).length;
    score += Math.min(hits, 2) * 14;

    // Random jitter so reshuffles feel fresh
    score += Math.random() * 12;

    out.push({ act, score });
  }

  out.sort((x, y) => y.score - x.score);
  return out.slice(0, 12);
}

// Which real-world venue categories to map — driven strictly by the chosen vibe,
// so "adventure/active" never pulls in food spots, and vice versa.
function venueSelectors(a) {
  const perPerson = a.budget;
  const cap = distOpt(a).cap;
  const under21 = ["u16", "16", "18"].includes(a.age);
  const mood = a.mood || [];

  const matchesVibe = (act) => mood.length === 0 || (CATS[act.name] || []).some((t) => mood.includes(t));
  const eligible = (act, useMood, useCost) =>
    act.setting === "out" &&
    OSM_TAGS[act.name] &&
    act.travel <= cap &&
    !(under21 && act.min21) &&
    (!useCost || act.cost <= perPerson * 1.15) &&
    (!useMood || matchesVibe(act));

  // Strict: vibe + budget + range. Then relax budget/range. Then drop the vibe as a last resort.
  let acts = ACTIVITIES.filter((act) => eligible(act, true, true));
  if (!acts.length) acts = ACTIVITIES.filter((act) => act.setting === "out" && OSM_TAGS[act.name] && matchesVibe(act) && !(under21 && act.min21));
  if (!acts.length) acts = ACTIVITIES.filter((act) => act.setting === "out" && OSM_TAGS[act.name] && act.travel <= cap);

  return [...new Set(acts.flatMap((act) => OSM_TAGS[act.name]))];
}

function reasonFor(act, people, duration) {
  const total = act.cost * people;
  const bits = [];
  bits.push(act.cost === 0 ? "Basically free" : `~$${act.cost}/person · about $${total} for the group`);
  if (act.fits.includes(duration)) bits.push(`great for ${DURATION_LABEL[duration]}`);
  if (act.setting === "home") bits.push("no travel needed");
  return bits.join(" · ");
}

let resultsWrap = null;
let lastDecide = null; // { shown, map, transport } for the "Decide for us" button

// ----- Saved spots (favorites) in localStorage -----
const FAV_KEY = "float_favs";
const favKey = (sp) => `${sp.name}@${(+sp.lat).toFixed(4)},${(+sp.lon).toFixed(4)}`;
function getFavs() { try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch (e) { return []; } }
function isFav(sp) { return getFavs().some((f) => favKey(f) === favKey(sp)); }
function toggleFav(sp) {
  const favs = getFavs();
  const i = favs.findIndex((f) => favKey(f) === favKey(sp));
  if (i >= 0) favs.splice(i, 1);
  else favs.push({ name: sp.name, sel: sp.sel, lat: sp.lat, lon: sp.lon });
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  return i < 0; // true if now saved
}

// ----- Share a spot (native share on mobile, clipboard fallback) -----
function shareSpot(sp) {
  const dir = `https://www.google.com/maps/dir/?api=1&destination=${sp.lat},${sp.lon}`;
  const info = PIN_INFO[sp.sel] || { label: selLabel(sp.sel) };
  const text = `Let's go to ${sp.name} (${info.label.toLowerCase()}) — found on Float 🎈`;
  if (navigator.share) {
    navigator.share({ title: sp.name, text, url: dir }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(`${text}\n${dir}`).then(() => toast("Copied — paste it in the group chat!"), () => toast(dir));
  } else {
    toast(dir);
  }
}

// ----- Tiny toast -----
function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 300); }, 2400);
}

function showSaved() {
  const favs = getFavs();
  if (!favs.length) { toast("No saved spots yet — tap ♡ on a spot."); return; }
  const rows = favs.map((f) => {
    const dir = `https://www.google.com/maps/dir/?api=1&destination=${f.lat},${f.lon}`;
    return `<div class="saved-row"><span>${PIN_EMOJI[f.sel] || "📍"} <b>${f.name}</b> <span class="cat">${selLabel(f.sel)}</span></span><a href="${dir}" target="_blank" rel="noopener">Directions →</a></div>`;
  }).join("");
  aiSay(`❤️ Your saved spots:<div class="saved">${rows}</div>`, () => showControls());
}

function buildCards(picks, a) {
  const people = a.people;
  const cards = picks.map(({ act }, i) => {
    const total = act.cost * people;
    let action = "";
    if (act.setting === "out") {
      const q = encodeURIComponent(`${act.map} near me`);
      action = `<a class="action" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${q}">Find nearby on Maps →</a>`;
    } else {
      action = `<span class="cat">You've got the gear — host it. 🙌</span>`;
    }
    return `
      <article class="card" style="animation-delay:${i * 70}ms">
        <div class="card-top">
          <span class="emoji">${act.emoji}</span>
          <div><h3>${act.name}</h3><div class="cat">${act.cat}</div></div>
        </div>
        <p class="why">${reasonFor(act, people, a.duration)}</p>
        <div class="meta"><span class="tag">$${total} total</span><span class="tag alt">${DURATION_LABEL[a.duration]}</span></div>
        ${action}
      </article>`;
  }).join("");
  return `<div class="result-head">🔥 ${picks.length} ideas for your crew</div><div class="cards">${cards}</div>`;
}

function finish() {
  const a = state.answers;
  const people = a.people;

  // Staying home: no locations to map, so show the idea cards.
  if (a.mode === "in") {
    const picks = recommend(a);
    if (!picks.length) {
      aiSay("Hmm — nothing clicked for a night in with those limits. 🤔 Tap below to retry.", () => showControls());
      return;
    }
    aiSay("Say less — here are some plans for a night in 👇", () => {
      resultsWrap = document.createElement("div");
      resultsWrap.className = "msg ai";
      resultsWrap.innerHTML = `<div class="bubble" style="max-width:100%">${buildCards(picks.slice(0, 6), a)}</div>`;
      chatEl.appendChild(resultsWrap);
      resultsWrap.scrollIntoView({ behavior: "smooth", block: "end" });
      showControls({ shuffle: true });
    });
    return;
  }

  // Going out: skip the topics — go straight to real places on the map,
  // pulling only venue types that match the vibe they asked for.
  const selectors = venueSelectors(a);
  aiSay(`On it — finding real spots near you for ${people} 📍`, () => renderMap(a, selectors));
}

// ===== Map: real nearby venues via OpenStreetMap + Overpass =====
// Load Leaflet only when we actually need the map, so it never blocks page startup.
let leafletPromise;
function ensureLeaflet() {
  if (window.L) return Promise.resolve();
  if (leafletPromise) return leafletPromise;
  leafletPromise = new Promise((resolve, reject) => {
    let cssDone = false, jsDone = false;
    const maybe = () => { if (cssDone && jsDone) resolve(); };
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    css.onload = () => { cssDone = true; maybe(); };
    css.onerror = () => { cssDone = true; maybe(); }; // don't hang if CSS errors
    document.head.appendChild(css);
    const s = document.createElement("script");
    s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    s.onload = () => { jsDone = true; maybe(); };
    s.onerror = () => reject(new Error("Failed to load map library"));
    document.head.appendChild(s);
  });
  return leafletPromise;
}

async function geocode(query) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;
  const res = await fetch(url, { headers: { "Accept-Language": "en" } });
  const data = await res.json();
  if (!data.length) throw new Error("Location not found");
  return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
}

// Resolve the location answer into a search center plus any individual houses.
// Single place -> center is that place. Multiple (rideshare) -> center is the
// midpoint of everyone's houses, and we keep each house to pin on the map.
async function resolveLocation(loc) {
  if (loc.coords) return { center: loc.coords, houses: [] };
  if (loc.query) return { center: await geocode(loc.query), houses: [] };
  if (loc.points && loc.points.length) {
    const houses = [];
    for (const p of loc.points) {
      try { houses.push(p.coords ? p.coords : await geocode(p.query)); } catch (e) { /* skip unresolved */ }
    }
    if (!houses.length) throw new Error("No locations could be found");
    const center = {
      lat: houses.reduce((s, h) => s + h.lat, 0) / houses.length,
      lon: houses.reduce((s, h) => s + h.lon, 0) / houses.length,
    };
    return { center, houses };
  }
  throw new Error("No location given");
}


// Fast-food / coffee chains — not "going out" destinations, so filter them out.
const CHAINS = [
  "starbucks", "tim horton", "mcdonald", "dunkin", "subway", "burger king", "wendy",
  "taco bell", "kfc", "domino", "pizza hut", "chipotle", "panera", "dairy queen",
  "popeyes", "little caesar", "five guys", "chick-fil", "a&w", "arby", "carl's jr",
  "jack in the box", "white castle", "sonic drive", "quiznos", "baskin", "krispy kreme",
  "cinnabon", "second cup", "country style", "wingstop", "in-n-out",
];
const isChain = (name) => { const n = name.toLowerCase(); return CHAINS.some((c) => n.includes(c)); };

// Public Overpass mirrors, tried in order — the main one is often rate-limited.
const OVERPASS_ENDPOINTS = [
  "https://maps.mail.ru/osm/tools/overpass/api/interpreter",
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
];

async function fetchVenues(lat, lon, selectors, radius) {
  const parts = selectors
    .map((sel) => {
      const [k, v] = sel.split("=");
      return `nwr["${k}"="${v}"](around:${radius},${lat},${lon});`;
    })
    .join("\n");
  const query = `[out:json][timeout:25];(${parts});out center 150;`;
  let lastErr;
  for (const ep of OVERPASS_ENDPOINTS) {
    try {
      const res = await fetch(ep, { method: "POST", body: "data=" + encodeURIComponent(query) });
      if (!res.ok) { lastErr = new Error(`${ep} ${res.status}`); continue; }
      const data = await res.json();
      if (data && Array.isArray(data.elements)) return data.elements;
    } catch (e) { lastErr = e; }
  }
  throw lastErr || new Error("All map data servers unavailable");
}

function venuePin(sel, active) {
  return L.divIcon({
    className: "",
    html: `<div class="pin${active ? " active" : ""}"><span>${PIN_EMOJI[sel] || "📍"}</span></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}

// Pretty label from an OSM selector, e.g. "leisure=bowling_alley" -> "Bowling alley"
function selLabel(sel) {
  const v = sel.split("=")[1].replace(/_/g, " ");
  return v.charAt(0).toUpperCase() + v.slice(1);
}

// Distance between two lat/lon points, in miles
function milesBetween(a, b) {
  const R = 3958.8, toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat), dLon = toRad(b.lon - a.lon);
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
}

// Rough travel time from straight-line miles, based on how they're getting around.
function minsLabel(mi, transport) {
  const mph = transport === "walk" ? 3 : 25;
  const mins = Math.max(1, Math.round((mi / mph) * 60));
  return `~${mins} min`;
}

async function renderMap(a, selectors) {
  // Show only a loader first — the map is built AFTER spots are ready, so there's
  // no awkward empty grey box while we fetch.
  const wrap = document.createElement("div");
  wrap.className = "msg ai";
  wrap.innerHTML = `<div class="bubble"><span class="loader"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span> Finding spots near you…</div>`;
  chatEl.appendChild(wrap);
  wrap.scrollIntoView({ behavior: "smooth", block: "end" });
  const bubble = wrap.querySelector(".bubble");
  const fail = (msg) => { bubble.textContent = msg; showControls(); };

  if (!selectors.length) return fail("No mappable spots for this vibe — try a different one.");

  let center, venues;
  try {
    await ensureLeaflet();
  } catch (e) { return fail("Couldn't load the map — check your connection."); }

  let houses = [];
  try {
    const resolved = await resolveLocation(a.location);
    center = resolved.center;
    houses = resolved.houses;
  } catch (e) { return fail("Couldn't find those locations — start over and try different spellings."); }

  const radius = distOpt(a).radius;
  try {
    venues = await fetchVenues(center.lat, center.lon, selectors, radius);
  } catch (e) { return fail("Couldn't reach the map data servers right now — start over to retry."); }

  // Clean, de-duplicated list of named places, with distance
  const seen = new Set();
  const spots = [];
  for (const el of venues) {
    const ll = el.type === "node" ? { lat: el.lat, lon: el.lon } : el.center;
    if (!ll || !el.tags || !el.tags.name) continue;
    if (isChain(el.tags.name)) continue; // skip fast-food / coffee chains
    const key = el.tags.name + "@" + ll.lat.toFixed(4) + "," + ll.lon.toFixed(4);
    if (seen.has(key)) continue;
    seen.add(key);
    const sel = selectors.find((s) => { const [k, v] = s.split("="); return el.tags[k] === v; });
    spots.push({ name: el.tags.name, sel, lat: ll.lat, lon: ll.lon, mi: milesBetween(center, ll) });
  }

  // Nearest-first, so the closest spots are always included — with a per-type
  // cap so one dense category can't flood out everything else.
  spots.sort((x, y) => x.mi - y.mi);
  const PER_TYPE = 8;
  const counts = {};
  const shown = [];
  for (const sp of spots) {
    counts[sp.sel] = counts[sp.sel] || 0;
    if (counts[sp.sel] >= PER_TYPE) continue;
    counts[sp.sel]++;
    shown.push(sp);
    if (shown.length >= 40) break;
  }

  if (!shown.length) return fail("No matching spots found in range — try going farther, or a different vibe.");

  // Spots are ready — NOW build the map.
  bubble.classList.add("map-bubble");
  bubble.innerHTML = `<div class="map" id="map"></div><div class="map-note"></div><div class="filters"></div><div class="venues"></div>`;
  const note = bubble.querySelector(".map-note");
  const list = bubble.querySelector(".venues");
  const filters = bubble.querySelector(".filters");

  const map = L.map(bubble.querySelector("#map"), { zoomControl: true, scrollWheelZoom: false }).setView([center.lat, center.lon], 14);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: "© OpenStreetMap, © CARTO", subdomains: "abcd", maxZoom: 20,
  }).addTo(map);

  const bounds = [[center.lat, center.lon]];
  if (houses.length > 1) {
    // Rideshare: pin each house and mark the midpoint we're searching around.
    const houseIcon = L.divIcon({ className: "", html: `<div class="pin house"><span>🏠</span></div>`, iconSize: [30, 30], iconAnchor: [15, 15] });
    houses.forEach((h, i) => {
      L.marker([h.lat, h.lon], { icon: houseIcon }).addTo(map).bindTooltip(`Pickup ${i + 1}`, { direction: "top", className: "venue-tip" });
      bounds.push([h.lat, h.lon]);
    });
    const midIcon = L.divIcon({ className: "", html: `<div class="pin mid"><span>🎯</span></div>`, iconSize: [30, 30], iconAnchor: [15, 15] });
    L.marker([center.lat, center.lon], { icon: midIcon }).addTo(map).bindPopup("<b>🎯 Middle of the group</b><br>Searching for spots around here");
  } else {
    const meIcon = L.divIcon({ className: "", html: `<div class="pin me"></div>`, iconSize: [20, 20], iconAnchor: [10, 10] });
    L.marker([center.lat, center.lon], { icon: meIcon }).addTo(map).bindPopup("<b>You're here</b>");
  }

  shown.forEach((sp) => {
    const dir = `https://www.google.com/maps/dir/?api=1&destination=${sp.lat},${sp.lon}`;
    const info = PIN_INFO[sp.sel] || { emoji: "📍", label: selLabel(sp.sel), cost: null, desc: "" };
    const price = info.cost != null ? ` · ~$${info.cost}/person` : "";
    const away = minsLabel(sp.mi, a.transport);
    sp.marker = L.marker([sp.lat, sp.lon], { icon: venuePin(sp.sel) })
      .addTo(map)
      .bindTooltip(
        `<b>${sp.name}</b><div class="tt-type">${info.emoji} ${info.label}${price} · ${away}</div><div class="tt-desc">${info.desc}</div>`,
        { direction: "top", offset: [0, -14], opacity: 1, className: "venue-tip" }
      )
      .bindPopup(`<b>${sp.name}</b><br>${info.label}${price} · ${away}<br>${info.desc}<br><a href="${dir}" target="_blank" rel="noopener">Directions →</a>`);
    bounds.push([sp.lat, sp.lon]);

    const saved = isFav(sp);
    const item = document.createElement("div");
    item.className = "venue";
    item.innerHTML = `
      <button class="vmain">
        <span class="vemoji">${PIN_EMOJI[sp.sel] || "📍"}</span>
        <span class="vbody"><span class="vname">${sp.name}</span><span class="vmeta">${selLabel(sp.sel)} · ${away}</span></span>
      </button>
      <button class="vact vfav${saved ? " on" : ""}" aria-label="Save spot">${saved ? "♥" : "♡"}</button>
      <button class="vact vshare" aria-label="Share spot">⤴</button>`;
    item.querySelector(".vmain").addEventListener("click", () => {
      map.setView([sp.lat, sp.lon], 16, { animate: true });
      sp.marker.openPopup();
      bubble.querySelector(".map").scrollIntoView({ behavior: "smooth", block: "center" });
    });
    const favBtn = item.querySelector(".vfav");
    favBtn.addEventListener("click", () => {
      const now = toggleFav(sp);
      favBtn.classList.toggle("on", now);
      favBtn.textContent = now ? "♥" : "♡";
      toast(now ? "Saved ♥" : "Removed");
    });
    item.querySelector(".vshare").addEventListener("click", () => shareSpot(sp));
    sp.item = item;
    list.appendChild(item);
  });

  // Type filters — toggle which kinds of spots show (chips + map pins)
  const sels = [...new Set(shown.map((s) => s.sel))];
  const active = new Set(sels);
  function applyFilter() {
    shown.forEach((sp) => {
      const on = active.has(sp.sel);
      sp.item.style.display = on ? "" : "none";
      if (on && !map.hasLayer(sp.marker)) sp.marker.addTo(map);
      else if (!on && map.hasLayer(sp.marker)) map.removeLayer(sp.marker);
    });
  }
  if (sels.length > 1) {
    sels.forEach((sel) => {
      const chip = document.createElement("button");
      chip.className = "fchip on";
      chip.innerHTML = `${PIN_EMOJI[sel] || "📍"} ${selLabel(sel)}`;
      chip.addEventListener("click", () => {
        if (active.has(sel) && active.size > 1) { active.delete(sel); chip.classList.remove("on"); }
        else { active.add(sel); chip.classList.add("on"); }
        applyFilter();
      });
      filters.appendChild(chip);
    });
  }

  lastDecide = { shown, map, transport: a.transport };

  // Size the view to the spots (so it matches the chosen travel distance) and
  // recompute a few times since the bubble is still settling in.
  const refit = () => { map.invalidateSize(); map.fitBounds(bounds, { padding: [30, 30], maxZoom: 15 }); };
  refit();
  [150, 450, 900].forEach((t) => setTimeout(refit, t));
  note.textContent = houses.length > 1
    ? `${shown.length} spots near the middle of your group, closest first. Tap one to locate it.`
    : `${shown.length} spots near you, closest first. Tap one to locate it.`;
  wrap.scrollIntoView({ behavior: "smooth", block: "start" });
  showControls();
}

// "Decide for us" — make the call: the closest spot that fits the vibe (the list
// is already nearest-first within vibe-matched categories). A decision, not a raffle.
function decideForUs() {
  const d = lastDecide;
  if (!d || !d.shown.length) return;
  d.shown.forEach((s) => s.item.classList.remove("winner"));

  const pick = d.shown[0];
  pick.item.classList.add("winner");
  pick.item.scrollIntoView({ block: "nearest", behavior: "smooth" });
  d.map.setView([pick.lat, pick.lon], 16, { animate: true });
  pick.marker.openPopup();

  const info = PIN_INFO[pick.sel] || { emoji: "📍", label: selLabel(pick.sel), cost: null };
  const price = info.cost != null ? `, around $${info.cost}/person` : "";
  const dir = `https://www.google.com/maps/dir/?api=1&destination=${pick.lat},${pick.lon}`;
  aiSay(
    `Here's the call: <b>${pick.name}</b>. ${info.emoji} It's the closest spot that fits your vibe — ${info.label.toLowerCase()}${price}, just ${minsLabel(pick.mi, d.transport)} away. Go.<br><a class="action" href="${dir}" target="_blank" rel="noopener">Directions →</a>`,
    () => showControls()
  );
}

function showControls(opts = {}) {
  clearComposer();
  const row = document.createElement("div");
  row.className = "row";

  if (state.answers.mode === "out" && lastDecide && lastDecide.shown.length) {
    const decide = document.createElement("button");
    decide.className = "btn primary";
    decide.textContent = "👉 Decide for us";
    decide.style.flex = "1";
    decide.addEventListener("click", decideForUs);
    row.appendChild(decide);
  }

  if (opts.shuffle && resultsWrap) {
    const shuffle = document.createElement("button");
    shuffle.className = "btn primary";
    shuffle.textContent = "🎲 Shuffle ideas";
    shuffle.style.flex = "1";
    shuffle.addEventListener("click", () => {
      const picks = recommend(state.answers);
      resultsWrap.querySelector(".bubble").innerHTML = buildCards(picks.slice(0, 6), state.answers);
      resultsWrap.scrollIntoView({ behavior: "smooth", block: "end" });
    });
    row.appendChild(shuffle);
  }

  const restart = document.createElement("button");
  restart.className = "btn";
  restart.textContent = "↺ Start over";
  restart.style.flex = "1";
  restart.addEventListener("click", () => {
    state.step = 0; state.answers = {}; resultsWrap = null; lastDecide = null;
    chatEl.innerHTML = "";
    askStep();
  });
  row.appendChild(restart);
  composerEl.appendChild(row);

  if (getFavs().length) {
    const saved = document.createElement("button");
    saved.className = "btn";
    saved.style.width = "100%";
    saved.textContent = `❤️ Saved spots (${getFavs().length})`;
    saved.addEventListener("click", showSaved);
    composerEl.appendChild(saved);
  }
}

// ===== Go =====
// Start on the landing page; launch the planner when they tap the CTA.
const landingEl = document.getElementById("landing");
const appEl = document.getElementById("app");
let started = false;

function launchPlanner() {
  if (started) return;
  started = true;
  landingEl.classList.add("leaving");
  appEl.classList.remove("hidden");
  appEl.classList.add("entering");
  requestAnimationFrame(() => appEl.classList.remove("entering"));
  setTimeout(() => { landingEl.style.display = "none"; }, 600);
  askStep();
}

document.getElementById("start").addEventListener("click", launchPlanner);

// Opening animation: each letter flies in mid-activity, then they converge.
(function animateBrand() {
  const brand = document.getElementById("brand");
  if (!brand) return;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return; // CSS shows the final wordmark instantly
  const letters = [...brand.querySelectorAll(".ltr")];
  // Fly them in quickly...
  letters.forEach((l, i) => setTimeout(() => l.classList.add("show"), 200 + i * 160));
  // ...then let them all perform their activity for a clear couple of seconds...
  const lastIn = 200 + (letters.length - 1) * 160;
  const convergeAt = lastIn + 2200;
  setTimeout(() => brand.classList.add("converge"), convergeAt);
  setTimeout(() => brand.classList.add("done"), convergeAt + 1000);
})();
