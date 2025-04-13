import * as alphapet from './utils.js'

export const generator = (patternLength, types) => {
    const main = () => {
        let pattern = [];
        if (types.length === 1) return (types[0].repeat(patternLength));

        const maxPerChar = Math.ceil(patternLength / types.length);

        const maxRepeats = 2;

        let attempts = 0;
        const maxAttempts = 1000;

        while (pattern.length < patternLength && attempts < maxAttempts) {
            attempts++;
            const r = Math.floor(Math.random() * types.length);
            const choice = types[r];

            const count = pattern.filter(x => x === choice).length;
            if (count >= maxPerChar) continue;

            const repeatCount = pattern.slice(-maxRepeats).filter(x => x === choice).length;
            if (repeatCount === maxRepeats) continue;

            pattern.push(choice);
        }
        return pattern
    }
    let pattern =  main();

    while (pattern.length < patternLength) {
        pattern = main()
    }

    const pass = []
    for (const pa of pattern) {
        if (pa === 's') {
            pass.push(alphapet.symbols[alphapet.randomInt(0, 31)])
        }
        if (pa === 'n') {
            pass.push(alphapet.number[alphapet.randomInt(0, 9)])
        }
        if (pa === 'u') {
            pass.push(alphapet.upper[alphapet.randomInt(0, 25)])
        }
        if (pa === 'l') {
            pass.push(alphapet.lower[alphapet.randomInt(0, 25)])
        }
    };

    return pass.join('')
}




