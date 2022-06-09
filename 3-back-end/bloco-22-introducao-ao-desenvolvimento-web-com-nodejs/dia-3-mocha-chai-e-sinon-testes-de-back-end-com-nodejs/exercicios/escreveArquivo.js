const fs = require('fs').promises;

async function escreveArquivo(nomeDoArquivo, conteúdoDoArquivo) {
  try {
    await fs.writeFile('./arquivo.txt', '#vqv conteúdo');
    return 'ok';
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`)
  }
}

module.exports = escreveArquivo;