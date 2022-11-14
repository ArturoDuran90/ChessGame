// All possible starting positions
var positions = {
    "000":"BBQNNRKR", 
    "001":"BQNBNRKR", 
    "002":"BQNNRBKR", 
    "003":"BQNNRKRB", 
    "004":"QBBNNRKR", 
    "005":"QNBBNRKR", 
    "006":"QNBNRBKR", 
    "007":"QNBNRKRB", 
    "008":"QBNNBRKR", 
    "009":"QNNBBRKR", 
    "010":"QNNRBBKR", 
    "011":"QNNRBKRB", 
    "012":"QBNNRKBR", 
    "013":"QNNBRKBR", 
    "014":"QNNRKBBR", 
    "015":"QNNRKRBB", 
    "016":"BBNQNRKR", 
    "017":"BNQBNRKR", 
    "018":"BNQNRBKR", 
    "019":"BNQNRKRB", 
    "020":"NBBQNRKR", 
    "021":"NQBBNRKR", 
    "022":"NQBNRBKR", 
    "023":"NQBNRKRB", 
    "024":"NBQNBRKR", 
    "025":"NQNBBRKR", 
    "026":"NQNRBBKR", 
    "027":"NQNRBKRB", 
    "028":"NBQNRKBR", 
    "029":"NQNBRKBR", 
    "030":"NQNRKBBR", 
    "031":"NQNRKRBB", 
    "032":"BBNNQRKR", 
    "033":"BNNBQRKR", 
    "034":"BNNQRBKR", 
    "035":"BNNQRKRB", 
    "036":"NBBNQRKR", 
    "037":"NNBBQRKR", 
    "038":"NNBQRBKR", 
    "039":"NNBQRKRB", 
    "040":"NBNQBRKR", 
    "041":"NNQBBRKR", 
    "042":"NNQRBBKR", 
    "043":"NNQRBKRB", 
    "044":"NBNQRKBR", 
    "045":"NNQBRKBR", 
    "046":"NNQRKBBR", 
    "047":"NNQRKRBB", 
    "048":"BBNNRQKR", 
    "049":"BNNBRQKR", 
    "050":"BNNRQBKR", 
    "051":"BNNRQKRB", 
    "052":"NBBNRQKR", 
    "053":"NNBBRQKR", 
    "054":"NNBRQBKR", 
    "055":"NNBRQKRB", 
    "056":"NBNRBQKR", 
    "057":"NNRBBQKR", 
    "058":"NNRQBBKR", 
    "059":"NNRQBKRB", 
    "060":"NBNRQKBR", 
    "061":"NNRBQKBR", 
    "062":"NNRQKBBR", 
    "063":"NNRQKRBB", 
    "064":"BBNNRKQR", 
    "065":"BNNBRKQR", 
    "066":"BNNRKBQR", 
    "067":"BNNRKQRB", 
    "068":"NBBNRKQR", 
    "069":"NNBBRKQR", 
    "070":"NNBRKBQR", 
    "071":"NNBRKQRB", 
    "072":"NBNRBKQR", 
    "073":"NNRBBKQR", 
    "074":"NNRKBBQR", 
    "075":"NNRKBQRB", 
    "076":"NBNRKQBR", 
    "077":"NNRBKQBR", 
    "078":"NNRKQBBR", 
    "079":"NNRKQRBB", 
    "080":"BBNNRKRQ", 
    "081":"BNNBRKRQ", 
    "082":"BNNRKBRQ", 
    "083":"BNNRKRQB", 
    "084":"NBBNRKRQ", 
    "085":"NNBBRKRQ", 
    "086":"NNBRKBRQ", 
    "087":"NNBRKRQB", 
    "088":"NBNRBKRQ", 
    "089":"NNRBBKRQ", 
    "090":"NNRKBBRQ", 
    "091":"NNRKBRQB", 
    "092":"NBNRKRBQ", 
    "093":"NNRBKRBQ", 
    "094":"NNRKRBBQ", 
    "095":"NNRKRQBB", 
    "096":"BBQNRNKR", 
    "097":"BQNBRNKR", 
    "098":"BQNRNBKR", 
    "099":"BQNRNKRB", 
    "100":"QBBNRNKR", 
    "101":"QNBBRNKR", 
    "102":"QNBRNBKR", 
    "103":"QNBRNKRB", 
    "104":"QBNRBNKR", 
    "105":"QNRBBNKR", 
    "106":"QNRNBBKR", 
    "107":"QNRNBKRB", 
    "108":"QBNRNKBR", 
    "109":"QNRBNKBR", 
    "110":"QNRNKBBR", 
    "111":"QNRNKRBB", 
    "112":"BBNQRNKR", 
    "113":"BNQBRNKR", 
    "114":"BNQRNBKR", 
    "115":"BNQRNKRB", 
    "116":"NBBQRNKR", 
    "117":"NQBBRNKR", 
    "118":"NQBRNBKR", 
    "119":"NQBRNKRB", 
    "120":"NBQRBNKR", 
    "121":"NQRBBNKR", 
    "122":"NQRNBBKR", 
    "123":"NQRNBKRB", 
    "124":"NBQRNKBR", 
    "125":"NQRBNKBR", 
    "126":"NQRNKBBR", 
    "127":"NQRNKRBB", 
    "128":"BBNRQNKR", 
    "129":"BNRBQNKR", 
    "130":"BNRQNBKR", 
    "131":"BNRQNKRB", 
    "132":"NBBRQNKR", 
    "133":"NRBBQNKR", 
    "134":"NRBQNBKR", 
    "135":"NRBQNKRB", 
    "136":"NBRQBNKR", 
    "137":"NRQBBNKR", 
    "138":"NRQNBBKR", 
    "139":"NRQNBKRB", 
    "140":"NBRQNKBR", 
    "141":"NRQBNKBR", 
    "142":"NRQNKBBR", 
    "143":"NRQNKRBB", 
    "144":"BBNRNQKR", 
    "145":"BNRBNQKR", 
    "146":"BNRNQBKR", 
    "147":"BNRNQKRB", 
    "148":"NBBRNQKR", 
    "149":"NRBBNQKR", 
    "150":"NRBNQBKR", 
    "151":"NRBNQKRB", 
    "152":"NBRNBQKR", 
    "153":"NRNBBQKR", 
    "154":"NRNQBBKR", 
    "155":"NRNQBKRB", 
    "156":"NBRNQKBR", 
    "157":"NRNBQKBR", 
    "158":"NRNQKBBR", 
    "159":"NRNQKRBB", 
    "160":"BBNRNKQR", 
    "161":"BNRBNKQR", 
    "162":"BNRNKBQR", 
    "163":"BNRNKQRB", 
    "164":"NBBRNKQR", 
    "165":"NRBBNKQR", 
    "166":"NRBNKBQR", 
    "167":"NRBNKQRB", 
    "168":"NBRNBKQR", 
    "169":"NRNBBKQR", 
    "170":"NRNKBBQR", 
    "171":"NRNKBQRB", 
    "172":"NBRNKQBR", 
    "173":"NRNBKQBR", 
    "174":"NRNKQBBR", 
    "175":"NRNKQRBB", 
    "176":"BBNRNKRQ", 
    "177":"BNRBNKRQ", 
    "178":"BNRNKBRQ", 
    "179":"BNRNKRQB", 
    "180":"NBBRNKRQ", 
    "181":"NRBBNKRQ", 
    "182":"NRBNKBRQ", 
    "183":"NRBNKRQB", 
    "184":"NBRNBKRQ", 
    "185":"NRNBBKRQ", 
    "186":"NRNKBBRQ", 
    "187":"NRNKBRQB", 
    "188":"NBRNKRBQ", 
    "189":"NRNBKRBQ", 
    "190":"NRNKRBBQ", 
    "191":"NRNKRQBB", 
    "192":"BBQNRKNR", 
    "193":"BQNBRKNR", 
    "194":"BQNRKBNR", 
    "195":"BQNRKNRB", 
    "196":"QBBNRKNR", 
    "197":"QNBBRKNR", 
    "198":"QNBRKBNR", 
    "199":"QNBRKNRB", 
    "200":"QBNRBKNR", 
    "201":"QNRBBKNR", 
    "202":"QNRKBBNR", 
    "203":"QNRKBNRB", 
    "204":"QBNRKNBR", 
    "205":"QNRBKNBR", 
    "206":"QNRKNBBR", 
    "207":"QNRKNRBB", 
    "208":"BBNQRKNR", 
    "209":"BNQBRKNR", 
    "210":"BNQRKBNR", 
    "211":"BNQRKNRB", 
    "212":"NBBQRKNR", 
    "213":"NQBBRKNR", 
    "214":"NQBRKBNR", 
    "215":"NQBRKNRB", 
    "216":"NBQRBKNR", 
    "217":"NQRBBKNR", 
    "218":"NQRKBBNR", 
    "219":"NQRKBNRB", 
    "220":"NBQRKNBR", 
    "221":"NQRBKNBR", 
    "222":"NQRKNBBR", 
    "223":"NQRKNRBB", 
    "224":"BBNRQKNR", 
    "225":"BNRBQKNR", 
    "226":"BNRQKBNR", 
    "227":"BNRQKNRB", 
    "228":"NBBRQKNR", 
    "229":"NRBBQKNR", 
    "230":"NRBQKBNR", 
    "231":"NRBQKNRB", 
    "232":"NBRQBKNR", 
    "233":"NRQBBKNR", 
    "234":"NRQKBBNR", 
    "235":"NRQKBNRB", 
    "236":"NBRQKNBR", 
    "237":"NRQBKNBR", 
    "238":"NRQKNBBR", 
    "239":"NRQKNRBB", 
    "240":"BBNRKQNR", 
    "241":"BNRBKQNR", 
    "242":"BNRKQBNR", 
    "243":"BNRKQNRB", 
    "244":"NBBRKQNR", 
    "245":"NRBBKQNR", 
    "246":"NRBKQBNR", 
    "247":"NRBKQNRB", 
    "248":"NBRKBQNR", 
    "249":"NRKBBQNR", 
    "250":"NRKQBBNR", 
    "251":"NRKQBNRB", 
    "252":"NBRKQNBR", 
    "253":"NRKBQNBR", 
    "254":"NRKQNBBR", 
    "255":"NRKQNRBB", 
    "256":"BBNRKNQR", 
    "257":"BNRBKNQR", 
    "258":"BNRKNBQR", 
    "259":"BNRKNQRB", 
    "260":"NBBRKNQR", 
    "261":"NRBBKNQR", 
    "262":"NRBKNBQR", 
    "263":"NRBKNQRB", 
    "264":"NBRKBNQR", 
    "265":"NRKBBNQR", 
    "266":"NRKNBBQR", 
    "267":"NRKNBQRB", 
    "268":"NBRKNQBR", 
    "269":"NRKBNQBR", 
    "270":"NRKNQBBR", 
    "271":"NRKNQRBB", 
    "272":"BBNRKNRQ", 
    "273":"BNRBKNRQ", 
    "274":"BNRKNBRQ", 
    "275":"BNRKNRQB", 
    "276":"NBBRKNRQ", 
    "277":"NRBBKNRQ", 
    "278":"NRBKNBRQ", 
    "279":"NRBKNRQB", 
    "280":"NBRKBNRQ", 
    "281":"NRKBBNRQ", 
    "282":"NRKNBBRQ", 
    "283":"NRKNBRQB", 
    "284":"NBRKNRBQ", 
    "285":"NRKBNRBQ", 
    "286":"NRKNRBBQ", 
    "287":"NRKNRQBB", 
    "288":"BBQNRKRN", 
    "289":"BQNBRKRN", 
    "290":"BQNRKBRN", 
    "291":"BQNRKRNB", 
    "292":"QBBNRKRN", 
    "293":"QNBBRKRN", 
    "294":"QNBRKBRN", 
    "295":"QNBRKRNB", 
    "296":"QBNRBKRN", 
    "297":"QNRBBKRN", 
    "298":"QNRKBBRN", 
    "299":"QNRKBRNB", 
    "300":"QBNRKRBN", 
    "301":"QNRBKRBN", 
    "302":"QNRKRBBN", 
    "303":"QNRKRNBB", 
    "304":"BBNQRKRN", 
    "305":"BNQBRKRN", 
    "306":"BNQRKBRN", 
    "307":"BNQRKRNB", 
    "308":"NBBQRKRN", 
    "309":"NQBBRKRN", 
    "310":"NQBRKBRN", 
    "311":"NQBRKRNB", 
    "312":"NBQRBKRN", 
    "313":"NQRBBKRN", 
    "314":"NQRKBBRN", 
    "315":"NQRKBRNB", 
    "316":"NBQRKRBN", 
    "317":"NQRBKRBN", 
    "318":"NQRKRBBN", 
    "319":"NQRKRNBB", 
    "320":"BBNRQKRN", 
    "321":"BNRBQKRN", 
    "322":"BNRQKBRN", 
    "323":"BNRQKRNB", 
    "324":"NBBRQKRN", 
    "325":"NRBBQKRN", 
    "326":"NRBQKBRN", 
    "327":"NRBQKRNB", 
    "328":"NBRQBKRN", 
    "329":"NRQBBKRN", 
    "330":"NRQKBBRN", 
    "331":"NRQKBRNB", 
    "332":"NBRQKRBN", 
    "333":"NRQBKRBN", 
    "334":"NRQKRBBN", 
    "335":"NRQKRNBB", 
    "336":"BBNRKQRN", 
    "337":"BNRBKQRN", 
    "338":"BNRKQBRN", 
    "339":"BNRKQRNB", 
    "340":"NBBRKQRN", 
    "341":"NRBBKQRN", 
    "342":"NRBKQBRN", 
    "343":"NRBKQRNB", 
    "344":"NBRKBQRN", 
    "345":"NRKBBQRN", 
    "346":"NRKQBBRN", 
    "347":"NRKQBRNB", 
    "348":"NBRKQRBN", 
    "349":"NRKBQRBN", 
    "350":"NRKQRBBN", 
    "351":"NRKQRNBB", 
    "352":"BBNRKRQN", 
    "353":"BNRBKRQN", 
    "354":"BNRKRBQN", 
    "355":"BNRKRQNB", 
    "356":"NBBRKRQN", 
    "357":"NRBBKRQN", 
    "358":"NRBKRBQN", 
    "359":"NRBKRQNB", 
    "360":"NBRKBRQN", 
    "361":"NRKBBRQN", 
    "362":"NRKRBBQN", 
    "363":"NRKRBQNB", 
    "364":"NBRKRQBN", 
    "365":"NRKBRQBN", 
    "366":"NRKRQBBN", 
    "367":"NRKRQNBB", 
    "368":"BBNRKRNQ", 
    "369":"BNRBKRNQ", 
    "370":"BNRKRBNQ", 
    "371":"BNRKRNQB", 
    "372":"NBBRKRNQ", 
    "373":"NRBBKRNQ", 
    "374":"NRBKRBNQ", 
    "375":"NRBKRNQB", 
    "376":"NBRKBRNQ", 
    "377":"NRKBBRNQ", 
    "378":"NRKRBBNQ", 
    "379":"NRKRBNQB", 
    "380":"NBRKRNBQ", 
    "381":"NRKBRNBQ", 
    "382":"NRKRNBBQ", 
    "383":"NRKRNQBB", 
    "384":"BBQRNNKR", 
    "385":"BQRBNNKR", 
    "386":"BQRNNBKR", 
    "387":"BQRNNKRB", 
    "388":"QBBRNNKR", 
    "389":"QRBBNNKR", 
    "390":"QRBNNBKR", 
    "391":"QRBNNKRB", 
    "392":"QBRNBNKR", 
    "393":"QRNBBNKR", 
    "394":"QRNNBBKR", 
    "395":"QRNNBKRB", 
    "396":"QBRNNKBR", 
    "397":"QRNBNKBR", 
    "398":"QRNNKBBR", 
    "399":"QRNNKRBB", 
    "400":"BBRQNNKR", 
    "401":"BRQBNNKR", 
    "402":"BRQNNBKR", 
    "403":"BRQNNKRB", 
    "404":"RBBQNNKR", 
    "405":"RQBBNNKR", 
    "406":"RQBNNBKR", 
    "407":"RQBNNKRB", 
    "408":"RBQNBNKR", 
    "409":"RQNBBNKR", 
    "410":"RQNNBBKR", 
    "411":"RQNNBKRB", 
    "412":"RBQNNKBR", 
    "413":"RQNBNKBR", 
    "414":"RQNNKBBR", 
    "415":"RQNNKRBB", 
    "416":"BBRNQNKR", 
    "417":"BRNBQNKR", 
    "418":"BRNQNBKR", 
    "419":"BRNQNKRB", 
    "420":"RBBNQNKR", 
    "421":"RNBBQNKR", 
    "422":"RNBQNBKR", 
    "423":"RNBQNKRB", 
    "424":"RBNQBNKR", 
    "425":"RNQBBNKR", 
    "426":"RNQNBBKR", 
    "427":"RNQNBKRB", 
    "428":"RBNQNKBR", 
    "429":"RNQBNKBR", 
    "430":"RNQNKBBR", 
    "431":"RNQNKRBB", 
    "432":"BBRNNQKR", 
    "433":"BRNBNQKR", 
    "434":"BRNNQBKR", 
    "435":"BRNNQKRB", 
    "436":"RBBNNQKR", 
    "437":"RNBBNQKR", 
    "438":"RNBNQBKR", 
    "439":"RNBNQKRB", 
    "440":"RBNNBQKR", 
    "441":"RNNBBQKR", 
    "442":"RNNQBBKR", 
    "443":"RNNQBKRB", 
    "444":"RBNNQKBR", 
    "445":"RNNBQKBR", 
    "446":"RNNQKBBR", 
    "447":"RNNQKRBB", 
    "448":"BBRNNKQR", 
    "449":"BRNBNKQR", 
    "450":"BRNNKBQR", 
    "451":"BRNNKQRB", 
    "452":"RBBNNKQR", 
    "453":"RNBBNKQR", 
    "454":"RNBNKBQR", 
    "455":"RNBNKQRB", 
    "456":"RBNNBKQR", 
    "457":"RNNBBKQR", 
    "458":"RNNKBBQR", 
    "459":"RNNKBQRB", 
    "460":"RBNNKQBR", 
    "461":"RNNBKQBR", 
    "462":"RNNKQBBR", 
    "463":"RNNKQRBB", 
    "464":"BBRNNKRQ", 
    "465":"BRNBNKRQ", 
    "466":"BRNNKBRQ", 
    "467":"BRNNKRQB", 
    "468":"RBBNNKRQ", 
    "469":"RNBBNKRQ", 
    "470":"RNBNKBRQ", 
    "471":"RNBNKRQB", 
    "472":"RBNNBKRQ", 
    "473":"RNNBBKRQ", 
    "474":"RNNKBBRQ", 
    "475":"RNNKBRQB", 
    "476":"RBNNKRBQ", 
    "477":"RNNBKRBQ", 
    "478":"RNNKRBBQ", 
    "479":"RNNKRQBB", 
    "480":"BBQRNKNR", 
    "481":"BQRBNKNR", 
    "482":"BQRNKBNR", 
    "483":"BQRNKNRB", 
    "484":"QBBRNKNR", 
    "485":"QRBBNKNR", 
    "486":"QRBNKBNR", 
    "487":"QRBNKNRB", 
    "488":"QBRNBKNR", 
    "489":"QRNBBKNR", 
    "490":"QRNKBBNR", 
    "491":"QRNKBNRB", 
    "492":"QBRNKNBR", 
    "493":"QRNBKNBR", 
    "494":"QRNKNBBR", 
    "495":"QRNKNRBB", 
    "496":"BBRQNKNR", 
    "497":"BRQBNKNR", 
    "498":"BRQNKBNR", 
    "499":"BRQNKNRB", 
    "500":"RBBQNKNR", 
    "501":"RQBBNKNR", 
    "502":"RQBNKBNR", 
    "503":"RQBNKNRB", 
    "504":"RBQNBKNR", 
    "505":"RQNBBKNR", 
    "506":"RQNKBBNR", 
    "507":"RQNKBNRB", 
    "508":"RBQNKNBR", 
    "509":"RQNBKNBR", 
    "510":"RQNKNBBR", 
    "511":"RQNKNRBB", 
    "512":"BBRNQKNR", 
    "513":"BRNBQKNR", 
    "514":"BRNQKBNR", 
    "515":"BRNQKNRB", 
    "516":"RBBNQKNR", 
    "517":"RNBBQKNR", 
    "518":"RNBQKBNR", 
    "519":"RNBQKNRB", 
    "520":"RBNQBKNR", 
    "521":"RNQBBKNR", 
    "522":"RNQKBBNR", 
    "523":"RNQKBNRB", 
    "524":"RBNQKNBR", 
    "525":"RNQBKNBR", 
    "526":"RNQKNBBR", 
    "527":"RNQKNRBB", 
    "528":"BBRNKQNR", 
    "529":"BRNBKQNR", 
    "530":"BRNKQBNR", 
    "531":"BRNKQNRB", 
    "532":"RBBNKQNR", 
    "533":"RNBBKQNR", 
    "534":"RNBKQBNR", 
    "535":"RNBKQNRB", 
    "536":"RBNKBQNR", 
    "537":"RNKBBQNR", 
    "538":"RNKQBBNR", 
    "539":"RNKQBNRB", 
    "540":"RBNKQNBR", 
    "541":"RNKBQNBR", 
    "542":"RNKQNBBR", 
    "543":"RNKQNRBB", 
    "544":"BBRNKNQR", 
    "545":"BRNBKNQR", 
    "546":"BRNKNBQR", 
    "547":"BRNKNQRB", 
    "548":"RBBNKNQR", 
    "549":"RNBBKNQR", 
    "550":"RNBKNBQR", 
    "551":"RNBKNQRB", 
    "552":"RBNKBNQR", 
    "553":"RNKBBNQR", 
    "554":"RNKNBBQR", 
    "555":"RNKNBQRB", 
    "556":"RBNKNQBR", 
    "557":"RNKBNQBR", 
    "558":"RNKNQBBR", 
    "559":"RNKNQRBB", 
    "560":"BBRNKNRQ", 
    "561":"BRNBKNRQ", 
    "562":"BRNKNBRQ", 
    "563":"BRNKNRQB", 
    "564":"RBBNKNRQ", 
    "565":"RNBBKNRQ", 
    "566":"RNBKNBRQ", 
    "567":"RNBKNRQB", 
    "568":"RBNKBNRQ", 
    "569":"RNKBBNRQ", 
    "570":"RNKNBBRQ", 
    "571":"RNKNBRQB", 
    "572":"RBNKNRBQ", 
    "573":"RNKBNRBQ", 
    "574":"RNKNRBBQ", 
    "575":"RNKNRQBB", 
    "576":"BBQRNKRN", 
    "577":"BQRBNKRN", 
    "578":"BQRNKBRN", 
    "579":"BQRNKRNB", 
    "580":"QBBRNKRN", 
    "581":"QRBBNKRN", 
    "582":"QRBNKBRN", 
    "583":"QRBNKRNB", 
    "584":"QBRNBKRN", 
    "585":"QRNBBKRN", 
    "586":"QRNKBBRN", 
    "587":"QRNKBRNB", 
    "588":"QBRNKRBN", 
    "589":"QRNBKRBN", 
    "590":"QRNKRBBN", 
    "591":"QRNKRNBB", 
    "592":"BBRQNKRN", 
    "593":"BRQBNKRN", 
    "594":"BRQNKBRN", 
    "595":"BRQNKRNB", 
    "596":"RBBQNKRN", 
    "597":"RQBBNKRN", 
    "598":"RQBNKBRN", 
    "599":"RQBNKRNB", 
    "600":"RBQNBKRN", 
    "601":"RQNBBKRN", 
    "602":"RQNKBBRN", 
    "603":"RQNKBRNB", 
    "604":"RBQNKRBN", 
    "605":"RQNBKRBN", 
    "606":"RQNKRBBN", 
    "607":"RQNKRNBB", 
    "608":"BBRNQKRN", 
    "609":"BRNBQKRN", 
    "610":"BRNQKBRN", 
    "611":"BRNQKRNB", 
    "612":"RBBNQKRN", 
    "613":"RNBBQKRN", 
    "614":"RNBQKBRN", 
    "615":"RNBQKRNB", 
    "616":"RBNQBKRN", 
    "617":"RNQBBKRN", 
    "618":"RNQKBBRN", 
    "619":"RNQKBRNB", 
    "620":"RBNQKRBN", 
    "621":"RNQBKRBN", 
    "622":"RNQKRBBN", 
    "623":"RNQKRNBB", 
    "624":"BBRNKQRN", 
    "625":"BRNBKQRN", 
    "626":"BRNKQBRN", 
    "627":"BRNKQRNB", 
    "628":"RBBNKQRN", 
    "629":"RNBBKQRN", 
    "630":"RNBKQBRN", 
    "631":"RNBKQRNB", 
    "632":"RBNKBQRN", 
    "633":"RNKBBQRN", 
    "634":"RNKQBBRN", 
    "635":"RNKQBRNB", 
    "636":"RBNKQRBN", 
    "637":"RNKBQRBN", 
    "638":"RNKQRBBN", 
    "639":"RNKQRNBB", 
    "640":"BBRNKRQN", 
    "641":"BRNBKRQN", 
    "642":"BRNKRBQN", 
    "643":"BRNKRQNB", 
    "644":"RBBNKRQN", 
    "645":"RNBBKRQN", 
    "646":"RNBKRBQN", 
    "647":"RNBKRQNB", 
    "648":"RBNKBRQN", 
    "649":"RNKBBRQN", 
    "650":"RNKRBBQN", 
    "651":"RNKRBQNB", 
    "652":"RBNKRQBN", 
    "653":"RNKBRQBN", 
    "654":"RNKRQBBN", 
    "655":"RNKRQNBB", 
    "656":"BBRNKRNQ", 
    "657":"BRNBKRNQ", 
    "658":"BRNKRBNQ", 
    "659":"BRNKRNQB", 
    "660":"RBBNKRNQ", 
    "661":"RNBBKRNQ", 
    "662":"RNBKRBNQ", 
    "663":"RNBKRNQB", 
    "664":"RBNKBRNQ", 
    "665":"RNKBBRNQ", 
    "666":"RNKRBBNQ", 
    "667":"RNKRBNQB", 
    "668":"RBNKRNBQ", 
    "669":"RNKBRNBQ", 
    "670":"RNKRNBBQ", 
    "671":"RNKRNQBB", 
    "672":"BBQRKNNR", 
    "673":"BQRBKNNR", 
    "674":"BQRKNBNR", 
    "675":"BQRKNNRB", 
    "676":"QBBRKNNR", 
    "677":"QRBBKNNR", 
    "678":"QRBKNBNR", 
    "679":"QRBKNNRB", 
    "680":"QBRKBNNR", 
    "681":"QRKBBNNR", 
    "682":"QRKNBBNR", 
    "683":"QRKNBNRB", 
    "684":"QBRKNNBR", 
    "685":"QRKBNNBR", 
    "686":"QRKNNBBR", 
    "687":"QRKNNRBB", 
    "688":"BBRQKNNR", 
    "689":"BRQBKNNR", 
    "690":"BRQKNBNR", 
    "691":"BRQKNNRB", 
    "692":"RBBQKNNR", 
    "693":"RQBBKNNR", 
    "694":"RQBKNBNR", 
    "695":"RQBKNNRB", 
    "696":"RBQKBNNR", 
    "697":"RQKBBNNR", 
    "698":"RQKNBBNR", 
    "699":"RQKNBNRB", 
    "700":"RBQKNNBR", 
    "701":"RQKBNNBR", 
    "702":"RQKNNBBR", 
    "703":"RQKNNRBB", 
    "704":"BBRKQNNR", 
    "705":"BRKBQNNR", 
    "706":"BRKQNBNR", 
    "707":"BRKQNNRB", 
    "708":"RBBKQNNR", 
    "709":"RKBBQNNR", 
    "710":"RKBQNBNR", 
    "711":"RKBQNNRB", 
    "712":"RBKQBNNR", 
    "713":"RKQBBNNR", 
    "714":"RKQNBBNR", 
    "715":"RKQNBNRB", 
    "716":"RBKQNNBR", 
    "717":"RKQBNNBR", 
    "718":"RKQNNBBR", 
    "719":"RKQNNRBB", 
    "720":"BBRKNQNR", 
    "721":"BRKBNQNR", 
    "722":"BRKNQBNR", 
    "723":"BRKNQNRB", 
    "724":"RBBKNQNR", 
    "725":"RKBBNQNR", 
    "726":"RKBNQBNR", 
    "727":"RKBNQNRB", 
    "728":"RBKNBQNR", 
    "729":"RKNBBQNR", 
    "730":"RKNQBBNR", 
    "731":"RKNQBNRB", 
    "732":"RBKNQNBR", 
    "733":"RKNBQNBR", 
    "734":"RKNQNBBR", 
    "735":"RKNQNRBB", 
    "736":"BBRKNNQR", 
    "737":"BRKBNNQR", 
    "738":"BRKNNBQR", 
    "739":"BRKNNQRB", 
    "740":"RBBKNNQR", 
    "741":"RKBBNNQR", 
    "742":"RKBNNBQR", 
    "743":"RKBNNQRB", 
    "744":"RBKNBNQR", 
    "745":"RKNBBNQR", 
    "746":"RKNNBBQR", 
    "747":"RKNNBQRB", 
    "748":"RBKNNQBR", 
    "749":"RKNBNQBR", 
    "750":"RKNNQBBR", 
    "751":"RKNNQRBB", 
    "752":"BBRKNNRQ", 
    "753":"BRKBNNRQ", 
    "754":"BRKNNBRQ", 
    "755":"BRKNNRQB", 
    "756":"RBBKNNRQ", 
    "757":"RKBBNNRQ", 
    "758":"RKBNNBRQ", 
    "759":"RKBNNRQB", 
    "760":"RBKNBNRQ", 
    "761":"RKNBBNRQ", 
    "762":"RKNNBBRQ", 
    "763":"RKNNBRQB", 
    "764":"RBKNNRBQ", 
    "765":"RKNBNRBQ", 
    "766":"RKNNRBBQ", 
    "767":"RKNNRQBB", 
    "768":"BBQRKNRN", 
    "769":"BQRBKNRN", 
    "770":"BQRKNBRN", 
    "771":"BQRKNRNB", 
    "772":"QBBRKNRN", 
    "773":"QRBBKNRN", 
    "774":"QRBKNBRN", 
    "775":"QRBKNRNB", 
    "776":"QBRKBNRN", 
    "777":"QRKBBNRN", 
    "778":"QRKNBBRN", 
    "779":"QRKNBRNB", 
    "780":"QBRKNRBN", 
    "781":"QRKBNRBN", 
    "782":"QRKNRBBN", 
    "783":"QRKNRNBB", 
    "784":"BBRQKNRN", 
    "785":"BRQBKNRN", 
    "786":"BRQKNBRN", 
    "787":"BRQKNRNB", 
    "788":"RBBQKNRN", 
    "789":"RQBBKNRN", 
    "790":"RQBKNBRN", 
    "791":"RQBKNRNB", 
    "792":"RBQKBNRN", 
    "793":"RQKBBNRN", 
    "794":"RQKNBBRN", 
    "795":"RQKNBRNB", 
    "796":"RBQKNRBN", 
    "797":"RQKBNRBN", 
    "798":"RQKNRBBN", 
    "799":"RQKNRNBB", 
    "800":"BBRKQNRN", 
    "801":"BRKBQNRN", 
    "802":"BRKQNBRN", 
    "803":"BRKQNRNB", 
    "804":"RBBKQNRN", 
    "805":"RKBBQNRN", 
    "806":"RKBQNBRN", 
    "807":"RKBQNRNB", 
    "808":"RBKQBNRN", 
    "809":"RKQBBNRN", 
    "810":"RKQNBBRN", 
    "811":"RKQNBRNB", 
    "812":"RBKQNRBN", 
    "813":"RKQBNRBN", 
    "814":"RKQNRBBN", 
    "815":"RKQNRNBB", 
    "816":"BBRKNQRN", 
    "817":"BRKBNQRN", 
    "818":"BRKNQBRN", 
    "819":"BRKNQRNB", 
    "820":"RBBKNQRN", 
    "821":"RKBBNQRN", 
    "822":"RKBNQBRN", 
    "823":"RKBNQRNB", 
    "824":"RBKNBQRN", 
    "825":"RKNBBQRN", 
    "826":"RKNQBBRN", 
    "827":"RKNQBRNB", 
    "828":"RBKNQRBN", 
    "829":"RKNBQRBN", 
    "830":"RKNQRBBN", 
    "831":"RKNQRNBB", 
    "832":"BBRKNRQN", 
    "833":"BRKBNRQN", 
    "834":"BRKNRBQN", 
    "835":"BRKNRQNB", 
    "836":"RBBKNRQN", 
    "837":"RKBBNRQN", 
    "838":"RKBNRBQN", 
    "839":"RKBNRQNB", 
    "840":"RBKNBRQN", 
    "841":"RKNBBRQN", 
    "842":"RKNRBBQN", 
    "843":"RKNRBQNB", 
    "844":"RBKNRQBN", 
    "845":"RKNBRQBN", 
    "846":"RKNRQBBN", 
    "847":"RKNRQNBB", 
    "848":"BBRKNRNQ", 
    "849":"BRKBNRNQ", 
    "850":"BRKNRBNQ", 
    "851":"BRKNRNQB", 
    "852":"RBBKNRNQ", 
    "853":"RKBBNRNQ", 
    "854":"RKBNRBNQ", 
    "855":"RKBNRNQB", 
    "856":"RBKNBRNQ", 
    "857":"RKNBBRNQ", 
    "858":"RKNRBBNQ", 
    "859":"RKNRBNQB", 
    "860":"RBKNRNBQ", 
    "861":"RKNBRNBQ", 
    "862":"RKNRNBBQ", 
    "863":"RKNRNQBB", 
    "864":"BBQRKRNN", 
    "865":"BQRBKRNN", 
    "866":"BQRKRBNN", 
    "867":"BQRKRNNB", 
    "868":"QBBRKRNN", 
    "869":"QRBBKRNN", 
    "870":"QRBKRBNN", 
    "871":"QRBKRNNB", 
    "872":"QBRKBRNN", 
    "873":"QRKBBRNN", 
    "874":"QRKRBBNN", 
    "875":"QRKRBNNB", 
    "876":"QBRKRNBN", 
    "877":"QRKBRNBN", 
    "878":"QRKRNBBN", 
    "879":"QRKRNNBB", 
    "880":"BBRQKRNN", 
    "881":"BRQBKRNN", 
    "882":"BRQKRBNN", 
    "883":"BRQKRNNB", 
    "884":"RBBQKRNN", 
    "885":"RQBBKRNN", 
    "886":"RQBKRBNN", 
    "887":"RQBKRNNB", 
    "888":"RBQKBRNN", 
    "889":"RQKBBRNN", 
    "890":"RQKRBBNN", 
    "891":"RQKRBNNB", 
    "892":"RBQKRNBN", 
    "893":"RQKBRNBN", 
    "894":"RQKRNBBN", 
    "895":"RQKRNNBB", 
    "896":"BBRKQRNN", 
    "897":"BRKBQRNN", 
    "898":"BRKQRBNN", 
    "899":"BRKQRNNB", 
    "900":"RBBKQRNN", 
    "901":"RKBBQRNN", 
    "902":"RKBQRBNN", 
    "903":"RKBQRNNB", 
    "904":"RBKQBRNN", 
    "905":"RKQBBRNN", 
    "906":"RKQRBBNN", 
    "907":"RKQRBNNB", 
    "908":"RBKQRNBN", 
    "909":"RKQBRNBN", 
    "910":"RKQRNBBN", 
    "911":"RKQRNNBB", 
    "912":"BBRKRQNN", 
    "913":"BRKBRQNN", 
    "914":"BRKRQBNN", 
    "915":"BRKRQNNB", 
    "916":"RBBKRQNN", 
    "917":"RKBBRQNN", 
    "918":"RKBRQBNN", 
    "919":"RKBRQNNB", 
    "920":"RBKRBQNN", 
    "921":"RKRBBQNN", 
    "922":"RKRQBBNN", 
    "923":"RKRQBNNB", 
    "924":"RBKRQNBN", 
    "925":"RKRBQNBN", 
    "926":"RKRQNBBN", 
    "927":"RKRQNNBB", 
    "928":"BBRKRNQN", 
    "929":"BRKBRNQN", 
    "930":"BRKRNBQN", 
    "931":"BRKRNQNB", 
    "932":"RBBKRNQN", 
    "933":"RKBBRNQN", 
    "934":"RKBRNBQN", 
    "935":"RKBRNQNB", 
    "936":"RBKRBNQN", 
    "937":"RKRBBNQN", 
    "938":"RKRNBBQN", 
    "939":"RKRNBQNB", 
    "940":"RBKRNQBN", 
    "941":"RKRBNQBN", 
    "942":"RKRNQBBN", 
    "943":"RKRNQNBB", 
    "944":"BBRKRNNQ", 
    "945":"BRKBRNNQ", 
    "946":"BRKRNBNQ", 
    "947":"BRKRNNQB", 
    "948":"RBBKRNNQ", 
    "949":"RKBBRNNQ", 
    "950":"RKBRNBNQ", 
    "951":"RKBRNNQB", 
    "952":"RBKRBNNQ", 
    "953":"RKRBBNNQ", 
    "954":"RKRNBBNQ", 
    "955":"RKRNBNQB", 
    "956":"RBKRNNBQ", 
    "957":"RKRBNNBQ", 
    "958":"RKRNNBBQ", 
    "959":"RKRNNQBB", 
};

