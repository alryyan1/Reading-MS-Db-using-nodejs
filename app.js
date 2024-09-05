import express from "express";
import adodb from "node-adodb";
import cors from "cors"
const app = express();

app.use(cors());

// const cn =  "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\CW Fusion\\Root\\dbTest.mdb;Jet OLEDB:Database Password=at;";
const cn = 'Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\xampp\\htdocs\\db\\dbTest.mdb;Jet OLEDB:Database Password=at;';

app.get("/", function (req, res) {
  const connection = adodb.open(cn);

  connection
    .query("SELECT * FROM tbTest order by testNo desc")
    .then((data) => {
      console.log(data);
      res.json(data)
    })
    .catch((err) => {
      console.error(JSON.stringify(err));
    });
 
});

app.listen(3000);
