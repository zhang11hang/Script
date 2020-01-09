var body = $response.body;
body = '\/*\n@supported 2FECC4546DBE\n*\/\n' + body;

$done(body);
