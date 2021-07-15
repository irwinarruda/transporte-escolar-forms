
# Front-end do Serviço de Formulários para Pesquisa em Transportes

Um serviço de formulários para pesquisas em transportes que conta com um front-end em NextJs recebendo dados do [back-end feito em PHP](https://github.com/umarley/pesquisa-transporte-escolar).

## Principais Tecnologias

* NextJs
* Styled-Components
* Unform
* Yup
* React Collapse
* SweetAlert

### Por que Nextjs?

Para um formulário que permanecerá estático, sem mudança dinâmica de informações, é interessante prezar pela velocidade que a página chegará ao usuário. Por isso, faz sentido usar o [NextJs com getStaticProps](https://nextjs.org/docs/basic-features/data-fetching) em vez de CRA.

### Por que Unform?

Como o formulário recebe dados do backend para popular as perguntas, não se faz necessário controlar os inputs através dos states por exemplo. Só é preciso ter acesso aos dados dos inputs no submit. Como o nome já diz, [Unform](https://unform.dev/) é uma lib que faz exatamente o que foi descrito, ele busca não controlar os inputs por questão de performance, e por isso decidi utilizar ela.

### Por que SweetAlert

É um padrão na maioria dos meus projetos usar o [sweetalert](https://sweetalert.js.org/guides/) para lidar com modals informando o usuário de alguma ação. Para utiliza-lo criei um hook que faz uma implementação customizada da lib.
