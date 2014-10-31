// Italian translation of data for elizabot.js
// original English version here: http://www.masswerk.at/elizabot/index.html
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Come va? Mi dica il suo problema",
// additions (not original)
"Per favore, mi dica cosa la turba",
"C'è qualcosa che la turba?"
];

var elizaFinals = [
"Arrivederci. È stato piacevole parlare con lei",
// additions (not original)
"Arrivederci.  È stata una piacevole chiacchierata",
"Arrivederci.  Non vedo l'ora di un nuovo incontro.",
"È stato un bell'incontro, vero? Ma il tempo è finito.   Arrivederci.",
"Forse vorresti parlarne di più in un prossimo incontro ?   Arrivederci."
];

var elizaQuits = [
"arrivederci",
"addio",
"finito",
"exit",
"quit"
];

var elizaPres = [
"ricordo", "ricordare",
"rammento", "ricordare",
"sognai", "sognato",
"sogni", "sogno",
"magari", "forse",
"certamente", "si",
"macchina", "computer",
"macchine", "computer",
"eri", "ero",
"uguale", "stesso",
"identico", "stesso",
"equivalente", "stesso"
];

var elizaPosts = [
"sono", "è",
"suo", "mio",
"me", "lei",
"me stesso", "lei stesso",
"lei stesso", "me stesso",
"io", "lei",
"lei", "io",
"mio", "suo",
"io sono", "lei è"
];

var elizaSynons = {
"essere": ["sono", "è", "siamo", "ero"],
"credenza": ["sensazione", "pensiero", "sento", "voglio","sento","credo"],
"desiderio": ["voglio", "bisogno"],
"tutti": ["chiunque", "nessuno", "ognuno"],
"famiglia": ["madre", "mamma", "padre", "papà", "sorella", "fratello", "moglie", "bambino", "bambini", "suocera", "suocero","zio","ragazza","ragazzo"],
"felice": ["contento", "sereno", "soddisfatto"],
"triste": ["infelice", "depresso", "stufo", "turbato"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "Non credo di capire bene.",
     "Per favore continui.",
     "E questo che cosa le suggerisce ?",
     "Sente il bisogno di parlare di queste cose?",
     "Questo è interessante. La prego, continui.",
     "Mi dica di più su questo.",
     "La turba parlarne ?"
  ]],
  ["* @famiglia *", [
  "goto famiglia"]]
  
]],

["famiglia", 1, [
  ["*@famiglia*", [
         "Come si è evoluto il vostro rapporto nel tempo ?",
         "Si tratta di relazioni difficili ?"
      ]
  ],
]],