// Board letters & numbers
var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
var numbers = [8, 1];

// Mapping to unicode characters ("wk" is easier to type than \u2654)
var pieces = {
    "wk" : "\u2654", // white king
    "wq" : "\u2655", // white queen, etc..
    "wr" : "\u2656",
    "wb" : "\u2657",
    "wn" : "\u2658",
    "wp" : "\u2659",
    "bk" : "\u265A",
    "bq" : "\u265B",
    "br" : "\u265C",
    "bb" : "\u265D",
    "bn" : "\u265E",
    "bp" : "\u265F"
}

// "This is 960 Position {foo}" span
var thisposline = document.getElementById("thisposline");

// Get Random Position Button
var getrandom = document.getElementById("getrandom");

// Get Specific Position Button
var getspecific = document.getElementById("getspecific");

var cleaninputform = false;

function getRandomPosition() {
    //console.log("getRandomPosition called");
    //console.log(positions);
    var positions_keys = Object.keys(positions);
    var random_key = positions_keys[Math.floor(Math.random() * positions_keys.length)];
    var random_value = positions[random_key];
    //console.log(random_key);
    console.log(random_value);
    return [random_key, random_value];
}

function getRandomPosition() {
    //console.log("getRandomPosition called");
    //console.log(positions);
    var positions_keys = Object.keys(positions);
    var random_key = positions_keys[Math.floor(Math.random() * positions_keys.length)];
    var random_value = positions[random_key];
    //console.log(random_key);
    console.log(random_value);
    return [random_key, random_value];
}

