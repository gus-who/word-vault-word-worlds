window.WORLD_DATA = {
  "meta": {
    "title": "The Word Vault: Word Worlds",
    "description": "Structured vocabulary dataset grouped into thematic 'worlds'. Each word includes its definition, the precise nuance separating it from a common synonym, its 'siblings' (near-synonyms in the same world that create genuine confusion), and example scenarios with a best-fit word plus a plausible distractor for precision-scoring gameplay.",
    "total_words": 74
  },
  "worlds": [
    {
      "id": "ruins",
      "name": "The Ruins",
      "theme": "Things falling apart — but each by a different mechanism.",
      "words": [
        {
          "word": "Decay",
          "definition": "Active rotting or decomposition — something breaks down into a worse state.",
          "nuance_vs_synonym": "Unlike 'deteriorate' (which names no mechanism), decay specifically implies rot — a positive process of falling apart.",
          "siblings": ["Atrophy", "Wither", "Rubble"],
          "scenarios": [
            {
              "situation": "The abandoned pier's timbers had gone soft and black over the decades, untouched by anyone.",
              "best_word": "Decay",
              "plausible_distractor": "Wither",
              "distractor_explanation": "Wither is for drying/shrinking (plants, hope); decay is for rotting/decomposing (wood, institutions, teeth)."
            }
          ]
        },
        {
          "word": "Atrophy",
          "definition": "Wastes away specifically from disuse or lack of use — often reversible if the function resumes.",
          "nuance_vs_synonym": "Unlike 'weaken' (general), atrophy is deterioration *from neglect of a function*, not from an external attack.",
          "siblings": ["Decay", "Wither"],
          "scenarios": [
            {
              "situation": "A skill you once had, but haven't touched in years, has grown noticeably weaker.",
              "best_word": "Atrophy",
              "plausible_distractor": "Decay",
              "distractor_explanation": "Decay implies active rotting; atrophy implies wasting from disuse — the skill isn't rotting, it's simply unused."
            }
          ]
        },
        {
          "word": "Wither",
          "definition": "To dry up and shrink, losing vitality — rooted in the image of a dying plant.",
          "nuance_vs_synonym": "Unlike 'shrink' (purely about size), wither implies loss of vitality/life-force, not just reduction.",
          "siblings": ["Decay", "Atrophy"],
          "scenarios": [
            {
              "situation": "Support for the proposal faded fast once the true costs became public.",
              "best_word": "Wither",
              "plausible_distractor": "Decay",
              "distractor_explanation": "Decay would suggest active rot; wither better captures something losing life/support and shrinking away."
            }
          ]
        },
        {
          "word": "Rubble",
          "definition": "The broken fragments of stone, brick, or concrete left after something built has been destroyed.",
          "nuance_vs_synonym": "Unlike 'debris' (any scattered wreckage), rubble specifically implies a structure was destroyed.",
          "siblings": ["Decay", "Mutilate"],
          "scenarios": [
            {
              "situation": "After the earthquake, rescuers searched through twisted steel and shattered concrete for survivors.",
              "best_word": "Rubble",
              "plausible_distractor": "Decay",
              "distractor_explanation": "Decay is a slow rotting process; rubble is the immediate aftermath of sudden destruction."
            }
          ]
        },
        {
          "word": "Mutilate",
          "definition": "To damage severely by cutting, tearing, or removing parts, leaving something disfigured.",
          "nuance_vs_synonym": "Unlike 'damage' (milder, doesn't imply disfigurement), mutilate implies parts are violently removed or destroyed.",
          "siblings": ["Rubble"],
          "scenarios": [
            {
              "situation": "The editor cut so much from the article that the original argument no longer held together.",
              "best_word": "Mutilate",
              "plausible_distractor": "Decay",
              "distractor_explanation": "Decay is a natural, gradual process; mutilate implies an active, deliberate, violent alteration."
            }
          ]
        }
      ]
    },
    {
      "id": "forge",
      "name": "The Forge",
      "theme": "Bringing things into being — each with a different flavor of how the thing comes about.",
      "words": [
        {
          "word": "Conjure",
          "definition": "To make something appear as if from nothing, mysteriously — the source is hidden.",
          "nuance_vs_synonym": "Unlike 'produce' (neutral, processual), conjure implies the thing materializes with no visible raw materials — like magic.",
          "siblings": ["Contrive", "Confect", "Foment"],
          "scenarios": [
            {
              "situation": "Somehow, with almost no funding, she managed to put together a working budget.",
              "best_word": "Conjure",
              "plausible_distractor": "Contrive",
              "distractor_explanation": "Contrive implies visible effort/artifice in construction; conjure implies it appeared almost magically from nothing."
            }
          ]
        },
        {
          "word": "Contrive",
          "definition": "To create something artificially, with the effort or 'seams' showing.",
          "nuance_vs_synonym": "Unlike 'artificial' (a flat description), contrive implies visible strain — you can tell someone worked hard to make it seem natural, and failed. No bad intent required.",
          "siblings": ["Conjure", "Confect", "Foment"],
          "scenarios": [
            {
              "situation": "The film's happy ending felt forced and unearned — you could feel the writers straining for it.",
              "best_word": "Contrive",
              "plausible_distractor": "Confect",
              "distractor_explanation": "Confect implies a deliberate agenda to manipulate; contrive just means the artificiality is visible, with no need for hidden motive."
            }
          ]
        },
        {
          "word": "Confect",
          "definition": "To cook up or manufacture something, deliberately, to serve an agenda — often to manipulate or provoke.",
          "nuance_vs_synonym": "Unlike 'contrive' (which needn't imply intent), confect always has an agenda baked in — someone is trying to put one over on you.",
          "siblings": ["Conjure", "Contrive", "Foment"],
          "scenarios": [
            {
              "situation": "The leadership invented a budget crisis, timed perfectly to justify the layoffs they'd already decided on.",
              "best_word": "Confect",
              "plausible_distractor": "Contrive",
              "distractor_explanation": "Contrive would fit if the crisis just felt artificial; confect is sharper because there's a deliberate manipulative agenda behind it."
            },
            {
              "situation": "It was a manufactured outrage, engineered specifically to dominate a single news cycle.",
              "best_word": "Confect",
              "plausible_distractor": "Foment",
              "distractor_explanation": "Foment stirs unrest *in people* over time; confect describes manufacturing the issue itself, as a single deliberate act."
            }
          ]
        },
        {
          "word": "Foment",
          "definition": "To stir up or incite unrest, rebellion, or discord — always in a group of people, never in an object.",
          "nuance_vs_synonym": "Unlike 'cause' (neutral, general, works on objects or people), foment specifically produces a *state of agitation in people* — the target is always human unrest.",
          "siblings": ["Conjure", "Contrive", "Confect"],
          "scenarios": [
            {
              "situation": "Agitators had spent weeks quietly encouraging dissent among the ranks.",
              "best_word": "Foment",
              "plausible_distractor": "Confect",
              "distractor_explanation": "Confect fabricates a fake issue or crisis; foment specifically stirs unrest and rebellion within a group of people over time."
            }
          ]
        }
      ]
    },
    {
      "id": "court",
      "name": "The Court",
      "theme": "Reputations, insults, sorrow, and banishment.",
      "words": [
        {
          "word": "Disparage",
          "definition": "To belittle an idea or thing — making it seem lesser, not worth serious regard.",
          "nuance_vs_synonym": "Unlike 'criticize' (can be fair, even admiring), disparage always diminishes — the target is the *idea/thing*, not a person's character.",
          "siblings": ["Denigrate", "Reproach"],
          "scenarios": [
            {
              "situation": "Rivals dismissed her methodology as simplistic without engaging with a single argument.",
              "best_word": "Disparage",
              "plausible_distractor": "Denigrate",
              "distractor_explanation": "Denigrate attacks a person's reputation/character; disparage belittles the idea or work itself."
            }
          ]
        },
        {
          "word": "Denigrate",
          "definition": "To blacken someone's reputation or character, usually unfairly.",
          "nuance_vs_synonym": "Unlike 'disparage' (targets ideas), denigrate goes further and is more personal — it attacks the person's name and character.",
          "siblings": ["Disparage", "Reproach"],
          "scenarios": [
            {
              "situation": "The smear campaign was designed to destroy her personal reputation with the public, not to debate her ideas.",
              "best_word": "Denigrate",
              "plausible_distractor": "Disparage",
              "distractor_explanation": "Disparage would fit if only her work was being belittled; denigrate is right because her character/reputation is the target."
            }
          ]
        },
        {
          "word": "Reproach",
          "definition": "To express disapproval or blame, often with an undertone of disappointment rather than pure hostility.",
          "nuance_vs_synonym": "Unlike 'blame' (colder, more clinical), reproach carries emotional hurt — it comes from someone who expected better.",
          "siblings": ["Disparage", "Denigrate", "Lament"],
          "scenarios": [
            {
              "situation": "She gave him a quiet, disappointed look but didn't say a word.",
              "best_word": "Reproach",
              "plausible_distractor": "Denigrate",
              "distractor_explanation": "Denigrate is an active attack on character; reproach is a quieter expression of disappointment, without the same aggression."
            }
          ]
        },
        {
          "word": "Lament",
          "definition": "To express deep sorrow over a loss — mournful, tender, grieving.",
          "nuance_vs_synonym": "Unlike 'complain' (petty, about inconvenience), lament genuinely grieves something valued and now gone.",
          "siblings": ["Reproach"],
          "scenarios": [
            {
              "situation": "In his memoir, he mourned the disappearance of the old neighbourhood — its bakeries, its familiar faces.",
              "best_word": "Lament",
              "plausible_distractor": "Reproach",
              "distractor_explanation": "Reproach expresses disapproval/blame toward someone; lament expresses sorrow over a loss, with no blame implied."
            }
          ]
        },
        {
          "word": "Ostracise",
          "definition": "Deliberate, collective banishment from a group, as a form of punishment — requires an audience.",
          "nuance_vs_synonym": "Unlike 'exclude' (can be accidental or neutral), ostracise is always deliberate, collective, and punitive.",
          "siblings": ["Reproach"],
          "scenarios": [
            {
              "situation": "After reporting misconduct, no one in the industry would hire her — she was quietly frozen out for years.",
              "best_word": "Ostracise",
              "plausible_distractor": "Denigrate",
              "distractor_explanation": "Denigrate attacks reputation through words; ostracise is the act of collectively excluding/banishing someone from the group itself."
            }
          ]
        }
      ]
    },
    {
      "id": "citadel",
      "name": "The Citadel",
      "theme": "Things that cannot be moved, beaten, or broken — but along different axes.",
      "words": [
        {
          "word": "Immutable",
          "definition": "Cannot be changed — fixed by its very nature.",
          "nuance_vs_synonym": "Unlike 'permanent' (circumstantial — could be made permanent), immutable means change is impossible by nature, not just unlikely. Axis: change over time.",
          "siblings": ["Unassailable", "Indomitable"],
          "scenarios": [
            {
              "situation": "No amount of wishing or lobbying will alter the laws of thermodynamics.",
              "best_word": "Immutable",
              "plausible_distractor": "Unassailable",
              "distractor_explanation": "Unassailable means 'cannot be attacked/argued against'; immutable means 'cannot be changed' — the axis here is change, not argument."
            }
          ]
        },
        {
          "word": "Unassailable",
          "definition": "Cannot be successfully attacked or challenged — no viable objection exists.",
          "nuance_vs_synonym": "Unlike 'strong' (can still be challenged), unassailable means attempting to challenge it is futile. Axis: attack/argument.",
          "siblings": ["Immutable", "Indomitable", "Hegemonic"],
          "scenarios": [
            {
              "situation": "Her argument was backed by seven data sources and had pre-empted every possible counterpoint.",
              "best_word": "Unassailable",
              "plausible_distractor": "Immutable",
              "distractor_explanation": "Immutable is about resistance to *change*; unassailable is about resistance to *attack/argument* — this is a debate scenario, so unassailable fits."
            }
          ]
        },
        {
          "word": "Indomitable",
          "definition": "A will or spirit that refuses to be broken, regardless of external pressure.",
          "nuance_vs_synonym": "Unlike 'resilient' (which recovers *after* being knocked down), indomitable means never being broken in the first place.",
          "siblings": ["Unassailable", "Immutable"],
          "scenarios": [
            {
              "situation": "Despite repeated injuries, public humiliation, and financial ruin, she never once believed she was finished.",
              "best_word": "Indomitable",
              "plausible_distractor": "Unassailable",
              "distractor_explanation": "Unassailable describes a position immune to attack (like an argument or lead); indomitable describes an unbreakable will or spirit."
            }
          ]
        },
        {
          "word": "Hegemonic",
          "definition": "Dominant enough to set the rules that others must operate under — system-defining leadership.",
          "nuance_vs_synonym": "Unlike 'powerful' (says nothing about rule-setting), hegemonic means the dominant party structures the entire field others play in.",
          "siblings": ["Unassailable"],
          "scenarios": [
            {
              "situation": "One nation's economic, military, and cultural dominance was so total that others effectively played by its rules.",
              "best_word": "Hegemonic",
              "plausible_distractor": "Unassailable",
              "distractor_explanation": "Unassailable means 'cannot be attacked'; hegemonic means 'dominant enough to define the system others operate in' — a bigger, structural claim."
            }
          ]
        }
      ]
    },
    {
      "id": "mire",
      "name": "The Mire",
      "theme": "Getting stuck, torn, and burdened.",
      "words": [
        {
          "word": "Quagmire",
          "definition": "An inescapable, complex difficulty — a trap where struggling only sinks you deeper.",
          "nuance_vs_synonym": "Unlike 'mess' (mere disorder), a quagmire actively traps you — movement makes it worse, and inaction isn't safe either.",
          "siblings": ["Mired", "Quandary"],
          "scenarios": [
            {
              "situation": "A routine compliance audit spiralled into a legal entanglement that consumed two years and offered no clean exit.",
              "best_word": "Quagmire",
              "plausible_distractor": "Mired",
              "distractor_explanation": "Mired describes being *stuck in* a mess (your condition); quagmire is the trap-situation itself."
            }
          ]
        },
        {
          "word": "Mired",
          "definition": "Stuck in a mess — emphasis on entanglement and being unable to move freely.",
          "nuance_vs_synonym": "Unlike plain 'stuck' (generic), mired specifically implies you're caught within something like a quagmire — the entanglement is thick and clinging.",
          "siblings": ["Quagmire"],
          "scenarios": [
            {
              "situation": "The bill has been stuck in committee for months with no path forward.",
              "best_word": "Mired",
              "plausible_distractor": "Quagmire",
              "distractor_explanation": "Quagmire names the trap itself (the committee process); mired describes the bill's condition of being stuck within it."
            }
          ]
        },
        {
          "word": "Quandary",
          "definition": "An internal dilemma — a state of uncertainty over a difficult choice between options.",
          "nuance_vs_synonym": "Unlike 'problem' (needn't involve a choice), quandary specifically involves being torn between competing options, often quietly and personally.",
          "siblings": ["Quagmire"],
          "scenarios": [
            {
              "situation": "She was torn over whether to report her own manager, unsure which choice she could live with.",
              "best_word": "Quandary",
              "plausible_distractor": "Quagmire",
              "distractor_explanation": "Quagmire is an external, entangling trap; quandary is an internal dilemma over which choice to make — no trap, just torn indecision."
            }
          ]
        },
        {
          "word": "Saddle",
          "definition": "To burden someone with something unwanted that they cannot easily offload.",
          "nuance_vs_synonym": "Unlike 'give' (neutral), saddle implies the burden is unwanted, imposed by someone else, and hard to escape.",
          "siblings": ["Quagmire"],
          "scenarios": [
            {
              "situation": "The acquisition left the company burdened with debt it never chose to take on.",
              "best_word": "Saddle",
              "plausible_distractor": "Mired",
              "distractor_explanation": "Mired describes being stuck within an entangling mess; saddle describes being loaded with an unwanted burden by someone else."
            }
          ]
        },
        {
          "word": "Fiendishly",
          "definition": "Devilishly — as if authored by malice; an intensifier suggesting deliberate cruelty or cunning.",
          "nuance_vs_synonym": "Unlike 'very' (flat, no character), fiendishly implies the difficulty or cleverness feels almost intentionally, gleefully cruel.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "The puzzle seemed engineered by someone who genuinely wanted to see us fail.",
              "best_word": "Fiendishly",
              "plausible_distractor": "Ponderous",
              "distractor_explanation": "Ponderous means heavy and slow; fiendishly implies deliberate, almost malicious difficulty or cleverness — a different axis entirely."
            }
          ]
        }
      ]
    },
    {
      "id": "underbelly",
      "name": "The Underbelly",
      "theme": "A grimy district of moral filth and conspicuous wrongness.",
      "words": [
        {
          "word": "Unconscionable",
          "definition": "So wrong that it violates conscience — morally indefensible and intolerable.",
          "nuance_vs_synonym": "Unlike 'wrong' (ordinary), unconscionable signals something conscience itself cannot accept — a moral line has been crossed decisively.",
          "siblings": ["Egregious", "Obscene"],
          "scenarios": [
            {
              "situation": "Charging that interest rate to people who had no other options was simply beyond defense.",
              "best_word": "Unconscionable",
              "plausible_distractor": "Egregious",
              "distractor_explanation": "Egregious means conspicuously/flagrantly bad; unconscionable specifically means it violates conscience and cannot be morally justified at all."
            }
          ]
        },
        {
          "word": "Egregious",
          "definition": "Conspicuously, outstandingly bad — the badness stands out sharply from the norm.",
          "nuance_vs_synonym": "Unlike 'bad' (general), egregious specifically means flagrant, impossible to overlook or excuse as ordinary.",
          "siblings": ["Unconscionable", "Obscene"],
          "scenarios": [
            {
              "situation": "It was, by any measure, the most flagrant breach of protocol the board had ever encountered.",
              "best_word": "Egregious",
              "plausible_distractor": "Unconscionable",
              "distractor_explanation": "Unconscionable is a moral judgment (violates conscience); egregious is about conspicuous severity/flagrancy, which fits a 'breach of protocol' better."
            }
          ]
        },
        {
          "word": "Obscene",
          "definition": "Offends decency to a shocking degree — literal or figurative excess.",
          "nuance_vs_synonym": "Unlike 'excessive' (milder), obscene implies a level of excess or indecency that shocks the observer.",
          "siblings": ["Egregious", "Sordid"],
          "scenarios": [
            {
              "situation": "Executives paid themselves enormous bonuses in the same month as mass layoffs.",
              "best_word": "Obscene",
              "plausible_distractor": "Egregious",
              "distractor_explanation": "Egregious means flagrantly bad; obscene specifically implies a shocking, almost indecent degree of excess — sharper for this context."
            }
          ]
        },
        {
          "word": "Sordid",
          "definition": "Morally squalid — sleazy, involving dishonourable motives.",
          "nuance_vs_synonym": "Unlike 'immoral' (neutral/clinical), sordid feels grubby and disreputable, tied to sleazy or dishonourable dealings.",
          "siblings": ["Squalid", "Obscene"],
          "scenarios": [
            {
              "situation": "The trial revealed a mess of bribes, blackmail, and dishonourable motives behind the cover-up.",
              "best_word": "Sordid",
              "plausible_distractor": "Squalid",
              "distractor_explanation": "Squalid describes physical filth/degraded conditions; sordid describes moral sleaze — this scenario is about corrupt dealings, not physical conditions."
            }
          ]
        },
        {
          "word": "Squalid",
          "definition": "Physically filthy and degraded — dirty, wretched living conditions.",
          "nuance_vs_synonym": "Unlike 'dirty' (milder), squalid implies a degrading, often poverty-linked physical filth.",
          "siblings": ["Sordid"],
          "scenarios": [
            {
              "situation": "The refugees were housed in damp, overcrowded rooms that reeked and had no working plumbing.",
              "best_word": "Squalid",
              "plausible_distractor": "Sordid",
              "distractor_explanation": "Sordid is about moral sleaze; squalid is about physical filth and degraded living conditions — this scenario describes the latter."
            }
          ]
        }
      ]
    },
    {
      "id": "hearth",
      "name": "The Hearth",
      "theme": "Calming, yielding, and softening — but with very different sincerity and mechanics.",
      "words": [
        {
          "word": "Placate",
          "definition": "To manage someone's anger with a gesture, often without fixing the underlying cause — can be insincere.",
          "nuance_vs_synonym": "Unlike 'calm' (can be genuine), placate implies strategic management of anger, often cynical, without addressing the real issue.",
          "siblings": ["Assuage", "Relent"],
          "scenarios": [
            {
              "situation": "After mass layoffs, the CEO sent a vague email praising 'the resilience of our people,' changing nothing structurally.",
              "best_word": "Placate",
              "plausible_distractor": "Assuage",
              "distractor_explanation": "Assuage implies genuinely easing a feeling; placate implies a cynical gesture to manage anger without real resolution — this is the latter."
            }
          ]
        },
        {
          "word": "Assuage",
          "definition": "To genuinely ease or soothe a feeling — grief, guilt, anxiety, doubt.",
          "nuance_vs_synonym": "Unlike 'relieve' (functional, mechanical), assuage carries emotional gentleness — it's sincere care directed at a feeling.",
          "siblings": ["Placate"],
          "scenarios": [
            {
              "situation": "Nothing could fully ease her anxiety before the presentation, but a dry run helped.",
              "best_word": "Assuage",
              "plausible_distractor": "Placate",
              "distractor_explanation": "Placate implies managing someone else's anger, often insincerely; assuage implies genuinely soothing your own or another's real feeling."
            }
          ]
        },
        {
          "word": "Relent",
          "definition": "To soften from within after holding firm — an emotional give, usually under sustained pressure.",
          "nuance_vs_synonym": "Unlike 'give way' (can be sudden or forced externally), relent implies an internal softening of resolve over time.",
          "siblings": ["Capitulate", "Placate"],
          "scenarios": [
            {
              "situation": "The regulator held firm for months, then, worn down, finally agreed to the terms.",
              "best_word": "Relent",
              "plausible_distractor": "Capitulate",
              "distractor_explanation": "Capitulate is heavier and more formal, implying total surrender after resistance; relent is a softer, more personal give-in."
            }
          ]
        },
        {
          "word": "Capitulate",
          "definition": "To surrender after real resistance — heavier and more formal than 'give in'; implies the concession cost something.",
          "nuance_vs_synonym": "Unlike 'give in' (can be quick/light), capitulate carries the weight of prior struggle before yielding.",
          "siblings": ["Relent"],
          "scenarios": [
            {
              "situation": "Under sustained board pressure, she finally approved the acquisition she had opposed for months.",
              "best_word": "Capitulate",
              "plausible_distractor": "Relent",
              "distractor_explanation": "Relent is a softer, more personal easing of resolve; capitulate is the more formal, heavier surrender after prolonged resistance — fits a board fight."
            }
          ]
        }
      ]
    },
    {
      "id": "arena",
      "name": "The Arena",
      "theme": "Being moved to act — from a gentle nudge to a mass mobilisation.",
      "words": [
        {
          "word": "Prodded",
          "definition": "A gentle, well-timed poke or nudge into action — small, personal, low-force.",
          "nuance_vs_synonym": "Unlike 'pushed' (more forceful), prodded implies a light, individual nudge, not pressure or force.",
          "siblings": ["Galvanize", "Mobilise"],
          "scenarios": [
            {
              "situation": "A word from his mentor was all it took to finally get him to apply for the role.",
              "best_word": "Prodded",
              "plausible_distractor": "Galvanize",
              "distractor_explanation": "Galvanize implies a sudden emotional/electric jolt from a crisis or shock; prodded implies a small, gentle, personal nudge."
            }
          ]
        },
        {
          "word": "Galvanize",
          "definition": "A sudden emotional or electric jolt into action — crisis-driven, a spark.",
          "nuance_vs_synonym": "Unlike 'motivate' (builds gradually), galvanize implies a sudden shock activates people who were previously dormant.",
          "siblings": ["Prodded", "Mobilise"],
          "scenarios": [
            {
              "situation": "The leaked internal memo overnight turned a passive team into a demanding, energised one.",
              "best_word": "Galvanize",
              "plausible_distractor": "Mobilise",
              "distractor_explanation": "Mobilise implies organising a group into sustained, coordinated action; galvanize implies the sudden emotional spark that precedes it."
            }
          ]
        },
        {
          "word": "Mobilise",
          "definition": "To organise a mass into coordinated, sustained action — logistical and collective.",
          "nuance_vs_synonym": "Unlike 'gather' (lacks structure/purpose), mobilise implies deliberate organisation of people or resources toward a shared goal.",
          "siblings": ["Prodded", "Galvanize"],
          "scenarios": [
            {
              "situation": "The union organised ten thousand workers within a week for the planned strike.",
              "best_word": "Mobilise",
              "plausible_distractor": "Galvanize",
              "distractor_explanation": "Galvanize is the emotional spark that jolts people into action; mobilise is the actual logistical organisation of the group into coordinated motion."
            }
          ]
        }
      ]
    },
    {
      "id": "orchard",
      "name": "The Orchard",
      "theme": "Hunger, desire, and things kept just out of reach.",
      "words": [
        {
          "word": "Ravenous",
          "definition": "Insatiable, consuming appetite — animal, near-predatory; can apply to abstract desire too.",
          "nuance_vs_synonym": "Unlike 'hungry' or 'eager' (milder), ravenous implies a hunger that seeks to devour and is never fully satisfied.",
          "siblings": ["Tantalising"],
          "scenarios": [
            {
              "situation": "She had a hunger for recognition that no promotion ever seemed to fully satisfy.",
              "best_word": "Ravenous",
              "plausible_distractor": "Tantalising",
              "distractor_explanation": "Tantalising describes the lure that provokes desire; ravenous describes the consuming appetite/hunger itself."
            }
          ]
        },
        {
          "word": "Tantalising",
          "definition": "Tempting, but kept just out of reach — the desire it stirs cannot be immediately satisfied.",
          "nuance_vs_synonym": "Unlike 'tempting' (lacks the frustration), tantalising specifically implies the reward stays just beyond your grasp.",
          "siblings": ["Ravenous"],
          "scenarios": [
            {
              "situation": "The data showed just enough signs of a turnaround to keep investors hooked, never quite confirming it.",
              "best_word": "Tantalising",
              "plausible_distractor": "Ravenous",
              "distractor_explanation": "Ravenous describes an insatiable hunger/appetite; tantalising describes the lure that dangles a reward just out of reach — this is about the signal, not the hunger."
            }
          ]
        }
      ]
    },
    {
      "id": "asylum",
      "name": "The Asylum",
      "theme": "Altered states of responsiveness and being (un)rattled.",
      "words": [
        {
          "word": "Stupor",
          "definition": "A temporary daze — dulled, near-unconscious, from drink, shock, or exhaustion. Shakeable.",
          "nuance_vs_synonym": "Unlike 'confusion' (milder, clearer-eyed), stupor implies a deep, near-unconscious fog, usually temporary.",
          "siblings": ["Catatonic", "Fazed"],
          "scenarios": [
            {
              "situation": "He sat motionless for an hour after hearing the news, barely registering anything around him.",
              "best_word": "Stupor",
              "plausible_distractor": "Catatonic",
              "distractor_explanation": "Catatonic implies a severe, often clinical/psychiatric frozen rigidity; stupor is a lighter, more temporary daze from shock or exhaustion."
            }
          ]
        },
        {
          "word": "Catatonic",
          "definition": "A clinical term for frozen immobility — the body locks, often psychiatric or neurological. Far more severe than a daze.",
          "nuance_vs_synonym": "Unlike 'still' (ordinary), catatonic implies a severe, often medical, complete freeze — not shakeable like a stupor.",
          "siblings": ["Stupor"],
          "scenarios": [
            {
              "situation": "The patient stared blankly, completely unresponsive, unable to speak or move.",
              "best_word": "Catatonic",
              "plausible_distractor": "Stupor",
              "distractor_explanation": "Stupor is a temporary, shakeable daze; catatonic implies a more severe, clinical, locked immobility."
            }
          ]
        },
        {
          "word": "Fazed",
          "definition": "Rattled or thrown off composure — almost always used negatively, as 'unfazed'.",
          "nuance_vs_synonym": "Unlike 'worried' (a settled feeling), fazed implies a jolt to composure in the moment, not sustained anxiety.",
          "siblings": ["Stupor"],
          "scenarios": [
            {
              "situation": "The veteran pilot showed no reaction at all to the sudden turbulence and alarm.",
              "best_word": "Fazed",
              "plausible_distractor": "Catatonic",
              "distractor_explanation": "Catatonic implies severe frozen unresponsiveness (often clinical); fazed/unfazed is about being thrown off composure momentarily, which fits calm competence."
            }
          ]
        },
        {
          "word": "Abashed",
          "definition": "Embarrassed, ill-at-ease — often appears as 'unabashed' (shameless).",
          "nuance_vs_synonym": "Unlike 'shy' (a stable trait), abashed is a reaction to a specific embarrassing moment.",
          "siblings": ["Abasing"],
          "scenarios": [
            {
              "situation": "He stood there, cheeks burning, after calling his boss by the wrong name in front of everyone.",
              "best_word": "Abashed",
              "plausible_distractor": "Abasing",
              "distractor_explanation": "Abasing means humbling or degrading someone's status/rank; abashed means feeling embarrassed — a near-homophone with a very different meaning."
            }
          ]
        },
        {
          "word": "Abasing",
          "definition": "Humbling or degrading — lowering someone's (or one's own) rank or dignity.",
          "nuance_vs_synonym": "Unlike 'abashed' (a near-homophone meaning embarrassed), abasing is about lowering *status*, not feeling awkward.",
          "siblings": ["Abashed"],
          "scenarios": [
            {
              "situation": "He kept groveling before the committee, which only made him seem weaker, not more sympathetic.",
              "best_word": "Abasing",
              "plausible_distractor": "Abashed",
              "distractor_explanation": "Abashed means embarrassed/ill-at-ease; abasing means actively degrading one's own status through groveling — this scenario is about self-degradation."
            }
          ]
        }
      ]
    },
    {
      "id": "flatlands",
      "name": "The Flatlands",
      "theme": "Reluctance, dullness, and nonsense — the world of half-hearted giving and flatness.",
      "words": [
        {
          "word": "Begrudging",
          "definition": "Given reluctantly, and with resentment toward the person you're giving it to.",
          "nuance_vs_synonym": "Unlike 'reluctant' (just unwillingness), begrudging adds resentment specifically directed at another person.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "He clapped for his rival's win, but everyone could see how much it cost him to do it.",
              "best_word": "Begrudging",
              "plausible_distractor": "Lackluster",
              "distractor_explanation": "Lackluster means lacking energy/spark; begrudging specifically implies reluctant resentment directed at the person being applauded."
            }
          ]
        },
        {
          "word": "Lackluster",
          "definition": "Something that should have shone and didn't — flat, uninspired, below expectation.",
          "nuance_vs_synonym": "Unlike 'mediocre' (merely average, no expectations betrayed), lackluster implies a disappointment relative to what was hoped for.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "The board expected a dynamic update and instead got a flat slide deck read verbatim.",
              "best_word": "Lackluster",
              "plausible_distractor": "Begrudging",
              "distractor_explanation": "Begrudging implies reluctant resentment toward a person; lackluster implies a disappointing lack of energy or brilliance in a performance."
            }
          ]
        },
        {
          "word": "Tripe",
          "definition": "Nonsense or rubbish — worthless talk or writing (or literally, stomach lining).",
          "nuance_vs_synonym": "Unlike 'nonsense' (milder), tripe is dismissive and contemptuous.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "The self-serving report offered nothing of substance from start to finish.",
              "best_word": "Tripe",
              "plausible_distractor": "Lackluster",
              "distractor_explanation": "Lackluster describes something flat/uninspired; tripe is a much more contemptuous dismissal of something as worthless nonsense."
            }
          ]
        },
        {
          "word": "Ponderous",
          "definition": "Heavy, slow, and laboured — weighed down in movement or pace.",
          "nuance_vs_synonym": "Unlike 'boring' (about interest), ponderous is specifically about weight and slow pace, not whether it's engaging.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "Every sentence of the speech seemed to drag its feet, weighed down and slow.",
              "best_word": "Ponderous",
              "plausible_distractor": "Obtuse",
              "distractor_explanation": "Obtuse means slow to understand (a property of a mind); ponderous means heavy and slow-moving (a property of pace/weight) — this is about pacing."
            }
          ]
        },
        {
          "word": "Wretched",
          "definition": "Miserable and pitiable — evokes pity, often describes a whole person's state.",
          "nuance_vs_synonym": "Unlike 'sad' (milder), wretched implies abject suffering that evokes real pity.",
          "siblings": ["Abject"],
          "scenarios": [
            {
              "situation": "The huddled figure in the doorway had once been a respected partner at the firm.",
              "best_word": "Wretched",
              "plausible_distractor": "Abject",
              "distractor_explanation": "Abject emphasizes degradation to the lowest point (a condition); wretched emphasizes pitiableness and suffering (evokes sympathy for a person)."
            }
          ]
        },
        {
          "word": "Abject",
          "definition": "Degraded to the humiliating bottom — only intensifies bad states, never positive ones.",
          "nuance_vs_synonym": "Unlike 'total' (lacks moral debasement), abject implies humiliation and degradation, not just completeness.",
          "siblings": ["Wretched"],
          "scenarios": [
            {
              "situation": "The relaunch, hyped for months, was pulled from shelves within two weeks — a total embarrassment.",
              "best_word": "Abject",
              "plausible_distractor": "Wretched",
              "distractor_explanation": "Wretched emphasizes pitiableness of a person/figure; abject emphasizes the humiliating completeness of a failure or condition."
            }
          ]
        }
      ]
    },
    {
      "id": "chapel",
      "name": "The Chapel",
      "theme": "Belief, irritation, and the unsettling — reactions of disbelief, indignation, and unease.",
      "words": [
        {
          "word": "Incredulous",
          "definition": "The state of being unable to believe something — describes the person reacting.",
          "nuance_vs_synonym": "Unlike 'incredible' (describes the unbelievable thing itself), incredulous describes the *person's* disbelief. Don't swap them.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "She stared at him, unable to accept that he actually expected her to agree to this.",
              "best_word": "Incredulous",
              "plausible_distractor": "Disconcerting",
              "distractor_explanation": "Disconcerting describes something unsettling; incredulous describes a person's inability to believe something — this scenario is about her reaction, not the situation's unsettling quality."
            }
          ]
        },
        {
          "word": "Disconcerting",
          "definition": "Unsettling — throws you off balance.",
          "nuance_vs_synonym": "Unlike 'annoying' (mere friction), disconcerting destabilises your sense of footing or expectation.",
          "siblings": ["Galling"],
          "scenarios": [
            {
              "situation": "There was an odd, unsettling gap between what he said and the tone he said it in.",
              "best_word": "Disconcerting",
              "plausible_distractor": "Galling",
              "distractor_explanation": "Galling implies irritation plus a sense of injustice; disconcerting implies something that throws you off balance or unsettles you, without necessarily feeling unjust."
            }
          ]
        },
        {
          "word": "Galling",
          "definition": "Irritation plus wounded pride and a sense of injustice — you feel you shouldn't have to endure it.",
          "nuance_vs_synonym": "Unlike 'irritating' (mild friction), galling carries indignation — an injustice you resent having to bear.",
          "siblings": ["Disconcerting", "Aggravate"],
          "scenarios": [
            {
              "situation": "A junior colleague who had never spoken to the client got full credit for months of her work.",
              "best_word": "Galling",
              "plausible_distractor": "Disconcerting",
              "distractor_explanation": "Disconcerting is about being unsettled/thrown off; galling specifically adds a sense of injustice and wounded pride, which fits this situation better."
            }
          ]
        },
        {
          "word": "Aggravate",
          "definition": "To worsen something already bad — in careful usage, not merely 'annoy'.",
          "nuance_vs_synonym": "Unlike 'exacerbate' (the more clinical, precise twin for worsening a condition), aggravate has drifted colloquially toward meaning 'annoy'.",
          "siblings": ["Galling"],
          "scenarios": [
            {
              "situation": "Poor communication only made an already tense situation worse.",
              "best_word": "Aggravate",
              "plausible_distractor": "Galling",
              "distractor_explanation": "Galling describes a feeling of irritation plus injustice; aggravate describes the act of worsening a situation or condition — different function entirely."
            }
          ]
        }
      ]
    },
    {
      "id": "counting_house",
      "name": "The Counting House",
      "theme": "Change, reckoning, and deliberation — shifting the balance of a decision, weighing it, or retelling it.",
      "words": [
        {
          "word": "Tilts the calculus",
          "definition": "The real, underlying balance of a decision genuinely shifts.",
          "nuance_vs_synonym": "Unlike 'distorts the trade-off' (where perception is warped), tilting the calculus means the actual weights of the decision have changed.",
          "siblings": ["Distorts the trade-off"],
          "scenarios": [
            {
              "situation": "A new tax incentive genuinely changed which option now made more financial sense.",
              "best_word": "Tilts the calculus",
              "plausible_distractor": "Distorts the trade-off",
              "distractor_explanation": "Distorts the trade-off implies a *wrong perception* of the balance; tilts the calculus implies the *real* balance has legitimately shifted."
            }
          ]
        },
        {
          "word": "Distorts the trade-off",
          "definition": "Perception of the balance is warped — the decision-maker now weighs the options wrongly.",
          "nuance_vs_synonym": "Unlike 'tilts the calculus' (real balance moved), this implies a flaw in judgment — the true weights haven't changed, but perception has.",
          "siblings": ["Tilts the calculus"],
          "scenarios": [
            {
              "situation": "Misleading data made the team believe one option was safer than it actually was.",
              "best_word": "Distorts the trade-off",
              "plausible_distractor": "Tilts the calculus",
              "distractor_explanation": "Tilts the calculus means the real balance shifted; distorts the trade-off means the perception of the balance became inaccurate — this is about misleading data, so perception is what's wrong."
            }
          ]
        },
        {
          "word": "Vagaries of the",
          "definition": "Unpredictable swings of impersonal forces or circumstance — no agent or will involved.",
          "nuance_vs_synonym": "Unlike 'capriciousness' (implies a mind behaving on whim), vagaries describes blind, systemic randomness with no one choosing.",
          "siblings": ["Capricious"],
          "scenarios": [
            {
              "situation": "Farmers' fortunes rise and fall with the unpredictable patterns of the monsoon each year.",
              "best_word": "Vagaries of the",
              "plausible_distractor": "Capricious",
              "distractor_explanation": "Capricious implies an agent's mood-driven unpredictability; vagaries describes impersonal, agentless fluctuation — weather has no will."
            }
          ]
        },
        {
          "word": "Capricious",
          "definition": "Unpredictable specifically from mood and whim — an agent is implied.",
          "nuance_vs_synonym": "Unlike 'unpredictable' (neutral, agentless), capricious implies a person's erratic mood is driving the change.",
          "siblings": ["Vagaries of the"],
          "scenarios": [
            {
              "situation": "A senior partner approves a plan on Monday, questions it Wednesday, and kills it Friday, for no new reason.",
              "best_word": "Capricious",
              "plausible_distractor": "Vagaries of the",
              "distractor_explanation": "Vagaries describes impersonal, agentless swings (like weather or markets); capricious specifically implies a person's erratic will/mood is behind the change."
            }
          ]
        },
        {
          "word": "Mulling it over",
          "definition": "Deliberating forward toward a decision — weighing angles before choosing.",
          "nuance_vs_synonym": "Unlike 'recounting' (retells the past), mulling faces forward, toward an unresolved decision.",
          "siblings": ["Recounting"],
          "scenarios": [
            {
              "situation": "She spent the whole evening weighing the offer from every possible angle before deciding.",
              "best_word": "Mulling it over",
              "plausible_distractor": "Recounting",
              "distractor_explanation": "Recounting retells past events; mulling it over is deliberating toward a future decision — this is about pre-decision weighing, not storytelling."
            }
          ]
        },
        {
          "word": "Recounting",
          "definition": "Retelling past events in detail — faces backward. Also: to count again.",
          "nuance_vs_synonym": "Unlike 'mulling' (faces forward toward a decision), recounting narrates something that already happened.",
          "siblings": ["Mulling it over"],
          "scenarios": [
            {
              "situation": "At dinner he kept retelling every single detail of what had happened on the trip.",
              "best_word": "Recounting",
              "plausible_distractor": "Mulling it over",
              "distractor_explanation": "Mulling it over is forward-facing deliberation toward a decision; recounting is backward-facing narration of past events — this is storytelling, not deciding."
            }
          ]
        },
        {
          "word": "Wean",
          "definition": "To gradually withdraw a dependence until it's no longer needed — never abrupt.",
          "nuance_vs_synonym": "Unlike 'stop' (can be sudden), wean is always a careful, gradual withdrawal of reliance.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "Over six months, the team was slowly moved off the old legacy system.",
              "best_word": "Wean",
              "plausible_distractor": "Relent",
              "distractor_explanation": "Relent means to soften one's own resolve after resistance; wean means gradually removing someone else's dependence on something — different subjects entirely."
            }
          ]
        },
        {
          "word": "Begets",
          "definition": "Gives birth to the next thing in a chain — generational, almost biblical weight.",
          "nuance_vs_synonym": "Unlike 'causes' (mechanical, flat), begets implies a lineage — each thing is the 'offspring' of the one before it.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "Bad policy creates resentment, which in turn creates even worse policy, in an ongoing cycle.",
              "best_word": "Begets",
              "plausible_distractor": "Foment",
              "distractor_explanation": "Foment stirs unrest in people directly; begets describes a generational chain where each bad outcome gives rise to the next, like an inheritance."
            }
          ]
        }
      ]
    },
    {
      "id": "archive",
      "name": "The Archive",
      "theme": "Knowledge, wit, and scale — insider knowledge, slow wits, and words of scope and shape.",
      "words": [
        {
          "word": "Esoteric",
          "definition": "Hard for outsiders specifically — insider-only knowledge, by nature or design.",
          "nuance_vs_synonym": "Unlike 'obscure' (can be little-known by mere accident), esoteric implies the knowledge is naturally or deliberately confined to a select circle.",
          "siblings": ["Obtuse"],
          "scenarios": [
            {
              "situation": "His deep knowledge of a niche legal point was of use to maybe a dozen people worldwide.",
              "best_word": "Esoteric",
              "plausible_distractor": "Obtuse",
              "distractor_explanation": "Obtuse describes a dull, slow-to-understand mind; esoteric describes knowledge confined to a small circle of insiders — different subject entirely."
            }
          ]
        },
        {
          "word": "Obtuse",
          "definition": "Slow to understand — a dull mind. (Also: an angle over 90 degrees.)",
          "nuance_vs_synonym": "Unlike 'ponderous' (about heaviness/pace), obtuse is specifically about a failure of comprehension.",
          "siblings": ["Esoteric"],
          "scenarios": [
            {
              "situation": "He kept pretending not to understand the obvious point, just to avoid answering it.",
              "best_word": "Obtuse",
              "plausible_distractor": "Ponderous",
              "distractor_explanation": "Ponderous means heavy and slow-moving; obtuse means slow to understand — this is about deliberate dimness of comprehension, not pace."
            }
          ]
        },
        {
          "word": "Consortium",
          "definition": "A formal alliance of independent parties for a shared venture.",
          "nuance_vs_synonym": "Unlike 'partnership' (looser, usually smaller), a consortium is formal and built around a specific joint undertaking.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "Six independent firms banded together formally to jointly bid on a massive infrastructure project.",
              "best_word": "Consortium",
              "plausible_distractor": "Hegemonic",
              "distractor_explanation": "Hegemonic describes dominance that sets the rules for others; consortium describes a formal alliance of equals for a shared venture — very different structures."
            }
          ]
        },
        {
          "word": "Archipelago",
          "definition": "A chain or cluster of islands; figuratively, a scattered set of related things.",
          "nuance_vs_synonym": "Unlike 'group' (lacks the scattered-yet-linked image), archipelago implies pieces that are separate yet connected as a system.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "The company operated as a set of semi-independent studios, each doing its own thing but loosely connected.",
              "best_word": "Archipelago",
              "plausible_distractor": "Consortium",
              "distractor_explanation": "Consortium implies a formal, deliberate alliance for one venture; archipelago implies a looser, scattered-yet-linked collection — better fits semi-independent studios."
            }
          ]
        },
        {
          "word": "Perforated",
          "definition": "Pierced with a pattern or series of holes, often purposeful.",
          "nuance_vs_synonym": "Unlike 'pierced' (a single puncture), perforated implies multiple, often regular, holes.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "The sheet of stamps was designed so each one could be torn off cleanly along a line of small holes.",
              "best_word": "Perforated",
              "plausible_distractor": "Mutilate",
              "distractor_explanation": "Mutilate implies violent disfigurement; perforated implies a clean, often purposeful pattern of holes — very different in intent and effect."
            }
          ]
        },
        {
          "word": "Gorge",
          "definition": "A natural, deep, narrow ravine carved by water over time (noun); or to eat greedily (verb).",
          "nuance_vs_synonym": "Unlike 'valley' (broader, gentler), a gorge is narrow, steep-sided, and specifically carved by a river.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "The river had carved a deep, narrow channel through solid rock over ten thousand years.",
              "best_word": "Gorge",
              "plausible_distractor": "Quagmire",
              "distractor_explanation": "Quagmire is a boggy, trapping swamp; gorge is a narrow, steep, river-carved ravine — entirely different landforms."
            }
          ]
        },
        {
          "word": "Furore",
          "definition": "A loud, sudden public uproar.",
          "nuance_vs_synonym": "Unlike 'controversy' (can simmer quietly), furore is noisy, sudden, and fast-moving.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "Within forty-eight hours of the announcement, angry op-eds and resignation demands were everywhere.",
              "best_word": "Furore",
              "plausible_distractor": "Quandary",
              "distractor_explanation": "Quandary is a quiet, internal, personal dilemma; furore is a loud, sudden, public uproar — entirely different register and scale."
            }
          ]
        },
        {
          "word": "Swept across the planet",
          "definition": "Spread with force and unstoppability — dramatic, unresisted.",
          "nuance_vs_synonym": "Unlike 'spread' (flat, neutral), 'swept' adds motion, speed, and inevitability, like a wave or fire.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "Within months, the pandemic had reached every continent with no corner of the globe untouched.",
              "best_word": "Swept across the planet",
              "plausible_distractor": "Mobilise",
              "distractor_explanation": "Mobilise is about organising people/resources into action; swept across the planet is about force and unstoppable spread — this is about a disease's reach, not organisation."
            }
          ]
        },
        {
          "word": "Receptacle",
          "definition": "A container or holder; figuratively, something that absorbs what others put into it.",
          "nuance_vs_synonym": "Unlike 'container' (purely physical), receptacle can figuratively describe a person or thing that absorbs others' emotions or ideas.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "Over the years he had quietly become the one person the whole family offloaded their anxieties onto.",
              "best_word": "Receptacle",
              "plausible_distractor": "Trappings",
              "distractor_explanation": "Trappings are outward symbols of status; receptacle is something (or someone) that absorbs what's put into it — this is about absorbing others' emotions, not displaying status."
            }
          ]
        },
        {
          "word": "Trappings",
          "definition": "The outward symbols of a status — surface, not substance. (Not 'traps'.)",
          "nuance_vs_synonym": "Unlike 'signs' (neutral), trappings hints that the substance behind the symbols may be hollow.",
          "siblings": ["Receptacle"],
          "scenarios": [
            {
              "situation": "She had the title, the assistant, and the reserved parking spot, but none of the real decision-making power.",
              "best_word": "Trappings",
              "plausible_distractor": "Receptacle",
              "distractor_explanation": "Receptacle describes something that absorbs/holds content; trappings describes the outward symbols of status without necessarily the substance — this is about hollow status symbols."
            }
          ]
        }
      ]
    },
    {
      "id": "throne_room",
      "name": "The Throne Room",
      "theme": "Rebellion and formal alliance — turning against, or joining with, authority.",
      "words": [
        {
          "word": "Mutiny",
          "definition": "Open revolt by those sworn to obey — implies an existing command structure.",
          "nuance_vs_synonym": "Unlike 'rebellion' (any uprising), mutiny specifically implies people under obligation to obey who have betrayed that obligation.",
          "siblings": ["Ostracise"],
          "scenarios": [
            {
              "situation": "The crew refused the captain's orders mid-voyage and seized control of the ship.",
              "best_word": "Mutiny",
              "plausible_distractor": "Ostracise",
              "distractor_explanation": "Ostracise means to collectively banish someone; mutiny means to revolt against a command structure you were sworn to obey — different actions entirely."
            }
          ]
        },
        {
          "word": "Skirting",
          "definition": "Going around the edge of something deliberately — avoiding it without confronting it directly.",
          "nuance_vs_synonym": "Unlike 'avoiding' (broader), skirting implies a deliberate near-approach that never actually engages with the thing.",
          "siblings": [],
          "scenarios": [
            {
              "situation": "His answer kept circling near the ethical issue without ever actually addressing it.",
              "best_word": "Skirting",
              "plausible_distractor": "Mired",
              "distractor_explanation": "Mired means stuck within an entangling mess; skirting means deliberately going around an issue without engaging it directly — different mechanics."
            }
          ]
        }
      ]
    },
    {
      "id": "square",
      "name": "The Square",
      "theme": "Moral and social weight — the unwritten rules of a group and the foundational bargains of society.",
      "words": [
        {
          "word": "Social mores",
          "definition": "The unwritten customs and moral norms of a group — quiet but binding.",
          "nuance_vs_synonym": "Unlike 'rules' (explicit), mores are implicit, unwritten, and enforced socially rather than formally.",
          "siblings": ["Social contract"],
          "scenarios": [
            {
              "situation": "No policy forbade it, yet no one in the office ever sent an email after 9pm.",
              "best_word": "Social mores",
              "plausible_distractor": "Social contract",
              "distractor_explanation": "Social contract is a political-philosophy term about the citizen-state bargain; social mores are everyday, unwritten customs of a specific group — this is workplace etiquette."
            }
          ]
        },
        {
          "word": "Social contract",
          "definition": "The foundational, often implicit bargain between citizens and governing authority — freedoms ceded for order and protection.",
          "nuance_vs_synonym": "Unlike 'social mores' (everyday customs), the social contract is a political-philosophy concept about the basis of legitimate authority.",
          "siblings": ["Social mores"],
          "scenarios": [
            {
              "situation": "Philosophers have long argued that legitimate government rests on an implicit agreement between rulers and the ruled.",
              "best_word": "Social contract",
              "plausible_distractor": "Social mores",
              "distractor_explanation": "Social mores are everyday group customs; social contract is the specific political-philosophy term for the citizen-state bargain underpinning legitimate authority."
            }
          ]
        }
      ]
    }
  ]
}
;