["scusi", 0, [
 ["*", [
     "La prego, non chieda scusa.",
     "Le scuse non sono necessarie.",
     "Le ho detto che non deve scusarsi",
     "Non mi ha dato fastidi. La prego continui."
  ]]
]],
["scusa", 0, [
 ["*", [
     "goto scusi"
  ]]
]],
["ricordare", 5, [
 ["* ricordo *", [
     "Pensa spesso a (2) ?",
     "Pensare a (2) le ricorda altre cose ?",
     "Che cos'altro ricorda ?",
     "Sta pensando a (2) adesso ?",
     "Che cosa in questo momento la fa pensare a (2) ?",
     "Che connessione c'è tra me e  (2) ?",
     "Pensare a (2) le ricorda altre cose ?"
  ]],
 ["* si ricorda *", [
     "Pensa che scorderei (2) ?",
     "Perché pensa che dovrei ricordare (2) ora ?",
     "E riguardo a (2) ?",
     "goto cosa",
     "Si riferisce a (2) ?"
  ]],
 ["* si ricorda *", [
     "Come potrei dimenticare (2) ?",
     "Che cosa dovrei ricordare di (2) ?",
     "goto lei"
  ]]
]],
["dimenticare", 5, [
 ["* dimenticato *", [
     "Perché pensa di avere dimenticato (2) ?",
     "Perché non può ricordare (2) ?",
     "Quanto spesso pensa a (2) ?",
     "La preoccupa dimenticarlo?",
     "Potrebbe essere un blocco mentale ?",
     "Lei è generalmente smemorato ?",
     "Pensa di stare sopprimendo il ricordo di(2) ?"
  ]],
 ["* hai dimenticato *", [
     "Perché lo chiede?",
     "Sarebbe meglio se io dimenticassi (2) ?",
     "goto cosa",
     "Mi dica di più su (2)."
  ]]
]],
["se", 3, [
 ["* se *", [
     "Pensa che sia probabile (2) ?",
     "Vorrebbe che (2) ?",
     "Cosa sa dirmi di (2) ?",
     "Davvero, se (2) ?",
     "Che cosa farebbe se (2) ?",
     "Quanto è plausibile che (2) ?",
     "A che cosa ci portano queste speculazioni ?"
  ]]
]],
["sognato", 4, [
 ["* sognato*", [
     "Davvero, (2) ?",
     "Ha mai fantasticato su (2) fuori dal sonno ?",
     "Aveva mai sognato (2) prima ?",
     "goto sognare"
  ]]
]],
["sogno", 3, [
 ["*", [
     "Che cosa le suggerisce questo sogno?",
     "Sogna spesso ?",
     "Che persone appaiono nei suoi sogni ?",
     "Pensa che questi sogni abbiano a che fare con i suoi problemi ?"
  ]]
]],
["forse", 0, [
 ["*", [
     "Non mi sembra molto sicuro.",
     "Perché questo tono insicuro ?",
     "Può essere più positivo?",
     "Non è certa ?",
     "Non lo sa ?",
     "Quanto è possibile, secondo lei ?"
  ]]
]],
["nome", 15, [
 ["*", [
     "Non mi interessano i nomi.",
     "L'ho già detto, non mi interessano i nomi -- per favore continui."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "Le ricordo che non parlo tedesco."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "Le ricordo che non parlo francese."
  ]]
]],
["english", 0, [
 ["*", [
     "goto xforeign",
     "Le ricordo che non parlo inglese."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "Le ricordo che non parlo spagnolo."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "Parlo solo italiano."
  ]]
]],
["salve", 0, [
 ["*", [
     "Come va? Per favore, mi dica il suo problema.",
     "Salve.  Qual è il problema ?"
  ]]
]],
["computer", 50, [
 ["*", [
     "I computer la spaventano ?",
     "Perché mi parla di computer ?",
     "Cosa pensa che abbiano a che fare le macchine con il suo problema ?",
     "Non pensa che i computer possano aiutare la gente ?",
     "Cosa le preoccupa delle macchine ?",
     "Cosa pensa delle macchine ?",
     "Non penserà che io sia un software, vero ?"
  ]]
]],
["sono", 0, [
 ["* sono *", [
     "Pensa di essere (2) ?",
     "Vorrebbe essere (2) ?",
     "Le piacerebbe se le dicessi che lei è (2) ?",
     "Cosa comporterebbe essere (2) ?",
     "goto cosa"
  ]],
 ["* sono *", [
     "goto io"
  ]],
 ["*", [
     "Perché dice 'sono' ?",
     "Non lo capisco."
  ]]
]],
["sei", 0, [
 ["* sei *", [
     "Perché mi chiede se sono (2) ?",
     "Preferirebbe che non fossi (2) ?",
     "Forse sono (2) nelle sue fantasticherie.",
     "Le capita di pensare che io sia (2) ?",
     "goto cosa",
     "Le creerebbe turbamento ?",
     "E se io fossi (2) ?"
  ]],
 ["* sei *", [
     "goto lei"
  ]],
]],
["tuo", 0, [
 ["* tuo *", [
     "Perché si preoccupa del mio (2) ?",
     "E che mi dice del suo (2) ?",
     "Si preoccupa del (2) altrui?",
     "Davvero, il mio (2) ?",
     "Cosa la porta a pensare al mio (2) ?",
     "Vuole il mio (2) ?"
  ]],
   ["* tua *", [
      "Perché si preoccupa della mia (2) ?",
     "E che mi dice della sua (2) ?",
     "Si preoccupa della (2) altrui?",
     "Davvero, la mia (2) ?",
     "Cosa la porta a pensare alla mia (2) ?",
     "Vuole la mia (2) ?"
  ]]
]],
["ero", 2, [
 ["* ero *", [
     "E se lei fosse (2) ?",
     "Pensa di essere stato (2) ?",
     "Era (2) ?",
     "Cosa comporta essere (2) ?",
     "Il termine ' (2) ' cosa le suggerisce ?",
     "goto cosa"
  ]]
]],
["io", 0, [
 ["* io @desiderio *", [
     "Cosa significherebbe per lei ottenere (3) ?",
     "Perché vuole (3) ?",
     "Immagini di avere (3) a breve.",
     "E se non avesse mai (3) ?",
     "Avere (3) cosa a che vedere con questa discussione ?"
  ]],
 ["* sono* @triste *", [
     "Mi dispiace saperla (3).",
     "Pensa che parlare con me l'aiuterà a non essere più (3) ?",
     "Non dev'essere bello essere (3).",
     "Mi può dire che cosa l'ha resa (3) ?"
  ]],
 ["* sono* @felice *", [
     "Come l'ho aiutata a essere (3) ?",
     "Il trattamento l'ha aiutata a essere (3) ?",
     "Cosa la rende (3) in questo momento ?",
     "Mi può spiegare perché è improvvisamente(3) ?"
  ]],
 ["* ero *", [
     "goto ero"
  ]],
 ["* @credenza *", [
     "Lo crede davvero ?",
     "Ma non è sicuro che (3).",
     "Dubita davvero che (3) ?"
  ]],
 ["* * @credenza *tu *", [
     "goto lei"
  ]],
 ["* sono *", [
     "È venuto da me perché è (2) ?",
     "Da quanto è (2) ?",
     "Pensa sia normale essere (2) ?",
     "Le piace essere(2) ?",
     "Conosce altri che sono (2) ?"
  ]],
 ["* non posso *", [
     "Come sa di non potere (3) ?",
     "Ha provato ?",
     "Magari potrebbe (3) ora.",
     "Vuole davvero poter(3) ?",
     "E se potesse (3) ?"
  ]],
 ["* sento *", [
     "Mi dica di più su queste sensazioni.",
     "Si sente spesso (2) ?",
     "Le piace sentire (2) ?",
     "Che cosa le ricorda sentirsi (2) ?"
  ]],
 ["*", [
     "Dice (1) ?",
     "Mi può spiegare meglio ?",
     "Dice (1) per qualche motivo particolare ?",
     "Molto interessante."
  ]]
]],
["lei", 0, [
 ["* mi ricorda *", [
     "goto come"
  ]],
 ["* tu sei *", [
     "Perché mi chiede se sono (2) ?",
     "Preferirebbe che non fossi (2) ?",
     "Forse sono (2) nelle sue fantasticherie.",
     "Le capita di pensare che io sia (2) ?",
     "goto cosa",
     "Le creerebbe turbamento ?",
     "E se io fossi (2) ?"
  ]],
  ["* lei è *", [
     "Perché mi chiede se sono (2) ?",
     "Preferirebbe che non fossi (2) ?",
     "Forse sono (2) nelle sue fantasticherie.",
     "Le capita di pensare che io sia (2) ?",
     "goto cosa",
     "Le creerebbe turbamento ?",
     "E se io fossi (2) ?"
  ]],
 ["* tu *", [
     "Si parla di lei, non di me.",
     "Ah, io (2) ?",
     "Non parla di me, vero ?",
     "Come si sente ora ?"
  ]],
  ["* lei *", [
     "Si parla di lei, non di me.",
     "Ah, io (2) ?",
     "Non parla di me, vero ?",
     "Come si sente ora ?"
  ]]
]],
["si", 0, [
 ["*", [
     "Mi sembra positivo.",
     "Lei è sicuro.",
     "Vedi.",
     "Capisco."
  ]]
]],
["no", 0, [
 ["* nessuno *", [
     "Sicuro, nessuno (2) ?",
     "Forse qualcuno (2) .",
     "Proprio nessuno ?",
     "Pensa a una persona speciale ?"
  ]],
  ["*invece*", [
     "non concorda con me, vedo",
     "Magari mi sbaglio",
     "Potrebbe avere ragione lei"
  ]],
 ["*", [
     "Sta cercando solo di essere negativo?",
     "Si sta comportando in maniera negativa.",
     "Perché no ?",
  ]]
]],
["mio", 2, [
 ["$ * mio *", [
     "Ha a che vedere con il suo (2) ?",
     "Parliamo del suo (2).",
     "Prima ha detto del suo (2).",
     "Ma il suo(2)."
  ]],
 ["* mio* @famiglia *", [
     "Mi dica di più della sua famiglia.",
     "Chi altro nella sua famiglia (4) ?",
     "Suo (3) ?",
     "Cosa altro le viene in mente riguardo a suo (3) ?"
  ]],
 ["* mio *", [
     "Il suo (2) ?",
     "Perché mi parla del suo (2) ?",
     "Il suo (2) è importante?"
  ]]
]],
["posso", 0, [
 ["* può *", [
     "Pensa che io possa (2) , vero?",
     "goto cosa",
     "Vuole che io (2).",
     "Forse le piacerebbe potere (2)."
  ]]
]],
["cosa", 0, [
 ["*", [
     "Perché lo chiede ?",
     "Questa domanda le interessa ?",
     "Che cosa vuole davvero sapere ?",
     "Si chiede spesso queste cose ?",
     "Che risposta le darebbe più piacere ?",
     "Cosa ne pensa ?",
     "A cosa pensa quando lo chiede ?",
     "Si è mai chiesto queste cose prima ?",
     "Ha mai chiesto a altri ?"
  ]]
]],
["chi", 0, [
 ["chi *", [
     "goto cosa"
  ]]
]],
["quando", 0, [
 ["quando *", [
     "goto cosa"
  ]]
]],
["dove", 0, [
 ["dove *", [
     "goto cosa"
  ]]
]],
["perché ", 0, [
 ["*", [
     "È quello il vero motivo ?",
     "Non le vengono in mente altri motivi ?",
     "Pensa che questa motivazione spieghi tutto ?",
     "Ci potrebbero essere altre ragioni ?"
  ]]
]],
["perché", 0, [
 ["* perché lei non *", [
     "Pensa che io non (2) ?",
     "Forse lo farò a breve.",
     "Dovrebbe essere lei a (2) ?",
     "goto cosa"
  ]],
 ["*", [
     "goto cosa"
  ]]
]],
["tutti", 2, [
 ["* @tutti *", [
     "Davvero, (2) ?",
     "Sicuramente non (2).",
     "Pensa a qualcuno in particolare ?",
     "Chi, per esempio?",
     "Pensa a una persona molto speciale ?",
     "Chi, se posso chiedere ?",
     "Forse qualcuno di speciale ?",
     "Ha una persona particolare in mente, vero ?",
     "Di chi pensa di stare parlando ?"
  ]]
]],
["ognuno", 2, [
 ["*", [
     "goto leitti"
  ]]
]],
["chiunque", 2, [
 ["*", [
     "goto leitti"
  ]]
]],
["nessuno", 2, [
 ["*", [
     "goto leitti"
  ]]
]],
["sempre", 1, [
 ["*", [
     "Può pensare a un esempio specifico ?",
     "Quando ?",
     "A che caso specifico sta pensando ?",
     "Sempre, sul serio ?"
  ]]
]],
["come", 10, [
 ["*", [
     "In che modo ?",
     "Che similitudini vede ?",
     "Cosa le suggerisce questa similitudine ?",
     "Che altre similitudini vede ?",
     "Cosa crede che indichi questa similitudine ?",
     "Secondo lei qual è la connessione ?",
     "Potrebbe esserci una connessione ?",
     "Come ?"
  ]]
]],
["diverso", 0, [
 ["*", [
     "In cosa è diverso ?",
     "Che differenza vede ?",
     "Questa differenza che cosa le suggerisce?",
     "Che altre distinzioni vede ?",
     "Cosa crede che indichi questa differenza ?",
     "Ci potrebbe essere qualche collegamento, dice ?",
     "Come ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof