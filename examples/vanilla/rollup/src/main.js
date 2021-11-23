import format from 'date-fns/format';

let now = format(new Date(), 'yyyy-MM-dd hh:mm:ss');
document.getElementById('app').innerHTML = `Rollup time: ${now}`