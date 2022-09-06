const app = require('./app')

const PORT = process.env.PORT || 3001
console.log('2- Depois é rodado o conteudo aqui do server.js');

app.listen(PORT, console.log(`API Trybecash está sendo executada na porta ${PORT}`));

console.log('3- Então nós temos que aguardar uma requisição para continuar! (log no server.js)');


