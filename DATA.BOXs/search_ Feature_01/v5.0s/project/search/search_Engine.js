import { data1 } from '../data_base/data1.js';
import { data2 } from '../data_base/data2.js';
import { data3 } from '../data_base/data3.js';
import { testdata1 } from '../data_base/.testdata1.js';// テスト用

// すべてのデータを一つの配列にまとめる
const data = [...data1, ...data2, ...data3,  ...testdata1,];

// 検索ボタンのクリックイベントリスナー
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query) {
        search(query);
    } else {
        alert('検索キーワードを入力してください。');
    }
});

// 検索関数
function search(query) {
    const results = data.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
    );
    displayResults(results);
}

// 検索結果を表示する関数
function displayResults(results) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = ''; // 以前の検索結果をクリア

    if (results.length > 0) {
        const ul = document.createElement('ul');

        results.forEach(result => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${result.title}</strong><br>${result.description}`;
            li.onclick = () => window.location.href = result.link; // リンクに飛ぶ
            ul.appendChild(li);
        });

        resultsSection.appendChild(ul);
    } else {
        resultsSection.innerHTML = '<p>検索結果が見つかりませんでした。</p>';
    }
}