// This creates the sequence of chess characters
function drawPositions(my_position) {
    var black_pieces = "";
    var white_pieces = "";
    var my_position_string = "";
    for (var i in my_position) {
        //for (var i in my_position[1]) {
        //console.log(my_position[i]);
        my_position_string += my_position[i];
        var curr_piece = my_position[i];
        //var curr_piece = rand_pos[1][i]
        black_pieces += pieces["b" + curr_piece.toLowerCase()];
        white_pieces += pieces["w" + curr_piece.toLowerCase()];
    }
    console.log("my_position_string: " + my_position_string);
    return [black_pieces, white_pieces];
    }

// This "draws" the chess characters on the board
function drawBoardOnPage(whichpos, my_position) {
    console.log("drawBoardOnPage() called");
    console.log("drawBoardOnPage() whichpos is: " + whichpos + ", my_position is" + my_position);
    var outer_board_string = "";
    for (var k in numbers) {
        //console.log(k);
        var inner_board_string = "";
        for (var i in letters) {
            var curr_letters_numbers = letters[i] + numbers[k];
            //console.log("curr_letters_numbers: " + curr_letters_numbers);
            //console.log(letters[i] + numbers[0])
            var curr_field = document.getElementById(letters[i] + numbers[k]);
            curr_field.innerText = my_position[k][i];
            //console.log(curr_field);
            //console.log(curr_letters_numbers + " " + curr_field.innerHTML);
            inner_board_string += curr_letters_numbers + " " + curr_field.innerHTML + " ";
        }
        outer_board_string += inner_board_string;
        //console.log(outer_board_string.split(" ").length);
        if ((outer_board_string.split(" ").length - 1) === 16) {
            outer_board_string += "\n";
        }
    }
    console.log("outer_board_string is: " + outer_board_string);
    var whichposfield = document.getElementById("whichposfield");
    whichposfield.innerText = whichpos.toString();
}

