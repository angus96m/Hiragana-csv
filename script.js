 const csvData = `Vocab-kana,Vocab-meaning
ひとつ,one (thing)
ふたつ,two (things)
えん,yen
かね,money
これ,"this, this one"
すいようび,Wednesday
あれ,that over there
さき,"ahead, first"
ようか,"eight days, 8th of the month"
そば,"side, vicinity"
こっち,here
みぎ,right
あげる,give
ここ,here
とても,very
なな,seven
て,hand
おなか,stomach
すく,be empty
ついたち,1st of the month
にちようび,Sunday
ななつ,seven (things)
どれ,"what, which"
わたし,I
すき,"favorite, liked"
ゲーム,game
ひとり,"one, one person"
ともだち,"friend, companion"
かえる,"return, go back"
げんき,"healthy, energetic"
てんき,weather
すくない,"few, little"
はれる,"be sunny, clear up"
うえ,"up, above"
ドア,door
ひらく,open
くち,mouth
しめる,"shut, close"
じかん,"time, hour"
むいか,"six days, 6th of the month"
うしろ,"back, behind"
とおか,"ten days, 10th of the month"
ごぜん,"morning, a.m."
こんばん,"this evening, tonight"
どようび,Saturday
きんようび,Friday
つき,moon
よる,night (from sunset to sunrise)
たべる,eat`;

document.addEventListener('DOMContentLoaded', () => {
    // Parse the CSV data
    const parsedData = Papa.parse(csvData, { header: true });

    // Get references to HTML elements
    const firstLetterInput = document.getElementById('first-letter');
    const searchButton = document.getElementById('search-btn');
    const resultsContainer = document.getElementById('results');

    // Add event listener to search button
    searchButton.addEventListener('click', () => {
        const firstLetter = firstLetterInput.value.trim();
        if (firstLetter) {
            // Filter data based on first letter
            const filteredData = parsedData.data.filter(row => row['Vocab-kana'].startsWith(firstLetter));

            // Display results
            displayResults(filteredData);
        } else {
            // Clear results if input is empty
            resultsContainer.innerHTML = '';
        }
    });

    // Function to display results
    function displayResults(data) {
        resultsContainer.innerHTML = ''; // Clear previous results
        if (data.length > 0) {
            const list = document.createElement('ul');
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item['Vocab-kana']} - ${item['Vocab-meaning']}`;
                list.appendChild(listItem);
            });
            resultsContainer.appendChild(list);
        } else {
            resultsContainer.textContent = 'No matching words found.';
        }
    }
});
