## 1 Navegue até a raiz do projeto com o arquivo .txt;
tiemi@tiemi-G3-3590: ~$ ls
'Área de Trabalho'   Downloads   Modelos   Público   trybe-exercicios   Vídeos
 Documentos          Imagens     Música    snap      unix_tests
tiemi@tiemi-G3-3590: ~$ cd trybe-exercicios/
tiemi@tiemi-G3-3590: ~/trybe-exercicios$

## 2 Verifique se não existe nada sem "commitar" utilizando git status:
### Caso exista algo, verifique se é necessário e faça o commit , ou remova-o.
tiemi@tiemi-G3-3590: ~/trybe-exercicios$ git status
No ramo master
Arquivos não monitorados:
  (utilize "git add <arquivo>..." para incluir o que será submetido)
	trybe-skills-copia.txt

nada adicionado ao envio mas arquivos não registrados estão presentes (use "git add" to registrar)
tiemi@tiemi-G3-3590: ~/trybe-exercicios$ git add .
tiemi@tiemi-G3-3590: ~/trybe-exercicios$ ls
1-fundamentos  4-ciencia-da-computacao  trybe-skills.txt
2-front-end    README.md
3-back-end     trybe-skills-copia.txt
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git status
No ramo master
Mudanças a serem submetidas:
  (use "git restore --staged <file>..." to unstage)
	new file:   trybe-skills-copia.txt

tiemi@tiemi-G3-3590: ~/trybe-exercicios$ git commit -m "Cópia trybe-skills"
[master 888acc6] Cópia trybe-skills
 1 file changed, 5 insertions(+)
 create mode 100644 trybe-skills-copia.txt
tiemi@tiemi-G3-3590: ~/trybe-exercicios$ git status
No ramo master
nothing to commit, working tree clean

## 3 Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela;
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git branch trybe-skills-changes
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git checkout trybe-skills-changes 
Switched to branch 'trybe-skills-changes'
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git branch
  master
* trybe-skills-changes

## 4 No arquivo .txt , ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:
tiemi@tiemi-G3-3590:~/trybe-exercicios$ cat trybe-skills-copia.txt 
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
tiemi@tiemi-G3-3590:~/trybe-exercicios$ cat >> trybe-skills-copia.txt 
- HTML
- CSS
tiemi@tiemi-G3-3590:~/trybe-exercicios$ cat trybe-skills-copia.txt 
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
- HTML
- CSS

### Faça um git add nome-do-arquivo.extensao; Você pode adicionar todos os arquivos que você modificou usando git add . , mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git add trybe-skills-copia.txt 
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git status
No ramo trybe-skills-changes
Mudanças a serem submetidas:
  (use "git restore --staged <file>..." to unstage)
	modified:   trybe-skills-copia.txt


### Agora um git commit -m "Mensagem que você gostaria" ; Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, git commit -m "Adiciona nova skill" ; Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu;
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git commit -m "Atualização trybe-skills"
[trybe-skills-changes add04c0] Atualização trybe-skills
 1 file changed, 2 insertions(+)
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git status
No ramo trybe-skills-changes
nothing to commit, working tree clean

tiemi@tiemi-G3-3590:~/trybe-exercicios$ git commit --amend
hint: Waiting for your editor to close the file... 
[trybe-skills-changes d56bab8] Adiciona novas skills
 Date: Wed Nov 17 19:10:15 2021 -0300
 1 file changed, 2 insertions(+)
tiemi@tiemi-G3-3590:~/trybe-exercicios$ 
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git status
No ramo trybe-skills-changes
nothing to commit, working tree clean
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git log
commit d56bab8cfa8488e43f78c9f757bdf6f44c874196 (HEAD -> trybe-skills-changes)
Author: Tiemi Faustino <hayashipharma@gmail.com>
Date:   Wed Nov 17 19:10:15 2021 -0300

    Adiciona novas skills

commit 888acc6c615277aff3336e65c90b6d939d598d22 (master)
Author: Tiemi Faustino <hayashipharma@gmail.com>
Date:   Wed Nov 17 18:46:23 2021 -0300

    Cópia trybe-skills

commit e0ec2f6b7768221cf6fd3c2c23c6cbb8ec181c6d (origin/master)
Author: Tiemi Faustino <hayashipharma@gmail.com>
Date:   Wed Nov 17 11:15:02 2021 -0300

    README atualizado

commit 97699305f231347220d35bea69ee08a1874c57f1
Author: Tiemi Faustino <hayashipharma@gmail.com>
Date:   Wed Nov 17 11:10:58 2021 -0300

    README atualizado

commit 9b5cd2759ae2dc9c40e11cb11657e7e59ed5cba5
Author: Tiemi Faustino <hayashipharma@gmail.com>
Date:   Wed Nov 17 10:03:43 2021 -0300

    commit inicial

commit 98d0103584df6515fdf3d790c9ea5f5118a3cee4
Author: Tiemi Faustino <hayashipharma@gmail.com>
Date:   Tue Nov 16 20:56:07 2021 -0300

    Initial commit

