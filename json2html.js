// json2html.js

export default function json2html(data) {
 
  const columns = [...new Set(data.flatMap(Object.keys))];

    let html = `<table data-user="gujjulanarendharreddy@gmail.com">`;

    html += `<thead><tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr></thead>`;

  
  html += `<tbody>`;
  data.forEach(item => {
    html += `<tr>${columns.map(col => `<td>${item[col] ?? ''}</td>`).join('')}</tr>`;
  });
  html += `</tbody></table>`;

    return html;
}
