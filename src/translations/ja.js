export const ja = {
    translations: {
        values: {
            one: "一",
            two: "二",
            three: "三",
            four: "四",
            five: "五",
            six: "六",
            seven: "七",
            eight: "八",
            nine: "九",
            redFive: "赤五",
            east: "東",
            south: "南",
            west: "西",
            north: "北",
            white: "白",
            green: "發",
            red: "中",
            hidden: "hidden tile",
        },
        suits: {
            characters: "萬",
            circles: "筒",
            bamboo: "索"
        },
        shuupai: "{{value}}{{suit}}",
        winds: {
            east: "東",
            south: "南",
            west: "西",
            north: "北"
        },
        roundName: "{{wind}}{{number}}局{{repeats}}本場",
        trainer: {
            disclaimer: "Disclaimer: This trainer will train your ability to maximize your hand's efficiency in the current turn. It won't help you maximize efficiency in future turns, or to learn when it's proper to ignore efficiency, or how to build value. Playing the way this trainer suggests in every hand is not the optimal way to play mahjong, but the are hands where you want to play this way. High level players don't always play like this, but all high level players CAN play like this. Make sure to supplement this training with further reading to learn when it might not be the best line of play, and check the settings for more targeted training.",
            instructions: "打ちたいの牌をクリックしてください。",
            start: "新し手牌を始まりました： {{hand}}",
            complete: "手が聴牌になりました。おめでとう！あなたの効率は{{achieved}}/{{total}}か{{percent}}%。",
            newHandButtonLabel: "新し手牌",
            loadButtonLabel: "手牌をロード",
            roundWind: "場風:",
            seatWind: "自風:",
            doraIndicator: "ドラ表示:",
            copyHand: "手牌をコピー",
            copied: "コピーしました！",
            error: {
                load: "Error: Couldn't understand provided hand",
                wallEmpty: "Error: Not enough tiles to make a hand.",
                wallEmptyShuffle: "There aren't enough tiles left in the wall to make a new hand. Shuffling."
            },
            playerNames: {
                you: "私",
                right: "下家",
                across: "対面",
                left: "上家"
            }
        },
        history: {
            label: "Hand History",
            tenhouLinkText: "[Accepted Tiles]",
            concise: {
                discard: "　捨て牌: {{tile}}",
                acceptance: " ({{count}} tile).",
                loweredShanten: " (went back in shanten).",
                optimal: " 最高捨て牌:",
                optimalSpoiler: " {{tile}}",
                best: "　それは一番いい選択でした！",
                exceptionalNoten: " All of your winning tiles are in your hand, so you aren't tenpai yet.",
                furiten: " フリテン.",
                furitenWarning: "フリテンをきを付けてください。",
                exhausted: " There are no tiles left in the wall. Better luck next time! ",
                draw: " ツモ: {{tile}}. "
            },
            verbose: {
                discard: "You chose to discard the {{tile}}, which",
                acceptance: " results in {{count}} tile that can improve the hand.",
                loweredShanten: " increases your shanten - you are now further from ready.",
                optimal: " The most efficient tile to discard",
                optimalSpoiler: ", the {{tile}}, ",
                best: " That was the best choice!",
                exceptionalNoten: " Your hand is ready, but all of your winning tiles are in your hand. This doesn't count as ready in almost all rulesets, so you'll need to change your hand.",
                furiten: " You are in furiten. You cannot win this hand by ron, because you have a winning tile in your discards.",
                furitenWarning: " Be careful of future furiten. Some of the tiles that improve your hand are in your discards.",
                exhausted: " There are no tiles left in the wall. Better luck next time! ",
                draw: " You drew the {{tile}}. "
            }
        },
        discards: {
            label: "河",
            discardCount: "You've discarded {{count}} tile.",
            tilesLeft: "山に{{count}}枚残ります。",
        },
        settings: {
            buttonLabel: "設定",
            tilesAllowed: "Tiles Allowed:",
            characters: "萬子",
            circles: "筒子",
            bamboo: "索子",
            honors: "字牌",
            sanma: "三麻",
            redFives: "Number of Red Fives:",
            verbose: "Verbose tile names (\"one of bamboo\" vs \"1s\")",
            concise: "Concise history",
            spoilers: "Show what the best option was",
            shuffle: "Shuffle discarded tiles back into the wall after starting a new hand",
            simulate: "Simulate other players discarding tiles",
            exceptions: "Consider exception hands (Kokushi/Thirteen Orphans and Chiitoitsu/Seven Pairs)",
            minShanten: "Minimum starting hand shanten:",
            minShantenLimit: "(up to the number of allowed suits)",
            sort: "自動理牌",
            blind: "Conceal hand tiles"
        },
        stats: {
            buttonLabel: "統計",
            info: "These stats update every time you bring a hand to ready.",
            ready: "Ready Hands: {{count}} hand",
            discards: "Tiles Discarded: {{count}} tile",
            average: "Average Discards Until Ready: {{average}} discards",
            optimal: "Optimal Discards: {{count}} discard",
            optimalRate: "Optimal Discard Rate: {{percent}}% ({{achieved}}/{{total}})",
            efficiency: "Efficiency Acquired: {{count}} tile",
            possible: "Potential Efficiency Aquirable: {{count}} tile",
            overall: "Overall Efficiency: {{percent}}% ({{achieved}}/{{total}})",
            reset: "Reset Stats",
            confirmation: "Are you sure you want to reset all of your stats to zero? You cannot undo this action.",
            yes: "はい、リセットをして下さい！",
            no: "いいえ、リセットをしてないで下さい！"
        },
        credits: {
            label: "Credits",
            tilesPreLink: "Tile images combined from ",
            tilesLinkText: "riichi-mahjong-tiles by FluffyStuff on Github",
            tilesPostLink: ", licensed under the ",
            ccLinkText: "Creative Commons Attribution 4.0 International License.",
            shantenPreLink: "Shanten calculation algorithm adapted from ",
            shantenLinkText: "this C program collection.",
            shantenPostLink: "",
        },
        menu: {
            trainer: "Trainer",
            analyzer: "Analyzer",
            allLast: "All Last Trainer",
            explorer: "Explorer",
            utils: "Misc. Utils",
            language: "言語",
            defense: "ベタ降り"
        },
        allLast: {
            placements: {
                first: "一位",
                second: "二位",
                third: "三位",
                fourth: "四位"
            },
            title: "All Last Trainer",
            maxFu: "Maximum Fu",
            showDifferences: "Show Point Differences",
            loadInstructions: "Enter comma-separated scores for East, South, West, and North, in that order, to load a situation.",
            loadLabel: "Load Situation",
            newLabel: "New Random Situation",
            info: "It's currently All Last, the last hand in the match. You are in fourth. The scores are as follows:",
            escapeHeader: "Escaping Fourth",
            riichiHeader: "Riichi Declarations",
            higherHeader: "Higher Placements",
            question: "What is the minimum score you can {{action}} to get {{placement}}?",
            riichiQuestion: "If {{player}} declares riichi, what is the minimum score you can {{action}} to get {{placement}}?",
            ron: "ron {{target}} with ",
            tsumo: "tsumo",
            han: "飜",
            fu: "符",
            submit: "Submit",
            wrong: "Wrong! That score doesn't get you to {{placement}}! Highlight for the answer: ",
            tooMuch: "That score gets you to {{placement}}, but it's not the lowest possible. Highlight for the answer: ",
            correct: "Correct! That's the lowest score that gets you to {{placement}}!",
            score: "{{fu}}符{{han}}飜",
            results: "Results:",
            you: "YOU",
            error: {
                few: "Error: Not enough scores provided.",
                NaN: "Error: Could not understand the score for {{seat}}."
            }
        },
        analyzer: {
            instructions1: "Instructions:",
            instructions2: "Paste the URL for your replay into the text box.",
            instructions3: 'Then, right click the link that appears and choose "Save As" or "Save Link As".',
            instructions4: 'Finally, click "Browse..." and upload the file you saved.',
            instructions5: "Alternatively, if you have a mjlog file on your computer, you can rename it to end in .zip.",
            instructions6: "Then, upload the file contained within that zip.",
            instructions7: "You can also just upload replay XML files directly if you have a program that fetches them for you.",
            instructions8: "The disclaimer from the efficiency trainer applies here as well.",
            instructions9: "For safety ratings, higher is better. 1 is the worst, and 15 is the best.",
            URLplaceholder: "Tenhou Replay URL",
            invalidURL: "Invalid URL",
            downloadInstructions: "Right click this link and choose Save As!",
            roundSelect: "Select a Round",
            playerSelect: "Change Player",
            previousTurn: "Previous Turn",
            nextTurn: "Next Turn",
            nextIssue: "Next Issue",
            turn: "{{round}}, Turn {{turn}}",
            discards: "Tiles in your discards: {{symbols}} ({{tiles}})",
            calls: "Your Calls: {{calls}}",
            callsSeparator: ", ",
            tenhouLinkText: "[Tenhou Ukeire Analysis]",
            replayError: "Send me this replay, something broke.",
            noName: "Unknown",
            startingHand: "Your starting hand is {{hand}}. It's {{count}} tile from ready. The dora indicator is {{dora}}.",
            unknownAction: "Hey, this replay has something I don't account for. Please send me this replay so I can add it. {{debugInfo}}",
            call: "You called the {{tile}} to complete {{meld}}. ({{hand}})",
            callSameShanten: "That call didn't bring you closer to ready.",
            ryuukyoku: "The round ended in a draw.",
            playerRiichi: "You declared riichi. Ending analysis.",
            otherRiichi: "Player {{number}} declared riichi. ",
            fold: "You are still {{shanten}} tiles from ready, so you should fold.",
            probablyFold: "You are one tile from ready. You should consider folding.",
            win: "Player {{number}} won the round.",
            kandora: "The new dora indicator is the {{tile}}.",
            draw: "You drew the {{tile}}. ({{hand}})",
            chosenSafety: "The {{tile}}'s safety rating is {{rating}}. ({{- explanation}}) ",
            correctSafety: "That was the safest tile.",
            bestSafety: "Safest tile: {{tile}}, with a safety rating of {{rating}}. ({{- explanation}})",
            safetyExplanations: {
                zero: "You shouldn't see this message. Tell me if you do.",
                one: "無スジ4/5/6",
                two: "無スジ3/7",
                three: "無スジ2/8",
                four: "one-chance",
                five: "無スジ1/9",
                six: "first 字牌",
                seven: "筋3/7",
                eight: "筋2/8",
                nine: "筋4/5/6",
                ten: "second 字牌",
                eleven: "first suji 老頭牌",
                twelve: "second suji 老頭牌",
                thirteen: "third suji 老頭牌 / third 字牌",
                fourteen: "fourth suji 老頭牌 / fourth 字牌",
                fifteen: "現物"
            }
        },
        explorer: {
            warning: "Warning: Loading a hand may cause the page to hang for 5-10 seconds, or more if you have an older computer, depending on the complexity of the hand. Loading a hand will show all of the ukeire and upgrade possibilities for each discard, even ones that go back in shanten. By default, options that are strictly worse than another option won't be displayed, but you can press the button below to change that. If you only need ukeire information, tenhou.net/2/ will suffice.",
            shanten: "向聴：　聴牌までの近さを数える単位。",
            ukeire: "Ukeire: The number of tiles that reduce your shanten.",
            notableDiscards: "Show Only Notable Discards",
            allDiscards: "Show All Possible Discards",
            discardInfo: {
                discard: "Discarding the {{tile}}:",
                shanten: "{{count}}向聴",
                ukeire: "Ukeire: {{count}} ({{tiles}})",
                expand: "Show Next Shanten's Ukeire",
                draw: "Draw {{draw}}, discard {{discard}}: {{count}} ukeire",
                average: "Average: {{average}}",
                upgrades: "Tiles that increase ukeire: {{count}} ({{tiles}})",
                expandUpgrades: "Show Upgrade Results"
            }
        },
        defense: {
            instructions: "Discard the safest tile.",
            finalHands: "Final Hands:",
            hand: "{{player}}: {{hand}}",
            safetyRatings: "Safety Ratings",
            averagedSafetyRating: "Against multiple riichis, the safety ratings will be averaged together, and the highest chosen as best.",
            safetyRating: "{{rating}}: {{- explanation}}",
            riichiCount: "Number of riichis: ",
            minTurns: "Minimum turns before a riichi is declared: "
        },
        utils: {
            convertHeader: "Hand Conversion",
            convertButtonLabel: "Convert Hand",
            ascii: "ASCII:",
            emoji: "Emoji:",
            stateHeader: "Random Game State Generator",
            playerLabel: "{{seat}} Player {{you}}",
            points: "Points:",
            discards: "Discards:",
            stateButtonLabel: "Generate New State",
            info: "It's turn {{turn}} in {{round}}. You are the {{seat}} player.",
            dora: "The dora indicator is the {{tile}}."
        }
    }
}