### E por último um git push -u origin trybe-skills-changes ;
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git push -u origin trybe-skills-changes 
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 568 bytes | 284.00 KiB/s, done.
Total 5 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
remote: 
remote: Create a pull request for 'trybe-skills-changes' on GitHub by visiting:
remote:      https://github.com/tiemifaustino/trybe-exercicios/pull/new/trybe-skills-changes
remote: 
To github.com:tiemifaustino/trybe-exercicios.git
 * [new branch]      trybe-skills-changes -> trybe-skills-changes
Branch 'trybe-skills-changes' set up to track remote branch 'trybe-skills-changes' from 'origin'.

## 5 Abra um Pull Request com uma descrição detalhada: Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: "Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..." ; O merge deve ser feito apenas quando chegar no exercício 10.
Feito o Pull Request no GitHub com a mensagem : "
Adicionado no arquivo trybe-skills-copia mais dois conteúdos a serem aprendidos na Trybe."

## 6 Retorne para a branch principal, master , com o comando: git checkout master ;
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git checkout master 
Switched to branch 'master'
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git branch
* master
  trybe-skills-changes

## 7 Verifique que você está na branch master , com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git branch
* master
  trybe-skills-changes
tiemi@tiemi-G3-3590:~/trybe-exercicios$ ls
1-fundamentos  4-ciencia-da-computacao  trybe-skills.txt
2-front-end    README.md
3-back-end     trybe-skills-copia.txt
tiemi@tiemi-G3-3590:~/trybe-exercicios$ cat trybe-skills-copia.txt 
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git

## 8 Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git branch trybe-skills-updates
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git branch
* master
  trybe-skills-changes
  trybe-skills-updates
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git checkout trybe-skills-updates 
Switched to branch 'trybe-skills-updates'
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git branch
  master
  trybe-skills-changes
* trybe-skills-updates

## 9 No mesmo arquivo .txt que você modificou no passo 4 , também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos: Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉;
tiemi@tiemi-G3-3590:~/trybe-exercicios$ cat trybe-skills-copia.txt 
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
tiemi@tiemi-G3-3590:~/trybe-exercicios$ cat >> trybe-skills-copia.txt 
- JavaScript
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git branch
  master
  trybe-skills-changes
* trybe-skills-updates
tiemi@tiemi-G3-3590:~/trybe-exercicios$ cat trybe-skills-copia.txt 
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
- JavaScript

### Faça um git add nome-do-arquivo.extensao ;
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git add trybe-skills-copia.txt 
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git status
No ramo trybe-skills-updates
Mudanças a serem submetidas:
  (use "git restore --staged <file>..." to unstage)
	modified:   trybe-skills-copia.txt

### Agora um git commit -m "Mensagem que você gostaria" ;
tiemi@tiemi-G3-3590: ~ /trybe-exercicios$ git commit -m "Adicionado uma skill"
[trybe-skills-updates 80dc8b7] Adicionado uma skill
 1 file changed, 1 insertion(+)
tiemi@tiemi-G3-3590: ~ /trybe-exercicios$ git status
No ramo trybe-skills-updates
nothing to commit, working tree clean

### e por último um git push -u origin trybe-skills-updates ; Após o primeiro "push" da sua branch, você pode usar apenas o comando git push ;
tiemi@tiemi-G3-3590:~/trybe-exercicios$ git push -u origin trybe-skills-updates 
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 335 bytes | 335.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: 
remote: Create a pull request for 'trybe-skills-updates' on GitHub by visiting:
remote:      https://github.com/tiemifaustino/trybe-exercicios/pull/new/trybe-skills-updates
remote: 
To github.com:tiemifaustino/trybe-exercicios.git
 * [new branch]      trybe-skills-updates -> trybe-skills-updates
Branch 'trybe-skills-updates' set up to track remote branch 'trybe-skills-updates' from 'origin'.

### Abra um Pull Request com uma descrição amigável: O merge deve ser feito apenas quando chegar no exercício 10;
Feito o Pull Request no GitHub com a mensagem : "Foi realizada a adição de mais uma habilidade a ser aprendida durante o curso no arquivo trybe-skills-copia"

## 10 Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master , através do Pull Request :
### Primeiro, vá até a página do primeiro Pull Request (branch trybe-skills-changes ) e faça o merge clicando no botão verde "Merge pull request" ;
Feito noGitHub Pull request successfully merged and closed
You’re all set—the trybe-skills-changes branch can be safely deleted.

### Agora, vá até página do outro Pull Request (branch trybe-skills-updates ) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta;

### Você terá que resolver esse conflito antes de "mergear" o Pull Request . Clique no botão "Resolve conflicts" , escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>> , elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em "Mark as resolved" e, em seguida, em "Commit merge" ;
### Agora você deve conseguir "mergear" seu Pull Request normalmente. 😎
Apaguei as linhas com <<<<<<< e >>>>>>> e deixei a linha que estava na branch updates como uma adição à lista:
O que eu vou aprender na Trybe:
- Unix
- Bash
- Git
- JavaScript
- HTML
- CSS

Feito o merge da branch update com a master
Merge branch 'master' into trybe-skills-updates


