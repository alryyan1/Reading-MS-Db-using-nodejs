import adodb from 'node-adodb'
const cn = 'Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\CW Fusion\\Root\\dbTest.mdb;Jet OLEDB:Database Password=at;';

const connection = adodb.open(cn);

connection.query("SELECT * FROM tbTest").then((data) => {
    console.log(data);
}).catch(err => {
    console.error(JSON.stringify(err))
});