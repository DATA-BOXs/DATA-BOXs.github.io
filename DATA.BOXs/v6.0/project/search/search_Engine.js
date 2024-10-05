//v2,0
//import { data1 } from '../data_base/data/data1.js';
//import { data2 } from '../data_base/data/data2.js'; test 
//import { data3 } from '../data_base/data/data3.js';

import { html_data } from '../data_base/DATABOXs/html_data.js';
import { img_data } from '../data_base/DATABOXs/img_data.js';
import { video_data } from '../data_base/DATABOXs/video_data.js';
import { info_data } from '../data_base/DATABOXs/info_data.js';

// すべてのデータを一つの配列にまとめる
const data = [...html_data, ...img_data,  ...info_data, ...video_data];

//const data = [...data1, ...data2, ...data3]; test

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
    console.log('検索クエリ:', query); // デバッグ用: クエリを確認
    const results = data.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
    );
    console.log('検索結果:', results); // デバッグ用: 結果を確認
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
            li.innerHTML = `
                <strong><a href="${result.link}" target="_blank">${result.title}</a></strong><br>
                ${result.description}<br>
                <small>${result.additionalText}</small><br>
                <img src="${result.imageUrl}" alt="${result.title}" style="width:50px; height:auto;">
            `;
            ul.appendChild(li);
        });

        resultsSection.appendChild(ul);
    } else {
        resultsSection.innerHTML = '<p>検索結果が見つかりませんでした。</p>';
    }
}

