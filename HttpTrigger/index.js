const request = require("request");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        request(
            ("https://wunameaas.herokuapp.com/wuami/"+(req.query.name || req.body.name)),
            { json: true },
            (err, res, body) => {
                if (err) {
                    return console.log(err);
                }
                console.log(body.message);
                wtname = body.message;
            }
        );
        
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (wtname)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};