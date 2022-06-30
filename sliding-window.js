function maxVowels(s, k) {
    const vowels = new Set('aeiou');
    let vowelCount = 0;
    for (let index = 0; index < s.length; i++){
        if (vowel.has(s[index]))
        count++;

        if (index >= k && vowels.has(s[index - k]))
        count--;

        vowelCount = Math.max(count, vowelCount);
    }
    return vowelCount;
}