// Function to check the getspecificinput input box (verify not > 959, is a number, etc)
// Also allows hitting Enter on the field to generate the position (along with hitting the button)
// function errorCheck(event) {
//     cleaninputform = false;
//     console.log("errorCheck() fired");
//     var errorout = document.getElementById("errorout");
//     errorout.innerHTML = "&nbsp;";
//     var getspecificinput = document.getElementById("getspecificinput").value;
//     console.log("getspecificinput in errorCheck() is: " + getspecificinput);
//     console.log("getspecificinput is " + getspecificinput)


//     // Check if the input number is within bounds
//     var getspecificinput_as_number = Number(getspecificinput);
//     console.log(typeof getspecificinput_as_number);
//     console.log(getspecificinput_as_number);

//     if (getspecificinput === "") {
//         console.log("value empty detected");
//         errorout.innerHTML = "A value is required";
//         return;

//     } if (getspecificinput_as_number > 959) {
//         console.log("value too big detected");
//         errorout.innerHTML = "Must be a number between 0 and 959!";
//         return;

//     } if (isNaN(getspecificinput_as_number)) {
//         console.log("NaN detected");
//         errorout.innerHTML = "Must be a number between 0 and 959!";
//         return;

//     } else {
//         console.log("else block hit");
//         cleaninputform = true;
//         console.log("cleaninputform value is: " + cleaninputform);
//         console.log("clean getspecificinput in errorCheck() is: " + getspecificinput);
//         console.log("clean getspecificinput is " + getspecificinput)
//         console.log("clean positions[getspecificinput] is " + positions[getspecificinput]);
//         if (cleaninputform === true) {
//             specificGo(event); 
//         }
//     }
// }

// Make a random Chess960 position and draw it on the board
function randomGo() {
    // Clear out the getspecificinput field if it had a value from before
    var getspecificinput = document.getElementById("getspecificinput");
    getspecificinput.value = "";

    // Clear out the erroroutput i fit had a value from before
    var errorout = document.getElementById("errorout");
    errorout.innerHTML = "&nbsp;";

    // Now get a random position
    var rand_pos = getRandomPosition();
    console.log(rand_pos);
    var drawing = drawPositions(rand_pos[1])
        drawBoardOnPage(rand_pos[0], drawing)
}

// Make a specific Chess960 position and draw it on the board
// function specificGo(event) {
//     console.log("specificGo() fired");
//     var getspecificinput = document.getElementById("getspecificinput").value;
//     // prepend values like 4 with two zeros (for 004)
//     if (getspecificinput.length === 1) {
//         console.log("its one"); 
//         getspecificinput = "00" + getspecificinput;
//     } if (getspecificinput.length === 2) {
//         console.log("its two"); 
//         getspecificinput = "0" + getspecificinput;
//     } if ((cleaninputform === true) && (getspecificinput !="")) {
//         drawBoardOnPage(getspecificinput, drawPositions(positions[getspecificinput]))
//     }
// }
