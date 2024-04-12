# Angular Basics

Esse projeto foi criado com o intuito de estudar os coneceitos basicos de Angular

## Sobre Components

Um componente é uma unidade de código responsável por uma única tarefa ou funcionalidade. Ele é composto por três partes principais:

* **Template**: É o código HTML que define a interface visual do componente.

* **Estilo**: É o código CSS que define o estilo visual do componente.

* **Classe**: É a classe JavaScript que define a lógica de funcionamento do componente.

Os componentes são usados para organizar e modularizar o código Angular. Eles permitem que você desenvolva aplicações mais complexas e escaláveis, mantendo o código organizado e fácil de manter.

Aqui estão alguns dos benefícios de usar componentes no Angular:

* **Reutilização**: Os componentes podem ser reutilizados em diferentes partes da aplicação. Isso ajuda a reduzir a duplicação de código e a melhorar a produtividade.

* **Testabilidade**: Os componentes podem ser testados de forma independente, o que ajuda a garantir a qualidade do código.

* **Organização**: Os componentes ajudam a organizar o código Angular, tornando-o mais fácil de entender e manter.

Alguns exemplos de componentes Angular são:

* **Componentes de formulário**: São usados para criar formulários para coletar dados do usuário.

* **Componentes de listagem**: São usados para exibir uma lista de itens.

* **Componentes de navegação**: São usados para controlar a navegação entre diferentes páginas da aplicação.

Os componentes são uma ferramenta fundamental para o desenvolvimento de aplicações Angular. Eles permitem que você desenvolva aplicações mais complexas e escaláveis, mantendo o código organizado e fácil de manter.

## Sobre Seletores Especiais

O Anguler possui 3 seletores especiais que auxiliam na hieraquia, escopo e especificação de estilos. São eles:

* **:host**: É um seletor especial que se refere ao componente que esta sendo usado. É usado para aplicar estilos diretamente ao componente em si, em vez de seus elementos filhos. É possivel definir estilos específicos para o componente raíz.

* **:host-context()**: É um seletor que permite aplicar estilos com base no contexto do componente pai. É util quando é necessario aplicar estilos com base em condições no componente pai. Por exemplo, você pode alterar a cor de fundo de um componente filho com base em um valor definido em seu componente pai.

* **::ng-deep**: É um seletor que estrapola o escopo hierarquico do componente, evite o uso desse seletor.